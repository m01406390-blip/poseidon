import{a as We,b as $e,c as Xe,d as Ye,e as Je}from"./chunk-EDBM5YMD.js";import{a as Ze,b as et,c as tt,d as nt,e as it,f as at}from"./chunk-NCEEHKF2.js";import{a as ot,b as lt}from"./chunk-H4GSOLZT.js";import{a as Ne,b as He}from"./chunk-HEN2BJVC.js";import{b as Ge}from"./chunk-WQAHQJYI.js";import{a as pe}from"./chunk-B7JLZPJB.js";import"./chunk-5H37HWJV.js";import"./chunk-ONHMJ2O5.js";import"./chunk-CFDG3WJ7.js";import{a as Oe,b as Ae,c as Qe,d as je}from"./chunk-XKOBF426.js";import{a as Be,b as Le}from"./chunk-TNVRNKFD.js";import{o as Ve}from"./chunk-WLNBAUOT.js";import{a as Ue,b as Ke}from"./chunk-GK4JZML4.js";import"./chunk-7II5Y2NH.js";import"./chunk-IUD635TB.js";import"./chunk-MEF5RBRB.js";import"./chunk-2C6UIDCR.js";import"./chunk-HO5OSSWE.js";import{a as de}from"./chunk-IKYTZVW5.js";import"./chunk-RG3ZW2NC.js";import"./chunk-GVRFSCNS.js";import"./chunk-BODZH67C.js";import"./chunk-GGQ7LRWG.js";import{c as ce,d as ue}from"./chunk-CCBKSVMU.js";import"./chunk-T375UXUO.js";import"./chunk-CLSKU77W.js";import"./chunk-X74CYKMB.js";import{c as Re}from"./chunk-FH7N6WOZ.js";import{c as le,d as L,f as R,g as O,h as A}from"./chunk-TBYF2LDC.js";import"./chunk-TRGGJUBD.js";import{Ba as J,C as Fe,Ea as Z,I as ne,K as De,b as re,c as he,e as _e,ia as se,k as qe,n as te,ra as ke,sa as Y,ta as E}from"./chunk-AOIYYANN.js";import{j as Me,k as $,n as oe,o as X,t as k,x as fe}from"./chunk-VK6R4YNE.js";import{$ as b,$a as U,Ab as D,Ac as Pe,Bb as T,Cb as M,Db as Te,Gb as I,Hb as c,Hc as B,Ib as ie,Ic as ge,Jb as V,Kb as v,Lb as Ee,Ma as d,Mb as h,Nb as _,Ob as we,Pb as Ce,Q as Se,Qb as me,R as Q,S as j,Tb as ze,Ub as g,Vb as u,W as N,Wb as ae,Xa as q,Ya as G,aa as x,ba as H,bb as m,bc as K,cc as W,db as w,dc as C,mb as f,na as P,qc as S,sb as p,tb as l,ub as r,vb as y,vc as Ie,zb as F}from"./chunk-A7JQA43H.js";import"./chunk-GAL4ENT6.js";var rt=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`;var bt=["header"],xt=["expandicon"],yt=["collapseicon"],St=["content"],Tt=["*",[["p-header"]]],Et=["*","p-header"],wt=t=>({transitionParams:t,height:"0"}),Ct=t=>({value:"hidden",params:t}),zt=t=>({transitionParams:t,height:"*"}),It=t=>({value:"visible",params:t});function Pt(t,s){if(t&1&&(H(),y(0,"svg",9)),t&2){let e=c(3);g(e.cx("toggleIcon")),f("data-pc-section","togglericon")}}function Mt(t,s){t&1&&T(0)}function qt(t,s){if(t&1&&(l(0,"span"),m(1,Mt,1,0,"ng-container",4),r()),t&2){let e=c(3);g(e.cx("toggleIcon")),f("data-pc-section","togglericon"),d(),p("ngTemplateOutlet",e.expandIconTemplate||e._expandIconTemplate)}}function Ft(t,s){if(t&1&&(F(0),m(1,Pt,1,3,"svg",7)(2,qt,2,4,"span",8),D()),t&2){let e=c(2);d(),p("ngIf",!e.expandIconTemplate&&!e._expandIconTemplate),d(),p("ngIf",e.expandIconTemplate||e._expandIconTemplate)}}function Dt(t,s){if(t&1&&(H(),y(0,"svg",11)),t&2){let e=c(3);g(e.cx("toggleIcon")),f("aria-hidden",!0)("data-pc-section","togglericon")}}function kt(t,s){t&1&&T(0)}function Vt(t,s){if(t&1&&(l(0,"span"),m(1,kt,1,0,"ng-container",4),r()),t&2){let e=c(3);g(e.cx("toggleIcon")),f("data-pc-section","togglericon"),d(),p("ngTemplateOutlet",e.collapseIconTemplate||e._collapseIconTemplate)}}function Bt(t,s){if(t&1&&(F(0),m(1,Dt,1,4,"svg",10)(2,Vt,2,4,"span",8),D()),t&2){let e=c(2);d(),p("ngIf",!e.collapseIconTemplate&&!e._collapseIconTemplate),d(),p("ngIf",e.collapseIconTemplate||e._collapseIconTemplate)}}function Lt(t,s){t&1&&T(0)}function Rt(t,s){if(t&1){let e=M();F(0),l(1,"button",5),I("click",function(n){b(e);let a=c();return x(a.toggle(n))})("keydown",function(n){b(e);let a=c();return x(a.onKeyDown(n))}),m(2,Ft,3,2,"ng-container",6)(3,Bt,3,2,"ng-container",6)(4,Lt,1,0,"ng-container",4),r(),D()}if(t&2){let e=c(),i=me(4);d(),g(e.cx("toggleButton")),f("id",e.id+"_header")("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)("aria-label",e.buttonAriaLabel),d(),p("ngIf",e.collapsed),d(),p("ngIf",!e.collapsed),d(),p("ngTemplateOutlet",i)}}function Ot(t,s){t&1&&T(0)}function At(t,s){if(t&1&&(l(0,"span"),u(1),r(),V(2,1),m(3,Ot,1,0,"ng-container",4)),t&2){let e=c();g(e.cx("legendLabel")),f("data-pc-section","legendtitle"),d(),ae(e.legend),d(2),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Qt(t,s){t&1&&T(0)}var jt=`
    ${rt}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`,Nt={root:({instance:t})=>["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable,"p-fieldset-collapsed":t.collapsed&&t.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},st=(()=>{class t extends J{name="fieldset";theme=jt;classes=Nt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var be=(()=>{class t extends Z{legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new w;onBeforeToggle=new w;onAfterToggle=new w;get id(){return se("pn_id_")}get buttonAriaLabel(){return this.legend}animating;_componentStyle=N(st);headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed}),e.preventDefault()}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"expandicon":this._expandIconTemplate=e.template;break;case"collapseicon":this._collapseIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275cmp=q({type:t,selectors:[["p-fieldset"]],contentQueries:function(i,n,a){if(i&1&&(v(a,bt,4),v(a,xt,4),v(a,yt,4),v(a,St,4),v(a,Y,4)),i&2){let o;h(o=_())&&(n.headerTemplate=o.first),h(o=_())&&(n.expandIconTemplate=o.first),h(o=_())&&(n.collapseIconTemplate=o.first),h(o=_())&&(n.contentTemplate=o.first),h(o=_())&&(n.templates=o)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",B],collapsed:[2,"collapsed","collapsed",B],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[K([st]),U],ngContentSelectors:Et,decls:9,vars:30,consts:[["legendContent",""],[3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","region"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown"],[4,"ngIf"],["data-p-icon","plus",3,"class",4,"ngIf"],[3,"class",4,"ngIf"],["data-p-icon","plus"],["data-p-icon","minus",3,"class",4,"ngIf"],["data-p-icon","minus"]],template:function(i,n){if(i&1){let a=M();ie(Tt),l(0,"fieldset",1)(1,"legend"),m(2,Rt,5,9,"ng-container",2)(3,At,4,5,"ng-template",null,0,S),r(),l(5,"div",3),I("@fieldsetContent.done",function(){return b(a),x(n.onToggleDone())}),l(6,"div"),V(7),m(8,Qt,1,0,"ng-container",4),r()()()}if(i&2){let a=me(4);g(n.cn(n.cx("root"),n.styleClass)),p("ngStyle",n.style),f("id",n.id)("data-pc-name","fieldset")("data-pc-section","root"),d(),g(n.cx("legend")),f("data-pc-section","legend"),d(),p("ngIf",n.toggleable)("ngIfElse",a),d(3),g(n.cx("contentContainer")),p("@fieldsetContent",n.collapsed?C(24,Ct,C(22,wt,n.transitionOptions)):C(28,It,C(26,zt,n.animating?n.transitionOptions:"0ms"))),f("id",n.id+"_content")("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("data-pc-section","toggleablecontent"),d(),g(n.cx("content")),f("data-pc-section","content"),d(2),p("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)}},dependencies:[k,$,X,oe,pe,de,E],encapsulation:2,data:{animation:[le("fieldsetContent",[O("hidden",R({height:"0"})),O("visible",R({height:"*"})),A("visible <=> hidden",[L("{{transitionParams}}")]),A("void => *",L(0))])]},changeDetection:0})}return t})(),dt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=j({imports:[be,E,E]})}return t})();var ct=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`;var Ut=["header"],Kt=["icons"],Wt=["content"],$t=["footer"],Xt=["headericons"],Yt=["contentWrapper"],Jt=["*",[["p-header"]],[["p-footer"]]],Zt=["*","p-header","p-footer"],en=t=>({transitionParams:t,height:"0",opacity:"0"}),tn=t=>({value:"hidden",params:t}),nn=t=>({transitionParams:t,height:"*",opacity:"1"}),an=t=>({value:"visible",params:t}),on=t=>({$implicit:t});function ln(t,s){if(t&1&&(l(0,"span"),u(1),r()),t&2){let e=c(2);g(e.cx("title")),f("id",e.id+"_header"),d(),ae(e._header)}}function rn(t,s){t&1&&T(0)}function sn(t,s){}function pn(t,s){t&1&&m(0,sn,0,0,"ng-template")}function dn(t,s){t&1&&(F(0),H(),y(1,"svg",11),D())}function cn(t,s){t&1&&(F(0),H(),y(1,"svg",12),D())}function un(t,s){if(t&1&&(F(0),m(1,dn,2,0,"ng-container",9)(2,cn,2,0,"ng-container",9),D()),t&2){let e=c(4);d(),p("ngIf",!e.collapsed),d(),p("ngIf",e.collapsed)}}function mn(t,s){}function gn(t,s){t&1&&m(0,mn,0,0,"ng-template")}function fn(t,s){if(t&1&&m(0,un,3,2,"ng-container",9)(1,gn,1,0,null,10),t&2){let e=c(3);p("ngIf",!e.headerIconsTemplate&&!e._headerIconsTemplate&&!(e.toggleButtonProps!=null&&e.toggleButtonProps.icon)),d(),p("ngTemplateOutlet",e.headerIconsTemplate||e._headerIconsTemplate)("ngTemplateOutletContext",C(3,on,e.collapsed))}}function hn(t,s){if(t&1){let e=M();l(0,"p-button",8),I("click",function(n){b(e);let a=c(2);return x(a.onIconClick(n))})("keydown",function(n){b(e);let a=c(2);return x(a.onKeyDown(n))}),m(1,fn,2,5,"ng-template",null,1,S),r()}if(t&2){let e=c(2);p("text",!0)("rounded",!0)("styleClass",e.cx("pcToggleButton"))("buttonProps",e.toggleButtonProps),f("id",e.id+"_header")("aria-label",e.buttonAriaLabel)("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)}}function _n(t,s){if(t&1){let e=M();l(0,"div",6),I("click",function(n){b(e);let a=c();return x(a.onHeaderClick(n))}),m(1,ln,2,4,"span",5),V(2,1),m(3,rn,1,0,"ng-container",4),l(4,"div"),m(5,pn,1,0,null,4)(6,hn,3,8,"p-button",7),r()()}if(t&2){let e=c();g(e.cx("header")),f("id",e.id+"-titlebar"),d(),p("ngIf",e._header),d(2),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),g(e.cx("icons")),d(),p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate),d(),p("ngIf",e.toggleable)}}function vn(t,s){t&1&&T(0)}function bn(t,s){t&1&&T(0)}function xn(t,s){if(t&1&&(l(0,"div"),V(1,2),m(2,bn,1,0,"ng-container",4),r()),t&2){let e=c();g(e.cx("footer")),d(2),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var yn=`
    ${ct}

    /* For PrimeNG */
    .p-panel-collapsed > .p-panel-content-container,
    .p-panel-content-container.ng-animating {
        overflow: hidden;
    }
`,Sn={root:({instance:t})=>["p-panel p-component",{"p-panel-toggleable":t.toggleable,"p-panel-expanded":!t.collapsed&&t.toggleable,"p-panel-collapsed":t.collapsed&&t.toggleable}],icons:({instance:t})=>["p-panel-icons",{"p-panel-icons-start":t.iconPos==="start","p-panel-icons-end":t.iconPos==="end","p-panel-icons-center":t.iconPos==="center"}],header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},ut=(()=>{class t extends J{name="panel";theme=yn;classes=Sn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var xe=(()=>{class t extends Z{toggleable;_header;collapsed;id=se("pn_id_");styleClass;iconPos="end";showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;collapsedChange=new w;onBeforeToggle=new w;onAfterToggle=new w;footerFacet;animating;headerTemplate;iconTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;get buttonAriaLabel(){return this._header}_componentStyle=N(ut);onHeaderClick(e){this.toggler==="header"&&this.toggle(e)}onIconClick(e){this.toggler==="icon"&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),this.cd.markForCheck(),e.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])').forEach(i=>{this.collapsed?i.setAttribute("tabindex","-1"):i.removeAttribute("tabindex")})}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"icons":this._iconTemplate=e.template;break;case"headericons":this._headerIconsTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275cmp=q({type:t,selectors:[["p-panel"]],contentQueries:function(i,n,a){if(i&1&&(v(a,ke,5),v(a,Ut,4),v(a,Kt,4),v(a,Wt,4),v(a,$t,4),v(a,Xt,4),v(a,Y,4)),i&2){let o;h(o=_())&&(n.footerFacet=o.first),h(o=_())&&(n.headerTemplate=o.first),h(o=_())&&(n.iconTemplate=o.first),h(o=_())&&(n.contentTemplate=o.first),h(o=_())&&(n.footerTemplate=o.first),h(o=_())&&(n.headerIconsTemplate=o.first),h(o=_())&&(n.templates=o)}},viewQuery:function(i,n){if(i&1&&Ee(Yt,5),i&2){let a;h(a=_())&&(n.contentWrapperViewChild=a.first)}},hostAttrs:["data-pc-name","panel"],hostVars:3,hostBindings:function(i,n){i&2&&(Te("id",n.id),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{toggleable:[2,"toggleable","toggleable",B],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",B],id:"id",styleClass:"styleClass",iconPos:"iconPos",showHeader:[2,"showHeader","showHeader",B],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[K([ut]),U],ngContentSelectors:Zt,decls:7,vars:20,consts:[["contentWrapper",""],["icon",""],[3,"class","click",4,"ngIf"],["role","region",3,"id"],[4,"ngTemplateOutlet"],[3,"class",4,"ngIf"],[3,"click"],["severity","secondary","type","button","role","button",3,"text","rounded","styleClass","buttonProps","click","keydown",4,"ngIf"],["severity","secondary","type","button","role","button",3,"click","keydown","text","rounded","styleClass","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus"],["data-p-icon","plus"]],template:function(i,n){if(i&1){let a=M();ie(Jt),m(0,_n,7,9,"div",2),l(1,"div",3),I("@panelContent.done",function(z){return b(a),x(n.onToggleDone(z))}),l(2,"div",null,0),V(4),m(5,vn,1,0,"ng-container",4),r(),m(6,xn,3,3,"div",5),r()}i&2&&(p("ngIf",n.showHeader),d(),g(n.cx("contentContainer")),p("id",n.id+"_content")("@panelContent",n.collapsed?C(14,tn,C(12,en,n.animating?n.transitionOptions:"0ms")):C(18,an,C(16,nn,n.animating?n.transitionOptions:"0ms"))),f("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("tabindex",n.collapsed?"-1":void 0),d(),g(n.cx("content")),d(3),p("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),d(),p("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[k,$,X,de,pe,ue,ce,E],encapsulation:2,data:{animation:[le("panelContent",[O("hidden",R({height:"0"})),O("void",R({height:"{{height}}"}),{params:{height:"0"}}),O("visible",R({height:"*"})),A("visible <=> hidden",[L("{{transitionParams}}")]),A("void => hidden",L("{{transitionParams}}")),A("void => visible",L("{{transitionParams}}"))])]},changeDetection:0})}return t})(),mt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=j({imports:[xe,E,E]})}return t})();var gt=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`;var En=["panel"];function wn(t,s){t&1&&T(0)}function Cn(t,s){if(t&1){let e=M();l(0,"div",4),I("mousedown",function(n){b(e);let a=c().index,o=c();return x(o.onGutterMouseDown(n,a))})("touchstart",function(n){b(e);let a=c().index,o=c();return x(o.onGutterTouchStart(n,a))})("touchmove",function(n){b(e);let a=c(2);return x(a.onGutterTouchMove(n))})("touchend",function(n){b(e);let a=c(2);return x(a.onGutterTouchEnd(n))}),l(1,"div",5),I("keyup",function(n){b(e);let a=c(2);return x(a.onGutterKeyUp(n))})("keydown",function(n){b(e);let a=c().index,o=c();return x(o.onGutterKeyDown(n,a))}),r()()}if(t&2){let e=c(2);g(e.cx("gutter")),f("data-p-gutter-resizing",!1)("data-pc-section","gutter"),d(),g(e.cx("gutterHandle")),p("ngStyle",e.gutterStyle()),f("aria-orientation",e.layout)("aria-valuenow",e.prevSize)("data-pc-section","gutterhandle")}}function zn(t,s){if(t&1&&(l(0,"div",1),m(1,wn,1,0,"ng-container",2),r(),m(2,Cn,2,10,"div",3)),t&2){let e=s.$implicit,i=s.index,n=c();g(n.cn(n.cx("panel"),n.panelStyleClass)),p("ngStyle",n.panelStyle),f("data-pc-name","splitterpanel")("data-pc-section","panel"),d(),p("ngTemplateOutlet",e),d(),p("ngIf",i!==n.panels.length-1)}}var In={root:({instance:t})=>["p-splitter p-component","p-splitter-"+t.layout],panel:({instance:t})=>["p-splitterpanel",{"p-splitterpanel-nested":t.nestedState()}],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Pn={root:({instance:t})=>[{display:"flex","flex-wrap":"nowrap"},t.layout==="vertical"?{"flex-direction":"column"}:""]},ft=(()=>{class t extends J{name="splitter";theme=gt;classes=In;inlineStyles=Pn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=Q({token:t,factory:t.\u0275fac})}return t})();var ye=(()=>{class t extends Z{styleClass;panelStyleClass;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let i=[...this.el.nativeElement.children].filter(a=>re(a,"p-splitterpanel")),n=[];this.panels.map((a,o)=>{let ee=(this.panelSizes.length-1>=o?this.panelSizes[o]:null)||100/this.panels.length;n[o]=ee,i[o].style.flexBasis="calc("+ee+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new w;onResizeStart=new w;templates;panelChildren;splitter=Pe(Se(()=>t));nestedState=Ie(()=>this.splitter());panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=N(ft);ngOnInit(){super.ngOnInit()}ngAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{switch(e.getType()){case"panel":this.panels.push(e.template);break;default:this.panels.push(e.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}ngAfterViewInit(){if(super.ngAfterViewInit(),fe(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let i=[...this.el.nativeElement.children].filter(a=>re(a,"p-splitterpanel")),n=[];this.panels.map((a,o)=>{let ee=(this.panelSizes.length-1>=o?this.panelSizes[o]:null)||100/this.panels.length;n[o]=ee,i[o].style.flexBasis="calc("+ee+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=n,this.prevSize=parseFloat(n[0]).toFixed(4)}}}resizeStart(e,i,n){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?De(this.el.nativeElement):Fe(this.el.nativeElement),n||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,n?(this.prevPanelSize=this.horizontal()?te(this.prevPanelElement,!0):ne(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?te(this.nextPanelElement,!0):ne(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?te(this.prevPanelElement,!0):ne(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?te(this.nextPanelElement,!0):ne(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=i,he(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),he(this.el.nativeElement,"p-splitter-resizing"),this.el.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,i,n){let a,o,z;n?this.horizontal()?(o=100*(this.prevPanelSize+i)/this.size,z=100*(this.nextPanelSize-i)/this.size):(o=100*(this.prevPanelSize-i)/this.size,z=100*(this.nextPanelSize+i)/this.size):(this.horizontal()?qe(this.el.nativeElement)?a=(this.startPos-e.pageX)*100/this.size:a=(e.pageX-this.startPos)*100/this.size:a=(e.pageY-this.startPos)*100/this.size,o=this.prevPanelSize+a,z=this.nextPanelSize-a),this.prevSize=parseFloat(o).toFixed(4),this.validateResize(o,z)&&(this.prevPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+z+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=o,this._panelSizes[this.prevPanelIndex+1]=z)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),_e(this.gutterElement,"p-splitter-gutter-resizing"),_e(this.el.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,i){this.resizeStart(e,i),this.bindMouseListeners()}onGutterTouchStart(e,i){e.cancelable&&(this.resizeStart(e,i),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,i,n){this.resizeStart(e,i,!0),this.onResize(e,n,!0)}setTimer(e,i,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,i){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,i,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,i,this.step),e.preventDefault();break}default:break}}validateResize(e,i){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>i)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isStateful(){return this.stateKey!=null}getStorage(){if(fe(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView.localStorage;case"session":return this.document.defaultView.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let i=this.getStorage().getItem(this.stateKey);return i?(this._panelSizes=JSON.parse(i),[...this.el.nativeElement.children].filter(a=>re(a,"p-splitterpanel")).forEach((a,o)=>{a.style.flexBasis="calc("+this._panelSizes[o]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275cmp=q({type:t,selectors:[["p-splitter"]],contentQueries:function(i,n,a){if(i&1&&(we(a,n.splitter,t,5),v(a,Y,4),v(a,En,4)),i&2){Ce();let o;h(o=_())&&(n.templates=o),h(o=_())&&(n.panelChildren=o)}},hostAttrs:["data-pc-name","splitter","data-pc-section","root"],hostVars:3,hostBindings:function(i,n){i&2&&(f("data-p-gutter-resizing",!1),g(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",ge],step:[2,"step","step",ge],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[K([ft]),U],decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],["tabindex","-1",3,"ngStyle"],[4,"ngTemplateOutlet"],["role","separator","tabindex","-1",3,"class","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend"],["tabindex","0",3,"keyup","keydown","ngStyle"]],template:function(i,n){i&1&&m(0,zn,3,7,"ng-template",0),i&2&&p("ngForOf",n.panels)},dependencies:[k,Me,$,X,oe,E],encapsulation:2,changeDetection:0})}return t})(),ht=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=j({imports:[ye,E,E]})}return t})();var qn=()=>({height:"300px"}),vt=()=>[20,80],Fn=()=>[10,0],Dn=()=>[50,50];function kn(t,s){t&1&&y(0,"p-button",32)(1,"p-button",33)(2,"p-button",34)}function Vn(t,s){t&1&&(l(0,"p-iconfield")(1,"p-inputicon"),y(2,"i",35),r(),y(3,"input",36),r())}function Bn(t,s){if(t&1&&y(0,"p-splitbutton",37),t&2){let e=c();p("model",e.items)}}function Ln(t,s){t&1&&(l(0,"div",38),u(1,"Panel 1"),r())}function Rn(t,s){t&1&&(l(0,"div",40),u(1,"Panel 2"),r())}function On(t,s){t&1&&(l(0,"div",38),u(1,"Panel 3"),r())}function An(t,s){t&1&&(l(0,"div",38),u(1,"Panel 4"),r())}function Qn(t,s){t&1&&(l(0,"p-splitter",41),m(1,On,2,0,"ng-template",null,3,S)(3,An,2,0,"ng-template",null,3,S),r()),t&2&&p("panelSizes",W(1,vt))}function jn(t,s){t&1&&(l(0,"p-splitter",39),m(1,Rn,2,0,"ng-template",null,3,S)(3,Qn,5,2,"ng-template",null,3,S),r()),t&2&&p("panelSizes",W(1,Dn))}var _t=class t{items=[{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=q({type:t,selectors:[["app-panels-demo"]],decls:101,vars:9,consts:[["start",""],["center",""],["end",""],["panel",""],[1,"flex","flex-col","space-y-4"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],[1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2","space-y-4"],["value","0"],[1,"m-0"],["value","1"],["value","2"],[1,"md:w-1/2","mt-6","md:mt-0","space-y-4"],["header","Header",3,"toggleable"],["legend","Legend",3,"toggleable"],[1,"card","mt-8"],[1,"flex","flex-col","md:flex-row"],[1,"w-full","md:w-5/12","flex","flex-col","items-center","justify-center","gap-4","py-8"],[1,"flex","flex-col","gap-2"],["for","username"],["pInputText","","id","username","type","text"],["for","password"],["pInputText","","id","password","type","password"],[1,"flex"],["label","Login","icon","pi pi-user",1,"w-full","max-w-[17.35rem]","mx-auto"],[1,"w-full","md:w-2/12"],["layout","vertical",1,"hidden!","md:flex!"],["layout","horizontal","align","center",1,"flex!","md:hidden!"],[1,"w-full","md:w-5/12","flex","items-center","justify-center","py-8"],["label","Sign Up","icon","pi pi-user-plus","severity","success","styleClass","w-full max-w-[17.35rem] mx-auto",1,"w-full"],["styleClass","mb-20",3,"panelSizes","minSizes"],["icon","pi pi-plus","severity","secondary","text","",1,"mr-2"],["icon","pi pi-print","severity","secondary","text","",1,"mr-2"],["icon","pi pi-upload","severity","secondary","text",""],[1,"pi","pi-search"],["pInputText","","placeholder","Search"],["label","Save",3,"model"],[1,"col","flex","items-center","justify-center"],["layout","vertical",3,"panelSizes"],[1,"flex","items-center","justify-center",2,"grow","1"],[3,"panelSizes"]],template:function(e,i){e&1&&(l(0,"div",4)(1,"div",5)(2,"div",6),u(3,"Toolbar"),r(),l(4,"p-toolbar"),m(5,kn,3,0,"ng-template",null,0,S)(7,Vn,4,0,"ng-template",null,1,S)(9,Bn,1,1,"ng-template",null,2,S),r()(),l(11,"div",7)(12,"div",8)(13,"div",5)(14,"div",6),u(15,"Accordion"),r(),l(16,"p-accordion",9)(17,"p-accordion-panel",9)(18,"p-accordion-header"),u(19,"Header I"),r(),l(20,"p-accordion-content")(21,"p",10),u(22," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r()()(),l(23,"p-accordion-panel",11)(24,"p-accordion-header"),u(25,"Header II"),r(),l(26,"p-accordion-content")(27,"p",10),u(28," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),r()()(),l(29,"p-accordion-panel",12)(30,"p-accordion-header"),u(31,"Header III"),r(),l(32,"p-accordion-content")(33,"p",10),u(34," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),r()()()()(),l(35,"div",5)(36,"div",6),u(37,"Tabs"),r(),l(38,"p-tabs",9)(39,"p-tablist")(40,"p-tab",9),u(41,"Header I"),r(),l(42,"p-tab",11),u(43,"Header II"),r(),l(44,"p-tab",12),u(45,"Header III"),r()(),l(46,"p-tabpanels")(47,"p-tabpanel",9)(48,"p",10),u(49," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r()(),l(50,"p-tabpanel",11)(51,"p",10),u(52," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),r()(),l(53,"p-tabpanel",12)(54,"p",10),u(55," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),r()()()()()(),l(56,"div",13)(57,"div",5)(58,"div",6),u(59,"Panel"),r(),l(60,"p-panel",14)(61,"p",10),u(62," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r()()(),l(63,"div",5)(64,"div",6),u(65,"Fieldset"),r(),l(66,"p-fieldset",15)(67,"p",10),u(68," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r()()()()(),l(69,"div",16)(70,"div",6),u(71,"Divider"),r(),l(72,"div",17)(73,"div",18)(74,"div",19)(75,"label",20),u(76,"Username"),r(),y(77,"input",21),r(),l(78,"div",19)(79,"label",22),u(80,"Password"),r(),y(81,"input",23),r(),l(82,"div",24),y(83,"p-button",25),r()(),l(84,"div",26)(85,"p-divider",27)(86,"b"),u(87,"OR"),r()(),l(88,"p-divider",28)(89,"b"),u(90,"OR"),r()()(),l(91,"div",29),y(92,"p-button",30),r()()(),l(93,"div",5)(94,"div",6),u(95,"Splitter"),r(),l(96,"p-splitter",31),m(97,Ln,2,0,"ng-template",null,3,S)(99,jn,5,2,"ng-template",null,3,S),r()()()),e&2&&(d(60),p("toggleable",!0),d(6),p("toggleable",!0),d(30),ze(W(6,qn)),p("panelSizes",W(7,vt))("minSizes",W(8,Fn)))},dependencies:[k,Ve,lt,ot,ue,ce,Re,Ke,Ue,Je,Ye,We,$e,Xe,dt,be,Ge,Le,Be,He,Ne,ht,ye,mt,xe,at,it,nt,tt,Ze,et,Ae,Oe,je,Qe],encapsulation:2})};export{_t as PanelsDemo};
