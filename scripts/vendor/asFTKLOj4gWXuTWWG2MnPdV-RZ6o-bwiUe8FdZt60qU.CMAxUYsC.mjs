import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  I as r,
  P as i,
  R as a,
  _ as o,
  b as s,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.Dlpel5Rf.mjs";
import { T as h, a as ee, r as te, t as ne } from "./motion.C738HobR.mjs";
import {
  B as g,
  H as _,
  M as re,
  O as ie,
  P as v,
  St as ae,
  T as y,
  Tt as b,
  V as x,
  _t as oe,
  a as S,
  bt as se,
  f as C,
  ft as ce,
  g as w,
  gt as le,
  i as T,
  k as E,
  lt as ue,
  m as D,
  mt as de,
  o as O,
  pt as fe,
  q as k,
  tt as A,
  w as j,
  x as M,
  yt as pe,
} from "./framer.CKDq5C8y.mjs";
import { i as N, n as me, r as P, t as F } from "./g2u_JGMqL.DWxQ7lGG.mjs";
import {
  C as he,
  S as ge,
  a as _e,
  c as I,
  d as L,
  f as ve,
  g as ye,
  i as be,
  l as R,
  n as xe,
  o as Se,
  p as z,
  r as B,
  t as V,
  w as Ce,
  x as we,
  y as H,
} from "./shared-lib.W6te6cXm.mjs";
import { t as Te } from "./Parts-ISc5PT.Do1ptRxj.mjs";
import { a as Ee, i as U, n as De, o as Oe, r as ke, t as Ae } from "./Inner-d2rabs.CpMZmyL3.mjs";
import { c as je, i as W } from "./Company.Qi2XKIpi.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./LTmB1RL88.B0kvNFDC.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./nm2zECWKu.85OYCxwA.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./ojHHcPZoV.CNNEQIUd.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./OL1kwShSL.xLn8V2pO.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./tZkUHAzDW.DwKm5oDC.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./Vsin8i4CA.Dcjteq3m.mjs";
import { i as nt, n as rt, r as it, t as at } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { n as ot, r as st } from "./augiA20Il.a8EXINCd.mjs";
function G(e) {
  let t = s(null),
    n = he(t),
    r = Ce(),
    c = ge(t, `0px 0px -15% 0px`),
    [d, f] = o(!1);
  m(() => {
    let e = t.current;
    e && !we() && !r && e.getBoundingClientRect().top > a.innerHeight * 0.85 && f(!0);
  }, [r]);
  let p = d && c,
    h = (e) => (p ? { transitionDelay: e * 0.07 + `s` } : void 0);
  return l(`div`, {
    ref: t,
    className: `nl-sy` + (d && !c ? ` pre` : ``) + ye(n),
    style: { ...e.style, "--syp": Math.max(20, Math.min(30, n * 0.022)) + `px` },
    children: [
      H(),
      u(`style`, { dangerouslySetInnerHTML: { __html: ut } }),
      l(`div`, {
        className: `sys`,
        children: [
          l(`div`, {
            className: `sy`,
            style: h(0),
            children: [
              u(`span`, { className: `mono`, children: `Type` }),
              l(`div`, {
                className: `body`,
                children: [
                  u(`span`, { className: `ty-a`, children: `Aa` }),
                  l(`div`, {
                    className: `ty-row`,
                    children: [
                      u(`span`, { children: e.fontA }),
                      u(`span`, { className: `mono`, children: e.weightsA }),
                    ],
                  }),
                  l(`div`, {
                    className: `ty-row`,
                    children: [
                      u(`span`, { className: `mono`, children: e.fontB }),
                      u(`span`, { className: `mono`, children: e.useB }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `sy`,
            style: h(1),
            children: [
              u(`span`, { className: `mono`, children: `Colour` }),
              l(`div`, {
                className: `body`,
                children: [
                  u(`div`, {
                    className: `sw`,
                    children: (e.swatches || []).map((e, t) =>
                      l(
                        `div`,
                        {
                          children: [
                            u(`i`, { style: { background: e.hex } }),
                            l(`span`, { children: [e.name, u(`br`, {}), e.hex.toUpperCase()] }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  u(`p`, { className: `note`, children: e.colourNote }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `sy`,
            style: h(2),
            children: [
              u(`span`, { className: `mono`, children: `Buttons` }),
              l(`div`, {
                className: `body`,
                children: [
                  l(`div`, {
                    className: `btns`,
                    children: [
                      u(L, {
                        label: e.button1,
                        link: e.link1,
                        ghost: !1,
                        newTab: !1,
                        submit: !1,
                        visual: !1,
                        full: !1,
                      }),
                      u(L, {
                        label: e.button2,
                        link: e.link2,
                        ghost: !0,
                        newTab: !1,
                        submit: !1,
                        visual: !1,
                        full: !1,
                      }),
                    ],
                  }),
                  u(`p`, { className: `note`, children: e.buttonNote }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `sy lit`,
            tabIndex: 0,
            style: h(3),
            children: [
              u(`span`, { className: `mono`, children: `Icons` }),
              l(`div`, {
                className: `body`,
                children: [
                  u(`div`, {
                    className: `ic-row`,
                    children: (e.icons || []).map((e, t) => u(i, { children: Ee(e) }, t)),
                  }),
                  u(`p`, { className: `note`, children: e.iconNote }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `sy shader`,
            style: h(4),
            children: [
              u(`div`, {
                className: `glass`,
                "aria-hidden": `true`,
                children: u(Se, {
                  lightX: 0.5,
                  lightY: 0.45,
                  gain: 2.4,
                  rib: 8,
                  spread: 1,
                  seed: e.seed,
                  vignette: 1,
                  floor: 0,
                  sweep: 0,
                  cursor: !0,
                  mode: `fill`,
                  word: ``,
                  overlay: `none`,
                }),
              }),
              u(`span`, { className: `mono`, children: `Shader` }),
              u(`div`, { className: `body` }),
              u(`p`, { className: `note`, children: e.shaderNote }),
            ],
          }),
          l(`div`, {
            className: `sy`,
            style: h(5),
            children: [
              u(`span`, { className: `mono`, children: `Motion` }),
              u(`div`, {
                className: `body`,
                children: u(`ul`, {
                  className: `mo-list`,
                  children: (e.motion || []).map((e, t) =>
                    l(
                      `li`,
                      {
                        children: [
                          u(`span`, { children: e.label }),
                          u(`span`, { className: `mono`, children: e.value }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var ct,
  lt,
  K,
  q,
  ut,
  dt = e(() => {
    (r(),
      f(),
      p(),
      k(),
      z(),
      _e(),
      Te(),
      Ae(),
      (ct = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (lt = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (K = `rgba(243,243,243,.12)`),
      (q = `cubic-bezier(.16,1,.3,1)`),
      (ut = `
.nl-sy{${lt};width:100%}
.nl-sy .mono{${ct}}
.nl-sy .sys{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid ${K}}
.nl-sy .sy{position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;gap:18px;min-height:300px;padding:var(--syp,30px);outline:none;transition:opacity 1.1s ${q},transform 1.1s ${q}}
.nl-sy .sy:not(:nth-child(3n)){border-right:1px solid ${K}}
.nl-sy .sy:nth-child(-n+3){border-bottom:1px solid ${K}}
.nl-sy .sy > .mono:first-child{color:#A6A6A6}
.nl-sy .body{flex:1;display:flex;flex-direction:column;justify-content:center;gap:12px}
.nl-sy .note{margin:0;color:#A6A6A6;font-weight:400;font-size:14px}
.nl-sy .ty-a{font-size:84px;font-weight:400;letter-spacing:-.06em;line-height:.9}
.nl-sy .ty-row{display:flex;justify-content:space-between;align-items:baseline;gap:12px;border-top:1px solid ${K};padding-top:10px}
.nl-sy .ty-row span:last-child{color:#A6A6A6}
.nl-sy .sw{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.nl-sy .sw div{display:flex;flex-direction:column;gap:8px}
.nl-sy .sw i{display:block;aspect-ratio:1;box-shadow:inset 0 0 0 1px ${K}}
.nl-sy .sw span{font:400 9px/1.3 "Geist Mono",monospace;letter-spacing:.06em;color:#A6A6A6;text-transform:uppercase}
.nl-sy .btns{display:flex;flex-wrap:wrap;gap:10px}
.nl-sy .ic-row{display:flex;flex-wrap:wrap;gap:22px 26px}
.nl-sy .ic-row .nl-di{width:40px;height:26px}
.nl-sy .glass{position:absolute;inset:0;z-index:-2}
.nl-sy .shader::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.65),transparent 45%,rgba(0,0,0,.7))}
.nl-sy .mo-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.nl-sy .mo-list li{display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:1px solid ${K};font-weight:400;font-size:14px}
.nl-sy .mo-list li span:last-child{color:#A6A6A6}
.nl-sy.pre .sy{opacity:0;transform:translateY(28px)}
.nl-sy.is-md .sys{grid-template-columns:1fr 1fr}
.nl-sy.is-md .sy:not(:nth-child(3n)){border-right:0}
.nl-sy.is-md .sy:nth-child(odd){border-right:1px solid ${K}}
.nl-sy.is-md .sy:nth-child(-n+4){border-bottom:1px solid ${K}}
.nl-sy.is-sm .sys{grid-template-columns:1fr}
.nl-sy.is-sm .sy,.nl-sy.is-sm .sy:nth-child(odd){border-right:0}
.nl-sy.is-sm .sy:not(:last-child){border-bottom:1px solid ${K}}
.nl-sy.is-sm .ty-a{font-size:64px}
${De}
`),
      (G.defaultProps = {
        fontA: `Inter Tight`,
        weightsA: `300 · 400 · 500`,
        fontB: `Geist Mono`,
        useB: `Labels · Data`,
        swatches: [
          { name: `Black`, hex: `#000000` },
          { name: `White`, hex: `#F3F3F3` },
          { name: `Gray`, hex: `#A6A6A6` },
          { name: `Violet`, hex: `#6E4BFF` },
          { name: `Lilac`, hex: `#C9BDFF` },
        ],
        colourNote: `Violet appears only as light: the shader, glows and hover lines.`,
        button1: `Plan capacity`,
        link1: `/contact-01`,
        button2: `See pricing`,
        link2: `/pricing-01`,
        buttonNote: `Hover: the fill wipes across and the arrow cell opens.`,
        icons: [`wind`, `snow`, `hydro`, `shield`, `drop`, `heat`, `chip`, `pulse`],
        iconNote: `Dot-matrix line icons. Hover this tile to light them.`,
        shaderNote: `Ribbed silk: violet light through fluted glass. Move the cursor over it.`,
        seed: 5,
        motion: [
          { label: `Headlines`, value: `Blur-in` },
          { label: `Figures`, value: `Count from 0` },
          { label: `Images`, value: `Clip-open` },
          { label: `Shader`, value: `Follows the cursor` },
        ],
      }),
      E(G, {
        fontA: { type: O.String, title: `Font 1` },
        weightsA: { type: O.String, title: `Font 1 weights` },
        fontB: { type: O.String, title: `Font 2` },
        useB: { type: O.String, title: `Font 2 use` },
        swatches: {
          type: O.Array,
          title: `Colours`,
          maxCount: 5,
          control: {
            type: O.Object,
            controls: {
              name: { type: O.String, title: `Name` },
              hex: { type: O.Color, title: `Colour` },
            },
          },
        },
        colourNote: { type: O.String, title: `Colour note`, displayTextArea: !0 },
        button1: { type: O.String, title: `Button 1` },
        link1: { type: O.Link, title: `Link 1` },
        button2: { type: O.String, title: `Button 2` },
        link2: { type: O.Link, title: `Link 2` },
        buttonNote: { type: O.String, title: `Button note`, displayTextArea: !0 },
        icons: {
          type: O.Array,
          title: `Icons`,
          maxCount: 8,
          control: { type: O.Enum, options: ke },
        },
        iconNote: { type: O.String, title: `Icon note`, displayTextArea: !0 },
        shaderNote: { type: O.String, title: `Shader note`, displayTextArea: !0 },
        seed: { type: O.Number, title: `Shader seed`, min: 0, max: 99, step: 1 },
        motion: {
          type: O.Array,
          title: `Motion`,
          maxCount: 6,
          control: {
            type: O.Object,
            controls: {
              label: { type: O.String, title: `Label` },
              value: { type: O.String, title: `Value` },
            },
          },
        },
      }));
  });
function J(e) {
  return l(`div`, {
    className: `nl-shot`,
    style: { ...e.style },
    "aria-hidden": `true`,
    children: [
      H(),
      u(`style`, { dangerouslySetInnerHTML: { __html: ft } }),
      u(`i`, { className: `dim` }),
      u(`i`, { className: `edge` }),
      u(`span`, { className: `open`, children: e.label }),
    ],
  });
}
var ft,
  pt = e(() => {
    (f(),
      k(),
      z(),
      (ft = `
.nl-shot{position:absolute;inset:0;pointer-events:none;--ease:cubic-bezier(.16,1,.3,1)}
.nl-shot .dim{position:absolute;inset:0;background:#000;opacity:.12;transition:opacity .8s var(--ease)}
.nl-shot .edge{position:absolute;inset:0;z-index:2;box-shadow:inset 0 0 0 1px rgba(243,243,243,.12);transition:box-shadow .5s}
.nl-shot .open{position:absolute;right:12px;bottom:12px;z-index:3;display:flex;align-items:center;height:28px;padding:0 26px 0 10px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 9.5 9.5 2.5M4 2.5h5.5V8' stroke='%23000' stroke-width='1.1'/%3E%3C/svg%3E") right 10px center/10px 10px no-repeat,#F3F3F3;color:#000;font:400 10px/1 "Geist Mono",ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap;opacity:0;transform:translateY(8px);transition:opacity .4s,transform .6s var(--ease)}
@media (hover:hover){
a:hover .nl-shot .dim{opacity:0}
a:hover .nl-shot .edge{box-shadow:inset 0 0 0 1px rgba(201,189,255,.55),inset 0 -60px 80px -40px rgba(110,75,255,.35)}
a:hover .nl-shot .open{opacity:1;transform:none}
}
a:focus-visible .nl-shot .dim{opacity:0}
a:focus-visible .nl-shot .edge{box-shadow:inset 0 0 0 1px rgba(201,189,255,.55),inset 0 -60px 80px -40px rgba(110,75,255,.35)}
a:focus-visible .nl-shot .open{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.nl-shot *{transition:none!important}}
`),
      (J.defaultProps = { label: `Open page` }),
      E(J, { label: { type: O.String, title: `Label` } }));
  }),
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  Y,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  X,
  kt,
  Z,
  At,
  Q,
  jt,
  Mt,
  $,
  Nt;
e(() => {
  (f(),
    k(),
    ne(),
    p(),
    N(),
    me(),
    je(),
    be(),
    Oe(),
    xe(),
    dt(),
    ve(),
    pt(),
    Me(),
    Ie(),
    Be(),
    We(),
    Je(),
    Qe(),
    nt(),
    ot(),
    (mt = g(V)),
    (ht = g(U)),
    (gt = g(R)),
    (_t = g(J)),
    (vt = g(G)),
    (yt = g(W)),
    (bt = g(I)),
    (xt = g(L)),
    (St = g(B)),
    (Ct = g(P)),
    (Y = b(S)),
    (wt = g(F)),
    (Tt = {
      fE4lpni8J: `(max-width: 809.98px)`,
      O0ORWHxyH: `(min-width: 810px) and (max-width: 1279.98px)`,
      WQLkyLRf1: `(min-width: 1280px)`,
    }),
    (Et = []),
    (Dt = `framer-e3Uir`),
    (Ot = {
      fE4lpni8J: `framer-v-14dfz14`,
      O0ORWHxyH: `framer-v-1lkqtvt`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (kt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 2.4, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Z = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (At = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 2.2, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Q = { Desktop: `WQLkyLRf1`, Phone: `fE4lpni8J`, Tablet: `O0ORWHxyH` }),
    (jt = ({ value: e }) =>
      de()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = ae(
      d(function (e, r) {
        let a = s(null),
          o = r ?? a,
          d = n(),
          { activeLocale: f, setLocale: p } = le(),
          m = ue(),
          { style: ne, className: g, layoutId: ie, variant: v, ...ae } = Mt(e);
        oe(c(() => st({}, f), [f]));
        let [b, x] = fe(v, Tt, !1),
          E = re(Dt, qe, Fe, tt, Ze, at, ze, Ue),
          de = t(C)?.isLayoutTemplate,
          O = !!t(ee)?.transition?.layout,
          k = X(de, O);
        se();
        let A = pe(`vkp5yqBCe`),
          N = s(null);
        return (
          ce({}),
          u(C.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Q,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Ot,
            },
            children: l(te, {
              id: ie ?? d,
              children: [
                u(jt, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                l(h.div, {
                  ...ae,
                  className: re(E, `framer-72rtr7`, g),
                  ref: o,
                  style: { ...ne },
                  children: [
                    u(h.div, {
                      className: `framer-17munss`,
                      "data-framer-name": `Navigation`,
                      layout: k,
                      children: u(j, {
                        links: [
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          u(T, {
                            children: u(S, {
                              className: `framer-14llm8f-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `zigdm0six`,
                              scopeId: `augiA20Il`,
                              children: u(M, {
                                breakpoint: b,
                                overrides: {
                                  fE4lpni8J: {
                                    allPagesLink: e[17],
                                    ctaLink: e[16],
                                    links: [
                                      { id: `n4mVMO52L`, label: `Company`, link: e[12] },
                                      { id: `NsdOCUy7B`, label: `Pricing`, link: e[13] },
                                      { id: `mRHiVHBnB`, label: `Customers`, link: e[14] },
                                      { id: `lL4URjULg`, label: `News`, link: e[15] },
                                    ],
                                  },
                                  O0ORWHxyH: {
                                    allPagesLink: e[11],
                                    ctaLink: e[10],
                                    links: [
                                      { id: `n4mVMO52L`, label: `Company`, link: e[6] },
                                      { id: `NsdOCUy7B`, label: `Pricing`, link: e[7] },
                                      { id: `mRHiVHBnB`, label: `Customers`, link: e[8] },
                                      { id: `lL4URjULg`, label: `News`, link: e[9] },
                                    ],
                                  },
                                },
                                children: u(V, {
                                  allPages: `All pages`,
                                  allPagesLink: e[5],
                                  bare: !1,
                                  bottomBlur: !0,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[4],
                                  current: ``,
                                  formStyle: !0,
                                  height: `100%`,
                                  id: `zigdm0six`,
                                  items: [
                                    { id: `hzsU_e2Rc`, label: `Home`, note: `4 layouts` },
                                    { id: `B_AEc4qBm`, label: `Company`, note: `Since 2024` },
                                    { id: `ob6GLGTVN`, label: `Pricing`, note: `From $1.62` },
                                    { id: `e1A28d2d4`, label: `Case studies`, note: `6 teams` },
                                    { id: `D_Kduga49`, label: `News`, note: `Field notes` },
                                    { id: `zgh2nLnrD`, label: `Careers`, note: `7 open roles` },
                                    { id: `ktFywV2WV`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `zigdm0six`,
                                  links: [
                                    { id: `n4mVMO52L`, label: `Company`, link: e[0] },
                                    { id: `NsdOCUy7B`, label: `Pricing`, link: e[1] },
                                    { id: `mRHiVHBnB`, label: `Customers`, link: e[2] },
                                    { id: `lL4URjULg`, label: `News`, link: e[3] },
                                  ],
                                  listHover: !0,
                                  logo: `Nordlys`,
                                  logoLink: `/`,
                                  preloader: !0,
                                  rail: !0,
                                  showLinks: !1,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    u(h.div, {
                      className: `framer-10j1n03`,
                      "data-framer-name": `Hero`,
                      layout: k,
                      children: u(j, {
                        links: [
                          {
                            href: { hash: `:vkp5yqBCe`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:vkp5yqBCe`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: { hash: `:vkp5yqBCe`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          u(T, {
                            children: u(S, {
                              className: `framer-gibpfq-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `Een_TTtCT`,
                              scopeId: `augiA20Il`,
                              children: u(M, {
                                breakpoint: b,
                                overrides: {
                                  fE4lpni8J: {
                                    buttons: [
                                      {
                                        ghost: !0,
                                        id: `izpwGyN5U`,
                                        label: `Browse pages`,
                                        link: e[2],
                                      },
                                    ],
                                  },
                                  O0ORWHxyH: {
                                    buttons: [
                                      {
                                        ghost: !0,
                                        id: `izpwGyN5U`,
                                        label: `Browse pages`,
                                        link: e[1],
                                      },
                                    ],
                                  },
                                },
                                children: u(U, {
                                  buttons: [
                                    {
                                      ghost: !0,
                                      id: `izpwGyN5U`,
                                      label: `Browse pages`,
                                      link: e[0],
                                    },
                                  ],
                                  currency: `$`,
                                  eyebrow: `Framer template · Version 1.0 · 20 pages`,
                                  frame: !1,
                                  gain: 2.4,
                                  height: `100%`,
                                  id: `Een_TTtCT`,
                                  layout: `standard`,
                                  layoutId: `Een_TTtCT`,
                                  lightX: 0.72,
                                  lightY: 0.6,
                                  maxPx: 1e3,
                                  meta: [
                                    { id: `CLBGIEO21`, label: `Pages`, value: `20`, violet: !1 },
                                    {
                                      id: `hhnTKfx9R`,
                                      label: `CMS collections`,
                                      value: `Case studies · News · Careers`,
                                      violet: !1,
                                    },
                                    {
                                      id: `SGksT2qQY`,
                                      label: `Motion`,
                                      value: `WebGL · Scroll`,
                                      violet: !1,
                                    },
                                    {
                                      id: `Fz2GZN5d_`,
                                      label: `Breakpoints`,
                                      value: `1280 · 810 · 390`,
                                      violet: !1,
                                    },
                                  ],
                                  minPx: 640,
                                  minVh: 100,
                                  nowItems: [
                                    {
                                      id: `V2ptLLGoW`,
                                      label: `Outside`,
                                      unit: `°C`,
                                      value: `−4.2`,
                                    },
                                    { id: `cPmYB9gRp`, label: `PUE`, unit: ``, value: `1.08` },
                                    { id: `nzXdfv9oV`, label: `Hydro`, unit: `%`, value: `98.7` },
                                  ],
                                  nowLabel: `Narvik now`,
                                  photo: `none`,
                                  price: `1.46`,
                                  priceLine: `per GPU-hour, three-year Sovereign,`,
                                  priceTone: `all-in.`,
                                  rib: 10,
                                  seed: 8,
                                  shade: `left`,
                                  spread: 1.1,
                                  stackMeta: !1,
                                  style: { width: `100%` },
                                  text: `Four homepages, three pricing and three contact pages, three CMS collections, company pages and a design system, all on one dark system.`,
                                  title: `An AI-infrastructure template,`,
                                  titleFluid: 4.6,
                                  titleMax: 80,
                                  titleMaxWidth: 17,
                                  titleMin: 40,
                                  tone: `cooled to 69° N.`,
                                  toneLine: !0,
                                  topRight: ``,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    l(h.div, {
                      className: `framer-5fgp6u`,
                      "data-framer-name": `Pages`,
                      id: A,
                      layout: k,
                      ref: N,
                      children: [
                        l(`div`, {
                          className: `framer-18dcc8i`,
                          "data-border": !0,
                          "data-framer-name": `PagesHead`,
                          children: [
                            u(T, {
                              children: u(S, {
                                className: `framer-togt2a-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `rE2tPyBI4`,
                                scopeId: `augiA20Il`,
                                children: u(R, {
                                  height: `100%`,
                                  id: `rE2tPyBI4`,
                                  kicker: ``,
                                  layoutId: `rE2tPyBI4`,
                                  number: `01⁠`,
                                  reveal: !0,
                                  sub: `Everything in the template`,
                                  title: `Pages`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            u(M, {
                              breakpoint: b,
                              overrides: {
                                fE4lpni8J: {
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `Open any page. Each one uses the same nav, menu, buttons, icons, shader and footer.`,
                                    }),
                                  }),
                                },
                                O0ORWHxyH: {
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `Open any page. Each one uses the same nav, menu, buttons, icons, shader and footer.`,
                                    }),
                                  }),
                                },
                              },
                              children: u(y, {
                                __fromCanvasComponent: !0,
                                children: u(i, {
                                  children: u(`p`, {
                                    className: `framer-styles-preset-wsxg2z`,
                                    "data-styles-preset": `OL1kwShSL`,
                                    dir: `auto`,
                                    children: `Open any page. Each one uses the same nav, menu, buttons, icons, shader and footer.`,
                                  }),
                                }),
                                className: `framer-kf8c6s`,
                                "data-framer-name": `PagesNote`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-gxbtxh`,
                          "data-framer-name": `Homepages`,
                          children: [
                            l(`div`, {
                              className: `framer-gxrhcp`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-klo2ps`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `Homepages`,
                                        }),
                                      }),
                                      className: `framer-1myhq5x`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `04`,
                                        }),
                                      }),
                                      className: `framer-1dhx78u`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Four directions`,
                                    }),
                                  }),
                                  className: `framer-1qlnsrs`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-vdah54`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `aiXHfKTMN` },
                                  motionChild: !0,
                                  nodeId: `F7t7FC8AJ`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-6wovqp framer-lux5qc`,
                                    "data-framer-name": `Page 01`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  338 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg`,
                                              srcSet: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo.jpg 512w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-6d5216.jpg 1024w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  338 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg`,
                                              srcSet: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo.jpg 512w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-6d5216.jpg 1024w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                222 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg`,
                                            srcSet: `../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo.jpg 512w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-6d5216.jpg 1024w,../../assets/images/UWMsiIGYbrURxQc6ekJQz8Zh9Mo-170b02.jpg 1440w`,
                                          },
                                          className: `framer-793yjf`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-189dg3-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `VDspW_6St`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `VDspW_6St`,
                                                label: `Open page`,
                                                layoutId: `VDspW_6St`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1t26ili`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-waen9r`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `01`,
                                                  }),
                                                }),
                                                className: `framer-qi5fib`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Home — Overview`,
                                                  }),
                                                }),
                                                className: `framer-1vcb2yr`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Full company story`,
                                              }),
                                            }),
                                            className: `framer-h6jj42`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `W8nXdKNSN` },
                                  motionChild: !0,
                                  nodeId: `dHwN4Y1d1`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-pz23do framer-lux5qc`,
                                    "data-framer-name": `Page 02`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  338 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg`,
                                              srcSet: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto.jpg 512w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-5f5eb3.jpg 1024w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  338 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg`,
                                              srcSet: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto.jpg 512w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-5f5eb3.jpg 1024w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                222 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg`,
                                            srcSet: `../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto.jpg 512w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-5f5eb3.jpg 1024w,../../assets/images/UwNxEtyjxbGGIECu52wlMIBcXto-6fb87e.jpg 1440w`,
                                          },
                                          className: `framer-i9g7zx`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-2k4wni-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `xtRNGqeIJ`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `xtRNGqeIJ`,
                                                label: `Open page`,
                                                layoutId: `xtRNGqeIJ`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1upvzv3`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1mxp3y7`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `02`,
                                                  }),
                                                }),
                                                className: `framer-6evli4`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Home — The horizon`,
                                                  }),
                                                }),
                                                className: `framer-m4s8pk`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Slit hero · Sites`,
                                              }),
                                            }),
                                            className: `framer-vssizh`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `G7lw_m7n0` },
                                  motionChild: !0,
                                  nodeId: `ceRo466km`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-1ommg7m framer-lux5qc`,
                                    "data-framer-name": `Page 03`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  338 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  615.4 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg`,
                                              srcSet: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk.jpg 512w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-199d6f.jpg 1024w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  338 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg`,
                                              srcSet: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk.jpg 512w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-199d6f.jpg 1024w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                222 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg`,
                                            srcSet: `../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk.jpg 512w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-199d6f.jpg 1024w,../../assets/images/wswlDzkJofUjYwsN9aLN2SExgFk-f2e947.jpg 1440w`,
                                          },
                                          className: `framer-1lo1d6l`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-y01yaw-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `MI3OdxbH5`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `MI3OdxbH5`,
                                                label: `Open page`,
                                                layoutId: `MI3OdxbH5`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-y1esl9`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-hqwv96`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `03`,
                                                  }),
                                                }),
                                                className: `framer-yxqm0e`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Home — The signal`,
                                                  }),
                                                }),
                                                className: `framer-1bybv3y`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Mark hero · Data`,
                                              }),
                                            }),
                                            className: `framer-1fhew8a`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `UQ6wc3FlD` },
                                  motionChild: !0,
                                  nodeId: `ET_PhAa0E`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-yhw393 framer-lux5qc`,
                                    "data-framer-name": `Page 04`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  338 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  923.1 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg`,
                                              srcSet: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc.jpg 512w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-02ea41.jpg 1024w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  338 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg`,
                                              srcSet: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc.jpg 512w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-02ea41.jpg 1024w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                222 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg`,
                                            srcSet: `../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc.jpg 512w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-02ea41.jpg 1024w,../../assets/images/jmbCzVwoEN8oQi7LWFSXKmLxPc-75074a.jpg 1440w`,
                                          },
                                          className: `framer-1hh94ow`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-i0c8k9-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `juZaGalpF`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `juZaGalpF`,
                                                label: `Open page`,
                                                layoutId: `juZaGalpF`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1vh75ea`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1dfb8j1`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `04`,
                                                  }),
                                                }),
                                                className: `framer-tnve24`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Home — Live`,
                                                  }),
                                                }),
                                                className: `framer-1cuxv7b`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Terminal hero · Platform`,
                                              }),
                                            }),
                                            className: `framer-1sdjyl5`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-1wn0ivg`,
                          "data-framer-name": `Pricing`,
                          children: [
                            l(`div`, {
                              className: `framer-71f6ru`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-v0bend`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `Pricing`,
                                        }),
                                      }),
                                      className: `framer-e7qda7`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `03`,
                                        }),
                                      }),
                                      className: `framer-16q8pze`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Three layouts`,
                                    }),
                                  }),
                                  className: `framer-1abe5cc`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-j5qjyo`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `kZ7752sFG` },
                                  motionChild: !0,
                                  nodeId: `tsEqUS4h5`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-1k7fqej framer-lux5qc`,
                                    "data-framer-name": `Page 05`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  1661.04 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg`,
                                              srcSet: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U.jpg 512w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-c4d287.jpg 1024w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1091.64 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg`,
                                              srcSet: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U.jpg 512w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-c4d287.jpg 1024w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                613.94 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg`,
                                            srcSet: `../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U.jpg 512w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-c4d287.jpg 1024w,../../assets/images/gYZy9UdphD1qPSmzpb558pS8u2U-ae9c88.jpg 1440w`,
                                          },
                                          className: `framer-3ktqtg`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-1c2cu54-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `UuJzs7s3I`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `UuJzs7s3I`,
                                                label: `Open page`,
                                                layoutId: `UuJzs7s3I`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1ohwnh0`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-gq2fvf`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `05`,
                                                  }),
                                                }),
                                                className: `framer-sxkul6`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Pricing — Plans`,
                                                  }),
                                                }),
                                                className: `framer-1dhee1o`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Term switch`,
                                              }),
                                            }),
                                            className: `framer-54btzu`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `utcMNoknc` },
                                  motionChild: !0,
                                  nodeId: `IDrCLdVcx`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-2nqe3w framer-lux5qc`,
                                    "data-framer-name": `Page 06`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  1661.04 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg`,
                                              srcSet: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY.jpg 512w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-8aa907.jpg 1024w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1091.64 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg`,
                                              srcSet: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY.jpg 512w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-8aa907.jpg 1024w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                613.94 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg`,
                                            srcSet: `../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY.jpg 512w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-8aa907.jpg 1024w,../../assets/images/OqCRw0LUgxSvqx0wQwFEjfiCzmY-5f7d7c.jpg 1440w`,
                                          },
                                          className: `framer-r29e3a`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-1a1a7pt-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `Pkx6ABxF1`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `Pkx6ABxF1`,
                                                label: `Open page`,
                                                layoutId: `Pkx6ABxF1`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1am6z5m`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-3imky2`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `06`,
                                                  }),
                                                }),
                                                className: `framer-yrzp3u`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Pricing — Rate card`,
                                                  }),
                                                }),
                                                className: `framer-t6ed9o`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Matrix`,
                                              }),
                                            }),
                                            className: `framer-m2ufi8`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `JJMYDiTlX` },
                                  motionChild: !0,
                                  nodeId: `ziQ0H0TI2`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-19jojmq framer-lux5qc`,
                                    "data-framer-name": `Page 07`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  1661.04 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  615.4 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg`,
                                              srcSet: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY.jpg 512w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-5a54e9.jpg 1024w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1091.64 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg`,
                                              srcSet: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY.jpg 512w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-5a54e9.jpg 1024w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                613.94 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg`,
                                            srcSet: `../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY.jpg 512w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-5a54e9.jpg 1024w,../../assets/images/cSfgpRzdZx5S7CoOMzA3Z7EMY-c7209e.jpg 1440w`,
                                          },
                                          className: `framer-vs5zvf`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-jyg2gx-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `kcyLpxkhH`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `kcyLpxkhH`,
                                                label: `Open page`,
                                                layoutId: `kcyLpxkhH`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1jigpv`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1eb2ktq`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `07`,
                                                  }),
                                                }),
                                                className: `framer-1t9wjku`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Pricing — One price`,
                                                  }),
                                                }),
                                                className: `framer-1ounedd`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Editorial`,
                                              }),
                                            }),
                                            className: `framer-u7cdyq`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-8yirdp`,
                          "data-framer-name": `Contact`,
                          children: [
                            l(`div`, {
                              className: `framer-1e8bqn2`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-u4kq2z`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `Contact`,
                                        }),
                                      }),
                                      className: `framer-6leubt`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `03`,
                                        }),
                                      }),
                                      className: `framer-shq1zc`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Three layouts`,
                                    }),
                                  }),
                                  className: `framer-1p0hxrd`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1ezy813`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `leSVJ7Uql` },
                                  motionChild: !0,
                                  nodeId: `lj3cd4MRw`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-v9doth framer-lux5qc`,
                                    "data-framer-name": `Page 08`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  2676.38 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg`,
                                              srcSet: `../../assets/images/AiY2UJvv3P716lZxf7iRYY.jpg 512w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-2b7dd2.jpg 1024w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1845.28 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg`,
                                              srcSet: `../../assets/images/AiY2UJvv3P716lZxf7iRYY.jpg 512w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-2b7dd2.jpg 1024w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1005.88 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg`,
                                            srcSet: `../../assets/images/AiY2UJvv3P716lZxf7iRYY.jpg 512w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-2b7dd2.jpg 1024w,../../assets/images/AiY2UJvv3P716lZxf7iRYY-34e8f4.jpg 1440w`,
                                          },
                                          className: `framer-17idhg1`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-1lra1nn-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `oJzMh6iIw`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `oJzMh6iIw`,
                                                label: `Open page`,
                                                layoutId: `oJzMh6iIw`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-56sljx`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1byq681`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `08`,
                                                  }),
                                                }),
                                                className: `framer-t1lpog`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Contact — Plan capacity`,
                                                  }),
                                                }),
                                                className: `framer-7ood9l`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Sales form`,
                                              }),
                                            }),
                                            className: `framer-vz8ipn`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `suiKgumT3` },
                                  motionChild: !0,
                                  nodeId: `qoj3giFel`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-sbwell framer-lux5qc`,
                                    "data-framer-name": `Page 09`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  2676.38 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg`,
                                              srcSet: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs.jpg 512w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-46d605.jpg 1024w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1845.28 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg`,
                                              srcSet: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs.jpg 512w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-46d605.jpg 1024w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1005.88 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg`,
                                            srcSet: `../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs.jpg 512w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-46d605.jpg 1024w,../../assets/images/Zs1Ta9hTxmJbqFZpmT20vKtwJTs-26bed7.jpg 1440w`,
                                          },
                                          className: `framer-1av0qq`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-h1h6j8-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `xRwTtnhyR`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `xRwTtnhyR`,
                                                label: `Open page`,
                                                layoutId: `xRwTtnhyR`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-12isprf`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-tu3uvl`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `09`,
                                                  }),
                                                }),
                                                className: `framer-elxmjt`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Contact — Offices`,
                                                  }),
                                                }),
                                                className: `framer-959y5m`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Locations`,
                                              }),
                                            }),
                                            className: `framer-1kyrv40`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `ow8r4AN8J` },
                                  motionChild: !0,
                                  nodeId: `mMUcTAHJn`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-oft6s8 framer-lux5qc`,
                                    "data-framer-name": `Page 10`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  2676.38 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  615.4 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg`,
                                              srcSet: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4.jpg 512w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-87bd93.jpg 1024w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  1845.28 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg`,
                                              srcSet: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4.jpg 512w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-87bd93.jpg 1024w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1005.88 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg`,
                                            srcSet: `../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4.jpg 512w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-87bd93.jpg 1024w,../../assets/images/2IFfdyzrRd81sUzHYO7jh7I7h4-18bba0.jpg 1440w`,
                                          },
                                          className: `framer-1bamq86`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-33nojp-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `Rkn4r2evs`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `Rkn4r2evs`,
                                                label: `Open page`,
                                                layoutId: `Rkn4r2evs`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1ibsfj3`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-bz9h8m`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `10`,
                                                  }),
                                                }),
                                                className: `framer-1k77obq`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Contact — Visit Narvik`,
                                                  }),
                                                }),
                                                className: `framer-8at43d`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Site tour`,
                                              }),
                                            }),
                                            className: `framer-47yp2o`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-16rumkl`,
                          "data-framer-name": `CMS`,
                          children: [
                            l(`div`, {
                              className: `framer-6uczhf`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-y0vsdb`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `CMS`,
                                        }),
                                      }),
                                      className: `framer-qg8ivh`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `02`,
                                        }),
                                      }),
                                      className: `framer-f9od2x`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Collections`,
                                    }),
                                  }),
                                  className: `framer-gmdudg`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-by1luy`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `f4IvkyEC_` },
                                  motionChild: !0,
                                  nodeId: `Bkwf6HfEy`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-d2zpkc framer-lux5qc`,
                                    "data-framer-name": `Page 11`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  3691.72 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg`,
                                              srcSet: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM.jpg 512w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-b042c7.jpg 1024w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  2598.92 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg`,
                                              srcSet: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM.jpg 512w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-b042c7.jpg 1024w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1397.82 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg`,
                                            srcSet: `../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM.jpg 512w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-b042c7.jpg 1024w,../../assets/images/4ixuzA3iWrEAV0aWV0X3A3WtM-27b05f.jpg 1440w`,
                                          },
                                          className: `framer-18sxycz`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-1dmkvmf-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `K_JuFmJWn`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `K_JuFmJWn`,
                                                  label: `Open page`,
                                                  layoutId: `K_JuFmJWn`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-1kyzwom`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS list`,
                                                  }),
                                                }),
                                                className: `framer-yl6jc8`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-56lqup`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-7jn5bn`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `11`,
                                                  }),
                                                }),
                                                className: `framer-ccpljt`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Case studies`,
                                                  }),
                                                }),
                                                className: `framer-pt53n1`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Collection`,
                                              }),
                                            }),
                                            className: `framer-ih4day`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: {
                                    pathVariables: { NxLzBdWey: `tensorfield` },
                                    unresolvedPathSlugs: {
                                      NxLzBdWey: {
                                        collectionId: `s7TqDO7B2`,
                                        collectionItemId: `wd2tf_ADe`,
                                      },
                                    },
                                    webPageId: `PjrO0w6gt`,
                                  },
                                  motionChild: !0,
                                  nodeId: `C9E7fH6Z0`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-g745di framer-lux5qc`,
                                    "data-framer-name": `Page 12`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  3691.72 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg`,
                                              srcSet: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg.jpg 512w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-d093c4.jpg 1024w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  2598.92 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg`,
                                              srcSet: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg.jpg 512w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-d093c4.jpg 1024w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1397.82 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg`,
                                            srcSet: `../../assets/images/po4g6pHCzozyxlp6W9VgDEg.jpg 512w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-d093c4.jpg 1024w,../../assets/images/po4g6pHCzozyxlp6W9VgDEg-84ac5b.jpg 1440w`,
                                          },
                                          className: `framer-13jy377`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-1b9nb95-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `kK1hSHKUk`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `kK1hSHKUk`,
                                                  label: `Open page`,
                                                  layoutId: `kK1hSHKUk`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-1okcsrl`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS template`,
                                                  }),
                                                }),
                                                className: `framer-yjyldq`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-8bnhq4`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-uyi5xf`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `12`,
                                                  }),
                                                }),
                                                className: `framer-1mdqagb`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Case study`,
                                                  }),
                                                }),
                                                className: `framer-dlq27z`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Template`,
                                              }),
                                            }),
                                            className: `framer-1xxqjcy`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `JXDOUrKk6` },
                                  motionChild: !0,
                                  nodeId: `FkQUR6I2O`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-zxlkov framer-lux5qc`,
                                    "data-framer-name": `Page 13`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  3691.72 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  615.4 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg`,
                                              srcSet: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o.jpg 512w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-72fa41.jpg 1024w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  2598.92 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg`,
                                              srcSet: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o.jpg 512w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-72fa41.jpg 1024w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1397.82 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg`,
                                            srcSet: `../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o.jpg 512w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-72fa41.jpg 1024w,../../assets/images/3Wcan6uqcIdZDUAMxvrmM8L45o-777820.jpg 1440w`,
                                          },
                                          className: `framer-n8potp`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-1xcqbh2-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `r2oD0PH8O`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `r2oD0PH8O`,
                                                  label: `Open page`,
                                                  layoutId: `r2oD0PH8O`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-1g5g3i`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS list`,
                                                  }),
                                                }),
                                                className: `framer-1bvzfza`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-am929v`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-fh795s`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `13`,
                                                  }),
                                                }),
                                                className: `framer-1ungg70`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `News`,
                                                  }),
                                                }),
                                                className: `framer-xamflc`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Collection`,
                                              }),
                                            }),
                                            className: `framer-49uvtj`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: {
                                    pathVariables: { PDM6PbwuL: `why-we-cool-with-air-not-water` },
                                    unresolvedPathSlugs: {
                                      PDM6PbwuL: {
                                        collectionId: `k3QcAAKya`,
                                        collectionItemId: `csWMw8vBm`,
                                      },
                                    },
                                    webPageId: `zX8G5Rmeb`,
                                  },
                                  motionChild: !0,
                                  nodeId: `RxokZpPzB`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-btawzo framer-lux5qc`,
                                    "data-framer-name": `Page 14`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  3691.72 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  923.1 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg`,
                                              srcSet: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc.jpg 512w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-96cdfe.jpg 1024w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  2598.92 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg`,
                                              srcSet: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc.jpg 512w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-96cdfe.jpg 1024w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1397.82 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg`,
                                            srcSet: `../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc.jpg 512w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-96cdfe.jpg 1024w,../../assets/images/UhPcDya9QktRBd8uq26lGX7pLlc-6124b9.jpg 1440w`,
                                          },
                                          className: `framer-1wm8s57`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-kho7af-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `tiEnMPA0U`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `tiEnMPA0U`,
                                                  label: `Open page`,
                                                  layoutId: `tiEnMPA0U`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-14a4tzs`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS template`,
                                                  }),
                                                }),
                                                className: `framer-12x5on3`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-133dxkb`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1j93rm3`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `14`,
                                                  }),
                                                }),
                                                className: `framer-ureopb`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `News article`,
                                                  }),
                                                }),
                                                className: `framer-1urap7m`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Template`,
                                              }),
                                            }),
                                            className: `framer-15nj1in`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-9l9xi5`,
                          "data-framer-name": `Company`,
                          children: [
                            l(`div`, {
                              className: `framer-1wekrly`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-1by48dp`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `Company`,
                                        }),
                                      }),
                                      className: `framer-m1wsmy`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `03`,
                                        }),
                                      }),
                                      className: `framer-en87x`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `About and hiring`,
                                    }),
                                  }),
                                  className: `framer-1pzaobc`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-1ua8nep`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `ftsL6c6mE` },
                                  motionChild: !0,
                                  nodeId: `I4QjGF_sG`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-or81rg framer-lux5qc`,
                                    "data-framer-name": `Page 15`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  5014.76 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg`,
                                              srcSet: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM.jpg 512w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-1e6106.jpg 1024w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  3352.56 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg`,
                                              srcSet: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM.jpg 512w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-1e6106.jpg 1024w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1789.76 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg`,
                                            srcSet: `../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM.jpg 512w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-1e6106.jpg 1024w,../../assets/images/gyd7Xo6BejP9Bf0wnc2et6OKBM-d0745b.jpg 1440w`,
                                          },
                                          className: `framer-471o2x`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-1g746uz-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `cwR8b1Jfk`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `cwR8b1Jfk`,
                                                label: `Open page`,
                                                layoutId: `cwR8b1Jfk`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1037h9k`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-11p3fxj`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `15`,
                                                  }),
                                                }),
                                                className: `framer-nvhbwx`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Company`,
                                                  }),
                                                }),
                                                className: `framer-96e4xa`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Story · Team`,
                                              }),
                                            }),
                                            className: `framer-16yelqj`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `MEjos_75C` },
                                  motionChild: !0,
                                  nodeId: `I5KeZYAW0`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-1wgd0ea framer-lux5qc`,
                                    "data-framer-name": `Page 16`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  5014.76 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg`,
                                              srcSet: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw.jpg 512w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-494f9f.jpg 1024w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  3352.56 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg`,
                                              srcSet: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw.jpg 512w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-494f9f.jpg 1024w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1789.76 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg`,
                                            srcSet: `../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw.jpg 512w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-494f9f.jpg 1024w,../../assets/images/doAyrUH1GZnfkxW0dkbQCfMb4Gw-a08a28.jpg 1440w`,
                                          },
                                          className: `framer-17v7mnr`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-1qr5lxk-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `kzN5NRoOO`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `kzN5NRoOO`,
                                                  label: `Open page`,
                                                  layoutId: `kzN5NRoOO`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-jp5zud`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS list`,
                                                  }),
                                                }),
                                                className: `framer-11k1wpn`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1a4x7fz`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-f2lsgi`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `16`,
                                                  }),
                                                }),
                                                className: `framer-1w956lx`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Careers`,
                                                  }),
                                                }),
                                                className: `framer-mqy1yo`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Collection`,
                                              }),
                                            }),
                                            className: `framer-1u77jjh`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: {
                                    pathVariables: {
                                      Ag1lqLixQ: `platform-engineer-slurm-kubernetes`,
                                    },
                                    unresolvedPathSlugs: {
                                      Ag1lqLixQ: {
                                        collectionId: `dzeGrkSa8`,
                                        collectionItemId: `EEbhpGjKV`,
                                      },
                                    },
                                    webPageId: `JtdSvG6rD`,
                                  },
                                  motionChild: !0,
                                  nodeId: `vShRsGUcl`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-pa8mtt framer-lux5qc`,
                                    "data-framer-name": `Page 17`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  5014.76 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  615.4 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg`,
                                              srcSet: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY.jpg 512w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-6fd2e5.jpg 1024w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  3352.56 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  323.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg`,
                                              srcSet: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY.jpg 512w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-6fd2e5.jpg 1024w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: l(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                1789.76 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg`,
                                            srcSet: `../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY.jpg 512w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-6fd2e5.jpg 1024w,../../assets/images/4lpF7Ys0Lqg9BbgisL4hewGcRY-c69e49.jpg 1440w`,
                                          },
                                          className: `framer-ml7ss`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: [
                                            u(T, {
                                              children: u(S, {
                                                className: `framer-1cnjhjm-container`,
                                                "data-code-component-plugin-id": `mcp001`,
                                                isAuthoredByUser: !0,
                                                nodeId: `JHVh7V7Pr`,
                                                scopeId: `augiA20Il`,
                                                children: u(J, {
                                                  height: `100%`,
                                                  id: `JHVh7V7Pr`,
                                                  label: `Open page`,
                                                  layoutId: `JHVh7V7Pr`,
                                                  style: { height: `100%`, width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(`div`, {
                                              className: `framer-15aa2zd`,
                                              "data-border": !0,
                                              "data-framer-name": `Tag`,
                                              children: u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-8xfnpq`,
                                                    "data-styles-preset": `tZkUHAzDW`,
                                                    dir: `auto`,
                                                    children: `CMS template`,
                                                  }),
                                                }),
                                                className: `framer-1c3bkcn`,
                                                "data-framer-name": `TagText`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1szdsh9`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-18hag8w`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `17`,
                                                  }),
                                                }),
                                                className: `framer-phya0s`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Career`,
                                                  }),
                                                }),
                                                className: `framer-1c0q33a`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Template`,
                                              }),
                                            }),
                                            className: `framer-m9zsny`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-1jsdfku`,
                          "data-framer-name": `Utility`,
                          children: [
                            l(`div`, {
                              className: `framer-zqnr9x`,
                              "data-border": !0,
                              "data-framer-name": `Group head`,
                              children: [
                                l(`div`, {
                                  className: `framer-1eqt6no`,
                                  "data-framer-name": `Group title`,
                                  children: [
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`h3`, {
                                          className: `framer-styles-preset-1up4d44`,
                                          "data-styles-preset": `Vsin8i4CA`,
                                          dir: `auto`,
                                          children: `Utility`,
                                        }),
                                      }),
                                      className: `framer-az9xlf`,
                                      "data-framer-name": `Group name`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-8xfnpq`,
                                          "data-styles-preset": `tZkUHAzDW`,
                                          dir: `auto`,
                                          children: `02`,
                                        }),
                                      }),
                                      className: `framer-1wqizy8`,
                                      "data-framer-name": `Count`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(y, {
                                  __fromCanvasComponent: !0,
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Ready for Framer`,
                                    }),
                                  }),
                                  className: `framer-1nr19ul`,
                                  "data-framer-name": `Group sub`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(`div`, {
                              className: `framer-tc6bn5`,
                              "data-framer-name": `Grid`,
                              children: [
                                u(w, {
                                  href: { webPageId: `Az4rug3ML` },
                                  motionChild: !0,
                                  nodeId: `QtATddXEu`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-1bicf1m framer-lux5qc`,
                                    "data-framer-name": `Page 18`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  6030.1 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg`,
                                              srcSet: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg.jpg 512w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-ebf108.jpg 1024w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  4106.2 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg`,
                                              srcSet: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg.jpg 512w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-ebf108.jpg 1024w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                2181.7 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg`,
                                            srcSet: `../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg.jpg 512w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-ebf108.jpg 1024w,../../assets/images/2KTay0KnlV3iJ4CnmUFnLNuL0pg-bf48d8.jpg 1440w`,
                                          },
                                          className: `framer-1j8q9j7`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-i0lzy1-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `Hn1QfUpXN`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `Hn1QfUpXN`,
                                                label: `Open page`,
                                                layoutId: `Hn1QfUpXN`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-1fixw4l`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-hkfeda`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `18`,
                                                  }),
                                                }),
                                                className: `framer-1yw5ure`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `404`,
                                                  }),
                                                }),
                                                className: `framer-relx7j`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Not found`,
                                              }),
                                            }),
                                            className: `framer-idjmmz`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                u(w, {
                                  href: { webPageId: `xnQ2EJwoO` },
                                  motionChild: !0,
                                  nodeId: `eqhDkUCkE`,
                                  openInNewTab: !1,
                                  scopeId: `augiA20Il`,
                                  children: l(h.a, {
                                    className: `framer-civq2a framer-lux5qc`,
                                    "data-framer-name": `Page 19`,
                                    children: [
                                      u(M, {
                                        breakpoint: b,
                                        overrides: {
                                          fE4lpni8J: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  96 +
                                                  6030.1 +
                                                  56 +
                                                  68.24 +
                                                  0 +
                                                  307.7 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                              src: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg`,
                                              srcSet: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog.jpg 512w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-d6f6d7.jpg 1024w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg 1440w`,
                                            },
                                          },
                                          O0ORWHxyH: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 900,
                                              intrinsicWidth: 1440,
                                              loading: _(
                                                (m?.y || 0) +
                                                  0 +
                                                  700 +
                                                  120 +
                                                  4106.2 +
                                                  64 +
                                                  74.24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0
                                              ),
                                              pixelHeight: 900,
                                              pixelWidth: 1440,
                                              sizes: `max((${m?.width || `100vw`} - 58px) / 2, 50px)`,
                                              src: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg`,
                                              srcSet: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog.jpg 512w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-d6f6d7.jpg 1024w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg 1440w`,
                                            },
                                          },
                                        },
                                        children: u(D, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 900,
                                            intrinsicWidth: 1440,
                                            loading: _(
                                              (m?.y || 0) +
                                                0 +
                                                700 +
                                                179 +
                                                2181.7 +
                                                72 +
                                                74.24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 900,
                                            pixelWidth: 1440,
                                            sizes: `max((${m?.width || `100vw`} - 122px) / 4, 50px)`,
                                            src: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg`,
                                            srcSet: `../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog.jpg 512w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-d6f6d7.jpg 1024w,../../assets/images/XpTKk4l6AesSzb1dPLsglrLbUog-a2dc7a.jpg 1440w`,
                                          },
                                          className: `framer-5qxmhc`,
                                          "data-border": !0,
                                          "data-framer-name": `Shot`,
                                          children: u(T, {
                                            children: u(S, {
                                              className: `framer-1t30393-container`,
                                              "data-code-component-plugin-id": `mcp001`,
                                              isAuthoredByUser: !0,
                                              nodeId: `ZqzM6Lag1`,
                                              scopeId: `augiA20Il`,
                                              children: u(J, {
                                                height: `100%`,
                                                id: `ZqzM6Lag1`,
                                                label: `Open page`,
                                                layoutId: `ZqzM6Lag1`,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-fi9po2`,
                                        "data-framer-name": `Caption`,
                                        children: [
                                          l(`div`, {
                                            className: `framer-1l9cuys`,
                                            "data-framer-name": `Title row`,
                                            children: [
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vj4i3z`,
                                                    "data-styles-preset": `nm2zECWKu`,
                                                    dir: `auto`,
                                                    children: `19`,
                                                  }),
                                                }),
                                                className: `framer-1co04jk`,
                                                "data-framer-name": `Number`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(y, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-vb9fj8`,
                                                    "data-styles-preset": `ojHHcPZoV`,
                                                    dir: `auto`,
                                                    children: `Design system`,
                                                  }),
                                                }),
                                                className: `framer-mr4eun`,
                                                "data-framer-name": `Title`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(y, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-14yqjsj`,
                                                "data-styles-preset": `X0BbqEMSb`,
                                                dir: `auto`,
                                                children: `Every token`,
                                              }),
                                            }),
                                            className: `framer-1wcbwc0`,
                                            "data-framer-name": `Sub`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l(h.div, {
                      className: `framer-1ge1wtl`,
                      "data-framer-name": `System`,
                      layout: k,
                      children: [
                        l(`div`, {
                          className: `framer-12lqbyb`,
                          "data-border": !0,
                          "data-framer-name": `SysHead`,
                          children: [
                            u(T, {
                              children: u(S, {
                                className: `framer-ukiqjl-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `jSMaAkon8`,
                                scopeId: `augiA20Il`,
                                children: u(R, {
                                  height: `100%`,
                                  id: `jSMaAkon8`,
                                  kicker: ``,
                                  layoutId: `jSMaAkon8`,
                                  number: `02⁠`,
                                  reveal: !0,
                                  sub: `One set of parts`,
                                  title: `System`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            u(M, {
                              breakpoint: b,
                              overrides: {
                                fE4lpni8J: {
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `Two typefaces, five colours, one button, one icon style and one shader. Every page is built from these.`,
                                    }),
                                  }),
                                },
                                O0ORWHxyH: {
                                  children: u(i, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `Two typefaces, five colours, one button, one icon style and one shader. Every page is built from these.`,
                                    }),
                                  }),
                                },
                              },
                              children: u(y, {
                                __fromCanvasComponent: !0,
                                children: u(i, {
                                  children: u(`p`, {
                                    className: `framer-styles-preset-wsxg2z`,
                                    "data-styles-preset": `OL1kwShSL`,
                                    dir: `auto`,
                                    children: `Two typefaces, five colours, one button, one icon style and one shader. Every page is built from these.`,
                                  }),
                                }),
                                className: `framer-1qn3q3j`,
                                "data-framer-name": `SysNote`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        u(j, {
                          links: [
                            { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            u(T, {
                              children: u(S, {
                                className: `framer-d9f2ka-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `ZVaD10O9L`,
                                scopeId: `augiA20Il`,
                                children: u(M, {
                                  breakpoint: b,
                                  overrides: {
                                    fE4lpni8J: { link1: e[4], link2: e[5] },
                                    O0ORWHxyH: { link1: e[2], link2: e[3] },
                                  },
                                  children: u(G, {
                                    button1: `Plan capacity`,
                                    button2: `See pricing`,
                                    buttonNote: `Hover: the fill wipes across and the arrow cell opens.`,
                                    colourNote: `Violet appears only as light: the shader, glows and hover lines.`,
                                    fontA: `Inter Tight`,
                                    fontB: `Geist Mono`,
                                    height: `100%`,
                                    iconNote: `Dot-matrix line icons. Hover this tile to light them.`,
                                    icons: [
                                      `wind`,
                                      `snow`,
                                      `hydro`,
                                      `shield`,
                                      `drop`,
                                      `heat`,
                                      `chip`,
                                      `pulse`,
                                    ],
                                    id: `ZVaD10O9L`,
                                    layoutId: `ZVaD10O9L`,
                                    link1: e[0],
                                    link2: e[1],
                                    motion: [
                                      { id: `M6XOxm8uL`, label: `Headlines`, value: `Blur-in` },
                                      { id: `N0lU6iSjk`, label: `Figures`, value: `Count from 0` },
                                      { id: `E6acPynag`, label: `Images`, value: `Clip-open` },
                                      {
                                        id: `KNIFDosBZ`,
                                        label: `Shader`,
                                        value: `Follows the cursor`,
                                      },
                                    ],
                                    seed: 5,
                                    shaderNote: `Ribbed silk: violet light through fluted glass. Move the cursor over it.`,
                                    style: { width: `100%` },
                                    swatches: [
                                      { hex: `rgb(0, 0, 0)`, id: `ZKO2EDOvy`, name: `Black` },
                                      { hex: `rgb(243, 243, 243)`, id: `l6DsSKtnv`, name: `White` },
                                      { hex: `rgb(166, 166, 166)`, id: `QKZD2s34k`, name: `Gray` },
                                      { hex: `rgb(110, 75, 255)`, id: `ieuj3dF2l`, name: `Violet` },
                                      { hex: `rgb(201, 189, 255)`, id: `H2yJ4QYTk`, name: `Lilac` },
                                    ],
                                    useB: `Labels · Data`,
                                    weightsA: `300 · 400 · 500`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    u(h.div, {
                      className: `framer-pj0c7q`,
                      "data-framer-name": `Facts`,
                      layout: k,
                      children: u(T, {
                        children: u(S, {
                          className: `framer-spg6q2-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `fOERFIY8C`,
                          scopeId: `augiA20Il`,
                          children: u(W, {
                            height: `100%`,
                            id: `fOERFIY8C`,
                            intro: `Native layers, CMS collections and breakpoints, with code only where Framer has no native part.`,
                            items: [
                              {
                                id: `vHGhpcE41`,
                                label: `Pages, each with Desktop, Tablet and Phone layouts`,
                                unit: ``,
                                value: `20`,
                              },
                              {
                                id: `NPwXzqoM0`,
                                label: `CMS collections with list and detail pages`,
                                unit: ``,
                                value: `3`,
                              },
                              {
                                id: `CSqaWe85_`,
                                label: `Dot-matrix icons, plus client logos`,
                                unit: ``,
                                value: `8`,
                              },
                              {
                                id: `UUvewc7Zo`,
                                label: `Calculators or custom apps`,
                                unit: ``,
                                value: `0`,
                              },
                            ],
                            layoutId: `fOERFIY8C`,
                            number: `03⁠`,
                            style: { width: `100%` },
                            sub: `What you get`,
                            title: `Built for Framer`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(h.div, {
                      className: `framer-p0cvvw`,
                      "data-framer-name": `Start`,
                      layout: k,
                      children: l(`div`, {
                        className: `framer-11llazj`,
                        "data-border": !0,
                        "data-framer-name": `StartIn`,
                        children: [
                          u(T, {
                            children: u(S, {
                              className: `framer-lc3el7-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `eAQyHMoSq`,
                              scopeId: `augiA20Il`,
                              children: u(R, {
                                height: `100%`,
                                id: `eAQyHMoSq`,
                                kicker: ``,
                                layoutId: `eAQyHMoSq`,
                                number: `04⁠`,
                                reveal: !0,
                                sub: `Pick a homepage`,
                                title: `Start`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          l(`div`, {
                            className: `framer-g6xqka`,
                            "data-framer-name": `StartRow`,
                            children: [
                              u(`div`, {
                                className: `framer-2bte7o`,
                                "data-framer-name": `Headline`,
                                children: u(T, {
                                  children: u(S, {
                                    className: `framer-14fas3d-container`,
                                    "data-code-component-plugin-id": `mcp001`,
                                    isAuthoredByUser: !0,
                                    nodeId: `nwaJczbIN`,
                                    scopeId: `augiA20Il`,
                                    children: u(I, {
                                      align: `left`,
                                      balance: !0,
                                      color: `rgb(243, 243, 243)`,
                                      delay: 0,
                                      fluid: 3.7,
                                      height: `100%`,
                                      id: `nwaJczbIN`,
                                      layoutId: `nwaJczbIN`,
                                      lineHeight: 0.98,
                                      max: 66,
                                      min: 32,
                                      reveal: `scroll`,
                                      style: { width: `100%` },
                                      tag: `h2`,
                                      text: `Start with`,
                                      tone: `Home 01.`,
                                      toneColor: `rgb(166, 166, 166)`,
                                      toneLine: !1,
                                      toneNoWrap: !0,
                                      tracking: -0.04,
                                      weight: 400,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              l(`div`, {
                                className: `framer-ldth46`,
                                "data-framer-name": `Side`,
                                children: [
                                  u(M, {
                                    breakpoint: b,
                                    overrides: {
                                      fE4lpni8J: {
                                        children: u(i, {
                                          children: u(`p`, {
                                            className: `framer-styles-preset-1sj55z0`,
                                            "data-styles-preset": `LTmB1RL88`,
                                            dir: `auto`,
                                            children: `Or open any page above. Every section can be copied between pages.`,
                                          }),
                                        }),
                                      },
                                      O0ORWHxyH: {
                                        children: u(i, {
                                          children: u(`p`, {
                                            className: `framer-styles-preset-1sj55z0`,
                                            "data-styles-preset": `LTmB1RL88`,
                                            dir: `auto`,
                                            children: `Or open any page above. Every section can be copied between pages.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: u(y, {
                                      __fromCanvasComponent: !0,
                                      children: u(i, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-wsxg2z`,
                                          "data-styles-preset": `OL1kwShSL`,
                                          dir: `auto`,
                                          children: `Or open any page above. Every section can be copied between pages.`,
                                        }),
                                      }),
                                      className: `framer-cjyf6n`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  u(j, {
                                    links: [
                                      {
                                        href: { webPageId: `aiXHfKTMN` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `aiXHfKTMN` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `aiXHfKTMN` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      u(T, {
                                        children: u(S, {
                                          className: `framer-aihm3u-container`,
                                          "data-code-component-plugin-id": `mcp001`,
                                          isAuthoredByUser: !0,
                                          nodeId: `QEA6B9Cqx`,
                                          scopeId: `augiA20Il`,
                                          children: u(M, {
                                            breakpoint: b,
                                            overrides: {
                                              fE4lpni8J: { link: e[2] },
                                              O0ORWHxyH: { link: e[1] },
                                            },
                                            children: u(L, {
                                              full: !1,
                                              ghost: !1,
                                              height: `100%`,
                                              id: `QEA6B9Cqx`,
                                              label: `Open Home 01`,
                                              layoutId: `QEA6B9Cqx`,
                                              link: e[0],
                                              newTab: !1,
                                              submit: !1,
                                              visual: !1,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    u(h.div, {
                      className: `framer-obmlex`,
                      "data-framer-name": `Footer`,
                      layout: k,
                      children: u(T, {
                        children: u(S, {
                          className: `framer-12rdiuj-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `Y5U1hsDz4`,
                          scopeId: `augiA20Il`,
                          children: u(B, {
                            author: `Flowmance`,
                            authorLink: `https://flowmance.com`,
                            bare: !1,
                            col1: [
                              { id: `i5WMXShXt`, label: `Home` },
                              { id: `M2iUx1RoA`, label: `Company` },
                              { id: `Oe2YCV_49`, label: `Pricing` },
                              { id: `OuhbMo3np`, label: `Case studies` },
                              { id: `twM1XMnNI`, label: `News` },
                              { id: `qYyr4aQty`, label: `Careers` },
                              { id: `YBVLAwp8y`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `MuKE_8irU`, label: `Design system` },
                              { id: `uDBqy5QmD`, label: `All pages` },
                              { id: `Z6g9UtdPG`, label: `404` },
                            ],
                            col2Title: `Template`,
                            copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
                            createdLabel: `Created by`,
                            credit: `Built in Framer`,
                            creditLink: `https://www.framer.com/@flowmance/`,
                            email: `hello@nordlys.example`,
                            gain: 2.4,
                            height: `100%`,
                            hint: `Engineers reply within one working day`,
                            id: `Y5U1hsDz4`,
                            layoutId: `Y5U1hsDz4`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `ZcgDFXqpf`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `VjcRd3ShJ`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `SwnOYI8TV`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `S6JtTk5ZM`, label: `NO4 price`, value: `€4.3 / MWh` },
                            ],
                            status: `All systems normal · build 26.10.05`,
                            style: { width: `100%` },
                            toTop: `Back to top`,
                            width: `100%`,
                            word: `Nordlys`,
                            wordmark: !0,
                          }),
                        }),
                      }),
                    }),
                    u(T, {
                      height: 42,
                      y: 894,
                      children: u(Y, {
                        animate: kt,
                        className: `framer-45rxis-container`,
                        "data-framer-appear-id": `45rxis`,
                        initial: Z,
                        isModuleExternal: !0,
                        layout: k,
                        layoutScroll: !0,
                        nodeId: `VM1Jf1ww_`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `augiA20Il`,
                        children: u(P, {
                          height: `100%`,
                          id: `VM1Jf1ww_`,
                          layoutId: `VM1Jf1ww_`,
                          NBFndEgQg: `Get Free Template`,
                          oNEtXPX1m: `https://flowmance.lemonsqueezy.com/checkout/buy/7aff8438-3e56-4a66-bc94-838a6cca0922`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(T, {
                      height: 42,
                      width: `190px`,
                      y: 845,
                      children: u(Y, {
                        animate: At,
                        className: `framer-129rlqa-container`,
                        "data-framer-appear-id": `129rlqa`,
                        initial: Z,
                        layout: k,
                        layoutScroll: !0,
                        nodeId: `DCE1p_BIL`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `augiA20Il`,
                        children: u(F, {
                          height: `100%`,
                          id: `DCE1p_BIL`,
                          layoutId: `DCE1p_BIL`,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-e3Uir.framer-lux5qc, .framer-e3Uir .framer-lux5qc { display: block; }`,
        `.framer-e3Uir.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-e3Uir .framer-17munss { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-e3Uir .framer-14llm8f-container, .framer-e3Uir .framer-gibpfq-container, .framer-e3Uir .framer-d9f2ka-container, .framer-e3Uir .framer-spg6q2-container, .framer-e3Uir .framer-14fas3d-container, .framer-e3Uir .framer-12rdiuj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-10j1n03, .framer-e3Uir .framer-obmlex { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-5fgp6u { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-18dcc8i, .framer-e3Uir .framer-12lqbyb { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-togt2a-container, .framer-e3Uir .framer-ukiqjl-container, .framer-e3Uir .framer-lc3el7-container, .framer-e3Uir .framer-aihm3u-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-e3Uir .framer-kf8c6s, .framer-e3Uir .framer-1qn3q3j { flex: none; height: auto; max-width: 340px; position: relative; white-space: pre-wrap; width: 32%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-e3Uir .framer-gxbtxh, .framer-e3Uir .framer-1wn0ivg, .framer-e3Uir .framer-8yirdp, .framer-e3Uir .framer-16rumkl, .framer-e3Uir .framer-9l9xi5, .framer-e3Uir .framer-1jsdfku { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 72px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-gxrhcp, .framer-e3Uir .framer-71f6ru, .framer-e3Uir .framer-1e8bqn2, .framer-e3Uir .framer-6uczhf, .framer-e3Uir .framer-1wekrly, .framer-e3Uir .framer-zqnr9x { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-klo2ps, .framer-e3Uir .framer-v0bend, .framer-e3Uir .framer-u4kq2z, .framer-e3Uir .framer-y0vsdb, .framer-e3Uir .framer-1by48dp, .framer-e3Uir .framer-1eqt6no { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-e3Uir .framer-1myhq5x, .framer-e3Uir .framer-1dhx78u, .framer-e3Uir .framer-1qlnsrs, .framer-e3Uir .framer-qi5fib, .framer-e3Uir .framer-1vcb2yr, .framer-e3Uir .framer-h6jj42, .framer-e3Uir .framer-6evli4, .framer-e3Uir .framer-m4s8pk, .framer-e3Uir .framer-vssizh, .framer-e3Uir .framer-yxqm0e, .framer-e3Uir .framer-1bybv3y, .framer-e3Uir .framer-1fhew8a, .framer-e3Uir .framer-tnve24, .framer-e3Uir .framer-1cuxv7b, .framer-e3Uir .framer-1sdjyl5, .framer-e3Uir .framer-e7qda7, .framer-e3Uir .framer-16q8pze, .framer-e3Uir .framer-1abe5cc, .framer-e3Uir .framer-sxkul6, .framer-e3Uir .framer-1dhee1o, .framer-e3Uir .framer-54btzu, .framer-e3Uir .framer-yrzp3u, .framer-e3Uir .framer-t6ed9o, .framer-e3Uir .framer-m2ufi8, .framer-e3Uir .framer-1t9wjku, .framer-e3Uir .framer-1ounedd, .framer-e3Uir .framer-u7cdyq, .framer-e3Uir .framer-6leubt, .framer-e3Uir .framer-shq1zc, .framer-e3Uir .framer-1p0hxrd, .framer-e3Uir .framer-t1lpog, .framer-e3Uir .framer-7ood9l, .framer-e3Uir .framer-vz8ipn, .framer-e3Uir .framer-elxmjt, .framer-e3Uir .framer-959y5m, .framer-e3Uir .framer-1kyrv40, .framer-e3Uir .framer-1k77obq, .framer-e3Uir .framer-8at43d, .framer-e3Uir .framer-47yp2o, .framer-e3Uir .framer-qg8ivh, .framer-e3Uir .framer-f9od2x, .framer-e3Uir .framer-gmdudg, .framer-e3Uir .framer-yl6jc8, .framer-e3Uir .framer-ccpljt, .framer-e3Uir .framer-pt53n1, .framer-e3Uir .framer-ih4day, .framer-e3Uir .framer-yjyldq, .framer-e3Uir .framer-1mdqagb, .framer-e3Uir .framer-dlq27z, .framer-e3Uir .framer-1xxqjcy, .framer-e3Uir .framer-1bvzfza, .framer-e3Uir .framer-1ungg70, .framer-e3Uir .framer-xamflc, .framer-e3Uir .framer-49uvtj, .framer-e3Uir .framer-12x5on3, .framer-e3Uir .framer-ureopb, .framer-e3Uir .framer-1urap7m, .framer-e3Uir .framer-15nj1in, .framer-e3Uir .framer-m1wsmy, .framer-e3Uir .framer-en87x, .framer-e3Uir .framer-1pzaobc, .framer-e3Uir .framer-nvhbwx, .framer-e3Uir .framer-96e4xa, .framer-e3Uir .framer-16yelqj, .framer-e3Uir .framer-11k1wpn, .framer-e3Uir .framer-1w956lx, .framer-e3Uir .framer-mqy1yo, .framer-e3Uir .framer-1u77jjh, .framer-e3Uir .framer-1c3bkcn, .framer-e3Uir .framer-phya0s, .framer-e3Uir .framer-1c0q33a, .framer-e3Uir .framer-m9zsny, .framer-e3Uir .framer-az9xlf, .framer-e3Uir .framer-1wqizy8, .framer-e3Uir .framer-1nr19ul, .framer-e3Uir .framer-1yw5ure, .framer-e3Uir .framer-relx7j, .framer-e3Uir .framer-idjmmz, .framer-e3Uir .framer-1co04jk, .framer-e3Uir .framer-mr4eun, .framer-e3Uir .framer-1wcbwc0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-e3Uir .framer-vdah54, .framer-e3Uir .framer-j5qjyo, .framer-e3Uir .framer-1ezy813, .framer-e3Uir .framer-by1luy, .framer-e3Uir .framer-1ua8nep, .framer-e3Uir .framer-tc6bn5 { background-color: rgba(0, 0, 0, 0); display: grid; flex: none; gap: 22px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-6wovqp, .framer-e3Uir .framer-pz23do, .framer-e3Uir .framer-1ommg7m, .framer-e3Uir .framer-yhw393, .framer-e3Uir .framer-1k7fqej, .framer-e3Uir .framer-2nqe3w, .framer-e3Uir .framer-19jojmq, .framer-e3Uir .framer-v9doth, .framer-e3Uir .framer-sbwell, .framer-e3Uir .framer-oft6s8, .framer-e3Uir .framer-d2zpkc, .framer-e3Uir .framer-g745di, .framer-e3Uir .framer-zxlkov, .framer-e3Uir .framer-btawzo, .framer-e3Uir .framer-or81rg, .framer-e3Uir .framer-1wgd0ea, .framer-e3Uir .framer-pa8mtt, .framer-e3Uir .framer-1bicf1m, .framer-e3Uir .framer-civq2a { align-content: flex-start; align-items: flex-start; align-self: start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-e3Uir .framer-793yjf, .framer-e3Uir .framer-i9g7zx, .framer-e3Uir .framer-1lo1d6l, .framer-e3Uir .framer-1hh94ow, .framer-e3Uir .framer-3ktqtg, .framer-e3Uir .framer-r29e3a, .framer-e3Uir .framer-vs5zvf, .framer-e3Uir .framer-17idhg1, .framer-e3Uir .framer-1av0qq, .framer-e3Uir .framer-1bamq86, .framer-e3Uir .framer-18sxycz, .framer-e3Uir .framer-13jy377, .framer-e3Uir .framer-n8potp, .framer-e3Uir .framer-1wm8s57, .framer-e3Uir .framer-471o2x, .framer-e3Uir .framer-17v7mnr, .framer-e3Uir .framer-ml7ss, .framer-e3Uir .framer-1j8q9j7, .framer-e3Uir .framer-5qxmhc { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; aspect-ratio: 1.6 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-e3Uir .framer-189dg3-container, .framer-e3Uir .framer-2k4wni-container, .framer-e3Uir .framer-y01yaw-container, .framer-e3Uir .framer-i0c8k9-container, .framer-e3Uir .framer-1c2cu54-container, .framer-e3Uir .framer-1a1a7pt-container, .framer-e3Uir .framer-jyg2gx-container, .framer-e3Uir .framer-1lra1nn-container, .framer-e3Uir .framer-h1h6j8-container, .framer-e3Uir .framer-33nojp-container, .framer-e3Uir .framer-1dmkvmf-container, .framer-e3Uir .framer-1b9nb95-container, .framer-e3Uir .framer-1xcqbh2-container, .framer-e3Uir .framer-kho7af-container, .framer-e3Uir .framer-1g746uz-container, .framer-e3Uir .framer-1qr5lxk-container, .framer-e3Uir .framer-1cnjhjm-container, .framer-e3Uir .framer-i0lzy1-container, .framer-e3Uir .framer-1t30393-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-e3Uir .framer-1t26ili, .framer-e3Uir .framer-1upvzv3, .framer-e3Uir .framer-y1esl9, .framer-e3Uir .framer-1vh75ea, .framer-e3Uir .framer-1ohwnh0, .framer-e3Uir .framer-1am6z5m, .framer-e3Uir .framer-1jigpv, .framer-e3Uir .framer-56sljx, .framer-e3Uir .framer-12isprf, .framer-e3Uir .framer-1ibsfj3, .framer-e3Uir .framer-56lqup, .framer-e3Uir .framer-8bnhq4, .framer-e3Uir .framer-am929v, .framer-e3Uir .framer-133dxkb, .framer-e3Uir .framer-1037h9k, .framer-e3Uir .framer-1a4x7fz, .framer-e3Uir .framer-1szdsh9, .framer-e3Uir .framer-1fixw4l, .framer-e3Uir .framer-fi9po2 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-waen9r, .framer-e3Uir .framer-1mxp3y7, .framer-e3Uir .framer-hqwv96, .framer-e3Uir .framer-1dfb8j1, .framer-e3Uir .framer-gq2fvf, .framer-e3Uir .framer-3imky2, .framer-e3Uir .framer-1eb2ktq, .framer-e3Uir .framer-1byq681, .framer-e3Uir .framer-tu3uvl, .framer-e3Uir .framer-bz9h8m, .framer-e3Uir .framer-7jn5bn, .framer-e3Uir .framer-uyi5xf, .framer-e3Uir .framer-fh795s, .framer-e3Uir .framer-1j93rm3, .framer-e3Uir .framer-11p3fxj, .framer-e3Uir .framer-f2lsgi, .framer-e3Uir .framer-18hag8w, .framer-e3Uir .framer-hkfeda, .framer-e3Uir .framer-1l9cuys { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-e3Uir .framer-1kyzwom, .framer-e3Uir .framer-1okcsrl, .framer-e3Uir .framer-1g5g3i, .framer-e3Uir .framer-14a4tzs, .framer-e3Uir .framer-jp5zud, .framer-e3Uir .framer-15aa2zd { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; left: 12px; padding: 0px 8px 0px 8px; position: absolute; top: 12px; width: min-content; }`,
        `.framer-e3Uir .framer-1ge1wtl { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-pj0c7q { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-p0cvvw { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 128px 28px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-11llazj { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 102px; height: min-content; justify-content: flex-start; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-g6xqka { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-e3Uir .framer-2bte7o { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 65%; }`,
        `.framer-e3Uir .framer-ldth46 { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 32%; }`,
        `.framer-e3Uir .framer-cjyf6n { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-e3Uir .framer-45rxis-container { bottom: 64px; flex: none; height: auto; position: fixed; right: 20px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        `.framer-e3Uir .framer-129rlqa-container { bottom: 113px; flex: none; height: auto; position: fixed; right: 20px; width: 190px; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        ...Ge,
        ...Ne,
        ...$e,
        ...Ye,
        ...rt,
        ...Le,
        ...Ve,
        `.framer-e3Uir[data-border="true"]::after, .framer-e3Uir [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-e3Uir.framer-72rtr7 { width: 810px; } .framer-e3Uir .framer-5fgp6u { padding: 120px 18px 120px 18px; } .framer-e3Uir .framer-18dcc8i, .framer-e3Uir .framer-12lqbyb { flex-direction: column; } .framer-e3Uir .framer-kf8c6s, .framer-e3Uir .framer-1qn3q3j, .framer-e3Uir .framer-2bte7o { width: 100%; } .framer-e3Uir .framer-gxbtxh, .framer-e3Uir .framer-1wn0ivg, .framer-e3Uir .framer-8yirdp, .framer-e3Uir .framer-16rumkl, .framer-e3Uir .framer-9l9xi5, .framer-e3Uir .framer-1jsdfku { padding: 64px 0px 0px 0px; } .framer-e3Uir .framer-vdah54, .framer-e3Uir .framer-j5qjyo, .framer-e3Uir .framer-1ezy813, .framer-e3Uir .framer-by1luy, .framer-e3Uir .framer-1ua8nep, .framer-e3Uir .framer-tc6bn5 { gap: 32px 22px; grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-e3Uir .framer-1ge1wtl, .framer-e3Uir .framer-pj0c7q { padding: 0px 18px 120px 18px; } .framer-e3Uir .framer-p0cvvw { padding: 0px 18px 96px 18px; } .framer-e3Uir .framer-g6xqka { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-e3Uir .framer-ldth46 { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-e3Uir.framer-72rtr7 { width: 390px; } .framer-e3Uir .framer-5fgp6u { padding: 96px 16px 96px 16px; } .framer-e3Uir .framer-18dcc8i, .framer-e3Uir .framer-12lqbyb { flex-direction: column; } .framer-e3Uir .framer-kf8c6s, .framer-e3Uir .framer-1qn3q3j, .framer-e3Uir .framer-2bte7o { width: 100%; } .framer-e3Uir .framer-gxbtxh, .framer-e3Uir .framer-1wn0ivg, .framer-e3Uir .framer-8yirdp, .framer-e3Uir .framer-16rumkl, .framer-e3Uir .framer-9l9xi5, .framer-e3Uir .framer-1jsdfku { gap: 22px; padding: 56px 0px 0px 0px; } .framer-e3Uir .framer-vdah54, .framer-e3Uir .framer-j5qjyo, .framer-e3Uir .framer-1ezy813, .framer-e3Uir .framer-by1luy, .framer-e3Uir .framer-1ua8nep, .framer-e3Uir .framer-tc6bn5 { gap: 32px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-e3Uir .framer-1ge1wtl, .framer-e3Uir .framer-pj0c7q { padding: 0px 16px 96px 16px; } .framer-e3Uir .framer-p0cvvw { padding: 0px 16px 72px 16px; } .framer-e3Uir .framer-11llazj { gap: 64px; } .framer-e3Uir .framer-g6xqka { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-e3Uir .framer-ldth46 { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
      ],
      `framer-e3Uir`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 6545.5, width: 1280 }),
    ie(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...mt,
        ...ht,
        ...gt,
        ..._t,
        ...vt,
        ...yt,
        ...bt,
        ...xt,
        ...St,
        ...Ct,
        ...wt,
        ...x(Ke),
        ...x(Pe),
        ...x(et),
        ...x(Xe),
        ...x(it),
        ...x(Re),
        ...x(He),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => A([() => v(P, {}, t), () => v(F, {}, t)], t) }),
    (Nt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1280`,
            framerScrollSections: `{"vkp5yqBCe":{"pattern":":vkp5yqBCe","name":"pages"}}`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `6545.5`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"O0ORWHxyH":{"layout":["fixed","auto"]},"fE4lpni8J":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Nt as __FramerMetadata__, $ as default, Et as queryParamNames };
//# sourceMappingURL=asFTKLOj4gWXuTWWG2MnPdV-RZ6o-bwiUe8FdZt60qU.CMAxUYsC.mjs.map
