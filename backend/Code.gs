/**
 * UFRN • Receptor de respostas para planilha Google Sheets.
 * Copie este arquivo para um projeto em script.google.com.
 * Propriedades do script: SPREADSHEET_ID = ID da planilha PARTICULAR
 * e COLLECTION_ENABLED = true apenas após aprovação científica/ética.
 * Implantar como App da Web, executar como proprietário.
 */
const SHEET = "Respostas";
function settings_(){return PropertiesService.getScriptProperties()}
function sheet_(){
  const id=settings_().getProperty("SPREADSHEET_ID");
  if(!id)throw Error("SPREADSHEET_ID não configurado");
  const sh=SpreadsheetApp.openById(id).getSheetByName(SHEET);
  if(!sh)throw Error('A aba "Respostas" não existe');
  return sh;
}
function enabled_(){return settings_().getProperty("COLLECTION_ENABLED")==="true"}
function validId_(s){return typeof s==="string" && /^[a-zA-Z0-9-]{12,90}$/.test(s)}
function cleanCell_(v){
  if(Array.isArray(v))v=v.join(" | ");
  else if(v&&typeof v==="object")v=JSON.stringify(v);
  if(v===null||v===undefined)return "";
  let x=String(v).slice(0,1200);
  if(/^[\s]*[=+\-@]/.test(x))x="'"+x;
  return x;
}
function json_(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)}
function doPost(e){
  try{
    if(!enabled_())return json_({ok:false,error:"Coleta desabilitada"});
    const raw=String(e&&e.postData&&e.postData.contents||"");
    if(raw.length>60000)throw Error("Conteúdo grande demais");
    const p=JSON.parse(raw);
    if(!validId_(p.response_id)||p.consent!==true||p.source!=="ufrn-web"||!p.answers||typeof p.answers!=="object"||Array.isArray(p.answers))throw Error("Payload inválido");
    if(p.answers.tcle!=="Sim"||Number(p.answers.age)<18||p.answers.diagnosed!=="Sim")throw Error("Elegibilidade não atendida");
    const keys=Object.keys(p.answers);
    if(keys.length>150||keys.some(k=>!/^[a-z][a-z0-9_]{1,55}$/.test(k)))throw Error("Campos inválidos");
    const lock=LockService.getScriptLock();lock.waitLock(20000);
    try{
      const sh=sheet_();
      if(sh.getLastRow()>1){
        const found=sh.getRange(2,1,sh.getLastRow()-1,1).createTextFinder(p.response_id).matchEntireCell(true).findNext();
        if(found)return json_({ok:true,duplicate:true});
      }
      let head=sh.getLastColumn()?sh.getRange(1,1,1,sh.getLastColumn()).getDisplayValues()[0].filter(String):[];
      const required=["response_id","received_at","submitted_at","version","source","consent"];
      const nextKeys=required.concat(keys).filter(k=>!head.includes(k));
      if(nextKeys.length){sh.getRange(1,head.length+1,1,nextKeys.length).setValues([nextKeys]);head=head.concat(nextKeys);sh.getRange(1,1,1,head.length).setFontWeight("bold").setBackground("#DCEFFA").setFontColor("#0B4D86");sh.setFrozenRows(1)}
      const meta={response_id:p.response_id,received_at:new Date().toISOString(),submitted_at:p.submitted_at||"",version:p.version||"",source:p.source,consent:p.consent};
      const row=head.map(k=>cleanCell_(Object.prototype.hasOwnProperty.call(meta,k)?meta[k]:p.answers[k]));
      sh.appendRow(row);
      SpreadsheetApp.flush();
      return json_({ok:true});
    }finally{lock.releaseLock()}
  }catch(err){console.error("Erro ao registrar resposta: "+String(err));return json_({ok:false,error:"Não foi possível registrar a resposta"})}
}
function doGet(e){
  const id=String(e&&e.parameter&&e.parameter.receipt||"");
  const callback=String(e&&e.parameter&&e.parameter.callback||"");
  if(!/^ufrn_receipt_[a-z0-9]+$/.test(callback)||!validId_(id)){
    return ContentService.createTextOutput("/* consulta inválida */").setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  let saved=false;
  try{const sh=sheet_();if(sh.getLastRow()>1)saved=!!sh.getRange(2,1,sh.getLastRow()-1,1).createTextFinder(id).matchEntireCell(true).findNext()}catch(err){console.error(String(err))}
  return ContentService.createTextOutput(callback+"("+JSON.stringify({saved:saved})+");").setMimeType(ContentService.MimeType.JAVASCRIPT);
}