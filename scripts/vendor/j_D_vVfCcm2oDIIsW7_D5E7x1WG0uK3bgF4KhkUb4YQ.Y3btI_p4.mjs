import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as d,
} from "./react.Dlpel5Rf.mjs";
import { T as f, a as p, r as m, t as h } from "./motion.C738HobR.mjs";
import {
  $ as g,
  B as _,
  M as v,
  O as y,
  P as b,
  St as x,
  T as S,
  V as C,
  _t as ee,
  a as w,
  b as T,
  bt as te,
  ct as ne,
  f as re,
  ft as E,
  g as D,
  gt as ie,
  i as O,
  k,
  lt as A,
  mt as ae,
  n as j,
  nt as M,
  o as N,
  pt as oe,
  q as P,
  st as se,
  tt as ce,
  vt as le,
  w as ue,
  x as F,
  xt as de,
  yt as fe,
} from "./framer.CKDq5C8y.mjs";
import { f as I, i as L, l as R, n as z, r as B, t as V } from "./shared-lib.W6te6cXm.mjs";
import { i as pe, o as me } from "./Inner-d2rabs.CpMZmyL3.mjs";
import { i as H, n as he, r as ge, t as _e } from "./LTmB1RL88.B0kvNFDC.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./nm2zECWKu.85OYCxwA.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./tZkUHAzDW.DwKm5oDC.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./Vsin8i4CA.Dcjteq3m.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./VG9ZrjMNG.eJrPKaJV.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./zjcSQ_DT9.DF5tjdSt.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./Careers.DsdVTfYK.mjs";
import { i as Ke, n as qe } from "./dzeGrkSa8.GQ4PdegG.mjs";
import { r as Je, t as Ye } from "./k_o9T6vaR.CJmwIg0s.mjs";
import Xe, { t as Ze } from "./kQIRBwFq-y28xE7x51oknZ4ReTLb4mXQ2Lzsq8n6pyg.BH4s1Hsl.mjs";
function Qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  U,
  ct = e(() => {
    (u(),
      P(),
      h(),
      d(),
      Ae(),
      ($e = [`AZ9gjkYQG`, `p05ODXxLv`]),
      (et = `framer-HEZj1`),
      (tt = { AZ9gjkYQG: `framer-v-4bsx7f`, p05ODXxLv: `framer-v-15g7wts` }),
      (nt = { duration: 0, type: `tween` }),
      (rt = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(p.Provider, { value: a, children: n });
      }),
      (it = { Active: `p05ODXxLv`, Default: `AZ9gjkYQG` }),
      (at = f.create(r)),
      (ot = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: it[a.variant] ?? a.variant ?? `AZ9gjkYQG`,
      })),
      (st = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = x(
        l(function (e, t) {
          let a = i(null),
            o = t ?? a,
            s = n(),
            { activeLocale: l, setLocale: u } = ie();
          A();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              mXpY5N3RA: _,
              eAHGXWjyh: y,
              ...b
            } = ot(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: ee,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: E,
            } = de({
              cycleOrder: $e,
              defaultVariant: `AZ9gjkYQG`,
              ref: o,
              variant: g,
              variantClassNames: tt,
            }),
            D = st(e, E),
            O = [Ne],
            { activeVariantCallback: k, delay: ae } = se(x),
            j = k(async (...e) => {
              if ((ne({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
            }),
            M = v(et, ...O);
          return c(m, {
            id: h ?? s,
            children: c(at, {
              animate: E,
              initial: !1,
              children: c(rt, {
                value: nt,
                children: c(f.div, {
                  ...b,
                  ...w,
                  className: v(M, `framer-4bsx7f`, p, C),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `AZ9gjkYQG`,
                  onTap: j,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    ...d,
                  },
                  variants: {
                    p05ODXxLv: {
                      "--border-color": `var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, rgb(110, 75, 255))`,
                      backgroundColor: `var(--token-ff84b31f-7b9d-4393-bcb4-cc3c3e45399e, rgb(26, 16, 51))`,
                    },
                  },
                  ...Qe({ p05ODXxLv: { "data-framer-name": `Active` } }, x, T),
                  children: c(S, {
                    __fromCanvasComponent: !0,
                    children: c(r, {
                      children: c(f.p, {
                        className: `framer-styles-preset-14yqjsj`,
                        "data-styles-preset": `X0BbqEMSb`,
                        dir: `auto`,
                        children: `Category`,
                      }),
                    }),
                    className: `framer-th1zok`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `B2B93O0Ow`,
                    text: _,
                    variants: { p05ODXxLv: { "--extracted-r6o4lv": `rgb(255, 255, 255)` } },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Qe(
                      {
                        p05ODXxLv: {
                          children: c(r, {
                            children: c(f.p, {
                              className: `framer-styles-preset-14yqjsj`,
                              "data-styles-preset": `X0BbqEMSb`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `Category`,
                            }),
                          }),
                        },
                      },
                      x,
                      T
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-HEZj1.framer-pvzaey, .framer-HEZj1 .framer-pvzaey { display: block; }`,
          `.framer-HEZj1.framer-4bsx7f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; padding: 0px 12px 0px 12px; position: relative; width: min-content; }`,
          `.framer-HEZj1 .framer-th1zok { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...je,
          `.framer-HEZj1[data-border="true"]::after, .framer-HEZj1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-HEZj1`
      )),
      (U.displayName = `Tab 4`),
      (U.defaultProps = { height: 32, width: 80 }),
      k(U, {
        variant: {
          options: [`AZ9gjkYQG`, `p05ODXxLv`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: N.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: N.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: N.EventHandler },
      }),
      y(
        U,
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
          ...C(Me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  W,
  vt,
  yt,
  bt,
  G,
  xt,
  St,
  K,
  q,
  Ct,
  J,
  Y,
  wt,
  X,
  Z,
  Tt,
  Et,
  Q,
  $;
e(() => {
  (u(),
    P(),
    h(),
    d(),
    ct(),
    He(),
    L(),
    me(),
    z(),
    I(),
    Ke(),
    Ye(),
    H(),
    ve(),
    Se(),
    Pe(),
    Ee(),
    Ae(),
    Re(),
    Ze(),
    (lt = _(V)),
    (ut = _(pe)),
    (dt = _(We)),
    (ft = _(Ge)),
    (pt = _(R)),
    (mt = _(U)),
    (ht = _(Ue)),
    (gt = _(B)),
    (_t = {
      CGH4ABpWq: `(max-width: 809.98px)`,
      l9ft_s8WO: `(min-width: 1280px)`,
      UZpBSYEu_: `(min-width: 810px) and (max-width: 1279.98px)`,
    }),
    (W = () => typeof document < `u`),
    (vt = [`department`]),
    (yt = `framer-AglSW`),
    (bt = {
      CGH4ABpWq: `framer-v-avz5sp`,
      l9ft_s8WO: `framer-v-7wn1gh`,
      UZpBSYEu_: `framer-v-11q4izu`,
    }),
    (G = (e, t, n) => (e && t ? `position` : n)),
    (xt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (St = (e, t) => (e ? `AZ9gjkYQG` : `p05ODXxLv`)),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Ct = (e, t) => (e ? `p05ODXxLv` : `AZ9gjkYQG`)),
    (J = () => ({
      from: { alias: `TGNoxNVPZ`, data: Je, type: `Collection` },
      select: [
        { collection: `TGNoxNVPZ`, name: `id`, type: `Identifier` },
        { collection: `TGNoxNVPZ`, name: `rSO8ftmdN`, type: `Identifier` },
        { collection: `TGNoxNVPZ`, name: `J2E7BX0B7`, type: `Identifier` },
      ],
    })),
    (Y = ({ query: e, pageSize: t, children: n }) => n(le(e))),
    (wt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      x: 12,
    }),
    (X = (e) => ({
      from: {
        constraint: {
          left: { collection: `pr9JtBYIH`, name: `PPBuZPPe_`, type: `Identifier` },
          operator: `==`,
          right: { collection: `PPBuZPPe_`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `pr9JtBYIH`, data: qe, type: `Collection` },
        right: { alias: `PPBuZPPe_`, data: Je, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `pr9JtBYIH`, name: `Ag1lqLixQ`, type: `Identifier` },
        { collection: `pr9JtBYIH`, name: `F8WZDPH5k`, type: `Identifier` },
        { collection: `pr9JtBYIH`, name: `c0uGc4Ie4`, type: `Identifier` },
        {
          alias: `PPBuZPPe_.rSO8ftmdN`,
          collection: `PPBuZPPe_`,
          name: `rSO8ftmdN`,
          type: `Identifier`,
        },
        { collection: `pr9JtBYIH`, name: `WpXg1XJXd`, type: `Identifier` },
        { collection: `pr9JtBYIH`, name: `cOy6rbVVT`, type: `Identifier` },
        { collection: `pr9JtBYIH`, name: `YGXQzxxhT`, type: `Identifier` },
        { collection: `pr9JtBYIH`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { collection: `pr9JtBYIH`, name: `I0vVVKryr`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: !0 },
          type: `BinaryOperation`,
        },
        operator: `and`,
        right: {
          left: {
            left: { type: `LiteralValue`, value: e },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            left: { collection: `PPBuZPPe_`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (Z = { Desktop: `l9ft_s8WO`, Phone: `CGH4ABpWq`, Tablet: `UZpBSYEu_` }),
    (Tt = ({ value: e }) =>
      ae()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Et = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `l9ft_s8WO`,
    })),
    (Q = x(
      l(function (e, l) {
        let u = i(null),
          d = l ?? u,
          h = n(),
          { activeLocale: g, setLocale: _ } = ie(),
          y = A(),
          [b, x] = ne({ collectionId: `k_o9T6vaR`, optional: !0, parameterName: `department` }),
          { style: C, className: k, layoutId: ae, variant: M, ...N } = Et(e);
        ee(o(() => Xe({}, g), [g]));
        let [P, ce] = oe(M, _t, !1),
          le = v(yt, xe, ke, Ve, Te, Ne, Le, _e),
          de = t(re)?.isLayoutTemplate,
          I = !!t(p)?.transition?.layout,
          L = G(de, I);
        te();
        let z = fe(`nqsu1Cybt`),
          me = i(null),
          { activeVariantCallback: H, delay: he } = se(void 0),
          ge = H(async (...e) => {
            x?.(void 0);
          }),
          ve = ({ arg1r3skp1: e }) =>
            H(async (...t) => {
              x?.(e);
            }),
          ye = () => !W() || ![`UZpBSYEu_`, `CGH4ABpWq`].includes(P),
          be = () => !W() || P !== `CGH4ABpWq`;
        return (
          E({}),
          c(re.Provider, {
            value: {
              activeVariantId: P,
              humanReadableVariantMap: Z,
              primaryVariantId: `l9ft_s8WO`,
              variantClassNames: bt,
            },
            children: s(m, {
              id: ae ?? h,
              children: [
                c(Tt, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                s(f.div, {
                  ...N,
                  className: v(le, `framer-7wn1gh`, k),
                  ref: d,
                  style: { ...C },
                  children: [
                    c(f.div, {
                      className: `framer-10g09nr`,
                      "data-framer-name": `Navigation`,
                      layout: L,
                      children: c(ue, {
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
                          c(O, {
                            children: c(w, {
                              className: `framer-1lba0i0-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `OGMqEP4By`,
                              scopeId: `MEjos_75C`,
                              children: c(F, {
                                breakpoint: P,
                                overrides: {
                                  CGH4ABpWq: {
                                    allPagesLink: e[20],
                                    ctaLink: e[19],
                                    homeLink: e[14],
                                    links: [
                                      { id: `CxZJ2BB0s`, label: `Company`, link: e[15] },
                                      { id: `xLZaOSu8H`, label: `Pricing`, link: e[16] },
                                      { id: `jQps6SDk3`, label: `Customers`, link: e[17] },
                                      { id: `A834uI64w`, label: `News`, link: e[18] },
                                    ],
                                  },
                                  UZpBSYEu_: {
                                    allPagesLink: e[13],
                                    ctaLink: e[12],
                                    homeLink: e[7],
                                    links: [
                                      { id: `CxZJ2BB0s`, label: `Company`, link: e[8] },
                                      { id: `xLZaOSu8H`, label: `Pricing`, link: e[9] },
                                      { id: `jQps6SDk3`, label: `Customers`, link: e[10] },
                                      { id: `A834uI64w`, label: `News`, link: e[11] },
                                    ],
                                  },
                                },
                                children: c(V, {
                                  allPages: `All pages`,
                                  allPagesLink: e[6],
                                  bare: !1,
                                  bottomBlur: !0,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[5],
                                  current: ``,
                                  formStyle: !0,
                                  height: `100%`,
                                  homeLink: e[0],
                                  id: `OGMqEP4By`,
                                  items: [
                                    { id: `x6aiERzw6`, label: `Home`, note: `4 layouts` },
                                    { id: `fInEQU0WE`, label: `Company`, note: `Since 2024` },
                                    { id: `IFmYHlnzi`, label: `Pricing`, note: `From $1.62` },
                                    { id: `BUD6aw5W7`, label: `Case studies`, note: `6 teams` },
                                    { id: `pymEcrzkY`, label: `News`, note: `Field notes` },
                                    { id: `P_8cS0F1A`, label: `Careers`, note: `7 open roles` },
                                    { id: `h6PJ4WhfZ`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `OGMqEP4By`,
                                  links: [
                                    { id: `CxZJ2BB0s`, label: `Company`, link: e[1] },
                                    { id: `xLZaOSu8H`, label: `Pricing`, link: e[2] },
                                    { id: `jQps6SDk3`, label: `Customers`, link: e[3] },
                                    { id: `A834uI64w`, label: `News`, link: e[4] },
                                  ],
                                  logo: `Nordlys`,
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
                    c(f.div, {
                      className: `framer-zv666t`,
                      "data-framer-name": `Hero`,
                      layout: L,
                      children: c(O, {
                        children: c(w, {
                          className: `framer-17md8i8-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `PqwxClx_0`,
                          scopeId: `MEjos_75C`,
                          children: c(pe, {
                            buttons: [{ ghost: !1, id: `g9m3LN0NI`, label: `See open roles` }],
                            currency: `$`,
                            eyebrow: `Careers · 7 open roles`,
                            frame: !1,
                            gain: 2.3,
                            height: `100%`,
                            id: `PqwxClx_0`,
                            layout: `standard`,
                            layoutId: `PqwxClx_0`,
                            lightX: 0.6,
                            lightY: 1.02,
                            maxPx: 780,
                            meta: [
                              { id: `bRwgXVuT1`, label: `Open roles`, value: `7`, violet: !1 },
                              { id: `z3bFvfmWU`, label: `Team`, value: `84 people`, violet: !1 },
                              { id: `t0aQeakoX`, label: `Locations`, value: `3 sites`, violet: !1 },
                              { id: `IWYq_RcgZ`, label: `Remote`, value: `EEA`, violet: !1 },
                            ],
                            minPx: 520,
                            minVh: 72,
                            nowItems: [
                              { id: `dxIqGZg4q`, label: `Outside`, unit: `°C`, value: `−4.2` },
                              { id: `QKMUfsIEw`, label: `PUE`, unit: ``, value: `1.08` },
                              { id: `P3rOaRtqG`, label: `Hydro`, unit: `%`, value: `98.7` },
                            ],
                            nowLabel: `Narvik now`,
                            photo: `none`,
                            price: `1.46`,
                            priceLine: `per GPU-hour, three-year Sovereign,`,
                            priceTone: `all-in.`,
                            rib: 10,
                            seed: 58,
                            shade: `left`,
                            spread: 1.05,
                            stackMeta: !1,
                            style: { width: `100%` },
                            text: `84 people building Europe's coldest, cleanest GPU halls. Engineers, technicians and operators in Narvik, Tromsø and soon Kiruna.`,
                            title: `Work at`,
                            tone: `69° N.`,
                            toneLine: !1,
                            topRight: ``,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(f.div, {
                      className: `framer-mfiix3`,
                      "data-framer-name": `Why`,
                      layout: L,
                      children: c(O, {
                        children: c(w, {
                          className: `framer-1p6wnkc-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `NMKc0IDRa`,
                          scopeId: `MEjos_75C`,
                          children: c(We, {
                            heading: `Hard problems,`,
                            headingNowrap: `cold air`,
                            height: `100%`,
                            id: `NMKc0IDRa`,
                            layoutId: `NMKc0IDRa`,
                            lede: `We pay in the top quartile for Norway, publish every salary range and give everyone equity. The rest is below.`,
                            number: `01⁠`,
                            perks: [
                              {
                                icon: `heat`,
                                id: `Zq4v_Jt2B`,
                                stat: `Up to **NOK 90k** · family included`,
                                text: `Flights, a furnished flat for three months and a local guide for schools, banks and the best ski tracks.`,
                                title: `Relocation to Narvik`,
                              },
                              {
                                icon: `hydro`,
                                id: `CyTy2soQr`,
                                stat: `**NOK 15k** · every November`,
                                text: `Polar night lasts six weeks. Spend it on a daylight lamp, a week in the south or a sauna membership.`,
                                title: `Winter light allowance`,
                              },
                              {
                                icon: `shield`,
                                id: `blKz0eATc`,
                                stat: `**100%** of permanent staff`,
                                text: `Every permanent hire gets options, from the hall floor to the board. Four years, one-year cliff, ten years to exercise.`,
                                title: `Equity for everyone`,
                              },
                              {
                                icon: `snow`,
                                id: `mb2SmbCsY`,
                                stat: `**30 days** + winter close`,
                                text: `Thirty days, and we close between Christmas and New Year. On-call is paid and rotated, never stacked on leave.`,
                                title: `Six weeks of holiday`,
                              },
                              {
                                icon: `chip`,
                                id: `Pd8A26Z8O`,
                                stat: `**NOK 40k** + 8 GPUs on call`,
                                text: `Pick your own laptop, monitors and chair. Engineers also get a standing GPU allocation for side projects.`,
                                title: `Hardware budget`,
                              },
                              {
                                icon: `pulse`,
                                id: `bqZpjmILc`,
                                stat: `**10 days** · NOK 25k budget`,
                                text: `Ten days a year for courses, conferences or a paper you want to reproduce. Results go in the Thursday notes.`,
                                title: `Learning days`,
                              },
                            ],
                            style: { width: `100%` },
                            sub: `What comes with the job`,
                            title: `Why Nordlys`,
                            tone: `and time to think.`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(f.div, {
                      className: `framer-gwyqxl`,
                      "data-framer-name": `Life`,
                      layout: L,
                      children: c(O, {
                        children: c(w, {
                          className: `framer-14f7dio-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `nM9IoxCOt`,
                          scopeId: `MEjos_75C`,
                          children: c(Ge, {
                            height: `100%`,
                            id: `nM9IoxCOt`,
                            intro: `Most of the team works within sight of the fjord. Hall tours for candidates run every second Tuesday.`,
                            layoutId: `nM9IoxCOt`,
                            number: `02⁠`,
                            shots: [
                              {
                                alt: `GPU racks in Hall A, Narvik`,
                                caption: `Hall A, row 14 · 1,024 H200s`,
                                id: `BMkl_PSL9`,
                                photo: `careers01`,
                              },
                              {
                                alt: `GPU trays under hot-aisle containment`,
                                caption: `Weekly tray walk · Operations`,
                                id: `zMzZSwgQQ`,
                                photo: `careers02`,
                              },
                              {
                                alt: `Cold aisle in Hall A`,
                                caption: `Cold aisle at −11 °C`,
                                id: `m6_3iNiz2`,
                                photo: `careers03`,
                              },
                            ],
                            style: { width: `100%` },
                            sub: `Narvik, 68.4° N`,
                            title: `Life in the hall`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    s(f.div, {
                      className: `framer-rcp7kl`,
                      "data-framer-name": `Roles`,
                      id: z,
                      layout: L,
                      ref: me,
                      children: [
                        s(`div`, {
                          className: `framer-u715ni`,
                          "data-framer-name": `RolesHead`,
                          children: [
                            c(O, {
                              children: c(w, {
                                className: `framer-ikel51-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `Tkd_lqcIN`,
                                scopeId: `MEjos_75C`,
                                children: c(R, {
                                  height: `100%`,
                                  id: `Tkd_lqcIN`,
                                  kicker: ``,
                                  layoutId: `Tkd_lqcIN`,
                                  number: `03⁠`,
                                  reveal: !0,
                                  sub: `Every range is published`,
                                  title: `Open roles`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-2l3un6`,
                              "data-framer-name": `TabsSlot`,
                              children: c(`div`, {
                                className: `framer-1l1md10`,
                                children: c(j, {
                                  children: c(Y, {
                                    query: J(),
                                    children: (e, t, n) =>
                                      s(a, {
                                        children: [
                                          c(F, {
                                            breakpoint: P,
                                            overrides: {
                                              CGH4ABpWq: { y: void 0 },
                                              UZpBSYEu_: { y: void 0 },
                                            },
                                            children: c(O, {
                                              height: 32,
                                              y: (y?.y || 0) + 8 + 1637 + 0 + 0 + 0 + 168 + 0 + 0,
                                              children: c(w, {
                                                className: `framer-1hjgz5e-container`,
                                                nodeId: `uEIo4thqY`,
                                                scopeId: `MEjos_75C`,
                                                children: c(U, {
                                                  eAHGXWjyh: ge,
                                                  height: `100%`,
                                                  id: `uEIo4thqY`,
                                                  layoutId: `uEIo4thqY`,
                                                  mXpY5N3RA: `All`,
                                                  variant: K(St(xt(b), g)),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          e?.map(
                                            ({ id: e, J2E7BX0B7: t, rSO8ftmdN: n }, r) => (
                                              (n ??= ``),
                                              (t ??= ``),
                                              c(
                                                m,
                                                {
                                                  id: `TGNoxNVPZ-${e}`,
                                                  children: c(T.Provider, {
                                                    value: { J2E7BX0B7: t },
                                                    children: c(F, {
                                                      breakpoint: P,
                                                      overrides: {
                                                        CGH4ABpWq: { y: void 0 },
                                                        UZpBSYEu_: { y: void 0 },
                                                      },
                                                      children: c(O, {
                                                        height: 32,
                                                        y:
                                                          (y?.y || 0) +
                                                          8 +
                                                          1637 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          168 +
                                                          0 +
                                                          0,
                                                        children: c(w, {
                                                          className: `framer-po9au5-container`,
                                                          nodeId: `so_OxfWjq`,
                                                          scopeId: `MEjos_75C`,
                                                          children: c(U, {
                                                            eAHGXWjyh: ve({ arg1r3skp1: e }),
                                                            height: `100%`,
                                                            id: `so_OxfWjq`,
                                                            layoutId: `so_OxfWjq`,
                                                            mXpY5N3RA: n,
                                                            variant: K(Ct(q(b, e), g)),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                e
                                              )
                                            )
                                          ),
                                        ],
                                      }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        s(`div`, {
                          className: `framer-9jb4ai`,
                          "data-framer-name": `RolesSlot`,
                          children: [
                            ye() &&
                              s(`div`, {
                                className: `framer-14eu0kr hidden-11q4izu hidden-avz5sp`,
                                "data-framer-name": `JCols`,
                                children: [
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-vj4i3z`,
                                        "data-styles-preset": `nm2zECWKu`,
                                        dir: `auto`,
                                        children: `Role`,
                                      }),
                                    }),
                                    className: `framer-emw3ep`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-vj4i3z`,
                                        "data-styles-preset": `nm2zECWKu`,
                                        dir: `auto`,
                                        children: `Department`,
                                      }),
                                    }),
                                    className: `framer-1dyr1cy`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-vj4i3z`,
                                        "data-styles-preset": `nm2zECWKu`,
                                        dir: `auto`,
                                        children: `Location · Type`,
                                      }),
                                    }),
                                    className: `framer-w3l78p`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(S, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-vj4i3z`,
                                        "data-styles-preset": `nm2zECWKu`,
                                        dir: `auto`,
                                        children: `Salary range`,
                                      }),
                                    }),
                                    className: `framer-2xwv91`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(`div`, {
                                    className: `framer-3fjj3m`,
                                    "data-framer-name": `ColArrow`,
                                  }),
                                ],
                              }),
                            c(`div`, {
                              className: `framer-1ahklx9`,
                              "data-border": !0,
                              "data-framer-name": `ListSlot`,
                              children: c(`div`, {
                                className: `framer-ut41t5`,
                                "data-framer-name": `Role List`,
                                children: c(j, {
                                  children: c(Y, {
                                    query: X(b),
                                    children: (e, t, n) => {
                                      let i = e?.length ?? 0,
                                        o = q(i, 0);
                                      return s(a, {
                                        children: [
                                          e?.map(
                                            (
                                              {
                                                "PPBuZPPe_.rSO8ftmdN": e,
                                                Ag1lqLixQ: t,
                                                c0uGc4Ie4: n,
                                                cOy6rbVVT: i,
                                                F8WZDPH5k: a,
                                                id: o,
                                                WpXg1XJXd: l,
                                                YGXQzxxhT: u,
                                              },
                                              d
                                            ) => (
                                              (t ??= ``),
                                              (a ??= ``),
                                              (n ??= !0),
                                              (e ??= ``),
                                              (l ??= ``),
                                              (i ??= ``),
                                              (u ??= ``),
                                              c(
                                                m,
                                                {
                                                  id: `pr9JtBYIH-${o}`,
                                                  children: c(T.Provider, {
                                                    value: { Ag1lqLixQ: t },
                                                    children: c(D, {
                                                      href: {
                                                        pathVariables: { Ag1lqLixQ: t },
                                                        webPageId: `JtdSvG6rD`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `YN93qmrWU`,
                                                      openInNewTab: !1,
                                                      scopeId: `MEjos_75C`,
                                                      children: s(f.a, {
                                                        className: `framer-t5yxgg framer-ixwad6`,
                                                        "data-border": !0,
                                                        "data-framer-name": `Role Row`,
                                                        whileHover: wt,
                                                        children: [
                                                          s(`div`, {
                                                            className: `framer-pgjubk`,
                                                            "data-framer-name": `RoleT`,
                                                            children: [
                                                              c(F, {
                                                                breakpoint: P,
                                                                overrides: {
                                                                  CGH4ABpWq: {
                                                                    children: c(r, {
                                                                      children: c(`h3`, {
                                                                        className: `framer-styles-preset-9vdglb`,
                                                                        "data-styles-preset": `zjcSQ_DT9`,
                                                                        dir: `auto`,
                                                                        style: {
                                                                          "--framer-text-color": `var(--token-b63d417c-acbd-47bf-86cc-5329f9e4889d, rgb(166, 166, 166))`,
                                                                        },
                                                                        children: `Platform Engineer, Slurm & Kubernetes`,
                                                                      }),
                                                                    }),
                                                                  },
                                                                },
                                                                children: c(S, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`h3`, {
                                                                      className: `framer-styles-preset-1up4d44`,
                                                                      "data-styles-preset": `Vsin8i4CA`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-color": `var(--token-b63d417c-acbd-47bf-86cc-5329f9e4889d, rgb(166, 166, 166))`,
                                                                      },
                                                                      children: `Platform Engineer, Slurm & Kubernetes`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-1a955wd`,
                                                                  "data-framer-name": `Title`,
                                                                  fonts: [`Inter`],
                                                                  text: a,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              n !== !1 &&
                                                                c(`div`, {
                                                                  className: `framer-11nvhjv`,
                                                                  "data-border": !0,
                                                                  "data-framer-name": `FeatTag`,
                                                                  children: c(S, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-8xfnpq`,
                                                                        "data-styles-preset": `tZkUHAzDW`,
                                                                        dir: `auto`,
                                                                        children: `Featured`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-vyidpc`,
                                                                    "data-framer-name": `FeatText`,
                                                                    fonts: [`Inter`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                            ],
                                                          }),
                                                          c(`div`, {
                                                            className: `framer-x71l8q`,
                                                            "data-framer-name": `RoleDept`,
                                                            children: c(`div`, {
                                                              className: `framer-nxpkjf`,
                                                              "data-border": !0,
                                                              "data-framer-name": `DeptTag`,
                                                              children: c(S, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-14yqjsj`,
                                                                    "data-styles-preset": `X0BbqEMSb`,
                                                                    dir: `auto`,
                                                                    children: `Engineering`,
                                                                  }),
                                                                }),
                                                                className: `framer-diz9ra`,
                                                                "data-framer-name": `RoleDeptText`,
                                                                fonts: [`Inter`],
                                                                text: e,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            }),
                                                          }),
                                                          s(`div`, {
                                                            className: `framer-1cco0h3`,
                                                            "data-framer-name": `RoleLoc`,
                                                            children: [
                                                              c(S, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-14yqjsj`,
                                                                    "data-styles-preset": `X0BbqEMSb`,
                                                                    dir: `auto`,
                                                                    children: `Remote, EEA`,
                                                                  }),
                                                                }),
                                                                className: `framer-1c809q9`,
                                                                "data-framer-name": `RoleLocation`,
                                                                fonts: [`Inter`],
                                                                text: l,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              c(S, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-vj4i3z`,
                                                                    "data-styles-preset": `nm2zECWKu`,
                                                                    dir: `auto`,
                                                                    children: `·`,
                                                                  }),
                                                                }),
                                                                className: `framer-1hgj2pi`,
                                                                "data-framer-name": `RoleDot`,
                                                                fonts: [`Inter`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              c(S, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-14yqjsj`,
                                                                    "data-styles-preset": `X0BbqEMSb`,
                                                                    dir: `auto`,
                                                                    children: `Full-time`,
                                                                  }),
                                                                }),
                                                                className: `framer-9udijd`,
                                                                "data-framer-name": `RoleType`,
                                                                fonts: [`Inter`],
                                                                text: i,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          c(`div`, {
                                                            className: `framer-16qfeww`,
                                                            "data-framer-name": `RoleSal`,
                                                            children: c(S, {
                                                              __fromCanvasComponent: !0,
                                                              children: c(r, {
                                                                children: c(`p`, {
                                                                  className: `framer-styles-preset-f5nf9u`,
                                                                  "data-styles-preset": `VG9ZrjMNG`,
                                                                  dir: `auto`,
                                                                  children: `NOK 860k–1.08M`,
                                                                }),
                                                              }),
                                                              className: `framer-1pi8luy`,
                                                              "data-framer-name": `RoleSalary`,
                                                              fonts: [`Inter`],
                                                              text: u,
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          }),
                                                          be() &&
                                                            c(S, {
                                                              __fromCanvasComponent: !0,
                                                              children: c(r, {
                                                                children: c(`p`, {
                                                                  className: `framer-styles-preset-f5nf9u`,
                                                                  "data-styles-preset": `VG9ZrjMNG`,
                                                                  dir: `auto`,
                                                                  children: `→`,
                                                                }),
                                                              }),
                                                              className: `framer-1vdohs8 hidden-avz5sp`,
                                                              "data-framer-name": `RoleArrow`,
                                                              fonts: [`Inter`],
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                },
                                                o
                                              )
                                            )
                                          ),
                                          o !== !1 &&
                                            s(`div`, {
                                              className: `framer-1bg1bl6`,
                                              "data-border": !0,
                                              "data-framer-name": `Empty State`,
                                              children: [
                                                c(S, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(r, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-1sj55z0`,
                                                      "data-styles-preset": `LTmB1RL88`,
                                                      dir: `auto`,
                                                      children: `No open roles in this department right now.`,
                                                    }),
                                                  }),
                                                  className: `framer-11m652j`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                c(D, {
                                                  href: `mailto:careers@nordlys.example?subject=Open%20application`,
                                                  motionChild: !0,
                                                  nodeId: `TffgXdSQx`,
                                                  openInNewTab: !0,
                                                  scopeId: `MEjos_75C`,
                                                  children: s(f.a, {
                                                    className: `framer-1m4soei framer-ixwad6`,
                                                    children: [
                                                      c(S, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(r, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-f5nf9u`,
                                                            "data-styles-preset": `VG9ZrjMNG`,
                                                            dir: `auto`,
                                                            children: `Send an open application`,
                                                          }),
                                                        }),
                                                        className: `framer-8pnfrw`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      c(S, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(r, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-f5nf9u`,
                                                            "data-styles-preset": `VG9ZrjMNG`,
                                                            dir: `auto`,
                                                            children: `→`,
                                                          }),
                                                        }),
                                                        className: `framer-196s4kj`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-arndcs`,
                              "data-framer-name": `RolesFoot`,
                              children: c(S, {
                                __fromCanvasComponent: !0,
                                children: c(r, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-vj4i3z`,
                                    "data-styles-preset": `nm2zECWKu`,
                                    dir: `auto`,
                                    children: `Showing all open roles`,
                                  }),
                                }),
                                className: `framer-i0on8u`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    c(f.div, {
                      className: `framer-116qkmz`,
                      "data-framer-name": `Apply`,
                      layout: L,
                      children: c(O, {
                        children: c(w, {
                          className: `framer-1i4e7q3-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `Kem3ky8dN`,
                          scopeId: `MEjos_75C`,
                          children: c(Ue, {
                            email: `careers@nordlys.example`,
                            heading: `Not on the list?`,
                            height: `100%`,
                            id: `Kem3ky8dN`,
                            layoutId: `Kem3ky8dN`,
                            lede: `About a third of the team joined without an open role. Tell us what you would build at 69° N and the right lead reads it within a week.`,
                            lightX: 0.62,
                            lightY: 1.05,
                            note: `Read by a person · Reply within 7 days`,
                            number: `04⁠`,
                            points: `A few lines on what you want to work on
A CV or LinkedIn link, no cover letter
Where you would like to be based`,
                            seed: 23,
                            style: { width: `100%` },
                            sub: `No fitting role yet`,
                            subject: `Open application`,
                            title: `Open application`,
                            tone: `Write to us anyway.`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(f.div, {
                      className: `framer-1q2476`,
                      "data-framer-name": `Footer`,
                      layout: L,
                      children: c(O, {
                        children: c(w, {
                          className: `framer-25td3m-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `T_1L_AY_3`,
                          scopeId: `MEjos_75C`,
                          children: c(B, {
                            bare: !1,
                            col1: [
                              { id: `jyuK__7wF`, label: `Home` },
                              { id: `aYapyVQl4`, label: `Company` },
                              { id: `CY5susR_K`, label: `Pricing` },
                              { id: `zrkQsbcBg`, label: `Case studies` },
                              { id: `DkriCBcOR`, label: `News` },
                              { id: `n9gKN8D3s`, label: `Careers` },
                              { id: `YSlWL6Utu`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `gC7V2Eqwf`, label: `Design system` },
                              { id: `wH8jZDwp_`, label: `All pages` },
                              { id: `QtUPw2GdB`, label: `404` },
                            ],
                            col2Title: `Template`,
                            copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
                            email: `hello@nordlys.example`,
                            gain: 2.4,
                            height: `100%`,
                            hint: `Engineers reply within one working day`,
                            id: `T_1L_AY_3`,
                            layoutId: `T_1L_AY_3`,
                            legal: `Privacy · Terms · Imprint`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `SX0ie6ruz`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `Xb5O_D_AT`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `n3tCJJ_rD`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `JPa3HiWOR`, label: `NO4 price`, value: `€4.3 / MWh` },
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
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-AglSW.framer-ixwad6, .framer-AglSW .framer-ixwad6 { display: block; }`,
        `.framer-AglSW.framer-7wn1gh { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-AglSW .framer-10g09nr { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-AglSW .framer-1lba0i0-container, .framer-AglSW .framer-17md8i8-container, .framer-AglSW .framer-1p6wnkc-container, .framer-AglSW .framer-14f7dio-container, .framer-AglSW .framer-1i4e7q3-container, .framer-AglSW .framer-25td3m-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-zv666t, .framer-AglSW .framer-9jb4ai, .framer-AglSW .framer-1q2476 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-mfiix3 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-gwyqxl { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-rcp7kl { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-u715ni { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-ikel51-container, .framer-AglSW .framer-1hjgz5e-container, .framer-AglSW .framer-po9au5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-AglSW .framer-2l3un6 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-AglSW .framer-1l1md10 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-AglSW .framer-14eu0kr { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px 0px 12px 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-emw3ep { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AglSW .framer-1dyr1cy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 150px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AglSW .framer-w3l78p { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 210px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AglSW .framer-2xwv91 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 170px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AglSW .framer-3fjj3m { background-color: rgba(0, 0, 0, 0); flex: none; height: 1px; position: relative; width: 24px; }`,
        `.framer-AglSW .framer-1ahklx9 { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-ut41t5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-t5yxgg { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 30px 0px 30px 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-AglSW .framer-pgjubk { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-AglSW .framer-1a955wd, .framer-AglSW .framer-vyidpc, .framer-AglSW .framer-diz9ra, .framer-AglSW .framer-1c809q9, .framer-AglSW .framer-1hgj2pi, .framer-AglSW .framer-9udijd, .framer-AglSW .framer-1pi8luy, .framer-AglSW .framer-11m652j, .framer-AglSW .framer-8pnfrw, .framer-AglSW .framer-196s4kj, .framer-AglSW .framer-i0on8u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-AglSW .framer-11nvhjv { --border-bottom-width: 1px; --border-color: var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, #6e4bff); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; padding: 0px 8px 0px 8px; position: relative; width: min-content; }`,
        `.framer-AglSW .framer-x71l8q { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 150px; }`,
        `.framer-AglSW .framer-nxpkjf { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; padding: 0px 9px 0px 9px; position: relative; width: min-content; }`,
        `.framer-AglSW .framer-1cco0h3 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 210px; }`,
        `.framer-AglSW .framer-16qfeww { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: 170px; }`,
        `.framer-AglSW .framer-1vdohs8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 24px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AglSW .framer-1bg1bl6 { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-width: 100%; padding: 30px 0px 30px 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-1m4soei { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-AglSW .framer-arndcs { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 28px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-AglSW .framer-116qkmz { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 128px 28px; position: relative; width: 100%; }`,
        ...ye,
        ...De,
        ...ze,
        ...Ce,
        ...je,
        ...Fe,
        ...he,
        `.framer-AglSW[data-border="true"]::after, .framer-AglSW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-AglSW.framer-7wn1gh { width: 810px; } .framer-AglSW .framer-mfiix3 { padding: 120px 18px 120px 18px; } .framer-AglSW .framer-gwyqxl { padding: 0px 18px 120px 18px; } .framer-AglSW .framer-rcp7kl { gap: 40px; padding: 0px 18px 120px 18px; } .framer-AglSW .framer-u715ni { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-AglSW .framer-2l3un6 { justify-content: flex-start; width: 100%; } .framer-AglSW .framer-1l1md10 { flex-wrap: wrap; justify-content: flex-start; width: 100%; } .framer-AglSW .framer-t5yxgg { flex-wrap: wrap; gap: 14px; } .framer-AglSW .framer-pgjubk { flex: none; width: 100%; } .framer-AglSW .framer-1cco0h3 { width: 220px; } .framer-AglSW .framer-16qfeww { flex: 1 0 0px; justify-content: flex-start; width: 1px; } .framer-AglSW .framer-116qkmz { padding: 0px 18px 96px 18px; }}`,
        `@media (max-width: 809.98px) { .framer-AglSW.framer-7wn1gh { width: 390px; } .framer-AglSW .framer-mfiix3 { padding: 120px 16px 120px 16px; } .framer-AglSW .framer-gwyqxl { padding: 0px 16px 120px 16px; } .framer-AglSW .framer-rcp7kl { gap: 32px; padding: 0px 16px 120px 16px; } .framer-AglSW .framer-u715ni, .framer-AglSW .framer-arndcs { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-AglSW .framer-2l3un6, .framer-AglSW .framer-16qfeww { justify-content: flex-start; width: 100%; } .framer-AglSW .framer-1l1md10 { flex-wrap: wrap; justify-content: flex-start; width: 100%; } .framer-AglSW .framer-t5yxgg { flex-wrap: wrap; gap: 12px; padding: 22px 0px 22px 0px; } .framer-AglSW .framer-pgjubk { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 10px; width: 100%; } .framer-AglSW .framer-x71l8q, .framer-AglSW .framer-1cco0h3 { width: min-content; } .framer-AglSW .framer-1bg1bl6 { align-content: flex-start; align-items: flex-start; flex-direction: column; padding: 22px 0px 22px 0px; } .framer-AglSW .framer-11m652j { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-AglSW .framer-116qkmz { padding: 0px 16px 96px 16px; }}`,
      ],
      `framer-AglSW`
    )),
    (Q.displayName = `Careers`),
    (Q.defaultProps = { height: 5014.5, width: 1280 }),
    y(
      Q,
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
        ...lt,
        ...ut,
        ...dt,
        ...ft,
        ...pt,
        ...mt,
        ...ht,
        ...gt,
        ...C(be),
        ...C(Oe),
        ...C(Be),
        ...C(we),
        ...C(Me),
        ...C(Ie),
        ...C(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = (async () => ({
            x7QDvCDhe1: await (async () => {
              let e = t.pathVariables?.department ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`k_o9T6vaR`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))();
        i.catch(() => {});
        let a = g.get(J(), n, r);
        return ce(
          [
            () => a.preload(),
            () => i.then(({ x7QDvCDhe1: e }) => M(() => g.get(X(e), n, r).preload(), t)),
            async () =>
              ce(
                ((await M(() => a.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => b(U, {}, t),
                  () => b(U, {}, t),
                ]),
                t
              ),
          ],
          t
        );
      },
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerMEjos_75C`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1280`,
            framerImmutableVariables: `true`,
            framerScrollSections: `{"nqsu1Cybt":{"pattern":":nqsu1Cybt","name":"roles"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UZpBSYEu_":{"layout":["fixed","auto"]},"CGH4ABpWq":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `5014.5`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, vt as queryParamNames };
//# sourceMappingURL=j_D_vVfCcm2oDIIsW7_D5E7x1WG0uK3bgF4KhkUb4YQ.Y3btI_p4.mjs.map
