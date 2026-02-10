import{Ba as W,Ea as B,I as K,sa as U,ta as T}from"./chunk-2EPCOYPN.js";import{i as J,j as z,k as S,n as L,o as w,t as Q}from"./chunk-YK3KRMPP.js";import{$a as I,Ab as x,Bb as s,Hb as l,Kb as g,Ma as o,Mb as d,Nb as b,Q as D,R as N,S as E,Ub as c,Vb as R,W as M,Xa as F,Ya as V,Yb as q,bb as m,bc as j,dc as G,ec as A,fc as y,ic as H,mb as $,na as O,nb as k,ob as P,sb as a,tb as f,ub as v,vb as _,zb as h}from"./chunk-6KZEWCL6.js";var X=`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`;var ee=(t,i)=>({$implicit:t,icon:i}),te=t=>({color:t}),ne=t=>({backgroundColor:t});function re(t,i){if(t&1&&_(0,"i",5),t&2){let e=l(2).$implicit,r=l();c(e.icon),a("ngClass",r.cx("labelIcon"))("ngStyle",G(4,te,e.color))}}function ie(t,i){if(t&1&&_(0,"span",6),t&2){let e=l(2).$implicit,r=l();c(r.cx("labelMarker")),a("ngStyle",G(3,ne,e.color))}}function ae(t,i){if(t&1&&(h(0),m(1,re,1,6,"i",3)(2,ie,1,5,"span",4),x()),t&2){let e=l().$implicit;o(),a("ngIf",e.icon),o(),a("ngIf",!e.icon)}}function oe(t,i){t&1&&s(0)}function le(t,i){if(t&1&&(f(0,"li"),m(1,ae,3,2,"ng-container",1)(2,oe,1,0,"ng-container",2),f(3,"span"),R(4),v()()),t&2){let e=i.$implicit,r=l();c(r.cx("label")),o(),a("ngIf",!r.iconTemplate),o(),a("ngTemplateOutlet",r.iconTemplate)("ngTemplateOutletContext",A(9,ee,e,e.icon)),o(),c(r.cx("labelText")),o(),q("",e.label," (",r.parentInstance.percentValue(e.value),")")}}var pe=["label"],me=["meter"],ce=["end"],ue=["start"],se=["icon"],C=(t,i,e)=>({$implicit:t,totalPercent:i,percentages:e}),ge=(t,i,e,r,n,u)=>({$implicit:t,index:i,orientation:e,class:r,size:n,totalPercent:u});function de(t,i){if(t&1&&_(0,"p-meterGroupLabel",3),t&2){let e=l(2);a("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function be(t,i){t&1&&s(0)}function _e(t,i){if(t&1&&m(0,de,1,6,"p-meterGroupLabel",2)(1,be,1,0,"ng-container",0),t&2){let e=l();a("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),a("ngTemplateOutlet",e.labelTemplate||e.labelTemplate)("ngTemplateOutletContext",y(3,C,e.value,e.totalPercent(),e.percentages()))}}function fe(t,i){t&1&&s(0)}function ye(t,i){t&1&&s(0)}function Te(t,i){if(t&1&&(h(0),_(1,"span",5),x()),t&2){let e=l().$implicit,r=l();o(),c(r.cx("meter")),a("ngStyle",r.meterStyle(e))}}function ve(t,i){if(t&1&&(h(0),m(1,ye,1,0,"ng-container",0)(2,Te,2,3,"ng-container",4),x()),t&2){let e=i.$implicit,r=i.index,n=l();o(),a("ngTemplateOutlet",n.meterTemplate||n._meterTemplate)("ngTemplateOutletContext",H(3,ge,e,r,n.orientation,n.cx("meter"),n.percentValue(e.value),n.totalPercent())),o(),a("ngIf",!n.meterTemplate&&!n._meterTemplate&&e.value>0)}}function he(t,i){t&1&&s(0)}function xe(t,i){if(t&1&&_(0,"p-meterGroupLabel",3),t&2){let e=l(2);a("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function Ce(t,i){t&1&&s(0)}function Me(t,i){if(t&1&&m(0,xe,1,6,"p-meterGroupLabel",2)(1,Ce,1,0,"ng-container",0),t&2){let e=l();a("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),a("ngTemplateOutlet",e.labelTemplate||e._labelTemplate)("ngTemplateOutletContext",y(3,C,e.value,e.totalPercent(),e.percentages()))}}var Oe={root:({instance:t})=>["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}],meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:({instance:t})=>["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}],label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},Y=(()=>{class t extends W{name="metergroup";theme=X;classes=Oe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Fe=(()=>{class t extends B{value=null;labelPosition="end";labelOrientation="horizontal";min;max;iconTemplate;parentInstance=M(D(()=>Z));static \u0275fac=(()=>{let e;return function(n){return(e||(e=O(t)))(n||t)}})();static \u0275cmp=F({type:t,selectors:[["p-meterGroupLabel"],["p-metergrouplabel"]],inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},features:[I],decls:2,vars:4,consts:[[3,"class",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass","ngStyle",4,"ngIf"],[3,"class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"ngStyle"]],template:function(r,n){r&1&&(f(0,"ol"),m(1,le,5,12,"li",0),v()),r&2&&(c(n.cx("labelList")),o(),a("ngForOf",n.value)("ngForTrackBy",n.parentInstance.trackByFn))},dependencies:[Q,J,z,S,w,L,T],encapsulation:2})}return t})(),Z=(()=>{class t extends B{value;min=0;max=100;orientation="horizontal";labelPosition="end";labelOrientation="horizontal";styleClass;get vertical(){return this.orientation==="vertical"}labelTemplate;meterTemplate;endTemplate;startTemplate;iconTemplate;templates;_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;_componentStyle=M(Y);constructor(){super()}ngAfterViewInit(){super.ngAfterViewInit();let e=this.el.nativeElement,r=K(e);this.vertical&&(e.style.height=r+"px")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"label":this._labelTemplate=e.template;break;case"meter":this._meterTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break}})}percent(e=0){let r=(e-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,r)))}percentValue(e){return this.percent(e)+"%"}meterStyle(e){return{backgroundColor:e.color,width:this.orientation==="horizontal"&&this.percentValue(e.value),height:this.orientation==="vertical"&&this.percentValue(e.value)}}totalPercent(){return this.percent(this.value.reduce((e,r)=>e+r.value,0))}percentages(){let e=0,r=[];return this.value.forEach(n=>{e+=n.value,r.push(e)}),r}trackByFn(e){return e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=F({type:t,selectors:[["p-meterGroup"],["p-metergroup"],["p-meter-group"]],contentQueries:function(r,n,u){if(r&1&&(g(u,pe,4),g(u,me,4),g(u,ce,4),g(u,ue,4),g(u,se,4),g(u,U,4)),r&2){let p;d(p=b())&&(n.labelTemplate=p.first),d(p=b())&&(n.meterTemplate=p.first),d(p=b())&&(n.endTemplate=p.first),d(p=b())&&(n.startTemplate=p.first),d(p=b())&&(n.iconTemplate=p.first),d(p=b())&&(n.templates=p)}},hostVars:6,hostBindings:function(r,n){r&2&&($("aria-valuemin",n.min)("role","meter")("aria-valuemax",n.max)("aria-valuenow",n.totalPercent()),c(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",styleClass:"styleClass"},features:[j([Y]),I],decls:6,vars:18,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate"],[4,"ngIf"],[3,"ngStyle"]],template:function(r,n){r&1&&(k(0,_e,2,7),m(1,fe,1,0,"ng-container",0),f(2,"div"),m(3,ve,3,10,"ng-container",1),v(),m(4,he,1,0,"ng-container",0),k(5,Me,2,7)),r&2&&(P(n.labelPosition==="start"?0:-1),o(),a("ngTemplateOutlet",n.startTemplate||n._startTemplate)("ngTemplateOutletContext",y(10,C,n.value,n.totalPercent(),n.percentages())),o(),c(n.cx("meters")),o(),a("ngForOf",n.value)("ngForTrackBy",n.trackByFn),o(),a("ngTemplateOutlet",n.endTemplate||n._endTemplate)("ngTemplateOutletContext",y(14,C,n.value,n.totalPercent(),n.percentages())),o(),P(n.labelPosition==="end"?5:-1))},dependencies:[Q,z,S,w,L,Fe,T],encapsulation:2,changeDetection:0})}return t})(),Ae=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=V({type:t});static \u0275inj=E({imports:[Z,T,T]})}return t})();export{Z as a,Ae as b};
