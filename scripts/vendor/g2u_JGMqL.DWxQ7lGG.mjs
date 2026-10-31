import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
} from "./react.Dlpel5Rf.mjs";
import { T as d, a as f, r as p, t as m } from "./motion.C738HobR.mjs";
import {
  B as h,
  D as g,
  H as _,
  M as v,
  O as y,
  P as b,
  St as x,
  T as S,
  g as C,
  gt as w,
  i as T,
  k as E,
  lt as D,
  m as O,
  o as k,
  q as A,
  tt as ee,
  xt as j,
} from "./framer.CKDq5C8y.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
  P,
  te,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  ne = e(() => {
    (l(),
      A(),
      m(),
      u(),
      (N = { BmWXjolcV: { hover: !0 } }),
      (P = `framer-L8SBI`),
      (te = { BmWXjolcV: `framer-v-1d4wb5c` }),
      (F = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (I = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (L = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: n });
      }),
      (R = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = d.create(r)),
      (B = ({ height: e, id: t, link: n, primaryText: r, width: i, ...a }) => ({
        ...a,
        NBFndEgQg: r ?? a.NBFndEgQg ?? `Buy Template — $59`,
        oNEtXPX1m: n ?? a.oNEtXPX1m,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = x(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: f } = w(),
            m = D(),
            {
              style: h,
              className: g,
              layoutId: y,
              variant: b,
              NBFndEgQg: x,
              oNEtXPX1m: T,
              ...E
            } = B(e),
            {
              baseVariant: k,
              classNames: A,
              clearLoadingGesture: ee,
              gestureHandlers: H,
              gestureVariant: ne,
              isLoading: U,
              setGestureState: re,
              setVariant: W,
              variants: G,
            } = j({
              defaultVariant: `BmWXjolcV`,
              enabledGestures: N,
              ref: c,
              variant: b,
              variantClassNames: te,
            }),
            K = V(e, G),
            q = v(P);
          return s(p, {
            id: y ?? l,
            children: s(z, {
              animate: G,
              initial: !1,
              children: s(L, {
                value: F,
                children: s(C, {
                  href: T,
                  motionChild: !0,
                  nodeId: `BmWXjolcV`,
                  openInNewTab: !0,
                  scopeId: `M7jO3SyA6`,
                  children: o(d.a, {
                    ...E,
                    ...H,
                    className: `${v(q, `framer-1d4wb5c`, g, A)} framer-15giuzj`,
                    "data-border": !0,
                    "data-framer-name": `Button`,
                    layoutDependency: K,
                    layoutId: `BmWXjolcV`,
                    ref: c,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgb(225, 225, 225)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(4px)`,
                      backgroundColor: `rgba(255, 255, 255, 0.97)`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      opacity: 1,
                      WebkitBackdropFilter: `blur(4px)`,
                      ...h,
                    },
                    variants: { "BmWXjolcV-hover": { opacity: 0.8 } },
                    ...M({ "BmWXjolcV-hover": { "data-framer-name": void 0 } }, k, ne),
                    children: [
                      s(L, {
                        value: I,
                        children: o(d.div, {
                          className: `framer-1ufo5p9`,
                          "data-framer-name": `Content`,
                          layoutDependency: K,
                          layoutId: `fNWktHqwE`,
                          children: [
                            s(d.div, {
                              className: `framer-1cy7qx6`,
                              "data-framer-name": `Icon Wrapper`,
                              layoutDependency: K,
                              layoutId: `IEBuSdIjh`,
                              children: s(O, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: _(
                                    (m?.y || 0) + (11 + ((m?.height || 200) - 22 - 20) / 2) + 0 + 0
                                  ),
                                  pixelHeight: 512,
                                  pixelWidth: 512,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `20px`,
                                  src: `../../assets/images/yMZ8jr4st1RWx9NL1B37eZvMRfM.png`,
                                },
                                className: `framer-pcxzo`,
                                layoutDependency: K,
                                layoutId: `FHTWi_Xth`,
                                style: { filter: `invert(0)`, WebkitFilter: `invert(0)` },
                              }),
                            }),
                            o(d.div, {
                              className: `framer-s75d4n`,
                              layoutDependency: K,
                              layoutId: `sX7zo6xkp`,
                              children: [
                                s(d.div, {
                                  className: `framer-s4f3t`,
                                  layoutDependency: K,
                                  layoutId: `pcUvFofxR`,
                                  children: s(S, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(d.div, {
                                        style: {
                                          "--font-selector": `SW50ZXItQm9sZA==`,
                                          "--framer-font-size": `13px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.5em`,
                                          "--framer-text-color": `var(--extracted-tcooor, var(--token-a592bfa6-cdc4-448c-bee2-c12ecc07ba0c, rgb(0, 0, 0)))`,
                                        },
                                        children: `Unlock 420+ Templates`,
                                      }),
                                    }),
                                    className: `framer-g0qze2`,
                                    fonts: [`Inter-Bold`],
                                    layoutDependency: K,
                                    layoutId: `fxrO51U9i`,
                                    style: {
                                      "--extracted-tcooor": `var(--token-a592bfa6-cdc4-448c-bee2-c12ecc07ba0c, rgb(0, 0, 0))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    text: x,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                s(d.div, {
                                  className: `framer-uq8cd3`,
                                  layoutDependency: K,
                                  layoutId: `mRPnKGHlv`,
                                  children: s(S, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(d.div, {
                                        style: {
                                          "--font-selector": `SW50ZXItQm9sZA==`,
                                          "--framer-font-size": `13px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-letter-spacing": `-0.02em`,
                                          "--framer-line-height": `1.5em`,
                                          "--framer-text-color": `var(--extracted-tcooor, var(--token-293afb7b-0f96-4e9f-9b5f-1cf846f94cdb, rgb(255, 255, 255)))`,
                                        },
                                        children: `Unlock for $199`,
                                      }),
                                    }),
                                    className: `framer-o04nt9`,
                                    fonts: [`Inter-Bold`],
                                    layoutDependency: K,
                                    layoutId: `o9azyEKIP`,
                                    style: {
                                      "--extracted-tcooor": `var(--token-293afb7b-0f96-4e9f-9b5f-1cf846f94cdb, rgb(255, 255, 255))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      s(L, {
                        value: R,
                        children: s(d.div, {
                          className: `framer-1ndbtfw`,
                          layoutDependency: K,
                          layoutId: `k29RtZ7Yn`,
                          style: {
                            backgroundColor: `rgb(67, 83, 255)`,
                            borderBottomLeftRadius: 100,
                            borderBottomRightRadius: 100,
                            borderTopLeftRadius: 100,
                            borderTopRightRadius: 100,
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-L8SBI.framer-15giuzj, .framer-L8SBI .framer-15giuzj { display: block; }`,
          `.framer-L8SBI.framer-1d4wb5c { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 11px 16px 11px 11px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-L8SBI .framer-1ufo5p9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-L8SBI .framer-1cy7qx6 { flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }`,
          `.framer-L8SBI .framer-pcxzo { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-L8SBI .framer-s75d4n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-L8SBI .framer-s4f3t, .framer-L8SBI .framer-uq8cd3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-L8SBI .framer-g0qze2, .framer-L8SBI .framer-o04nt9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-L8SBI .framer-1ndbtfw { flex: none; height: 1px; left: 20px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 20px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-L8SBI[data-border="true"]::after, .framer-L8SBI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-L8SBI`
      )),
      (H.displayName = `Get Template Button`),
      (H.defaultProps = { height: 42, width: 177 }),
      E(H, {
        NBFndEgQg: {
          defaultValue: `Buy Template — $59`,
          displayTextArea: !1,
          title: `Primary Text`,
          type: k.String,
        },
        onNBFndEgQgChange: { changes: `NBFndEgQg`, type: k.ChangeHandler },
        oNEtXPX1m: { title: `Link`, type: k.Link },
      }),
      y(
        H,
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
                url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var re,
  W,
  G,
  K,
  q,
  J,
  Y,
  ie,
  ae,
  oe,
  se,
  ce,
  X,
  le = e(() => {
    (l(),
      A(),
      m(),
      u(),
      (re = [`qeNVUdyFI`, `WpI2Hw85v`]),
      (W = `framer-MA2ZH`),
      (G = { qeNVUdyFI: `framer-v-ga5g4n`, WpI2Hw85v: `framer-v-18zisui` }),
      (K = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (q = { duration: 0, type: `tween` }),
      (J = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Y = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: n });
      }),
      (ie = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ae = d.create(r)),
      (oe = { "Button - Hover": `WpI2Hw85v`, Button: `qeNVUdyFI` }),
      (se = ({ height: e, hoverText: t, id: n, primaryText: r, width: i, ...a }) => ({
        ...a,
        NBFndEgQg: r ?? a.NBFndEgQg ?? `Unlock 420+ Templates`,
        RV9WJx5vN: t ?? a.RV9WJx5vN ?? `Unlock for $199`,
        variant: oe[a.variant] ?? a.variant ?? `qeNVUdyFI`,
      })),
      (ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = x(
        c(function (e, t) {
          let a = i(null),
            c = t ?? a,
            l = n(),
            { activeLocale: u, setLocale: f } = w(),
            m = D(),
            {
              style: h,
              className: g,
              layoutId: y,
              variant: b,
              NBFndEgQg: x,
              RV9WJx5vN: C,
              ...T
            } = se(e),
            {
              baseVariant: E,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: ee,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: te,
              variants: F,
            } = j({
              cycleOrder: re,
              defaultVariant: `qeNVUdyFI`,
              ref: c,
              variant: b,
              variantClassNames: G,
            }),
            I = ce(e, F),
            L = v(W);
          return s(p, {
            id: y ?? l,
            children: s(ae, {
              animate: F,
              initial: !1,
              children: s(Y, {
                value: K,
                ...U({ WpI2Hw85v: { value: q } }, E, M),
                children: o(d.div, {
                  ...T,
                  ...ee,
                  className: v(L, `framer-ga5g4n`, g, k),
                  "data-border": !0,
                  "data-framer-name": `Button`,
                  layoutDependency: I,
                  layoutId: `qeNVUdyFI`,
                  ref: c,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(225, 225, 225)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backdropFilter: `blur(4px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.97)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    WebkitBackdropFilter: `blur(4px)`,
                    ...h,
                  },
                  ...U({ WpI2Hw85v: { "data-framer-name": `Button - Hover` } }, E, M),
                  children: [
                    s(Y, {
                      value: J,
                      children: o(d.div, {
                        className: `framer-deljjp`,
                        "data-framer-name": `Content`,
                        layoutDependency: I,
                        layoutId: `pA7xADFqv`,
                        children: [
                          s(d.div, {
                            className: `framer-1mmeyfb`,
                            "data-framer-name": `Icon Wrapper`,
                            layoutDependency: I,
                            layoutId: `gloHdWjOn`,
                            children: s(O, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                loading: _(
                                  (m?.y || 0) + (11 + ((m?.height || 42) - 22 - 20) / 2) + 0 + 0
                                ),
                                pixelHeight: 512,
                                pixelWidth: 512,
                                positionX: `center`,
                                positionY: `center`,
                                src: `../../assets/images/0Nqap2Dy8FZD0jJJYLvc1deKscY.png`,
                              },
                              className: `framer-1t0gtjv`,
                              layoutDependency: I,
                              layoutId: `HAPaxurYp`,
                              style: { filter: `invert(0)`, WebkitFilter: `invert(0)` },
                              variants: {
                                WpI2Hw85v: { filter: `invert(1)`, WebkitFilter: `invert(1)` },
                              },
                            }),
                          }),
                          o(d.div, {
                            className: `framer-1mj00lo`,
                            layoutDependency: I,
                            layoutId: `ILnV1vcvC`,
                            children: [
                              s(d.div, {
                                className: `framer-t8jucc`,
                                layoutDependency: I,
                                layoutId: `KfryCMS4W`,
                                children: s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(d.div, {
                                      style: {
                                        "--font-selector": `SW50ZXItQm9sZA==`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.5em`,
                                        "--framer-text-color": `var(--extracted-tcooor, var(--token-a592bfa6-cdc4-448c-bee2-c12ecc07ba0c, rgb(0, 0, 0)))`,
                                      },
                                      children: `Unlock 420+ Templates`,
                                    }),
                                  }),
                                  className: `framer-2q1my2`,
                                  fonts: [`Inter-Bold`],
                                  layoutDependency: I,
                                  layoutId: `rNiHMNTxt`,
                                  style: {
                                    "--extracted-tcooor": `var(--token-a592bfa6-cdc4-448c-bee2-c12ecc07ba0c, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: x,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              s(d.div, {
                                className: `framer-7a6l5v`,
                                layoutDependency: I,
                                layoutId: `y6AUJHxue`,
                                children: s(S, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(d.div, {
                                      style: {
                                        "--font-selector": `SW50ZXItQm9sZA==`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `1.5em`,
                                        "--framer-text-color": `var(--extracted-tcooor, var(--token-293afb7b-0f96-4e9f-9b5f-1cf846f94cdb, rgb(255, 255, 255)))`,
                                      },
                                      children: `Unlock for $199`,
                                    }),
                                  }),
                                  className: `framer-zqzegc`,
                                  fonts: [`Inter-Bold`],
                                  layoutDependency: I,
                                  layoutId: `uc8mfc50x`,
                                  style: {
                                    "--extracted-tcooor": `var(--token-293afb7b-0f96-4e9f-9b5f-1cf846f94cdb, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...U(
                                    {
                                      WpI2Hw85v: {
                                        children: s(r, {
                                          children: s(d.div, {
                                            style: {
                                              "--font-selector": `SW50ZXItQm9sZA==`,
                                              "--framer-font-size": `15px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1.3em`,
                                              "--framer-text-color": `var(--extracted-tcooor, var(--token-293afb7b-0f96-4e9f-9b5f-1cf846f94cdb, rgb(255, 255, 255)))`,
                                            },
                                            children: `Unlock for $199`,
                                          }),
                                        }),
                                        text: C,
                                      },
                                    },
                                    E,
                                    M
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    s(Y, {
                      value: ie,
                      children: s(d.div, {
                        className: `framer-1g8spb7`,
                        layoutDependency: I,
                        layoutId: `Dr2BQREsb`,
                        style: {
                          backgroundColor: `rgb(67, 83, 255)`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                        },
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-MA2ZH.framer-x519c5, .framer-MA2ZH .framer-x519c5 { display: block; }`,
          `.framer-MA2ZH.framer-ga5g4n { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 11px 16px 11px 9px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MA2ZH .framer-deljjp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-MA2ZH .framer-1mmeyfb { flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }`,
          `.framer-MA2ZH .framer-1t0gtjv { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-MA2ZH .framer-1mj00lo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 20px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-MA2ZH .framer-t8jucc, .framer-MA2ZH .framer-7a6l5v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-MA2ZH .framer-2q1my2, .framer-MA2ZH .framer-zqzegc { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-MA2ZH .framer-1g8spb7 { flex: none; height: 1px; left: 20px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 20px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-MA2ZH.framer-v-18zisui .framer-deljjp { justify-content: flex-start; }`,
          `.framer-MA2ZH.framer-v-18zisui .framer-1mj00lo { justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); }`,
          `.framer-MA2ZH.framer-v-18zisui .framer-1g8spb7 { height: 500px; left: -200px; top: -200px; width: 500px; }`,
          `.framer-MA2ZH[data-border="true"]::after, .framer-MA2ZH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-MA2ZH`
      )),
      (X.displayName = `Unlock Access Button`),
      (X.defaultProps = { height: 42, width: 195 }),
      E(X, {
        variant: {
          options: [`qeNVUdyFI`, `WpI2Hw85v`],
          optionTitles: [`Button`, `Button - Hover`],
          title: `Variant`,
          type: k.Enum,
        },
        NBFndEgQg: {
          defaultValue: `Unlock 420+ Templates`,
          displayTextArea: !1,
          title: `Primary Text`,
          type: k.String,
        },
        RV9WJx5vN: {
          defaultValue: `Unlock for $199`,
          displayTextArea: !1,
          title: `Hover Text`,
          type: k.String,
        },
      }),
      y(
        X,
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
                url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ue(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var de,
  fe,
  pe,
  me,
  he,
  Z,
  ge,
  _e,
  Q,
  ve,
  $,
  ye = e(() => {
    (l(),
      A(),
      m(),
      u(),
      le(),
      (de = h(X)),
      (fe = { yBdkI9Pfu: { hover: !0 } }),
      (pe = `framer-sGDE5`),
      (me = { yBdkI9Pfu: `framer-v-8a5p65` }),
      (he = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ge = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: n });
      }),
      (_e = d.create(r)),
      (Q = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = x(
        c(function (e, t) {
          let r = i(null),
            a = t ?? r,
            o = n(),
            { activeLocale: c, setLocale: l } = w(),
            u = D(),
            { style: f, className: m, layoutId: h, variant: _, ...y } = Q(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: ee,
              variants: M,
            } = j({
              defaultVariant: `yBdkI9Pfu`,
              enabledGestures: fe,
              ref: a,
              variant: _,
              variantClassNames: me,
            }),
            N = ve(e, M),
            P = v(pe);
          return s(p, {
            id: h ?? o,
            children: s(_e, {
              animate: M,
              initial: !1,
              children: s(ge, {
                value: he,
                children: s(C, {
                  href: `https://flowmance.lemonsqueezy.com/checkout/buy/65781208-9fe3-4149-a904-9a5a4b707c86`,
                  motionChild: !0,
                  nodeId: `yBdkI9Pfu`,
                  openInNewTab: !0,
                  scopeId: `g2u_JGMqL`,
                  children: s(d.a, {
                    ...y,
                    ...E,
                    className: `${v(P, `framer-8a5p65`, m, x)} framer-1rbp1wn`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: N,
                    layoutId: `yBdkI9Pfu`,
                    ref: a,
                    style: { ...f },
                    children: s(T, {
                      height: 42,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + ((u?.height || 200) - 42) / 2,
                      children: s(g, {
                        className: `framer-twcics-container`,
                        isModuleExternal: !0,
                        layoutDependency: N,
                        layoutId: `hDD8oXqRY-container`,
                        nodeId: `hDD8oXqRY`,
                        rendersWithMotion: !0,
                        scopeId: `g2u_JGMqL`,
                        children: s(X, {
                          height: `100%`,
                          id: `hDD8oXqRY`,
                          layoutId: `hDD8oXqRY`,
                          NBFndEgQg: `Unlock 54+ Templates`,
                          RV9WJx5vN: `Unlock for $149`,
                          style: { width: `100%` },
                          variant: Z(`qeNVUdyFI`),
                          width: `100%`,
                          ...ue({ "yBdkI9Pfu-hover": { variant: Z(`WpI2Hw85v`) } }, b, O),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-sGDE5.framer-1rbp1wn, .framer-sGDE5 .framer-1rbp1wn { display: block; }`,
          `.framer-sGDE5.framer-8a5p65 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; max-width: 190px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 190px; }`,
          `.framer-sGDE5 .framer-twcics-container { flex: none; height: auto; position: relative; width: 100%; z-index: 10; }`,
        ],
        `framer-sGDE5`
      )),
      ($.displayName = `Unlock Access`),
      ($.defaultProps = { height: 42, width: 190 }),
      y($, [{ explicitInter: !0, fonts: [] }, ...de], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => ee([() => b(X, {}, t)], t) }));
  });
export { ne as i, ye as n, H as r, $ as t };
//# sourceMappingURL=g2u_JGMqL.DWxQ7lGG.mjs.map
