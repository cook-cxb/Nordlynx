import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  I as t,
  R as n,
  _ as r,
  b as i,
  c as a,
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
  T as g,
  _,
  a as v,
  d as y,
  g as b,
  o as ee,
  p as te,
  w as x,
  x as S,
  y as C,
} from "./shared-lib.W6te6cXm.mjs";
import { t as ne } from "./Parts-ISc5PT.Do1ptRxj.mjs";
import { a as w, n as T, r as E, t as re } from "./Inner-d2rabs.CpMZmyL3.mjs";
function D(e, t = 0.85, i = `0px 0px -15% 0px`) {
  let a = x(),
    o = h(e, i),
    [s, c] = r(!1);
  return (
    u(() => {
      let r = e.current;
      r && !S() && !a && r.getBoundingClientRect().top > n.innerHeight * t && c(!0);
    }, [a]),
    { pre: s && !o, go: s && o, seen: o }
  );
}
function O(e) {
  let t = x(),
    [i, a] = r(``);
  return (
    u(() => {
      let r = e.current;
      if (!r || S() || t) return;
      let i = r.getBoundingClientRect();
      if (i.bottom <= 0) return;
      let o = !1;
      if ((a(`is-pre`), i.top < n.innerHeight * 0.88))
        return (
          g(() => {
            o || a(`is-in`);
          }),
          () => {
            o = !0;
          }
        );
      let s = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (s.disconnect(), a(`is-in`));
        },
        { rootMargin: `0px 0px -12% 0px` }
      );
      return (s.observe(r), () => s.disconnect());
    }, [t]),
    `nl-blur` + (i ? ` ` + i : ``)
  );
}
function k(e) {
  let t = i(null),
    n = m(t),
    { pre: a, go: c } = D(t),
    [l, d] = r(Math.max(0, Math.min(2, e.term)));
  u(() => d(Math.max(0, Math.min(2, e.term))), [e.term]);
  let f = (e) => {
      (d(e),
        requestAnimationFrame(() =>
          t.current?.querySelectorAll(`.tv`).forEach((e) => _(e, 500, 0))
        ));
    },
    p = (e, t) => (t === `p` ? [e.p0, e.p1, e.p2] : [e.e0, e.e1, e.e2])[l],
    h = q(22, 2.4, 34, n);
  return o(`div`, {
    ref: t,
    className: `nl-pc` + (a ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: ie } }),
      o(`div`, {
        className: `head`,
        style: { marginBottom: q(40, 5, 72, n) },
        children: [
          s(J, { n: e.number, t: e.title, s: e.sub }),
          s(`div`, {
            className: `sw`,
            role: `tablist`,
            "aria-label": `Term`,
            children: (e.terms || [])
              .slice(0, 3)
              .map((e, t) =>
                o(
                  `button`,
                  {
                    role: `tab`,
                    type: `button`,
                    "aria-selected": t === l,
                    onClick: () => f(t),
                    children: [
                      e.label,
                      e.save ? s(`span`, { className: `save`, children: e.save }) : null,
                    ],
                  },
                  t
                )
              ),
          }),
        ],
      }),
      s(`div`, {
        className: `plans`,
        children: (e.plans || []).map((t, r) =>
          o(
            `article`,
            {
              className: `plan lit st` + (t.featured ? ` feat` : ``),
              style: { padding: h, transitionDelay: c ? r * 0.07 + `s` : void 0 },
              children: [
                t.featured
                  ? s(`div`, {
                      className: `bg`,
                      "aria-hidden": `true`,
                      children: s(ee, {
                        lightX: 0.5,
                        lightY: 0.15,
                        gain: 2.2,
                        rib: 8,
                        spread: 0.9,
                        seed: 7,
                        vignette: 1,
                        floor: 0,
                        sweep: 0,
                        cursor: !0,
                        mode: `fill`,
                        word: ``,
                        overlay: `none`,
                      }),
                    })
                  : null,
                o(`div`, {
                  className: `top`,
                  children: [
                    o(`span`, { className: `nm`, children: [w(t.icon), t.name] }),
                    s(`span`, {
                      className: `tag mono` + (t.tagViolet ? ` v` : ``),
                      children: t.tag,
                    }),
                  ],
                }),
                s(`p`, { className: `who`, children: t.who }),
                o(`div`, {
                  className: `price`,
                  children: [
                    s(`b`, {
                      className: `tv`,
                      style: { fontSize: q(48, 4.6, 76, n) },
                      children: p(t, `p`),
                    }),
                    s(`span`, { className: `u mono`, children: e.unit }),
                  ],
                }),
                o(`div`, {
                  className: `eg mono`,
                  children: [
                    s(`span`, { children: t.egLabel }),
                    s(`b`, { className: `tv`, children: p(t, `e`) }),
                  ],
                }),
                s(`ul`, {
                  children: (t.features || ``)
                    .split(
                      `
`
                    )
                    .map((e) => e.trim())
                    .filter(Boolean)
                    .map((e, t) => s(`li`, { children: e }, t)),
                }),
                s(`div`, {
                  className: `go`,
                  children: Y(t.button, t.link || k.defaultProps.plans[r]?.link, !t.featured, !0),
                }),
              ],
            },
            r
          )
        ),
      }),
      s(`div`, {
        className: `incl`,
        children: (e.includes || []).map((e, t) =>
          o(
            `div`,
            {
              className: `inc lit st`,
              tabIndex: 0,
              style: { transitionDelay: c ? 0.2 + t * 0.07 + `s` : void 0 },
              children: [w(e.icon), e.label],
            },
            t
          )
        ),
      }),
    ],
  });
}
function A(e) {
  let t = i(null),
    n = m(t),
    { pre: r } = D(t, 0.88, `0px 0px -12% 0px`),
    a = (e.cols || ``).split(`,`).map((e) => e.trim()),
    c = (e, t) => {
      let n = (e || ``).trim().toLowerCase();
      return n === `yes`
        ? s(`i`, { className: `ok`, "aria-label": `Included` })
        : n === `no`
          ? s(`i`, { className: `no`, "aria-label": `Not included` })
          : t
            ? s(`span`, { className: `mo`, children: e })
            : e;
    };
  return o(`div`, {
    ref: t,
    className: `nl-ct` + (r ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: ae } }),
      o(`div`, {
        className: `head`,
        style: { marginBottom: q(40, 5, 72, n) },
        children: [s(J, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
      }),
      s(`div`, {
        className: `wrap rv`,
        children: o(`table`, {
          children: [
            s(`thead`, {
              children: o(`tr`, {
                children: [
                  s(`th`, { children: e.first }),
                  a.map((t, n) =>
                    s(`th`, { className: n + 1 === e.featured ? `f` : ``, children: t }, n)
                  ),
                ],
              }),
            }),
            s(`tbody`, {
              children: (e.rows || []).map((e, t) =>
                e.group
                  ? s(
                      `tr`,
                      { className: `grp`, children: s(`td`, { colSpan: 4, children: e.label }) },
                      t
                    )
                  : o(
                      `tr`,
                      {
                        children: [
                          s(`td`, { children: e.label }),
                          s(`td`, { children: c(e.a, e.mono) }),
                          s(`td`, { children: c(e.b, e.mono) }),
                          s(`td`, { children: c(e.c, e.mono) }),
                        ],
                      },
                      t
                    )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function j(e) {
  let t = i(null),
    n = m(t),
    { pre: c, go: l } = D(t, 0.8, `0px 0px -20% 0px`),
    [d, f] = r(-1);
  u(() => {
    l && t.current?.querySelectorAll(`.c b`).forEach((e, t) => _(e, 600, t * 45));
  }, [l]);
  let p = q(16, 1.6, 24, n),
    h = q(22, 2.4, 34, n),
    g = e.rows || [],
    v = [],
    y = ``;
  return (
    g.forEach((t, r) => {
      t.group &&
        t.group !== y &&
        ((y = t.group),
        v.push(
          o(
            `div`,
            {
              className: `g mono`,
              role: `row`,
              style: { padding: `16px ${p}px` },
              children: [
                s(`b`, { role: `rowheader`, children: t.group }),
                s(`span`, { children: t.groupNote }),
              ],
            },
            `g` + r
          )
        ));
      let i = [t.a, t.b, t.c],
        c = [e.listLabel, t.bNote, t.cNote];
      v.push(
        o(
          `div`,
          {
            className: `r`,
            role: `row`,
            children: [
              o(`div`, {
                className: `k lit`,
                role: `rowheader`,
                style: { padding: `20px ${p}px` },
                children: [
                  o(`span`, {
                    className: `nm`,
                    style: { fontSize: q(18, 1.5, 22, n) },
                    children: [w(t.icon), t.name],
                  }),
                  s(`span`, { className: `mono`, children: t.size }),
                ],
              }),
              i.map((r, i) =>
                o(
                  `div`,
                  {
                    role: `cell`,
                    className: `c` + (i === d ? ` col` : ``) + (i === 2 && t.floor ? ` min` : ``),
                    style: { padding: `${h}px ${p}px` },
                    onPointerEnter: () => f(i),
                    onPointerLeave: () => f(-1),
                    children: [
                      s(`b`, { style: { fontSize: q(26, 2.5, 42, n) }, children: r }),
                      s(`span`, {
                        className: `s mono`,
                        children:
                          i === 2 && t.floor
                            ? e.floorLabel
                            : i === 0
                              ? c[0]
                              : o(a, { children: [`Save `, s(`em`, { children: c[i] })] }),
                      }),
                    ],
                  },
                  i
                )
              ),
            ],
          },
          r
        )
      );
    }),
    o(`div`, {
      ref: t,
      className: `nl-rm` + (c ? ` pre` : ``) + b(n),
      style: e.style,
      children: [
        C(),
        s(`style`, { dangerouslySetInnerHTML: { __html: oe } }),
        o(`div`, {
          className: `head`,
          style: { marginBottom: q(40, 5, 72, n) },
          children: [s(J, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
        }),
        o(`div`, {
          className: `rm rv`,
          role: `table`,
          "aria-label": `Rates per GPU-hour`,
          children: [
            o(`div`, {
              className: `h`,
              role: `row`,
              children: [
                s(`span`, {
                  className: `k mono`,
                  role: `columnheader`,
                  style: { padding: `20px ${p}px` },
                  children: e.first,
                }),
                (e.cols || [])
                  .slice(0, 3)
                  .map((e, t) =>
                    o(
                      `span`,
                      {
                        className: `mono` + (t === d ? ` col` : ``),
                        role: `columnheader`,
                        style: { padding: `20px ${p}px` },
                        children: [e.label, s(`i`, { children: e.note })],
                      },
                      t
                    )
                  ),
              ],
            }),
            v,
          ],
        }),
        o(`div`, {
          className: `foot mono`,
          children: [
            o(`span`, { children: [s(`i`, { className: `nd` }), e.footLeft] }),
            s(`span`, { children: e.footRight }),
          ],
        }),
      ],
    })
  );
}
function M(e) {
  let t = i(null),
    n = m(t),
    { pre: r, go: a } = D(t, 0.8, `0px 0px -20% 0px`),
    c = n <= 960 ? 0 : q(48, 6, 96, n);
  return o(`div`, {
    ref: t,
    className: `nl-vs` + (r ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: se } }),
      o(`div`, {
        className: `head`,
        style: { marginBottom: q(40, 5, 72, n) },
        children: [s(J, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
      }),
      s(`div`, {
        className: `lad`,
        children: (e.steps || []).map((e, t) =>
          o(
            `article`,
            {
              className: `st` + (e.top ? ` top` : ``),
              style: {
                minHeight: 360 + c * t,
                padding: `28px ${q(16, 1.8, 28, n)}px 26px`,
                transitionDelay: a ? `0s,0s,0s,${t * 0.12}s,${t * 0.12}s` : void 0,
              },
              children: [
                o(`div`, {
                  className: `n`,
                  children: [
                    s(`b`, { style: { fontSize: q(36, 3.6, 60, n) }, children: e.size }),
                    s(`span`, { className: `mono`, children: e.unit }),
                  ],
                }),
                s(`dl`, {
                  children: [
                    [e.k1, e.v1],
                    [e.k2, e.v2],
                    [e.k3, e.v3],
                    [e.k4, e.v4],
                  ].map(([e, t], n) =>
                    o(
                      `div`,
                      {
                        children: [
                          s(`dt`, { children: e }),
                          s(`dd`, { className: n === 3 ? `r` : ``, children: t }),
                        ],
                      },
                      n
                    )
                  ),
                }),
                s(`p`, { className: `pl`, children: e.text }),
              ],
            },
            t
          )
        ),
      }),
      o(`div`, {
        className: `ax mono`,
        children: [
          o(`span`, { children: [e.axisLeft, ` `, s(`i`, {})] }),
          s(`span`, { children: e.axisRight }),
        ],
      }),
    ],
  });
}
function N(e) {
  let t = i(null),
    n = m(t),
    { pre: r, go: a } = D(t),
    c = i(null),
    l = O(c),
    u = { n: 0 };
  return o(`div`, {
    ref: t,
    className: `nl-il` + (r ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: ce } }),
      o(`div`, {
        className: `side`,
        children: [
          s(J, { n: e.number, t: e.title, s: e.sub }),
          s(`h2`, {
            ref: c,
            className: `h2 ` + l,
            style: { fontSize: q(30, 3.4, 58, n) },
            "aria-label": e.heading + ` ` + e.tone,
            children: o(`span`, {
              "aria-hidden": `true`,
              children: [
                Q(e.heading, u),
                ` `,
                s(`span`, { className: `tone`, children: Q(e.tone, u) }),
              ],
            }),
          }),
          s(`p`, { className: `lede`, children: e.lede }),
        ],
      }),
      s(`ul`, {
        children: (e.items || []).map((e, t) =>
          o(
            `li`,
            {
              className: `lit`,
              style: { transitionDelay: a ? `0s,${t * 0.07}s,${t * 0.07}s` : void 0 },
              children: [
                w(e.icon),
                o(`div`, {
                  children: [
                    s(`h3`, { style: { fontSize: q(18, 1.4, 21, n) }, children: e.title }),
                    s(`p`, { children: e.text }),
                  ],
                }),
                s(`span`, { className: `v`, children: e.value }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function P(e) {
  let t = i(null),
    n = m(t),
    { pre: r, go: a } = D(t, 0.78, `0px 0px -22% 0px`),
    c = n <= 600;
  return o(`div`, {
    ref: t,
    className: `nl-tb` + (r ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: le } }),
      o(`div`, {
        className: `head`,
        style: { marginBottom: q(40, 5, 72, n) },
        children: [s(J, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
      }),
      s(`div`, {
        className: `terms`,
        children: (e.bars || []).map((e, t) =>
          o(
            `div`,
            {
              className: `tr` + (e.best ? ` best` : ``),
              style: { gap: q(16, 2.4, 40, n), padding: `${q(26, 3, 40, n)}px 0` },
              children: [
                o(`div`, {
                  className: `nm`,
                  children: [
                    s(`h3`, { style: { fontSize: c ? 22 : q(22, 2, 30, n) }, children: e.name }),
                    s(`span`, { className: `mono`, children: e.note }),
                  ],
                }),
                o(`div`, {
                  className: `trk`,
                  style: { height: q(44, 4.4, 64, n) },
                  children: [
                    s(`i`, {
                      className: `fill`,
                      style: { width: e.width + `%`, transitionDelay: a ? t * 0.15 + `s` : void 0 },
                    }),
                    e.gap
                      ? s(`span`, {
                          className: `gap mono late`,
                          style: { transitionDelay: a ? 0.6 + t * 0.15 + `s` : void 0 },
                          children: e.gap,
                        })
                      : null,
                    e.axis ? s(`span`, { className: `ax mono`, children: e.axis }) : null,
                  ],
                }),
                o(`div`, {
                  className: `rt late`,
                  style: { transitionDelay: a ? 0.6 + t * 0.15 + `s` : void 0 },
                  children: [
                    s(`b`, { style: { fontSize: c ? 28 : q(30, 3, 50, n) }, children: e.rate }),
                    s(`span`, { className: `tag mono` + (e.best ? ` v` : ``), children: e.tag }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
      o(`div`, {
        className: `note mono`,
        children: [
          s(`span`, { children: e.note }),
          e.linkLabel ? o(`a`, { href: e.link || `#`, children: [e.linkLabel, ` `, X] }) : null,
        ],
      }),
    ],
  });
}
function F(e) {
  let t = i(null),
    n = m(t),
    { pre: a, go: c } = D(t, 0.82, `0px 0px -18% 0px`),
    [l, u] = r(-1),
    d = e.segments || [],
    f = d.reduce((e, t) => e + (t.share || 0), 0) || 1,
    p = parseFloat((e.total || ``).replace(/[^0-9.]/g, ``)) || 0,
    h = (e.total || ``).replace(/[0-9.,\s]/g, ``) || `$`,
    g = p ? [0, 0.5, 1].filter((e) => e < p * 0.92).concat([p]) : [],
    _ = (e) => e.share / f < 0.1;
  return o(`div`, {
    ref: t,
    className: `nl-cb` + (a ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: de } }),
      o(`div`, {
        className: `head`,
        style: { marginBottom: q(40, 5, 72, n) },
        children: [s(J, { n: e.number, t: e.title, s: e.sub }), s(`p`, { children: e.intro })],
      }),
      o(`div`, {
        className: `ch`,
        children: [
          o(`div`, {
            className: `tot`,
            children: [
              s(`b`, { style: { fontSize: q(40, 4, 64, n) }, children: e.total }),
              s(`span`, { className: `mono`, children: e.totalLabel }),
            ],
          }),
          s(`span`, { className: `mono dim`, children: e.hint }),
        ],
      }),
      s(`div`, {
        className: `bar` + (l >= 0 ? ` hov` : ``),
        style: { height: q(96, 10, 148, n) },
        children: d.map((e, t) =>
          o(
            `div`,
            {
              className:
                `sg` +
                (t === l ? ` on` : ``) +
                (t === d.length - 1 ? ` last` : ``) +
                (_(e) ? ` sm` : ``),
              onPointerEnter: () => u(t),
              onPointerLeave: () => u(-1),
              style: {
                flex: e.share,
                background: $[t % 6],
                color: ue[t % 6],
                transitionDelay: c ? `0s,${t * 0.12}s` : void 0,
              },
              children: [
                s(`span`, {
                  style: { visibility: e.share / f < 0.1 ? `hidden` : void 0 },
                  children: e.name,
                }),
                s(`b`, {
                  style: {
                    fontSize: q(14, 1.3, 20, n),
                    visibility: e.share / f < 0.05 ? `hidden` : void 0,
                  },
                  children: e.value,
                }),
              ],
            },
            t
          )
        ),
      }),
      s(`div`, {
        className: `ax mono`,
        "aria-hidden": `true`,
        children: g.map((t, n) =>
          o(
            `span`,
            {
              style: { left: (t / p) * 100 + `%` },
              children: [h, t === p ? e.total.replace(/[^0-9.]/g, ``) : t.toFixed(2)],
            },
            n
          )
        ),
      }),
      s(`div`, {
        className: `lgd` + (l >= 0 ? ` hov` : ``),
        style: { marginTop: q(40, 5, 72, n) },
        children: d.map((e, t) =>
          o(
            `div`,
            {
              className: `sg` + (t === l ? ` on` : ``) + (t === d.length - 1 ? ` last` : ``),
              onPointerEnter: () => u(t),
              onPointerLeave: () => u(-1),
              style: { transitionDelay: c ? `0s,${0.3 + t * 0.07}s` : void 0 },
              children: [
                o(`span`, {
                  className: `k`,
                  children: [
                    s(`i`, {
                      style: {
                        background: $[t % 6],
                        boxShadow: t === 4 ? `inset 0 0 0 1px rgba(243,243,243,.25)` : void 0,
                      },
                    }),
                    e.name,
                  ],
                }),
                o(`div`, {
                  className: `v`,
                  children: [
                    s(`b`, { style: { fontSize: q(22, 1.9, 30, n) }, children: e.value }),
                    o(`span`, { children: [Math.round((e.share / f) * 100), `%`] }),
                  ],
                }),
                s(`p`, { children: e.text }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function I(e) {
  let t = i(null),
    n = m(t),
    { pre: r } = D(t, 0.88, `0px 0px -12% 0px`),
    a = i(null),
    c = O(a),
    l = { n: 0 },
    u = q(20, 2, 28, n),
    d = q(20, 1.8, 28, n),
    f = (t) =>
      o(`div`, {
        className: `vc ` + (t ? `us` : `them`),
        style: { padding: u },
        children: [
          o(`div`, {
            className: `vh`,
            children: [
              s(`b`, {
                style: { fontSize: q(18, 1.5, 22, n) },
                children: t ? e.usName : e.themName,
              }),
              s(`span`, {
                className: `tag mono` + (t ? ` v` : ``),
                children: t ? e.usTag : e.themTag,
              }),
            ],
          }),
          s(`dl`, {
            children: (e.rows || []).map((e, n) =>
              o(
                `div`,
                {
                  children: [
                    s(`dt`, { children: e.label }),
                    o(`dd`, {
                      style: { fontSize: d },
                      children: [
                        t ? e.us : e.them,
                        (t ? e.usUnit : e.themUnit)
                          ? s(`small`, { children: t ? e.usUnit : e.themUnit })
                          : null,
                      ],
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      });
  return o(`div`, {
    ref: t,
    className: `nl-vc` + (r ? ` pre` : ``) + b(n),
    style: e.style,
    children: [
      C(),
      s(`style`, { dangerouslySetInnerHTML: { __html: fe } }),
      o(`div`, {
        className: `side`,
        children: [
          s(J, { n: e.number, t: e.title, s: e.sub }),
          s(`h2`, {
            ref: a,
            className: `h2 ` + c,
            style: { fontSize: q(30, 3.4, 58, n) },
            "aria-label": e.heading + ` ` + e.tone,
            children: o(`span`, {
              "aria-hidden": `true`,
              children: [
                Q(e.heading, l),
                ` `,
                s(`span`, {
                  className: `tone`,
                  style: { whiteSpace: `nowrap` },
                  children: Q(e.tone, l),
                }),
              ],
            }),
          }),
          s(`p`, { className: `lede`, children: e.lede }),
        ],
      }),
      o(`div`, { className: `cols rv`, children: [f(!0), f(!1)] }),
      s(`p`, { className: `src mono`, children: e.source }),
    ],
  });
}
var L,
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
  ae,
  oe,
  se,
  ce,
  le,
  $,
  ue,
  de,
  fe,
  pe = e(() => {
    (t(),
      c(),
      l(),
      p(),
      te(),
      v(),
      ne(),
      re(),
      (L = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (R = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (z = `rgba(243,243,243,.12)`),
      (B = `cubic-bezier(.16,1,.3,1)`),
      (V = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (H = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (U = `display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap`),
      (W = `display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 9px;box-shadow:inset 0 0 0 1px ${z};color:#A6A6A6;white-space:nowrap`),
      (G = `color:#C9BDFF;box-shadow:inset 0 0 0 1px rgba(201,189,255,.35)`),
      (K = (e) => `
.${e}{${R};width:100%}
.${e} .mono{${L}}
.${e} .lab{${V}}
.${e} .lab .n{${H}}
.${e} .lab .s{color:#A6A6A6}
.${e} .head{${U}}
.${e} .head > p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch;text-wrap:balance}
.${e} .tag{${W}}
.${e} .tag.v{${G}}
.${e} .h2{margin:0;font-weight:400;letter-spacing:-.04em;line-height:1;text-wrap:balance}
.${e} .h2 .tone{color:#A6A6A6}
.${e} .lede{margin:0;color:#A6A6A6;font-weight:400;max-width:44ch;text-wrap:balance}
.${e} .rv{transition:opacity 1.1s ${B},transform 1.1s ${B}}
.${e}.pre .rv{opacity:0;transform:translateY(28px)}
.${e} .lab{transition:opacity 1.1s ${B},transform 1.1s ${B}}
.${e}.pre .lab{opacity:0;transform:translateY(20px)}
`),
      (q = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (J = ({ n: e, t, s: n }) =>
        o(`div`, {
          className: `lab`,
          children: [
            e ? s(`span`, { className: `n`, children: e }) : null,
            s(`span`, { children: t }),
            s(`span`, { className: `s`, children: n }),
          ],
        })),
      (Y = (e, t, n = !1, r = !1) =>
        s(y, { label: e, link: t, ghost: n, newTab: !1, submit: !1, visual: !1, full: r })),
      (X = s(`svg`, {
        viewBox: `0 0 10 10`,
        width: `10`,
        height: `10`,
        fill: `none`,
        "aria-hidden": `true`,
        children: s(`path`, {
          d: `M1.5 8.5 8.5 1.5M3 1.5h5.5V7`,
          stroke: `currentColor`,
          strokeWidth: `1`,
        }),
      })),
      (Z = `
.nl-blur .bw{display:inline-block;white-space:nowrap}
.nl-blur .bc{display:inline-block}
@keyframes nl-blur-in{from{opacity:0;filter:blur(14px);transform:translateY(.16em)}to{opacity:1;filter:blur(0);transform:none}}
.nl-blur.is-in .bc{animation:nl-blur-in 1.25s cubic-bezier(.25,1,.5,1) both}
.nl-blur.is-pre .bc{opacity:0}
@media (prefers-reduced-motion:reduce){.nl-blur .bc{animation:none!important;opacity:1!important}}
`),
      (Q = (e, t, n = 0.021) =>
        S()
          ? e
          : (e || ``)
              .split(/(\s+)/)
              .map((e, r) =>
                /^\s+$/.test(e) || !e
                  ? e
                  : s(
                      `span`,
                      {
                        className: `bw`,
                        children: Array.from(e).map((e, r) =>
                          s(
                            `span`,
                            {
                              className: `bc`,
                              style: { animationDelay: (t.n++ * n).toFixed(3) + `s` },
                              children: e,
                            },
                            r
                          )
                        ),
                      },
                      r
                    )
              )),
      (ie =
        K(`nl-pc`) +
        `
.nl-pc .sw{display:inline-flex;padding:3px;box-shadow:inset 0 0 0 1px ${z};gap:2px}
.nl-pc .sw button{position:relative;height:32px;padding:0 14px;background:none;border:0;cursor:pointer;color:#A6A6A6;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;transition:color .3s,background .4s ${B}}
.nl-pc .sw button:hover{color:#F3F3F3}
.nl-pc .sw button[aria-selected="true"]{color:#000;background:#F3F3F3}
.nl-pc .sw .save{margin-left:8px;color:#C9BDFF}
.nl-pc .sw button[aria-selected="true"] .save{color:#4B2FD6}
.nl-pc .plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid ${z}}
.nl-pc .plan{position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;gap:26px;min-height:620px;box-sizing:border-box}
.nl-pc .plan + .plan{border-left:1px solid ${z}}
.nl-pc .plan .bg{position:absolute;inset:0;z-index:-2;opacity:.9}
.nl-pc .plan.feat::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.25) 40%,rgba(0,0,0,.85) 75%)}
.nl-pc .plan.feat::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,#C9BDFF 30%,#6E4BFF 70%,transparent)}
.nl-pc .top{display:flex;justify-content:space-between;align-items:center;gap:12px}
.nl-pc .nm{display:flex;align-items:center;gap:14px;font:400 13px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
.nl-pc .nm .nl-di{width:28px;height:18px}
.nl-pc .who{margin:0;color:#A6A6A6;font-weight:400;max-width:30ch;min-height:2.9em}
.nl-pc .price{display:flex;align-items:baseline;gap:10px;padding-top:6px}
.nl-pc .price b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em;font-feature-settings:"zero" 1}
.nl-pc .price .u{color:#A6A6A6}
.nl-pc .eg{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-block:1px solid ${z};color:#A6A6A6}
.nl-pc .eg b{font:400 13px/1 "Geist Mono",monospace;color:#F3F3F3;letter-spacing:-.02em}
.nl-pc ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;font-weight:400;font-size:15px}
.nl-pc li{display:flex;gap:12px;align-items:baseline}
.nl-pc li::before{content:"";flex:none;width:5px;height:5px;background:#A6A6A6;transform:translateY(-2px)}
.nl-pc .feat li::before{background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9)}
.nl-pc .go{margin-top:auto}
.nl-pc .incl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-bottom:1px solid ${z}}
.nl-pc .inc{display:flex;align-items:center;gap:16px;padding:20px 16px 20px 0;font:400 11px/1.3 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;outline:none}
.nl-pc .inc + .inc{padding-left:16px;border-left:1px solid ${z}}
.nl-pc .inc .nl-di{width:28px;height:18px}
.nl-pc .st{transition:opacity 1.1s ${B},transform 1.1s ${B}}
.nl-pc.pre .st{opacity:0;transform:translateY(28px)}
.nl-pc.is-md .plans{grid-template-columns:1fr}
.nl-pc.is-md .plan + .plan{border-left:0;border-top:1px solid ${z}}
.nl-pc.is-md .plan{min-height:0}
.nl-pc.is-md .incl{grid-template-columns:1fr 1fr}
.nl-pc.is-md .inc:nth-child(3){padding-left:0;border-left:0}
.nl-pc.is-md .inc:nth-child(n+3){border-top:1px solid ${z}}
.nl-pc.is-sm .sw{display:flex;width:100%}
.nl-pc.is-sm .sw button{flex:1;padding:0 6px;font-size:10px;white-space:nowrap}
.nl-pc.is-sm .sw .save{margin-left:5px}
.nl-pc.is-sm .incl{grid-template-columns:1fr}
.nl-pc.is-sm .inc,.nl-pc.is-sm .inc + .inc{padding-left:0;border-left:0}
.nl-pc.is-sm .inc + .inc{border-top:1px solid ${z}}
${T}
`),
      (k.defaultProps = {
        number: `01`,
        title: `Plans`,
        sub: `Three ways to run`,
        terms: [
          { label: `On-demand`, save: `` },
          { label: `1 year`, save: `−18%` },
          { label: `3 years`, save: `−28%` },
        ],
        term: 1,
        unit: `/ GPU-hour`,
        plans: [
          {
            icon: `chip`,
            name: `Pod`,
            tag: `64 – 512 GPUs`,
            tagViolet: !1,
            who: `For teams fine-tuning and running research on shared fabric.`,
            p0: `$2.24`,
            p1: `$1.84`,
            p2: `$1.62`,
            egLabel: `256 GPUs, monthly`,
            e0: `$419k`,
            e1: `$344k`,
            e2: `$303k`,
            features: `NVIDIA H200, 141 GB
3.2 Tb/s InfiniBand, shared spine
Slurm or Kubernetes, managed
Live in about 3 days
Email support, 1 working day`,
            button: `Reserve a pod`,
            link: `/contact-01`,
            featured: !1,
          },
          {
            icon: `pulse`,
            name: `Dedicated`,
            tag: `Most booked`,
            tagViolet: !0,
            who: `For labs training frontier models on their own fabric.`,
            p0: `$2.08`,
            p1: `$1.72`,
            p2: `$1.54`,
            egLabel: `1,024 GPUs, monthly`,
            e0: `$1.55M`,
            e1: `$1.29M`,
            e2: `$1.15M`,
            features: `H200 now, B300 from Q1 2027
Dedicated 3.2 Tb/s fabric, no neighbours
Bare metal, your images
Racked and burned in within 11 days
Named engineer, 15-minute response`,
            button: `Plan a pod`,
            link: `/contact-01`,
            featured: !0,
          },
          {
            icon: `shield`,
            name: `Sovereign`,
            tag: `4,096+ GPUs`,
            tagViolet: !1,
            who: `For governments and regulated industry that need a hall of their own.`,
            p0: `$1.98`,
            p1: `$1.64`,
            p2: `$1.46`,
            egLabel: `4,096 GPUs, monthly`,
            e0: `$5.92M`,
            e1: `$4.90M`,
            e2: `$4.37M`,
            features: `Private cage or full hall
Your encryption keys, EEA only
Air-gapped option
Scheduled build, about 30 days
On-site team in Narvik`,
            button: `Talk to sales`,
            link: `/contact-01`,
            featured: !1,
          },
        ],
        includes: [
          { icon: `hydro`, label: `Power included` },
          { icon: `snow`, label: `Cooling included` },
          { icon: `heat`, label: `Fabric included` },
          { icon: `drop`, label: `Zero water` },
        ],
      }),
      d(k, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        terms: {
          type: f.Array,
          title: `Terms`,
          maxCount: 3,
          control: {
            type: f.Object,
            controls: {
              label: { type: f.String, title: `Label` },
              save: { type: f.String, title: `Saving` },
            },
          },
        },
        term: {
          type: f.Number,
          title: `Selected term`,
          min: 0,
          max: 2,
          step: 1,
          description: `0, 1 or 2`,
        },
        unit: { type: f.String, title: `Unit` },
        plans: {
          type: f.Array,
          title: `Plans`,
          control: {
            type: f.Object,
            controls: {
              icon: { type: f.Enum, title: `Icon`, options: E },
              name: { type: f.String, title: `Name` },
              tag: { type: f.String, title: `Tag` },
              tagViolet: { type: f.Boolean, title: `Violet tag` },
              who: { type: f.String, title: `For`, displayTextArea: !0 },
              p0: { type: f.String, title: `Price term 1` },
              p1: { type: f.String, title: `Price term 2` },
              p2: { type: f.String, title: `Price term 3` },
              egLabel: { type: f.String, title: `Example` },
              e0: { type: f.String, title: `Example term 1` },
              e1: { type: f.String, title: `Example term 2` },
              e2: { type: f.String, title: `Example term 3` },
              features: {
                type: f.String,
                title: `Features`,
                displayTextArea: !0,
                description: `One per line`,
              },
              button: { type: f.String, title: `Button` },
              link: { type: f.Link, title: `Link` },
              featured: {
                type: f.Boolean,
                title: `Featured`,
                description: `Light background, solid button`,
              },
            },
          },
        },
        includes: {
          type: f.Array,
          title: `Included`,
          control: {
            type: f.Object,
            controls: {
              icon: { type: f.Enum, title: `Icon`, options: E },
              label: { type: f.String, title: `Label` },
            },
          },
        },
      }),
      (ae =
        K(`nl-ct`) +
        `
.nl-ct .wrap{position:relative}
.nl-ct table{width:100%;border-collapse:collapse;font-weight:400;font-size:15px}
.nl-ct th,.nl-ct td{padding:16px 16px 16px 0;text-align:left;border-bottom:1px solid ${z};vertical-align:baseline}
.nl-ct thead th{position:sticky;top:64px;z-index:2;background:rgba(0,0,0,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6;padding-block:18px}
.nl-ct thead th.f{color:#C9BDFF}
.nl-ct td:first-child{color:#A6A6A6;width:34%}
.nl-ct td{width:22%}
.nl-ct tbody tr{transition:background .3s}
.nl-ct tbody tr:not(.grp):hover{background:linear-gradient(90deg,rgba(110,75,255,.08),transparent 70%)}
.nl-ct tbody tr:hover td:first-child{color:#F3F3F3}
.nl-ct .grp td{padding-top:40px;font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#C9BDFF;border-bottom-color:transparent}
.nl-ct .ok{display:inline-block;width:7px;height:7px;background:#F3F3F3}
.nl-ct .no{display:inline-block;width:10px;height:1px;background:#5E5E5E;vertical-align:middle}
.nl-ct .mo{font-family:"Geist Mono",monospace;font-size:13px;letter-spacing:-.01em}
.nl-ct.is-md .wrap{overflow-x:auto}
.nl-ct.is-md table{min-width:680px}
.nl-ct.is-md thead th{top:0}
`),
      (A.defaultProps = {
        number: `02`,
        title: `Compare`,
        sub: `Everything in each plan`,
        intro: `All plans run in Hall A, Narvik, on the same hydro power. The differences are fabric, control and support.`,
        first: `Feature`,
        cols: `Pod, Dedicated, Sovereign`,
        featured: 2,
        rows: [
          { group: !0, label: `Compute`, a: ``, b: ``, c: ``, mono: !1 },
          { group: !1, label: `GPU`, a: `H200`, b: `H200 · B300`, c: `H200 · B300`, mono: !0 },
          {
            group: !1,
            label: `Cluster size`,
            a: `64 – 512`,
            b: `512 – 4,096`,
            c: `4,096+`,
            mono: !0,
          },
          {
            group: !1,
            label: `Fabric`,
            a: `Shared spine`,
            b: `Dedicated`,
            c: `Dedicated, isolated`,
            mono: !1,
          },
          { group: !1, label: `Bare metal`, a: `no`, b: `yes`, c: `yes`, mono: !1 },
          { group: !0, label: `Data`, a: ``, b: ``, c: ``, mono: !1 },
          { group: !1, label: `Checkpoint storage`, a: `200 TB`, b: `2 PB`, c: `Custom`, mono: !0 },
          { group: !1, label: `Customer-held keys`, a: `no`, b: `yes`, c: `yes`, mono: !1 },
          { group: !1, label: `Air-gapped option`, a: `no`, b: `no`, c: `yes`, mono: !1 },
          { group: !0, label: `Support`, a: ``, b: ``, c: ``, mono: !1 },
          { group: !1, label: `Response time`, a: `1 day`, b: `15 min`, c: `15 min`, mono: !0 },
          { group: !1, label: `Named engineer`, a: `no`, b: `yes`, c: `yes`, mono: !1 },
          { group: !1, label: `Uptime SLA`, a: `99.9%`, b: `99.99%`, c: `99.995%`, mono: !0 },
        ],
      }),
      d(A, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        first: { type: f.String, title: `First column` },
        cols: { type: f.String, title: `Plan columns`, description: `Comma separated (3)` },
        featured: { type: f.Number, title: `Violet column`, min: 0, max: 3, step: 1 },
        rows: {
          type: f.Array,
          title: `Rows`,
          control: {
            type: f.Object,
            controls: {
              group: { type: f.Boolean, title: `Group title` },
              label: { type: f.String, title: `Label` },
              a: {
                type: f.String,
                title: `Column 1`,
                description: `yes / no for marks`,
                hidden: (e) => e.group,
              },
              b: { type: f.String, title: `Column 2`, hidden: (e) => e.group },
              c: { type: f.String, title: `Column 3`, hidden: (e) => e.group },
              mono: { type: f.Boolean, title: `Mono numbers`, hidden: (e) => e.group },
            },
          },
        },
      }),
      (oe =
        K(`nl-rm`) +
        `
.nl-rm .rm{border:1px solid ${z};font-variant-numeric:tabular-nums}
.nl-rm .h,.nl-rm .r{display:grid;grid-template-columns:minmax(0,4fr) repeat(3,minmax(0,2.7fr))}
.nl-rm .h > *,.nl-rm .r > *{min-width:0;transition:background .35s,color .35s;box-sizing:border-box}
.nl-rm .h > * + *,.nl-rm .r > * + *{border-left:1px solid ${z}}
.nl-rm .h{position:sticky;top:64px;z-index:3;background:rgba(0,0,0,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid ${z}}
.nl-rm .h > *{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:10px;color:#A6A6A6}
.nl-rm .h i{font-style:normal;color:#C9BDFF}
.nl-rm .g{display:flex;justify-content:space-between;align-items:center;gap:16px;border-bottom:1px solid ${z};background:linear-gradient(90deg,rgba(110,75,255,.09),transparent 55%)}
.nl-rm .g b{display:flex;align-items:center;gap:12px;font:400 12px/1 "Geist Mono",monospace;letter-spacing:.1em;color:#F3F3F3;text-transform:uppercase}
.nl-rm .g b::before{content:"";width:6px;height:6px;background:#C9BDFF;box-shadow:0 0 8px rgba(110,75,255,.9)}
.nl-rm .g span{color:#A6A6A6}
.nl-rm .r{border-bottom:1px solid ${z}}
.nl-rm .r:last-child{border-bottom:0}
.nl-rm .k{display:flex;flex-direction:column;justify-content:center;gap:10px}
.nl-rm .k .nm{display:flex;align-items:center;gap:14px;font-weight:400;letter-spacing:-.025em}
.nl-rm .k .nm .nl-di{width:28px;height:18px}
.nl-rm .k .mono{color:#A6A6A6;padding-left:42px}
.nl-rm .r:hover > *{background:rgba(243,243,243,.025)}
.nl-rm .r:hover .k .nm{color:#fff}
.nl-rm .c{position:relative;display:flex;flex-direction:column;justify-content:center;gap:8px;cursor:default}
.nl-rm .c b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em;font-feature-settings:"zero" 1;transition:color .35s}
.nl-rm .c .s{color:#5E5E5E;transition:color .35s}
.nl-rm .c .s em{font-style:normal;color:#A6A6A6}
.nl-rm .c.min{background:radial-gradient(120% 90% at 100% 0%,rgba(110,75,255,.22),transparent 60%)}
.nl-rm .c.min::after{content:"";position:absolute;right:-5px;top:-5px;z-index:2;width:9px;height:9px;background:#C9BDFF;box-shadow:0 0 0 3px rgba(110,75,255,.25),0 0 18px rgba(110,75,255,.9)}
.nl-rm .c.min .s{color:#C9BDFF}
.nl-rm .col{background:rgba(110,75,255,.06)}
.nl-rm .h .col{color:#F3F3F3;background:rgba(110,75,255,.12)}
.nl-rm .c:hover{background:rgba(110,75,255,.16)!important;box-shadow:inset 0 0 0 1px rgba(201,189,255,.45)}
.nl-rm .c:hover b{color:#C9BDFF}
.nl-rm .c:hover .s{color:#A6A6A6}
.nl-rm .foot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:18px;color:#5E5E5E}
.nl-rm .foot span{display:inline-flex;align-items:center;gap:10px}
.nl-rm .foot .nd{width:7px;height:7px;background:#C9BDFF;box-shadow:0 0 10px rgba(110,75,255,.9)}
.nl-rm.is-md .h,.nl-rm.is-md .r{grid-template-columns:repeat(3,minmax(0,1fr))}
.nl-rm.is-md .h > .k{display:none}
.nl-rm.is-md .h > *:nth-child(2),.nl-rm.is-md .r > *:nth-child(2){border-left:0}
.nl-rm.is-md .r > .k{grid-column:1 / -1;flex-direction:row;justify-content:space-between;align-items:center;border-bottom:1px solid ${z};padding-block:14px!important}
.nl-rm.is-md .r > .k .mono{padding-left:0}
.nl-rm.is-md .h{top:0}
.nl-rm.is-sm .h > *{flex-direction:column;align-items:flex-start;gap:6px;padding:14px 12px!important}
.nl-rm.is-sm .r > *{padding-inline:12px!important}
.nl-rm.is-sm .c b{font-size:22px!important;letter-spacing:-.06em}
.nl-rm.is-sm .g{flex-direction:column;align-items:flex-start;gap:8px}
${T}
`),
      (j.defaultProps = {
        number: `01`,
        title: `Rate card`,
        sub: `Per GPU-hour, all-in`,
        intro: `Pick a row for the plan, a column for the term. The rate in the cell is the rate on the invoice.`,
        first: `GPU · Plan`,
        cols: [
          { label: `On-demand`, note: `List` },
          { label: `1 year`, note: `−18%` },
          { label: `3 years`, note: `−28%` },
        ],
        listLabel: `List rate`,
        floorLabel: `Floor rate`,
        rows: [
          {
            group: `H200 · 141 GB`,
            groupNote: `Live now · Hall A, Narvik`,
            icon: `chip`,
            name: `Pod`,
            size: `64 – 512 GPUs`,
            a: `$2.24`,
            b: `$1.84`,
            c: `$1.62`,
            bNote: `18%`,
            cNote: `28%`,
            floor: !1,
          },
          {
            group: `H200 · 141 GB`,
            groupNote: ``,
            icon: `pulse`,
            name: `Dedicated`,
            size: `512 – 4,096 GPUs`,
            a: `$2.08`,
            b: `$1.72`,
            c: `$1.54`,
            bNote: `17%`,
            cNote: `26%`,
            floor: !1,
          },
          {
            group: `H200 · 141 GB`,
            groupNote: ``,
            icon: `shield`,
            name: `Sovereign`,
            size: `4,096+ GPUs`,
            a: `$1.98`,
            b: `$1.64`,
            c: `$1.46`,
            bNote: `17%`,
            cNote: `26%`,
            floor: !0,
          },
          {
            group: `B300 · 288 GB`,
            groupNote: `Bookable now · racked from Q1 2027`,
            icon: `chip`,
            name: `Pod`,
            size: `64 – 512 GPUs`,
            a: `$3.09`,
            b: `$2.54`,
            c: `$2.24`,
            bNote: `18%`,
            cNote: `28%`,
            floor: !1,
          },
          {
            group: `B300 · 288 GB`,
            groupNote: ``,
            icon: `pulse`,
            name: `Dedicated`,
            size: `512 – 4,096 GPUs`,
            a: `$2.87`,
            b: `$2.37`,
            c: `$2.13`,
            bNote: `17%`,
            cNote: `26%`,
            floor: !1,
          },
          {
            group: `B300 · 288 GB`,
            groupNote: ``,
            icon: `shield`,
            name: `Sovereign`,
            size: `4,096+ GPUs`,
            a: `$2.73`,
            b: `$2.26`,
            c: `$2.01`,
            bNote: `17%`,
            cNote: `26%`,
            floor: !1,
          },
        ],
        footLeft: `Lowest rate on the card`,
        footRight: `USD per GPU-hour · EUR at the ECB rate on the invoice date`,
      }),
      d(j, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        first: { type: f.String, title: `First column` },
        cols: {
          type: f.Array,
          title: `Terms`,
          maxCount: 3,
          control: {
            type: f.Object,
            controls: {
              label: { type: f.String, title: `Label` },
              note: { type: f.String, title: `Note` },
            },
          },
        },
        listLabel: { type: f.String, title: `List label` },
        floorLabel: { type: f.String, title: `Floor label` },
        rows: {
          type: f.Array,
          title: `Rows`,
          control: {
            type: f.Object,
            controls: {
              group: {
                type: f.String,
                title: `GPU group`,
                description: `A new value starts a new group`,
              },
              groupNote: { type: f.String, title: `Group note` },
              icon: { type: f.Enum, title: `Icon`, options: E },
              name: { type: f.String, title: `Plan` },
              size: { type: f.String, title: `Size` },
              a: { type: f.String, title: `Term 1 rate` },
              b: { type: f.String, title: `Term 2 rate` },
              bNote: { type: f.String, title: `Term 2 saving` },
              c: { type: f.String, title: `Term 3 rate` },
              cNote: { type: f.String, title: `Term 3 saving` },
              floor: { type: f.Boolean, title: `Lowest rate` },
            },
          },
        },
        footLeft: { type: f.String, title: `Note left` },
        footRight: { type: f.String, title: `Note right` },
      }),
      (se =
        K(`nl-vs`) +
        `
.nl-vs .lad{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));align-items:end}
.nl-vs .st{position:relative;display:flex;flex-direction:column;gap:22px;border-top:1px solid ${z};border-left:1px solid ${z};transition:background .5s ${B},opacity 1.2s ${B},transform 1.2s ${B};box-sizing:border-box}
.nl-vs .st:last-child{border-right:1px solid ${z}}
.nl-vs .st::before{content:"";position:absolute;left:-4px;top:-4px;width:7px;height:7px;background:#F3F3F3;transition:background .4s,box-shadow .4s}
.nl-vs .st::after{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:0 50%;transition:transform .8s ${B}}
.nl-vs .st:hover{background:linear-gradient(180deg,rgba(110,75,255,.08),transparent 70%)}
.nl-vs .st:hover::after{transform:scaleX(1)}
.nl-vs .st:hover::before,.nl-vs .st.top::before{background:#C9BDFF;box-shadow:0 0 12px rgba(110,75,255,.9)}
.nl-vs.pre .st{opacity:0;transform:translateY(40px)}
.nl-vs .n{display:flex;align-items:baseline;gap:10px}
.nl-vs .n b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em;font-feature-settings:"zero" 1}
.nl-vs .n span{color:#A6A6A6}
.nl-vs dl{margin:auto 0 0;display:flex;flex-direction:column}
.nl-vs dl div{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:11px 0;border-top:1px solid ${z}}
.nl-vs dt{font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6}
.nl-vs dd{margin:0;font:400 14px/1 "Geist Mono",monospace;letter-spacing:-.02em;white-space:nowrap}
.nl-vs dd.r{font-size:20px;letter-spacing:-.05em}
.nl-vs .st.top dd.r{color:#C9BDFF}
.nl-vs .pl{margin:0;color:#A6A6A6;font-weight:400;font-size:14px;max-width:26ch}
.nl-vs .ax{display:flex;justify-content:space-between;gap:16px;padding-top:14px;border-top:1px solid ${z};color:#5E5E5E}
.nl-vs .ax span{display:inline-flex;align-items:center;gap:10px}
.nl-vs .ax i{display:inline-block;width:40px;height:1px;background:linear-gradient(90deg,#5E5E5E,#C9BDFF)}
.nl-vs.is-md .lad{grid-template-columns:1fr 1fr}
.nl-vs.is-md .st{min-height:0!important;border-right:0}
.nl-vs.is-md .st:nth-child(2n){border-right:1px solid ${z}}
.nl-vs.is-sm .lad{grid-template-columns:1fr}
.nl-vs.is-sm .st,.nl-vs.is-sm .st:nth-child(2n),.nl-vs.is-sm .st:last-child{border-right:0}
.nl-vs.is-sm .st{padding-left:22px!important;padding-right:0!important}
.nl-vs.is-sm .ax{flex-direction:column;gap:10px}
`),
      (M.defaultProps = {
        number: `02`,
        title: `Volume steps`,
        sub: `Bigger clusters, lower rates`,
        intro: `The rate drops at four cluster sizes. Lead time grows with the build. Three-year H200 rates shown.`,
        steps: [
          {
            size: `64`,
            unit: `GPUs`,
            k1: `Plan`,
            v1: `Pod`,
            k2: `Lead time`,
            v2: `3 days`,
            k3: `On-demand`,
            v3: `$2.24`,
            k4: `3-year rate`,
            v4: `$1.62`,
            text: `Eight nodes on a shared spine. Fine-tuning and research.`,
            top: !1,
          },
          {
            size: `512`,
            unit: `GPUs`,
            k1: `Plan`,
            v1: `Dedicated`,
            k2: `Lead time`,
            v2: `11 days`,
            k3: `On-demand`,
            v3: `$2.08`,
            k4: `3-year rate`,
            v4: `$1.54`,
            text: `Your own fabric. Racked and burned in before handover.`,
            top: !1,
          },
          {
            size: `4,096`,
            unit: `GPUs`,
            k1: `Plan`,
            v1: `Sovereign`,
            k2: `Lead time`,
            v2: `30 days`,
            k3: `On-demand`,
            v3: `$1.98`,
            k4: `3-year rate`,
            v4: `$1.46`,
            text: `A private cage, your keys, an on-site team in Narvik.`,
            top: !1,
          },
          {
            size: `16,384`,
            unit: `GPUs`,
            k1: `Plan`,
            v1: `Full hall`,
            k2: `Lead time`,
            v2: `Q3 2027`,
            k3: `Site`,
            v3: `N-02 Kiruna`,
            k4: `3-year rate`,
            v4: `$1.46`,
            text: `A hall of your own. Floor rate, plus a fixed power price to 2030.`,
            top: !0,
          },
        ],
        axisLeft: `Cluster size`,
        axisRight: `Rate per GPU-hour falls with each step`,
      }),
      d(M, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        steps: {
          type: f.Array,
          title: `Steps`,
          control: {
            type: f.Object,
            controls: {
              size: { type: f.String, title: `Size` },
              unit: { type: f.String, title: `Unit` },
              k1: { type: f.String, title: `Fact 1` },
              v1: { type: f.String, title: `Value 1` },
              k2: { type: f.String, title: `Fact 2` },
              v2: { type: f.String, title: `Value 2` },
              k3: { type: f.String, title: `Fact 3` },
              v3: { type: f.String, title: `Value 3` },
              k4: { type: f.String, title: `Rate label` },
              v4: { type: f.String, title: `Rate` },
              text: { type: f.String, title: `Text`, displayTextArea: !0 },
              top: { type: f.Boolean, title: `Highlight` },
            },
          },
        },
        axisLeft: { type: f.String, title: `Axis left` },
        axisRight: { type: f.String, title: `Axis right` },
      }),
      (ce =
        K(`nl-il`) +
        Z +
        `
.nl-il{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}
.nl-il .side{grid-column:1 / span 4;position:sticky;top:120px;display:flex;flex-direction:column;gap:28px}
.nl-il .side .h2{max-width:11ch}
.nl-il ul{grid-column:6 / span 7;list-style:none;margin:0;padding:0;border-top:1px solid ${z}}
.nl-il li{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:20px;align-items:center;padding:24px 0;border-bottom:1px solid ${z};transition:opacity 1.1s ${B},transform 1.1s ${B}}
.nl-il.pre li{opacity:0;transform:translateY(28px)}
.nl-il li::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${B}}
.nl-il li:hover::after{transform:scaleX(1);transform-origin:0 50%}
.nl-il h3{margin:0 0 4px;font-weight:400;letter-spacing:-.02em}
.nl-il li p{margin:0;color:#A6A6A6;font-weight:400;font-size:15px}
.nl-il .v{font:400 12px/1 "Geist Mono",monospace;letter-spacing:.02em;color:#A6A6A6;white-space:nowrap;transition:color .35s}
.nl-il li:hover .v{color:#C9BDFF}
.nl-il.is-md .side,.nl-il.is-md ul{grid-column:1 / -1}
.nl-il.is-md .side{position:static}
.nl-il.is-sm li{grid-template-columns:34px minmax(0,1fr);gap:16px;align-items:start}
.nl-il.is-sm .v{grid-column:2;margin-top:-6px}
${T}
`),
      (N.defaultProps = {
        number: `03`,
        title: `Included`,
        sub: `What's in the rate`,
        heading: `Eight things`,
        tone: `you never see billed.`,
        lede: `No power surcharge, no cooling line, no egress meter inside the EEA. One number per GPU-hour covers all of it.`,
        items: [
          {
            icon: `hydro`,
            title: `Power`,
            text: `Hydro and wind from the NO4 grid, matched hourly.`,
            value: `98.7% hydro`,
          },
          {
            icon: `snow`,
            title: `Cooling`,
            text: `Outside air below 10 °C for 300 days a year. No chillers.`,
            value: `PUE 1.08`,
          },
          {
            icon: `heat`,
            title: `Fabric`,
            text: `Non-blocking InfiniBand inside every pod.`,
            value: `3.2 Tb/s`,
          },
          {
            icon: `chip`,
            title: `Checkpoint storage`,
            text: `An NVMe tier next to the racks, sized to the plan.`,
            value: `From 200 TB`,
          },
          {
            icon: `shield`,
            title: `Security`,
            text: `Biometric halls, ISO 27001, data kept inside the EEA.`,
            value: `ISO 27001`,
          },
          {
            icon: `pulse`,
            title: `Telemetry`,
            text: `Power, temperature and ECC errors for every GPU, live.`,
            value: `1 s resolution`,
          },
          {
            icon: `wind`,
            title: `Hands on site`,
            text: `Engineers in Hall A around the clock, swaps within four hours.`,
            value: `24 / 7`,
          },
          {
            icon: `drop`,
            title: `Egress in the EEA`,
            text: `Move checkpoints and datasets between EEA regions without a meter.`,
            value: `€0 / GB`,
          },
        ],
      }),
      d(N, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        heading: { type: f.String, title: `Heading` },
        tone: { type: f.String, title: `Heading (grey)` },
        lede: { type: f.String, title: `Text`, displayTextArea: !0 },
        items: {
          type: f.Array,
          title: `Items`,
          control: {
            type: f.Object,
            controls: {
              icon: { type: f.Enum, title: `Icon`, options: E },
              title: { type: f.String, title: `Title` },
              text: { type: f.String, title: `Text`, displayTextArea: !0 },
              value: { type: f.String, title: `Value` },
            },
          },
        },
      }),
      (le =
        K(`nl-tb`) +
        `
.nl-tb .terms{border-top:1px solid ${z}}
.nl-tb .tr{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,7fr) minmax(0,2fr);align-items:center;border-bottom:1px solid ${z};transition:background .5s ${B}}
.nl-tb .tr:hover{background:linear-gradient(90deg,transparent,rgba(110,75,255,.06) 50%,transparent)}
.nl-tb .nm h3{margin:0 0 8px;font-weight:400;letter-spacing:-.03em}
.nl-tb .nm .mono{color:#A6A6A6}
.nl-tb .trk{position:relative;box-shadow:inset 0 0 0 1px ${z};background:repeating-linear-gradient(135deg,transparent 0 6px,rgba(243,243,243,.05) 6px 7px)}
.nl-tb .fill{position:absolute;left:0;top:0;bottom:0;background:repeating-linear-gradient(90deg,rgba(243,243,243,.78) 0 2px,rgba(243,243,243,.12) 2px 6px);transform-origin:0 50%;transition:transform 1.6s ${B}}
.nl-tb .fill::after{content:"";position:absolute;right:-1px;top:-6px;bottom:-6px;width:1px;background:#F3F3F3}
.nl-tb .best .fill{background:repeating-linear-gradient(90deg,#C9BDFF 0 2px,rgba(110,75,255,.25) 2px 6px);box-shadow:0 0 30px -6px rgba(110,75,255,.7)}
.nl-tb .best .fill::after{background:#C9BDFF;box-shadow:0 0 10px rgba(110,75,255,.9)}
.nl-tb .ax{position:absolute;left:0;top:calc(100% + 10px);color:#5E5E5E}
.nl-tb .gap{position:absolute;right:12px;top:50%;transform:translateY(-50%);color:#A6A6A6}
.nl-tb .best .gap,.nl-tb .best .rt b{color:#C9BDFF}
.nl-tb .rt{display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.nl-tb .rt b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em;font-feature-settings:"zero" 1}
.nl-tb .late{transition:opacity 1s ${B},transform 1s ${B}}
.nl-tb.pre .fill{transform:scaleX(0)}
.nl-tb.pre .late{opacity:0;transform:translateX(-10px)}
.nl-tb.pre .gap.late{transform:translate(-10px,-50%)}
.nl-tb .note{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:18px;color:#5E5E5E}
.nl-tb .note a{color:#A6A6A6;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:color .3s}
.nl-tb .note a:hover{color:#C9BDFF}
.nl-tb.is-md .tr{grid-template-columns:1fr auto;row-gap:22px}
.nl-tb.is-md .trk{grid-column:1 / -1;grid-row:2}
.nl-tb.is-md .rt{grid-row:1;grid-column:2}
`),
      (P.defaultProps = {
        number: `01`,
        title: `Term`,
        sub: `Build your term`,
        intro: `The bar is the rate. The hatched gap is what the term saves you, on every GPU-hour, for the whole term.`,
        bars: [
          {
            name: `On-demand`,
            note: `No commitment · billed monthly`,
            width: 100,
            gap: ``,
            axis: `List rate`,
            rate: `$1.98`,
            tag: `Base`,
            best: !1,
          },
          {
            name: `1 year`,
            note: `12 months · rate fixed`,
            width: 82.8,
            gap: `−$0.34`,
            axis: ``,
            rate: `$1.64`,
            tag: `Save 17%`,
            best: !1,
          },
          {
            name: `3 years`,
            note: `36 months · power price fixed`,
            width: 73.7,
            gap: `−$0.52`,
            axis: ``,
            rate: `$1.46`,
            tag: `Save 26%`,
            best: !0,
          },
        ],
        note: `Sovereign, H200, USD per GPU-hour. Pod and Dedicated step down the same way.`,
        linkLabel: `See the full rate card`,
        link: `/pricing-02`,
      }),
      d(P, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        bars: {
          type: f.Array,
          title: `Terms`,
          control: {
            type: f.Object,
            controls: {
              name: { type: f.String, title: `Name` },
              note: { type: f.String, title: `Note` },
              width: { type: f.Number, title: `Bar %`, min: 0, max: 100, step: 0.1, unit: `%` },
              gap: { type: f.String, title: `Saving` },
              axis: { type: f.String, title: `Under bar` },
              rate: { type: f.String, title: `Rate` },
              tag: { type: f.String, title: `Tag` },
              best: { type: f.Boolean, title: `Highlight` },
            },
          },
        },
        note: { type: f.String, title: `Note` },
        linkLabel: { type: f.String, title: `Link label` },
        link: { type: f.Link, title: `Link` },
      }),
      ($ = [
        `rgba(243,243,243,.92)`,
        `rgba(243,243,243,.62)`,
        `rgba(243,243,243,.42)`,
        `rgba(243,243,243,.26)`,
        `rgba(243,243,243,.14)`,
        `linear-gradient(135deg,#6E4BFF,#C9BDFF)`,
      ]),
      (ue = [`#000`, `#000`, `#000`, `#F3F3F3`, `#F3F3F3`, `#0b0618`]),
      (de =
        K(`nl-cb`) +
        `
.nl-cb .ch{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:18px}
.nl-cb .tot{display:flex;align-items:baseline;gap:12px}
.nl-cb .tot b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em}
.nl-cb .tot span,.nl-cb .dim{color:#A6A6A6}
.nl-cb .dim{color:#5E5E5E}
.nl-cb .bar{display:flex;gap:2px}
.nl-cb .bar .sg{display:flex;flex-direction:column;justify-content:space-between;padding:12px;transform-origin:0 50%;overflow:hidden;min-width:0;transition:opacity .4s,transform .9s cubic-bezier(.87,0,.13,1)}
.nl-cb .bar .sg span{font:400 10px/1.2 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.nl-cb .bar .sg b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.04em;white-space:nowrap}
.nl-cb .bar .sg.last{box-shadow:0 0 40px -8px rgba(110,75,255,.8)}
.nl-cb.pre .bar .sg{transform:scaleX(0)}
.nl-cb .hov .sg{opacity:.28}
.nl-cb .hov .sg.on{opacity:1}
.nl-cb .ax{position:relative;height:28px;margin-top:10px;border-top:1px solid ${z};color:#5E5E5E}
.nl-cb .ax span{position:absolute;top:10px;transform:translateX(-50%)}
.nl-cb .ax span::before{content:"";position:absolute;left:50%;top:-11px;width:1px;height:6px;background:#5E5E5E}
.nl-cb .ax span:first-child{transform:none}
.nl-cb .ax span:first-child::before{left:0}
.nl-cb .ax span:last-child{transform:translateX(-100%);color:#A6A6A6}
.nl-cb .ax span:last-child::before{left:auto;right:0}
.nl-cb .lgd{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border-top:1px solid ${z}}
.nl-cb .lgd .sg{display:flex;flex-direction:column;gap:12px;padding:20px 16px 4px 0;cursor:default;transition:opacity .4s,transform 1.1s ${B}}
.nl-cb .lgd .sg + .sg{padding-left:16px;border-left:1px solid ${z}}
.nl-cb .lgd .k{display:flex;align-items:center;gap:10px;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
.nl-cb .lgd .k i{width:10px;height:10px;flex:none}
.nl-cb .lgd .v{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.nl-cb .lgd .v b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.06em}
.nl-cb .lgd .v span{font:400 11px/1 "Geist Mono",monospace;color:#A6A6A6}
.nl-cb .lgd .last .v b{color:#C9BDFF}
.nl-cb .lgd p{margin:0;color:#A6A6A6;font-weight:400;font-size:14px;line-height:1.4}
.nl-cb.pre .lgd .sg{opacity:0;transform:translateY(28px)}
.nl-cb.is-md .lgd{grid-template-columns:repeat(3,minmax(0,1fr))}
.nl-cb.is-md .lgd .sg:nth-child(4){padding-left:0;border-left:0}
.nl-cb.is-md .lgd .sg:nth-child(n+4){border-top:1px solid ${z};margin-top:16px}
.nl-cb.is-sm .bar .sg{padding:8px 6px}
.nl-cb.is-sm .bar .sg span{visibility:hidden}
.nl-cb.is-sm .bar .sg b{font-size:12px!important}
.nl-cb.is-sm .bar .sg.sm b{visibility:hidden}
.nl-cb.is-sm .ch{flex-direction:column;align-items:flex-start}
.nl-cb.is-sm .lgd{grid-template-columns:1fr 1fr}
.nl-cb.is-sm .lgd .sg:nth-child(n){padding-left:0;border-left:0;margin-top:0;border-top:0;padding-right:12px;padding-bottom:18px}
.nl-cb.is-sm .lgd .sg:nth-child(2n){padding-left:16px;border-left:1px solid ${z}}
.nl-cb.is-sm .lgd .sg:nth-child(n+3){border-top:1px solid ${z}}
`),
      (F.defaultProps = {
        number: `02`,
        title: `Breakdown`,
        sub: `Where the money goes`,
        intro: `One GPU-hour at the floor rate, split six ways. Cheap hydro and free Arctic air keep power and cooling to under a fifth.`,
        total: `$1.46`,
        totalLabel: `One GPU-hour`,
        hint: `Hover a segment`,
        segments: [
          {
            name: `Hardware`,
            value: `$0.76`,
            share: 52,
            text: `H200 servers, written off over five years.`,
          },
          {
            name: `Power`,
            value: `$0.20`,
            share: 14,
            text: `Hydro at a fixed NO4 price, 1.1 kW per GPU.`,
          },
          {
            name: `Cooling`,
            value: `$0.04`,
            share: 3,
            text: `Fans and outside air. No chillers, no water.`,
          },
          {
            name: `Fabric`,
            value: `$0.13`,
            share: 9,
            text: `InfiniBand switches, optics and storage tier.`,
          },
          {
            name: `People`,
            value: `$0.12`,
            share: 8,
            text: `Engineers on site in Narvik, around the clock.`,
          },
          {
            name: `Margin`,
            value: `$0.21`,
            share: 14,
            text: `What funds N-02 Kiruna, opening in 2027.`,
          },
        ],
      }),
      d(F, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        intro: { type: f.String, title: `Intro`, displayTextArea: !0 },
        total: { type: f.String, title: `Total` },
        totalLabel: { type: f.String, title: `Total label` },
        hint: { type: f.String, title: `Hint` },
        segments: {
          type: f.Array,
          title: `Segments`,
          maxCount: 6,
          control: {
            type: f.Object,
            controls: {
              name: { type: f.String, title: `Name` },
              value: { type: f.String, title: `Value` },
              share: { type: f.Number, title: `Share`, min: 0, max: 100, unit: `%` },
              text: { type: f.String, title: `Text`, displayTextArea: !0 },
            },
          },
        },
      }),
      (fe =
        K(`nl-vc`) +
        Z +
        `
.nl-vc{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}
.nl-vc .side{grid-column:1 / span 4;display:flex;flex-direction:column;gap:28px}
.nl-vc .cols{grid-column:6 / span 7;display:grid;grid-template-columns:1fr 1fr;border:1px solid ${z}}
.nl-vc .vc{position:relative;display:flex;flex-direction:column}
.nl-vc .vc + .vc{border-left:1px solid ${z}}
.nl-vc .us{background:linear-gradient(180deg,rgba(110,75,255,.12),transparent 55%)}
.nl-vc .us::before{content:"";position:absolute;left:0;right:0;top:-1px;height:1px;background:linear-gradient(90deg,transparent,#C9BDFF 30%,#6E4BFF 70%,transparent)}
.nl-vc .vh{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-bottom:22px;margin-bottom:6px;border-bottom:1px solid ${z}}
.nl-vc .vh b{font-weight:400;letter-spacing:-.025em}
.nl-vc dl{margin:0}
.nl-vc dl div{display:flex;flex-direction:column;gap:10px;padding:18px 0;border-bottom:1px solid ${z}}
.nl-vc dl div:last-child{border-bottom:0}
.nl-vc dt{font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6}
.nl-vc dd{margin:0;font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.06em}
.nl-vc dd small{font-size:11px;letter-spacing:.02em;color:#A6A6A6;margin-left:6px}
.nl-vc .them dd{color:#A6A6A6}
.nl-vc .src{grid-column:6 / span 7;margin:0;color:#5E5E5E}
.nl-vc.is-md .side,.nl-vc.is-md .cols,.nl-vc.is-md .src{grid-column:1 / -1}
.nl-vc.is-sm .cols{grid-template-columns:1fr}
.nl-vc.is-sm .vc + .vc{border-left:0;border-top:1px solid ${z}}
`),
      (I.defaultProps = {
        number: `03`,
        title: `Compared`,
        sub: `With a typical hyperscaler region`,
        heading: `Same GPU.`,
        tone: `Different hall.`,
        lede: `An H200 in Narvik next to an H200 in a typical Western European hyperscaler region, on the numbers finance and sustainability teams ask for.`,
        usName: `Nordlys N-01`,
        usTag: `Narvik`,
        themName: `Typical region`,
        themTag: `W. Europe`,
        rows: [
          {
            label: `Price per H200-hour`,
            us: `$1.46 – 1.98`,
            usUnit: ``,
            them: `$3.60 – 6.90`,
            themUnit: ``,
          },
          { label: `PUE`, us: `1.08`, usUnit: ``, them: `1.40`, themUnit: `` },
          { label: `Water`, us: `0`, usUnit: `L / MWh`, them: `1,800`, themUnit: `L / MWh` },
          {
            label: `Carbon`,
            us: `9`,
            usUnit: `g CO₂e / kWh`,
            them: `320`,
            themUnit: `g CO₂e / kWh`,
          },
          {
            label: `Power price`,
            us: `Fixed`,
            usUnit: `for the term`,
            them: `Passed on`,
            themUnit: `quarterly`,
          },
        ],
        source: `Typical region: public list prices and sustainability reports, Q3 2026. Nordlys: measured in Hall A, trailing twelve months.`,
      }),
      d(I, {
        number: { type: f.String, title: `Number` },
        title: { type: f.String, title: `Title` },
        sub: { type: f.String, title: `Subtitle` },
        heading: { type: f.String, title: `Heading` },
        tone: { type: f.String, title: `Heading (grey)` },
        lede: { type: f.String, title: `Text`, displayTextArea: !0 },
        usName: { type: f.String, title: `Left name` },
        usTag: { type: f.String, title: `Left tag` },
        themName: { type: f.String, title: `Right name` },
        themTag: { type: f.String, title: `Right tag` },
        rows: {
          type: f.Array,
          title: `Rows`,
          control: {
            type: f.Object,
            controls: {
              label: { type: f.String, title: `Label` },
              us: { type: f.String, title: `Left value` },
              usUnit: { type: f.String, title: `Left unit` },
              them: { type: f.String, title: `Right value` },
              themUnit: { type: f.String, title: `Right unit` },
            },
          },
        },
        source: { type: f.String, title: `Source`, displayTextArea: !0 },
      }));
  });
export { j as a, M as c, k as i, pe as l, F as n, P as o, N as r, I as s, A as t };
//# sourceMappingURL=Pricing.s0_HG7gT.mjs.map
