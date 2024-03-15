import './polyfills.server.mjs';
import{a as I,b as c,c as M,d as w,g as P,i as T,j as F,l as N,m as O,o as D}from"./chunk-DOJ2YFHW.mjs";import{n as _}from"./chunk-CQJ2OH7I.mjs";import{$a as i,Ba as E,Ea as n,Fa as y,T as g,Va as s,Xa as a,Ya as f,ab as r,ba as h,bb as p,ca as v,eb as b,ec as x,gb as u,gc as S,ob as m}from"./chunk-Z3SDC37A.mjs";import"./chunk-VVCT4QZE.mjs";function L(t,e){t&1&&(i(0,"small",12),m(1," Esse campo precisa de no m\xEDnimo 4 caracteres. "),r())}function z(t,e){t&1&&(i(0,"small",12),m(1," Esse campo \xE9 obrigat\xF3rio. "),r())}function G(t,e){if(t&1&&(i(0,"div"),s(1,L,2,0,"small",11)(2,z,2,0,"small",11),r()),t&2){let l=u();n(),a("ngIf",l.formContato.controls.nome.hasError("minlength")),n(),a("ngIf",l.formContato.controls.nome.hasError("required"))}}function A(t,e){t&1&&(i(0,"small",12),m(1," Esse campo precisa de no m\xEDnimo 10 caracteres. "),r())}function R(t,e){t&1&&(i(0,"small",12),m(1," Esse campo \xE9 obrigat\xF3rio. "),r())}function V(t,e){if(t&1&&(i(0,"div"),s(1,A,2,0,"small",11)(2,R,2,0,"small",11),r()),t&2){let l=u();n(),a("ngIf",l.formContato.controls.assunto.hasError("minlength")),n(),a("ngIf",l.formContato.controls.assunto.hasError("required"))}}function k(t,e){t&1&&(i(0,"small",12),m(1," Esse campo precisa de no m\xEDnimo 11 caracteres. "),r())}function U(t,e){t&1&&(i(0,"small",12),m(1," Esse campo \xE9 obrigat\xF3rio. "),r())}function J(t,e){if(t&1&&(i(0,"div"),s(1,k,2,0,"small",11)(2,U,2,0,"small",11),r()),t&2){let l=u();n(),a("ngIf",l.formContato.controls.telefone.hasError("minlength")),n(),a("ngIf",l.formContato.controls.telefone.hasError("required"))}}function K(t,e){t&1&&(i(0,"small",12),m(1," Esse campo precisa ser um e-mail v\xE1lido. "),r())}function Q(t,e){t&1&&(i(0,"small",12),m(1," Esse campo \xE9 obrigat\xF3rio. "),r())}function H(t,e){if(t&1&&(i(0,"div"),s(1,K,2,0,"small",11)(2,Q,2,0,"small",11),r()),t&2){let l=u();n(),a("ngIf",l.formContato.controls.email.hasError("email")),n(),a("ngIf",l.formContato.controls.email.hasError("required"))}}function W(t,e){t&1&&(i(0,"small",12),m(1," Esse campo precisa de no m\xEDnimo 20 caracteres. "),r())}function X(t,e){t&1&&(i(0,"small",12),m(1," Esse campo \xE9 obrigat\xF3rio. "),r())}function Y(t,e){if(t&1&&(i(0,"div"),s(1,W,2,0,"small",11)(2,X,2,0,"small",11),r()),t&2){let l=u();n(),a("ngIf",l.formContato.controls.mensagem.hasError("minlength")),n(),a("ngIf",l.formContato.controls.mensagem.hasError("required"))}}var j=(()=>{let e=class e{constructor(C){this.fb=C,this.formContato=this.fb.group({nome:["",[c.minLength(4),c.required]],assunto:["",[c.minLength(10),c.required]],telefone:["",[c.minLength(11),c.required]],email:["",[c.email,c.required]],mensagem:["",[c.minLength(20),c.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada!"),this.formContato.reset()}};e.\u0275fac=function(d){return new(d||e)(y(O))},e.\u0275cmp=h({type:e,selectors:[["app-contato"]],decls:21,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"ngSubmit","formGroup"],["type","text","placeholder","Digite seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite seu email","formControlName","email"],["maxlength","300","placeholder","Digite a sua mensagem...","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src",E`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117359.06630160834!2d-45.863012749999996!3d-23.189506249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4bb3858cc2e7%3A0xba25a33168f8c1!2zU8OjbyBKb3PDqSBkb3MgQ2FtcG9zLCBTUA!5e0!3m2!1spt-BR!2sbr!4v1710510397577!5m2!1spt-BR!2sbr`,"width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(d,o){d&1&&(i(0,"h2",0),m(1,"Entre em contato"),r(),i(2,"section",1)(3,"form",2),b("ngSubmit",function(){return o.enviarFormulario()}),p(4,"input",3),s(5,G,3,2,"div",4),p(6,"input",5),s(7,V,3,2,"div",4),p(8,"input",6),s(9,J,3,2,"div",4),p(10,"input",7),s(11,H,3,2,"div",4),i(12,"textarea",8),m(13,"          "),r(),s(14,Y,3,2,"div",4),i(15,"button",9),m(16,"Enviar"),r()(),i(17,"address"),p(18,"iframe",10),i(19,"p"),m(20,"S\xE3o Jos\xE9 dos Campos - SP"),r()()()),d&2&&(n(3),a("formGroup",o.formContato),n(),f("valid",o.formContato.controls.nome.valid)("invalid",o.formContato.controls.nome.invalid&&o.formContato.controls.nome.touched||o.formContato.controls.nome.dirty),n(),a("ngIf",o.formContato.controls.nome.invalid&&o.formContato.controls.nome.touched||o.formContato.controls.nome.dirty),n(),f("valid",o.formContato.controls.assunto.valid)("invalid",o.formContato.controls.assunto.invalid&&o.formContato.controls.assunto.touched||o.formContato.controls.assunto.dirty),n(),a("ngIf",o.formContato.controls.assunto.invalid&&o.formContato.controls.assunto.touched||o.formContato.controls.assunto.dirty),n(),f("valid",o.formContato.controls.telefone.valid)("invalid",o.formContato.controls.telefone.invalid&&o.formContato.controls.telefone.touched||o.formContato.controls.telefone.dirty),n(),a("ngIf",o.formContato.controls.telefone.invalid&&o.formContato.controls.telefone.touched||o.formContato.controls.telefone.dirty),n(),f("valid",o.formContato.controls.email.valid)("invalid",o.formContato.controls.email.invalid&&o.formContato.controls.email.touched||o.formContato.controls.email.dirty),n(),a("ngIf",o.formContato.controls.email.invalid&&o.formContato.controls.email.touched||o.formContato.controls.email.dirty),n(),f("valid",o.formContato.controls.mensagem.valid)("invalid",o.formContato.controls.mensagem.invalid&&o.formContato.controls.mensagem.touched||o.formContato.controls.mensagem.dirty),n(2),a("ngIf",o.formContato.controls.mensagem.invalid&&o.formContato.controls.mensagem.touched||o.formContato.controls.mensagem.dirty),n(),a("disabled",o.formContato.invalid))},dependencies:[x,P,I,M,w,N,T,F],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}.error-message[_ngcontent-%COMP%]{color:red;font-weight:bolder}"]});let t=e;return t})();var Z=[{path:"",component:j}],B=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({imports:[_.forChild(Z),_]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=v({type:e}),e.\u0275inj=g({imports:[S,B,D]});let t=e;return t})();export{ft as ContatoModule};
