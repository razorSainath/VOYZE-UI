import{u as l,a as n,o,c as a,b as s,t as c,d as t,e as r,F as d,n as _}from"./entry.cbeb110a.js";import{e as m}from"./404-error.ef12e46a.js";import{i as u}from"./500-error.a69dbef3.js";const h={class:"my-5 pt-sm-5"},f={class:"container"},p={class:"row"},v={class:"col-md-12"},g={class:"text-center"},b={class:"row justify-content-center"},k={class:"col-sm-4"},y={class:"error-img"},w=["src"],x=["src"],C={class:"mt-4"},B=s("p",{class:"text-muted"},"It will be as simple as Occidental in fact, it will be Occidental",-1),E={__name:"error",setup(V){l();const e=n(),i=()=>{_("/dashboard")};return(D,F)=>(o(),a(d,null,[s("head",null,[s("title",null,"Error "+c(t(e).statusCode)+" | Voyze",1)]),s("div",h,[s("div",f,[s("div",p,[s("div",v,[s("div",g,[s("div",null,[s("div",b,[s("div",k,[s("div",y,[t(e).statusCode==404?(o(),a("img",{key:0,src:t(m),class:"img-fluid mx-auto d-block"},null,8,w)):r("",!0),t(e).statusCode==500?(o(),a("img",{key:1,src:t(u),class:"img-fluid mx-auto d-block"},null,8,x)):r("",!0)])])])]),s("h4",C,c(t(e).message),1),B,s("div",{class:"mt-5"},[s("a",{onClick:i,class:"btn btn-primary waves-effect waves-light",style:{"background-color":"#009dc2",border:"#009dc2"}},"Back to Dashboard")])])])])])])],64))}},z=E;export{z as default};
