import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  I as n,
  R as r,
  _ as i,
  b as a,
  l as o,
  o as s,
  s as c,
  w as l,
  y as u,
} from "./react.Dlpel5Rf.mjs";
import { k as d, o as f, q as p } from "./framer.CKDq5C8y.mjs";
import {
  C as m,
  S as h,
  a as g,
  d as _,
  g as v,
  h as y,
  m as b,
  o as x,
  p as ee,
  w as S,
  x as C,
  y as w,
} from "./shared-lib.W6te6cXm.mjs";
import { t as te } from "./Parts-ISc5PT.Do1ptRxj.mjs";
function T({ name: e, style: t }) {
  return s(`svg`, {
    className: `nl-di`,
    viewBox: `0 0 33 21`,
    "aria-hidden": `true`,
    style: t,
    children: (U[e] || U.snow)
      .split(` `)
      .map((e) => e.split(`,`).map(Number))
      .map(([e, t], n) =>
        s(
          `circle`,
          { cx: 1.5 + e * 3, cy: 1.5 + t * 3, r: `.9`, style: { transitionDelay: n * 12 + `ms` } },
          n
        )
      ),
  });
}
function ne(e, t, n) {
  let [a, o] = i(``),
    [s, c] = i([]),
    [l, d] = i(!1),
    f = (e) => `nordlys reserve --gpus ${e.gpus} --site ${t} --term ${e.term}`,
    p = (e) => [
      { cls: `ok`, mark: `✓`, key: `capacity`, val: `Hall A \xb7 ${q(e.gpus)} \xd7 H200` },
      { cls: `ok`, mark: `✓`, key: `fabric`, val: `3.2 Tb/s InfiniBand` },
      { cls: `ok`, mark: `✓`, key: `power`, val: `98.7% hydro · PUE 1.08` },
      { cls: `hi`, mark: `→`, key: `quote`, val: `${J(e.gpus * e.rate * 730)} / month` },
      { cls: `hi`, mark: `→`, key: `first job`, val: X(Y(e.gpus)) },
    ];
  return (
    u(() => {
      let t = e && e.length ? e : [{ gpus: 1024, term: `1y`, rate: 1.84 }];
      if (!n) {
        (o(f(t[0])), c(p(t[0])), d(!0));
        return;
      }
      let i = [],
        a = 0,
        s = (e, t) => {
          i.push(r.setTimeout(e, t));
        },
        l = () => {
          (i.forEach(clearTimeout), (i = []));
          let e = t[a++ % t.length],
            n = f(e),
            r = p(e);
          (o(``), c([]), d(!1));
          let u = 0,
            m = () => {
              (o(n.slice(0, ++u)), u < n.length ? s(m, 28 + Math.random() * 40) : s(h, 450));
            },
            h = () => {
              (r.forEach((e, t) => s(() => c((t) => [...t, e]), 220 * (t + 1))),
                s(() => d(!0), 220 * (r.length + 1)),
                s(l, 7e3));
            };
          s(m, 600);
        };
      return (s(l, 900), () => i.forEach(clearTimeout));
    }, [n, JSON.stringify(e), t]),
    { cmd: a, lines: s, done: l }
  );
}
function E(e) {
  let t = a(null),
    n = m(t),
    r = S(),
    i = !C() && !r,
    { cmd: c, lines: l, done: u } = ne(e.runs, e.site, i),
    d = z(16, 2.2, 32, n),
    f = 0,
    p = (e) =>
      e
        .split(/(\s+)/)
        .map((e, t) =>
          /^\s+$/.test(e) || !e
            ? e
            : s(
                `span`,
                {
                  className: `wd`,
                  children: Array.from(e).map((e, t) =>
                    s(
                      `span`,
                      {
                        className: `ch`,
                        style: { animationDelay: (0.15 + f++ * 0.022).toFixed(3) + `s` },
                        children: e,
                      },
                      t
                    )
                  ),
                },
                t
              )
        );
  return o(`section`, {
    ref: t,
    className: `nl-rh` + (i ? ` anim` : ``) + v(n),
    style: { ...e.style, paddingLeft: d, paddingRight: d, paddingBottom: z(32, 4, 56, n) },
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: K } }),
      s(`div`, {
        className: `bg`,
        "aria-hidden": `true`,
        children: s(x, {
          lightX: e.lightX,
          lightY: e.lightY,
          gain: e.gain,
          rib: 10,
          spread: 1.2,
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
      o(`div`, {
        className: `grid`,
        children: [
          o(`div`, {
            className: `l`,
            children: [
              s(`span`, {
                className: `eb mono up`,
                style: { animationDelay: `.05s`, "--y": `10px` },
                children: e.eyebrow,
              }),
              s(`h1`, {
                style: { fontSize: z(34, 4.2, 72, n) },
                "aria-label": e.title + ` ` + e.tone,
                children: o(`span`, {
                  "aria-hidden": `true`,
                  children: [
                    i ? p(e.title) : e.title,
                    ` `,
                    s(`span`, { className: `tone`, children: i ? p(e.tone) : e.tone }),
                  ],
                }),
              }),
              s(`p`, { className: `up`, style: { animationDelay: `.5s` }, children: e.text }),
              o(`div`, {
                className: `btns up`,
                style: { animationDelay: `.6s` },
                children: [H(e.button1, e.link1), H(e.button2, e.link2, !0)],
              }),
            ],
          }),
          o(`div`, {
            className: `term up`,
            style: { animationDelay: `.35s`, "--y": `40px`, animationDuration: `1.4s` },
            "aria-label": `Example reservation in the Nordlys command line`,
            children: [
              o(`div`, {
                className: `bar mono`,
                children: [
                  o(`span`, { className: `dots`, children: [s(`i`, {}), s(`i`, {}), s(`i`, {})] }),
                  s(`span`, { children: e.termTitle }),
                ],
              }),
              o(`div`, {
                className: `body`,
                children: [
                  o(`div`, {
                    children: [
                      s(`span`, { className: `pr`, children: `$ ` }),
                      s(`span`, { className: `cmd`, children: c }),
                      l.length === 0 ? s(`span`, { className: `caret` }) : null,
                    ],
                  }),
                  l.map((e, t) =>
                    o(
                      `div`,
                      {
                        children: [
                          s(`span`, { className: e.cls, children: e.mark }),
                          ` `,
                          s(`span`, { className: `k`, children: e.key }),
                          s(`span`, { className: e.cls === `hi` ? `hi` : ``, children: e.val }),
                        ],
                      },
                      t
                    )
                  ),
                  u
                    ? o(`div`, {
                        children: [
                          s(`span`, { className: `pr`, children: `$ ` }),
                          s(`span`, { className: `caret` }),
                        ],
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      }),
      o(`div`, {
        className: `chips`,
        style: { marginTop: z(48, 6, 88, n) },
        children: [
          o(`span`, {
            className: `chips-lb mono up`,
            style: { animationDelay: `.7s` },
            children: [s(`i`, {}), e.chipsLabel],
          }),
          s(`div`, {
            className: `chips-in`,
            children: (e.chips || []).map((e, t) =>
              o(
                `span`,
                {
                  className: `nl-chip lit up`,
                  tabIndex: 0,
                  style: { animationDelay: 0.85 + t * 0.08 + `s`, "--y": `12px` },
                  children: [s(T, { name: e.icon }), e.label],
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
function D(e) {
  let t = (t) =>
    (e.logos || []).map((e, n) =>
      o(
        `span`,
        {
          className: `lg`,
          children: [Z[e.icon] || Z.squares, s(`span`, { className: e.style, children: e.name })],
        },
        t + n
      )
    );
  return o(`div`, {
    className: `nl-mq`,
    style: e.style,
    "aria-label": `Customers`,
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: Q } }),
      o(`div`, {
        className: `in`,
        style: { animationDuration: (e.seconds || 40) + `s` },
        children: [
          t(`a`),
          s(`span`, { "aria-hidden": `true`, style: { display: `contents` }, children: t(`b`) }),
        ],
      }),
    ],
  });
}
function O(e) {
  let t = a(null),
    n = m(t),
    c = S(),
    l = h(t, `0px 0px -18% 0px`),
    [d, f] = i(!1);
  u(() => {
    let e = t.current;
    e && !C() && !c && e.getBoundingClientRect().top > r.innerHeight * 0.82 && f(!0);
  }, [c]);
  let p = n <= 600 ? 1 : n <= 960 ? 2 : 3,
    g = e.tiles || [],
    _ = (e) => {
      let t = e >= g.length - (g.length % p || p);
      return {
        borderRight: (e + 1) % p === 0 ? void 0 : `1px solid ${P}`,
        borderBottom: t ? void 0 : `1px solid ${P}`,
      };
    };
  return o(`div`, {
    ref: t,
    className: `nl-pt` + (d && !l ? ` pre` : ``) + v(n),
    style: e.style,
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: ie } }),
      o(`div`, {
        className: `head`,
        children: [s(V, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
      }),
      s(`div`, {
        className: `tiles`,
        style: { gridTemplateColumns: `repeat(${p},minmax(0,1fr))` },
        children: g.map((e, t) =>
          o(
            `article`,
            {
              className: `tile lit`,
              tabIndex: 0,
              style: {
                ..._(t),
                minHeight: z(240, 22, 300, n),
                padding: z(22, 2.4, 32, n),
                transitionDelay: d && l ? `0s,${t * 0.07}s,${t * 0.07}s` : void 0,
              },
              children: [
                s(T, { name: e.icon }),
                s(`h3`, { children: e.title }),
                s(`p`, { children: e.text }),
                o(`div`, {
                  className: `st mono`,
                  children: [
                    s(`span`, { children: e.statLabel }),
                    s(`b`, { style: { fontSize: z(20, 1.8, 26, n) }, children: e.stat }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
      o(`div`, {
        className: `foot`,
        children: [
          o(`div`, {
            className: `from mono`,
            children: [
              s(`span`, { children: e.fromLabel }),
              s(`b`, { style: { fontSize: z(28, 2.8, 44, n) }, children: e.price }),
              s(`span`, { children: e.unit }),
            ],
          }),
          e.button ? H(e.button, e.link) : null,
        ],
      }),
    ],
  });
}
function k(e) {
  let t = a(null),
    n = a(null),
    c = a(null),
    l = m(t),
    d = S(),
    f = C(),
    [p, h] = i(0),
    [g, _] = i(0),
    y = l <= 960;
  u(() => {
    if (f) return;
    let e = 0,
      i = () => {
        e = 0;
        let i = r.innerHeight;
        if (
          (y ||
            Array.from(n.current?.querySelectorAll(`.st`) || []).forEach((e, t) => {
              let n = e.getBoundingClientRect();
              n.top <= i * 0.55 && n.bottom >= i * 0.55 && h(t);
            }),
          !d && t.current)
        ) {
          let e = t.current.getBoundingClientRect();
          _(1 - B((i * 0.85 - e.top) / (i * 0.6)));
        }
      },
      a = () => {
        e ||= requestAnimationFrame(i);
      };
    return (
      i(),
      r.addEventListener(`scroll`, a, { passive: !0 }),
      r.addEventListener(`resize`, a),
      () => {
        (r.removeEventListener(`scroll`, a),
          r.removeEventListener(`resize`, a),
          cancelAnimationFrame(e));
      }
    );
  }, [f, d, y]);
  let b = r !== void 0 && !f ? r.innerHeight : 900,
    x = e.steps || [];
  return o(`div`, {
    ref: t,
    className: `nl-hs` + (e.mesh ? ` mesh` : ``) + v(l),
    style: e.style,
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: $ } }),
      o(`div`, {
        className: `vis`,
        style: { height: y ? b * 0.56 : b - 140 },
        children: [
          s(`div`, {
            className: `frame`,
            ref: c,
            style: { clipPath: `inset(${g * 10}% ${g * 8}% ${g * 10}% ${g * 8}%)` },
            children: x.map((e, t) =>
              s(
                `img`,
                {
                  className: t === p ? `on` : ``,
                  src: e.image?.src || ae[t % 3],
                  alt: e.image?.alt || ``,
                  loading: `lazy`,
                },
                t
              )
            ),
          }),
          o(`div`, {
            className: `meta mono`,
            children: [
              s(`span`, { children: e.label }),
              o(`b`, {
                style: { fontSize: z(40, 4, 64, l) },
                children: [
                  String(p + 1).padStart(2, `0`),
                  o(`small`, { children: [`/ `, String(x.length).padStart(2, `0`)] }),
                ],
              }),
            ],
          }),
        ],
      }),
      o(`div`, {
        className: `steps`,
        ref: n,
        children: [
          s(V, { n: e.number, t: e.title, s: e.sub }),
          x.map((e, t) =>
            o(
              `div`,
              {
                className: `st` + (t === p ? ` on` : ``),
                style: { minHeight: b * 0.72 },
                children: [
                  o(`span`, { className: `tg mono`, children: [s(T, { name: e.icon }), e.tag] }),
                  s(`h3`, { style: { fontSize: z(40, 4.6, 80, l) }, children: e.title }),
                  s(`p`, { children: e.text }),
                  o(`div`, {
                    className: `kv mono`,
                    children: [
                      o(`div`, {
                        children: [s(`span`, { children: e.k1 }), s(`b`, { children: e.v1 })],
                      }),
                      o(`div`, {
                        children: [s(`span`, { children: e.k2 }), s(`b`, { children: e.v2 })],
                      }),
                    ],
                  }),
                ],
              },
              t
            )
          ),
        ],
      }),
    ],
  });
}
function re({ v: e, i: t, total: n, w: c, armedAll: l, mesh: d }) {
  let f = a(null),
    p = a(null),
    m = h(f, `0px 0px -22% 0px`),
    g = S(),
    [_, v] = i({ clip: 0, y: 0 });
  u(() => {
    if (C() || g) return;
    let e = 0,
      t = () => {
        e = 0;
        let t = p.current;
        if (!t) return;
        let n = t.getBoundingClientRect(),
          i = r.innerHeight,
          a = 1 - B((i * 0.92 - n.top) / (i * 0.52)),
          o = -4 + 8 * B((i - n.top) / (i + n.height));
        v({ clip: a, y: o });
      },
      n = () => {
        e ||= requestAnimationFrame(t);
      };
    return (
      t(),
      r.addEventListener(`scroll`, n, { passive: !0 }),
      () => {
        (r.removeEventListener(`scroll`, n), cancelAnimationFrame(e));
      }
    );
  }, [g]);
  let y = z(20, 2.6, 36, c),
    b = (e) => ({ transitionDelay: l && m ? 0.3 + e * 0.08 + `s` : void 0 });
  return o(`div`, {
    ref: f,
    className: `row` + (t % 2 ? ` flip` : ``) + (l && !m ? ` pre` : ``),
    style: { gap: z(24, 5, 88, c), marginTop: t ? z(96, 11, 180, c) : 0 },
    children: [
      o(`div`, {
        className: `vq`,
        children: [
          o(`div`, {
            className: `top`,
            style: { padding: `0 ${y}px ${z(64, 9, 140, c)}px` },
            children: [
              s(`i`, { className: `ln l-top` }),
              o(`span`, {
                className: `logo fx`,
                style: { ...b(0), fontSize: z(22, 2.2, 30, c) },
                children: [Z[e.logo] || Z.squares, e.brand],
              }),
              s(`span`, { className: `mono fx`, style: b(1), children: e.since }),
            ],
          }),
          o(`blockquote`, {
            style: {
              padding: `${c <= 600 ? 64 : z(80, 11, 170, c)}px ${y}px ${z(28, 3, 40, c)}px`,
              fontSize: z(20, 1.9, 28, c),
            },
            children: [
              s(`i`, { className: `ln l-h1` }),
              s(`i`, { className: `ln l-r` }),
              s(`i`, { className: `ln l-h2` }),
              s(`i`, { className: `node` }),
              o(`span`, {
                className: `q fx`,
                style: b(2),
                children: [
                  `“`,
                  e.quote,
                  ` `,
                  s(`span`, { className: `tone`, children: e.tone }),
                  `”`,
                ],
              }),
            ],
          }),
          o(`div`, {
            className: `by`,
            style: { padding: `22px ${y}px ${z(48, 6, 88, c)}px` },
            children: [
              s(`i`, { className: `ln l-bot` }),
              o(`span`, { className: `mono fx`, style: b(3), children: [`—`, e.by] }),
              o(`span`, {
                className: `kpi mono fx`,
                style: b(4),
                children: [
                  s(`b`, { style: { fontSize: z(18, 1.6, 22, c) }, children: e.kpi }),
                  e.kpiLabel,
                ],
              }),
            ],
          }),
        ],
      }),
      o(`figure`, {
        ref: p,
        className: `ph`,
        style: {
          minHeight: z(380, 40, 620, c),
          clipPath: `inset(${_.clip * 12}% ${_.clip * 10}% ${_.clip * 12}% ${_.clip * 10}%)`,
        },
        children: [
          s(`img`, {
            src: e.image?.src || se[e.photo] || ce[t % 2],
            alt: e.alt || e.image?.alt || ``,
            loading: `lazy`,
            style: { transform: `translateY(${_.y}%)` },
          }),
          s(`i`, { className: `crn c1` }),
          s(`i`, { className: `crn c2` }),
          s(`span`, {
            className: `idx mono`,
            children:
              e.index || `${String(t + 1).padStart(2, `0`)} / ${String(n).padStart(2, `0`)}`,
          }),
          e.chip
            ? o(`span`, {
                className: `nl-chip lit`,
                tabIndex: 0,
                children: [s(T, { name: e.chipIcon }), e.chip],
              })
            : null,
        ],
      }),
    ],
  });
}
function A(e) {
  let t = a(null),
    n = m(t),
    c = S(),
    [l, d] = i(!1);
  u(() => {
    let e = t.current;
    e && !C() && !c && e.getBoundingClientRect().top > r.innerHeight * 0.78 && d(!0);
  }, [c]);
  let f = e.rows || [];
  return o(`div`, {
    ref: t,
    className: `nl-vr` + (e.mesh ? ` mesh` : ``) + v(n),
    style: e.style,
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: oe } }),
      e.title
        ? o(`div`, {
            className: `head`,
            style: { marginBottom: z(48, 6, 88, n) },
            children: [s(V, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
          })
        : null,
      f.map((t, r) => s(re, { v: t, i: r, total: f.length, w: n, armedAll: l, mesh: e.mesh }, r)),
    ],
  });
}
function j(e) {
  let n = a(null),
    c = m(n),
    l = S(),
    d = h(n, `0px 0px -15% 0px`),
    [f, p] = i(!1),
    [g, _] = i(0);
  u(() => {
    let e = n.current;
    e && !C() && !l && e.getBoundingClientRect().top > r.innerHeight * 0.85 && p(!0);
  }, [l]);
  let y = `nl-fq-` + t().replace(/[^a-z0-9]/gi, ``);
  return o(`div`, {
    ref: n,
    className: `nl-fq` + (f && !d ? ` pre` : ``) + v(c),
    style: e.style,
    children: [
      w(),
      s(`style`, { dangerouslySetInnerHTML: { __html: le } }),
      o(`div`, {
        className: `side`,
        children: [
          s(V, { n: e.number, t: e.title, s: e.sub }),
          s(`p`, { children: e.text }),
          e.button ? H(e.button, e.link, !0) : null,
        ],
      }),
      s(`div`, {
        className: `qa`,
        children: (e.items || []).map((e, t) =>
          o(
            `div`,
            {
              className: `qi` + (g === t ? ` on` : ``),
              style: f && d ? { transitionDelay: t * 0.06 + `s` } : void 0,
              children: [
                o(`button`, {
                  type: `button`,
                  "aria-expanded": g === t,
                  "aria-controls": y + t,
                  onClick: () => _(g === t ? -1 : t),
                  style: { fontSize: z(18, 1.6, 24, c) },
                  children: [
                    s(`span`, { children: e.q }),
                    s(`i`, { className: `pm`, "aria-hidden": `true` }),
                  ],
                }),
                s(`div`, {
                  className: `ans`,
                  id: y + t,
                  children: s(`div`, { children: s(`p`, { children: e.a }) }),
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
var M,
  N,
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
  Y,
  X,
  Z,
  Q,
  ie,
  $,
  ae,
  oe,
  se,
  ce,
  le,
  ue = e(() => {
    (n(),
      c(),
      l(),
      p(),
      ee(),
      g(),
      te(),
      (M = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (N = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (P = `rgba(243,243,243,.12)`),
      (F = `cubic-bezier(.16,1,.3,1)`),
      (I = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (L = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (R = `-webkit-mask-image:${b};mask-image:${b};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px`),
      (z = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (B = (e) => Math.max(0, Math.min(1, e))),
      (V = ({ n: e, t, s: n }) =>
        o(`div`, {
          className: `lab`,
          children: [
            e ? s(`span`, { className: `n`, children: e }) : null,
            s(`span`, { children: t }),
            s(`span`, { className: `s`, children: n }),
          ],
        })),
      (H = (e, t, n = !1) =>
        s(_, { label: e, link: t, ghost: n, newTab: !1, submit: !1, visual: !1, full: !1 })),
      (U = {
        wind: `6,0 0,1 1,1 2,1 3,1 4,1 5,1 6,1 8,1 10,2 0,3 1,3 2,3 3,3 4,3 5,3 6,3 8,3 6,4 0,6 2,6 4,6 6,6 8,6 10,6`,
        snow: `5,0 2,1 5,1 8,1 3,2 5,2 7,2 0,3 1,3 2,3 3,3 4,3 5,3 6,3 7,3 8,3 9,3 10,3 3,4 5,4 7,4 2,5 5,5 8,5 5,6`,
        hydro: `6,0 7,0 5,1 6,1 4,2 5,2 3,3 4,3 5,3 6,3 7,3 8,3 5,4 6,4 4,5 5,5 3,6 4,6`,
        shield: `3,0 4,0 5,0 6,0 7,0 2,1 8,1 2,2 8,2 1,3 2,3 3,3 4,3 5,3 6,3 7,3 8,3 9,3 1,4 5,4 9,4 1,5 5,5 9,5 1,6 2,6 3,6 4,6 5,6 6,6 7,6 8,6 9,6`,
        drop: `5,0 4,1 6,1 3,2 7,2 2,3 8,3 2,4 5,4 8,4 3,5 7,5 4,6 5,6 6,6`,
        heat: `2,0 3,0 4,0 5,0 6,0 7,0 8,0 1,1 9,1 0,2 4,2 5,2 6,2 10,2 0,3 3,3 7,3 10,3 0,4 4,4 5,4 6,4 10,4 1,5 9,5 2,6 3,6 4,6 6,6 7,6 8,6`,
        chip: `1,0 3,0 5,0 7,0 9,0 0,1 1,1 2,1 3,1 4,1 5,1 6,1 7,1 8,1 9,1 10,1 0,2 10,2 0,3 3,3 4,3 5,3 6,3 7,3 10,3 0,4 10,4 0,5 1,5 2,5 3,5 4,5 5,5 6,5 7,5 8,5 9,5 10,5 1,6 3,6 5,6 7,6 9,6`,
        pulse: `4,0 4,1 3,2 5,2 0,3 1,3 3,3 5,3 7,3 9,3 10,3 2,4 6,4 8,4 6,5 8,5 7,6`,
      }),
      (W = Object.keys(U)),
      (G = `
.nl-di{width:34px;height:22px;flex:none;color:#F3F3F3;overflow:visible}
.nl-di circle{fill:currentColor;opacity:.55;transition:opacity .35s,fill .35s}
.lit .nl-di{transition:filter .5s}
.lit:hover .nl-di,.lit:focus-visible .nl-di{filter:drop-shadow(0 0 4px rgba(110,75,255,.9))}
.lit:hover .nl-di circle,.lit:focus-visible .nl-di circle{opacity:1;fill:#C9BDFF}
.nl-chip{display:inline-flex;align-items:center;gap:16px;padding:14px 20px 14px 16px;background:rgba(10,8,18,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:inset 0 0 0 1px ${P};font:400 11px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#F3F3F3;transition:box-shadow .4s;box-sizing:border-box}
.nl-chip:hover{box-shadow:inset 0 0 0 1px rgba(201,189,255,.45)}
.nl-chip .nl-di{width:28px;height:18px}
`),
      (K = `
.nl-rh{${N};position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding-top:120px;overflow:hidden;isolation:isolate;width:100%}
.nl-rh .mono{${M}}
.nl-rh .bg{position:absolute;inset:0;z-index:-2}
.nl-rh::after{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.12) 55%,rgba(0,0,0,.3)),linear-gradient(180deg,rgba(0,0,0,.4),transparent 30%,rgba(0,0,0,.55))}
.nl-rh .grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-rh .l{grid-column:1 / span 6;display:flex;flex-direction:column;gap:26px}
.nl-rh .eb{display:flex;align-items:center;gap:10px;color:#A6A6A6}
.nl-rh .eb::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;animation:nl-rh-blink 1.6s infinite}
@keyframes nl-rh-blink{50%{opacity:.25}}
.nl-rh h1{margin:0;font-weight:400;letter-spacing:-.04em;line-height:.98}
.nl-rh h1 .tone{color:#A6A6A6}
.nl-rh .wd{display:inline-block;white-space:nowrap}
.nl-rh .ch{display:inline-block}
.nl-rh .l p{margin:0;color:#A6A6A6;font-weight:400;max-width:42ch;text-wrap:balance}
.nl-rh .btns{display:flex;gap:8px;flex-wrap:wrap}
.nl-rh .term{grid-column:8 / span 5;position:relative;background:rgba(10,8,18,.5);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%);box-shadow:inset 0 0 0 1px ${P},0 40px 80px -30px rgba(0,0,0,.9)}
.nl-rh .term::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,#C9BDFF 30%,#6E4BFF 70%,transparent)}
.nl-rh .bar{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid ${P};color:#A6A6A6}
.nl-rh .dots{display:flex;gap:6px}
.nl-rh .dots i{width:7px;height:7px;box-shadow:inset 0 0 0 1px #5E5E5E}
.nl-rh .body{padding:18px 16px 20px;min-height:236px;font:400 12.5px/1.85 "Geist Mono",monospace;color:#A6A6A6;font-variant-numeric:tabular-nums;white-space:pre;overflow:hidden;box-sizing:border-box}
.nl-rh .pr{color:#C9BDFF}
.nl-rh .cmd,.nl-rh .hi{color:#F3F3F3}
.nl-rh .ok{color:#7FD4A8}
.nl-rh .k{display:inline-block;width:12ch;color:#5E5E5E}
.nl-rh .caret{display:inline-block;width:7px;height:14px;background:#C9BDFF;vertical-align:-2px;margin-left:2px;animation:nl-rh-car 1s steps(1) infinite}
@keyframes nl-rh-car{50%{opacity:0}}
.nl-rh .chips{display:flex;justify-content:space-between;align-items:center;gap:16px 24px;flex-wrap:wrap;padding-top:clamp(16px,1.6vw,22px);border-top:1px solid ${P}}
.nl-rh .chips-lb{display:flex;align-items:center;gap:10px;color:#A6A6A6}
.nl-rh .chips-lb i{width:24px;height:1px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6))}
.nl-rh .chips-in{display:flex;gap:8px;flex-wrap:wrap}
@keyframes nl-rh-ch{from{opacity:0;filter:blur(16px);transform:translateY(.18em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-rh-up{from{opacity:0;transform:translateY(var(--y,14px))}to{opacity:1;transform:none}}
.nl-rh.anim h1 .ch{animation:nl-rh-ch 1.3s cubic-bezier(.215,.61,.355,1) both}
.nl-rh.anim .up{animation:nl-rh-up 1.1s ${F} both}
.nl-rh.is-md .l,.nl-rh.is-md .term{grid-column:1 / -1}
.nl-rh.is-md .term{margin-top:28px}
.nl-rh.is-sm .nl-chip{padding:12px 16px 12px 12px;width:100%}
.nl-rh.is-sm .chips-in{width:100%}
.nl-rh.is-sm .body{font-size:11px;min-height:220px;white-space:pre-wrap;word-break:break-word}
.nl-rh.is-sm .k{width:10ch}
${G}
`),
      (q = (e) => e.toLocaleString(`en-US`)),
      (J = (e) =>
        e >= 1e6
          ? `$` + (e / 1e6).toFixed(e >= 1e7 ? 1 : 2) + `M`
          : `$` + Math.round(e / 1e3) + `k`),
      (Y = (e) => (e <= 512 ? 3 : e <= 4096 ? 11 : 30)),
      (X = (e) =>
        new Date(Date.now() + e * 864e5).toLocaleDateString(`en-GB`, {
          day: `2-digit`,
          month: `short`,
          year: `numeric`,
        })),
      (E.defaultProps = {
        eyebrow: `N-01 · Narvik · Accepting reservations`,
        title: `Reserve a cluster`,
        tone: `in the cold.`,
        text: `Pick a size, pick a term, and run on GPUs cooled by Arctic air and powered by hydro. Most clusters are live within eleven days.`,
        button1: `See the platform`,
        link1: `#platform`,
        button2: `How it works`,
        link2: `#how`,
        termTitle: `nordlys-cli — n-01`,
        site: `n-01`,
        runs: [
          { gpus: 1024, term: `1y`, rate: 1.84 },
          { gpus: 256, term: `on-demand`, rate: 2.24 },
          { gpus: 4096, term: `3y`, rate: 1.62 },
        ],
        chipsLabel: `Standard on every cluster`,
        chips: [
          { label: `Air-cooled`, icon: `wind` },
          { label: `Hydro-powered`, icon: `hydro` },
          { label: `EEA sovereign`, icon: `shield` },
        ],
        lightX: 0.74,
        lightY: 0.56,
        gain: 2.8,
        seed: 23,
      }),
      d(E, {
        eyebrow: { type: f.String, title: `Eyebrow` },
        title: { type: f.String, title: `Title` },
        tone: { type: f.String, title: `Title (grey)` },
        text: { type: f.String, title: `Text`, displayTextArea: !0 },
        button1: { type: f.String, title: `Button 1` },
        link1: { type: f.Link, title: `Link 1` },
        button2: { type: f.String, title: `Button 2` },
        link2: { type: f.Link, title: `Link 2` },
        termTitle: { type: f.String, title: `Window title` },
        site: { type: f.String, title: `Site code` },
        runs: {
          type: f.Array,
          title: `Typed runs`,
          control: {
            type: f.Object,
            controls: {
              gpus: { type: f.Number, title: `GPUs`, min: 8, max: 65536, step: 8 },
              term: { type: f.String, title: `Term` },
              rate: { type: f.Number, title: `$ / GPU-hr`, min: 0.1, max: 10, step: 0.01 },
            },
          },
        },
        chipsLabel: { type: f.String, title: `Chips label` },
        chips: {
          type: f.Array,
          title: `Chips`,
          control: {
            type: f.Object,
            controls: {
              label: { type: f.String, title: `Label` },
              icon: { type: f.Enum, title: `Icon`, options: W },
            },
          },
        },
        lightX: { type: f.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: f.Number, title: `Light Y`, min: 0, max: 1, step: 0.01 },
        gain: { type: f.Number, title: `Gain`, min: 0.5, max: 4, step: 0.05 },
        seed: { type: f.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }),
      (Z = {
        squares: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            s(`rect`, { x: `2`, y: `2`, width: `8`, height: `8` }),
            s(`rect`, { x: `12`, y: `2`, width: `8`, height: `8`, opacity: `.45` }),
            s(`rect`, { x: `2`, y: `12`, width: `8`, height: `8`, opacity: `.45` }),
            s(`rect`, { x: `12`, y: `12`, width: `8`, height: `8` }),
          ],
        }),
        rings: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            s(`circle`, { cx: `11`, cy: `11`, r: `9` }),
            s(`circle`, { cx: `11`, cy: `11`, r: `5` }),
            s(`circle`, { cx: `11`, cy: `11`, r: `1.4`, fill: `currentColor` }),
          ],
        }),
        vee: s(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: s(`path`, { d: `M2 4h5l4 9 4-9h5l-7 15h-4z` }),
        }),
        helix: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            s(`path`, { d: `M2 11c2.5-6 5.5-6 9 0s6.5 6 9 0` }),
            s(`path`, { d: `M2 11c2.5 6 5.5 6 9 0s6.5-6 9 0`, opacity: `.5` }),
          ],
        }),
        hex: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            s(`path`, { d: `M11 2 19 6.5v9L11 20 3 15.5v-9z` }),
            s(`path`, {
              d: `M11 7 15 9.3v4.4L11 16l-4-2.3V9.3z`,
              fill: `currentColor`,
              stroke: `none`,
            }),
          ],
        }),
        nodes: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            s(`circle`, { cx: `4.5`, cy: `16`, r: `2.5` }),
            s(`circle`, { cx: `11`, cy: `5`, r: `2.5` }),
            s(`circle`, { cx: `17.5`, cy: `16`, r: `2.5` }),
            s(`path`, {
              d: `M4.5 16 11 5l6.5 11z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.2`,
            }),
          ],
        }),
        orbit: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          children: [
            s(`circle`, { cx: `11`, cy: `11`, r: `4`, fill: `currentColor`, stroke: `none` }),
            s(`ellipse`, {
              cx: `11`,
              cy: `11`,
              rx: `9.5`,
              ry: `4`,
              transform: `rotate(-25 11 11)`,
            }),
          ],
        }),
        cross: o(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            s(`rect`, { x: `2`, y: `9.5`, width: `18`, height: `3` }),
            s(`rect`, { x: `9.5`, y: `2`, width: `3`, height: `18` }),
            s(`rect`, { x: `5`, y: `5`, width: `2`, height: `2` }),
            s(`rect`, { x: `15`, y: `15`, width: `2`, height: `2` }),
          ],
        }),
      }),
      (Q = `
.nl-mq{${N};border-block:1px solid ${P};overflow:hidden;white-space:nowrap;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);width:100%}
.nl-mq .in{display:inline-flex;animation:nl-mq 40s linear infinite}
.nl-mq:hover .in{animation-play-state:paused}
@keyframes nl-mq{to{transform:translateX(-50%)}}
.nl-mq .lg{display:inline-flex;align-items:center;gap:10px;padding:26px 44px;font-size:18px;letter-spacing:-.03em;color:#A6A6A6;transition:color .3s}
.nl-mq .lg:hover{color:#F3F3F3}
.nl-mq .lg svg{width:20px;height:20px}
.nl-mq .bold{font-weight:500}
.nl-mq .light{font-weight:400;letter-spacing:-.05em}
.nl-mq .mono{font-family:"Geist Mono",monospace;font-size:.8em;letter-spacing:.06em;text-transform:uppercase;font-weight:400}
@media (prefers-reduced-motion:reduce){.nl-mq .in{animation:none}}
`),
      (D.defaultProps = {
        seconds: 40,
        logos: [
          { name: `Tensorfield`, icon: `squares`, style: `bold` },
          { name: `quorum`, icon: `rings`, style: `light` },
          { name: `Vektor`, icon: `vee`, style: `mono` },
          { name: `Helix AI`, icon: `helix`, style: `bold` },
          { name: `Kernel`, icon: `hex`, style: `mono` },
          { name: `synapse`, icon: `nodes`, style: `light` },
          { name: `Orbit Labs`, icon: `orbit`, style: `bold` },
          { name: `Photon`, icon: `cross`, style: `mono` },
        ],
      }),
      d(D, {
        logos: {
          type: f.Array,
          title: `Logos`,
          control: {
            type: f.Object,
            controls: {
              name: { type: f.String, title: `Name` },
              icon: { type: f.Enum, title: `Mark`, options: Object.keys(Z) },
              style: {
                type: f.Enum,
                title: `Type`,
                options: [`bold`, `light`, `mono`],
                optionTitles: [`Bold`, `Light`, `Mono`],
              },
            },
          },
        },
        seconds: { type: f.Number, title: `Loop`, min: 10, max: 120, unit: `s` },
      }),
      (ie = `
.nl-pt{${N};width:100%}
.nl-pt .mono{${M}}
.nl-pt .lab{${I}}
.nl-pt .lab .n{${L}}
.nl-pt .lab .s{color:#A6A6A6}
.nl-pt .lab{transition:opacity 1.1s ${F},transform 1.1s ${F}}
.nl-pt.pre .lab{opacity:0;transform:translateY(20px)}
.nl-pt .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:40px}
.nl-pt .head p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch;text-wrap:balance}
.nl-pt .tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid ${P}}
.nl-pt .tile{position:relative;display:flex;flex-direction:column;gap:22px;transition:background .5s ${F},opacity 1.1s ${F},transform 1.1s ${F};outline:none;box-sizing:border-box}
.nl-pt .tile:hover{background:radial-gradient(90% 70% at 0% 0%,rgba(110,75,255,.12),transparent 70%)}
.nl-pt .tile h3{margin:0;font:400 13px/1.3 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
.nl-pt .tile p{margin:0;color:#A6A6A6;font-weight:400;max-width:32ch}
.nl-pt .st{margin-top:auto;display:flex;justify-content:space-between;align-items:baseline;gap:12px;border-top:1px solid ${P};padding-top:14px;color:#A6A6A6}
.nl-pt .st b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.04em;color:#F3F3F3;font-feature-settings:"zero" 1}
.nl-pt.pre .tile{opacity:0;transform:translateY(30px)}
.nl-pt .foot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;padding:22px 0;border-bottom:1px solid ${P}}
.nl-pt .from{display:flex;align-items:baseline;gap:14px;color:#A6A6A6}
.nl-pt .from b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.05em;color:#F3F3F3;font-feature-settings:"zero" 1}
${G}
`),
      (O.defaultProps = {
        number: `01`,
        title: `Platform`,
        sub: `Built into every hall`,
        intro: `Six things you get with every Nordlys cluster, whether you rent eight GPUs or a whole hall.`,
        tiles: [
          {
            icon: `snow`,
            title: `Air-cooled`,
            text: `Outside air below 10 °C for 300 days a year. No chillers to power.`,
            statLabel: `Chillers`,
            stat: `0`,
          },
          {
            icon: `hydro`,
            title: `Hydro-powered`,
            text: `Every kilowatt-hour from hydro and wind on the NO4 grid, matched hourly.`,
            statLabel: `Renewable`,
            stat: `98.7%`,
          },
          {
            icon: `drop`,
            title: `Zero water`,
            text: `Free-air cooling means no evaporative towers, in summer or winter.`,
            statLabel: `Water / year`,
            stat: `0 L`,
          },
          {
            icon: `heat`,
            title: `Closed-loop heat`,
            text: `Waste heat leaves at 35 °C and warms Narvik’s district network.`,
            statLabel: `Reused`,
            stat: `41 GWh`,
          },
          {
            icon: `chip`,
            title: `Dedicated fabric`,
            text: `Every pod gets its own 3.2 Tb/s InfiniBand fabric. No noisy neighbours.`,
            statLabel: `Hardware`,
            stat: `H200 · B300`,
          },
          {
            icon: `pulse`,
            title: `Live telemetry`,
            text: `PUE, load and carbon metered every hour and exposed through the API.`,
            statLabel: `Uptime`,
            stat: `99.995%`,
          },
        ],
        fromLabel: `From`,
        price: `$1.62`,
        unit: `/ GPU-hour, all-in`,
        button: `Request a quote`,
        link: `#start`,
      }),
      d(O, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        tiles: {
          type: f.Array,
          title: `Tiles`,
          control: {
            type: f.Object,
            controls: {
              icon: { type: f.Enum, title: `Icon`, options: W },
              title: { type: f.String, title: `Title` },
              text: { type: f.String, title: `Text`, displayTextArea: !0 },
              statLabel: { type: f.String, title: `Stat label` },
              stat: { type: f.String, title: `Stat` },
            },
          },
        },
        fromLabel: { type: f.String, title: `Price label` },
        price: { type: f.String, title: `Price` },
        unit: { type: f.String, title: `Price unit` },
        button: { type: f.String, title: `Button` },
        link: { type: f.Link, title: `Link` },
      }),
      ($ = `
.nl-hs{${N};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;border-top:1px solid ${P};padding-top:22px;width:100%}
.nl-hs .mono{${M}}
.nl-hs .lab{${I};margin-bottom:12px}
.nl-hs .lab .n{${L}}
.nl-hs .lab .s{color:#A6A6A6}
.nl-hs .vis{grid-column:1 / span 6;position:sticky;top:96px;align-self:start;max-height:760px;display:flex;flex-direction:column;gap:16px}
.nl-hs .frame{position:relative;flex:1;overflow:hidden;min-height:0}
.nl-hs .frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1) brightness(.8);opacity:0;transform:scale(1.06);transition:opacity 1s ${F},transform 1.6s ${F}}
.nl-hs.mesh .frame img{${R}}
.nl-hs .frame img.on{opacity:1;transform:none}
.nl-hs .frame::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(110,75,255,.35),transparent 45%);mix-blend-mode:screen;pointer-events:none}
.nl-hs .meta{display:flex;justify-content:space-between;align-items:baseline;gap:16px;color:#A6A6A6}
.nl-hs .meta b{font-weight:300;line-height:1;letter-spacing:-.05em;color:#F3F3F3;font-variant-numeric:tabular-nums;font-family:"Inter Tight",sans-serif;text-transform:none}
.nl-hs .meta b small{font-size:.4em;color:#5E5E5E;margin-left:.2em}
.nl-hs .steps{grid-column:8 / span 5}
.nl-hs .st{display:flex;flex-direction:column;justify-content:center;gap:20px;opacity:.28;transition:opacity .6s ${F}}
.nl-hs .st.on{opacity:1}
.nl-hs .tg{display:flex;align-items:center;gap:14px;color:#C9BDFF}
.nl-hs .tg .nl-di{width:30px;height:20px;color:#C9BDFF}
.nl-hs .tg .nl-di circle{opacity:1}
.nl-hs h3{margin:0;font-weight:300;letter-spacing:-.055em;line-height:.88}
.nl-hs .st p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch}
.nl-hs .kv{display:flex;gap:28px;border-top:1px solid ${P};padding-top:14px}
.nl-hs .kv div{display:flex;flex-direction:column;gap:6px}
.nl-hs .kv span{color:#A6A6A6}
.nl-hs .kv b{font:400 22px/1 "Geist Mono",monospace;letter-spacing:-.04em;color:#C9BDFF;text-transform:none}
.nl-hs.is-md .vis{grid-column:1 / -1;position:relative;top:auto}
.nl-hs.is-md .steps{grid-column:1 / -1}
.nl-hs.is-md .st{min-height:0!important;padding:48px 0;opacity:1}
${G}
`),
      (ae = [y.airIntake, y.waterFree, y.heatRecovery]),
      (k.defaultProps = {
        number: `02`,
        title: `How it works`,
        sub: `The cold does three jobs`,
        label: `How it works`,
        mesh: !0,
        steps: [
          {
            icon: `wind`,
            tag: `01 · Air`,
            title: `Air`,
            text: `Outside air below 10 °C for 300 days a year. Fans move it through the halls; there are no chillers to power.`,
            k1: `Chillers`,
            v1: `0`,
            k2: `PUE`,
            v2: `1.09`,
            image: void 0,
          },
          {
            icon: `drop`,
            tag: `02 · Water`,
            title: `Water`,
            text: `Free-air cooling means no evaporative towers. The halls use no water for cooling, in summer or winter.`,
            k1: `Water / year`,
            v1: `0 L`,
            k2: `Towers`,
            v2: `0`,
            image: void 0,
          },
          {
            icon: `heat`,
            tag: `03 · Heat`,
            title: `Heat`,
            text: `Waste heat leaves the halls at 35 °C and flows into Narvik’s district heating network.`,
            k1: `Heat reused`,
            v1: `41 GWh`,
            k2: `Homes`,
            v2: `4,200`,
            image: void 0,
          },
        ],
      }),
      d(k, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        label: { type: f.String, title: `Photo label` },
        mesh: { type: f.Boolean, title: `Photo mesh` },
        steps: {
          type: f.Array,
          title: `Steps`,
          control: {
            type: f.Object,
            controls: {
              image: { type: f.ResponsiveImage, title: `Photo` },
              icon: { type: f.Enum, title: `Icon`, options: W },
              tag: { type: f.String, title: `Tag` },
              title: { type: f.String, title: `Title` },
              text: { type: f.String, title: `Text`, displayTextArea: !0 },
              k1: { type: f.String, title: `Fact 1` },
              v1: { type: f.String, title: `Value 1` },
              k2: { type: f.String, title: `Fact 2` },
              v2: { type: f.String, title: `Value 2` },
            },
          },
        },
      }),
      (oe = `
.nl-vr{${N};width:100%}
.nl-vr .mono{${M}}
.nl-vr .lab{${I}}
.nl-vr .lab .n{${L}}
.nl-vr .lab .s{color:#A6A6A6}
.nl-vr .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.nl-vr .head p{margin:0;color:#A6A6A6;font-weight:400;max-width:36ch;text-wrap:balance}
.nl-vr .row{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr)}
.nl-vr .row.flip{grid-template-columns:minmax(0,5fr) minmax(0,7fr)}
.nl-vr .row.flip .vq{order:2}
.nl-vr .vq{position:relative;display:flex;flex-direction:column}
.nl-vr .top{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.nl-vr blockquote{position:relative;margin:0;flex:1;display:flex;align-items:flex-end;font-weight:400;line-height:1.3;letter-spacing:-.012em;text-wrap:pretty}
.nl-vr blockquote .q{max-width:38ch}
.nl-vr blockquote .tone{color:#A6A6A6}
.nl-vr .by{position:relative;display:flex;justify-content:space-between;align-items:baseline;gap:16px}
.nl-vr .ln{position:absolute;background:${P};pointer-events:none;transition:transform .9s cubic-bezier(.87,0,.13,1)}
.nl-vr .l-top{left:0;top:0;bottom:0;width:1px;transform-origin:50% 0}
.nl-vr .l-h1{left:0;right:0;top:0;height:1px;transform-origin:0 50%;transition-delay:.45s}
.nl-vr .l-r{right:0;top:0;bottom:0;width:1px;background:linear-gradient(180deg,${P},#6E4BFF 72%,rgba(110,75,255,.15));transform-origin:50% 0;transition-delay:1.15s}
.nl-vr .l-h2{left:0;right:0;bottom:0;height:1px;transform-origin:100% 50%;transition-delay:1.7s}
.nl-vr .l-bot{left:0;top:0;bottom:0;width:1px;transform-origin:50% 0;transition-delay:2.3s}
.nl-vr .node{position:absolute;right:-4px;top:-4px;width:9px;height:9px;background:#F3F3F3;box-shadow:0 0 14px rgba(201,189,255,.5);transition:transform .5s cubic-bezier(.34,1.56,.64,1) 1s}
.nl-vr .logo{display:inline-flex;align-items:center;gap:12px;font-weight:500;letter-spacing:-.03em}
.nl-vr .logo svg{width:1.1em;height:1.1em;flex:none}
.nl-vr .top .mono{color:#A6A6A6;padding-top:8px}
.nl-vr .by .mono{font-size:11px}
.nl-vr .kpi{display:flex;align-items:baseline;gap:10px;color:#A6A6A6}
.nl-vr .kpi b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.04em;color:#F3F3F3}
.nl-vr .fx{transition:opacity 1s ${F},transform 1s ${F}}
.nl-vr .pre .l-top,.nl-vr .pre .l-r,.nl-vr .pre .l-bot{transform:scaleY(0)}
.nl-vr .pre .l-h1,.nl-vr .pre .l-h2{transform:scaleX(0)}
.nl-vr .pre .node{transform:scale(0)}
.nl-vr .pre .fx{opacity:0;transform:translateY(16px)}
.nl-vr .ph{position:relative;margin:0;overflow:hidden;background:#0A0A0A}
.nl-vr .ph img{position:absolute;left:0;width:100%;height:110%;top:-5%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.8);transition:filter 1.2s ${F}}
.nl-vr.mesh .ph img{${R}}
.nl-vr .ph::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.75)),radial-gradient(80% 60% at 100% 100%,rgba(110,75,255,.22),transparent 70%);pointer-events:none}
.nl-vr .row:hover .ph img{filter:grayscale(1) contrast(1.12) brightness(.92)}
.nl-vr .ph .nl-chip{position:absolute;left:16px;bottom:16px;z-index:1}
.nl-vr .ph .crn{position:absolute;width:14px;height:14px;z-index:1;border:0 solid rgba(243,243,243,.7)}
.nl-vr .ph .c1{top:14px;left:14px;border-top-width:1px;border-left-width:1px}
.nl-vr .ph .c2{top:14px;right:14px;border-top-width:1px;border-right-width:1px}
.nl-vr .ph .idx{position:absolute;top:18px;right:40px;z-index:1;color:rgba(243,243,243,.75)}
.nl-vr.is-md .row,.nl-vr.is-md .row.flip{grid-template-columns:1fr}
.nl-vr.is-md .row.flip .vq{order:0}
.nl-vr.is-md .ph{min-height:0!important;aspect-ratio:4/5}
.nl-vr.is-sm .by{flex-direction:column;gap:12px;padding-bottom:36px!important}
${G}
`),
      (se = {
        amara: y.amaraVisit,
        jonas: y.jonasSeated,
        erik: y.erik,
        ravi: y.ravi,
        lena: y.lena,
      }),
      (ce = [y.amaraVisit, y.jonasSeated]),
      (A.defaultProps = {
        number: `03`,
        title: `Voices`,
        sub: `From the teams on the floor`,
        intro: `Two of the labs training in Hall A, in their own words.`,
        mesh: !0,
        rows: [
          {
            logo: `squares`,
            brand: `Tensorfield`,
            since: `Customer since 2024`,
            quote: `Our training runs used to stall on thermal limits every summer. In Narvik they just keep going.`,
            tone: `Fewer restarts, steadier throughput, and a power bill we can plan around.`,
            by: `Amara Okafor, Head of Infrastructure`,
            kpi: `−38%`,
            kpiLabel: `job restarts`,
            image: void 0,
            photo: `amara`,
            alt: `Portrait of Amara Okafor`,
            index: ``,
            chip: `Live telemetry`,
            chipIcon: `pulse`,
          },
          {
            logo: `helix`,
            brand: `Helix AI`,
            since: `Customer since 2025`,
            quote: `We moved 512 GPUs north in eleven days. Same fabric, same tooling,`,
            tone: `and every kilowatt-hour now shows up as hydro on our carbon report.`,
            by: `Jonas Weber, CTO`,
            kpi: `98.7%`,
            kpiLabel: `renewable`,
            image: void 0,
            photo: `jonas`,
            alt: `Portrait of Jonas Weber`,
            index: ``,
            chip: `Hydro-powered`,
            chipIcon: `hydro`,
          },
        ],
      }),
      d(A, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title`, description: `Empty hides the heading` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        mesh: { type: f.Boolean, title: `Photo mesh` },
        rows: {
          type: f.Array,
          title: `Quotes`,
          control: {
            type: f.Object,
            controls: {
              image: { type: f.ResponsiveImage, title: `Portrait` },
              photo: {
                type: f.Enum,
                title: `Photo`,
                options: [`amara`, `jonas`, `erik`, `ravi`, `lena`],
                optionTitles: [`Amara`, `Jonas`, `Erik`, `Ravi`, `Lena`],
                description: `Used when no portrait is set`,
              },
              alt: { type: f.String, title: `Alt text` },
              index: { type: f.String, title: `Photo label`, description: `Empty: 01 / 02` },
              logo: { type: f.Enum, title: `Mark`, options: Object.keys(Z) },
              brand: { type: f.String, title: `Company` },
              since: { type: f.String, title: `Since` },
              quote: { type: f.String, title: `Quote`, displayTextArea: !0 },
              tone: { type: f.String, title: `Quote (grey)`, displayTextArea: !0 },
              by: { type: f.String, title: `Name, role` },
              kpi: { type: f.String, title: `KPI` },
              kpiLabel: { type: f.String, title: `KPI label` },
              chip: { type: f.String, title: `Chip` },
              chipIcon: { type: f.Enum, title: `Chip icon`, options: W },
            },
          },
        },
      }),
      (le = `
.nl-fq{${N};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;border-top:1px solid ${P};padding-top:22px;width:100%}
.nl-fq .mono{${M}}
.nl-fq .lab{${I}}
.nl-fq .lab .n{${L}}
.nl-fq .lab .s{color:#A6A6A6}
.nl-fq .lab{transition:opacity 1.1s ${F},transform 1.1s ${F}}
.nl-fq.pre .lab{opacity:0;transform:translateY(20px)}
.nl-fq .side{grid-column:1 / span 4;display:flex;flex-direction:column;gap:24px;align-items:flex-start}
.nl-fq .side p{margin:0;color:#A6A6A6;font-weight:400;max-width:30ch}
.nl-fq .qa{grid-column:6 / span 7;border-top:1px solid ${P}}
.nl-fq .qi{border-bottom:1px solid ${P};transition:opacity 1s ${F},transform 1s ${F}}
.nl-fq.pre .qi{opacity:0;transform:translateY(18px)}
.nl-fq button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:24px;padding:24px 0;background:none;border:0;color:#A6A6A6;font-family:"Inter Tight",sans-serif;font-weight:400;line-height:1.2;letter-spacing:-.025em;text-align:left;cursor:pointer;transition:color .3s}
.nl-fq button:hover,.nl-fq .qi.on button{color:#F3F3F3}
.nl-fq .pm{position:relative;width:14px;height:14px;flex:none}
.nl-fq .pm::before,.nl-fq .pm::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:currentColor;transition:transform .5s ${F}}
.nl-fq .pm::after{transform:rotate(90deg)}
.nl-fq .qi.on .pm::after{transform:rotate(0)}
.nl-fq .qi.on .pm{color:#C9BDFF}
.nl-fq .ans{display:grid;grid-template-rows:0fr;transition:grid-template-rows .6s ${F}}
.nl-fq .qi.on .ans{grid-template-rows:1fr}
.nl-fq .ans > div{overflow:hidden}
.nl-fq .ans p{margin:0;color:#A6A6A6;font-weight:400;max-width:58ch;padding-bottom:24px}
.nl-fq.is-md .side,.nl-fq.is-md .qa{grid-column:1 / -1}
`),
      (j.defaultProps = {
        number: `04`,
        title: `FAQ`,
        sub: `Before you reserve`,
        text: `Still unsure? An engineer answers within one working day.`,
        button: `Ask a question`,
        link: `#start`,
        items: [
          {
            q: `How fast can a cluster be ready?`,
            a: `Up to 512 GPUs are ready in about three days. Dedicated pods up to 4,096 GPUs are racked and burned in within eleven days. Larger builds are scheduled with you.`,
          },
          {
            q: `Where is my data stored?`,
            a: `In Norway, inside the EEA. Data never leaves the hall unless you move it, and sovereign tenants hold their own encryption keys.`,
          },
          {
            q: `Which hardware do you run?`,
            a: `NVIDIA H200 today, with B300 pods bookable from Q1 2027. Every pod sits on a dedicated 3.2 Tb/s InfiniBand fabric.`,
          },
          {
            q: `How is pricing calculated?`,
            a: `Per GPU-hour, all-in: power, cooling, fabric and checkpoint storage are included. Longer terms lower the hourly rate.`,
          },
          {
            q: `Can I bring my own stack?`,
            a: `Yes. Run Slurm, Kubernetes or bare metal, with your own images. Our engineers help with the first deployment.`,
          },
        ],
      }),
      d(j, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        text: { type: f.String, title: `Text`, displayTextArea: !0 },
        button: { type: f.String, title: `Button` },
        link: { type: f.Link, title: `Link` },
        items: {
          type: f.Array,
          title: `Questions`,
          control: {
            type: f.Object,
            controls: {
              q: { type: f.String, title: `Question` },
              a: { type: f.String, title: `Answer`, displayTextArea: !0 },
            },
          },
        },
      }));
  });
export { E as a, O as i, k as n, A as o, D as r, ue as s, j as t };
//# sourceMappingURL=Home04.CLJm4Q_Q.mjs.map
