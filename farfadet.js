((a,b,c,d)=>{
  var e='';c.split('--link--').forEach((f,g)=>{e+=f+(d[g]?d[g]:'');});
  document.body.append(a);a.innerHTML='<div></div><div></div>';a.setAttribute('class','farfadet');b.textContent=e;document.head.append(b);
})(
 document.createElement('div'),
 document.createElement('style'),
 `
 .farfadet{bottom:calc(50vh - 150px);height:350px;left:20px;position:absolute;width:width:150px;}
 .farfadet div{height:350px;width:150px;}
 .farfadet div::before{background:url('--link--') no-repeat 100%;background-size:auto 15px;content:'Ads by ';display:block;font:16px Arial;padding:1px 0;position:fixed;width:114px;}
 `,[
   ''
 ]
);
