import{Ba as C,Ea as D,U as z,X as S,ta as n}from"./chunk-AOIYYANN.js";import{t as v}from"./chunk-VK6R4YNE.js";import{$a as c,Hc as y,R as r,Rb as p,S as g,Ub as u,Vb as h,W as o,Wb as f,Xa as l,Ya as b,bc as m,na as s,zc as a}from"./chunk-A7JQA43H.js";var w=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var M=`
    ${w}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,B={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":S(e.value())&&String(e.value()).length===1,"p-badge-dot":z(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},x=(()=>{class e extends C{name="badge";theme=M;classes=B;static \u0275fac=(()=>{let i;return function(t){return(i||(i=s(e)))(t||e)}})();static \u0275prov=r({token:e,factory:e.\u0275fac})}return e})();var E=(()=>{class e extends D{styleClass=a();badgeSize=a();size=a();severity=a();value=a();badgeDisabled=a(!1,{transform:y});_componentStyle=o(x);static \u0275fac=(()=>{let i;return function(t){return(i||(i=s(e)))(t||e)}})();static \u0275cmp=l({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(d,t){d&2&&(u(t.cn(t.cx("root"),t.styleClass())),p("display",t.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[m([x]),c],decls:1,vars:1,template:function(d,t){d&1&&h(0),d&2&&f(t.value())},dependencies:[v,n],encapsulation:2,changeDetection:0})}return e})(),X=(()=>{class e{static \u0275fac=function(d){return new(d||e)};static \u0275mod=b({type:e});static \u0275inj=g({imports:[E,n,n]})}return e})();export{E as a,X as b};
