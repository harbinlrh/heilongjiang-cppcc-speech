import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';

const MIME = {'.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document','.pdf':'application/pdf','.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','.pptx':'application/vnd.openxmlformats-officedocument.presentationml.presentation','.zip':'application/zip','.txt':'text/plain','.jpg':'image/jpeg','.png':'image/png'};
export function plan(entries, opts={}) {
  const budget=opts.budget??180000;
  if(!Number.isSafeInteger(budget)||budget<=0) throw Error('Invalid budget');
  if(!entries.length) throw Error('No attachments');
  const seen=new Set();
  const files=entries.map(e=>{
    if(!path.isAbsolute(e.path)) throw Error('Use absolute paths');
    const p=fs.realpathSync(e.path);
    if(seen.has(p)) throw Error('Duplicate attachment');
    seen.add(p);
    if(!fs.statSync(p).isFile()) throw Error('Not a file');
    const bytes=fs.readFileSync(p);
    if(!bytes.length) throw Error('Empty attachment');
    const sha256=crypto.createHash('sha256').update(bytes).digest('hex');
    if(e.sha256 && e.sha256!==sha256) throw Error('File changed: '+e.path);
    const mime_type=MIME[path.extname(e.path).toLowerCase()];
    if(!mime_type) throw Error('Unknown MIME; confirm manually: '+e.path);
    return {path:e.path,filename:path.basename(e.path),size:bytes.length,sha256,mime_type,encoded:bytes.toString('base64url')};
  });
  function size(group){
    const request={from_address:opts.from??'PROFILE_REQUIRED',to:'917935736@qq.com',subject:(opts.subject??'附件交付')+'（999999/999999）',payload:{mime_type:'multipart/mixed',parts:[{mime_type:'text/plain',charset:'UTF-8',body:{content:opts.body??'请查收附件。'}},...group.map(f=>({mime_type:f.mime_type,filename:f.filename,content_disposition:'attachment',body:{base64_url_content:f.encoded}}))]},response_fields:['id','label_ids']};
    return Buffer.byteLength(JSON.stringify(request),'utf8');
  }
  const groups=[];let current=[];
  for(const f of files){
    if(size([f])>budget) throw Error('SINGLE_ATTACHMENT_OVER_BUDGET: '+f.filename);
    if(current.length && size([...current,f])>budget){groups.push(current);current=[];}
    current.push(f);
  }
  if(current.length)groups.push(current);
  return {status:'PREFLIGHT_ONLY_NOT_SENT',budget,requires_batch_confirmation:groups.length>1,batches:groups.map((g,i)=>({batch:i+1,request_bytes:size(g),attachments:g.map(({encoded,...f})=>f)}))};
}

if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href){
  try{
    const args=process.argv.slice(2),o={};let entries=[];
    for(let i=0;i<args.length;i++){
      const k=args[i];
      if(k==='--manifest') entries=JSON.parse(fs.readFileSync(args[++i],'utf8'));
      else if(k==='--files'){while(args[i+1]&&!args[i+1].startsWith('--')) entries.push({path:args[++i]});}
      else if(['--budget','--subject','--body','--from'].includes(k)){const v=args[++i];if(v===undefined)throw Error('Missing argument');o[k.slice(2)]=k==='--budget'?Number(v):v;}
      else throw Error('Unknown option: '+k);
    }
    console.log(JSON.stringify(plan(entries,o),null,2));
  }catch(e){console.error(JSON.stringify({status:'PREFLIGHT_FAILED_NOT_SENT',error:e.message}));process.exitCode=1;}
}
