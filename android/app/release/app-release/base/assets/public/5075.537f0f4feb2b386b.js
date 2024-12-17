"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(h,g,i)=>{i.r(g),i.d(g,{HomePageModule:()=>P});var p=i(177),o=i(4742),s=i(4341),c=i(70),e=i(4438);const d=[{path:"",component:(()=>{var t;class a{constructor(n){this.router=n,this.player1="",this.player2=""}ngOnInit(){const n=localStorage.getItem("player1"),r=localStorage.getItem("player2");n&&r&&(this.player1=n,this.player2=r)}startGame(){this.player1&&this.player2&&(localStorage.setItem("player1",this.player1),localStorage.setItem("player2",this.player2),this.router.navigate(["/game"],{state:{player1:this.player1,player2:this.player2}}))}isFormValid(){return this.player1.trim().length>0&&this.player2.trim().length>0}clearSavedData(){localStorage.removeItem("player1"),localStorage.removeItem("player2"),this.player1="",this.player2=""}}return(t=a).\u0275fac=function(n){return new(n||t)(e.rXU(c.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:29,vars:3,consts:[[1,"ion-no-border"],[1,"header-gradient"],[1,"ion-text-center"],[1,"ion-padding"],[1,"welcome-container"],["name","heart",1,"heart-icon"],[1,"welcome-title"],[1,"welcome-text"],[1,"form-container"],[1,"subtitle","ion-text-center"],[1,"custom-item"],["position","floating"],["placeholder","Votre pr\xe9nom",1,"custom-input",3,"ngModelChange","ngModel"],["expand","block",1,"start-button",3,"click","disabled"],["name","arrow-forward-outline","slot","end"]],template:function(n,r){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),e.EFF(3,"Couple Game"),e.k0s()()(),e.j41(4,"ion-content",3)(5,"div",4),e.nrm(6,"ion-icon",5),e.j41(7,"h2",6),e.EFF(8,"Bienvenue sur Couple Game"),e.k0s(),e.j41(9,"p",7),e.EFF(10," Pr\xeats pour une aventure \xe0 deux ? D\xe9couvrez-vous mutuellement \xe0 travers des d\xe9fis amusants et romantiques. "),e.k0s()(),e.j41(11,"div",8)(12,"h3",2),e.EFF(13,"Commencez votre voyage"),e.k0s(),e.j41(14,"p",9),e.EFF(15," Entrez vos pr\xe9noms pour personnaliser votre exp\xe9rience "),e.k0s(),e.j41(16,"ion-list")(17,"ion-item",10)(18,"ion-label",11),e.EFF(19,"Premier partenaire"),e.k0s(),e.j41(20,"ion-input",12),e.mxI("ngModelChange",function(l){return e.DH7(r.player1,l)||(r.player1=l),l}),e.k0s()(),e.j41(21,"ion-item",10)(22,"ion-label",11),e.EFF(23,"Deuxi\xe8me partenaire"),e.k0s(),e.j41(24,"ion-input",12),e.mxI("ngModelChange",function(l){return e.DH7(r.player2,l)||(r.player2=l),l}),e.k0s()()(),e.j41(25,"ion-button",13),e.bIt("click",function(){return r.startGame()}),e.j41(26,"span"),e.EFF(27,"D\xe9marrer l'aventure ensemble"),e.k0s(),e.nrm(28,"ion-icon",14),e.k0s()()()),2&n&&(e.R7$(20),e.R50("ngModel",r.player1),e.R7$(4),e.R50("ngModel",r.player2),e.R7$(),e.Y8G("disabled",!r.isFormValid()))},dependencies:[s.BC,s.vS,o.Jm,o.W9,o.eU,o.iq,o.$w,o.uz,o.he,o.nf,o.BC,o.ai,o.Gw],styles:["[_nghost-%COMP%]{--primary-color: #ff69b4;--primary-gradient: linear-gradient(135deg, #ff69b4, #ff1493);--background-color: #fff5f8;--text-color: #666}.header-gradient[_ngcontent-%COMP%]{--background: var(--primary-gradient)}.header-gradient[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{color:#fff;font-weight:600}ion-content[_ngcontent-%COMP%]{--background: var(--background-color)}.welcome-container[_ngcontent-%COMP%]{margin-bottom:2rem;text-align:center}.welcome-container[_ngcontent-%COMP%]   .heart-icon[_ngcontent-%COMP%]{font-size:3rem;color:var(--primary-color);margin:1rem 0;animation:_ngcontent-%COMP%_pulse 1.5s infinite}.welcome-container[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--primary-color);margin-bottom:.5rem}.welcome-container[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]{color:var(--text-color);line-height:1.6;padding:0 1rem}.form-container[_ngcontent-%COMP%]{background:#fff;border-radius:15px;padding:1.5rem;margin:1rem 0;box-shadow:0 4px 15px #0000000d}.form-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--primary-color);margin-top:0}.form-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:var(--text-color);font-size:.9rem;margin-bottom:1.5rem}.custom-item[_ngcontent-%COMP%]{--padding-start: 0;--background: transparent;--border-color: transparent;margin-bottom:1rem}.custom-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--text-color)}.custom-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--padding-start: 1rem;--background: #f8f8f8;--border-radius: 10px;margin-top:1.5rem}.start-button[_ngcontent-%COMP%]{margin-top:2rem;--background: var(--primary-gradient);--border-radius: 25px;--box-shadow: 0 4px 15px rgba(255, 105, 180, .3);font-weight:500;text-transform:uppercase;letter-spacing:1px}.start-button[_ngcontent-%COMP%]:not([disabled]){animation:_ngcontent-%COMP%_subtle-bounce 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes _ngcontent-%COMP%_subtle-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-3px)}}"]}),a})()}];let f=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(d),c.iI]}),a})(),P=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.MD,s.YN,o.bv,f]}),a})()}}]);