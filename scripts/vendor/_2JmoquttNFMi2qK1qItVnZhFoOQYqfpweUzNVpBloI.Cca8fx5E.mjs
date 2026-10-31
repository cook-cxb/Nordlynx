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
  s as ee,
  w as u,
} from "./react.Dlpel5Rf.mjs";
import { T as d, a as te, r as f, t as p } from "./motion.C738HobR.mjs";
import {
  $ as m,
  B as h,
  H as g,
  M as _,
  O as v,
  P as y,
  St as b,
  T as x,
  Tt as S,
  V as C,
  _t as ne,
  a as w,
  b as re,
  bt as ie,
  f as ae,
  ft as oe,
  g as se,
  gt as ce,
  ht as le,
  i as T,
  lt as ue,
  m as de,
  mt as E,
  n as fe,
  pt as pe,
  q as D,
  tt as me,
  vt as O,
  w as k,
  x as A,
  yt as he,
} from "./framer.CKDq5C8y.mjs";
import { i as j, n as M, r as N, t as P } from "./g2u_JGMqL.DWxQ7lGG.mjs";
import {
  c as F,
  d as I,
  f as L,
  i as R,
  l as z,
  n as B,
  r as V,
  t as H,
} from "./shared-lib.W6te6cXm.mjs";
import { i as U, n as W, r as G, t as ge } from "./LTmB1RL88.B0kvNFDC.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./OL1kwShSL.xLn8V2pO.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./tZkUHAzDW.DwKm5oDC.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { i as K, n as ke, o as Ae, r as je, s as Me, t as Ne } from "./Home03.C5ffTP_1.mjs";
import { n as Pe, r as Fe } from "./b5kUAs37G.CoAfs8yH.mjs";
import { a as Ie, r as Le } from "./k3QcAAKya.NShUb68E.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./zjcSQ_DT9.DF5tjdSt.mjs";
import He, { t as Ue } from "./pvvzgiM2q0ElsXXCAPbtZecQ8iBYgNhEQ4tN8YJP_8A.Bduqeja4.mjs";
var We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  q,
  tt,
  nt,
  J,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  Y,
  lt,
  ut,
  X,
  dt,
  ft,
  Z,
  pt,
  Q,
  mt,
  ht,
  $,
  gt;
e(() => {
  (ee(),
    D(),
    p(),
    u(),
    j(),
    M(),
    R(),
    Me(),
    B(),
    L(),
    Fe(),
    Le(),
    U(),
    _e(),
    xe(),
    Te(),
    Re(),
    Ue(),
    (We = h(H)),
    (Ge = h(Ae)),
    (Ke = h(je)),
    (qe = h(ke)),
    (Je = h(Ne)),
    (Ye = h(K)),
    (Xe = h(z)),
    (Ze = h(I)),
    (Qe = h(F)),
    ($e = h(V)),
    (et = h(N)),
    (q = S(w)),
    (tt = h(P)),
    (nt = {
      pHiuKeuhm: `(min-width: 810px) and (max-width: 1279.98px)`,
      TMVSdKNK0: `(max-width: 809.98px)`,
      yuCGgkgBc: `(min-width: 1280px)`,
    }),
    (J = () => typeof document < `u`),
    (rt = []),
    (it = `framer-nfcrA`),
    (at = {
      pHiuKeuhm: `framer-v-16ybaoi`,
      TMVSdKNK0: `framer-v-kr1hgf`,
      yuCGgkgBc: `framer-v-mh0zm8`,
    }),
    (ot = (e, t, n) => (e && t ? `position` : n)),
    (st = {
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
    (ct = (e, t, n) => {
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
    (Y = { dateStyle: `medium`, timeZone: `UTC` }),
    (lt = (e, t) => ct(e, Y, t)),
    (ut = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (X = () => ({
      from: {
        constraint: {
          left: { collection: `FE_a7abfU`, name: `njS8qg7Pi`, type: `Identifier` },
          operator: `==`,
          right: { collection: `njS8qg7Pi`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `FE_a7abfU`, data: Ie, type: `Collection` },
        right: { alias: `njS8qg7Pi`, data: Pe, type: `Collection` },
        type: `LeftJoin`,
      },
      limit: { type: `LiteralValue`, value: 4 },
      orderBy: [
        { collection: `FE_a7abfU`, direction: `desc`, name: `AMMsWkljI`, type: `Identifier` },
      ],
      select: [
        { collection: `FE_a7abfU`, name: `PDM6PbwuL`, type: `Identifier` },
        { collection: `FE_a7abfU`, name: `AMMsWkljI`, type: `Identifier` },
        {
          alias: `njS8qg7Pi.TvqMcJFM_`,
          collection: `njS8qg7Pi`,
          name: `TvqMcJFM_`,
          type: `Identifier`,
        },
        { collection: `FE_a7abfU`, name: `K2EK0JLRZ`, type: `Identifier` },
        { collection: `FE_a7abfU`, name: `id`, type: `Identifier` },
      ],
    })),
    (dt = ({ query: e, pageSize: t, children: n }) => n(O(e))),
    (ft = {
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
    (pt = {
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
    (Q = { Desktop: `yuCGgkgBc`, Phone: `TMVSdKNK0`, Tablet: `pHiuKeuhm` }),
    (mt = ({ value: e }) =>
      E()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ht = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `yuCGgkgBc`,
    })),
    ($ = b(
      l(function (e, l) {
        let ee = i(null),
          u = l ?? ee,
          p = n(),
          { activeLocale: m, setLocale: h } = ce(),
          v = ue(),
          { style: y, className: b, layoutId: S, variant: C, ...E } = ht(e);
        ne(o(() => He({}, m), [m]));
        let [D, me] = pe(C, nt, !1),
          O = _(it, Oe, we, Ve, be, ge),
          j = t(ae)?.isLayoutTemplate,
          M = !!t(te)?.transition?.layout,
          L = ot(j, M);
        ie();
        let R = le(),
          B = () => !J() || ![`pHiuKeuhm`, `TMVSdKNK0`].includes(D),
          U = () => !J() || D !== `TMVSdKNK0`,
          W = he(`dJRnVIjzN`),
          G = i(null);
        return (
          oe({}),
          c(ae.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Q,
              primaryVariantId: `yuCGgkgBc`,
              variantClassNames: at,
            },
            children: s(f, {
              id: S ?? p,
              children: [
                c(mt, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                s(d.div, {
                  ...E,
                  className: _(O, `framer-mh0zm8`, b),
                  ref: u,
                  style: { ...y },
                  children: [
                    c(d.div, {
                      className: `framer-srzlth`,
                      "data-framer-name": `Navigation`,
                      layout: L,
                      children: c(k, {
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
                          c(T, {
                            children: c(w, {
                              className: `framer-8k2cnb-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `PEvOX78_p`,
                              scopeId: `G7lw_m7n0`,
                              children: c(A, {
                                breakpoint: D,
                                overrides: {
                                  pHiuKeuhm: {
                                    allPagesLink: e[11],
                                    ctaLink: e[10],
                                    links: [
                                      { id: `sDqLPIt06`, label: `Company`, link: e[6] },
                                      { id: `rTqCFMIOX`, label: `Pricing`, link: e[7] },
                                      { id: `Gnkv8ALfK`, label: `Customers`, link: e[8] },
                                      { id: `iZOeOUIg0`, label: `News`, link: e[9] },
                                    ],
                                  },
                                  TMVSdKNK0: {
                                    allPagesLink: e[17],
                                    ctaLink: e[16],
                                    links: [
                                      { id: `sDqLPIt06`, label: `Company`, link: e[12] },
                                      { id: `rTqCFMIOX`, label: `Pricing`, link: e[13] },
                                      { id: `Gnkv8ALfK`, label: `Customers`, link: e[14] },
                                      { id: `iZOeOUIg0`, label: `News`, link: e[15] },
                                    ],
                                  },
                                },
                                children: c(H, {
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
                                  id: `PEvOX78_p`,
                                  items: [
                                    { id: `Y4dEEhqkU`, label: `Home`, note: `4 layouts` },
                                    { id: `dxQCI5yIj`, label: `Company`, note: `Since 2024` },
                                    { id: `FcN1Xzd92`, label: `Pricing`, note: `From $1.62` },
                                    { id: `ibc5TjjHw`, label: `Case studies`, note: `6 teams` },
                                    { id: `nsD4VqUQJ`, label: `News`, note: `Field notes` },
                                    { id: `eHjJ4yaqq`, label: `Careers`, note: `7 open roles` },
                                    { id: `Qz66nnaMo`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `PEvOX78_p`,
                                  links: [
                                    { id: `sDqLPIt06`, label: `Company`, link: e[0] },
                                    { id: `rTqCFMIOX`, label: `Pricing`, link: e[1] },
                                    { id: `Gnkv8ALfK`, label: `Customers`, link: e[2] },
                                    { id: `iZOeOUIg0`, label: `News`, link: e[3] },
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
                    c(d.div, {
                      className: `framer-2gna0r`,
                      "data-framer-name": `Hero`,
                      layout: L,
                      children: c(T, {
                        children: c(w, {
                          className: `framer-vvn2dd-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `nMg91Qw_2`,
                          scopeId: `G7lw_m7n0`,
                          children: c(Ae, {
                            button: `Plan capacity`,
                            gain: 4,
                            height: `100%`,
                            id: `nMg91Qw_2`,
                            layoutId: `nMg91Qw_2`,
                            lightX: 0.5,
                            lightY: 0.46,
                            link: `#talk`,
                            revLabel: `Below 10 °C · 300 days a year`,
                            revText: `The cold is the infrastructure.`,
                            seed: 19,
                            style: { width: `100%` },
                            text: `GPU halls above the Arctic Circle. Cooled by outside air, powered by rivers, metered to the watt.`,
                            title: `Compute, measured`,
                            tone: `in degrees.`,
                            topLeft: `Signal · N-01 · Narvik`,
                            topRight: `Hall A · 72% load`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-apbqrn`,
                      "data-framer-name": `Data`,
                      layout: L,
                      children: c(T, {
                        children: c(w, {
                          className: `framer-k638y4-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `U2UKaYn7I`,
                          scopeId: `G7lw_m7n0`,
                          children: c(je, {
                            figures: [
                              {
                                id: `JC0nVJJii`,
                                key: `PUE · 2025`,
                                text: `Power usage effectiveness, metered every hour across Hall A.`,
                                unit: ``,
                                value: `1.09`,
                              },
                              {
                                id: `bvZVhuwIV`,
                                key: `Renewable share`,
                                text: `Hydro and wind from the NO4 grid, matched by the hour.`,
                                unit: `%`,
                                value: `98.7`,
                              },
                              {
                                id: `DYWwONVL2`,
                                key: `Water used`,
                                text: `Free-air cooling. No evaporative towers, no chilled water.`,
                                unit: `L`,
                                value: `0`,
                              },
                              {
                                id: `fCC5F0nAo`,
                                key: `Heat reused`,
                                text: `Delivered to Narvik’s district heating network last winter.`,
                                unit: `GWh`,
                                value: `41`,
                              },
                              {
                                id: `bfEabqt3K`,
                                key: `Latency to Oslo`,
                                text: `Two dark-fibre routes south, diverse paths.`,
                                unit: `ms`,
                                value: `9.4`,
                              },
                            ],
                            height: `100%`,
                            id: `U2UKaYn7I`,
                            layoutId: `U2UKaYn7I`,
                            number: `01⁠`,
                            style: { width: `100%` },
                            sub: `Measured at the meter`,
                            title: `Data`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-ymh1ym`,
                      "data-framer-name": `Compute`,
                      layout: L,
                      children: c(T, {
                        children: c(w, {
                          className: `framer-ygsl5k-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `gFQ6N3yuL`,
                          scopeId: `G7lw_m7n0`,
                          children: c(ke, {
                            columns: [
                              {
                                button: `Reserve a pod`,
                                feats: `3.2 Tb/s fabric, Deadline credits, Named engineer`,
                                ghost: !1,
                                id: `yBbX1Qnn7`,
                                name: `Reserved`,
                                price: `$1.62`,
                                priceLabel: `From`,
                                text: `Dedicated H200 and B300 pods from 256 GPUs, on one to three-year terms.`,
                                unit: `/ GPU-hr`,
                              },
                              {
                                button: `Start now`,
                                feats: `Per-second billing, 400 Gb/s fabric, Instant start`,
                                ghost: !0,
                                id: `uYsRmxXYP`,
                                name: `On-demand`,
                                price: `$2.24`,
                                priceLabel: `From`,
                                text: `Spin up 8 to 512 GPUs in minutes. Billed per second, no commitment.`,
                                unit: `/ GPU-hr`,
                              },
                              {
                                button: `Talk to sales`,
                                feats: `Own hall, Customer-held keys, ISO 27001`,
                                ghost: !0,
                                id: `f6nVIRFYk`,
                                name: `Sovereign`,
                                price: `Custom`,
                                priceLabel: `Price`,
                                text: `Private halls under EEA jurisdiction for governments and research labs.`,
                                unit: ``,
                              },
                            ],
                            height: `100%`,
                            id: `gFQ6N3yuL`,
                            layoutId: `gFQ6N3yuL`,
                            number: `02⁠`,
                            style: { width: `100%` },
                            sub: `Three ways to run`,
                            title: `Compute`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-8th5jy`,
                      "data-framer-name": `Cases`,
                      layout: L,
                      children: c(k, {
                        links: [
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          c(T, {
                            children: c(w, {
                              className: `framer-w02msx-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `Jlt4T6wk2`,
                              scopeId: `G7lw_m7n0`,
                              children: c(A, {
                                breakpoint: D,
                                overrides: { pHiuKeuhm: { link: e[1] }, TMVSdKNK0: { link: e[2] } },
                                children: c(Ne, {
                                  button: `All case studies`,
                                  height: `100%`,
                                  id: `Jlt4T6wk2`,
                                  layoutId: `Jlt4T6wk2`,
                                  link: e[0],
                                  mesh: !0,
                                  number: `03⁠`,
                                  rows: [
                                    {
                                      alt: `Portrait of Amara Okafor`,
                                      big: `−34%`,
                                      bigLabel: `Energy cost`,
                                      brand: `Tensorfield`,
                                      icon: `squares`,
                                      id: `GSs7tsCFx`,
                                      industry: `Foundation models`,
                                      linkLabel: `Read case study`,
                                      name: `Amara Okafor`,
                                      quote: `We trained a 70B model in 19 days and spent a third less on energy. The cold is not a gimmick, it is a cost line.`,
                                      role: `Head of Infrastructure, Tensorfield`,
                                    },
                                    {
                                      alt: `Portrait of Jonas Weber`,
                                      big: `−61%`,
                                      bigLabel: `CO₂ per query`,
                                      brand: `Helix AI`,
                                      icon: `helix`,
                                      id: `DXHcQVnV2`,
                                      industry: `Biotech inference`,
                                      linkLabel: `Read case study`,
                                      name: `Jonas Weber`,
                                      quote: `We moved our protein-folding fleet north without changing a line of code. Latency went up two milliseconds. Nobody noticed.`,
                                      role: `CTO, Helix AI`,
                                    },
                                    {
                                      alt: `Portrait of Erik Halvorsen`,
                                      big: `0 L`,
                                      bigLabel: `Water used`,
                                      brand: `Orbit Labs`,
                                      icon: `orbit`,
                                      id: `ezsKJP7aO`,
                                      industry: `Earth observation`,
                                      linkLabel: `Read case study`,
                                      name: `Erik Halvorsen`,
                                      quote: `A petabyte of satellite imagery a month, and zero litres of water. That number changed how our board talks about compute.`,
                                      role: `CFO, Orbit Labs`,
                                    },
                                  ],
                                  style: { width: `100%` },
                                  sub: `The people who moved north`,
                                  title: `Case studies`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-14xzv9j`,
                      "data-framer-name": `Manifesto`,
                      layout: L,
                      children: c(T, {
                        children: c(w, {
                          className: `framer-184xvhc-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `xydZPZ4uZ`,
                          scopeId: `G7lw_m7n0`,
                          children: c(K, {
                            height: `100%`,
                            id: `xydZPZ4uZ`,
                            layoutId: `xydZPZ4uZ`,
                            number: `04⁠`,
                            sign: `Signed by 34 engineers in Tromsø`,
                            style: { width: `100%` },
                            sub: `Why the North`,
                            text: `Every watt a data hall spends on cooling is a watt it does not spend on compute. Most of the world builds where it is warm and then fights the heat.`,
                            title: `About`,
                            tone: `We went north and let the air do the work.`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    c(d.div, {
                      className: `framer-1ox9sgk`,
                      "data-framer-name": `News`,
                      layout: L,
                      children: s(`div`, {
                        className: `framer-5kfvze`,
                        "data-border": !0,
                        "data-framer-name": `NewsIn`,
                        children: [
                          s(`div`, {
                            className: `framer-yflf3v`,
                            "data-framer-name": `NewsHead`,
                            children: [
                              c(T, {
                                children: c(w, {
                                  className: `framer-r9p1on-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `Hk0CLszoO`,
                                  scopeId: `G7lw_m7n0`,
                                  children: c(z, {
                                    height: `100%`,
                                    id: `Hk0CLszoO`,
                                    kicker: ``,
                                    layoutId: `Hk0CLszoO`,
                                    number: `05⁠`,
                                    reveal: !0,
                                    sub: `From the North`,
                                    title: `News`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(k, {
                                links: [
                                  {
                                    href: { webPageId: `JXDOUrKk6` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `JXDOUrKk6` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `JXDOUrKk6` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  c(T, {
                                    children: c(w, {
                                      className: `framer-1d7q3k3-container`,
                                      "data-code-component-plugin-id": `mcp001`,
                                      isAuthoredByUser: !0,
                                      nodeId: `yXAXy1Q3J`,
                                      scopeId: `G7lw_m7n0`,
                                      children: c(A, {
                                        breakpoint: D,
                                        overrides: {
                                          pHiuKeuhm: { link: e[1] },
                                          TMVSdKNK0: { link: e[2] },
                                        },
                                        children: c(I, {
                                          full: !1,
                                          ghost: !0,
                                          height: `100%`,
                                          id: `yXAXy1Q3J`,
                                          label: `All news`,
                                          layoutId: `yXAXy1Q3J`,
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
                          c(`div`, {
                            className: `framer-1ui2uai`,
                            "data-border": !0,
                            "data-framer-name": `ListSlot`,
                            children: c(`div`, {
                              className: `framer-9ik7pq`,
                              "data-framer-name": `News [list]`,
                              children: c(fe, {
                                children: c(dt, {
                                  query: X(),
                                  children: (e, t, n) => {
                                    let i = e?.length ?? 0,
                                      o = ut(i, 0);
                                    return s(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              "njS8qg7Pi.TvqMcJFM_": e,
                                              AMMsWkljI: t,
                                              id: n,
                                              K2EK0JLRZ: i,
                                              PDM6PbwuL: a,
                                            },
                                            o
                                          ) => {
                                            ((a ??= ``), (e ??= ``), (i ??= ``));
                                            let l = lt(t, R);
                                            return c(
                                              f,
                                              {
                                                id: `FE_a7abfU-${n}`,
                                                children: c(re.Provider, {
                                                  value: { PDM6PbwuL: a },
                                                  children: c(se, {
                                                    href: {
                                                      pathVariables: { PDM6PbwuL: a },
                                                      webPageId: `zX8G5Rmeb`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `b2MkoXZuK`,
                                                    scopeId: `G7lw_m7n0`,
                                                    children: s(d.a, {
                                                      className: `framer-505bcy framer-kcn7uz`,
                                                      "data-border": !0,
                                                      "data-framer-name": `News Row`,
                                                      whileHover: st,
                                                      children: [
                                                        c(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(r, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-14yqjsj`,
                                                              "data-styles-preset": `X0BbqEMSb`,
                                                              dir: `auto`,
                                                              children: `Oct 1, 2026`,
                                                            }),
                                                          }),
                                                          className: `framer-1n5cjxb`,
                                                          fonts: [`Inter`],
                                                          text: c(`time`, {
                                                            dateTime: t,
                                                            children: l,
                                                          }),
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        B() &&
                                                          c(x, {
                                                            __fromCanvasComponent: !0,
                                                            children: c(r, {
                                                              children: c(`p`, {
                                                                className: `framer-styles-preset-8xfnpq`,
                                                                "data-styles-preset": `tZkUHAzDW`,
                                                                dir: `auto`,
                                                                children: `Category`,
                                                              }),
                                                            }),
                                                            className: `framer-1eti0z3 hidden-16ybaoi hidden-kr1hgf`,
                                                            fonts: [`Inter`],
                                                            text: e,
                                                            verticalAlignment: `top`,
                                                            withExternalLayout: !0,
                                                          }),
                                                        c(x, {
                                                          __fromCanvasComponent: !0,
                                                          children: c(r, {
                                                            children: c(`h3`, {
                                                              className: `framer-styles-preset-9vdglb`,
                                                              "data-styles-preset": `zjcSQ_DT9`,
                                                              dir: `auto`,
                                                              children: `Why we cool with air, not water`,
                                                            }),
                                                          }),
                                                          className: `framer-17r4q4o`,
                                                          "data-framer-name": `Title`,
                                                          fonts: [`Inter`],
                                                          text: i,
                                                          verticalAlignment: `top`,
                                                          withExternalLayout: !0,
                                                        }),
                                                        U() &&
                                                          c(A, {
                                                            breakpoint: D,
                                                            overrides: {
                                                              pHiuKeuhm: {
                                                                background: {
                                                                  alt: ``,
                                                                  fit: `fill`,
                                                                  loading: g(
                                                                    (v?.y || 0) +
                                                                      8 +
                                                                      2880 +
                                                                      0 +
                                                                      0 +
                                                                      22 +
                                                                      232 +
                                                                      0 +
                                                                      0 +
                                                                      0 +
                                                                      361.5 +
                                                                      53.25
                                                                  ),
                                                                  pixelHeight: 12,
                                                                  pixelWidth: 12,
                                                                  sizes: `14px`,
                                                                  src: `https://framerusercontent.com/images/3k8BNjfLK1OGqciNdIC3yC4jM6M.svg?width=12&height=12`,
                                                                },
                                                              },
                                                            },
                                                            children: c(de, {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                loading: g(
                                                                  (v?.y || 0) +
                                                                    8 +
                                                                    3116 +
                                                                    0 +
                                                                    0 +
                                                                    22 +
                                                                    232 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    361.5 +
                                                                    53.25
                                                                ),
                                                                pixelHeight: 12,
                                                                pixelWidth: 12,
                                                                sizes: `14px`,
                                                                src: `https://framerusercontent.com/images/3k8BNjfLK1OGqciNdIC3yC4jM6M.svg?width=12&height=12`,
                                                              },
                                                              className: `framer-nwoyiw hidden-kr1hgf`,
                                                              "data-framer-name": `Arrow`,
                                                            }),
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
                                            className: `framer-25iw4m`,
                                            "data-border": !0,
                                            "data-framer-name": `Empty State`,
                                            children: c(x, {
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
                                              className: `framer-k26nem`,
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
                    }),
                    c(d.div, {
                      className: `framer-q9gkfr`,
                      "data-framer-name": `Talk`,
                      id: W,
                      layout: L,
                      ref: G,
                      children: s(`div`, {
                        className: `framer-n4pae1`,
                        "data-border": !0,
                        "data-framer-name": `TalkIn`,
                        children: [
                          c(T, {
                            children: c(w, {
                              className: `framer-1g7l3ed-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `jv1x7bAHs`,
                              scopeId: `G7lw_m7n0`,
                              children: c(z, {
                                height: `100%`,
                                id: `jv1x7bAHs`,
                                kicker: ``,
                                layoutId: `jv1x7bAHs`,
                                number: `06⁠`,
                                reveal: !0,
                                sub: `Q1 2027 allocation is open`,
                                title: `Contact`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          s(`div`, {
                            className: `framer-1gfauty`,
                            "data-framer-name": `TalkRow`,
                            children: [
                              c(`div`, {
                                className: `framer-138ybo4`,
                                "data-framer-name": `Headline`,
                                children: c(T, {
                                  children: c(w, {
                                    className: `framer-1ufl3h6-container`,
                                    "data-code-component-plugin-id": `mcp001`,
                                    isAuthoredByUser: !0,
                                    nodeId: `ZoLEeS4dJ`,
                                    scopeId: `G7lw_m7n0`,
                                    children: c(F, {
                                      align: `left`,
                                      balance: !0,
                                      color: `rgb(243, 243, 243)`,
                                      delay: 0,
                                      fluid: 3.7,
                                      height: `100%`,
                                      id: `ZoLEeS4dJ`,
                                      layoutId: `ZoLEeS4dJ`,
                                      lineHeight: 0.98,
                                      max: 66,
                                      min: 32,
                                      reveal: `scroll`,
                                      style: { width: `100%` },
                                      tag: `h2`,
                                      text: `Let’s talk`,
                                      tone: `capacity.`,
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
                                className: `framer-1qqqmo6`,
                                "data-framer-name": `Side`,
                                children: [
                                  c(A, {
                                    breakpoint: D,
                                    overrides: {
                                      pHiuKeuhm: {
                                        children: c(r, {
                                          children: c(`p`, {
                                            className: `framer-styles-preset-1sj55z0`,
                                            "data-styles-preset": `LTmB1RL88`,
                                            dir: `auto`,
                                            children: `Tell us cluster size and start date. An engineer replies within one working day.`,
                                          }),
                                        }),
                                      },
                                      TMVSdKNK0: {
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
                                    children: c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-wsxg2z`,
                                          "data-styles-preset": `OL1kwShSL`,
                                          dir: `auto`,
                                          children: `Tell us cluster size and start date. An engineer replies within one working day.`,
                                        }),
                                      }),
                                      className: `framer-10gn74k`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  c(k, {
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
                                      c(T, {
                                        children: c(w, {
                                          className: `framer-rvlb9n-container`,
                                          "data-code-component-plugin-id": `mcp001`,
                                          isAuthoredByUser: !0,
                                          nodeId: `fxmxCeOEB`,
                                          scopeId: `G7lw_m7n0`,
                                          children: c(A, {
                                            breakpoint: D,
                                            overrides: {
                                              pHiuKeuhm: { link: e[1] },
                                              TMVSdKNK0: { link: e[2] },
                                            },
                                            children: c(I, {
                                              full: !1,
                                              ghost: !1,
                                              height: `100%`,
                                              id: `fxmxCeOEB`,
                                              label: `Plan capacity`,
                                              layoutId: `fxmxCeOEB`,
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
                    c(d.div, {
                      className: `framer-rvwt9x`,
                      "data-framer-name": `Footer`,
                      layout: L,
                      children: c(T, {
                        children: c(w, {
                          className: `framer-1mj7u64-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `r0nwZBNke`,
                          scopeId: `G7lw_m7n0`,
                          children: c(V, {
                            author: `Flowmance`,
                            authorLink: `https://flowmance.com`,
                            bare: !1,
                            col1: [
                              { id: `PkPAsLbfM`, label: `Home` },
                              { id: `v48rCQw1c`, label: `Company` },
                              { id: `BbBoJNqJd`, label: `Pricing` },
                              { id: `SKft9G0ds`, label: `Case studies` },
                              { id: `yqViHUK6e`, label: `News` },
                              { id: `ZEvxwqxLg`, label: `Careers` },
                              { id: `HUPBkyODn`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `AWG776s4a`, label: `Design system` },
                              { id: `ARjaFWjuT`, label: `All pages` },
                              { id: `LMNoKibj8`, label: `404` },
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
                            id: `r0nwZBNke`,
                            layoutId: `r0nwZBNke`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `XEdbE9lIR`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `vWanjofro`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `t5BUJ90Mz`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `ymwfMb_XB`, label: `NO4 price`, value: `€4.3 / MWh` },
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
                    c(T, {
                      height: 42,
                      y: 894,
                      children: c(q, {
                        animate: ft,
                        className: `framer-1bvl0t9-container`,
                        "data-framer-appear-id": `1bvl0t9`,
                        initial: Z,
                        isModuleExternal: !0,
                        layout: L,
                        layoutScroll: !0,
                        nodeId: `jawPdpyfN`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `G7lw_m7n0`,
                        children: c(N, {
                          height: `100%`,
                          id: `jawPdpyfN`,
                          layoutId: `jawPdpyfN`,
                          NBFndEgQg: `Get Free Template`,
                          oNEtXPX1m: `https://flowmance.lemonsqueezy.com/checkout/buy/65781208-9fe3-4149-a904-9a5a4b707c86`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    c(T, {
                      height: 42,
                      width: `190px`,
                      y: 845,
                      children: c(q, {
                        animate: pt,
                        className: `framer-1ynt9lg-container`,
                        "data-framer-appear-id": `1ynt9lg`,
                        initial: Z,
                        layout: L,
                        layoutScroll: !0,
                        nodeId: `MhdMhNYZf`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `G7lw_m7n0`,
                        children: c(P, {
                          height: `100%`,
                          id: `MhdMhNYZf`,
                          layoutId: `MhdMhNYZf`,
                          style: { width: `100%` },
                          width: `100%`,
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
        `.framer-nfcrA.framer-kcn7uz, .framer-nfcrA .framer-kcn7uz { display: block; }`,
        `.framer-nfcrA.framer-mh0zm8 { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-nfcrA .framer-srzlth { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-nfcrA .framer-8k2cnb-container, .framer-nfcrA .framer-vvn2dd-container, .framer-nfcrA .framer-k638y4-container, .framer-nfcrA .framer-ygsl5k-container, .framer-nfcrA .framer-w02msx-container, .framer-nfcrA .framer-184xvhc-container, .framer-nfcrA .framer-1ufl3h6-container, .framer-nfcrA .framer-1mj7u64-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-2gna0r, .framer-nfcrA .framer-apbqrn, .framer-nfcrA .framer-rvwt9x { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-ymh1ym { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-8th5jy, .framer-nfcrA .framer-14xzv9j, .framer-nfcrA .framer-1ox9sgk { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-5kfvze { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-yflf3v, .framer-nfcrA .framer-1gfauty { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-r9p1on-container, .framer-nfcrA .framer-1d7q3k3-container, .framer-nfcrA .framer-1g7l3ed-container, .framer-nfcrA .framer-rvlb9n-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-nfcrA .framer-1ui2uai { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-9ik7pq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-505bcy { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 24px 0px 24px 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-nfcrA .framer-1n5cjxb, .framer-nfcrA .framer-1eti0z3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 140px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-nfcrA .framer-17r4q4o { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-nfcrA .framer-nwoyiw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 14px; justify-content: center; padding: 0px; position: relative; width: 14px; }`,
        `.framer-nfcrA .framer-25iw4m { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-nfcrA .framer-k26nem { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-nfcrA .framer-q9gkfr { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 128px 28px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-n4pae1 { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 115px; height: min-content; justify-content: flex-start; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-nfcrA .framer-138ybo4 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 65%; }`,
        `.framer-nfcrA .framer-1qqqmo6 { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 32%; }`,
        `.framer-nfcrA .framer-10gn74k { flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-nfcrA .framer-1bvl0t9-container { bottom: 64px; flex: none; height: auto; position: fixed; right: 20px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        `.framer-nfcrA .framer-1ynt9lg-container { bottom: 113px; flex: none; height: auto; position: fixed; right: 20px; width: 190px; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        ...Ee,
        ...Se,
        ...ze,
        ...ve,
        ...W,
        `.framer-nfcrA[data-border="true"]::after, .framer-nfcrA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-nfcrA.framer-mh0zm8 { width: 810px; } .framer-nfcrA .framer-ymh1ym { padding: 120px 18px 120px 18px; } .framer-nfcrA .framer-8th5jy, .framer-nfcrA .framer-14xzv9j, .framer-nfcrA .framer-1ox9sgk { padding: 0px 18px 120px 18px; } .framer-nfcrA .framer-1n5cjxb { width: 110px; } .framer-nfcrA .framer-q9gkfr { padding: 0px 18px 96px 18px; } .framer-nfcrA .framer-1gfauty { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-nfcrA .framer-138ybo4 { width: 100%; } .framer-nfcrA .framer-1qqqmo6 { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-nfcrA.framer-mh0zm8 { width: 390px; } .framer-nfcrA .framer-ymh1ym { padding: 120px 16px 120px 16px; } .framer-nfcrA .framer-8th5jy, .framer-nfcrA .framer-14xzv9j, .framer-nfcrA .framer-1ox9sgk { padding: 0px 16px 120px 16px; } .framer-nfcrA .framer-yflf3v, .framer-nfcrA .framer-1gfauty { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-nfcrA .framer-505bcy { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 8px; } .framer-nfcrA .framer-1n5cjxb, .framer-nfcrA .framer-138ybo4 { width: 100%; } .framer-nfcrA .framer-17r4q4o { flex: none; width: 100%; } .framer-nfcrA .framer-q9gkfr { padding: 0px 16px 96px 16px; } .framer-nfcrA .framer-1qqqmo6 { align-content: flex-start; align-items: flex-start; width: 100%; }}`,
      ],
      `framer-nfcrA`
    )),
    ($.displayName = `Home 03`),
    ($.defaultProps = { height: 6807, width: 1280 }),
    v(
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
        ...We,
        ...Ge,
        ...Ke,
        ...qe,
        ...Je,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...$e,
        ...et,
        ...tt,
        ...C(De),
        ...C(Ce),
        ...C(Be),
        ...C(ye),
        ...C(G),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = m.get(X(), n, r);
        return me([() => i.preload(), () => y(N, {}, t), () => y(P, {}, t)], t);
      },
    }),
    (gt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerG7lw_m7n0`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `6807`,
            framerContractVersion: `1`,
            framerScrollSections: `{"dJRnVIjzN":{"pattern":":dJRnVIjzN","name":"talk"}}`,
            framerIntrinsicWidth: `1280`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pHiuKeuhm":{"layout":["fixed","auto"]},"TMVSdKNK0":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { gt as __FramerMetadata__, $ as default, rt as queryParamNames };
//# sourceMappingURL=_2JmoquttNFMi2qK1qItVnZhFoOQYqfpweUzNVpBloI.Cca8fx5E.mjs.map
