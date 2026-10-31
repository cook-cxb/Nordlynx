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
  M as _,
  O as v,
  St as y,
  bt as b,
  gt as x,
  i as S,
  k as C,
  lt as w,
  o as T,
  q as E,
  w as D,
  wt as O,
  xt as k,
} from "./framer.CKDq5C8y.mjs";
import { d as A, f as j } from "./shared-lib.W6te6cXm.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y = e(() => {
    (l(),
      E(),
      m(),
      u(),
      j(),
      (N = O(d.div)),
      (P = h(A)),
      (F = { xaRnQgVZZ: { hover: !0, pressed: !0 } }),
      (I = [`xaRnQgVZZ`, `Rharknfuf`, `GFpZL6d_4`, `FSqFq6Rpr`, `cbmSGJRX6`]),
      (L = `framer-eBVTa`),
      (R = {
        cbmSGJRX6: `framer-v-zv39fg`,
        FSqFq6Rpr: `framer-v-14n30j6`,
        GFpZL6d_4: `framer-v-1sffjva`,
        Rharknfuf: `framer-v-1dodqky`,
        xaRnQgVZZ: `framer-v-1x0cx7z`,
      }),
      (z = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (B = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (V = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (H = (e, t) => `translateX(-50%) ${t}`),
      (U = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: o, children: n });
      }),
      (W = {
        Default: `xaRnQgVZZ`,
        Disabled: `GFpZL6d_4`,
        Error: `cbmSGJRX6`,
        Loading: `Rharknfuf`,
        Success: `FSqFq6Rpr`,
      }),
      (G = d.create(r)),
      (K = ({ height: e, id: t, label: n, width: r, ...i }) => ({
        ...i,
        ayADjZZmZ: n ?? i.ayADjZZmZ ?? `Send request`,
        variant: W[i.variant] ?? i.variant ?? `xaRnQgVZZ`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = y(
        c(function (e, t) {
          let r = i(null),
            a = t ?? r,
            c = n(),
            { activeLocale: l, setLocale: u } = x();
          w();
          let { style: f, className: m, layoutId: h, variant: v, ayADjZZmZ: y, ...C } = K(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: j,
              gestureVariant: P,
              isLoading: W,
              setGestureState: J,
              setVariant: Y,
              variants: X,
            } = k({
              cycleOrder: I,
              defaultVariant: `xaRnQgVZZ`,
              enabledGestures: F,
              ref: a,
              variant: v,
              variantClassNames: R,
            }),
            Z = q(e, X),
            Q = _(L),
            $ = () => T === `Rharknfuf`;
          return (
            b(),
            s(p, {
              id: h ?? c,
              children: s(G, {
                animate: X,
                initial: !1,
                children: s(U, {
                  value: z,
                  children: o(d.button, {
                    ...C,
                    ...j,
                    className: _(Q, `framer-1x0cx7z`, m, E),
                    "data-framer-name": `Default`,
                    "data-reset": `button`,
                    layoutDependency: Z,
                    layoutId: `xaRnQgVZZ`,
                    ref: a,
                    style: { backgroundColor: `rgba(0, 0, 0, 0)`, opacity: 1, ...f },
                    variants: {
                      "xaRnQgVZZ-hover": { opacity: 1 },
                      "xaRnQgVZZ-pressed": { opacity: 1 },
                      cbmSGJRX6: { opacity: 1 },
                      FSqFq6Rpr: { opacity: 1 },
                      GFpZL6d_4: { opacity: 0.5 },
                    },
                    ...M(
                      {
                        "xaRnQgVZZ-hover": { "data-framer-name": void 0 },
                        "xaRnQgVZZ-pressed": { "data-framer-name": void 0 },
                        cbmSGJRX6: { "data-framer-name": `Error` },
                        FSqFq6Rpr: { "data-framer-name": `Success` },
                        GFpZL6d_4: { "data-framer-name": `Disabled` },
                        Rharknfuf: { "data-framer-name": `Loading` },
                      },
                      T,
                      P
                    ),
                    children: [
                      $() &&
                        s(d.div, {
                          className: `framer-186k595`,
                          "data-framer-name": `Spinner`,
                          layoutDependency: Z,
                          layoutId: `dLISayQvT`,
                          style: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          },
                          children: s(N, {
                            __framer__loop: V,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: B,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-13yiha9`,
                            "data-framer-name": `Conic`,
                            layoutDependency: Z,
                            layoutId: `c3od6YQoA`,
                            style: {
                              background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                              backgroundColor: `rgb(68, 204, 255)`,
                              mask: `none`,
                              WebkitMask: `none`,
                            },
                            variants: {
                              Rharknfuf: {
                                background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                                WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              },
                            },
                            children: s(d.div, {
                              className: `framer-1ifuixh`,
                              "data-framer-name": `Rounding`,
                              layoutDependency: Z,
                              layoutId: `DgyRtl6HV`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                              transformTemplate: H,
                            }),
                          }),
                        }),
                      s(D, {
                        links: [
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          s(S, {
                            children: s(g, {
                              className: `framer-l3f8ko-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              layoutDependency: Z,
                              layoutId: `RxdgeAPT8-container`,
                              nodeId: `RxdgeAPT8`,
                              rendersWithMotion: !0,
                              scopeId: `qJzt46ANV`,
                              children: s(A, {
                                full: !1,
                                ghost: !1,
                                height: `100%`,
                                id: `RxdgeAPT8`,
                                label: y,
                                layoutId: `RxdgeAPT8`,
                                link: `/contact-01`,
                                newTab: !1,
                                submit: !1,
                                visual: !0,
                                width: `100%`,
                                ...M(
                                  {
                                    cbmSGJRX6: { label: `Try again`, link: e[2] },
                                    FSqFq6Rpr: { label: `Request received`, link: e[1] },
                                    Rharknfuf: { label: `Sending…`, link: e[0] },
                                  },
                                  T,
                                  P
                                ),
                              }),
                            }),
                          }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-eBVTa.framer-1k4vixe, .framer-eBVTa .framer-1k4vixe { display: block; }`,
          `.framer-eBVTa.framer-1x0cx7z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-eBVTa .framer-186k595 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: auto; overflow: hidden; position: relative; width: 20px; }`,
          `.framer-eBVTa .framer-13yiha9 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-eBVTa .framer-1ifuixh { aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-eBVTa .framer-l3f8ko-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-eBVTa.framer-v-1dodqky.framer-1x0cx7z, .framer-eBVTa.framer-v-1sffjva.framer-1x0cx7z, .framer-eBVTa.framer-v-14n30j6.framer-1x0cx7z, .framer-eBVTa.framer-v-zv39fg.framer-1x0cx7z { cursor: unset; }`,
          `.framer-eBVTa.framer-v-1dodqky .framer-13yiha9 { overflow: hidden; }`,
        ],
        `framer-eBVTa`
      )),
      (J.displayName = `Form Submit`),
      (J.defaultProps = { height: 38, width: 173 }),
      C(J, {
        variant: {
          options: [`xaRnQgVZZ`, `Rharknfuf`, `GFpZL6d_4`, `FSqFq6Rpr`, `cbmSGJRX6`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: T.Enum,
        },
        ayADjZZmZ: { defaultValue: `Send request`, title: `Label`, type: T.String },
        onayADjZZmZChange: { changes: `ayADjZZmZ`, type: T.ChangeHandler },
      }),
      v(J, [{ explicitInter: !0, fonts: [] }, ...P], { supportsExplicitInterCodegen: !0 }));
  });
export { Y as n, J as t };
//# sourceMappingURL=qJzt46ANV.iC7o-JA7.mjs.map
