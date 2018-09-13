(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{U2p9:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},o=u("zl1X"),t=u("+Xo0"),i=u("0G9f"),r=u("QkwE"),c=u("vAyd"),s=u("mrSG"),d='\n\x3c!-- This is the router outlet for full screen dialogs --\x3e\n<router-outlet name="overlay" (activate)="overlayActive = true" (deactivate)="overlayActive = false"></router-outlet>\n\n\x3c!-- This is the default router outlet for all of your default pages --\x3e\n<div [hidden]="overlayActive">\n    <router-outlet></router-outlet>\n</div>\n',h=function(l){function n(){var n=l.call(this,"full-screen-dialog")||this;return n.htmlExample=d,n}return Object(s.b)(n,l),n}(u("N+3j").a),f=a.La({encapsulation:2,styles:[],data:{}});function b(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,39,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,t.b,t.a)),a.Ma(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Na(2,0,null,0,37,"article",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["The Full Screen Dialog is an alternative to the default modal dialog."])),(l()(),a.Na(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["The Full Screen Dialog looks and feels like any other page though it is conceptually a modal dialog. This means that a full screen dialog can have any page layout. From a technical point of view, full screen dialogs are shown in a router outlet above the current page. This eliminates the loading time which usually occurs while navigating from page to page."])),(l()(),a.Na(7,0,null,null,27,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Design Guidelines"])),(l()(),a.Na(10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["A Full Screen Dialog usually contains mutliple input elements and "])),(l()(),a.Na(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Save"])),(l()(),a.fb(-1,null,[" and "])),(l()(),a.Na(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Cancel"])),(l()(),a.fb(-1,null,[" options. Place these call to action buttons on the left side of the bottom of the page. Just like you would in a regular form. Optionally the dialog can also have a Back-button. Provide a confirmation prompt if the user has already entered data and Back was selected. Note that this prompt is not required for the Cancel-button, since the user deliberately choose Cancel to discard the input."])),(l()(),a.Na(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Use when"])),(l()(),a.Na(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Use the Full Screen Dialog if:"])),(l()(),a.Na(22,0,null,null,12,"ul",[["class","list"]],null,null,null,null,null)),(l()(),a.Na(23,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["You want to display a complex input form that requires "])),(l()(),a.Na(25,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Save"])),(l()(),a.fb(-1,null,[" and "])),(l()(),a.Na(28,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Cancel"])),(l()(),a.fb(-1,null,[" options"])),(l()(),a.Na(31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["You need to show additional modal dialogs. In general you should not show another modal over a modal, but you can open a modal over a Full Screen Dialog."])),(l()(),a.Na(33,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["The dialog's content would require too much scrolling in a modal dialog. Try to avoid scrolling in modal dialogs."])),(l()(),a.Na(35,0,null,null,4,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Na(36,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Code"])),(l()(),a.Na(38,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.Ma(39,4243456,null,0,c.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,39,0,u.htmlExample)},function(l,n){l(n,0,0,!0)})}var p=a.Ja("clr-full-screen-dialog-demo-docu",h,function(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,1,"clr-full-screen-dialog-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,b,f)),a.Ma(1,49152,null,0,h,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),g=u("Ip0R"),V=u("KZfJ"),m=u("gIcY"),v=u("XPsC"),y=u("ZYCi"),N=u("JsA7");u.d(n,"FullScreenDialogDemoModuleNgFactory",function(){return w});var w=a.Ka(e,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[o.I,o.b,o.H,p]],[3,a.j],a.v]),a.Va(4608,g.q,g.p,[a.s,[2,g.F]]),a.Va(4608,V.Kb,V.Kb,[]),a.Va(4608,m.s,m.s,[]),a.Va(5120,V.Gc,V.Hc,[[3,V.Gc]]),a.Va(1073742336,g.b,g.b,[]),a.Va(1073742336,V.W,V.W,[]),a.Va(1073742336,V.Lb,V.Lb,[]),a.Va(1073742336,V.ed,V.ed,[]),a.Va(1073742336,V.P,V.P,[]),a.Va(1073742336,V.d,V.d,[]),a.Va(1073742336,V.R,V.R,[]),a.Va(1073742336,V.n,V.n,[]),a.Va(1073742336,V.kd,V.kd,[]),a.Va(1073742336,V.md,V.md,[]),a.Va(1073742336,V.I,V.I,[]),a.Va(1073742336,V.S,V.S,[]),a.Va(1073742336,m.p,m.p,[]),a.Va(1073742336,m.e,m.e,[]),a.Va(1073742336,V.Fa,V.Fa,[]),a.Va(1073742336,V.Pb,V.Pb,[]),a.Va(1073742336,V.yc,V.yc,[]),a.Va(1073742336,V.B,V.B,[]),a.Va(1073742336,V.eb,V.eb,[]),a.Va(1073742336,V.qb,V.qb,[]),a.Va(1073742336,V.s,V.s,[]),a.Va(1073742336,V.Ja,V.Ja,[]),a.Va(1073742336,V.Ea,V.Ea,[]),a.Va(1073742336,V.i,V.i,[]),a.Va(1073742336,V.j,V.j,[]),a.Va(1073742336,V.Ha,V.Ha,[]),a.Va(1073742336,V.Ma,V.Ma,[]),a.Va(1073742336,V.Ic,V.Ic,[]),a.Va(1073742336,V.jb,V.jb,[]),a.Va(1073742336,V.vb,V.vb,[]),a.Va(1073742336,V.Ca,V.Ca,[]),a.Va(1073742336,V.Xa,V.Xa,[]),a.Va(1073742336,V.ob,V.ob,[]),a.Va(1073742336,V.Pa,V.Pa,[]),a.Va(1073742336,V.zb,V.zb,[]),a.Va(1073742336,V.a,V.a,[]),a.Va(1073742336,v.a,v.a,[]),a.Va(1073742336,y.o,y.o,[[2,y.t],[2,y.l]]),a.Va(1073742336,N.a,N.a,[]),a.Va(1073742336,e,e,[]),a.Va(1024,y.j,function(){return[[{path:"",component:h}]]},[])])})}}]);