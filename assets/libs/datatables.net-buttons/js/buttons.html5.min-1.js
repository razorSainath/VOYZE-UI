(function(j){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(f){return j(f,window,document)}):"object"===typeof exports?module.exports=function(f,k,v,r){f||(f=window);if(!k||!k.fn.dataTable)k=require("datatables.net")(f,k).$;k.fn.dataTable.Buttons||require("datatables.net-buttons")(f,k);return j(k,f,f.document,v,r)}:j(jQuery,window,document)})(function(j,f,k,v,r,o){function x(a){for(var b="";0<=a;)b=String.fromCharCode(a%26+65)+b,a=Math.floor(a/
26)-1;return b}function A(a,b){s===o&&(s=-1===z.serializeToString((new f.DOMParser).parseFromString(B["xl/worksheets/sheet1.xml"],"text/xml")).indexOf("xmlns:r"));j.each(b,function(b,c){if(j.isPlainObject(c)){var e=a.folder(b);A(e,c)}else{if(s){var e=c.childNodes[0],g,w,i=[];for(g=e.attributes.length-1;0<=g;g--){w=e.attributes[g].nodeName;var f=e.attributes[g].nodeValue;-1!==w.indexOf(":")&&(i.push({name:w,value:f}),e.removeAttribute(w))}g=0;for(w=i.length;g<w;g++)f=c.createAttribute(i[g].name.replace(":",
"_dt_b_namespace_token_")),f.value=i[g].value,e.setAttributeNode(f)}e=z.serializeToString(c);s&&(-1===e.indexOf("<?xml")&&(e='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+e),e=e.replace(/_dt_b_namespace_token_/g,":"),e=e.replace(/xmlns:NS[\d]+="" NS[\d]+:/g,""));e=e.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");a.file(b,e)}})}function n(a,b,d){var c=a.createElement(b);d&&(d.attr&&j(c).attr(d.attr),d.children&&j.each(d.children,function(a,b){c.appendChild(b)}),null!==d.text&&d.text!==
o&&c.appendChild(a.createTextNode(d.text)));return c}function L(a,b){var d=a.header[b].length,c;a.footer&&a.footer[b].length>d&&(d=a.footer[b].length);for(var e=0,g=a.body.length;e<g;e++)if(c=a.body[e][b],c=null!==c&&c!==o?c.toString():"",-1!==c.indexOf("\n")?(c=c.split("\n"),c.sort(function(a,c){return c.length-a.length}),c=c[0].length):c=c.length,c>d&&(d=c),40<d)return 54;d*=1.35;return 6<d?d:6}var q=j.fn.dataTable;q.Buttons.pdfMake=function(a){if(!a)return r||f.pdfMake;r=a};q.Buttons.jszip=function(a){if(!a)return v||
f.JSZip;v=a};var u;var h="undefined"!==typeof self&&self||"undefined"!==typeof f&&f||this.content;if("undefined"===typeof h||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))u=void 0;else{var y=h.document.createElementNS("http://www.w3.org/1999/xhtml","a"),M="download"in y,N=/constructor/i.test(h.HTMLElement)||h.safari,C=/CriOS\/[\d]+/.test(navigator.userAgent),O=function(a){(h.setImmediate||h.setTimeout)(function(){throw a;},0)},D=function(a){setTimeout(function(){"string"===
typeof a?(h.URL||h.webkitURL||h).revokeObjectURL(a):a.remove()},4E4)},E=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob([String.fromCharCode(65279),a],{type:a.type}):a},F=function(a,b,d){d||(a=E(a));var c=this,d="application/octet-stream"===a.type,e,g=function(){for(var a=["writestart","progress","write","writeend"],a=[].concat(a),b=a.length;b--;){var d=c["on"+a[b]];if("function"===typeof d)try{d.call(c,c)}catch(e){O(e)}}};c.readyState=
c.INIT;if(M)e=(h.URL||h.webkitURL||h).createObjectURL(a),setTimeout(function(){y.href=e;y.download=b;var a=new MouseEvent("click");y.dispatchEvent(a);g();D(e);c.readyState=c.DONE});else if((C||d&&N)&&h.FileReader){var j=new FileReader;j.onloadend=function(){var a=C?j.result:j.result.replace(/^data:[^;]*;/,"data:attachment/file;");h.open(a,"_blank")||(h.location.href=a);c.readyState=c.DONE;g()};j.readAsDataURL(a);c.readyState=c.INIT}else e||(e=(h.URL||h.webkitURL||h).createObjectURL(a)),d?h.location.href=
e:h.open(e,"_blank")||(h.location.href=e),c.readyState=c.DONE,g(),D(e)},l=F.prototype;"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?u=function(a,b,d){b=b||a.name||"download";d||(a=E(a));return navigator.msSaveOrOpenBlob(a,b)}:(l.abort=function(){},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=l.onwritestart=l.onprogress=l.onwrite=l.onabort=l.onerror=l.onwriteend=null,u=function(a,b,d){return new F(a,b||a.name||"download",d)})}q.fileSave=u;var G=function(a){var b="Sheet1";a.sheetName&&
(b=a.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""));return b},H=function(a){return a.newline?a.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},I=function(a,b){for(var d=H(b),c=a.buttons.exportData(b.exportOptions),e=b.fieldBoundary,g=b.fieldSeparator,j=RegExp(e,"g"),i=b.escapeChar!==o?b.escapeChar:"\\",f=function(a){for(var c="",b=0,d=a.length;b<d;b++)0<b&&(c+=g),c+=e?e+(""+a[b]).replace(j,i+e)+e:a[b];return c},h=b.header?f(c.header)+d:"",k=b.footer&&c.footer?d+f(c.footer):"",n=[],m=0,l=c.body.length;m<
l;m++)n.push(f(c.body[m]));return{str:h+n.join(d)+k,rows:n.length}},J=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")))return!1;var a=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return a&&1<a.length&&603.1>1*a[1]?!0:!1};try{var z=new XMLSerializer,s}catch(P){}var B={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},
K=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(a){return a/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(a){return a/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},
{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^[\d]{4}\-[\d]{2}\-[\d]{2}$/,style:67,fmt:function(a){return Math.round(25569+Date.parse(a)/864E5)}}];q.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(a){return a.i18n("buttons.copy","Copy")},action:function(a,b,d,c){this.processing(!0);var e=this,a=I(b,c),g=b.buttons.exportInfo(c),f=H(c),i=a.str,d=j("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});g.title&&(i=g.title+f+f+i);g.messageTop&&(i=
g.messageTop+f+f+i);g.messageBottom&&(i=i+f+f+g.messageBottom);c.customize&&(i=c.customize(i,c,b));c=j("<textarea readonly/>").val(i).appendTo(d);if(k.queryCommandSupported("copy")){d.appendTo(b.table().container());c[0].focus();c[0].select();try{var h=k.execCommand("copy");d.remove();if(h){b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),b.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},a.rows),2E3);this.processing(!1);return}}catch(n){}}h=
j("<span>"+b.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(d);b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),h,0);c[0].focus();c[0].select();var l=j(h).closest(".dt-button-info"),o=function(){l.off("click.buttons-copy");j(k).off(".buttons-copy");b.buttons.info(!1)};l.on("click.buttons-copy",o);j(k).on("keydown.buttons-copy",function(a){27===
a.keyCode&&(o(),e.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){o();e.processing(!1)})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"};q.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return f.FileReader!==o&&f.Blob},text:function(a){return a.i18n("buttons.csv","CSV")},action:function(a,b,d,c){this.processing(!0);var a=I(b,c).str,d=b.buttons.exportInfo(c),e=c.charset;
c.customize&&(a=c.customize(a,c,b));!1!==e?(e||(e=k.characterSet||k.charset),e&&(e=";charset="+e)):e="";c.bom&&(a="﻿"+a);u(new Blob([a],{type:"text/csv"+e}),d.filename,!0);this.processing(!1)},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};q.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return f.FileReader!==o&&(v||f.JSZip)!==o&&!J()&&z},text:function(a){return a.i18n("buttons.excel",
"Excel")},action:function(a,b,d,c){this.processing(!0);var e=this,g=0,h,a=function(a){return j.parseXML(B[a])},i=a("xl/worksheets/sheet1.xml"),l=i.getElementsByTagName("sheetData")[0],a={_rels:{".rels":a("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":a("xl/_rels/workbook.xml.rels")},"workbook.xml":a("xl/workbook.xml"),"styles.xml":a("xl/styles.xml"),worksheets:{"sheet1.xml":i}},"[Content_Types].xml":a("[Content_Types].xml")},k=b.buttons.exportData(c.exportOptions),q,r,m=function(a){q=g+1;r=n(i,"row",
{attr:{r:q}});for(var b=0,d=a.length;b<d;b++){var e=x(b)+""+q,f=null;if(null===a[b]||a[b]===o||""===a[b])if(!0===c.createEmptyCells)a[b]="";else continue;var h=a[b];a[b]=j.trim(a[b]);for(var k=0,m=K.length;k<m;k++){var p=K[k];if(a[b].match&&!a[b].match(/^0\d+/)&&a[b].match(p.match)){f=a[b].replace(/[^\d\.\-]/g,"");p.fmt&&(f=p.fmt(f));f=n(i,"c",{attr:{r:e,s:p.style},children:[n(i,"v",{text:f})]});break}}f||("number"===typeof a[b]||a[b].match&&a[b].match(/^-?\d+(\.\d+)?$/)&&!a[b].match(/^0\d+/)?f=n(i,
"c",{attr:{t:"n",r:e},children:[n(i,"v",{text:a[b]})]}):(h=!h.replace?h:h.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""),f=n(i,"c",{attr:{t:"inlineStr",r:e},children:{row:n(i,"is",{children:{row:n(i,"t",{text:h,attr:{"xml:space":"preserve"}})}})}})));r.appendChild(f)}l.appendChild(r);g++};c.customizeData&&c.customizeData(k);var p=function(a,c){var b=j("mergeCells",i);b[0].appendChild(n(i,"mergeCell",{attr:{ref:"A"+a+":"+x(c)+a}}));b.attr("count",parseFloat(b.attr("count"))+1);j("row:eq("+(a-
1)+") c",i).attr("s","51")},t=b.buttons.exportInfo(c);t.title&&(m([t.title],g),p(g,k.header.length-1));t.messageTop&&(m([t.messageTop],g),p(g,k.header.length-1));c.header&&(m(k.header,g),j("row:last c",i).attr("s","2"));d=g;h=0;for(var s=k.body.length;h<s;h++)m(k.body[h],g);h=g;c.footer&&k.footer&&(m(k.footer,g),j("row:last c",i).attr("s","2"));t.messageBottom&&(m([t.messageBottom],g),p(g,k.header.length-1));m=n(i,"cols");j("worksheet",i).prepend(m);p=0;for(s=k.header.length;p<s;p++)m.appendChild(n(i,
"col",{attr:{min:p+1,max:p+1,width:L(k,p),customWidth:1}}));m=a.xl["workbook.xml"];j("sheets sheet",m).attr("name",G(c));c.autoFilter&&(j("mergeCells",i).before(n(i,"autoFilter",{attr:{ref:"A"+d+":"+x(k.header.length-1)+h}})),j("definedNames",m).append(n(m,"definedName",{attr:{name:"_xlnm._FilterDatabase",localSheetId:"0",hidden:1},text:G(c)+"!$A$"+d+":"+x(k.header.length-1)+h})));c.customize&&c.customize(a,c,b);0===j("mergeCells",i).children().length&&j("mergeCells",i).remove();b=new (v||f.JSZip);
d={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};A(b,a);b.generateAsync?b.generateAsync(d).then(function(a){u(a,t.filename);e.processing(false)}):(u(b.generate(d),t.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1,autoFilter:!1,sheetName:""};q.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return f.FileReader!==
o&&(r||f.pdfMake)},text:function(a){return a.i18n("buttons.pdf","PDF")},action:function(a,b,d,c){this.processing(!0);var d=b.buttons.exportData(c.exportOptions),a=b.buttons.exportInfo(c),e=[];c.header&&e.push(j.map(d.header,function(a){return{text:"string"===typeof a?a:a+"",style:"tableHeader"}}));for(var g=0,h=d.body.length;g<h;g++)e.push(j.map(d.body[g],function(a){if(null===a||a===o)a="";return{text:"string"===typeof a?a:a+"",style:g%2?"tableBodyEven":"tableBodyOdd"}}));c.footer&&d.footer&&e.push(j.map(d.footer,
function(a){return{text:"string"===typeof a?a:a+"",style:"tableFooter"}}));d={pageSize:c.pageSize,pageOrientation:c.orientation,content:[{table:{headerRows:1,body:e},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};a.messageTop&&d.content.unshift({text:a.messageTop,
style:"message",margin:[0,0,0,12]});a.messageBottom&&d.content.push({text:a.messageBottom,style:"message",margin:[0,0,0,12]});a.title&&d.content.unshift({text:a.title,style:"title",margin:[0,0,0,12]});c.customize&&c.customize(d,c,b);b=(r||f.pdfMake).createPdf(d);"open"===c.download&&!J()?b.open():b.download(a.filename);this.processing(!1)},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,
download:"download"};return q.Buttons});
