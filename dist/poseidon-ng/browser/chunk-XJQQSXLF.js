import{a as W,b as X}from"./chunk-ZDZC3C63.js";import{c as J,d as K}from"./chunk-IDW2C6YA.js";import"./chunk-AYWMBMLY.js";import"./chunk-SDVJRMAJ.js";import"./chunk-VNA4FHC5.js";import"./chunk-5W5MLR4D.js";import"./chunk-XJHCGESM.js";import{Ba as U,Ea as G,sa as V,ta as D}from"./chunk-2EPCOYPN.js";import{j as H,k as C,o as L,t as S}from"./chunk-YK3KRMPP.js";import{$a as B,Ab as A,Bb as E,Hb as f,Ia as R,Kb as T,Ma as o,Mb as y,Nb as b,Qb as Q,R as z,S as F,Tb as j,Ub as v,Vb as m,W as O,Wb as N,Xa as k,Xb as g,Ya as $,bb as c,bc as P,dc as h,mb as _,na as M,qc as d,sb as r,tb as i,ub as l,vb as x,zb as q}from"./chunk-6KZEWCL6.js";import"./chunk-GAL4ENT6.js";var Y=`
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
`;var le=["content"],ae=["opposite"],oe=["marker"],w=e=>({$implicit:e});function re(e,n){e&1&&E(0)}function me(e,n){e&1&&E(0)}function pe(e,n){if(e&1&&(q(0),c(1,me,1,0,"ng-container",2),A()),e&2){let t=f().$implicit,a=f();o(),r("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",h(2,w,t))}}function ce(e,n){if(e&1&&x(0,"div"),e&2){let t=f(2);v(t.cx("eventMarker")),_("data-pc-section","marker")}}function se(e,n){if(e&1&&x(0,"div"),e&2){let t=f(2);v(t.cx("eventConnector"))}}function de(e,n){e&1&&E(0)}function ve(e,n){if(e&1&&(i(0,"div")(1,"div"),c(2,re,1,0,"ng-container",2),l(),i(3,"div"),c(4,pe,2,4,"ng-container",3)(5,ce,1,3,"ng-template",null,0,d)(7,se,1,2,"div",4),l(),i(8,"div"),c(9,de,1,0,"ng-container",2),l()()),e&2){let t=n.$implicit,a=n.last,p=Q(6),s=f();v(s.cx("event")),_("data-pc-section","event"),o(),v(s.cx("eventOpposite")),_("data-pc-section","opposite"),o(),r("ngTemplateOutlet",s.oppositeTemplate||s._oppositeTemplate)("ngTemplateOutletContext",h(19,w,t)),o(),v(s.cx("eventSeparator")),_("data-pc-section","separator"),o(),r("ngIf",s.markerTemplate||s._markerTemplate)("ngIfElse",p),o(3),r("ngIf",!a),o(),v(s.cx("eventContent")),_("data-pc-section","content"),o(),r("ngTemplateOutlet",s.contentTemplate||s._contentTemplate)("ngTemplateOutletContext",h(21,w,t))}}var ue={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Z=(()=>{class e extends U{name="timeline";theme=Y;classes=ue;static \u0275fac=(()=>{let t;return function(p){return(t||(t=M(e)))(p||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var I=(()=>{class e extends G{value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=O(Z);getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(p){return(t||(t=M(e)))(p||e)}})();static \u0275cmp=k({type:e,selectors:[["p-timeline"]],contentQueries:function(a,p,s){if(a&1&&(T(s,le,4),T(s,ae,4),T(s,oe,4),T(s,V,4)),a&2){let u;y(u=b())&&(p.contentTemplate=u.first),y(u=b())&&(p.oppositeTemplate=u.first),y(u=b())&&(p.markerTemplate=u.first),y(u=b())&&(p.templates=u)}},hostVars:4,hostBindings:function(a,p){a&2&&(_("data-pc-section","root")("data-pc-name","timeline"),v(p.cn(p.cx("root"),p.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[P([Z]),B],decls:1,vars:1,consts:[["marker",""],[3,"class",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"]],template:function(a,p){a&1&&c(0,ve,10,23,"div",1),a&2&&r("ngForOf",p.value)},dependencies:[S,H,C,L,D],encapsulation:2,changeDetection:0})}return e})(),ee=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=$({type:e});static \u0275inj=F({imports:[I,D,D]})}return e})();var ge=e=>({"background-color":e});function _e(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function xe(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function he(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function Te(e,n){if(e&1&&(i(0,"small",17),m(1),l()),e&2){let t=n.$implicit;o(),N(t.date)}}function ye(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t.status," ")}}function be(e,n){if(e&1&&(i(0,"span",18),x(1,"i"),l()),e&2){let t=n.$implicit;j(h(4,ge,t.color)),o(),v(t.icon)}}function ke(e,n){if(e&1&&x(0,"img",22),e&2){let t=f().$implicit;r("src","/images/product/"+t.image,R)("alt",t.name)}}function Ee(e,n){if(e&1&&(i(0,"p-card",19),c(1,ke,1,2,"img",20),i(2,"p"),m(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),l(),x(4,"p-button",21),l()),e&2){let t=n.$implicit;r("header",t.status)("subheader",t.date),o(),r("ngIf",t.image),o(3),r("text",!0)}}function Ce(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function Se(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function De(e,n){if(e&1&&m(0),e&2){let t=n.$implicit;g(" ",t," ")}}function Me(e,n){e&1&&m(0," \xA0")}var te=class e{events1=[];events2=[];ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=k({type:e,selectors:[["app-timeline-demo"]],decls:61,vars:8,consts:[["content",""],["opposite",""],["marker",""],[1,"grid","grid-cols-12","gap-8"],[1,"col-span-12","sm:col-span-6"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],[3,"value"],["align","right",3,"value"],["align","alternate",3,"value"],[1,"col-span-full"],["align","alternate","styleClass","customized-timeline",3,"value"],[1,"font-semibold","mb-2"],["layout","horizontal","align","top",3,"value"],[1,"font-semibold","mt-4","mb-2"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(t,a){t&1&&(i(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),m(4,"Left Align"),l(),i(5,"p-timeline",7),c(6,_e,1,1,"ng-template",null,0,d),l()()(),i(8,"div",4)(9,"div",5)(10,"div",6),m(11,"Right Align"),l(),i(12,"p-timeline",8),c(13,xe,1,1,"ng-template",null,0,d),l()()(),i(15,"div",4)(16,"div",5)(17,"div",6),m(18,"Alternate Align"),l(),i(19,"p-timeline",9),c(20,he,1,1,"ng-template",null,0,d),l()()(),i(22,"div",4)(23,"div",5)(24,"div",6),m(25,"Opposite Content"),l(),i(26,"p-timeline",7),c(27,Te,2,1,"ng-template",null,0,d)(29,ye,1,1,"ng-template",null,1,d),l()()(),i(31,"div",10)(32,"div",5)(33,"div",6),m(34,"Templating"),l(),i(35,"p-timeline",11),c(36,be,2,6,"ng-template",null,2,d)(38,Ee,5,4,"ng-template",null,0,d),l()()(),i(40,"div",10)(41,"div",5)(42,"div",6),m(43,"Horizontal"),l(),i(44,"div",12),m(45,"Top Align"),l(),i(46,"p-timeline",13),c(47,Ce,1,1,"ng-template",null,0,d),l(),i(49,"div",14),m(50,"Bottom Align"),l(),i(51,"p-timeline",15),c(52,Se,1,1,"ng-template",null,0,d),l(),i(54,"div",14),m(55,"Alternate Align"),l(),i(56,"p-timeline",16),c(57,De,1,1,"ng-template",null,0,d)(59,Me,1,0,"ng-template",null,1,d),l()()()()),t&2&&(o(5),r("value",a.events1),o(7),r("value",a.events1),o(7),r("value",a.events1),o(7),r("value",a.events1),o(9),r("value",a.events1),o(11),r("value",a.events2),o(5),r("value",a.events2),o(5),r("value",a.events2))},dependencies:[S,C,ee,I,K,J,X,W],encapsulation:2})};export{te as TimelineDemo};
