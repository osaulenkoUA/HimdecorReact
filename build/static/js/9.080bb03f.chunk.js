(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[9],{108:function(e,a,t){e.exports={form:"AddProduct_form__YWQtU",form__input:"AddProduct_form__input__3H4ut",form__label:"AddProduct_form__label__l2-wP",form__btn:"AddProduct_form__btn__AR9uw",enter:"AddProduct_enter__2vzet",enterActive:"AddProduct_enterActive__GjVVL",exit:"AddProduct_exit__MDKzL",exitActive:"AddProduct_exitActive__2FgIV"}},92:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(0),r=t.n(l),c=t(10),u=t(26),o=t(108),m=t.n(o);a.default=function(){var e=Object(l.useState)(""),a=Object(n.a)(e,2),t=a[0],o=a[1],s=Object(l.useState)(""),_=Object(n.a)(s,2),i=_[0],b=_[1],p=Object(l.useState)(""),f=Object(n.a)(p,2),v=f[0],E=f[1],d=Object(l.useState)(""),g=Object(n.a)(d,2),j=g[0],O=g[1],N=Object(l.useState)(""),h=Object(n.a)(N,2),x=h[0],w=h[1],y=Object(l.useState)(""),A=Object(n.a)(y,2),C=A[0],S=A[1],P=Object(l.useState)(""),k=Object(n.a)(P,2),U=k[0],D=k[1],L=Object(l.useState)(""),R=Object(n.a)(L,2),M=R[0],V=R[1],z=Object(l.useState)(""),F=Object(n.a)(z,2),G=F[0],I=F[1],J=Object(l.useState)(""),H=Object(n.a)(J,2),K=H[0],Q=H[1],T=Object(l.useState)(""),W=Object(n.a)(T,2),Y=W[0],q=W[1],B=Object(l.useState)(""),X=Object(n.a)(B,2),Z=X[0],$=X[1],ee=Object(l.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(l.useState)(""),re=Object(n.a)(le,2),ce=re[0],ue=re[1],oe=Object(c.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"ADD PRODUCT"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={group:t,name:i,fasovka:v,sklad:j,time:x,vutratu:C,solvent:U,vudurobit:M,vlastuvosti:G,pidgotovka:K,nanesennya:Y,urlimage:Z,buyurl:te,matchurl:ce};console.log(a),oe(u.a.addProduct(a))},className:m.a.form},r.a.createElement("select",{name:"group",onChange:function(e){return o(e.target.value)}},r.a.createElement("option",{value:"0"},"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0413\u0420\u0423\u041f\u0423:"),r.a.createElement("option",{value:"\u043a\u043b\u0435\u0439-\u043f\u0432\u0430"},"\u043a\u043b\u0435\u0439-\u043f\u0432\u0430"),r.a.createElement("option",{value:"\u0456\u043d\u0442\u0435\u0440\u0454\u0440\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"},"\u0456\u043d\u0442\u0435\u0440\u0454\u0440\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"),r.a.createElement("option",{value:"\u0444\u0430\u0441\u0430\u0434\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"},"\u0444\u0430\u0441\u0430\u0434\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"),r.a.createElement("option",{value:"\u0433\u0440\u0443\u043d\u0442\u0456\u0432\u043a\u0430"},"\u0433\u0440\u0443\u043d\u0442\u0456\u0432\u043a\u0430"),r.a.createElement("option",{value:"\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"},"\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0456-\u0444\u0430\u0440\u0431\u0438"),r.a.createElement("option",{value:"\u043b\u0430\u043a\u0438-\u0430\u043a\u0440\u0438\u043b\u043e\u0432\u0456"},"\u043b\u0430\u043a\u0438-\u0430\u043a\u0440\u0438\u043b\u043e\u0432\u0456"),r.a.createElement("option",{value:"\u0448\u043f\u0430\u0442\u043b\u0456\u0432\u043a\u0438-\u043f\u043e-\u0434\u0435\u0440\u0435\u0432\u0443"},"\u0448\u043f\u0430\u0442\u043b\u0456\u0432\u043a\u0438-\u043f\u043e-\u0434\u0435\u0440\u0435\u0432\u0443"),r.a.createElement("option",{value:"\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0456-\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0438"},"\u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0456-\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0438")),r.a.createElement("label",{className:m.a.form__label},"\u041d\u0430\u0437\u0432\u0430:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:i,onChange:function(e){return b(e.target.value)},name:"email"})),r.a.createElement("label",{className:m.a.form__label},"\u0424\u0430\u0441\u043e\u0432\u043a\u0430:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:v,onChange:function(e){return E(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0421\u043a\u043b\u0430\u0434:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:j,onChange:function(e){return O(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0427\u0430\u0441 \u0432\u0438\u0441\u0438\u0445\u0430\u043d\u043d\u044f:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:x,onChange:function(e){return w(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0412\u0438\u0442\u0440\u0430\u0442\u0438:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:C,onChange:function(e){return S(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0420\u043e\u0437\u0447\u0438\u043d\u043d\u0438\u043a:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:U,onChange:function(e){return D(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0412\u0438\u0434\u0438 \u0440\u043e\u0431\u0456\u0442:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:M,onChange:function(e){return V(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"URL IMAGE",r.a.createElement("input",{className:m.a.form__input,type:"text",value:Z,onChange:function(e){return $(e.target.value)},name:"password"})),r.a.createElement("label",{className:m.a.form__label},"\u0412\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u0456:",r.a.createElement("textarea",{onChange:function(e){return I(e.target.value)},rows:"8",cols:"85",name:"vlastuvosti"})),r.a.createElement("label",{className:m.a.form__label},"\u041d\u0430\u043d\u0435\u0441\u0435\u043d\u043d\u044f:",r.a.createElement("textarea",{onChange:function(e){return q(e.target.value)},rows:"8",cols:"85",name:"nanesennya"})),r.a.createElement("label",{className:m.a.form__label},"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430:",r.a.createElement("textarea",{onChange:function(e){return Q(e.target.value)},rows:"8",cols:"85",name:"pidgotovka"})),r.a.createElement("label",{className:m.a.form__label},"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0414\u0415 \u043a\u0443\u043f\u0438\u0442\u0438:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:te,onChange:function(e){return ne(e.target.value)},name:"buyUrl"})),r.a.createElement("label",{className:m.a.form__label},"Match URL:",r.a.createElement("input",{className:m.a.form__input,type:"text",value:ce,onChange:function(e){return ue(e.target.value)},name:"buyUrl"})),r.a.createElement("button",{type:"submit",className:m.a.form__btn},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"))))}}}]);
//# sourceMappingURL=9.080bb03f.chunk.js.map