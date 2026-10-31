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
  E as v,
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
  ct as k,
  f as A,
  ft as te,
  g as j,
  gt as ne,
  ht as re,
  i as M,
  k as N,
  lt as ie,
  m as P,
  mt as ae,
  n as F,
  nt as I,
  o as L,
  pt as oe,
  q as R,
  st as se,
  tt as z,
  vt as ce,
  w as B,
  x as V,
  xt as le,
} from "./framer.CKDq5C8y.mjs";
import {
  c as ue,
  d as de,
  f as H,
  i as U,
  l as W,
  n as fe,
  r as pe,
  t as me,
} from "./shared-lib.W6te6cXm.mjs";
import { i as he, o as ge } from "./Inner-d2rabs.CpMZmyL3.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./LTmB1RL88.B0kvNFDC.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./nm2zECWKu.85OYCxwA.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./ojHHcPZoV.CNNEQIUd.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./OL1kwShSL.xLn8V2pO.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { n as Le, t as G } from "./Mesh.BJnCAXXu.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./VG9ZrjMNG.eJrPKaJV.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./zjcSQ_DT9.DF5tjdSt.mjs";
import {
  a as Ke,
  c as qe,
  i as Je,
  l as Ye,
  n as Xe,
  o as Ze,
  r as Qe,
  s as $e,
  t as et,
  u as tt,
} from "./xVeHKGEs7.KwQ2VLq7.mjs";
import { n as nt, t as K } from "./lgQWesQ9p.CJkn6940.mjs";
import { i as rt, t as it } from "./s7TqDO7B2.D7yYim1s.mjs";
import { i as at, n as ot, r as st, t as ct } from "./FjqvUVINm.C8zStlgK.mjs";
import {
  a as lt,
  c as ut,
  i as dt,
  n as ft,
  o as pt,
  r as mt,
  s as ht,
  t as gt,
} from "./TDpFQWoXQ.CHN3V3ld.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./QFmtq4Ug3.Bk1tJ0bx.mjs";
import { i as xt, n as St, r as Ct, t as wt } from "./yySw96FLj.BRkHbKIB.mjs";
import Tt, { t as Et } from "./RB6QrwDjrf9TqfHrvYSq-gXdRmp1_TUEnThxRTE8ywY.DrQhPKQ5.mjs";
function Dt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  q,
  Lt = e(() => {
    (u(),
      R(),
      h(),
      d(),
      Ne(),
      (Ot = [`TRvzoj4jc`, `y99WONcy2`]),
      (kt = `framer-B1svx`),
      (At = { TRvzoj4jc: `framer-v-7xcnop`, y99WONcy2: `framer-v-yx5uka` }),
      (jt = { duration: 0, type: `tween` }),
      (Mt = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(p.Provider, { value: a, children: n });
      }),
      (Nt = { Active: `y99WONcy2`, Default: `TRvzoj4jc` }),
      (Pt = f.create(r)),
      (Ft = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: Nt[a.variant] ?? a.variant ?? `TRvzoj4jc`,
      })),
      (It = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = C(
        l(function (e, t) {
          let a = i(null),
            o = t ?? a,
            s = n(),
            { activeLocale: l, setLocale: u } = ne();
          ie();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              mXpY5N3RA: _,
              eAHGXWjyh: v,
              ...b
            } = Ft(e),
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
            } = le({
              cycleOrder: Ot,
              defaultVariant: `TRvzoj4jc`,
              ref: o,
              variant: g,
              variantClassNames: At,
            }),
            A = It(e, k),
            te = [Ie],
            { activeVariantCallback: j, delay: re } = se(x),
            M = j(async (...e) => {
              if ((O({ isPressed: !1 }), v && (await v(...e)) === !1)) return !1;
            }),
            N = y(kt, ...te);
          return c(m, {
            id: h ?? s,
            children: c(Pt, {
              animate: k,
              initial: !1,
              children: c(Mt, {
                value: jt,
                children: c(f.div, {
                  ...b,
                  ...T,
                  className: y(N, `framer-7xcnop`, p, S),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `TRvzoj4jc`,
                  onTap: M,
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
                    y99WONcy2: {
                      "--border-color": `var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, rgb(110, 75, 255))`,
                      backgroundColor: `var(--token-ff84b31f-7b9d-4393-bcb4-cc3c3e45399e, rgb(26, 16, 51))`,
                    },
                  },
                  ...Dt({ y99WONcy2: { "data-framer-name": `Active` } }, x, E),
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
                    className: `framer-vpf2is`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: A,
                    layoutId: `t2fTFOBrE`,
                    text: _,
                    variants: { y99WONcy2: { "--extracted-r6o4lv": `rgb(255, 255, 255)` } },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Dt(
                      {
                        y99WONcy2: {
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
                      E
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-B1svx.framer-18ncaa5, .framer-B1svx .framer-18ncaa5 { display: block; }`,
          `.framer-B1svx.framer-7xcnop { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; padding: 0px 12px 0px 12px; position: relative; width: min-content; }`,
          `.framer-B1svx .framer-vpf2is { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Pe,
          `.framer-B1svx[data-border="true"]::after, .framer-B1svx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-B1svx`
      )),
      (q.displayName = `Tab 2`),
      (q.defaultProps = { height: 32, width: 80 }),
      N(q, {
        variant: {
          options: [`TRvzoj4jc`, `y99WONcy2`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: L.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: L.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: L.EventHandler },
      }),
      x(
        q,
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
          ...T(Fe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (R(),
      b.loadFonts([
        `GF;Inter Tight-regular`,
        `GF;Inter Tight-700`,
        `GF;Inter Tight-700italic`,
        `GF;Inter Tight-italic`,
      ]),
      (Rt = [
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
      (zt = [
        `.framer-hvZIf .framer-styles-preset-1ozmcsf:not(.rich-text-wrapper), .framer-hvZIf .framer-styles-preset-1ozmcsf.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4a14c563-a4f1-47d7-b5aa-39550489a8cf, #f3f3f3); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Bt = `framer-hvZIf`));
  }),
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  J,
  Y,
  X,
  Z,
  rn,
  an,
  Q,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  $,
  pn;
e(() => {
  (u(),
    R(),
    h(),
    d(),
    Lt(),
    U(),
    ge(),
    tt(),
    Le(),
    fe(),
    H(),
    nt(),
    rt(),
    qe(),
    at(),
    Vt(),
    _e(),
    xe(),
    ut(),
    Te(),
    ke(),
    _t(),
    dt(),
    Re(),
    Ne(),
    Je(),
    xt(),
    He(),
    Et(),
    (Ht = _(me)),
    (Ut = _(he)),
    (Wt = _(W)),
    (Gt = _(de)),
    (Kt = _(G)),
    (qt = _(Ye)),
    (Jt = _(q)),
    (Yt = _(ue)),
    (Xt = _(pe)),
    (Zt = {
      dl9ZKuL6k: `(min-width: 810px) and (max-width: 1279.98px)`,
      MdB5Xq9aI: `(min-width: 1280px)`,
      PVa32zQEu: `(max-width: 809.98px)`,
    }),
    (Qt = () => typeof document < `u`),
    ($t = [`industry`]),
    (en = `framer-gFFak`),
    (tn = {
      dl9ZKuL6k: `framer-v-p33jgn`,
      MdB5Xq9aI: `framer-v-1dskxq2`,
      PVa32zQEu: `framer-v-1kmqm8d`,
    }),
    (nn = (e, t, n) => (e && t ? `position` : n)),
    (J = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Y = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (X = () => ({
      from: {
        constraint: {
          left: { collection: `WAC8MR8nT`, name: `VFKnwMJD3`, type: `Identifier` },
          operator: `==`,
          right: { collection: `VFKnwMJD3`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `WAC8MR8nT`, data: it, type: `Collection` },
        right: { alias: `VFKnwMJD3`, data: K, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `WAC8MR8nT`, name: `NxLzBdWey`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `CKR0ztGiZ`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `YFyJuaDIZ`, type: `Identifier` },
        {
          alias: `VFKnwMJD3.Kc5EZ43BX`,
          collection: `VFKnwMJD3`,
          name: `Kc5EZ43BX`,
          type: `Identifier`,
        },
        { collection: `WAC8MR8nT`, name: `BsnzU256L`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `UnGiPgSff`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `sIYkJE2fx`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `EsIMB5Rwr`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `CDIk9uuLX`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `lT6nqEYAV`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `my7EwV5uf`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `E94Lfv0ue`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `PQPwyijK9`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `uDlo4uwlm`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `GJGXrNGBf`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `PrYZHr5XG`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `aATa6gstg`, type: `Identifier` },
        { collection: `WAC8MR8nT`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `WAC8MR8nT`, name: `uHJHJUcC7`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: !0 },
        type: `BinaryOperation`,
      },
    })),
    (Z = ({ query: e, pageSize: t, children: n }) => n(ce(e))),
    (rn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (an = (e, t) => (e ? `TRvzoj4jc` : `y99WONcy2`)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (on = (e, t) => (e ? `y99WONcy2` : `TRvzoj4jc`)),
    (sn = () => ({
      from: { alias: `MFXiV6T8t`, data: K, type: `Collection` },
      select: [
        { collection: `MFXiV6T8t`, name: `id`, type: `Identifier` },
        { collection: `MFXiV6T8t`, name: `Kc5EZ43BX`, type: `Identifier` },
        { collection: `MFXiV6T8t`, name: `v1gtYAz39`, type: `Identifier` },
      ],
    })),
    (cn = (e, t = {}, n) => {
      let r = `en-US`,
        i = t.locale || n || r,
        {
          useGrouping: a,
          notation: o,
          compactDisplay: s,
          style: c,
          currency: l,
          currencyDisplay: u,
          unit: d,
          unitDisplay: f,
          minimumFractionDigits: p,
          maximumFractionDigits: m,
          minimumIntegerDigits: h,
        } = t,
        g = {
          useGrouping: a,
          notation: o,
          compactDisplay: s,
          style: c,
          currency: l,
          currencyDisplay: u,
          unit: d,
          unitDisplay: f,
          minimumFractionDigits: p,
          maximumFractionDigits: m,
          minimumIntegerDigits: h,
        },
        _ = Number(e);
      try {
        return _.toLocaleString(i, g);
      } catch {
        try {
          return _.toLocaleString(r, g);
        } catch {
          return _.toLocaleString();
        }
      }
    }),
    (ln = (e) => ({
      from: {
        constraint: {
          left: { collection: `cdcoVcFFd`, name: `VFKnwMJD3`, type: `Identifier` },
          operator: `==`,
          right: { collection: `VFKnwMJD3`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `cdcoVcFFd`, data: it, type: `Collection` },
        right: { alias: `VFKnwMJD3`, data: K, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 10 },
      orderBy: [
        { collection: `cdcoVcFFd`, direction: `desc`, name: `createdAt`, type: `Identifier` },
      ],
      select: [
        { collection: `cdcoVcFFd`, name: `NxLzBdWey`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `sIYkJE2fx`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `CKR0ztGiZ`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `YFyJuaDIZ`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `BsnzU256L`, type: `Identifier` },
        {
          alias: `VFKnwMJD3.Kc5EZ43BX`,
          collection: `VFKnwMJD3`,
          name: `Kc5EZ43BX`,
          type: `Identifier`,
        },
        { collection: `cdcoVcFFd`, name: `EuRzmxi4d`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `UE6Cj2bLV`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `E94Lfv0ue`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `PQPwyijK9`, type: `Identifier` },
        { collection: `cdcoVcFFd`, name: `id`, type: `Identifier` },
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
          left: { collection: `VFKnwMJD3`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (un = { Desktop: `MdB5Xq9aI`, Phone: `PVa32zQEu`, Tablet: `dl9ZKuL6k` }),
    (dn = ({ value: e }) =>
      ae()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (fn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: un[r.variant] ?? r.variant ?? `MdB5Xq9aI`,
    })),
    ($ = C(
      l(function (e, l) {
        let u = i(null),
          d = l ?? u,
          h = n(),
          { activeLocale: g, setLocale: _ } = ne(),
          b = ie(),
          [x, S] = k({ collectionId: `lgQWesQ9p`, optional: !0, parameterName: `industry` }),
          { style: C, className: T, layoutId: N, variant: ae, ...I } = fn(e);
        E(o(() => Tt({}, g), [g]));
        let [L, R] = oe(ae, Zt, !1),
          z = y(en, Me, be, gt, Ie, wt, et, bt, Ke, Bt, lt, Oe, Ge, we, ct, Ve),
          ce = t(A)?.isLayoutTemplate,
          le = !!t(p)?.transition?.layout,
          H = nn(ce, le);
        ee();
        let { activeVariantCallback: U, delay: fe } = se(void 0),
          ge = U(async (...e) => {
            S?.(void 0);
          }),
          _e = ({ arg1g4fl3m: e }) =>
            U(async (...t) => {
              S?.(e);
            }),
          ve = re(),
          ye = () => !Qt() || ![`dl9ZKuL6k`, `PVa32zQEu`].includes(L);
        return (
          te({}),
          c(A.Provider, {
            value: {
              activeVariantId: L,
              humanReadableVariantMap: un,
              primaryVariantId: `MdB5Xq9aI`,
              variantClassNames: tn,
            },
            children: s(m, {
              id: N ?? h,
              children: [
                c(dn, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                s(f.div, {
                  ...I,
                  className: y(z, `framer-1dskxq2`, T),
                  ref: d,
                  style: { ...C },
                  children: [
                    c(f.div, {
                      className: `framer-1a8k588`,
                      "data-framer-name": `Navigation`,
                      layout: H,
                      children: c(B, {
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
                          c(M, {
                            children: c(D, {
                              className: `framer-1174btl-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `YeVUzfZs1`,
                              scopeId: `f4IvkyEC_`,
                              children: c(V, {
                                breakpoint: L,
                                overrides: {
                                  dl9ZKuL6k: {
                                    allPagesLink: e[11],
                                    ctaLink: e[10],
                                    links: [
                                      { id: `x3RsOg1_Q`, label: `Company`, link: e[6] },
                                      { id: `tdxPhzbhJ`, label: `Pricing`, link: e[7] },
                                      { id: `LW4gVR4BN`, label: `Customers`, link: e[8] },
                                      { id: `TtigcMSKu`, label: `News`, link: e[9] },
                                    ],
                                  },
                                  PVa32zQEu: {
                                    allPagesLink: e[17],
                                    ctaLink: e[16],
                                    links: [
                                      { id: `x3RsOg1_Q`, label: `Company`, link: e[12] },
                                      { id: `tdxPhzbhJ`, label: `Pricing`, link: e[13] },
                                      { id: `LW4gVR4BN`, label: `Customers`, link: e[14] },
                                      { id: `TtigcMSKu`, label: `News`, link: e[15] },
                                    ],
                                  },
                                },
                                children: c(me, {
                                  allPages: `All pages`,
                                  allPagesLink: e[5],
                                  bare: !1,
                                  bottomBlur: !0,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[4],
                                  current: `Customers`,
                                  formStyle: !0,
                                  height: `100%`,
                                  id: `YeVUzfZs1`,
                                  items: [
                                    { id: `uaRRnpCnq`, label: `Home`, note: `4 layouts` },
                                    { id: `SAkj1oVgX`, label: `Company`, note: `Since 2024` },
                                    { id: `uYIIcNsWW`, label: `Pricing`, note: `From $1.62` },
                                    { id: `xNatqIaBh`, label: `Case studies`, note: `6 teams` },
                                    { id: `fwSMnCHVk`, label: `News`, note: `Field notes` },
                                    { id: `S7cstssPD`, label: `Careers`, note: `7 open roles` },
                                    { id: `HCcpWSXwn`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `YeVUzfZs1`,
                                  links: [
                                    { id: `x3RsOg1_Q`, label: `Company`, link: e[0] },
                                    { id: `tdxPhzbhJ`, label: `Pricing`, link: e[1] },
                                    { id: `LW4gVR4BN`, label: `Customers`, link: e[2] },
                                    { id: `TtigcMSKu`, label: `News`, link: e[3] },
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
                    c(f.div, {
                      className: `framer-1x5hpf7`,
                      "data-framer-name": `Hero`,
                      layout: H,
                      children: c(B, {
                        links: [
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          c(M, {
                            children: c(D, {
                              className: `framer-6f6g5z-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `olWHykQKN`,
                              scopeId: `f4IvkyEC_`,
                              children: c(V, {
                                breakpoint: L,
                                overrides: {
                                  dl9ZKuL6k: {
                                    buttons: [
                                      {
                                        ghost: !0,
                                        id: `yXD5cje5B`,
                                        label: `Browse all six`,
                                        link: e[1],
                                      },
                                    ],
                                  },
                                  PVa32zQEu: {
                                    buttons: [
                                      {
                                        ghost: !0,
                                        id: `yXD5cje5B`,
                                        label: `Browse all six`,
                                        link: e[2],
                                      },
                                    ],
                                  },
                                },
                                children: c(he, {
                                  buttons: [
                                    {
                                      ghost: !0,
                                      id: `yXD5cje5B`,
                                      label: `Browse all six`,
                                      link: e[0],
                                    },
                                  ],
                                  currency: `$`,
                                  eyebrow: `Customers · 6 teams on N-01`,
                                  frame: !1,
                                  gain: 2.4,
                                  height: `100%`,
                                  id: `olWHykQKN`,
                                  layout: `standard`,
                                  layoutId: `olWHykQKN`,
                                  lightX: 0.66,
                                  lightY: 0.72,
                                  maxPx: 780,
                                  meta: [
                                    {
                                      id: `sYB2cKhN8`,
                                      label: `GPUs live`,
                                      value: `9,984`,
                                      violet: !1,
                                    },
                                    {
                                      id: `WW8S5Mnhs`,
                                      label: `Energy saved`,
                                      value: `−34% median`,
                                      violet: !1,
                                    },
                                    {
                                      id: `sMWyvWWxx`,
                                      label: `Cooling water`,
                                      value: `0 L`,
                                      violet: !1,
                                    },
                                    {
                                      id: `aycy092an`,
                                      label: `Since`,
                                      value: `March 2024`,
                                      violet: !1,
                                    },
                                  ],
                                  minPx: 520,
                                  minVh: 72,
                                  nowItems: [
                                    {
                                      id: `c0YqwkOR4`,
                                      label: `Outside`,
                                      unit: `°C`,
                                      value: `−4.2`,
                                    },
                                    { id: `h9yplCZHu`, label: `PUE`, unit: ``, value: `1.08` },
                                    { id: `ip5Wk7gZm`, label: `Hydro`, unit: `%`, value: `98.7` },
                                  ],
                                  nowLabel: `Narvik now`,
                                  photo: `none`,
                                  price: `1.46`,
                                  priceLine: `per GPU-hour, three-year Sovereign,`,
                                  priceTone: `all-in.`,
                                  rib: 10,
                                  seed: 19,
                                  shade: `left`,
                                  spread: 1.1,
                                  stackMeta: !1,
                                  style: { width: `100%` },
                                  text: `Foundation labs, biotech and public services running in Hall A, Narvik. Their numbers, in their own words.`,
                                  title: `Teams that train`,
                                  titleFluid: 5.6,
                                  titleMax: 96,
                                  titleMaxWidth: 0,
                                  titleMin: 40,
                                  tone: `in the cold.`,
                                  toneLine: !1,
                                  topRight: ``,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    s(f.div, {
                      className: `framer-1j0y1uy`,
                      "data-framer-name": `Featured`,
                      layout: H,
                      children: [
                        s(`div`, {
                          className: `framer-15sj7zt`,
                          "data-border": !0,
                          "data-framer-name": `FeatHead`,
                          children: [
                            c(M, {
                              children: c(D, {
                                className: `framer-qrjarg-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `Bbj9DCUbZ`,
                                scopeId: `f4IvkyEC_`,
                                children: c(W, {
                                  height: `100%`,
                                  id: `Bbj9DCUbZ`,
                                  kicker: ``,
                                  layoutId: `Bbj9DCUbZ`,
                                  number: `01⁠`,
                                  reveal: !0,
                                  sub: `Case of the quarter`,
                                  title: `Featured`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            c(V, {
                              breakpoint: L,
                              overrides: {
                                dl9ZKuL6k: {
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `One team, picked each quarter from the labs running on N-01.`,
                                    }),
                                  }),
                                },
                                PVa32zQEu: {
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-1sj55z0`,
                                      "data-styles-preset": `LTmB1RL88`,
                                      dir: `auto`,
                                      children: `One team, picked each quarter from the labs running on N-01.`,
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
                                    children: `One team, picked each quarter from the labs running on N-01.`,
                                  }),
                                }),
                                className: `framer-tk2o4r`,
                                "data-framer-name": `FeatNote`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        c(`div`, {
                          className: `framer-1ebs7wj`,
                          "data-framer-name": `FeatSlot`,
                          children: c(`div`, {
                            className: `framer-8vvsik`,
                            "data-framer-name": `Feat List`,
                            children: c(F, {
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
                                            "VFKnwMJD3.Kc5EZ43BX": e,
                                            aATa6gstg: t,
                                            BsnzU256L: n,
                                            CDIk9uuLX: i,
                                            CKR0ztGiZ: a,
                                            E94Lfv0ue: o,
                                            EsIMB5Rwr: l,
                                            GJGXrNGBf: u,
                                            id: d,
                                            lT6nqEYAV: p,
                                            my7EwV5uf: h,
                                            NxLzBdWey: g,
                                            PQPwyijK9: _,
                                            PrYZHr5XG: v,
                                            sIYkJE2fx: y,
                                            uDlo4uwlm: x,
                                            UnGiPgSff: S,
                                            YFyJuaDIZ: C,
                                          },
                                          T
                                        ) => (
                                          (g ??= ``),
                                          (C ??= ``),
                                          (e ??= ``),
                                          (n ??= ``),
                                          (S ??= ``),
                                          (l ??= ``),
                                          (p ??= ``),
                                          (h ??= ``),
                                          (o ??= ``),
                                          (_ ??= ``),
                                          (x ??= ``),
                                          (u ??= ``),
                                          (v ??= ``),
                                          (t ??= ``),
                                          c(
                                            m,
                                            {
                                              id: `WAC8MR8nT-${d}`,
                                              children: c(O.Provider, {
                                                value: { NxLzBdWey: g },
                                                children: c(j, {
                                                  href: {
                                                    pathVariables: { NxLzBdWey: g },
                                                    webPageId: `PjrO0w6gt`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `ptPpG2sA_`,
                                                  scopeId: `f4IvkyEC_`,
                                                  children: s(f.a, {
                                                    className: `framer-1d1dkdz framer-1y794py`,
                                                    "data-framer-name": `Feat Card`,
                                                    children: [
                                                      s(`div`, {
                                                        className: `framer-45rcgo`,
                                                        "data-framer-name": `FtHead`,
                                                        children: [
                                                          s(`div`, {
                                                            className: `framer-94h58x`,
                                                            "data-framer-name": `FtL`,
                                                            children: [
                                                              s(`div`, {
                                                                className: `framer-1baszqg`,
                                                                "data-framer-name": `FtBrand`,
                                                                children: [
                                                                  c(P, {
                                                                    background: {
                                                                      alt: ``,
                                                                      fit: `fill`,
                                                                      pixelHeight: 22,
                                                                      pixelWidth: 22,
                                                                      sizes: `28px`,
                                                                      ...J(a),
                                                                    },
                                                                    className: `framer-17tvc65`,
                                                                    "data-framer-name": `FtLogo`,
                                                                  }),
                                                                  c(w, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-1mu8wpp`,
                                                                        "data-styles-preset": `TDpFQWoXQ`,
                                                                        dir: `auto`,
                                                                        children: `Kernel`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-1sr8kn6`,
                                                                    "data-framer-name": `Title`,
                                                                    fonts: [`Inter`],
                                                                    text: C,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                  c(`div`, {
                                                                    className: `framer-sk97ai`,
                                                                    "data-border": !0,
                                                                    "data-framer-name": `FtTag`,
                                                                    children: c(w, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: c(r, {
                                                                        children: c(`p`, {
                                                                          className: `framer-styles-preset-14yqjsj`,
                                                                          "data-styles-preset": `X0BbqEMSb`,
                                                                          dir: `auto`,
                                                                          children: `Foundation models`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-66l16i`,
                                                                      "data-framer-name": `FtIndustry`,
                                                                      fonts: [`Inter`],
                                                                      text: e,
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
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
                                                                    children: `A 70B foundation model, trained in 19 days on 2,048 H200s.`,
                                                                  }),
                                                                }),
                                                                className: `framer-1q971n7`,
                                                                "data-framer-name": `FtHeadline`,
                                                                fonts: [`Inter`],
                                                                text: n,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          s(`div`, {
                                                            className: `framer-1a4y9n1`,
                                                            "data-framer-name": `FtR`,
                                                            children: [
                                                              c(w, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-1sj55z0`,
                                                                    "data-styles-preset": `LTmB1RL88`,
                                                                    dir: `auto`,
                                                                    children: `Summer heat throttled every run in Frankfurt. In Narvik the cluster has not slowed once, and energy per run fell by a third.`,
                                                                  }),
                                                                }),
                                                                className: `framer-1l40i5l`,
                                                                "data-framer-name": `FtSummary`,
                                                                fonts: [`Inter`],
                                                                text: S,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              c(M, {
                                                                children: c(D, {
                                                                  className: `framer-1u78f4d-container`,
                                                                  "data-code-component-plugin-id": `mcp001`,
                                                                  isAuthoredByUser: !0,
                                                                  nodeId: `wuBp2dOXh`,
                                                                  scopeId: `f4IvkyEC_`,
                                                                  children: c(de, {
                                                                    full: !1,
                                                                    ghost: !1,
                                                                    height: `100%`,
                                                                    id: `wuBp2dOXh`,
                                                                    label: `Read case study`,
                                                                    layoutId: `wuBp2dOXh`,
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
                                                      s(`div`, {
                                                        className: `framer-8jyu1l`,
                                                        "data-framer-name": `FtBody`,
                                                        children: [
                                                          c(V, {
                                                            breakpoint: L,
                                                            overrides: {
                                                              dl9ZKuL6k: {
                                                                background: {
                                                                  alt: ``,
                                                                  fit: `fill`,
                                                                  pixelHeight: 960,
                                                                  pixelWidth: 1200,
                                                                  sizes: `calc(${b?.width || `100vw`} - 52px)`,
                                                                  ...J(y),
                                                                },
                                                              },
                                                              PVa32zQEu: {
                                                                background: {
                                                                  alt: ``,
                                                                  fit: `fill`,
                                                                  pixelHeight: 960,
                                                                  pixelWidth: 1200,
                                                                  sizes: `calc(${b?.width || `100vw`} - 48px)`,
                                                                  ...J(y),
                                                                },
                                                              },
                                                            },
                                                            children: c(P, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 960,
                                                                pixelWidth: 1200,
                                                                sizes: `max((${b?.width || `100vw`} - 116px) * 0.5833, 1px)`,
                                                                ...J(y),
                                                              },
                                                              className: `framer-z3hu5z`,
                                                              "data-framer-name": `FtCover`,
                                                              children: c(M, {
                                                                children: c(D, {
                                                                  className: `framer-ruonz-container`,
                                                                  "data-code-component-plugin-id": `mcp001`,
                                                                  isAuthoredByUser: !0,
                                                                  nodeId: `zlYk6MjnL`,
                                                                  scopeId: `f4IvkyEC_`,
                                                                  children: c(G, {
                                                                    brightness: 0.8,
                                                                    chip: `{RowGpus} GPUs`,
                                                                    chipIcon: `chip`,
                                                                    contrast: 1.08,
                                                                    corners: !0,
                                                                    cornerSet: `all`,
                                                                    height: `100%`,
                                                                    id: `zlYk6MjnL`,
                                                                    label: `{RowSite}`,
                                                                    layoutId: `zlYk6MjnL`,
                                                                    mesh: !0,
                                                                    overlay: `case`,
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
                                                            className: `framer-7b6t1y`,
                                                            "data-border": !0,
                                                            "data-framer-name": `FtVoice`,
                                                            children: [
                                                              c(M, {
                                                                children: c(D, {
                                                                  className: `framer-13bm8lc-container`,
                                                                  "data-code-component-plugin-id": `mcp001`,
                                                                  isAuthoredByUser: !0,
                                                                  nodeId: `FzqFnOjRA`,
                                                                  scopeId: `f4IvkyEC_`,
                                                                  children: c(Ye, {
                                                                    animate: !0,
                                                                    height: `100%`,
                                                                    id: `FzqFnOjRA`,
                                                                    layoutId: `FzqFnOjRA`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    width: `100%`,
                                                                  }),
                                                                }),
                                                              }),
                                                              s(`div`, {
                                                                className: `framer-1fmuru5`,
                                                                "data-framer-name": `VTop`,
                                                                children: [
                                                                  c(w, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-14yqjsj`,
                                                                        "data-styles-preset": `X0BbqEMSb`,
                                                                        dir: `auto`,
                                                                        children: `In their words`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-1iyadts`,
                                                                    "data-framer-name": `FtVoiceTag`,
                                                                    fonts: [`Inter`],
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
                                                                        children: `Customer since 2024`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-1q3j1nb`,
                                                                    fonts: [`Inter`],
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                ],
                                                              }),
                                                              c(`div`, {
                                                                className: `framer-1ee0jrq`,
                                                                "data-framer-name": `VQuote`,
                                                                children: c(w, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`p`, {
                                                                      className: `framer-styles-preset-16kvpq7`,
                                                                      "data-styles-preset": `xVeHKGEs7`,
                                                                      dir: `auto`,
                                                                      children: `Our training runs used to stall on thermal limits every summer. In Narvik they just keep going, and the power bill is one we can plan around.`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-16pztm1`,
                                                                  "data-framer-name": `FtQuote`,
                                                                  fonts: [`Inter`],
                                                                  text: l,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              s(`div`, {
                                                                className: `framer-ntmx7n`,
                                                                "data-framer-name": `VBy`,
                                                                children: [
                                                                  s(`div`, {
                                                                    className: `framer-wf27dh`,
                                                                    "data-border": !0,
                                                                    "data-framer-name": `FtBy`,
                                                                    children: [
                                                                      c(P, {
                                                                        background: {
                                                                          alt: ``,
                                                                          fit: `fill`,
                                                                          pixelHeight: 1500,
                                                                          pixelWidth: 1200,
                                                                          sizes: `40px`,
                                                                          ...J(i),
                                                                        },
                                                                        className: `framer-qf2yxg`,
                                                                        "data-framer-name": `FtPortrait`,
                                                                        children: c(M, {
                                                                          children: c(D, {
                                                                            className: `framer-1aa4nma-container`,
                                                                            "data-code-component-plugin-id": `mcp001`,
                                                                            isAuthoredByUser: !0,
                                                                            nodeId: `aA6KJZV33`,
                                                                            scopeId: `f4IvkyEC_`,
                                                                            children: c(G, {
                                                                              brightness: 0.9,
                                                                              chip: ``,
                                                                              chipIcon: `chip`,
                                                                              contrast: 1.05,
                                                                              corners: !1,
                                                                              cornerSet: `all`,
                                                                              height: `100%`,
                                                                              id: `aA6KJZV33`,
                                                                              label: ``,
                                                                              layoutId: `aA6KJZV33`,
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
                                                                        className: `framer-189n007`,
                                                                        "data-framer-name": `FtWho`,
                                                                        children: [
                                                                          c(w, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: c(r, {
                                                                              children: c(`p`, {
                                                                                className: `framer-styles-preset-f6jwmz`,
                                                                                "data-styles-preset": `QFmtq4Ug3`,
                                                                                dir: `auto`,
                                                                                children: `Amara Okafor`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-gbpsdy`,
                                                                            "data-framer-name": `FtPerson`,
                                                                            fonts: [`Inter`],
                                                                            text: p,
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          c(w, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: c(r, {
                                                                              children: c(`p`, {
                                                                                className: `framer-styles-preset-whytys`,
                                                                                "data-styles-preset": `CQ3fbAbuS`,
                                                                                dir: `auto`,
                                                                                children: `Amara Okafor`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-yi2sj8`,
                                                                            "data-framer-name": `FtRole`,
                                                                            fonts: [`Inter`],
                                                                            text: h,
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                        ],
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  s(`div`, {
                                                                    className: `framer-1197c0r`,
                                                                    "data-border": !0,
                                                                    "data-framer-name": `ReadLink`,
                                                                    children: [
                                                                      c(w, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: c(r, {
                                                                          children: c(`p`, {
                                                                            className: `framer-styles-preset-1ozmcsf`,
                                                                            "data-styles-preset": `i3TbWSnuz`,
                                                                            dir: `auto`,
                                                                            children: `Read case study`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-1nk9hvp`,
                                                                        fonts: [`Inter`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      c(w, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: c(r, {
                                                                          children: c(`p`, {
                                                                            className: `framer-styles-preset-1ozmcsf`,
                                                                            "data-styles-preset": `i3TbWSnuz`,
                                                                            dir: `auto`,
                                                                            children: `→`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-wls8ft`,
                                                                        "data-framer-name": `ReadArrow`,
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
                                                        ],
                                                      }),
                                                      s(`div`, {
                                                        className: `framer-4ydjul`,
                                                        "data-framer-name": `FtMetrics`,
                                                        children: [
                                                          s(`div`, {
                                                            className: `framer-2ew1fc`,
                                                            "data-border": !0,
                                                            "data-framer-name": `FtM1`,
                                                            children: [
                                                              c(w, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-1j9vszl`,
                                                                    "data-styles-preset": `O5r641A2v`,
                                                                    dir: `auto`,
                                                                    children: `−34%`,
                                                                  }),
                                                                }),
                                                                className: `framer-x6zm18`,
                                                                "data-framer-name": `FtM1V`,
                                                                fonts: [`Inter`],
                                                                text: o,
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
                                                                    children: `Energy cost`,
                                                                  }),
                                                                }),
                                                                className: `framer-d0fwf8`,
                                                                "data-framer-name": `FtM1L`,
                                                                fonts: [`Inter`],
                                                                text: _,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          s(`div`, {
                                                            className: `framer-j1d3hn`,
                                                            "data-border": !0,
                                                            "data-framer-name": `FtM2`,
                                                            children: [
                                                              c(w, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-1j9vszl`,
                                                                    "data-styles-preset": `O5r641A2v`,
                                                                    dir: `auto`,
                                                                    children: `19 d`,
                                                                  }),
                                                                }),
                                                                className: `framer-pudrcg`,
                                                                "data-framer-name": `FtM2V`,
                                                                fonts: [`Inter`],
                                                                text: x,
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
                                                                    children: `Time to train`,
                                                                  }),
                                                                }),
                                                                className: `framer-1ak6dfo`,
                                                                "data-framer-name": `FtM2L`,
                                                                fonts: [`Inter`],
                                                                text: u,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                            ],
                                                          }),
                                                          s(`div`, {
                                                            className: `framer-s5sale`,
                                                            "data-border": !0,
                                                            "data-framer-name": `FtM3`,
                                                            children: [
                                                              c(w, {
                                                                __fromCanvasComponent: !0,
                                                                children: c(r, {
                                                                  children: c(`p`, {
                                                                    className: `framer-styles-preset-1j9vszl`,
                                                                    "data-styles-preset": `O5r641A2v`,
                                                                    dir: `auto`,
                                                                    children: `−38%`,
                                                                  }),
                                                                }),
                                                                className: `framer-1uqo45g`,
                                                                "data-framer-name": `FtM3V`,
                                                                fonts: [`Inter`],
                                                                text: v,
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
                                                                    children: `Job restarts`,
                                                                  }),
                                                                }),
                                                                className: `framer-1v1m55a`,
                                                                "data-framer-name": `FtM3L`,
                                                                fonts: [`Inter`],
                                                                text: t,
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
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
                                            d
                                          )
                                        )
                                      ),
                                      o !== !1 &&
                                        c(`div`, {
                                          className: `framer-lakoa2`,
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
                                            className: `framer-ll00nw`,
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
                      className: `framer-gzxdmk`,
                      "data-framer-name": `All`,
                      layout: H,
                      children: [
                        s(`div`, {
                          className: `framer-8cousa`,
                          "data-border": !0,
                          "data-framer-name": `AllHead`,
                          children: [
                            c(M, {
                              children: c(D, {
                                className: `framer-1s9c1t-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `aMMUuNCVU`,
                                scopeId: `f4IvkyEC_`,
                                children: c(W, {
                                  height: `100%`,
                                  id: `aMMUuNCVU`,
                                  kicker: ``,
                                  layoutId: `aMMUuNCVU`,
                                  number: `02⁠`,
                                  reveal: !0,
                                  sub: `Six teams, one hall`,
                                  title: `All case studies`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-sxtvz0`,
                              "data-framer-name": `TabsSlot`,
                              children: c(`div`, {
                                className: `framer-1t42qef`,
                                children: c(F, {
                                  children: c(Z, {
                                    query: sn(),
                                    children: (e, t, n) =>
                                      s(a, {
                                        children: [
                                          c(M, {
                                            height: 32,
                                            children: c(D, {
                                              className: `framer-1uh3etf-container`,
                                              nodeId: `FAbLMqL2p`,
                                              scopeId: `f4IvkyEC_`,
                                              children: c(q, {
                                                eAHGXWjyh: ge,
                                                height: `100%`,
                                                id: `FAbLMqL2p`,
                                                layoutId: `FAbLMqL2p`,
                                                mXpY5N3RA: `All`,
                                                variant: Q(an(rn(x), g)),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          e?.map(
                                            ({ id: e, Kc5EZ43BX: t, v1gtYAz39: n }, r) => (
                                              (t ??= ``),
                                              (n ??= ``),
                                              c(
                                                m,
                                                {
                                                  id: `MFXiV6T8t-${e}`,
                                                  children: c(O.Provider, {
                                                    value: { v1gtYAz39: n },
                                                    children: c(M, {
                                                      height: 32,
                                                      children: c(D, {
                                                        className: `framer-v0iqrq-container`,
                                                        nodeId: `V0H4lntgo`,
                                                        scopeId: `f4IvkyEC_`,
                                                        children: c(q, {
                                                          eAHGXWjyh: _e({ arg1g4fl3m: e }),
                                                          height: `100%`,
                                                          id: `V0H4lntgo`,
                                                          layoutId: `V0H4lntgo`,
                                                          mXpY5N3RA: t,
                                                          variant: Q(on(Y(x, e), g)),
                                                          width: `100%`,
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
                          className: `framer-1xhe3fe`,
                          "data-border": !0,
                          "data-framer-name": `ListSlot`,
                          children: [
                            c(`div`, {
                              className: `framer-14n3end`,
                              "data-framer-name": `Case List`,
                              children: c(F, {
                                children: c(Z, {
                                  query: ln(x),
                                  children: (e, t, n) => {
                                    let i = e?.length ?? 0,
                                      o = Y(i, 0);
                                    return s(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              "VFKnwMJD3.Kc5EZ43BX": e,
                                              BsnzU256L: t,
                                              CKR0ztGiZ: n,
                                              E94Lfv0ue: i,
                                              EuRzmxi4d: a,
                                              id: o,
                                              NxLzBdWey: l,
                                              PQPwyijK9: u,
                                              sIYkJE2fx: d,
                                              UE6Cj2bLV: p,
                                              YFyJuaDIZ: h,
                                            },
                                            g
                                          ) => {
                                            ((l ??= ``),
                                              (h ??= ``),
                                              (t ??= ``),
                                              (e ??= ``),
                                              (a ??= 0),
                                              (p ??= ``),
                                              (i ??= ``),
                                              (u ??= ``));
                                            let _ = cn(
                                              a,
                                              {
                                                locale: `en-US`,
                                                notation: `standard`,
                                                style: `decimal`,
                                              },
                                              ve
                                            );
                                            return c(
                                              m,
                                              {
                                                id: `cdcoVcFFd-${o}`,
                                                children: c(O.Provider, {
                                                  value: { NxLzBdWey: l },
                                                  children: c(j, {
                                                    href: {
                                                      pathVariables: { NxLzBdWey: l },
                                                      webPageId: `PjrO0w6gt`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `DRHyqlALX`,
                                                    scopeId: `f4IvkyEC_`,
                                                    children: s(f.a, {
                                                      className: `framer-9cpu7x framer-1y794py`,
                                                      "data-border": !0,
                                                      "data-framer-name": `Case Row`,
                                                      children: [
                                                        c(V, {
                                                          breakpoint: L,
                                                          overrides: {
                                                            dl9ZKuL6k: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 960,
                                                                pixelWidth: 1200,
                                                                sizes: `calc((${b?.width || `100vw`} - 52px) * 0.4)`,
                                                                ...J(d),
                                                              },
                                                            },
                                                            PVa32zQEu: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                pixelHeight: 960,
                                                                pixelWidth: 1200,
                                                                sizes: `calc(${b?.width || `100vw`} - 48px)`,
                                                                ...J(d),
                                                              },
                                                            },
                                                          },
                                                          children: c(P, {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              pixelHeight: 960,
                                                              pixelWidth: 1200,
                                                              sizes: `calc((${b?.width || `100vw`} - 72px) * 0.4)`,
                                                              ...J(d),
                                                            },
                                                            className: `framer-1swqf45`,
                                                            "data-framer-name": `RowImg`,
                                                            children: c(M, {
                                                              children: c(D, {
                                                                className: `framer-aktej9-container`,
                                                                "data-code-component-plugin-id": `mcp001`,
                                                                isAuthoredByUser: !0,
                                                                nodeId: `DXJZ5Z5PI`,
                                                                scopeId: `f4IvkyEC_`,
                                                                children: c(G, {
                                                                  brightness: 0.82,
                                                                  chip: ``,
                                                                  chipIcon: `chip`,
                                                                  contrast: 1.08,
                                                                  corners: !1,
                                                                  cornerSet: `all`,
                                                                  height: `100%`,
                                                                  id: `DXJZ5Z5PI`,
                                                                  label: ``,
                                                                  layoutId: `DXJZ5Z5PI`,
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
                                                        }),
                                                        s(`div`, {
                                                          className: `framer-1wvoze1`,
                                                          "data-framer-name": `RowMain`,
                                                          children: [
                                                            s(`div`, {
                                                              className: `framer-m5dl4k`,
                                                              "data-framer-name": `RowBrand`,
                                                              children: [
                                                                c(P, {
                                                                  background: {
                                                                    alt: ``,
                                                                    fit: `fill`,
                                                                    pixelHeight: 22,
                                                                    pixelWidth: 22,
                                                                    sizes: `24px`,
                                                                    ...J(n),
                                                                  },
                                                                  className: `framer-334ymr`,
                                                                  "data-framer-name": `RowLogo`,
                                                                }),
                                                                c(w, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`p`, {
                                                                      className: `framer-styles-preset-vb9fj8`,
                                                                      "data-styles-preset": `ojHHcPZoV`,
                                                                      dir: `auto`,
                                                                      children: `Kernel`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-pyethl`,
                                                                  "data-framer-name": `Title`,
                                                                  fonts: [`Inter`],
                                                                  text: h,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              ],
                                                            }),
                                                            c(w, {
                                                              __fromCanvasComponent: !0,
                                                              children: c(r, {
                                                                children: c(`h3`, {
                                                                  className: `framer-styles-preset-9vdglb`,
                                                                  "data-styles-preset": `zjcSQ_DT9`,
                                                                  dir: `auto`,
                                                                  children: `A sovereign language model for Nordic public services.`,
                                                                }),
                                                              }),
                                                              className: `framer-12n743s`,
                                                              "data-framer-name": `RowHeadline`,
                                                              fonts: [`Inter`],
                                                              text: t,
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            s(`div`, {
                                                              className: `framer-1c63es7`,
                                                              "data-framer-name": `RowMeta`,
                                                              children: [
                                                                c(`div`, {
                                                                  className: `framer-1suhsjg`,
                                                                  "data-border": !0,
                                                                  "data-framer-name": `RowTag`,
                                                                  children: c(w, {
                                                                    __fromCanvasComponent: !0,
                                                                    children: c(r, {
                                                                      children: c(`p`, {
                                                                        className: `framer-styles-preset-14yqjsj`,
                                                                        "data-styles-preset": `X0BbqEMSb`,
                                                                        dir: `auto`,
                                                                        children: `Public sector`,
                                                                      }),
                                                                    }),
                                                                    className: `framer-bwzp6c`,
                                                                    "data-framer-name": `RowIndustry`,
                                                                    fonts: [`Inter`],
                                                                    text: e,
                                                                    verticalAlignment: `top`,
                                                                    withExternalLayout: !0,
                                                                  }),
                                                                }),
                                                                s(`div`, {
                                                                  className: `framer-1b8k2na`,
                                                                  "data-framer-name": `RowGpuLine`,
                                                                  children: [
                                                                    c(w, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: c(r, {
                                                                        children: c(`p`, {
                                                                          className: `framer-styles-preset-14yqjsj`,
                                                                          "data-styles-preset": `X0BbqEMSb`,
                                                                          dir: `auto`,
                                                                          children: `4096`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1jd0vin`,
                                                                      "data-framer-name": `RowGpus`,
                                                                      fonts: [`Inter`],
                                                                      text: _,
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    c(w, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: c(r, {
                                                                        children: c(`p`, {
                                                                          className: `framer-styles-preset-vj4i3z`,
                                                                          "data-styles-preset": `nm2zECWKu`,
                                                                          dir: `auto`,
                                                                          children: `GPUs ·`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1f3wl92`,
                                                                      "data-framer-name": `RowGpuUnit`,
                                                                      fonts: [`Inter`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    c(w, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: c(r, {
                                                                        children: c(`p`, {
                                                                          className: `framer-styles-preset-vj4i3z`,
                                                                          "data-styles-preset": `nm2zECWKu`,
                                                                          dir: `auto`,
                                                                          children: `N-01`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-mejq4p`,
                                                                      "data-framer-name": `RowSite`,
                                                                      fonts: [`Inter`],
                                                                      text: p,
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            s(`div`, {
                                                              className: `framer-13ye7o3`,
                                                              "data-framer-name": `RowKpi`,
                                                              children: [
                                                                c(w, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: c(r, {
                                                                    children: c(`p`, {
                                                                      className: `framer-styles-preset-1sccuzx`,
                                                                      "data-styles-preset": `FjqvUVINm`,
                                                                      dir: `auto`,
                                                                      children: `100%`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-1iiit8i`,
                                                                  "data-framer-name": `RowKpiValue`,
                                                                  fonts: [`Inter`],
                                                                  text: i,
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
                                                                      children: `Customer-held keys`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-d7cwzs`,
                                                                  "data-framer-name": `RowKpiLabel`,
                                                                  fonts: [`Inter`],
                                                                  text: u,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        ye() &&
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
                                                            className: `framer-16t9cfw hidden-p33jgn hidden-1kmqm8d`,
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
                                              o
                                            );
                                          }
                                        ),
                                        o !== !1 &&
                                          c(`div`, {
                                            className: `framer-gtgdnz`,
                                            "data-border": !0,
                                            "data-framer-name": `Empty State`,
                                            children: c(w, {
                                              __fromCanvasComponent: !0,
                                              children: c(r, {
                                                children: c(`p`, {
                                                  className: `framer-styles-preset-1sj55z0`,
                                                  "data-styles-preset": `LTmB1RL88`,
                                                  dir: `auto`,
                                                  children: `No case studies in this industry yet.`,
                                                }),
                                              }),
                                              className: `framer-1uzjmjf`,
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
                            s(`div`, {
                              className: `framer-1yk0g8t`,
                              "data-framer-name": `ListFoot`,
                              children: [
                                c(w, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-vj4i3z`,
                                      "data-styles-preset": `nm2zECWKu`,
                                      dir: `auto`,
                                      children: `Customer telemetry, Jan – Sep 2026`,
                                    }),
                                  }),
                                  className: `framer-nexyzu`,
                                  "data-framer-name": `FootL`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(w, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-vj4i3z`,
                                      "data-styles-preset": `nm2zECWKu`,
                                      dir: `auto`,
                                      children: `All sites: N-01 Narvik · N-02 Kiruna from 2027`,
                                    }),
                                  }),
                                  className: `framer-vwmit8`,
                                  "data-framer-name": `FootR`,
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
                    c(f.div, {
                      className: `framer-ml2kra`,
                      "data-framer-name": `Start`,
                      layout: H,
                      children: s(`div`, {
                        className: `framer-1u9irv7`,
                        "data-border": !0,
                        "data-framer-name": `StartIn`,
                        children: [
                          c(M, {
                            children: c(D, {
                              className: `framer-kyt0y4-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `Hz5G2arcl`,
                              scopeId: `f4IvkyEC_`,
                              children: c(W, {
                                height: `100%`,
                                id: `Hz5G2arcl`,
                                kicker: ``,
                                layoutId: `Hz5G2arcl`,
                                number: `03⁠`,
                                reveal: !0,
                                sub: `Q1 2027 allocation is open`,
                                title: `Contact`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          s(`div`, {
                            className: `framer-1x8pk9q`,
                            "data-framer-name": `StartRow`,
                            children: [
                              c(`div`, {
                                className: `framer-emmsh3`,
                                "data-framer-name": `Headline`,
                                children: c(M, {
                                  children: c(D, {
                                    className: `framer-68ani3-container`,
                                    "data-code-component-plugin-id": `mcp001`,
                                    isAuthoredByUser: !0,
                                    nodeId: `bULRpfQvF`,
                                    scopeId: `f4IvkyEC_`,
                                    children: c(ue, {
                                      align: `left`,
                                      balance: !0,
                                      color: `rgb(243, 243, 243)`,
                                      delay: 0,
                                      fluid: 3.7,
                                      height: `100%`,
                                      id: `bULRpfQvF`,
                                      layoutId: `bULRpfQvF`,
                                      lineHeight: 0.98,
                                      max: 66,
                                      min: 32,
                                      reveal: `scroll`,
                                      style: { width: `100%` },
                                      tag: `h2`,
                                      text: `Your team,`,
                                      tone: `next on this page.`,
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
                              s(`div`, {
                                className: `framer-1vc930x`,
                                "data-framer-name": `Side`,
                                children: [
                                  c(V, {
                                    breakpoint: L,
                                    overrides: {
                                      dl9ZKuL6k: {
                                        children: c(r, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-1sj55z0`,
                                            "data-styles-preset": `LTmB1RL88`,
                                            dir: `auto`,
                                            children: `Tell us cluster size and start date. An engineer replies within one working day.`,
                                          }),
                                        }),
                                      },
                                      PVa32zQEu: {
                                        children: c(r, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-1sj55z0`,
                                            "data-styles-preset": `LTmB1RL88`,
                                            dir: `auto`,
                                            children: `Tell us cluster size and start date. An engineer replies within one working day.`,
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
                                          children: `Tell us cluster size and start date. An engineer replies within one working day.`,
                                        }),
                                      }),
                                      className: `framer-jdw9z5`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  c(B, {
                                    links: [
                                      {
                                        href: { webPageId: `leSVJ7Uql` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `leSVJ7Uql` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `leSVJ7Uql` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      c(M, {
                                        children: c(D, {
                                          className: `framer-owraim-container`,
                                          "data-code-component-plugin-id": `mcp001`,
                                          isAuthoredByUser: !0,
                                          nodeId: `mv5ZhwzGY`,
                                          scopeId: `f4IvkyEC_`,
                                          children: c(V, {
                                            breakpoint: L,
                                            overrides: {
                                              dl9ZKuL6k: { link: e[1] },
                                              PVa32zQEu: { link: e[2] },
                                            },
                                            children: c(de, {
                                              full: !1,
                                              ghost: !1,
                                              height: `100%`,
                                              id: `mv5ZhwzGY`,
                                              label: `Plan capacity`,
                                              layoutId: `mv5ZhwzGY`,
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
                    c(f.div, {
                      className: `framer-1fkr9k7`,
                      "data-framer-name": `Footer`,
                      layout: H,
                      children: c(M, {
                        children: c(D, {
                          className: `framer-yw1zkm-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `DFSaVrlmB`,
                          scopeId: `f4IvkyEC_`,
                          children: c(pe, {
                            author: `Flowmance`,
                            authorLink: `https://flowmance.com`,
                            bare: !1,
                            col1: [
                              { id: `kqldkFsGn`, label: `Home` },
                              { id: `Oh9q4EqNu`, label: `Company` },
                              { id: `m1Cxfenb0`, label: `Pricing` },
                              { id: `p2v8ffbmt`, label: `Case studies` },
                              { id: `wiDJ3QIwG`, label: `News` },
                              { id: `VgqESOXz3`, label: `Careers` },
                              { id: `HbYfUTiN5`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `WPeh7ZTjJ`, label: `Design system` },
                              { id: `iTvN6VSOO`, label: `All pages` },
                              { id: `tK9CeIkAP`, label: `404` },
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
                            id: `DFSaVrlmB`,
                            layoutId: `DFSaVrlmB`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `nvBVanScA`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `z26_U4vQo`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `EIp9Jqs3j`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `HoKbAgku1`, label: `NO4 price`, value: `€4.3 / MWh` },
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
                    s(v, {
                      className: `framer-11jvgu`,
                      layout: H,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9" overflow="visible"><path d="M 0 4.5 L 10 4.5 M 5.5 0 L 10 4.5 L 5.5 9" fill="transparent" stroke-width="1.1" stroke="rgb(0,0,0)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                      withExternalLayout: !0,
                      children: [
                        c(v, {
                          className: `framer-4ea656`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 1" overflow="visible"><path d="M 0 0 L 10 0" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        c(v, {
                          className: `framer-13s05t`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.5 9" overflow="visible"><path d="M 0 0 L 4.5 4.5 L 0 9" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    s(v, {
                      className: `framer-dniaeo`,
                      layout: H,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 9" overflow="visible"><path d="M 0 4.5 L 10 4.5 M 5.5 0 L 10 4.5 L 5.5 9" fill="transparent" stroke-width="1.1" stroke="rgb(243,243,243)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                      withExternalLayout: !0,
                      children: [
                        c(v, {
                          className: `framer-o87ldc`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 1" overflow="visible"><path d="M 0 0 L 10 0" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        c(v, {
                          className: `framer-arzbdg`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.5 9" overflow="visible"><path d="M 0 0 L 4.5 4.5 L 0 9" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      ],
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
        `.framer-gFFak.framer-1y794py, .framer-gFFak .framer-1y794py { display: block; }`,
        `.framer-gFFak.framer-1dskxq2 { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-gFFak .framer-1a8k588 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-gFFak .framer-1174btl-container, .framer-gFFak .framer-6f6g5z-container, .framer-gFFak .framer-68ani3-container, .framer-gFFak .framer-yw1zkm-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1x5hpf7, .framer-gFFak .framer-1ebs7wj, .framer-gFFak .framer-1fkr9k7 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1j0y1uy { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-15sj7zt, .framer-gFFak .framer-8cousa { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-qrjarg-container, .framer-gFFak .framer-1u78f4d-container, .framer-gFFak .framer-1s9c1t-container, .framer-gFFak .framer-1uh3etf-container, .framer-gFFak .framer-v0iqrq-container, .framer-gFFak .framer-kyt0y4-container, .framer-gFFak .framer-owraim-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-gFFak .framer-tk2o4r { flex: none; height: auto; max-width: 340px; position: relative; white-space: pre-wrap; width: 32%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-8vvsik, .framer-gFFak .framer-14n3end { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1d1dkdz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-gFFak .framer-45rcgo, .framer-gFFak .framer-1x8pk9q { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-94h58x { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 62%; }`,
        `.framer-gFFak .framer-1baszqg { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-17tvc65 { flex: none; height: 28px; position: relative; width: 28px; }`,
        `.framer-gFFak .framer-1sr8kn6, .framer-gFFak .framer-66l16i, .framer-gFFak .framer-1iyadts, .framer-gFFak .framer-1q3j1nb, .framer-gFFak .framer-gbpsdy, .framer-gFFak .framer-yi2sj8, .framer-gFFak .framer-1nk9hvp, .framer-gFFak .framer-wls8ft, .framer-gFFak .framer-x6zm18, .framer-gFFak .framer-d0fwf8, .framer-gFFak .framer-pudrcg, .framer-gFFak .framer-1ak6dfo, .framer-gFFak .framer-1uqo45g, .framer-gFFak .framer-1v1m55a, .framer-gFFak .framer-ll00nw, .framer-gFFak .framer-pyethl, .framer-gFFak .framer-bwzp6c, .framer-gFFak .framer-1jd0vin, .framer-gFFak .framer-1f3wl92, .framer-gFFak .framer-mejq4p, .framer-gFFak .framer-1iiit8i, .framer-gFFak .framer-d7cwzs, .framer-gFFak .framer-nexyzu, .framer-gFFak .framer-vwmit8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-gFFak .framer-sk97ai, .framer-gFFak .framer-1suhsjg { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; padding: 0px 9px 0px 9px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-1q971n7, .framer-gFFak .framer-1l40i5l, .framer-gFFak .framer-1uzjmjf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-1a4y9n1 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 30%; }`,
        `.framer-gFFak .framer-8jyu1l { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-z3hu5z { align-content: flex-start; align-items: flex-start; display: flex; flex: 7 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 620px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-gFFak .framer-ruonz-container { flex: none; height: 100%; left: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-gFFak .framer-7b6t1y { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: 5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 620px; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gFFak .framer-13bm8lc-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-gFFak .framer-1fmuru5 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px 36px 100px 36px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1ee0jrq { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-end; padding: 40px 36px 40px 36px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-16pztm1 { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-ntmx7n { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 36px 0px 36px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-wf27dh { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-qf2yxg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-gFFak .framer-1aa4nma-container, .framer-gFFak .framer-aktej9-container { flex: none; height: 100%; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-189n007 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-1197c0r { --border-bottom-width: 1px; --border-color: var(--token-49f72bc3-4036-46c0-9fa1-3dcd44ff537e, #5e5e5e); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 6px 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-4ydjul { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-2ew1fc { --border-bottom-width: 0px; --border-color: var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, #6e4bff); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 18px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-gFFak .framer-j1d3hn, .framer-gFFak .framer-s5sale { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 18px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-gFFak .framer-lakoa2 { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-gzxdmk { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-sxtvz0 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-1t42qef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-1xhe3fe { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-9cpu7x { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 28px 0px 28px 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-gFFak .framer-1swqf45 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 240px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 40%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-gFFak .framer-1wvoze1 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gFFak .framer-m5dl4k { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 220px; }`,
        `.framer-gFFak .framer-334ymr { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-gFFak .framer-12n743s { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-1c63es7 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 170px; }`,
        `.framer-gFFak .framer-1b8k2na { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-gFFak .framer-13ye7o3 { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 200px; }`,
        `.framer-gFFak .framer-16t9cfw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 24px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-gtgdnz { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-width: 100%; padding: 28px 0px 28px 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1yk0g8t { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-ml2kra { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 128px 28px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-1u9irv7 { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 102px; height: min-content; justify-content: flex-start; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-gFFak .framer-emmsh3 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 65%; }`,
        `.framer-gFFak .framer-1vc930x { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 32%; }`,
        `.framer-gFFak .framer-jdw9z5 { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gFFak .framer-11jvgu, .framer-gFFak .framer-dniaeo { height: 9px; position: relative; width: 10px; }`,
        `.framer-gFFak .framer-4ea656, .framer-gFFak .framer-o87ldc { height: 1px; left: 0px; position: absolute; top: 5px; width: 10px; }`,
        `.framer-gFFak .framer-13s05t, .framer-gFFak .framer-arzbdg { height: 9px; left: 6px; position: absolute; top: 0px; width: 5px; }`,
        ...Ae,
        ...ve,
        ...ft,
        ...Pe,
        ...St,
        ...Xe,
        ...vt,
        ...Ze,
        ...zt,
        ...pt,
        ...Ee,
        ...Ue,
        ...Se,
        ...ot,
        ...ze,
        `.framer-gFFak[data-border="true"]::after, .framer-gFFak [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-gFFak.framer-1dskxq2 { width: 810px; } .framer-gFFak .framer-1j0y1uy { padding: 120px 18px 120px 18px; } .framer-gFFak .framer-15sj7zt, .framer-gFFak .framer-8jyu1l, .framer-gFFak .framer-8cousa { flex-direction: column; } .framer-gFFak .framer-tk2o4r, .framer-gFFak .framer-94h58x, .framer-gFFak .framer-1a4y9n1, .framer-gFFak .framer-emmsh3 { width: 100%; } .framer-gFFak .framer-45rcgo { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; } .framer-gFFak .framer-z3hu5z { flex: none; height: 580px; width: 100%; } .framer-gFFak .framer-7b6t1y { flex: none; gap: 40px; height: min-content; width: 500%; } .framer-gFFak .framer-gzxdmk { padding: 0px 18px 120px 18px; } .framer-gFFak .framer-sxtvz0 { justify-content: flex-start; width: 100%; } .framer-gFFak .framer-1t42qef { flex-wrap: wrap; justify-content: flex-start; width: 100%; } .framer-gFFak .framer-9cpu7x { align-content: flex-start; align-items: flex-start; padding: 24px 0px 24px 0px; } .framer-gFFak .framer-1swqf45 { height: 220px; } .framer-gFFak .framer-1wvoze1 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 14px; } .framer-gFFak .framer-m5dl4k { width: min-content; } .framer-gFFak .framer-12n743s { flex: none; width: 100%; } .framer-gFFak .framer-1c63es7 { align-content: center; align-items: center; flex-direction: row; flex-wrap: wrap; gap: 10px; width: 100%; } .framer-gFFak .framer-13ye7o3 { align-content: flex-start; align-items: flex-start; width: min-content; } .framer-gFFak .framer-ml2kra { padding: 0px 18px 96px 18px; } .framer-gFFak .framer-1x8pk9q { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-gFFak .framer-1vc930x { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-gFFak.framer-1dskxq2 { width: 390px; } .framer-gFFak .framer-1j0y1uy { padding: 96px 16px 96px 16px; } .framer-gFFak .framer-15sj7zt, .framer-gFFak .framer-8jyu1l, .framer-gFFak .framer-8cousa { flex-direction: column; } .framer-gFFak .framer-tk2o4r, .framer-gFFak .framer-94h58x, .framer-gFFak .framer-1a4y9n1, .framer-gFFak .framer-emmsh3 { width: 100%; } .framer-gFFak .framer-45rcgo { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; justify-content: flex-start; } .framer-gFFak .framer-z3hu5z { flex: none; height: 440px; width: 100%; } .framer-gFFak .framer-7b6t1y { flex: none; gap: 32px; height: min-content; width: 500%; } .framer-gFFak .framer-4ydjul { flex-direction: column; gap: 0px; } .framer-gFFak .framer-2ew1fc, .framer-gFFak .framer-j1d3hn, .framer-gFFak .framer-s5sale { flex: none; padding: 22px 0px 24px 0px; width: 100%; } .framer-gFFak .framer-gzxdmk { padding: 0px 16px 96px 16px; } .framer-gFFak .framer-sxtvz0 { justify-content: flex-start; width: 100%; } .framer-gFFak .framer-1t42qef { flex-wrap: wrap; justify-content: flex-start; width: 100%; } .framer-gFFak .framer-9cpu7x { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 14px; padding: 20px 0px 26px 0px; } .framer-gFFak .framer-1swqf45 { height: 220px; width: 100%; } .framer-gFFak .framer-1wvoze1 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 14px; width: 100%; } .framer-gFFak .framer-m5dl4k { width: min-content; } .framer-gFFak .framer-12n743s { flex: none; width: 100%; } .framer-gFFak .framer-1c63es7 { align-content: center; align-items: center; flex-direction: row; flex-wrap: wrap; gap: 10px; width: 100%; } .framer-gFFak .framer-13ye7o3 { align-content: flex-start; align-items: flex-start; width: min-content; } .framer-gFFak .framer-ml2kra { padding: 0px 16px 72px 16px; } .framer-gFFak .framer-1x8pk9q { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-gFFak .framer-1vc930x { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
      ],
      `framer-gFFak`
    )),
    ($.displayName = `Case Studies`),
    ($.defaultProps = { height: 12443.5, width: 1280 }),
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
        ...Ht,
        ...Ut,
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...Jt,
        ...Yt,
        ...Xt,
        ...T(je),
        ...T(ye),
        ...T(mt),
        ...T(Fe),
        ...T(Ct),
        ...T(Qe),
        ...T(yt),
        ...T($e),
        ...T(Rt),
        ...T(ht),
        ...T(De),
        ...T(We),
        ...T(Ce),
        ...T(st),
        ...T(Be),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = (async () => ({
            BKchJ0Cf11: await (async () => {
              let e = t.pathVariables?.industry ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`lgQWesQ9p`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))();
        i.catch(() => {});
        let a = g.get(X(), n, r),
          o = g.get(sn(), n, r);
        return z(
          [
            () => a.preload(),
            () => o.preload(),
            () => i.then(({ BKchJ0Cf11: e }) => I(() => g.get(ln(e), n, r).preload(), t)),
            async () =>
              z(
                ((await I(() => o.readMaybeAsync(), t)) ?? []).flatMap((e) => [
                  () => S(q, {}, t),
                  () => S(q, {}, t),
                ]),
                t
              ),
          ],
          t
        );
      },
    }),
    (pn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerf4IvkyEC_`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1280`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `12443.5`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"dl9ZKuL6k":{"layout":["fixed","auto"]},"PVa32zQEu":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { pn as __FramerMetadata__, $ as default, $t as queryParamNames };
//# sourceMappingURL=_aFeCCItFDtSNctmFCFOCqFMuiAuXPonceW9emqV6-A.CEyWFXS7.mjs.map
