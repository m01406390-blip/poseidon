import{c as te,d as ne}from"./chunk-CCBKSVMU.js";import"./chunk-T375UXUO.js";import"./chunk-CLSKU77W.js";import"./chunk-X74CYKMB.js";import"./chunk-FH7N6WOZ.js";import"./chunk-TRGGJUBD.js";import{Ba as P,Ea as H,Z as Y,qa as Z,ra as ee,sa as A,ta as b}from"./chunk-AOIYYANN.js";import{j as X,k as S,o as N,t as D}from"./chunk-VK6R4YNE.js";import{$a as q,Ab as F,Bb as y,Hb as f,Ia as J,Ib as K,Jb as B,Kb as v,Ma as l,Mb as _,Nb as g,Qb as W,R as Q,S as R,Tb as j,Ub as u,Vb as s,W as O,Wb as w,Xa as E,Xb as x,Ya as z,bb as c,bc as $,dc as M,ia as G,mb as T,na as k,qc as h,sb as p,tb as o,ub as r,vb as C,zb as I}from"./chunk-A7JQA43H.js";import"./chunk-GAL4ENT6.js";var ie=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var se=["content"],ue=["opposite"],fe=["marker"],V=e=>({$implicit:e});function ve(e,i){e&1&&y(0)}function _e(e,i){e&1&&y(0)}function ge(e,i){if(e&1&&(I(0),c(1,_e,1,0,"ng-container",2),F()),e&2){let t=f().$implicit,a=f();l(),p("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",M(2,V,t))}}function he(e,i){if(e&1&&C(0,"div"),e&2){let t=f(2);u(t.cx("eventMarker")),T("data-pc-section","marker")}}function ye(e,i){if(e&1&&C(0,"div"),e&2){let t=f(2);u(t.cx("eventConnector"))}}function Te(e,i){e&1&&y(0)}function xe(e,i){if(e&1&&(o(0,"div")(1,"div"),c(2,ve,1,0,"ng-container",2),r(),o(3,"div"),c(4,ge,2,4,"ng-container",3)(5,he,1,3,"ng-template",null,0,h)(7,ye,1,2,"div",4),r(),o(8,"div"),c(9,Te,1,0,"ng-container",2),r()()),e&2){let t=i.$implicit,a=i.last,n=W(6),d=f();u(d.cx("event")),T("data-pc-section","event"),l(),u(d.cx("eventOpposite")),T("data-pc-section","opposite"),l(),p("ngTemplateOutlet",d.oppositeTemplate||d._oppositeTemplate)("ngTemplateOutletContext",M(19,V,t)),l(),u(d.cx("eventSeparator")),T("data-pc-section","separator"),l(),p("ngIf",d.markerTemplate||d._markerTemplate)("ngIfElse",n),l(3),p("ngIf",!a),l(),u(d.cx("eventContent")),T("data-pc-section","content"),l(),p("ngTemplateOutlet",d.contentTemplate||d._contentTemplate)("ngTemplateOutletContext",M(21,V,t))}}var be={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},ae=(()=>{class e extends P{name="timeline";theme=ie;classes=be;static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var L=(()=>{class e extends H{value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=O(ae);getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-timeline"]],contentQueries:function(a,n,d){if(a&1&&(v(d,se,4),v(d,ue,4),v(d,fe,4),v(d,A,4)),a&2){let m;_(m=g())&&(n.contentTemplate=m.first),_(m=g())&&(n.oppositeTemplate=m.first),_(m=g())&&(n.markerTemplate=m.first),_(m=g())&&(n.templates=m)}},hostVars:4,hostBindings:function(a,n){a&2&&(T("data-pc-section","root")("data-pc-name","timeline"),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[$([ae]),q],decls:1,vars:1,consts:[["marker",""],[3,"class",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"]],template:function(a,n){a&1&&c(0,xe,10,23,"div",1),a&2&&p("ngForOf",n.value)},dependencies:[D,X,S,N,b],encapsulation:2,changeDetection:0})}return e})(),re=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=z({type:e});static \u0275inj=R({imports:[L,b,b]})}return e})();var pe=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ke=["header"],Ee=["title"],Me=["subtitle"],Se=["content"],De=["footer"],Ie=["*",[["p-header"]],[["p-footer"]]],Fe=["*","p-header","p-footer"];function we(e,i){e&1&&y(0)}function Qe(e,i){if(e&1&&(o(0,"div"),B(1,1),c(2,we,1,0,"ng-container",1),r()),e&2){let t=f();u(t.cx("header")),l(2),p("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Re(e,i){if(e&1&&(I(0),s(1),F()),e&2){let t=f(2);l(),w(t.header)}}function Oe(e,i){e&1&&y(0)}function ze(e,i){if(e&1&&(o(0,"div"),c(1,Re,2,1,"ng-container",2)(2,Oe,1,0,"ng-container",1),r()),e&2){let t=f();u(t.cx("title")),l(),p("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),p("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function qe(e,i){if(e&1&&(I(0),s(1),F()),e&2){let t=f(2);l(),w(t.subheader)}}function Be(e,i){e&1&&y(0)}function je(e,i){if(e&1&&(o(0,"div"),c(1,qe,2,1,"ng-container",2)(2,Be,1,0,"ng-container",1),r()),e&2){let t=f();u(t.cx("subtitle")),l(),p("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),p("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function $e(e,i){e&1&&y(0)}function Ne(e,i){e&1&&y(0)}function Ae(e,i){if(e&1&&(o(0,"div"),B(1,2),c(2,Ne,1,0,"ng-container",1),r()),e&2){let t=f();u(t.cx("footer")),l(2),p("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Pe=`
    ${pe}

    .p-card {
        display: block;
    }
`,He={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},me=(()=>{class e extends P{name="card";theme=Pe;classes=He;static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var U=(()=>{class e extends H{header;subheader;set style(t){Y(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=G(null);_componentStyle=O(me);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=E({type:e,selectors:[["p-card"]],contentQueries:function(a,n,d){if(a&1&&(v(d,Z,5),v(d,ee,5),v(d,ke,4),v(d,Ee,4),v(d,Me,4),v(d,Se,4),v(d,De,4),v(d,A,4)),a&2){let m;_(m=g())&&(n.headerFacet=m.first),_(m=g())&&(n.footerFacet=m.first),_(m=g())&&(n.headerTemplate=m.first),_(m=g())&&(n.titleTemplate=m.first),_(m=g())&&(n.subtitleTemplate=m.first),_(m=g())&&(n.contentTemplate=m.first),_(m=g())&&(n.footerTemplate=m.first),_(m=g())&&(n.templates=m)}},hostVars:5,hostBindings:function(a,n){a&2&&(T("data-pc-name","card"),j(n._style()),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[$([me]),q],ngContentSelectors:Fe,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(a,n){a&1&&(K(Ie),c(0,Qe,3,3,"div",0),o(1,"div"),c(2,ze,3,4,"div",0)(3,je,3,4,"div",0),o(4,"div"),B(5),c(6,$e,1,0,"ng-container",1),r(),c(7,Ae,3,3,"div",0),r()),a&2&&(p("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),l(),u(n.cx("body")),l(),p("ngIf",n.header||n.titleTemplate||n._titleTemplate),l(),p("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),l(),u(n.cx("content")),l(2),p("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),p("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[D,S,N,b],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=z({type:e});static \u0275inj=R({imports:[U,b,b]})}return e})();var Le=e=>({"background-color":e});function Ue(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t.status," ")}}function Ge(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t.status," ")}}function Je(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t.status," ")}}function Ke(e,i){if(e&1&&(o(0,"small",17),s(1),r()),e&2){let t=i.$implicit;l(),w(t.date)}}function We(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t.status," ")}}function Xe(e,i){if(e&1&&(o(0,"span",18),C(1,"i"),r()),e&2){let t=i.$implicit;j(M(4,Le,t.color)),l(),u(t.icon)}}function Ye(e,i){if(e&1&&C(0,"img",22),e&2){let t=f().$implicit;p("src","/images/product/"+t.image,J)("alt",t.name)}}function Ze(e,i){if(e&1&&(o(0,"p-card",19),c(1,Ye,1,2,"img",20),o(2,"p"),s(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),r(),C(4,"p-button",21),r()),e&2){let t=i.$implicit;p("header",t.status)("subheader",t.date),l(),p("ngIf",t.image),l(3),p("text",!0)}}function et(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t," ")}}function tt(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t," ")}}function nt(e,i){if(e&1&&s(0),e&2){let t=i.$implicit;x(" ",t," ")}}function it(e,i){e&1&&s(0," \xA0")}var de=class e{events1=[];events2=[];ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=E({type:e,selectors:[["app-timeline-demo"]],decls:61,vars:8,consts:[["content",""],["opposite",""],["marker",""],[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","sm:col-span-6"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],[3,"value"],["align","right",3,"value"],["align","alternate",3,"value"],[1,"col-span-full"],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"font-semibold","mb-2"],["layout","horizontal","align","top",3,"value"],[1,"font-semibold","mt-4","mb-2"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(t,a){t&1&&(o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),s(4,"Left Align"),r(),o(5,"p-timeline",7),c(6,Ue,1,1,"ng-template",null,0,h),r()()(),o(8,"div",4)(9,"div",5)(10,"div",6),s(11,"Right Align"),r(),o(12,"p-timeline",8),c(13,Ge,1,1,"ng-template",null,0,h),r()()(),o(15,"div",4)(16,"div",5)(17,"div",6),s(18,"Alternate Align"),r(),o(19,"p-timeline",9),c(20,Je,1,1,"ng-template",null,0,h),r()()(),o(22,"div",4)(23,"div",5)(24,"div",6),s(25,"Opposite Content"),r(),o(26,"p-timeline",7),c(27,Ke,2,1,"ng-template",null,0,h)(29,We,1,1,"ng-template",null,1,h),r()()(),o(31,"div",10)(32,"div",5)(33,"div",6),s(34,"Templating"),r(),o(35,"p-timeline",11),c(36,Xe,2,6,"ng-template",null,2,h)(38,Ze,5,4,"ng-template",null,0,h),r()()(),o(40,"div",10)(41,"div",5)(42,"div",6),s(43,"Horizontal"),r(),o(44,"div",12),s(45,"Top Align"),r(),o(46,"p-timeline",13),c(47,et,1,1,"ng-template",null,0,h),r(),o(49,"div",14),s(50,"Bottom Align"),r(),o(51,"p-timeline",15),c(52,tt,1,1,"ng-template",null,0,h),r(),o(54,"div",14),s(55,"Alternate Align"),r(),o(56,"p-timeline",16),c(57,nt,1,1,"ng-template",null,0,h)(59,it,1,0,"ng-template",null,1,h),r()()()()),t&2&&(l(5),p("value",a.events1),l(7),p("value",a.events1),l(7),p("value",a.events1),l(7),p("value",a.events1),l(9),p("value",a.events1),l(11),p("value",a.events2),l(5),p("value",a.events2),l(5),p("value",a.events2))},dependencies:[D,S,re,L,ne,te,ce,U],encapsulation:2})};export{de as TimelineDemo};
