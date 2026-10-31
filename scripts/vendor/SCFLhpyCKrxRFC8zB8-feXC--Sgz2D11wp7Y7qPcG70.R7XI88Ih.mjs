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
  H as v,
  M as y,
  N as b,
  O as x,
  P as S,
  St as C,
  T as w,
  V as T,
  _t as E,
  a as D,
  b as O,
  bt as ee,
  c as k,
  ct as te,
  f as ne,
  ft as re,
  g as ie,
  gt as ae,
  ht as oe,
  i as A,
  k as se,
  l as ce,
  lt as le,
  m as j,
  mt as ue,
  n as M,
  nt as N,
  o as P,
  pt as de,
  q as F,
  st as fe,
  tt as pe,
  u as me,
  vt as he,
  w as ge,
  x as I,
  xt as _e,
} from "./framer.CKDq5C8y.mjs";
import {
  c as ve,
  d as ye,
  f as L,
  i as R,
  l as z,
  n as be,
  o as xe,
  r as Se,
  s as B,
  t as Ce,
} from "./shared-lib.W6te6cXm.mjs";
import { i as we, o as Te } from "./Inner-d2rabs.CpMZmyL3.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./LTmB1RL88.B0kvNFDC.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./nm2zECWKu.85OYCxwA.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./OL1kwShSL.xLn8V2pO.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./tZkUHAzDW.DwKm5oDC.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./Vsin8i4CA.Dcjteq3m.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { n as Xe, t as V } from "./qJzt46ANV.iC7o-JA7.mjs";
import { n as Ze, t as H } from "./Mesh.BJnCAXXu.mjs";
import { i as Qe, n as $e, r as et, t as tt } from "./RnBEBxYqd.BIBeXHa3.mjs";
import { i as nt, n as rt, r as it, t as at } from "./VG9ZrjMNG.eJrPKaJV.mjs";
import { n as U, r as ot } from "./b5kUAs37G.CoAfs8yH.mjs";
import { a as st, r as ct } from "./k3QcAAKya.NShUb68E.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./zjcSQ_DT9.DF5tjdSt.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./QFmtq4Ug3.Bk1tJ0bx.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./yySw96FLj.BRkHbKIB.mjs";
import xt, { t as St } from "./JGC5n-cFOGCIXjUOvZTMxwz1fnHOzPfmyOhn_4CphZk.7nnZudnR.mjs";
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  W,
  Nt = e(() => {
    (u(),
      F(),
      h(),
      d(),
      nt(),
      Ke(),
      (wt = [`AsRtvUTwM`, `d4RoBo6L6`]),
      (Tt = `framer-hnDQD`),
      (Et = { AsRtvUTwM: `framer-v-nnef62`, d4RoBo6L6: `framer-v-c6oz6f` }),
      (Dt = { duration: 0, type: `tween` }),
      (Ot = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(p.Provider, { value: a, children: n });
      }),
      (kt = { Active: `d4RoBo6L6`, Default: `AsRtvUTwM` }),
      (At = f.create(r)),
      (jt = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: kt[a.variant] ?? a.variant ?? `AsRtvUTwM`,
      })),
      (Mt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = C(
        l(function (e, t) {
          let a = i(null),
            o = t ?? a,
            s = n(),
            { activeLocale: l, setLocale: u } = ae();
          le();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              mXpY5N3RA: _,
              eAHGXWjyh: v,
              ...b
            } = jt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: ee,
              variants: k,
            } = _e({
              cycleOrder: wt,
              defaultVariant: `AsRtvUTwM`,
              ref: o,
              variant: g,
              variantClassNames: Et,
            }),
            te = Mt(e, k),
            ne = [Ye, at],
            { activeVariantCallback: re, delay: ie } = fe(x),
            oe = re(async (...e) => {
              if ((O({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            A = y(Tt, ...ne);
          return c(m, {
            id: h ?? s,
            children: c(At, {
              animate: k,
              initial: !1,
              children: c(Ot, {
                value: Dt,
                children: c(f.div, {
                  ...b,
                  ...T,
                  className: y(A, `framer-nnef62`, p, S),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: te,
                  layoutId: `AsRtvUTwM`,
                  onTap: oe,
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
                    d4RoBo6L6: {
                      "--border-color": `var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, rgb(110, 75, 255))`,
                      backgroundColor: `var(--token-ff84b31f-7b9d-4393-bcb4-cc3c3e45399e, rgb(26, 16, 51))`,
                    },
                  },
                  ...Ct({ d4RoBo6L6: { "data-framer-name": `Active` } }, x, E),
                  children: c(w, {
                    __fromCanvasComponent: !0,
                    children: c(r, {
                      children: c(f.p, {
                        className: `framer-styles-preset-14yqjsj`,
                        "data-styles-preset": `X0BbqEMSb`,
                        dir: `auto`,
                        children: `Category`,
                      }),
                    }),
                    className: `framer-1x19n3q`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: te,
                    layoutId: `tJBpWLB1P`,
                    text: _,
                    variants: { d4RoBo6L6: { "--extracted-r6o4lv": `rgb(255, 255, 255)` } },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ct(
                      {
                        d4RoBo6L6: {
                          children: c(r, {
                            children: c(f.p, {
                              className: `framer-styles-preset-f5nf9u`,
                              "data-styles-preset": `VG9ZrjMNG`,
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
                      E
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-hnDQD.framer-hfq1ce, .framer-hnDQD .framer-hfq1ce { display: block; }`,
          `.framer-hnDQD.framer-nnef62 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; padding: 0px 12px 0px 12px; position: relative; width: min-content; }`,
          `.framer-hnDQD .framer-1x19n3q { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...qe,
          ...rt,
          `.framer-hnDQD[data-border="true"]::after, .framer-hnDQD [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-hnDQD`
      )),
      (W.displayName = `Tab`),
      (W.defaultProps = { height: 32, width: 80 }),
      se(W, {
        variant: {
          options: [`AsRtvUTwM`, `d4RoBo6L6`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: P.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: P.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: P.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: P.EventHandler },
      }),
      x(
        W,
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
          ...T(Je),
          ...T(it),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (F(),
      b.loadFonts([
        `GF;Inter Tight-regular`,
        `GF;Inter Tight-700`,
        `GF;Inter Tight-700italic`,
        `GF;Inter Tight-italic`,
      ]),
      (Pt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqWSRToK8EPg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5SgqoUPvi5.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5SgqoUPvi5.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ft = [
        `.framer-VGukx .framer-styles-preset-cps1xb:not(.rich-text-wrapper), .framer-VGukx .framer-styles-preset-cps1xb.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.35em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-b63d417c-acbd-47bf-86cc-5329f9e4889d, #a6a6a6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (It = `framer-VGukx`));
  }),
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  G,
  Yt,
  Xt,
  Zt,
  Qt,
  K,
  $t,
  en,
  q,
  J,
  Y,
  X,
  Z,
  tn,
  nn,
  Q,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  $,
  dn;
e(() => {
  (u(),
    F(),
    h(),
    d(),
    Nt(),
    Xe(),
    R(),
    Te(),
    Ze(),
    be(),
    L(),
    B(),
    ot(),
    ct(),
    Ee(),
    Ae(),
    Lt(),
    Pe(),
    pt(),
    Qe(),
    Re(),
    nt(),
    He(),
    Ke(),
    _t(),
    lt(),
    St(),
    (Rt = _(Ce)),
    (zt = _(we)),
    (Bt = _(z)),
    (Vt = _(H)),
    (Ht = _(ye)),
    (Ut = _(W)),
    (Wt = _(xe)),
    (Gt = _(ve)),
    (Kt = _(V)),
    (qt = _(Se)),
    (Jt = {
      fhCpX1phb: `(min-width: 1280px)`,
      prR64JMf1: `(max-width: 809.98px)`,
      y5tqiv19j: `(min-width: 810px) and (max-width: 1279.98px)`,
    }),
    (G = () => typeof document < `u`),
    (Yt = [`category`]),
    (Xt = `framer-VSZxN`),
    (Zt = {
      fhCpX1phb: `framer-v-c3qfmg`,
      prR64JMf1: `framer-v-1yna8uj`,
      y5tqiv19j: `framer-v-dowz6e`,
    }),
    (Qt = (e, t, n) => (e && t ? `position` : n)),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    ($t = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (en = { dateStyle: `long`, timeZone: `UTC` }),
    (q = (e, t) => $t(e, en, t)),
    (J = (e) => (typeof e == `string` ? e : String(e))),
    (Y = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (X = () => ({
      from: {
        constraint: {
          left: { collection: `l9uUL5hXU`, name: `njS8qg7Pi`, type: `Identifier` },
          operator: `==`,
          right: { collection: `njS8qg7Pi`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `l9uUL5hXU`, data: st, type: `Collection` },
        right: { alias: `njS8qg7Pi`, data: U, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `l9uUL5hXU`, name: `PDM6PbwuL`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `natkYErHc`, type: `Identifier` },
        {
          alias: `njS8qg7Pi.TvqMcJFM_`,
          collection: `njS8qg7Pi`,
          name: `TvqMcJFM_`,
          type: `Identifier`,
        },
        { collection: `l9uUL5hXU`, name: `AMMsWkljI`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `PY3_uI0h0`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `K2EK0JLRZ`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `dd7sbEcpH`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `ZuvArzQV9`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `i3O5gKlFn`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `HmmrPAfFu`, type: `Identifier` },
        { collection: `l9uUL5hXU`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `l9uUL5hXU`, name: `mXPXag5e9`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: !0 },
        type: `BinaryOperation`,
      },
    })),
    (Z = ({ query: e, pageSize: t, children: n }) => n(he(e))),
    (tn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (nn = (e, t) => (e ? `AsRtvUTwM` : `d4RoBo6L6`)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (rn = (e, t) => (e ? `d4RoBo6L6` : `AsRtvUTwM`)),
    (an = () => ({
      from: { alias: `I7rgExVoI`, data: U, type: `Collection` },
      select: [
        { collection: `I7rgExVoI`, name: `id`, type: `Identifier` },
        { collection: `I7rgExVoI`, name: `TvqMcJFM_`, type: `Identifier` },
        { collection: `I7rgExVoI`, name: `UwTvUkYW4`, type: `Identifier` },
      ],
    })),
    (on = {
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
    (sn = (e) => ({
      from: {
        constraint: {
          left: { collection: `l87RH4OBm`, name: `njS8qg7Pi`, type: `Identifier` },
          operator: `==`,
          right: { collection: `njS8qg7Pi`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `l87RH4OBm`, data: st, type: `Collection` },
        right: { alias: `njS8qg7Pi`, data: U, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 10 },
      orderBy: [
        { collection: `l87RH4OBm`, direction: `desc`, name: `AMMsWkljI`, type: `Identifier` },
      ],
      select: [
        { collection: `l87RH4OBm`, name: `PDM6PbwuL`, type: `Identifier` },
        { collection: `l87RH4OBm`, name: `natkYErHc`, type: `Identifier` },
        { collection: `l87RH4OBm`, name: `AMMsWkljI`, type: `Identifier` },
        {
          alias: `njS8qg7Pi.TvqMcJFM_`,
          collection: `njS8qg7Pi`,
          name: `TvqMcJFM_`,
          type: `Identifier`,
        },
        { collection: `l87RH4OBm`, name: `K2EK0JLRZ`, type: `Identifier` },
        { collection: `l87RH4OBm`, name: `PY3_uI0h0`, type: `Identifier` },
        { collection: `l87RH4OBm`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          left: { collection: `njS8qg7Pi`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (cn = { Desktop: `fhCpX1phb`, Phone: `prR64JMf1`, Tablet: `y5tqiv19j` }),
    (ln = ({ value: e }) =>
      ue()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (un = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: cn[r.variant] ?? r.variant ?? `fhCpX1phb`,
    })),
    ($ = C(
      l(function (e, l) {
        let u = i(null),
          d = l ?? u,
          h = n(),
          { activeLocale: g, setLocale: _ } = ae(),
          b = le(),
          [x, S] = te({ collectionId: `b5kUAs37G`, optional: !0, parameterName: `category` }),
          { style: C, className: T, layoutId: se, variant: ue, ...N } = un(e);
        E(o(() => xt({}, g), [g]));
        let [P, F] = de(ue, Jt, !1),
          pe = y(Xt, Le, ke, Ve, Ye, bt, gt, It, Ge, ft, at, tt, Ne),
          he = t(ne)?.isLayoutTemplate,
          _e = !!t(p)?.transition?.layout,
          L = Qt(he, _e);
        ee();
        let R = oe(),
          be = () => !G() || ![`y5tqiv19j`, `prR64JMf1`].includes(P),
          { activeVariantCallback: B, delay: Te } = fe(void 0),
          Ee = B(async (...e) => {
            S?.(void 0);
          }),
          De = ({ argpujxhz: e }) =>
            B(async (...t) => {
              S?.(e);
            }),
          Oe = () => !G() || P !== `prR64JMf1`;
        return (
          re({}),
          c(ne.Provider, {
            value: {
              activeVariantId: P,
              humanReadableVariantMap: cn,
              primaryVariantId: `fhCpX1phb`,
              variantClassNames: Zt,
            },
            children: s(m, {
              id: se ?? h,
              children: [
                c(ln, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                s(f.div, {
                  ...N,
                  className: y(pe, `framer-c3qfmg`, T),
                  ref: d,
                  style: { ...C },
                  children: [
                    c(f.div, {
                      className: `framer-1uab0pi`,
                      "data-framer-name": `Navigation`,
                      layout: L,
                      children: c(ge, {
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
                          c(A, {
                            children: c(D, {
                              className: `framer-1ky5ap3-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `emHY9heI3`,
                              scopeId: `JXDOUrKk6`,
                              children: c(I, {
                                breakpoint: P,
                                overrides: {
                                  prR64JMf1: {
                                    allPagesLink: e[20],
                                    ctaLink: e[19],
                                    homeLink: e[14],
                                    links: [
                                      { id: `VZkvM1tDe`, label: `Company`, link: e[15] },
                                      { id: `FX9aesNWv`, label: `Pricing`, link: e[16] },
                                      { id: `vokuXbOEC`, label: `Customers`, link: e[17] },
                                      { id: `pKmJILFsb`, label: `News`, link: e[18] },
                                    ],
                                  },
                                  y5tqiv19j: {
                                    allPagesLink: e[13],
                                    ctaLink: e[12],
                                    homeLink: e[7],
                                    links: [
                                      { id: `VZkvM1tDe`, label: `Company`, link: e[8] },
                                      { id: `FX9aesNWv`, label: `Pricing`, link: e[9] },
                                      { id: `vokuXbOEC`, label: `Customers`, link: e[10] },
                                      { id: `pKmJILFsb`, label: `News`, link: e[11] },
                                    ],
                                  },
                                },
                                children: c(Ce, {
                                  allPages: `All pages`,
                                  allPagesLink: e[6],
                                  bare: !1,
                                  bottomBlur: !0,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[5],
                                  current: `News`,
                                  formStyle: !0,
                                  height: `100%`,
                                  homeLink: e[0],
                                  id: `emHY9heI3`,
                                  items: [
                                    { id: `WbtVMg6xL`, label: `Home`, note: `4 layouts` },
                                    { id: `htG0vnxQM`, label: `Company`, note: `Since 2024` },
                                    { id: `fGfJvVVSU`, label: `Pricing`, note: `From $1.62` },
                                    { id: `FTGQxFQmS`, label: `Case studies`, note: `6 teams` },
                                    { id: `R6W7J8LgM`, label: `News`, note: `Field notes` },
                                    { id: `oa1_RxJek`, label: `Careers`, note: `7 open roles` },
                                    { id: `ZC8HO1DAA`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `emHY9heI3`,
                                  links: [
                                    { id: `VZkvM1tDe`, label: `Company`, link: e[1] },
                                    { id: `FX9aesNWv`, label: `Pricing`, link: e[2] },
                                    { id: `vokuXbOEC`, label: `Customers`, link: e[3] },
                                    { id: `pKmJILFsb`, label: `News`, link: e[4] },
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
                      className: `framer-f5jgq9`,
                      "data-framer-name": `Hero`,
                      layout: L,
                      children: c(A, {
                        children: c(D, {
                          className: `framer-17xo2gh-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `qGcUFXA9x`,
                          scopeId: `JXDOUrKk6`,
                          children: c(we, {
                            buttons: [],
                            currency: `$`,
                            eyebrow: `News · Written in Hall A`,
                            frame: !1,
                            gain: 2.4,
                            height: `100%`,
                            id: `qGcUFXA9x`,
                            layout: `now`,
                            layoutId: `qGcUFXA9x`,
                            lightX: 0.7,
                            lightY: 0.8,
                            maxPx: 780,
                            meta: [
                              {
                                id: `DKppAdWo9`,
                                label: `Notes`,
                                value: `32 since 2025`,
                                violet: !1,
                              },
                              { id: `isB8WXzwb`, label: `Next`, value: `Thu, Oct 15`, violet: !1 },
                              {
                                id: `ZK2YbnsyL`,
                                label: `Press kit`,
                                value: `PDF · 4 MB`,
                                violet: !1,
                              },
                              { id: `DIXWsJ7FC`, label: `Feed`, value: `RSS · Email`, violet: !1 },
                            ],
                            minPx: 520,
                            minVh: 72,
                            nowItems: [
                              { id: `JOIm256oC`, label: `Outside`, unit: `°C`, value: `−4.2` },
                              { id: `bm159Bozv`, label: `PUE`, unit: ``, value: `1.08` },
                              { id: `WTPGw9ld3`, label: `Hydro`, unit: `%`, value: `98.7` },
                            ],
                            nowLabel: `Narvik now`,
                            photo: `none`,
                            price: `1.46`,
                            priceLine: `per GPU-hour, three-year Sovereign,`,
                            priceTone: `all-in.`,
                            rib: 10,
                            seed: 44,
                            shade: `left`,
                            spread: 1.1,
                            stackMeta: !1,
                            style: { width: `100%` },
                            text: `Engineering logs, company news and what the weather did to the hall this week. Every other Thursday.`,
                            title: `Field notes`,
                            tone: `from 69° N.`,
                            toneLine: !1,
                            topRight: ``,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    s(f.div, {
                      className: `framer-at4re4`,
                      "data-framer-name": `Featured`,
                      layout: L,
                      children: [
                        s(`div`, {
                          className: `framer-1t0b6ug`,
                          "data-border": !0,
                          "data-framer-name": `FeatHead`,
                          children: [
                            c(A, {
                              children: c(D, {
                                className: `framer-zf6303-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `UXKpHsy47`,
                                scopeId: `JXDOUrKk6`,
                                children: c(z, {
                                  height: `100%`,
                                  id: `UXKpHsy47`,
                                  kicker: ``,
                                  layoutId: `UXKpHsy47`,
                                  number: `01⁠`,
                                  reveal: !0,
                                  sub: `This fortnight's long read`,
                                  title: `Featured`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            c(I, {
                              breakpoint: P,
                              overrides: {
                                prR64JMf1: {
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `One note a fortnight goes deep. This one is about the decision that shaped the whole building.`,
                                    }),
                                  }),
                                },
                                y5tqiv19j: {
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `One note a fortnight goes deep. This one is about the decision that shaped the whole building.`,
                                    }),
                                  }),
                                },
                              },
                              children: c(w, {
                                __fromCanvasComponent: !0,
                                children: c(r, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-wsxg2z`,
                                    "data-styles-preset": `OL1kwShSL`,
                                    dir: `auto`,
                                    children: `One note a fortnight goes deep. This one is about the decision that shaped the whole building.`,
                                  }),
                                }),
                                className: `framer-j05pg8`,
                                "data-framer-name": `FeatNote`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-t9liwx`,
                          "data-framer-name": `FeatSlot`,
                          children: c(`div`, {
                            className: `framer-1eg4es4`,
                            "data-framer-name": `Feat List`,
                            children: c(M, {
                              children: c(Z, {
                                query: X(),
                                children: (e, t, n) => {
                                  let i = e?.length ?? 0,
                                    o = Y(i, 0);
                                  return s(a, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            "njS8qg7Pi.TvqMcJFM_": e,
                                            AMMsWkljI: t,
                                            dd7sbEcpH: n,
                                            HmmrPAfFu: i,
                                            i3O5gKlFn: a,
                                            id: o,
                                            K2EK0JLRZ: l,
                                            natkYErHc: u,
                                            PDM6PbwuL: d,
                                            PY3_uI0h0: p,
                                            ZuvArzQV9: h,
                                          },
                                          g
                                        ) => {
                                          ((d ??= ``),
                                            (e ??= ``),
                                            (p ??= 0),
                                            (l ??= ``),
                                            (n ??= ``),
                                            (a ??= ``),
                                            (i ??= ``));
                                          let _ = q(t, R),
                                            y = J(p);
                                          return c(
                                            m,
                                            {
                                              id: `l9uUL5hXU-${o}`,
                                              children: c(O.Provider, {
                                                value: { PDM6PbwuL: d },
                                                children: c(ie, {
                                                  href: {
                                                    pathVariables: { PDM6PbwuL: d },
                                                    webPageId: `zX8G5Rmeb`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `RXIQnzFLP`,
                                                  scopeId: `JXDOUrKk6`,
                                                  children: s(f.a, {
                                                    className: `framer-5xfqu framer-14ru1dr`,
                                                    "data-framer-name": `Feat Card`,
                                                    children: [
                                                      c(I, {
                                                        breakpoint: P,
                                                        overrides: {
                                                          prR64JMf1: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              pixelHeight: 1120,
                                                              pixelWidth: 1400,
                                                              sizes: `calc(${b?.width || `100vw`} - 48px)`,
                                                              ...K(u),
                                                            },
                                                          },
                                                          y5tqiv19j: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              pixelHeight: 1120,
                                                              pixelWidth: 1400,
                                                              sizes: `calc(${b?.width || `100vw`} - 52px)`,
                                                              ...K(u),
                                                            },
                                                          },
                                                        },
                                                        children: c(j, {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: v(
                                                              (b?.y || 0) +
                                                                8 +
                                                                700 +
                                                                179 +
                                                                278 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0
                                                            ),
                                                            pixelHeight: 1120,
                                                            pixelWidth: 1400,
                                                            sizes: `calc((${b?.width || `100vw`} - 72px) * 0.58)`,
                                                            ...K(u),
                                                          },
                                                          className: `framer-11ydtw5`,
                                                          "data-framer-name": `FeatImg`,
                                                          children: c(A, {
                                                            children: c(D, {
                                                              className: `framer-bp523d-container`,
                                                              "data-code-component-plugin-id": `mcp001`,
                                                              isAuthoredByUser: !0,
                                                              nodeId: `ZcZmWUWHN`,
                                                              scopeId: `JXDOUrKk6`,
                                                              children: c(H, {
                                                                brightness: 0.8,
                                                                chip: `Zero chillers · 0 L water`,
                                                                chipIcon: `wind`,
                                                                contrast: 1.08,
                                                                corners: !0,
                                                                cornerSet: `diagonal`,
                                                                height: `100%`,
                                                                id: `ZcZmWUWHN`,
                                                                label: ``,
                                                                layoutId: `ZcZmWUWHN`,
                                                                mesh: !0,
                                                                overlay: `news`,
                                                                parallax: !0,
                                                                reveal: !0,
                                                                shade: !1,
                                                                style: {
                                                                  height: `100%`,
                                                                  width: `100%`,
                                                                },
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      s(`div`, {
                                                        className: `framer-8qiuit`,
                                                        "data-framer-name": `FeatTx`,
                                                        children: [
                                                          s(`div`, {
                                                            className: `framer-1fn2dl1`,
                                                            "data-framer-name": `FeatMeta`,
                                                            children: [
                                                              c(`div`, {
                                                                className: `framer-aen5p5`,
                                                                "data-border": !0,
                                                                "data-framer-name": `FeatFlag`,
                                                                children: c(w, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`p`, {
                                                                      className: `framer-styles-preset-8xfnpq`,
                                                                      "data-styles-preset": `tZkUHAzDW`,
                                                                      dir: `auto`,
                                                                      children: `Featured`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-r007nb`,
                                                                  "data-framer-name": `FeatFlagText`,
                                                                  fonts: [`Inter`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              c(`div`, {
                                                                className: `framer-owqttt`,
                                                                "data-border": !0,
                                                                "data-framer-name": `FeatTag`,
                                                                children: c(w, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`p`, {
                                                                      className: `framer-styles-preset-14yqjsj`,
                                                                      "data-styles-preset": `X0BbqEMSb`,
                                                                      dir: `auto`,
                                                                      children: `Engineering`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-69ql80`,
                                                                  "data-framer-name": `FeatCategory`,
                                                                  fonts: [`Inter`],
                                                                  text: e,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              c(w, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-14yqjsj`,
                                                                    "data-styles-preset": `X0BbqEMSb`,
                                                                    dir: `auto`,
                                                                    children: `October 1, 2026`,
                                                                  }),
                                                                }),
                                                                className: `framer-1nrucws`,
                                                                "data-framer-name": `FeatDate`,
                                                                fonts: [`Inter`],
                                                                text: c(`time`, {
                                                                  dateTime: t,
                                                                  children: _,
                                                                }),
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              s(`div`, {
                                                                className: `framer-1s8yjtv`,
                                                                "data-framer-name": `FeatRead`,
                                                                children: [
                                                                  c(w, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-14yqjsj`,
                                                                        "data-styles-preset": `X0BbqEMSb`,
                                                                        dir: `auto`,
                                                                        children: `6`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-1u4ufvq`,
                                                                    "data-framer-name": `FeatReadTime`,
                                                                    fonts: [`Inter`],
                                                                    text: y,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                  c(w, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-14yqjsj`,
                                                                        "data-styles-preset": `X0BbqEMSb`,
                                                                        dir: `auto`,
                                                                        children: `min read`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-10p3dq0`,
                                                                    "data-framer-name": `FeatReadUnit`,
                                                                    fonts: [`Inter`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          c(w, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`h2`, {
                                                                className: `framer-styles-preset-ih879d`,
                                                                "data-styles-preset": `yySw96FLj`,
                                                                dir: `auto`,
                                                                children: `Why we cool with air, not water`,
                                                              }),
                                                            }),
                                                            className: `framer-1igwvt9`,
                                                            "data-framer-name": `Title`,
                                                            fonts: [`Inter`],
                                                            text: l,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(w, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`p`, {
                                                                className: `framer-styles-preset-1sj55z0`,
                                                                "data-styles-preset": `LTmB1RL88`,
                                                                dir: `auto`,
                                                                children: `Hall A has no chillers and no cooling towers. Outside air at 69° N does the work and uses zero litres of water. Here is how, and where it gets hard.`,
                                                              }),
                                                            }),
                                                            className: `framer-tbgrl5`,
                                                            "data-framer-name": `FeatExcerpt`,
                                                            fonts: [`Inter`],
                                                            text: n,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          be() &&
                                                            c(`div`, {
                                                              className: `framer-18lkc7l hidden-dowz6e hidden-1yna8uj`,
                                                              "data-framer-name": `FeatSpacer`,
                                                            }),
                                                          s(`div`, {
                                                            className: `framer-1g8r9a2`,
                                                            "data-framer-name": `FeatGo`,
                                                            children: [
                                                              s(`div`, {
                                                                className: `framer-15d0aou`,
                                                                "data-border": !0,
                                                                "data-framer-name": `FeatBy`,
                                                                children: [
                                                                  c(j, {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      pixelHeight: 1500,
                                                                      pixelWidth: 1200,
                                                                      sizes: `40px`,
                                                                      ...K(h),
                                                                    },
                                                                    className: `framer-1h8qg6w`,
                                                                    "data-framer-name": `FeatPhoto`,
                                                                    children: c(A, {
                                                                      children: c(D, {
                                                                        className: `framer-155ai2w-container`,
                                                                        "data-code-component-plugin-id": `mcp001`,
                                                                        isAuthoredByUser: !0,
                                                                        nodeId: `GrOjMb0YX`,
                                                                        scopeId: `JXDOUrKk6`,
                                                                        children: c(H, {
                                                                          brightness: 0.9,
                                                                          chip: ``,
                                                                          chipIcon: `chip`,
                                                                          contrast: 1.05,
                                                                          corners: !1,
                                                                          cornerSet: `all`,
                                                                          height: `100%`,
                                                                          id: `GrOjMb0YX`,
                                                                          label: ``,
                                                                          layoutId: `GrOjMb0YX`,
                                                                          mesh: !0,
                                                                          overlay: `none`,
                                                                          parallax: !1,
                                                                          reveal: !1,
                                                                          shade: !1,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          width: `100%`,
                                                                        }),
                                                                      }),
                                                                    }),
                                                                  }),
                                                                  s(`div`, {
                                                                    className: `framer-1w9rbuu`,
                                                                    "data-framer-name": `FeatWho`,
                                                                    children: [
                                                                      c(w, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: c(r, {
                                                                          children: c(`p`, {
                                                                            className: `framer-styles-preset-f6jwmz`,
                                                                            "data-styles-preset": `QFmtq4Ug3`,
                                                                            dir: `auto`,
                                                                            children: `Ravi Menon`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-10sqqyj`,
                                                                        "data-framer-name": `FeatAuthor`,
                                                                        fonts: [`Inter`],
                                                                        text: a,
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      c(w, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: c(r, {
                                                                          children: c(`p`, {
                                                                            className: `framer-styles-preset-cps1xb`,
                                                                            "data-styles-preset": `NxqqvOF4n`,
                                                                            dir: `auto`,
                                                                            children: `Head of Engineering`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-1l1ljyx`,
                                                                        "data-framer-name": `FeatRole`,
                                                                        fonts: [`Inter`],
                                                                        text: i,
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              c(A, {
                                                                children: c(D, {
                                                                  className: `framer-qwkt72-container`,
                                                                  "data-code-component-plugin-id": `mcp001`,
                                                                  isAuthoredByUser: !0,
                                                                  nodeId: `N3GNvxg1C`,
                                                                  scopeId: `JXDOUrKk6`,
                                                                  children: c(ye, {
                                                                    full: !1,
                                                                    ghost: !1,
                                                                    height: `100%`,
                                                                    id: `N3GNvxg1C`,
                                                                    label: `Read the note`,
                                                                    layoutId: `N3GNvxg1C`,
                                                                    link: `/contact-01`,
                                                                    newTab: !1,
                                                                    submit: !1,
                                                                    visual: !0,
                                                                    width: `100%`,
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
                                              }),
                                            },
                                            o
                                          );
                                        }
                                      ),
                                      o !== !1 &&
                                        c(`div`, {
                                          className: `framer-1kt365f`,
                                          "data-border": !0,
                                          "data-framer-name": `Empty State`,
                                          children: c(w, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `rgb(153, 153, 153)`,
                                                },
                                                children: `No items`,
                                              }),
                                            }),
                                            className: `framer-18lsu94`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    s(f.div, {
                      className: `framer-v6oa99`,
                      "data-framer-name": `All`,
                      layout: L,
                      children: [
                        s(`div`, {
                          className: `framer-xwcnmy`,
                          "data-border": !0,
                          "data-framer-name": `AllHead`,
                          children: [
                            c(A, {
                              children: c(D, {
                                className: `framer-1nq3xo-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `j6oYJXY_i`,
                                scopeId: `JXDOUrKk6`,
                                children: c(z, {
                                  height: `100%`,
                                  id: `j6oYJXY_i`,
                                  kicker: ``,
                                  layoutId: `j6oYJXY_i`,
                                  number: `02⁠`,
                                  reveal: !0,
                                  sub: `Newest first`,
                                  title: `All notes`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-vg09iw`,
                              "data-framer-name": `TabsSlot`,
                              children: c(`div`, {
                                className: `framer-3yrjdm`,
                                "data-framer-name": `News Tabs`,
                                children: c(M, {
                                  children: c(Z, {
                                    query: an(),
                                    children: (e, t, n) =>
                                      s(a, {
                                        children: [
                                          c(I, {
                                            breakpoint: P,
                                            overrides: {
                                              prR64JMf1: { y: void 0 },
                                              y5tqiv19j: { y: void 0 },
                                            },
                                            children: c(A, {
                                              height: 32,
                                              y: (b?.y || 0) + 8 + 1881 + 0 + 0 + 22 + 0 + 0,
                                              children: c(D, {
                                                className: `framer-10wo7cp-container`,
                                                nodeId: `ts7JWAHIK`,
                                                scopeId: `JXDOUrKk6`,
                                                children: c(W, {
                                                  eAHGXWjyh: Ee,
                                                  height: `100%`,
                                                  id: `ts7JWAHIK`,
                                                  layoutId: `ts7JWAHIK`,
                                                  mXpY5N3RA: `All`,
                                                  variant: Q(nn(tn(x), g)),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          e?.map(
                                            ({ id: e, TvqMcJFM_: t, UwTvUkYW4: n }, r) => (
                                              (t ??= ``),
                                              (n ??= ``),
                                              c(
                                                m,
                                                {
                                                  id: `I7rgExVoI-${e}`,
                                                  children: c(O.Provider, {
                                                    value: { UwTvUkYW4: n },
                                                    children: c(I, {
                                                      breakpoint: P,
                                                      overrides: {
                                                        prR64JMf1: { y: void 0 },
                                                        y5tqiv19j: { y: void 0 },
                                                      },
                                                      children: c(A, {
                                                        height: 32,
                                                        y:
                                                          (b?.y || 0) +
                                                          8 +
                                                          1881 +
                                                          0 +
                                                          0 +
                                                          22 +
                                                          0 +
                                                          0,
                                                        children: c(D, {
                                                          className: `framer-193p3i1-container`,
                                                          nodeId: `RRevkU0s3`,
                                                          scopeId: `JXDOUrKk6`,
                                                          children: c(W, {
                                                            eAHGXWjyh: De({ argpujxhz: e }),
                                                            height: `100%`,
                                                            id: `RRevkU0s3`,
                                                            layoutId: `RRevkU0s3`,
                                                            mXpY5N3RA: t,
                                                            variant: Q(rn(Y(x, e), g)),
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
                        c(`div`, {
                          className: `framer-1phecly`,
                          "data-border": !0,
                          "data-framer-name": `ListSlot`,
                          children: c(`div`, {
                            className: `framer-1livze2`,
                            "data-framer-name": `Note List`,
                            children: c(M, {
                              children: c(Z, {
                                query: sn(x),
                                children: (e, t, n) => {
                                  let i = e?.length ?? 0,
                                    o = Y(i, 0);
                                  return s(a, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            "njS8qg7Pi.TvqMcJFM_": e,
                                            AMMsWkljI: t,
                                            id: n,
                                            K2EK0JLRZ: i,
                                            natkYErHc: a,
                                            PDM6PbwuL: o,
                                            PY3_uI0h0: l,
                                          },
                                          u
                                        ) => {
                                          ((o ??= ``), (e ??= ``), (i ??= ``), (l ??= 0));
                                          let d = q(t, R),
                                            p = J(l);
                                          return c(
                                            m,
                                            {
                                              id: `l87RH4OBm-${n}`,
                                              children: c(O.Provider, {
                                                value: { PDM6PbwuL: o },
                                                children: c(ie, {
                                                  href: {
                                                    pathVariables: { PDM6PbwuL: o },
                                                    webPageId: `zX8G5Rmeb`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `cTrZ6CbWM`,
                                                  scopeId: `JXDOUrKk6`,
                                                  children: s(f.a, {
                                                    className: `framer-fqb47f framer-14ru1dr`,
                                                    "data-border": !0,
                                                    "data-framer-name": `Note Row`,
                                                    whileHover: on,
                                                    children: [
                                                      c(I, {
                                                        breakpoint: P,
                                                        overrides: {
                                                          prR64JMf1: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              pixelHeight: 1120,
                                                              pixelWidth: 1400,
                                                              sizes: `88px`,
                                                              ...K(a),
                                                            },
                                                          },
                                                          y5tqiv19j: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              pixelHeight: 1120,
                                                              pixelWidth: 1400,
                                                              sizes: `88px`,
                                                              ...K(a),
                                                            },
                                                          },
                                                        },
                                                        children: c(j, {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            loading: v(
                                                              (b?.y || 0) +
                                                                8 +
                                                                1881 +
                                                                0 +
                                                                270 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                31.25
                                                            ),
                                                            pixelHeight: 1120,
                                                            pixelWidth: 1400,
                                                            sizes: `88px`,
                                                            ...K(a),
                                                          },
                                                          className: `framer-j5md77`,
                                                          "data-framer-name": `Thumb`,
                                                        }),
                                                      }),
                                                      c(w, {
                                                        __fromCanvasComponent: !0,
                                                        children: c(r, {
                                                          children: c(`p`, {
                                                            className: `framer-styles-preset-14yqjsj`,
                                                            "data-styles-preset": `X0BbqEMSb`,
                                                            dir: `auto`,
                                                            children: `Sep 18, 2026`,
                                                          }),
                                                        }),
                                                        className: `framer-w9ksxn`,
                                                        "data-framer-name": `RowDate`,
                                                        fonts: [`Inter`],
                                                        text: c(`time`, {
                                                          dateTime: t,
                                                          children: d,
                                                        }),
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      c(`div`, {
                                                        className: `framer-te88in`,
                                                        "data-framer-name": `RowCat`,
                                                        children: c(`div`, {
                                                          className: `framer-9to9i9`,
                                                          "data-border": !0,
                                                          "data-framer-name": `RowTag`,
                                                          children: c(w, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`p`, {
                                                                className: `framer-styles-preset-14yqjsj`,
                                                                "data-styles-preset": `X0BbqEMSb`,
                                                                dir: `auto`,
                                                                children: `Company`,
                                                              }),
                                                            }),
                                                            className: `framer-m6e7w4`,
                                                            "data-framer-name": `RowCategory`,
                                                            fonts: [`Inter`],
                                                            text: e,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        }),
                                                      }),
                                                      c(I, {
                                                        breakpoint: P,
                                                        overrides: {
                                                          prR64JMf1: {
                                                            children: c(r, {
                                                              children: c(`h3`, {
                                                                className: `framer-styles-preset-9vdglb`,
                                                                "data-styles-preset": `zjcSQ_DT9`,
                                                                dir: `auto`,
                                                                children: `Why we cool with air, not water`,
                                                              }),
                                                            }),
                                                          },
                                                        },
                                                        children: c(w, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(r, {
                                                            children: c(`h3`, {
                                                              className: `framer-styles-preset-1up4d44`,
                                                              "data-styles-preset": `Vsin8i4CA`,
                                                              dir: `auto`,
                                                              children: `Why we cool with air, not water`,
                                                            }),
                                                          }),
                                                          className: `framer-1szemv4`,
                                                          "data-framer-name": `Title`,
                                                          fonts: [`Inter`],
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                      }),
                                                      s(`div`, {
                                                        className: `framer-llx7dd`,
                                                        "data-framer-name": `RowRead`,
                                                        children: [
                                                          c(w, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`p`, {
                                                                className: `framer-styles-preset-14yqjsj`,
                                                                "data-styles-preset": `X0BbqEMSb`,
                                                                dir: `auto`,
                                                                children: `3`,
                                                              }),
                                                            }),
                                                            className: `framer-21h9b6`,
                                                            "data-framer-name": `RowReadTime`,
                                                            fonts: [`Inter`],
                                                            text: p,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                          c(w, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`p`, {
                                                                className: `framer-styles-preset-14yqjsj`,
                                                                "data-styles-preset": `X0BbqEMSb`,
                                                                dir: `auto`,
                                                                children: `min`,
                                                              }),
                                                            }),
                                                            className: `framer-3cwge3`,
                                                            "data-framer-name": `RowReadUnit`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        ],
                                                      }),
                                                      Oe() &&
                                                        c(w, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(r, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-f5nf9u`,
                                                              "data-styles-preset": `VG9ZrjMNG`,
                                                              dir: `auto`,
                                                              children: `→`,
                                                            }),
                                                          }),
                                                          className: `framer-kjzsmf hidden-1yna8uj`,
                                                          "data-framer-name": `RowArrow`,
                                                          fonts: [`Inter`],
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                    ],
                                                  }),
                                                }),
                                              }),
                                            },
                                            n
                                          );
                                        }
                                      ),
                                      o !== !1 &&
                                        c(`div`, {
                                          className: `framer-1qnay4u`,
                                          "data-border": !0,
                                          "data-framer-name": `Empty State`,
                                          children: c(w, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-1sj55z0`,
                                                "data-styles-preset": `LTmB1RL88`,
                                                dir: `auto`,
                                                children: `No notes in this category yet.`,
                                              }),
                                            }),
                                            className: `framer-ny337z`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    c(f.div, {
                      className: `framer-ur4ssi`,
                      "data-framer-name": `Letter`,
                      layout: L,
                      children: s(`div`, {
                        className: `framer-151xcad`,
                        "data-border": !0,
                        "data-framer-name": `LetterBox`,
                        children: [
                          c(`div`, {
                            className: `framer-3ah2tc`,
                            "data-framer-name": `LetterGlass`,
                            children: c(A, {
                              children: c(D, {
                                className: `framer-zzsr4d-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `q_8iTsamr`,
                                scopeId: `JXDOUrKk6`,
                                children: c(xe, {
                                  cursor: !1,
                                  floor: 0,
                                  gain: 1.8,
                                  height: `100%`,
                                  id: `q_8iTsamr`,
                                  layoutId: `q_8iTsamr`,
                                  lightX: 0.15,
                                  lightY: 0.2,
                                  mode: `fill`,
                                  overlay: `cta`,
                                  rib: 10,
                                  seed: 23,
                                  spread: 1.2,
                                  style: { height: `100%`, width: `100%` },
                                  sweep: 0,
                                  vignette: 1,
                                  width: `100%`,
                                  word: `Nordlys`,
                                }),
                              }),
                            }),
                          }),
                          s(`div`, {
                            className: `framer-gjaavg`,
                            "data-framer-name": `LetterL`,
                            children: [
                              c(A, {
                                children: c(D, {
                                  className: `framer-mn7c9w-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `NdkEp36mv`,
                                  scopeId: `JXDOUrKk6`,
                                  children: c(z, {
                                    height: `100%`,
                                    id: `NdkEp36mv`,
                                    kicker: ``,
                                    layoutId: `NdkEp36mv`,
                                    number: `03⁠`,
                                    reveal: !0,
                                    sub: `The Narvik letter`,
                                    title: `Newsletter`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(A, {
                                children: c(D, {
                                  className: `framer-zd87aa-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `c_8lvfbPa`,
                                  scopeId: `JXDOUrKk6`,
                                  children: c(ve, {
                                    align: `left`,
                                    color: `rgb(243, 243, 243)`,
                                    delay: 0,
                                    fluid: 3.7,
                                    height: `100%`,
                                    id: `c_8lvfbPa`,
                                    layoutId: `c_8lvfbPa`,
                                    lineHeight: 0.98,
                                    max: 56,
                                    min: 32,
                                    reveal: `scroll`,
                                    style: { width: `100%` },
                                    tag: `h2`,
                                    text: `One letter a month.`,
                                    tone: `From the hall.`,
                                    toneColor: `rgb(166, 166, 166)`,
                                    toneNoWrap: !0,
                                    tracking: -0.04,
                                    weight: 400,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(w, {
                                __fromCanvasComponent: !0,
                                children: c(r, {
                                  children: c(`p`, {
                                    className: `framer-styles-preset-1sj55z0`,
                                    "data-styles-preset": `LTmB1RL88`,
                                    dir: `auto`,
                                    children: `New field notes, capacity windows before they are public, and the month's PUE. Read by engineers at Tensorfield, Helix AI and Kernel.`,
                                  }),
                                }),
                                className: `framer-iv2ves`,
                                "data-framer-name": `LetterLede`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(`div`, {
                                className: `framer-1ejgg0v`,
                                "data-framer-name": `LetterList`,
                                children: [
                                  c(w, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1sj55z0`,
                                        "data-styles-preset": `LTmB1RL88`,
                                        dir: `auto`,
                                        children: `First Thursday of the month`,
                                      }),
                                    }),
                                    className: `framer-1s9bxjm`,
                                    "data-framer-name": `Li1`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(w, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1sj55z0`,
                                        "data-styles-preset": `LTmB1RL88`,
                                        dir: `auto`,
                                        children: `Q1 2027 B300 allocation, first`,
                                      }),
                                    }),
                                    className: `framer-1p40j38`,
                                    "data-framer-name": `Li2`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(w, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-1sj55z0`,
                                        "data-styles-preset": `LTmB1RL88`,
                                        dir: `auto`,
                                        children: `Unsubscribe in one click`,
                                      }),
                                    }),
                                    className: `framer-130inkc`,
                                    "data-framer-name": `Li3`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-edc4os`,
                            "data-framer-name": `LetterSlot`,
                            children: c(ce, {
                              className: `framer-11lqkl1`,
                              "data-framer-name": `Newsletter`,
                              nodeId: `RyLBD8oM3`,
                              children: (e) =>
                                s(a, {
                                  children: [
                                    s(`label`, {
                                      className: `framer-1pcmvoj`,
                                      "data-border": !0,
                                      "data-framer-name": `Field Email`,
                                      children: [
                                        c(w, {
                                          __fromCanvasComponent: !0,
                                          children: c(r, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-14yqjsj`,
                                              "data-styles-preset": `X0BbqEMSb`,
                                              dir: `auto`,
                                              children: `Work email`,
                                            }),
                                          }),
                                          className: `framer-zimzsz`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(me, {
                                          className: `framer-r00oqd`,
                                          inputName: `email`,
                                          placeholder: `you@company.com`,
                                          required: !0,
                                          type: `email`,
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-1vjte11`,
                                      "data-border": !0,
                                      "data-framer-name": `FieldTopics`,
                                      children: [
                                        c(w, {
                                          __fromCanvasComponent: !0,
                                          children: c(r, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-14yqjsj`,
                                              "data-styles-preset": `X0BbqEMSb`,
                                              dir: `auto`,
                                              children: `Topics`,
                                            }),
                                          }),
                                          className: `framer-1anwkb2`,
                                          "data-framer-name": `TopicsLabel`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        s(`div`, {
                                          className: `framer-92f5ko`,
                                          "data-framer-name": `TopicsGrid`,
                                          children: [
                                            s(`label`, {
                                              className: `framer-1go6njn`,
                                              children: [
                                                c(k, {
                                                  className: `framer-vw9acm`,
                                                  defaultChecked: !0,
                                                  inputName: `topic-field-notes	`,
                                                  type: `checkbox`,
                                                }),
                                                c(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(r, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-5efwe0`,
                                                      "data-styles-preset": `RnBEBxYqd`,
                                                      dir: `auto`,
                                                      children: `Field notes`,
                                                    }),
                                                  }),
                                                  className: `framer-t57s2i`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            s(`label`, {
                                              className: `framer-10qhxk4`,
                                              children: [
                                                c(k, {
                                                  className: `framer-2dfi40`,
                                                  defaultChecked: !0,
                                                  inputName: `topic-engineering	`,
                                                  type: `checkbox`,
                                                }),
                                                c(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(r, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-5efwe0`,
                                                      "data-styles-preset": `RnBEBxYqd`,
                                                      dir: `auto`,
                                                      children: `Engineering`,
                                                    }),
                                                  }),
                                                  className: `framer-tlksun`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            s(`label`, {
                                              className: `framer-qvgu1t`,
                                              children: [
                                                c(k, {
                                                  className: `framer-v51428`,
                                                  defaultChecked: !1,
                                                  inputName: `topic-company	`,
                                                  type: `checkbox`,
                                                }),
                                                c(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(r, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-5efwe0`,
                                                      "data-styles-preset": `RnBEBxYqd`,
                                                      dir: `auto`,
                                                      children: `Company`,
                                                    }),
                                                  }),
                                                  className: `framer-138kjc0`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            s(`label`, {
                                              className: `framer-1l33pt6`,
                                              children: [
                                                c(k, {
                                                  className: `framer-mjaacg`,
                                                  defaultChecked: !1,
                                                  inputName: `topic-press	`,
                                                  type: `checkbox`,
                                                }),
                                                c(w, {
                                                  __fromCanvasComponent: !0,
                                                  children: c(r, {
                                                    children: c(`p`, {
                                                      className: `framer-styles-preset-5efwe0`,
                                                      "data-styles-preset": `RnBEBxYqd`,
                                                      dir: `auto`,
                                                      children: `Press`,
                                                    }),
                                                  }),
                                                  className: `framer-tm8jvc`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s(`div`, {
                                      className: `framer-1lk8hwb`,
                                      "data-framer-name": `Foot`,
                                      children: [
                                        c(w, {
                                          __fromCanvasComponent: !0,
                                          children: c(r, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-vj4i3z`,
                                              "data-styles-preset": `nm2zECWKu`,
                                              dir: `auto`,
                                              children: `No tracking pixels`,
                                            }),
                                          }),
                                          className: `framer-kbwfnr`,
                                          "data-framer-name": `Note`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(I, {
                                          breakpoint: P,
                                          overrides: {
                                            prR64JMf1: { y: void 0 },
                                            y5tqiv19j: { y: void 0 },
                                          },
                                          children: c(A, {
                                            height: 38,
                                            y:
                                              (b?.y || 0) +
                                              8 +
                                              2458.5 +
                                              0 +
                                              0 +
                                              56 +
                                              387.7 +
                                              0 +
                                              0 +
                                              0 +
                                              205.4 +
                                              41.25,
                                            children: c(D, {
                                              className: `framer-595gwa-container`,
                                              nodeId: `fxVv8jBi1`,
                                              scopeId: `JXDOUrKk6`,
                                              children: c(V, {
                                                ayADjZZmZ: `Subscribe`,
                                                height: `100%`,
                                                id: `fxVv8jBi1`,
                                                layoutId: `fxVv8jBi1`,
                                                variant: Q(`xaRnQgVZZ`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    c(f.div, {
                      className: `framer-sk0ylv`,
                      "data-framer-name": `Footer`,
                      layout: L,
                      children: c(A, {
                        children: c(D, {
                          className: `framer-22a92h-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `JQhu1GOoU`,
                          scopeId: `JXDOUrKk6`,
                          children: c(Se, {
                            bare: !1,
                            col1: [
                              { id: `qxBjoQ5IU`, label: `Home` },
                              { id: `U0QRK2VkG`, label: `Company` },
                              { id: `jhKYedQph`, label: `Pricing` },
                              { id: `StE66pO16`, label: `Case studies` },
                              { id: `i5DpGSmoj`, label: `News` },
                              { id: `U7d2orLy3`, label: `Careers` },
                              { id: `ZsMDCRspz`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `eyzIEgeVJ`, label: `Design system` },
                              { id: `i602pLguo`, label: `All pages` },
                              { id: `sOVmIvE5u`, label: `404` },
                            ],
                            col2Title: `Template`,
                            copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
                            email: `hello@nordlys.example`,
                            gain: 2.4,
                            height: `100%`,
                            hint: `Engineers reply within one working day`,
                            id: `JQhu1GOoU`,
                            layoutId: `JQhu1GOoU`,
                            legal: `Privacy · Terms · Imprint`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `uAg2bGro1`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `pEy8NOKFf`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `PyZw2uN1s`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `xrkhgjUc5`, label: `NO4 price`, value: `€4.3 / MWh` },
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
        `.framer-VSZxN.framer-14ru1dr, .framer-VSZxN .framer-14ru1dr { display: block; }`,
        `.framer-VSZxN.framer-c3qfmg { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-VSZxN .framer-1uab0pi { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-VSZxN .framer-1ky5ap3-container, .framer-VSZxN .framer-17xo2gh-container, .framer-VSZxN .framer-zd87aa-container, .framer-VSZxN .framer-22a92h-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-f5jgq9, .framer-VSZxN .framer-t9liwx, .framer-VSZxN .framer-sk0ylv { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-at4re4 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1t0b6ug, .framer-VSZxN .framer-xwcnmy { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-zf6303-container, .framer-VSZxN .framer-qwkt72-container, .framer-VSZxN .framer-1nq3xo-container, .framer-VSZxN .framer-10wo7cp-container, .framer-VSZxN .framer-193p3i1-container, .framer-VSZxN .framer-mn7c9w-container, .framer-VSZxN .framer-595gwa-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-VSZxN .framer-j05pg8 { flex: none; height: auto; max-width: 340px; position: relative; white-space: pre-wrap; width: 32%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-1eg4es4, .framer-VSZxN .framer-1livze2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-5xfqu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-VSZxN .framer-11ydtw5 { flex: none; height: 545px; position: relative; width: 58%; }`,
        `.framer-VSZxN .framer-bp523d-container, .framer-VSZxN .framer-155ai2w-container { flex: none; height: 100%; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-VSZxN .framer-8qiuit { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: 545px; justify-content: flex-start; padding: 4px 0px 0px 117px; position: relative; width: 1px; }`,
        `.framer-VSZxN .framer-1fn2dl1 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-aen5p5 { --border-bottom-width: 1px; --border-color: rgba(201, 189, 255, 0.35); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; padding: 0px 9px 0px 9px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-r007nb, .framer-VSZxN .framer-69ql80, .framer-VSZxN .framer-1nrucws, .framer-VSZxN .framer-1u4ufvq, .framer-VSZxN .framer-10p3dq0, .framer-VSZxN .framer-10sqqyj, .framer-VSZxN .framer-1l1ljyx, .framer-VSZxN .framer-18lsu94, .framer-VSZxN .framer-m6e7w4, .framer-VSZxN .framer-21h9b6, .framer-VSZxN .framer-3cwge3, .framer-VSZxN .framer-1s9bxjm, .framer-VSZxN .framer-1p40j38, .framer-VSZxN .framer-130inkc, .framer-VSZxN .framer-zimzsz, .framer-VSZxN .framer-1anwkb2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-VSZxN .framer-owqttt, .framer-VSZxN .framer-9to9i9 { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; padding: 0px 9px 0px 9px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-1s8yjtv { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-1igwvt9, .framer-VSZxN .framer-ny337z { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-tbgrl5 { flex: none; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-18lkc7l { background-color: rgba(0, 0, 0, 0); flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1g8r9a2 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-15d0aou { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 18px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1h8qg6w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-VSZxN .framer-1w9rbuu { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-1kt365f { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-v6oa99 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-vg09iw { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-3yrjdm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-1phecly { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-fqb47f { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 28px 0px 28px 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-VSZxN .framer-j5md77 { flex: none; height: 66px; position: relative; width: 88px; }`,
        `.framer-VSZxN .framer-w9ksxn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 160px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-te88in { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 150px; }`,
        `.framer-VSZxN .framer-1szemv4 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-llx7dd { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: 72px; }`,
        `.framer-VSZxN .framer-kjzsmf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 24px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-1qnay4u { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-width: 100%; padding: 28px 0px 28px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-ur4ssi { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 128px 28px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-151xcad { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: var(--token-e8d24227-9bc3-4a25-b78a-7b5114799b10, #0a0a0a); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 56px 48px 56px 48px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-3ah2tc { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: flex-start; left: 0px; opacity: 0.5; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-VSZxN .framer-zzsr4d-container { flex: none; height: 100%; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-gjaavg { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 50%; }`,
        `.framer-VSZxN .framer-iv2ves { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-VSZxN .framer-1ejgg0v { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-edc4os { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 40%; }`,
        `.framer-VSZxN .framer-11lqkl1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1pcmvoj { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 16px 0px 10px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-r00oqd { --framer-input-focused-border-color: var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, #6e4bff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-font-color: var(--token-4a14c563-a4f1-47d7-b5aa-39550489a8cf, #f3f3f3); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.015em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-49f72bc3-4036-46c0-9fa1-3dcd44ff537e, #5e5e5e); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1vjte11 { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 16px 0px 16px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-92f5ko { background-color: rgba(0, 0, 0, 0); display: grid; flex: none; gap: 12px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-1go6njn, .framer-VSZxN .framer-10qhxk4, .framer-VSZxN .framer-qvgu1t, .framer-VSZxN .framer-1l33pt6 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-VSZxN .framer-vw9acm, .framer-VSZxN .framer-2dfi40, .framer-VSZxN .framer-v51428, .framer-VSZxN .framer-mjaacg { --framer-input-background: rgba(187, 187, 187, 0.2); --framer-input-boolean-checked-background: var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, #6e4bff); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.2); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 4px; --framer-input-border-radius-bottom-right: 4px; --framer-input-border-radius-top-left: 4px; --framer-input-border-radius-top-right: 4px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-icon-color: #ffffff; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 16px; }`,
        `.framer-VSZxN .framer-t57s2i, .framer-VSZxN .framer-tlksun, .framer-VSZxN .framer-138kjc0, .framer-VSZxN .framer-tm8jvc { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-VSZxN .framer-1lk8hwb { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-VSZxN .framer-kbwfnr { flex: 1 0 0px; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...Fe,
        ...De,
        ...ze,
        ...qe,
        ...vt,
        ...mt,
        ...Ft,
        ...Ue,
        ...ut,
        ...rt,
        ...$e,
        ...je,
        `.framer-VSZxN[data-border="true"]::after, .framer-VSZxN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-VSZxN.framer-c3qfmg { width: 810px; } .framer-VSZxN .framer-at4re4 { padding: 120px 18px 120px 18px; } .framer-VSZxN .framer-1t0b6ug, .framer-VSZxN .framer-xwcnmy { flex-direction: column; } .framer-VSZxN .framer-j05pg8, .framer-VSZxN .framer-gjaavg, .framer-VSZxN .framer-edc4os { width: 100%; } .framer-VSZxN .framer-5xfqu { flex-direction: column; gap: 28px; } .framer-VSZxN .framer-11ydtw5 { height: 460px; width: 100%; } .framer-VSZxN .framer-8qiuit { flex: none; height: min-content; padding: 0px; width: 100%; } .framer-VSZxN .framer-v6oa99 { padding: 0px 18px 120px 18px; } .framer-VSZxN .framer-w9ksxn { width: 130px; } .framer-VSZxN .framer-te88in { width: 120px; } .framer-VSZxN .framer-ur4ssi { padding: 0px 18px 96px 18px; } .framer-VSZxN .framer-151xcad { flex-direction: column; padding: 48px 32px 48px 32px; }}`,
        `@media (max-width: 809.98px) { .framer-VSZxN.framer-c3qfmg { width: 390px; } .framer-VSZxN .framer-at4re4 { padding: 96px 16px 96px 16px; } .framer-VSZxN .framer-1t0b6ug, .framer-VSZxN .framer-xwcnmy { flex-direction: column; } .framer-VSZxN .framer-j05pg8, .framer-VSZxN .framer-gjaavg, .framer-VSZxN .framer-edc4os { width: 100%; } .framer-VSZxN .framer-5xfqu { flex-direction: column; gap: 28px; } .framer-VSZxN .framer-11ydtw5 { height: 260px; width: 100%; } .framer-VSZxN .framer-8qiuit { flex: none; height: min-content; padding: 0px; width: 100%; } .framer-VSZxN .framer-v6oa99 { padding: 0px 16px 96px 16px; } .framer-VSZxN .framer-vg09iw { justify-content: flex-start; width: 100%; } .framer-VSZxN .framer-3yrjdm { flex-wrap: wrap; justify-content: flex-start; width: 100%; } .framer-VSZxN .framer-fqb47f { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; gap: 8px 16px; padding: 20px 0px 20px 0px; } .framer-VSZxN .framer-w9ksxn { white-space: pre; width: auto; } .framer-VSZxN .framer-te88in, .framer-VSZxN .framer-llx7dd { width: min-content; } .framer-VSZxN .framer-1szemv4, .framer-VSZxN .framer-kbwfnr { flex: none; width: 100%; } .framer-VSZxN .framer-ur4ssi { padding: 0px 16px 72px 16px; } .framer-VSZxN .framer-151xcad { flex-direction: column; padding: 32px 20px 32px 20px; } .framer-VSZxN .framer-92f5ko { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-VSZxN .framer-1lk8hwb { align-content: flex-start; align-items: flex-start; flex-direction: column; }}`,
      ],
      `framer-VSZxN`
    )),
    ($.displayName = `News`),
    ($.defaultProps = { height: 4512.5, width: 1280 }),
    x(
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
        ...Rt,
        ...zt,
        ...Bt,
        ...Vt,
        ...Ht,
        ...Ut,
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...T(Ie),
        ...T(Oe),
        ...T(Be),
        ...T(Je),
        ...T(yt),
        ...T(ht),
        ...T(Pt),
        ...T(We),
        ...T(dt),
        ...T(it),
        ...T(et),
        ...T(Me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = (async () => ({
            YOwrp6LUM1: await (async () => {
              let e = t.pathVariables?.category ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`b5kUAs37G`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))();
        i.catch(() => {});
        let a = g.get(X(), n, r),
          o = g.get(an(), n, r);
        return pe(
          [
            () => a.preload(),
            () => o.preload(),
            () => i.then(({ YOwrp6LUM1: e }) => N(() => g.get(sn(e), n, r).preload(), t)),
            () => S(V, {}, t),
            async () =>
              pe(
                ((await N(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => S(W, {}, t),
                  () => S(W, {}, t),
                ]),
                t
              ),
          ],
          t
        );
      },
    }),
    (dn = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerJXDOUrKk6`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `4512.5`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1280`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"y5tqiv19j":{"layout":["fixed","auto"]},"prR64JMf1":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { dn as __FramerMetadata__, $ as default, Yt as queryParamNames };
//# sourceMappingURL=SCFLhpyCKrxRFC8zB8-feXC--Sgz2D11wp7Y7qPcG70.R7XI88Ih.mjs.map
