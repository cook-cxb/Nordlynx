import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  I as r,
  R as i,
  _ as a,
  b as o,
  j as s,
  l as c,
  o as l,
  p as u,
  s as d,
  w as f,
  y as p,
} from "./react.Dlpel5Rf.mjs";
import { T as m, a as h, r as ee, t as g } from "./motion.C738HobR.mjs";
import {
  B as _,
  M as v,
  O as y,
  St as b,
  _t as te,
  a as x,
  bt as ne,
  f as S,
  ft as re,
  gt as ie,
  i as C,
  k as w,
  lt as ae,
  mt as oe,
  o as T,
  pt as se,
  q as E,
  w as D,
  x as O,
} from "./framer.CKDq5C8y.mjs";
import {
  C as k,
  a as A,
  d as j,
  g as ce,
  i as le,
  n as ue,
  o as de,
  p as fe,
  r as M,
  t as N,
  w as pe,
  x as me,
  y as he,
} from "./shared-lib.W6te6cXm.mjs";
import { t as ge } from "./Parts-ISc5PT.Do1ptRxj.mjs";
import _e, { t as ve } from "./3BVFxnoBrv0jpUAw7dAC_-FWqfvctsPoMpT-5IJc1j4.BA59iP7T.mjs";
function P(e) {
  let t = o(null),
    n = k(t),
    r = pe(),
    s = me(),
    u = !s && !r,
    d = i !== void 0 && !s ? i.innerHeight : 900,
    f = z(16, 2.2, 32, n),
    [m, h] = a(`/missing-page`),
    [ee, g] = a(`—`);
  p(() => {
    if (s) return;
    h(i.location.pathname || `/`);
    let e = () =>
      g(
        new Date().toLocaleTimeString(`en-GB`, {
          hour: `2-digit`,
          minute: `2-digit`,
          second: `2-digit`,
          timeZone: `Europe/Oslo`,
        })
      );
    e();
    let t = i.setInterval(e, 1e3);
    return () => i.clearInterval(t);
  }, [s]);
  let _ = 0,
    v = (e) =>
      (e || ``)
        .split(/(\s+)/)
        .map((e, t) =>
          /^\s+$/.test(e) || !e
            ? e
            : l(
                `span`,
                {
                  className: `wd`,
                  children: Array.from(e).map((e, t) =>
                    l(
                      `span`,
                      {
                        className: `ch`,
                        style: { animationDelay: (0.15 + _++ * 0.02).toFixed(3) + `s` },
                        children: e,
                      },
                      t
                    )
                  ),
                },
                t
              )
        ),
    y = 0,
    b = () => ({ animationDelay: (0.2 + y++ * 0.08).toFixed(2) + `s` });
  return c(`section`, {
    ref: t,
    className: `nl-nf` + (u ? ` anim` : ``) + ce(n),
    style: {
      ...e.style,
      minHeight: Math.max(640, d),
      padding: `${n <= 600 ? 88 : 96}px ${f}px ${z(32, 4, 56, n)}px`,
    },
    children: [
      he(),
      l(`style`, { dangerouslySetInnerHTML: { __html: B } }),
      l(`div`, {
        className: `bg`,
        "aria-hidden": `true`,
        children: l(de, {
          lightX: e.lightX,
          lightY: e.lightY,
          gain: 2.4,
          rib: 10,
          spread: 1.05,
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
      l(`div`, { className: `shade` }),
      c(`div`, {
        className: `top mono in`,
        style: b(),
        children: [
          l(`span`, { className: `eb`, children: e.eyebrow }),
          l(`span`, { className: `r2`, children: e.topRight }),
        ],
      }),
      l(`div`, {
        className: `mid`,
        style: { paddingBlock: n <= 600 ? `48px 40px` : z(40, 6, 96, n) },
        children: c(`p`, {
          className: `e404 in`,
          role: `img`,
          "aria-label": `404`,
          style: { ...b(), fontSize: n <= 600 ? z(84, 30, 128, n) : z(96, 14, 220, n) },
          children: [
            l(`span`, { children: `4` }),
            c(`span`, {
              className: `z0`,
              "aria-hidden": `true`,
              children: [l(`i`, {}), l(`i`, {}), l(`b`, {})],
            }),
            l(`span`, { children: `4` }),
          ],
        }),
      }),
      c(`div`, {
        className: `bot`,
        children: [
          c(`div`, {
            className: `l`,
            children: [
              l(`h1`, {
                style: { fontSize: z(30, 3.4, 58, n) },
                "aria-label": e.title + ` ` + e.tone,
                children: c(`span`, {
                  "aria-hidden": `true`,
                  children: [
                    u ? v(e.title) : e.title,
                    ` `,
                    l(`span`, { className: `tone`, children: u ? v(e.tone) : e.tone }),
                  ],
                }),
              }),
              l(`p`, { className: `in`, style: b(), children: e.text }),
            ],
          }),
          l(`div`, {
            className: `r in`,
            style: b(),
            children: c(`div`, {
              className: `btns`,
              children: [
                l(j, {
                  label: e.button1,
                  link: e.link1,
                  ghost: !1,
                  newTab: !1,
                  submit: !1,
                  visual: !1,
                  full: n <= 600,
                }),
                l(j, {
                  label: e.button2,
                  link: e.link2,
                  ghost: !0,
                  newTab: !1,
                  submit: !1,
                  visual: !1,
                  full: n <= 600,
                }),
              ],
            }),
          }),
        ],
      }),
      c(`div`, {
        className: `meta in`,
        style: { marginTop: z(40, 5, 72, n), ...b() },
        children: [
          c(`div`, {
            children: [
              l(`span`, { className: `mono`, children: e.seenLabel }),
              l(`b`, { children: e.seen }),
            ],
          }),
          c(`div`, {
            children: [
              l(`span`, { className: `mono`, children: e.pathLabel }),
              l(`b`, { className: `pth`, children: m }),
            ],
          }),
          c(`div`, {
            children: [
              l(`span`, { className: `mono`, children: e.timeLabel }),
              l(`b`, { children: ee }),
            ],
          }),
          c(`div`, {
            children: [
              l(`span`, { className: `mono`, children: e.statusLabel }),
              l(`b`, { children: e.status }),
            ],
          }),
        ],
      }),
    ],
  });
}
var F,
  I,
  L,
  R,
  z,
  B,
  ye = e(() => {
    (r(),
      d(),
      f(),
      E(),
      fe(),
      A(),
      ge(),
      (F = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (I = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (L = `rgba(243,243,243,.12)`),
      (R = `cubic-bezier(.16,1,.3,1)`),
      (z = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (B = `
.nl-nf{${I};position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;width:100%}
.nl-nf .mono{${F}}
.nl-nf .bg{position:absolute;inset:0;z-index:-2}
.nl-nf .shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(60% 60% at 34% 46%,transparent,rgba(0,0,0,.5) 80%),linear-gradient(90deg,rgba(0,0,0,.7),rgba(0,0,0,.05) 55%,rgba(0,0,0,.35)),linear-gradient(180deg,rgba(0,0,0,.5),transparent 30%,transparent 55%,rgba(0,0,0,.85))}
.nl-nf .top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-bottom:14px;border-bottom:1px solid ${L};color:#A6A6A6}
.nl-nf .eb{display:flex;align-items:center;gap:10px}
.nl-nf .eb::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;animation:nl-nf-blink 1.6s infinite}
@keyframes nl-nf-blink{50%{opacity:.25}}
.nl-nf .mid{flex:1;display:flex;align-items:center}
.nl-nf .e404{display:flex;align-items:baseline;gap:.02em;margin:0;font-family:"Geist Mono",monospace;font-weight:400;line-height:.8;letter-spacing:-.06em;font-feature-settings:"zero" 1;color:#F3F3F3}
.nl-nf .e404 > span{display:block}
.nl-nf .z0{position:relative;display:block;flex:none;width:.5em;height:.745em;margin:0 .08em -.025em .05em}
.nl-nf .z0 i{position:absolute;inset:0;border-radius:.25em;box-shadow:inset 0 0 0 1px rgba(243,243,243,.55);background:repeating-linear-gradient(180deg,rgba(243,243,243,.85) 0 1px,transparent 1px .055em),radial-gradient(70% 55% at 50% 50%,rgba(110,75,255,.55),transparent 75%)}
.nl-nf .z0 i:first-child{clip-path:polygon(0 0,100% 0,100% 56%,0 32%)}
.nl-nf .z0 i:nth-child(2){clip-path:polygon(0 40%,100% 64%,100% 100%,0 100%);transform:translate(.05em,.035em);background:repeating-linear-gradient(180deg,#C9BDFF 0 1px,transparent 1px .055em),radial-gradient(70% 55% at 50% 40%,rgba(110,75,255,.75),transparent 75%);box-shadow:inset 0 0 0 1px rgba(201,189,255,.7),0 0 .2em -.02em rgba(110,75,255,.6)}
.nl-nf .z0 b{position:absolute;left:-.035em;top:31%;width:.04em;height:.04em;min-width:7px;min-height:7px;background:#C9BDFF;box-shadow:0 0 0 3px rgba(110,75,255,.22),0 0 18px rgba(110,75,255,.95);animation:nl-nf-blink 1.6s infinite}
.nl-nf .bot{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-nf .l{grid-column:1 / span 7;display:flex;flex-direction:column;gap:18px}
.nl-nf h1{margin:0;font-weight:400;letter-spacing:-.04em;line-height:1;text-wrap:balance}
.nl-nf h1 .tone{color:#A6A6A6;white-space:nowrap}
.nl-nf h1 .wd{display:inline-block;white-space:nowrap}
.nl-nf h1 .ch{display:inline-block}
.nl-nf .l p{margin:0;color:#A6A6A6;font-weight:400;max-width:44ch;text-wrap:balance}
.nl-nf .r{grid-column:9 / span 4;display:flex;justify-content:flex-end}
.nl-nf .btns{display:flex;gap:8px;flex-wrap:wrap}
.nl-nf .meta{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid ${L}}
.nl-nf .meta > div{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:14px 16px 0 0;min-width:0}
.nl-nf .meta > div + div{padding-left:16px;border-left:1px solid ${L}}
.nl-nf .meta .mono{color:#A6A6A6}
.nl-nf .meta b{font-weight:500;font-size:14px;white-space:nowrap;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;min-width:0}
.nl-nf .meta b.pth{font-family:"Geist Mono",monospace;font-size:12px;letter-spacing:0;font-weight:400}
@keyframes nl-nf-ch{from{opacity:0;filter:blur(14px);transform:translateY(.16em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-nf-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.nl-nf.anim .in{animation:nl-nf-up 1.1s ${R} both}
.nl-nf.anim h1 .ch{animation:nl-nf-ch 1.25s cubic-bezier(.25,1,.5,1) both}
@media (prefers-reduced-motion:reduce){.nl-nf h1 .ch{animation:none!important}}
.nl-nf.is-md .l,.nl-nf.is-md .r{grid-column:1 / -1}
.nl-nf.is-md .r{justify-content:flex-start}
.nl-nf.is-md .meta{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-nf.is-md .meta > div:nth-child(3){padding-left:0;border-left:0}
.nl-nf.is-md .meta > div:nth-child(n+3){border-top:1px solid ${L};margin-top:14px}
.nl-nf.is-sm .top .r2{display:none}
.nl-nf.is-sm .meta{grid-template-columns:1fr}
.nl-nf.is-sm .meta > div:nth-child(n){padding:12px 0;border-left:0;margin-top:0}
.nl-nf.is-sm .meta > div:nth-child(n+2){border-top:1px solid ${L}}
.nl-nf.is-sm .btns{width:100%}
.nl-nf.is-sm .btns > *{flex:1 1 100%}
`),
      (P.defaultProps = {
        eyebrow: `404 · Signal lost north of 69°`,
        topRight: `Route not found · Hall A`,
        title: `This page drifted`,
        tone: `out of range.`,
        text: `The link may be old or mistyped. Everything else is running normally in Narvik.`,
        button1: `Back to home`,
        link1: `/home-01`,
        button2: `All pages`,
        link2: `/`,
        seenLabel: `Last seen`,
        seen: `69.6492° N, 18.9553° E`,
        pathLabel: `Requested`,
        timeLabel: `Oslo time`,
        statusLabel: `Status`,
        status: `404 · Not found`,
        lightX: 0.3,
        lightY: 0.52,
        seed: 40,
      }),
      w(P, {
        eyebrow: { type: T.String, title: `Eyebrow` },
        topRight: { type: T.String, title: `Top right` },
        title: { type: T.String, title: `Title` },
        tone: { type: T.String, title: `Title (grey)` },
        text: { type: T.String, title: `Text`, displayTextArea: !0 },
        button1: { type: T.String, title: `Button 1` },
        link1: { type: T.Link, title: `Link 1` },
        button2: { type: T.String, title: `Button 2` },
        link2: { type: T.Link, title: `Link 2` },
        seenLabel: { type: T.String, title: `Fact 1 label` },
        seen: { type: T.String, title: `Fact 1` },
        pathLabel: { type: T.String, title: `Path label` },
        timeLabel: { type: T.String, title: `Time label` },
        statusLabel: { type: T.String, title: `Status label` },
        status: { type: T.String, title: `Status` },
        lightX: { type: T.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: T.Number, title: `Light Y`, min: 0, max: 1.2, step: 0.01 },
        seed: { type: T.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }));
  }),
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $;
e(() => {
  (d(),
    E(),
    g(),
    f(),
    le(),
    ue(),
    ye(),
    ve(),
    (V = _(N)),
    (H = _(P)),
    (U = _(M)),
    (W = {
      JGMPrTK2x: `(min-width: 1280px)`,
      vsBZ5mZEH: `(min-width: 810px) and (max-width: 1279.98px)`,
      W6LzNw2Do: `(max-width: 809.98px)`,
    }),
    (G = []),
    (K = `framer-4Dksj`),
    (q = {
      JGMPrTK2x: `framer-v-1a6e8ec`,
      vsBZ5mZEH: `framer-v-158xdmt`,
      W6LzNw2Do: `framer-v-u97poz`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = { Desktop: `JGMPrTK2x`, Phone: `W6LzNw2Do`, Tablet: `vsBZ5mZEH` }),
    (X = ({ value: e }) =>
      oe()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `JGMPrTK2x`,
    })),
    (Q = b(
      u(function (e, r) {
        let i = o(null),
          a = r ?? i,
          u = n(),
          { activeLocale: d, setLocale: f } = ie();
        ae();
        let { style: p, className: g, layoutId: _, variant: y, ...b } = Z(e);
        te(s(() => _e({}, d), [d]));
        let [w, oe] = se(y, W, !1),
          T = v(K),
          E = t(S)?.isLayoutTemplate,
          k = !!t(h)?.transition?.layout,
          A = J(E, k);
        return (
          ne(),
          re({}),
          l(S.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Y,
              primaryVariantId: `JGMPrTK2x`,
              variantClassNames: q,
            },
            children: c(ee, {
              id: _ ?? u,
              children: [
                l(X, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                c(m.div, {
                  ...b,
                  className: v(T, `framer-1a6e8ec`, g),
                  ref: a,
                  style: { ...p },
                  children: [
                    l(m.div, {
                      className: `framer-qxwb0k`,
                      "data-framer-name": `Navigation`,
                      layout: A,
                      children: l(D, {
                        links: [
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          l(C, {
                            children: l(x, {
                              className: `framer-n3ti0e-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `jvc4kOkrJ`,
                              scopeId: `Az4rug3ML`,
                              children: l(O, {
                                breakpoint: w,
                                overrides: {
                                  vsBZ5mZEH: {
                                    allPagesLink: e[13],
                                    ctaLink: e[12],
                                    homeLink: e[7],
                                    links: [
                                      { id: `cXYCbQrGr`, label: `Company`, link: e[8] },
                                      { id: `DKkKEMbSG`, label: `Pricing`, link: e[9] },
                                      { id: `Vh8PBysMk`, label: `Customers`, link: e[10] },
                                      { id: `M3AUyNRPn`, label: `News`, link: e[11] },
                                    ],
                                  },
                                  W6LzNw2Do: {
                                    allPagesLink: e[20],
                                    ctaLink: e[19],
                                    homeLink: e[14],
                                    links: [
                                      { id: `cXYCbQrGr`, label: `Company`, link: e[15] },
                                      { id: `DKkKEMbSG`, label: `Pricing`, link: e[16] },
                                      { id: `Vh8PBysMk`, label: `Customers`, link: e[17] },
                                      { id: `M3AUyNRPn`, label: `News`, link: e[18] },
                                    ],
                                  },
                                },
                                children: l(N, {
                                  allPages: `All pages`,
                                  allPagesLink: e[6],
                                  bare: !1,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[5],
                                  current: ``,
                                  height: `100%`,
                                  homeLink: e[0],
                                  id: `jvc4kOkrJ`,
                                  items: [
                                    { id: `KOoBnkQ7l`, label: `Home`, note: `4 layouts` },
                                    { id: `aRah7wxyL`, label: `Company`, note: `Since 2024` },
                                    { id: `IB3guFIx3`, label: `Pricing`, note: `From $1.62` },
                                    { id: `S3BygP84v`, label: `Case studies`, note: `6 teams` },
                                    { id: `IdVfvcPVy`, label: `News`, note: `Field notes` },
                                    { id: `s5k1Piqib`, label: `Careers`, note: `7 open roles` },
                                    { id: `nJyIK03At`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `jvc4kOkrJ`,
                                  links: [
                                    { id: `cXYCbQrGr`, label: `Company`, link: e[1] },
                                    { id: `DKkKEMbSG`, label: `Pricing`, link: e[2] },
                                    { id: `Vh8PBysMk`, label: `Customers`, link: e[3] },
                                    { id: `M3AUyNRPn`, label: `News`, link: e[4] },
                                  ],
                                  logo: `Nordlys`,
                                  rail: !0,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    l(m.div, {
                      className: `framer-hfs572`,
                      "data-framer-name": `Main`,
                      layout: A,
                      children: l(D, {
                        links: [
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `aiXHfKTMN` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          l(C, {
                            children: l(x, {
                              className: `framer-1d5kjod-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `DRimHEsp8`,
                              scopeId: `Az4rug3ML`,
                              children: l(O, {
                                breakpoint: w,
                                overrides: {
                                  vsBZ5mZEH: { link1: e[2], link2: e[3] },
                                  W6LzNw2Do: { link1: e[4], link2: e[5] },
                                },
                                children: l(P, {
                                  button1: `Back to home`,
                                  button2: `All pages`,
                                  eyebrow: `404 · Signal lost north of 69°`,
                                  height: `100%`,
                                  id: `DRimHEsp8`,
                                  layoutId: `DRimHEsp8`,
                                  lightX: 0.3,
                                  lightY: 0.52,
                                  link1: e[0],
                                  link2: e[1],
                                  pathLabel: `Requested`,
                                  seed: 40,
                                  seen: `69.6492° N, 18.9553° E`,
                                  seenLabel: `Last seen`,
                                  status: `404 · Not found`,
                                  statusLabel: `Status`,
                                  style: { width: `100%` },
                                  text: `The link may be old or mistyped. Everything else is running normally in Narvik.`,
                                  timeLabel: `Oslo time`,
                                  title: `This page drifted`,
                                  tone: `out of range.`,
                                  topRight: `Route not found · Hall A`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    l(m.div, {
                      className: `framer-1bv5ea7`,
                      "data-framer-name": `Footer`,
                      layout: A,
                      children: l(C, {
                        children: l(x, {
                          className: `framer-52du63-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `M6ncmw2Bd`,
                          scopeId: `Az4rug3ML`,
                          children: l(M, {
                            bare: !1,
                            col1: [
                              { id: `mhfJFfmZC`, label: `Home` },
                              { id: `Xk_Qek4MZ`, label: `Company` },
                              { id: `ywFqYOOLv`, label: `Pricing` },
                              { id: `URz87Wp2g`, label: `Case studies` },
                              { id: `dE50RDbCf`, label: `News` },
                              { id: `nS1JWKN_p`, label: `Careers` },
                              { id: `sMovL6p0q`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `nG0RMKcHF`, label: `Design system` },
                              { id: `ebUZQlPIK`, label: `All pages` },
                              { id: `R6qQBEB31`, label: `404` },
                            ],
                            col2Title: `Template`,
                            copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
                            email: `hello@nordlys.example`,
                            gain: 2.4,
                            height: `100%`,
                            hint: `Engineers reply within one working day`,
                            id: `M6ncmw2Bd`,
                            layoutId: `M6ncmw2Bd`,
                            legal: `Privacy · Terms · Imprint`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `uCXyS0gz5`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `kG9ITRxx2`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `bsqEfn5_4`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `H76RSXEZD`, label: `NO4 price`, value: `€4.3 / MWh` },
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
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-4Dksj.framer-1ap4i20, .framer-4Dksj .framer-1ap4i20 { display: block; }`,
        `.framer-4Dksj.framer-1a6e8ec { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-4Dksj .framer-qxwb0k { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-4Dksj .framer-n3ti0e-container, .framer-4Dksj .framer-1d5kjod-container, .framer-4Dksj .framer-52du63-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-4Dksj .framer-hfs572, .framer-4Dksj .framer-1bv5ea7 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-4Dksj.framer-1a6e8ec { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-4Dksj.framer-1a6e8ec { width: 390px; }}`,
      ],
      `framer-4Dksj`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 1899.5, width: 1280 }),
    y(Q, [{ explicitInter: !0, fonts: [] }, ...V, ...H, ...U], {
      supportsExplicitInterCodegen: !0,
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerAz4rug3ML`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1280`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vsBZ5mZEH":{"layout":["fixed","auto"]},"W6LzNw2Do":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `1899.5`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, G as queryParamNames };
//# sourceMappingURL=jATABu-K4Xri3MvVcI4PV5a8E5Ky_hWj0effHUTrNIY.j2TA1OSi.mjs.map
