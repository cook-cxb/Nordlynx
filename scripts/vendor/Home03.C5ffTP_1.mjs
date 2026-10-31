import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  P as r,
  R as i,
  _ as a,
  b as o,
  j as s,
  l as c,
  o as l,
  s as u,
  w as d,
  y as f,
} from "./react.Dlpel5Rf.mjs";
import { k as p, o as m, q as h } from "./framer.CKDq5C8y.mjs";
import {
  C as g,
  S as _,
  a as v,
  d as y,
  g as b,
  h as x,
  m as S,
  o as C,
  p as w,
  v as T,
  w as E,
  x as D,
  y as O,
} from "./shared-lib.W6te6cXm.mjs";
import { t as k } from "./Parts-ISc5PT.Do1ptRxj.mjs";
function A(e, t, n) {
  let [r, o] = a(0);
  return (
    f(() => {
      if (!n) {
        o(0);
        return;
      }
      let r = 0,
        a = () => {
          r = 0;
          let n = e.current;
          n && o(G(-n.getBoundingClientRect().top / Math.max(1, t)));
        },
        s = () => {
          r ||= requestAnimationFrame(a);
        };
      return (
        a(),
        i.addEventListener(`scroll`, s, { passive: !0 }),
        i.addEventListener(`resize`, s),
        () => {
          (i.removeEventListener(`scroll`, s),
            i.removeEventListener(`resize`, s),
            cancelAnimationFrame(r));
        }
      );
    }, [n, t]),
    r
  );
}
function j(e, t, n, r) {
  return e
    .split(/(\s+)/)
    .map((e, i) =>
      /^\s+$/.test(e) || !e
        ? e
        : l(
            `span`,
            {
              className: `wd`,
              children: Array.from(e).map((e, i) =>
                l(
                  `span`,
                  {
                    className: `ch`,
                    style: { animationDelay: (t + r.n++ * n).toFixed(3) + `s` },
                    children: e,
                  },
                  i
                )
              ),
            },
            i
          )
    );
}
function M(e) {
  let t = o(null),
    n = g(t),
    r = E(),
    a = D(),
    s = !a && !r,
    u = i !== void 0 && !a ? i.innerHeight : 900,
    d = u * 1.4,
    f = A(t, d, s),
    p = W(16, 2.2, 32, n),
    m = Math.min(Math.max(640, u) * 0.62, n * 0.7),
    h = (e) => e * e,
    _ = (e) => e * e * e,
    v = K(f, 0, 1),
    x = K(f, 0, 0.35),
    S = h(K(f, 0.62, 0.92)),
    w = K(f, 0.72, 1),
    T = { n: 0 },
    k = W(32, 3.7, 66, n);
  return c(`section`, {
    ref: t,
    className: `nl-sg` + (s ? ` anim` : ``) + b(n),
    style: { ...e.style, height: s ? `calc(100vh + ${d}px)` : void 0 },
    children: [
      O(),
      l(`style`, { dangerouslySetInnerHTML: { __html: X } }),
      c(`div`, {
        className: `pin`,
        children: [
          c(`div`, {
            className: `stage`,
            "aria-hidden": `true`,
            children: [
              l(C, {
                lightX: e.lightX,
                lightY: e.lightY,
                gain: e.gain,
                rib: 9,
                spread: 1.8,
                seed: e.seed,
                vignette: 0,
                floor: 0.85,
                sweep: 0,
                cursor: !0,
                mode: `fill`,
                word: ``,
                overlay: `none`,
              }),
              l(`div`, {
                className: `knock`,
                style: { opacity: 1 - S },
                children: c(`svg`, {
                  viewBox: `0 0 20 20`,
                  style: { width: m, height: m },
                  children: [
                    l(`g`, {
                      style: { transform: `translateX(${-16 * h(v)}px)` },
                      children: l(`rect`, {
                        id: `nl-p1`,
                        x: `2`,
                        y: `2`,
                        width: `3.6`,
                        height: `16`,
                      }),
                    }),
                    l(`g`, {
                      style: { transform: `scale(${1 + 17 * _(v)}) rotate(${-8 * _(v)}deg)` },
                      children: l(`polygon`, { id: `nl-p2`, points: `6.7,2 10,2 13.3,18 10,18` }),
                    }),
                    l(`g`, {
                      style: { transform: `translateX(${16 * h(v)}px)` },
                      children: l(`rect`, {
                        id: `nl-p3`,
                        x: `14.4`,
                        y: `2`,
                        width: `3.6`,
                        height: `16`,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          c(`div`, {
            className: `top mono`,
            style: { left: p, right: p, opacity: 1 - x, transform: `translateY(${-30 * x}px)` },
            children: [
              l(`span`, { className: `up`, style: { animationDelay: `.9s` }, children: e.topLeft }),
              l(`span`, {
                className: `up`,
                style: { animationDelay: `.98s` },
                children: e.topRight,
              }),
            ],
          }),
          c(`div`, {
            className: `copy`,
            style: { left: p, right: p, opacity: 1 - x, transform: `translateY(${-30 * x}px)` },
            children: [
              c(`h1`, {
                style: { fontSize: k },
                children: [
                  s ? j(e.title, 0.6, 0.022, T) : e.title,
                  ` `,
                  l(`span`, { className: `tone`, children: s ? j(e.tone, 0.6, 0.022, T) : e.tone }),
                ],
              }),
              c(`div`, {
                className: `r`,
                children: [
                  l(`p`, { className: `up`, style: { animationDelay: `1.06s` }, children: e.text }),
                  l(`div`, {
                    className: `up`,
                    style: { animationDelay: `1.14s` },
                    children: l(y, {
                      label: e.button,
                      link: e.link,
                      ghost: !1,
                      newTab: !1,
                      submit: !1,
                      visual: !1,
                      full: !1,
                    }),
                  }),
                ],
              }),
            ],
          }),
          s &&
            c(`div`, {
              className: `rev`,
              "aria-hidden": `true`,
              style: { paddingInline: p, opacity: w, filter: `blur(${(1 - w) * 14}px)` },
              children: [
                l(`span`, { className: `mono`, children: e.revLabel }),
                l(`p`, { style: { fontSize: W(28, 3.6, 62, n) }, children: e.revText }),
              ],
            }),
        ],
      }),
    ],
  });
}
function N(e) {
  let { number: n, title: r, sub: i, figures: s } = e,
    u = o(null),
    d = o(null),
    p = g(u),
    m = E(),
    h = !D() && !m,
    [_, v] = a(1600);
  t(() => {
    let e = d.current;
    if (!e) return;
    let t = () => v(Math.max(0, e.scrollWidth - e.clientWidth));
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, [s]);
  let y = A(u, _, h),
    x = s || [],
    S = h ? Math.min(x.length - 1, Math.round(y * (x.length - 1))) : 0,
    [C, w] = a({}),
    T = o(new Set());
  f(() => {
    if (!h || T.current.has(S)) return;
    T.current.add(S);
    let e = parseFloat(x[S]?.value || `0`);
    if (isNaN(e)) return;
    let t = performance.now(),
      n = 0,
      r = (i) => {
        let a = Math.min(1, (i - t) / 1400);
        (w((t) => ({ ...t, [S]: e * (1 - 2 ** (-10 * a)) })),
          a < 1 ? (n = requestAnimationFrame(r)) : w((t) => ({ ...t, [S]: e })));
      };
    return ((n = requestAnimationFrame(r)), () => cancelAnimationFrame(n));
  }, [S, h]);
  let k = (e, t) => {
      if (!h) return e.value;
      let n = parseFloat(e.value);
      if (isNaN(n)) return e.value;
      let r = (e.value.split(`.`)[1] || ``).length;
      return (C[t] ?? 0).toFixed(r);
    },
    j = W(16, 2.2, 32, p),
    M = p <= 600 ? p * 0.86 : W(300, 52, 820, p);
  return c(`section`, {
    ref: u,
    className: `nl-hx` + (h ? `` : ` static`) + b(p),
    style: { ...e.style, height: h ? `calc(100vh + ${_}px)` : void 0 },
    children: [
      O(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Z } }),
      c(`div`, {
        className: `pin`,
        style: { gap: W(28, 4, 56, p) },
        children: [
          c(`div`, {
            className: `head`,
            style: { paddingInline: j },
            children: [
              l(q, { n, t: r, s: i }),
              c(`div`, {
                className: `meta mono`,
                children: [
                  c(`span`, {
                    children: [
                      l(`b`, { children: String(S + 1).padStart(2, `0`) }),
                      ` / `,
                      String(x.length).padStart(2, `0`),
                    ],
                  }),
                  l(`span`, {
                    className: `prog`,
                    style: { width: W(120, 14, 220, p) },
                    children: l(`i`, { style: { transform: `scaleX(${h ? y : 0})` } }),
                  }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `track`,
            ref: d,
            style: { paddingInline: j, transform: h ? `translate3d(${-y * _}px,0,0)` : void 0 },
            children: x.map((e, t) =>
              c(
                `div`,
                {
                  className: `fig` + (t === S ? ` on` : ``),
                  style: { width: M, paddingRight: W(32, 5, 80, p) },
                  children: [
                    l(`span`, { className: `k mono`, children: e.key }),
                    c(`b`, {
                      style: { fontSize: W(96, 15, 260, p) },
                      children: [
                        l(`span`, { children: k(e, t) }),
                        e.unit ? l(`small`, { children: e.unit }) : null,
                      ],
                    }),
                    l(`p`, { children: e.text }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function P(e) {
  let { number: t, title: n, sub: r, columns: s } = e,
    u = o(null),
    d = g(u),
    p = E(),
    m = _(u, `0px 0px -15% 0px`),
    [h, v] = a(!1),
    [x, S] = a(0);
  f(() => {
    let e = u.current;
    e && !D() && !p && e.getBoundingClientRect().top > i.innerHeight * 0.85 && v(!0);
  }, [p]);
  let C = i !== void 0 && !D() ? i.innerHeight : 900,
    w = Math.max(480, Math.min(620, C * 0.62)),
    k = W(24, 2.6, 36, d);
  return c(`div`, {
    ref: u,
    className: `nl-co` + (h && !m ? ` pre` : ``) + b(d),
    style: e.style,
    children: [
      O(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Q } }),
      l(q, { n: t, t: n, s: r }),
      l(`div`, {
        className: `cols`,
        style: { height: w },
        children: (s || []).map((e, t) =>
          c(
            `article`,
            {
              tabIndex: 0,
              className: `col` + (t === x ? ` on` : ``) + (h && !m ? ` pre` : ``),
              style: h && m ? { transitionDelay: `0s,${t * 0.1}s,${t * 0.1}s` } : void 0,
              onPointerEnter: () => {
                T() && S(t);
              },
              onClick: () => S(t),
              onFocus: () => S(t),
              children: [
                c(`div`, {
                  className: `cv`,
                  children: [
                    l(`span`, { className: `mono`, children: String(t + 1).padStart(2, `0`) }),
                    l(`b`, { style: { fontSize: W(26, 2.4, 40, d) }, children: e.name }),
                  ],
                }),
                c(`div`, {
                  className: `cx`,
                  style: { width: W(320, 46, 640, d), padding: k },
                  children: [
                    c(`div`, {
                      className: `top mono`,
                      children: [
                        l(`b`, { children: String(t + 1).padStart(2, `0`) }),
                        l(`span`, { children: n }),
                      ],
                    }),
                    l(`h3`, { style: { fontSize: W(48, 6, 104, d) }, children: e.name }),
                    l(`p`, { children: e.text }),
                    c(`div`, {
                      className: `row`,
                      children: [
                        c(`div`, {
                          className: `price`,
                          children: [
                            l(`span`, { className: `mono`, children: e.priceLabel }),
                            c(`b`, {
                              style: { fontSize: W(34, 3.4, 54, d) },
                              children: [e.price, e.unit ? l(`small`, { children: e.unit }) : null],
                            }),
                          ],
                        }),
                        l(y, {
                          label: e.button,
                          link: e.link || P.defaultProps.columns[t]?.link,
                          ghost: e.ghost,
                          newTab: !1,
                          submit: !1,
                          visual: !1,
                          full: !1,
                        }),
                      ],
                    }),
                    l(`div`, {
                      className: `feats mono`,
                      children: (e.feats || ``)
                        .split(`,`)
                        .map((e) => e.trim())
                        .filter(Boolean)
                        .map((e, t) => l(`span`, { children: e }, t)),
                    }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function ee({ c: e, i: t, w: n, armedAll: r }) {
  let i = o(null),
    a = _(i, `0px 0px -15% 0px`),
    s = r && !a,
    u = (e) => ({ transitionDelay: r && a ? 0.2 + e * 0.08 + `s` : void 0 });
  return c(`article`, {
    ref: i,
    className: `row` + (s ? ` pre` : ``),
    children: [
      l(`div`, {
        className: `ph`,
        children: l(`img`, {
          src: e.image?.src || te[t % 3],
          alt: e.alt || e.image?.alt || ``,
          loading: `lazy`,
        }),
      }),
      c(`div`, {
        className: `mid`,
        children: [
          c(`div`, {
            className: `brand fx`,
            style: u(0),
            children: [
              Y[e.icon] || Y.squares,
              l(`span`, { children: e.brand }),
              l(`span`, { className: `mono`, children: e.industry }),
            ],
          }),
          c(`blockquote`, {
            className: `fx`,
            style: { ...u(1), fontSize: W(22, 2.2, 34, n) },
            children: [`“`, e.quote, `”`],
          }),
          c(`div`, {
            className: `who fx`,
            style: u(2),
            children: [l(`span`, { children: e.name }), l(`span`, { children: e.role })],
          }),
        ],
      }),
      c(`div`, {
        className: `side`,
        children: [
          c(`div`, {
            className: `fx`,
            style: u(3),
            children: [
              l(`b`, { style: { fontSize: W(56, 5.6, 96, n) }, children: e.big }),
              l(`div`, { className: `mono`, children: e.bigLabel }),
            ],
          }),
          c(`a`, {
            className: `rl fx`,
            style: u(4),
            href: e.link || F.defaultProps.rows[t]?.link || `#`,
            children: [e.linkLabel, J],
          }),
        ],
      }),
    ],
  });
}
function F(e) {
  let { number: t, title: n, sub: r, button: s, link: u, rows: d, mesh: p } = e,
    m = o(null),
    h = g(m),
    _ = E(),
    [v, x] = a(!1);
  return (
    f(() => {
      let e = m.current;
      e && !D() && !_ && e.getBoundingClientRect().top > i.innerHeight * 0.85 && x(!0);
    }, [_]),
    c(`div`, {
      ref: m,
      className: `nl-cr` + (p ? ` mesh` : ``) + b(h),
      style: e.style,
      children: [
        O(),
        l(`style`, { dangerouslySetInnerHTML: { __html: $ } }),
        c(`div`, {
          className: `head`,
          children: [
            l(q, { n: t, t: n, s: r }),
            s
              ? l(y, { label: s, link: u, ghost: !0, newTab: !1, submit: !1, visual: !1, full: !1 })
              : null,
          ],
        }),
        l(`div`, {
          className: `list`,
          children: (d || []).map((e, t) => l(ee, { c: e, i: t, w: h, armedAll: v }, t)),
        }),
      ],
    })
  );
}
function I(e) {
  let { number: n, title: u, sub: d, text: p, tone: m, sign: h } = e,
    v = o(null),
    y = o(null),
    x = g(v),
    S = E(),
    C = _(v, `0px 0px -20% 0px`),
    [w, T] = a(!1),
    [k, A] = a(null),
    j = s(
      () => [
        ...(p || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => ({ w: e, tone: !1 })),
        ...(m || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => ({ w: e, tone: !0 })),
      ],
      [p, m]
    );
  (f(() => {
    let e = v.current;
    e && !D() && !S && e.getBoundingClientRect().top > i.innerHeight * 0.8 && T(!0);
  }, [S]),
    t(() => {
      if (!w) return;
      let e = () => {
        let e = y.current;
        e &&
          (A(null),
          requestAnimationFrame(() => {
            let t = Array.from(e.querySelectorAll(`[data-w]`));
            if (!t.length) return;
            let n = [],
              r = -1;
            (t.forEach((e, t) => {
              (Math.abs(e.offsetTop - r) > 2 && (n.push([]), (r = e.offsetTop)),
                n[n.length - 1].push(j[t]));
            }),
              A(n));
          }));
      };
      document.fonts?.ready ? document.fonts.ready.then(e) : e();
    }, [w, j, x]));
  let M = W(28, 3.4, 58, x);
  return c(`div`, {
    ref: v,
    className: `nl-mf` + (w && !C ? ` pre` : ``) + b(x),
    style: e.style,
    children: [
      O(),
      l(`style`, { dangerouslySetInnerHTML: { __html: ne } }),
      l(q, { n, t: u, s: d }),
      l(`p`, {
        ref: y,
        style: { fontSize: M },
        "aria-label": p + ` ` + m,
        children:
          w && k
            ? k.map((e, t) =>
                l(
                  `span`,
                  {
                    className: `ln`,
                    "aria-hidden": `true`,
                    children: l(`span`, {
                      style: { transitionDelay: t * 0.09 + `s` },
                      children: e.map((e, t) =>
                        c(
                          r,
                          {
                            children: [
                              t ? ` ` : ``,
                              l(`span`, { className: e.tone ? `tone` : void 0, children: e.w }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  },
                  t
                )
              )
            : l(`span`, {
                "aria-hidden": `true`,
                children: j.map((e, t) =>
                  c(
                    r,
                    {
                      children: [
                        t ? ` ` : ``,
                        l(`span`, {
                          "data-w": ``,
                          className: e.tone ? `tone` : void 0,
                          children: e.w,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
      }),
      c(`div`, {
        className: `sig mono`,
        children: [
          c(`svg`, {
            viewBox: `0 0 22 22`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            children: [
              l(`rect`, { x: `2`, y: `2`, width: `8`, height: `8` }),
              l(`rect`, { x: `12`, y: `2`, width: `8`, height: `8`, opacity: `.45` }),
              l(`rect`, { x: `2`, y: `12`, width: `8`, height: `8`, opacity: `.45` }),
              l(`rect`, { x: `12`, y: `12`, width: `8`, height: `8` }),
            ],
          }),
          l(`span`, { children: h }),
        ],
      }),
    ],
  });
}
function L(e) {
  let { number: t, title: n, sub: r, button: s, link: u, items: d } = e,
    p = o(null),
    m = g(p),
    h = E(),
    v = _(p, `0px 0px -12% 0px`),
    [x, S] = a(!1);
  return (
    f(() => {
      let e = p.current;
      e && !D() && !h && e.getBoundingClientRect().top > i.innerHeight * 0.88 && S(!0);
    }, [h]),
    c(`div`, {
      ref: p,
      className: `nl-nr` + (x && !v ? ` pre` : ``) + b(m),
      style: e.style,
      children: [
        O(),
        l(`style`, { dangerouslySetInnerHTML: { __html: re } }),
        c(`div`, {
          className: `head`,
          children: [
            l(q, { n: t, t: n, s: r }),
            s
              ? l(y, { label: s, link: u, ghost: !0, newTab: !1, submit: !1, visual: !1, full: !1 })
              : null,
          ],
        }),
        l(`div`, {
          className: `list`,
          children: (d || []).map((e, t) =>
            c(
              `a`,
              {
                className: `ni`,
                href: e.link || L.defaultProps.items[t]?.link || `#`,
                style: x && v ? { transitionDelay: `0s,${t * 0.07}s,${t * 0.07}s` } : void 0,
                children: [
                  l(`span`, { className: `d mono`, children: e.date }),
                  l(`span`, { className: `c mono`, children: e.category }),
                  l(`h3`, { style: { fontSize: W(19, 1.7, 26, m) }, children: e.title }),
                  J,
                ],
              },
              t
            )
          ),
        }),
      ],
    })
  );
}
var R,
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
  Y,
  X,
  Z,
  Q,
  $,
  te,
  ne,
  re,
  ie = e(() => {
    (n(),
      u(),
      d(),
      h(),
      w(),
      v(),
      k(),
      (R = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (z = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (B = `rgba(243,243,243,.12)`),
      (V = `cubic-bezier(.16,1,.3,1)`),
      (H = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (U = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (W = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (G = (e) => Math.max(0, Math.min(1, e))),
      (K = (e, t, n) => G((e - t) / (n - t))),
      (q = ({ n: e, t, s: n }) =>
        c(`div`, {
          className: `lab`,
          children: [
            e ? l(`span`, { className: `n`, children: e }) : null,
            l(`span`, { children: t }),
            l(`span`, { className: `s`, children: n }),
          ],
        })),
      (J = l(`svg`, {
        viewBox: `0 0 14 14`,
        fill: `none`,
        "aria-hidden": `true`,
        children: l(`path`, {
          d: `M1 7h12M8 2l5 5-5 5`,
          stroke: `currentColor`,
          strokeWidth: `1.2`,
        }),
      })),
      (Y = {
        squares: c(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            l(`rect`, { x: `2`, y: `2`, width: `8`, height: `8` }),
            l(`rect`, { x: `12`, y: `2`, width: `8`, height: `8`, opacity: `.45` }),
            l(`rect`, { x: `2`, y: `12`, width: `8`, height: `8`, opacity: `.45` }),
            l(`rect`, { x: `12`, y: `12`, width: `8`, height: `8` }),
          ],
        }),
        helix: c(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            l(`path`, { d: `M2 11c2.5-6 5.5-6 9 0s6.5 6 9 0` }),
            l(`path`, { d: `M2 11c2.5 6 5.5 6 9 0s6.5-6 9 0`, opacity: `.5` }),
          ],
        }),
        orbit: c(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          children: [
            l(`circle`, { cx: `11`, cy: `11`, r: `4`, fill: `currentColor`, stroke: `none` }),
            l(`ellipse`, {
              cx: `11`,
              cy: `11`,
              rx: `9.5`,
              ry: `4`,
              transform: `rotate(-25 11 11)`,
            }),
          ],
        }),
      }),
      (X = `
.nl-sg{${z};position:relative;width:100%}
.nl-sg .mono{${R}}
.nl-sg .pin{position:sticky;top:0;height:100vh;min-height:640px;overflow:hidden}
.nl-sg .stage{position:absolute;inset:0;isolation:isolate}
.nl-sg .knock{position:absolute;inset:0;z-index:1;background:radial-gradient(44% 54% at 50% 48%,rgb(44,41,56),rgb(10,9,13) 70%,#000);mix-blend-mode:multiply;display:grid;place-items:center}
.nl-sg .knock svg{overflow:visible}
.nl-sg .knock svg *{fill:#fff}
.nl-sg .knock g{transform-box:fill-box;transform-origin:50% 50%}
.nl-sg .knock rect,.nl-sg .knock polygon{transform-box:fill-box;transform-origin:50% 50%}
.nl-sg .top{position:absolute;top:90px;z-index:3;display:flex;justify-content:space-between;gap:16px;color:#A6A6A6}
.nl-sg .copy{position:absolute;bottom:28px;z-index:3;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-sg h1{grid-column:1 / span 8;margin:0;white-space:nowrap;font-weight:400;letter-spacing:-.04em;line-height:.98}
.nl-sg h1 .tone{color:#A6A6A6}
.nl-sg .wd{display:inline-block;white-space:nowrap}
.nl-sg .ch{display:inline-block}
.nl-sg .r{grid-column:9 / span 4;display:flex;flex-direction:column;gap:18px;align-items:flex-end;text-align:right}
.nl-sg .r p{margin:0;color:#A6A6A6;font-weight:400;max-width:34ch;text-wrap:balance}
.nl-sg .rev{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;text-align:center;pointer-events:none}
.nl-sg .rev p{margin:0;letter-spacing:-.04em;line-height:1.04;max-width:18ch;text-wrap:balance;font-weight:500}
.nl-sg .rev .mono{color:#C9BDFF}
@keyframes nl-sg-p1{from{opacity:0;transform:translateY(-120%)}to{opacity:1;transform:none}}
@keyframes nl-sg-p3{from{opacity:0;transform:translateY(120%)}to{opacity:1;transform:none}}
@keyframes nl-sg-p2{from{transform:scale(0)}to{transform:none}}
@keyframes nl-sg-ch{from{opacity:0;filter:blur(16px);transform:translateY(.18em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-sg-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.nl-sg.anim #nl-p1{animation:nl-sg-p1 1.4s cubic-bezier(.87,0,.13,1) both}
.nl-sg.anim #nl-p3{animation:nl-sg-p3 1.4s cubic-bezier(.87,0,.13,1) .08s both}
.nl-sg.anim #nl-p2{animation:nl-sg-p2 1.2s cubic-bezier(.87,0,.13,1) .3s both}
.nl-sg.anim h1 .ch{animation:nl-sg-ch 1.3s cubic-bezier(.215,.61,.355,1) both}
.nl-sg.anim .up{animation:nl-sg-up 1s ${V} both}
.nl-sg.is-md h1{grid-column:1 / -1;white-space:normal}
.nl-sg.is-md .r{grid-column:1 / -1;align-items:flex-start;text-align:left}
.nl-sg.is-sm .top span:last-child{display:none}
`),
      (M.defaultProps = {
        topLeft: `Signal · N-01 · Narvik`,
        topRight: `Hall A · 72% load`,
        title: `Compute, measured`,
        tone: `in degrees.`,
        text: `GPU halls above the Arctic Circle. Cooled by outside air, powered by rivers, metered to the watt.`,
        button: `Plan capacity`,
        link: `#talk`,
        revLabel: `Below 10 °C · 300 days a year`,
        revText: `The cold is the infrastructure.`,
        lightX: 0.5,
        lightY: 0.46,
        gain: 4,
        seed: 19,
      }),
      p(M, {
        topLeft: { type: m.String, title: `Top left` },
        topRight: { type: m.String, title: `Top right` },
        title: { type: m.String, title: `Title` },
        tone: { type: m.String, title: `Title (grey)` },
        text: { type: m.String, title: `Text`, displayTextArea: !0 },
        button: { type: m.String, title: `Button` },
        link: { type: m.Link, title: `Link` },
        revLabel: { type: m.String, title: `Reveal label` },
        revText: { type: m.String, title: `Reveal text` },
        lightX: { type: m.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: m.Number, title: `Light Y`, min: 0, max: 1, step: 0.01 },
        gain: { type: m.Number, title: `Gain`, min: 0.5, max: 6, step: 0.05 },
        seed: { type: m.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }),
      (Z = `
.nl-hx{${z};position:relative;width:100%}
.nl-hx .mono{${R}}
.nl-hx .lab{${H}}
.nl-hx .lab .n{${U}}
.nl-hx .lab .s{color:#A6A6A6}
.nl-hx .pin{position:sticky;top:0;height:100vh;min-height:600px;display:flex;flex-direction:column;justify-content:center;overflow:hidden;border-top:1px solid ${B}}
.nl-hx .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px}
.nl-hx .meta{display:flex;align-items:center;gap:16px;color:#A6A6A6;font-variant-numeric:tabular-nums}
.nl-hx .meta b{color:#F3F3F3;font-weight:400}
.nl-hx .prog{height:1px;background:${B};position:relative;overflow:hidden}
.nl-hx .prog i{position:absolute;inset:0;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);transform-origin:0 50%}
.nl-hx .track{display:flex;will-change:transform}
.nl-hx .fig{flex:0 0 auto;display:flex;flex-direction:column;gap:20px;border-left:1px solid ${B};padding-left:24px;transition:opacity .6s;box-sizing:border-box}
.nl-hx .fig:not(.on){opacity:.32}
.nl-hx .fig .k{color:#A6A6A6}
.nl-hx .fig b{font-weight:300;line-height:.82;letter-spacing:-.07em;font-variant-numeric:tabular-nums;white-space:nowrap}
.nl-hx .fig b small{font-size:.28em;letter-spacing:-.02em;color:#A6A6A6;margin-left:.08em;transition:color .6s}
.nl-hx .fig.on b small{color:#C9BDFF}
.nl-hx .fig p{margin:0;color:#A6A6A6;font-weight:400;max-width:36ch}
.nl-hx.static .pin{position:relative;height:auto;min-height:0;padding-block:96px}
.nl-hx.static .track{overflow-x:auto;scrollbar-width:none}
.nl-hx.static .track::-webkit-scrollbar{display:none}
.nl-hx.static .fig{opacity:1}
`),
      (N.defaultProps = {
        number: `01`,
        title: `Data`,
        sub: `Measured at the meter`,
        figures: [
          {
            key: `PUE · 2025`,
            value: `1.09`,
            unit: ``,
            text: `Power usage effectiveness, metered every hour across Hall A.`,
          },
          {
            key: `Renewable share`,
            value: `98.7`,
            unit: `%`,
            text: `Hydro and wind from the NO4 grid, matched by the hour.`,
          },
          {
            key: `Water used`,
            value: `0`,
            unit: `L`,
            text: `Free-air cooling. No evaporative towers, no chilled water.`,
          },
          {
            key: `Heat reused`,
            value: `41`,
            unit: `GWh`,
            text: `Delivered to Narvik’s district heating network last winter.`,
          },
          {
            key: `Latency to Oslo`,
            value: `9.4`,
            unit: `ms`,
            text: `Two dark-fibre routes south, diverse paths.`,
          },
        ],
      }),
      p(N, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        figures: {
          type: m.Array,
          title: `Figures`,
          control: {
            type: m.Object,
            controls: {
              key: { type: m.String, title: `Label` },
              value: { type: m.String, title: `Value`, description: `Numbers count up` },
              unit: { type: m.String, title: `Unit` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
            },
          },
        },
      }),
      (Q = `
.nl-co{${z};width:100%}
.nl-co .mono{${R}}
.nl-co .lab{${H};margin-bottom:40px}
.nl-co .lab .n{${U}}
.nl-co .lab .s{color:#A6A6A6}
.nl-co .lab{transition:opacity 1.1s ${V},transform 1.1s ${V}}
.nl-co.pre .lab{opacity:0;transform:translateY(20px)}
.nl-co .cols{display:flex;border:1px solid ${B}}
.nl-co .col{position:relative;flex:1 1 0;min-width:0;overflow:hidden;cursor:pointer;transition:flex-grow 1s ${V},opacity 1.2s ${V},transform 1.2s ${V};outline:none}
.nl-co .col + .col{border-left:1px solid ${B}}
.nl-co .col.on{flex-grow:3.4;cursor:default}
.nl-co .col::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(110,75,255,0) 20%,rgba(110,75,255,.26) 70%,rgba(201,189,255,.4));opacity:0;transition:opacity 1s ${V}}
.nl-co .col::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.42) 0 1px,transparent 1px 9px);opacity:0;transition:opacity 1s ${V}}
.nl-co .col.on::before,.nl-co .col.on::after{opacity:1}
.nl-co .col:not(.on):hover::before{opacity:.35}
.nl-co .col.pre{opacity:0;transform:translateY(40px)}
.nl-co .cv{position:absolute;inset:24px;z-index:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;transition:opacity .5s ${V}}
.nl-co .col.on .cv{opacity:0;pointer-events:none}
.nl-co .cv .mono{color:#A6A6A6}
.nl-co .cv b{writing-mode:vertical-rl;transform:rotate(180deg);font-weight:300;letter-spacing:-.04em}
.nl-co .cx{position:absolute;left:0;bottom:0;z-index:1;max-width:100%;display:flex;flex-direction:column;gap:22px;opacity:0;transform:translateY(24px);transition:opacity .5s ${V},transform .8s ${V};box-sizing:border-box}
.nl-co .col.on .cx{opacity:1;transform:none;transition-delay:.35s}
.nl-co .cx .top{display:flex;justify-content:space-between;gap:12px;color:#A6A6A6}
.nl-co .cx .top b{color:#F3F3F3;font-weight:400}
.nl-co h3{margin:0;font-weight:300;letter-spacing:-.055em;line-height:.86}
.nl-co .cx p{margin:0;color:rgba(243,243,243,.75);font-weight:400;max-width:42ch}
.nl-co .row{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap;border-top:1px solid rgba(243,243,243,.18);padding-top:18px}
.nl-co .price span{display:block;color:#A6A6A6;margin-bottom:8px}
.nl-co .price b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.06em;font-feature-settings:"zero" 1}
.nl-co .price b small{font-size:.26em;letter-spacing:.04em;color:#A6A6A6;margin-left:6px}
.nl-co .feats{display:flex;flex-wrap:wrap;gap:6px}
.nl-co .feats span{padding:5px 7px;box-shadow:inset 0 0 0 1px rgba(243,243,243,.2);color:#A6A6A6;background:rgba(0,0,0,.35)}
.nl-co.is-md .cols{flex-direction:column;height:auto!important}
.nl-co.is-md .col{flex:none}
.nl-co.is-md .col + .col{border-left:0;border-top:1px solid ${B}}
.nl-co.is-md .cv{display:none}
.nl-co.is-md .cx{position:relative;width:100%!important;opacity:1;transform:none}
.nl-co.is-md .col::before,.nl-co.is-md .col::after{opacity:.6}
`),
      (P.defaultProps = {
        number: `02`,
        title: `Compute`,
        sub: `Three ways to run`,
        columns: [
          {
            name: `Reserved`,
            text: `Dedicated H200 and B300 pods from 256 GPUs, on one to three-year terms.`,
            priceLabel: `From`,
            price: `$1.62`,
            unit: `/ GPU-hr`,
            button: `Reserve a pod`,
            link: `#talk`,
            ghost: !1,
            feats: `3.2 Tb/s fabric, Deadline credits, Named engineer`,
          },
          {
            name: `On-demand`,
            text: `Spin up 8 to 512 GPUs in minutes. Billed per second, no commitment.`,
            priceLabel: `From`,
            price: `$2.24`,
            unit: `/ GPU-hr`,
            button: `Start now`,
            link: `#talk`,
            ghost: !0,
            feats: `Per-second billing, 400 Gb/s fabric, Instant start`,
          },
          {
            name: `Sovereign`,
            text: `Private halls under EEA jurisdiction for governments and research labs.`,
            priceLabel: `Price`,
            price: `Custom`,
            unit: ``,
            button: `Talk to sales`,
            link: `#talk`,
            ghost: !0,
            feats: `Own hall, Customer-held keys, ISO 27001`,
          },
        ],
      }),
      p(P, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        columns: {
          type: m.Array,
          title: `Columns`,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Name` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
              priceLabel: { type: m.String, title: `Price label` },
              price: { type: m.String, title: `Price` },
              unit: { type: m.String, title: `Unit` },
              button: { type: m.String, title: `Button` },
              link: { type: m.Link, title: `Link` },
              ghost: { type: m.Boolean, title: `Ghost button` },
              feats: { type: m.String, title: `Features`, description: `Comma separated` },
            },
          },
        },
      }),
      ($ = `
.nl-cr{${z};width:100%}
.nl-cr .mono{${R}}
.nl-cr .lab{${H}}
.nl-cr .lab .n{${U}}
.nl-cr .lab .s{color:#A6A6A6}
.nl-cr .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:40px}
.nl-cr .list{border-top:1px solid ${B}}
.nl-cr .row{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;padding:28px 0;border-bottom:1px solid ${B};align-items:stretch}
.nl-cr .ph{grid-column:1 / span 3;position:relative;aspect-ratio:4/5;overflow:hidden;max-width:100%;transition:clip-path 1.4s cubic-bezier(.87,0,.13,1)}
.nl-cr .ph img{display:block;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.85);transform:scale(1.06);transition:transform 1.4s ${V},filter 1s ${V}}
.nl-cr.mesh .ph img{-webkit-mask-image:${S};mask-image:${S};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px}
.nl-cr .ph::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(110,75,255,.55),rgba(110,75,255,0) 65%);mix-blend-mode:screen;opacity:0;transition:opacity .8s ${V}}
.nl-cr .row:hover .ph img{transform:scale(1);filter:grayscale(1) contrast(1.1) brightness(.95)}
.nl-cr .row:hover .ph::after{opacity:1}
.nl-cr .mid{grid-column:5 / span 5;display:flex;flex-direction:column;justify-content:space-between;gap:28px}
.nl-cr .brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.nl-cr .brand svg{width:18px;height:18px}
.nl-cr .brand .mono{color:#A6A6A6;margin-left:6px}
.nl-cr blockquote{margin:0;font-weight:400;letter-spacing:-.03em;line-height:1.12;text-wrap:balance}
.nl-cr .who{display:flex;flex-direction:column;gap:4px;font-size:14px}
.nl-cr .who span:last-child{color:#A6A6A6}
.nl-cr .side{grid-column:10 / span 3;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;text-align:right;gap:24px}
.nl-cr .side b{display:block;font-weight:300;line-height:.85;letter-spacing:-.06em}
.nl-cr .side .mono{color:#A6A6A6;margin-top:12px}
.nl-cr .rl{display:inline-flex;align-items:center;gap:10px;font-size:14px;position:relative;padding-bottom:6px;color:#F3F3F3;text-decoration:none}
.nl-cr .rl::before,.nl-cr .rl::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px}
.nl-cr .rl::before{background:#5E5E5E}
.nl-cr .rl::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);transform:scaleX(0);transform-origin:100% 50%;transition:transform .7s ${V}}
.nl-cr .row:hover .rl::after{transform:scaleX(1);transform-origin:0 50%}
.nl-cr .rl svg{width:13px;height:13px;transition:transform .5s ${V}}
.nl-cr .row:hover .rl svg{transform:translateX(4px)}
.nl-cr .fx{transition:opacity 1.1s ${V},transform 1.1s ${V}}
.nl-cr .pre .fx{opacity:0;transform:translateY(24px)}
.nl-cr .pre .ph{clip-path:inset(100% 0% 0% 0%)}
.nl-cr.is-md .ph{grid-column:1 / span 5}
.nl-cr.is-md .mid{grid-column:6 / -1}
.nl-cr.is-md .side{grid-column:1 / -1;flex-direction:row;align-items:flex-end;text-align:left}
.nl-cr.is-sm .ph{grid-column:1 / -1;aspect-ratio:4/3}
.nl-cr.is-sm .mid{grid-column:1 / -1}
`),
      (te = [x.amara, x.jonas, x.erik]),
      (F.defaultProps = {
        number: `03`,
        title: `Case studies`,
        sub: `The people who moved north`,
        button: `All case studies`,
        link: `/case-studies`,
        mesh: !0,
        rows: [
          {
            image: void 0,
            alt: `Portrait of Amara Okafor`,
            brand: `Tensorfield`,
            icon: `squares`,
            industry: `Foundation models`,
            quote: `We trained a 70B model in 19 days and spent a third less on energy. The cold is not a gimmick, it is a cost line.`,
            name: `Amara Okafor`,
            role: `Head of Infrastructure, Tensorfield`,
            big: `−34%`,
            bigLabel: `Energy cost`,
            linkLabel: `Read case study`,
            link: `/case-studies/tensorfield`,
          },
          {
            image: void 0,
            alt: `Portrait of Jonas Weber`,
            brand: `Helix AI`,
            icon: `helix`,
            industry: `Biotech inference`,
            quote: `We moved our protein-folding fleet north without changing a line of code. Latency went up two milliseconds. Nobody noticed.`,
            name: `Jonas Weber`,
            role: `CTO, Helix AI`,
            big: `−61%`,
            bigLabel: `CO₂ per query`,
            linkLabel: `Read case study`,
            link: `/case-studies/helix-ai`,
          },
          {
            image: void 0,
            alt: `Portrait of Erik Halvorsen`,
            brand: `Orbit Labs`,
            icon: `orbit`,
            industry: `Earth observation`,
            quote: `A petabyte of satellite imagery a month, and zero litres of water. That number changed how our board talks about compute.`,
            name: `Erik Halvorsen`,
            role: `CFO, Orbit Labs`,
            big: `0 L`,
            bigLabel: `Water used`,
            linkLabel: `Read case study`,
            link: `/case-studies/orbit-labs`,
          },
        ],
      }),
      p(F, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        button: { type: m.String, title: `Button` },
        link: { type: m.Link, title: `Button link` },
        mesh: { type: m.Boolean, title: `Photo mesh` },
        rows: {
          type: m.Array,
          title: `Rows`,
          control: {
            type: m.Object,
            controls: {
              image: { type: m.ResponsiveImage, title: `Portrait` },
              alt: { type: m.String, title: `Alt text` },
              brand: { type: m.String, title: `Company` },
              icon: {
                type: m.Enum,
                title: `Icon`,
                options: [`squares`, `helix`, `orbit`],
                optionTitles: [`Squares`, `Helix`, `Orbit`],
              },
              industry: { type: m.String, title: `Industry` },
              quote: { type: m.String, title: `Quote`, displayTextArea: !0 },
              name: { type: m.String, title: `Name` },
              role: { type: m.String, title: `Role` },
              big: { type: m.String, title: `Big number` },
              bigLabel: { type: m.String, title: `Number label` },
              linkLabel: { type: m.String, title: `Link label` },
              link: { type: m.Link, title: `Link` },
            },
          },
        },
      }),
      (ne = `
.nl-mf{${z};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;border-top:1px solid ${B};padding-top:22px;width:100%}
.nl-mf .mono{${R}}
.nl-mf .lab{${H};grid-column:1 / span 3}
.nl-mf .lab .n{${U}}
.nl-mf .lab .s{color:#A6A6A6}
.nl-mf .lab{transition:opacity 1.1s ${V},transform 1.1s ${V}}
.nl-mf.pre .lab{opacity:0;transform:translateY(20px)}
.nl-mf p{grid-column:4 / span 9;margin:0;letter-spacing:-.035em;line-height:1.08;max-width:24ch;font-weight:500}
.nl-mf .tone{color:#A6A6A6}
.nl-mf .ln{display:block;overflow:hidden;padding-bottom:.06em;margin-bottom:-.06em}
.nl-mf .ln > span{display:block;transition:transform 1.1s ${V}}
.nl-mf.pre .ln > span{transform:translateY(105%)}
.nl-mf .sig{grid-column:4 / span 9;display:flex;align-items:center;gap:14px;margin-top:32px;color:#A6A6A6}
.nl-mf .sig svg{width:16px;height:16px;color:#F3F3F3}
.nl-mf.is-md .lab,.nl-mf.is-md p,.nl-mf.is-md .sig{grid-column:1 / -1}
`),
      (I.defaultProps = {
        number: `04`,
        title: `About`,
        sub: `Why the North`,
        text: `Every watt a data hall spends on cooling is a watt it does not spend on compute. Most of the world builds where it is warm and then fights the heat.`,
        tone: `We went north and let the air do the work.`,
        sign: `Signed by 34 engineers in Tromsø`,
      }),
      p(I, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        text: { type: m.String, title: `Text`, displayTextArea: !0 },
        tone: { type: m.String, title: `Text (grey)`, displayTextArea: !0 },
        sign: { type: m.String, title: `Signature` },
      }),
      (re = `
.nl-nr{${z};width:100%}
.nl-nr .mono{${R}}
.nl-nr .lab{${H}}
.nl-nr .lab .n{${U}}
.nl-nr .lab .s{color:#A6A6A6}
.nl-nr .lab{transition:opacity 1.1s ${V},transform 1.1s ${V}}
.nl-nr.pre .lab{opacity:0;transform:translateY(20px)}
.nl-nr .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:32px}
.nl-nr .list{border-top:1px solid ${B}}
.nl-nr a.ni{position:relative;display:grid;grid-template-columns:140px 140px minmax(0,1fr) 24px;gap:24px;align-items:baseline;padding:24px 0;border-bottom:1px solid ${B};color:#F3F3F3;text-decoration:none;transition:padding .6s ${V},opacity 1s ${V},transform 1s ${V}}
.nl-nr a.ni::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${V}}
.nl-nr a.ni:hover::after{transform:scaleX(1);transform-origin:0 50%}
.nl-nr a.ni:hover{padding-left:12px}
.nl-nr .d{color:#A6A6A6;font-variant-numeric:tabular-nums}
.nl-nr .c{color:#C9BDFF}
.nl-nr h3{margin:0;font-weight:400;letter-spacing:-.025em;line-height:1.2;color:#A6A6A6;transition:color .4s}
.nl-nr a.ni:hover h3{color:#F3F3F3}
.nl-nr svg{width:14px;height:14px;align-self:center;transition:transform .5s ${V}}
.nl-nr a.ni:hover svg{transform:rotate(-45deg)}
.nl-nr.pre a.ni{opacity:0;transform:translateY(20px)}
.nl-nr.is-md a.ni{grid-template-columns:110px minmax(0,1fr) 20px}
.nl-nr.is-md .c{display:none}
.nl-nr.is-sm a.ni{grid-template-columns:minmax(0,1fr) 20px;gap:8px 16px}
.nl-nr.is-sm .d{grid-column:1 / -1}
`),
      (L.defaultProps = {
        number: `05`,
        title: `News`,
        sub: `From the North`,
        button: `All news`,
        link: `/news`,
        items: [
          {
            date: `Sep 18, 2026`,
            category: `Company`,
            title: `Nordlys raises $48M Series A to build N-02 in Kiruna`,
            link: `/news/nordlys-raises-48m-series-a`,
          },
          {
            date: `Aug 27, 2026`,
            category: `Field notes`,
            title: `Twelve months at 99.995%: a year inside Hall A`,
            link: `/news/twelve-months-at-99-995-a-year-inside-hall-a`,
          },
          {
            date: `Jun 25, 2026`,
            category: `Field notes`,
            title: `Midnight sun, zero chillers: summer in the hall`,
            link: `/news/midnight-sun-zero-chillers-summer-in-the-hall`,
          },
          {
            date: `Jun 12, 2026`,
            category: `Company`,
            title: `B300 pods are now bookable for Q1 2027`,
            link: `/news/b300-pods-are-now-bookable-for-q1-2027`,
          },
        ],
      }),
      p(L, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        button: { type: m.String, title: `Button` },
        link: { type: m.Link, title: `Button link` },
        items: {
          type: m.Array,
          title: `Items`,
          control: {
            type: m.Object,
            controls: {
              date: { type: m.String, title: `Date` },
              category: { type: m.String, title: `Category` },
              title: { type: m.String, title: `Title` },
              link: { type: m.Link, title: `Link` },
            },
          },
        },
      }));
  });
export { L as a, I as i, P as n, M as o, N as r, ie as s, F as t };
//# sourceMappingURL=Home03.C5ffTP_1.mjs.map
