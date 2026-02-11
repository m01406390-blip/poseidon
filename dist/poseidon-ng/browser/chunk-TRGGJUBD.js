import{Ba as m,Ea as y}from"./chunk-AOIYYANN.js";import{t as f}from"./chunk-VK6R4YNE.js";import{$a as p,Ib as c,Jb as g,R as s,S as o,Ub as u,W as a,Xa as l,Ya as d,bc as b,na as r}from"./chunk-A7JQA43H.js";var h=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var k=["*"],F={root:"p-fluid"},v=(()=>{class n extends m{name="fluid";classes=F;theme=h;static \u0275fac=(()=>{let e;return function(t){return(e||(e=r(n)))(t||n)}})();static \u0275prov=s({token:n,factory:n.\u0275fac})}return n})();var w=(()=>{class n extends y{_componentStyle=a(v);static \u0275fac=(()=>{let e;return function(t){return(e||(e=r(n)))(t||n)}})();static \u0275cmp=l({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,t){i&2&&u(t.cx("root"))},features:[b([v]),p],ngContentSelectors:k,decls:1,vars:0,template:function(i,t){i&1&&(c(),g(0))},dependencies:[f],encapsulation:2,changeDetection:0})}return n})(),H=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=d({type:n});static \u0275inj=o({imports:[w]})}return n})();export{h as a,w as b,H as c};
