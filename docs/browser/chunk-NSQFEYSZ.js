import{a as T}from"./chunk-4XQGN6UT.js";import{a as R}from"./chunk-KUIS52TS.js";import{e as y,h as L,i as O,j as V,l as W,o as U,q as H,t as Q,w as G}from"./chunk-IMVODWEV.js";import"./chunk-WXI33M2S.js";import{Ba as P,Fa as c,Ga as d,V as f,W as h,Wa as w,Ya as l,_ as S,a as j,ab as r,ac as A,b as E,bb as a,cb as x,cc as M,dc as B,ea as v,fa as _,fb as k,kb as F,pb as s,qb as X,rb as p,sb as z,tb as D,ub as N,xb as b,yb as C}from"./chunk-OEXA33CF.js";var J=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:10},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xEDdeos",preco:18449.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xF3timo",preco:200,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];var q=(()=>{let e=class e{constructor(){this.produtos=J}getAll(){return this.produtos}getOne(i){return this.produtos.find(t=>t.id===i)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function ie(o,e){if(o&1&&(r(0,"div",2)(1,"a",3),x(2,"img",4),r(3,"h2",5),s(4),a(),r(5,"p",6),s(6),b(7,"currency"),a(),r(8,"p",7),s(9),a(),r(10,"button",8),s(11,"Comprar"),a()()()),o&2){let u=e.$implicit;c(),F("routerLink","/produtos/",u.id,""),c(),l("src",u.imagem,P),c(2),p(" ",u.descricao," "),c(2),p(" ",C(7,6,u.preco,"BRL")," "),c(3),p(" ",u.descricaoPreco," ")}}var Y=(()=>{let e=class e{constructor(i,t){this.produtosService=i,this.route=t}ngOnInit(){let i=this.produtosService.getAll();this.route.queryParamMap.subscribe(t=>{let n=t.get("descricao")?.toLowerCase();n?this.produtos=i.filter(m=>m.descricao.toLowerCase().includes(n)):this.produtos=i})}};e.\u0275fac=function(t){return new(t||e)(d(q),d(y))},e.\u0275cmp=v({type:e,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(t,n){t&1&&(r(0,"section",0),w(1,ie,12,9,"div",1),a()),t&2&&(c(),l("ngForOf",n.produtos))},dependencies:[A,L,M],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]});let o=e;return o})();var Z=(()=>{let e=class e{constructor(i){this.snackBar=i}notificar(i){this.snackBar.open(i,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}};e.\u0275fac=function(t){return new(t||e)(S(T))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var $=(()=>{let e=class e{constructor(i,t,n,m){this.produtosService=i,this.route=t,this.notificacaoService=n,this.carrinhoService=m,this.quantidade=1}ngOnInit(){let i=this.route.snapshot.paramMap,t=Number(i.get("id"));this.produto=this.produtosService.getOne(t)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");let i=E(j({},this.produto),{quantidade:this.quantidade});this.carrinhoService.adicionarAoCarrinho(i)}};e.\u0275fac=function(t){return new(t||e)(d(q),d(y),d(Z),d(R))},e.\u0275cmp=v({type:e,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModelChange","ngModel"],[1,"product__avaiability"],[3,"click"]],template:function(t,n){t&1&&(r(0,"section",0)(1,"div",1),x(2,"img",2),a(),r(3,"div",3)(4,"h2",4),s(5),a(),r(6,"h3",5),s(7),b(8,"currency"),a(),r(9,"p"),s(10,"Estoque dispon\xEDvel:"),a(),r(11,"label"),s(12," Quantidade: "),r(13,"input",6),N("ngModelChange",function(I){return D(n.quantidade,I)||(n.quantidade=I),I}),a(),s(14," unidade(s) "),a(),r(15,"p",7),s(16),a(),r(17,"button",8),k("click",function(){return n.adicionarAoCarrinho()}),s(18,"Adicionar ao carrinho"),a()()()),t&2&&(c(2),l("src",n.produto==null?null:n.produto.imagem,P),c(3),p(" ",n.produto==null?null:n.produto.descricao,""),c(2),X(C(8,5,n.produto==null?null:n.produto.preco,"BRL")),c(6),z("ngModel",n.quantidade),c(3),p(" ",n.produto==null?null:n.produto.quantidadeEstoque," unidade(s) "))},dependencies:[V,H,W,Q,U,M],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]});let o=e;return o})();var re=[{path:"",component:Y},{path:":id",component:$}],ee=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[O.forChild(re),O]});let o=e;return o})();var qe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=h({imports:[B,ee,G]});let o=e;return o})();export{qe as ProdutosModule};
