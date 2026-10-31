import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  E as n,
  I as r,
  P as i,
  R as a,
  _ as o,
  b as s,
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
  _ as v,
  a as y,
  g as b,
  o as x,
  p as S,
  w as C,
  x as w,
  y as T,
} from "./shared-lib.W6te6cXm.mjs";
function E(e, t, n) {
  let [r, i] = o(0);
  return (
    f(() => {
      if (!n) {
        i(0);
        return;
      }
      let r = 0,
        o = () => {
          r = 0;
          let n = e.current;
          if (!n) return;
          let a = n.getBoundingClientRect();
          i(H(-a.top / Math.max(1, t)));
        },
        s = () => {
          r ||= requestAnimationFrame(o);
        };
      return (
        o(),
        a.addEventListener(`scroll`, s, { passive: !0 }),
        a.addEventListener(`resize`, s),
        () => {
          (a.removeEventListener(`scroll`, s),
            a.removeEventListener(`resize`, s),
            cancelAnimationFrame(r));
        }
      );
    }, [n, t]),
    r
  );
}
function D(e) {
  let t = s(null),
    n = g(t),
    r = C(),
    i = w(),
    o = !i && !r,
    u = (a !== void 0 && !i ? a.innerHeight : 900) * 1.2,
    d = E(t, u, o),
    f = B(16, 2.2, 32, n),
    p = n <= 600 ? 38 : 40,
    m = U(d),
    h = `inset(${V(p, 0, m)}% ${V(f, 0, m)}px ${V(p, 0, m)}% ${V(f, 0, m)}px)`,
    _ = W(H(d / 0.5)),
    v = H((d - 0.5) / 0.33),
    y = B(36, 5, 86, n),
    S = B(26, 3.2, 54, n),
    D = 0,
    O = (e) =>
      e
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
                        style: { animationDelay: (0.5 + D++ * 0.025).toFixed(3) + `s` },
                        children: e,
                      },
                      t
                    )
                  ),
                },
                t
              )
        ),
    k = n <= 600 ? 34 : 40,
    A = 100 - p;
  return c(`section`, {
    ref: t,
    className: `nl-hz` + (o ? ` anim` : ``) + b(n),
    style: { ...e.style, height: o ? `calc(100vh + ${u}px)` : void 0 },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: K } }),
      c(`div`, {
        className: `pin`,
        children: [
          l(`div`, {
            className: `intro`,
            children: l(`div`, {
              className: `slit`,
              style: { clipPath: h },
              children: l(x, {
                lightX: e.lightX,
                lightY: e.lightY,
                gain: e.gain,
                rib: e.rib,
                spread: e.spread,
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
          }),
          l(`div`, {
            className: `frame2`,
            "aria-hidden": `true`,
            style: { left: f, right: f, top: p + `%`, bottom: p + `%`, opacity: 1 - H(d / 0.25) },
            children: c(`div`, {
              className: `inner`,
              style: { position: `absolute`, inset: 0 },
              children: [
                l(`span`, { className: `c`, style: { left: -4, top: -7 }, children: `+` }),
                l(`span`, { className: `c`, style: { right: -4, top: -7 }, children: `+` }),
                l(`span`, { className: `c`, style: { left: -4, bottom: -7 }, children: `+` }),
                l(`span`, { className: `c`, style: { right: -4, bottom: -7 }, children: `+` }),
                l(`span`, { className: `fl mono`, children: e.frameLeft }),
                l(`span`, { className: `fr mono`, children: e.frameRight }),
              ],
            }),
          }),
          c(`h1`, {
            style: { fontSize: y },
            "aria-label": e.line1 + ` ` + e.line2,
            children: [
              l(`span`, {
                className: `l1`,
                "aria-hidden": `true`,
                style: {
                  left: f,
                  bottom: `calc(${A}% + ${k}px)`,
                  transform: `translateY(${-160 * _}%)`,
                  opacity: 1 - _,
                },
                children: o ? O(e.line1) : e.line1,
              }),
              l(`span`, {
                className: `l2`,
                "aria-hidden": `true`,
                style: {
                  right: f,
                  top: `calc(${A}% + ${k}px)`,
                  transform: `translateY(${160 * _}%)`,
                  opacity: 1 - _,
                },
                children: o ? O(e.line2) : e.line2,
              }),
            ],
          }),
          o &&
            c(`div`, {
              className: `rev`,
              "aria-hidden": `true`,
              style: { paddingInline: f, opacity: v, filter: `blur(${(1 - v) * 14}px)` },
              children: [
                l(`span`, { className: `mono`, children: e.revLabel }),
                l(`p`, { style: { fontSize: S }, children: e.revText }),
              ],
            }),
          c(`div`, {
            className: `foot mono`,
            style: { left: f, right: f, opacity: 1 - H(d / 0.25) },
            children: [
              c(`span`, {
                className: `cue`,
                style: { animationDelay: `1s` },
                children: [l(`i`, {}), e.cue],
              }),
              l(`span`, { style: { animationDelay: `1.1s` }, children: e.coords }),
            ],
          }),
        ],
      }),
    ],
  });
}
function O(e) {
  let { items: t, seconds: n } = e,
    [r, i] = o(`1.08`),
    [s, u] = o(`72%`),
    d = C();
  f(() => {
    if (w() || d) return;
    let e = 1.08,
      t = 72,
      n = a.setInterval(() => {
        ((e = Math.min(1.11, Math.max(1.06, e + (Math.random() - 0.5) * 0.01))),
          (t = Math.min(88, Math.max(61, t + Math.round((Math.random() - 0.5) * 4)))),
          i(e.toFixed(2)),
          u(t + `%`));
      }, 2400);
    return () => a.clearInterval(n);
  }, [d]);
  let p = (e) =>
    (t || []).map((t, n) =>
      c(
        `span`,
        {
          className: t.violet ? `v` : ``,
          children: [
            t.label,
            ` `,
            l(`b`, { children: t.live === `pue` ? r : t.live === `load` ? s : t.value }),
          ],
        },
        e + n
      )
    );
  return c(`div`, {
    className: `nl-tk`,
    style: e.style,
    "aria-label": `Live metrics`,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: q } }),
      c(`div`, {
        className: `in`,
        style: { animationDuration: (n || 48) + `s` },
        children: [
          p(`a`),
          l(`span`, { "aria-hidden": `true`, style: { display: `contents` }, children: p(`b`) }),
        ],
      }),
    ],
  });
}
function k(e) {
  let { number: t, title: n, sub: r, intro: i, steps: u } = e,
    d = s(null),
    p = s(null),
    m = g(d),
    h = C(),
    _ = w(),
    [v, y] = o(0),
    [x, S] = o(_ || h ? 1 : 0);
  return (
    f(() => {
      if (_ || h) return;
      let e = 0,
        t = () => {
          e = 0;
          let t = p.current;
          if (!t) return;
          let n = a.innerHeight,
            r = t.getBoundingClientRect();
          (S(H((n * 0.7 - r.top) / (n * 0.7 - n * 0.55 + r.height))),
            Array.from(t.querySelectorAll(`.step`)).forEach((e, t) => {
              let r = e.getBoundingClientRect();
              r.top <= n * 0.6 && r.bottom >= n * 0.6 && y(t);
            }));
        },
        n = () => {
          e ||= requestAnimationFrame(t);
        };
      return (
        t(),
        a.addEventListener(`scroll`, n, { passive: !0 }),
        () => {
          (a.removeEventListener(`scroll`, n), cancelAnimationFrame(e));
        }
      );
    }, [_, h]),
    c(`div`, {
      ref: d,
      className: `nl-ps` + b(m),
      style: { ...e.style, "--psh": B(22, 2.2, 34, m) + `px` },
      children: [
        T(),
        l(`style`, { dangerouslySetInnerHTML: { __html: J } }),
        c(`div`, {
          className: `side`,
          children: [l(G, { n: t, t: n, s: r }), l(`p`, { className: `intro`, children: i })],
        }),
        c(`div`, {
          className: `steps`,
          ref: p,
          children: [
            l(`div`, {
              className: `spine`,
              children: l(`i`, { style: { transform: `scaleY(${x})` } }),
            }),
            (u || []).map((e, t) =>
              c(
                `div`,
                {
                  className: `step` + (t === v ? ` on` : ``),
                  onPointerEnter: () => y(t),
                  children: [
                    l(`span`, { className: `n mono`, children: String(t + 1).padStart(2, `0`) }),
                    l(`h3`, { children: e.title }),
                    l(`span`, { className: `t mono`, children: e.time }),
                    l(`div`, {
                      className: `body`,
                      children: c(`div`, {
                        children: [
                          l(`p`, { children: e.text }),
                          l(`div`, {
                            className: `tags mono`,
                            children: (e.tags || ``)
                              .split(`,`)
                              .map((e) => e.trim())
                              .filter(Boolean)
                              .map((e, t) => l(`span`, { children: e }, t)),
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                t
              )
            ),
          ],
        }),
      ],
    })
  );
}
function A(e) {
  let { number: t, title: r, sub: u, hint: d, start: f, end: p, circle: m, sites: h } = e,
    _ = s(null),
    v = s(null),
    y = g(_),
    x = C(),
    S = w(),
    D = !S && !x,
    O = (a !== void 0 && !S ? a.innerHeight : 900) * 2.6,
    k = E(_, O, D),
    [A, j] = o(500);
  n(() => {
    let e = v.current;
    if (!e) return;
    let t = () => j(e.clientHeight || 500);
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, []);
  let M = Math.max(360, Math.min(640, A * 0.95)),
    N = (e) => (70 - e) * M,
    P = D ? f + (p - f) * k : f + (p - f) * 0.62,
    F = P >= m,
    I = 0;
  (h || []).forEach((e, t) => {
    P >= e.lat - 0.12 && (I = t);
  });
  let L = [];
  for (let e = 0; e <= 80; e++) {
    let t = 70 - e / 20,
      n = e % 10 == 0,
      r = e % 2 == 0;
    (L.push(
      l(
        `i`,
        {
          className: `tk ` + (n ? `M` : r ? `m` : ``),
          style: { top: N(t), width: n ? 30 : r ? 18 : 9 },
        },
        `t` + e
      )
    ),
      n &&
        L.push(
          c(
            `span`,
            { className: `tl`, style: { top: N(t) }, children: [t.toFixed(1), `°`] },
            `l` + e
          )
        ));
  }
  let R = {
    "--gut": B(16, 2.2, 32, y) + `px`,
    "--ltb": (y <= 960 ? B(38, 11, 56, y) : B(46, 5.8, 100, y)) + `px`,
    "--lth": (y <= 960 ? B(44, 13, 72, y) : B(48, 6, 104, y)) + `px`,
    "--ltf": B(17, 1.5, 22, y) + `px`,
  };
  return c(`section`, {
    ref: _,
    className: `nl-lt` + (D ? `` : ` static`) + b(y),
    style: { ...e.style, ...R, height: D ? `calc(100vh + ${O}px)` : void 0 },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Y } }),
      c(`div`, {
        className: `pin`,
        children: [
          c(`div`, {
            className: `head`,
            children: [
              l(G, { n: t, t: r, s: u }),
              c(`span`, { className: `hint mono`, children: [l(`i`, {}), d] }),
            ],
          }),
          c(`div`, {
            className: `body`,
            children: [
              c(`div`, {
                className: `read`,
                children: [
                  l(`span`, { className: `mono`, children: `Latitude` }),
                  c(`b`, { children: [P.toFixed(2), l(`small`, { children: `° N` })] }),
                  l(`span`, {
                    className: `zone mono` + (F ? `` : ` below`),
                    children: F ? `Inside the Arctic Circle` : `Below the Arctic Circle`,
                  }),
                  c(`span`, {
                    className: `km mono`,
                    children: [
                      (F ? `+` : `−`) + Math.round(Math.abs(P - m) * 111),
                      ` km from the line`,
                    ],
                  }),
                ],
              }),
              c(`div`, {
                className: `rw`,
                ref: v,
                "aria-hidden": `true`,
                children: [
                  c(`div`, {
                    className: `ruler`,
                    style: { height: 4 * M, transform: `translateY(${A / 2 - (70 - P) * M}px)` },
                    children: [
                      l(`i`, { className: `ax` }),
                      L,
                      l(`i`, { className: `ac`, style: { top: N(m) } }),
                      c(`span`, {
                        className: `acl`,
                        style: { top: N(m) },
                        children: [`Arctic Circle · `, m.toFixed(2), `°`],
                      }),
                      (h || [])
                        .filter((e) => e.marker)
                        .map((e, t) =>
                          c(
                            i,
                            {
                              children: [
                                l(`i`, { className: `mk`, style: { top: N(e.lat) } }),
                                l(`span`, {
                                  className: `ml`,
                                  style: { top: N(e.lat) },
                                  children: e.marker,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                    ],
                  }),
                  l(`div`, { className: `reticle` }),
                ],
              }),
              l(`div`, {
                className: `cards`,
                "aria-live": `polite`,
                children: (h || []).map((e, t) =>
                  c(
                    `article`,
                    {
                      className: `lc` + (t === I ? ` on` : ``),
                      children: [
                        c(`div`, {
                          className: `code mono`,
                          children: [
                            l(`span`, { children: e.code }),
                            l(`span`, { className: e.live ? `live` : ``, children: e.status }),
                          ],
                        }),
                        l(`h3`, { children: e.name }),
                        l(`p`, { children: e.text }),
                        e.progress > 0
                          ? c(`div`, {
                              className: `prog mono`,
                              style: { "--pw": e.progress + `%` },
                              children: [
                                l(`span`, { children: e.progressLabel }),
                                l(`i`, {}),
                                c(`b`, { children: [e.progress, `%`] }),
                              ],
                            })
                          : null,
                        c(`div`, {
                          className: `facts mono`,
                          children: [
                            c(`div`, {
                              children: [l(`span`, { children: e.f1 }), l(`b`, { children: e.v1 })],
                            }),
                            c(`div`, {
                              children: [l(`span`, { children: e.f2 }), l(`b`, { children: e.v2 })],
                            }),
                            c(`div`, {
                              children: [l(`span`, { children: e.f3 }), l(`b`, { children: e.v3 })],
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
          }),
        ],
      }),
    ],
  });
}
function j(e) {
  let { number: t, title: n, sub: r, quote: i, name: u, role: d } = e,
    p = s(null),
    m = s(null),
    h = g(p),
    _ = C(),
    [v, y] = o(1);
  f(() => {
    if (w() || _) {
      y(1);
      return;
    }
    let e = 0,
      t = () => {
        e = 0;
        let t = m.current;
        if (!t) return;
        let n = t.getBoundingClientRect(),
          r = a.innerHeight;
        y(H((r * 0.8 - n.top) / (r * 0.8 - (r * 0.5 - n.height))));
      },
      n = () => {
        e ||= requestAnimationFrame(t);
      };
    return (
      t(),
      a.addEventListener(`scroll`, n, { passive: !0 }),
      () => {
        (a.removeEventListener(`scroll`, n), cancelAnimationFrame(e));
      }
    );
  }, [_]);
  let x = (`“` + i + `”`).split(/(\s+)/),
    S = (x.filter((e) => e.trim()).length - 1) * 0.1 + 0.5,
    E = 0,
    D = (e) => `rgb(${[94, 94, 94].map((t) => Math.round(t + (243 - t) * e)).join(`,`)})`;
  return c(`div`, {
    ref: p,
    className: `nl-qw` + b(h),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: X } }),
      l(G, { n: t, t: n, s: r }),
      c(`figure`, {
        children: [
          l(`blockquote`, {
            ref: m,
            style: { fontSize: B(28, 3.4, 58, h) },
            children: x.map((e, t) =>
              e.trim()
                ? l(`span`, { style: { color: D(H((v * S - E++ * 0.1) / 0.5)) }, children: e }, t)
                : e
            ),
          }),
          c(`figcaption`, {
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
              l(`span`, { children: u }),
              l(`span`, { className: `mono`, children: d }),
            ],
          }),
        ],
      }),
    ],
  });
}
function M(e) {
  let { number: t, title: n, sub: r, aside: i, cols: u, rows: d, unit: p, note: m } = e,
    h = s(null),
    y = g(h),
    x = C(),
    S = _(h, `0px 0px -15% 0px`),
    [E, D] = o(!1),
    [O, k] = o(null);
  (f(() => {
    let e = h.current;
    e && !w() && !x && e.getBoundingClientRect().top > a.innerHeight * 0.85 && D(!0);
  }, [x]),
    f(() => {
      !E || !S || h.current?.querySelectorAll(`td b .v`).forEach((e, t) => v(e, 600, t * 50));
    }, [E, S]));
  let A = (u || ``).split(`,`).map((e) => e.trim()),
    j = (e) =>
      /^\$?[0-9.,]+$/.test(e)
        ? c(`b`, {
            children: [l(`span`, { className: `v`, children: e }), l(`small`, { children: p })],
          })
        : l(`b`, { children: e });
  return c(`div`, {
    ref: h,
    className: `nl-rt` + (E && !S ? ` pre` : ``) + b(y),
    style: { ...e.style, "--rtn": B(18, 1.6, 24, y) + `px`, "--rtp": B(24, 2.4, 38, y) + `px` },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Z } }),
      c(`div`, {
        className: `head`,
        children: [l(G, { n: t, t: n, s: r }), l(`span`, { className: `mono`, children: i })],
      }),
      l(`div`, {
        className: `wrap`,
        children: c(`table`, {
          onPointerLeave: () => k(null),
          children: [
            l(`thead`, {
              children: l(`tr`, {
                children: A.map((e, t) =>
                  l(`th`, { className: O && O[1] === t ? `hc` : ``, children: e }, t)
                ),
              }),
            }),
            l(`tbody`, {
              children: (d || []).map((e, t) =>
                c(
                  `tr`,
                  {
                    className: (O && O[0] === t ? `hl` : ``) + (E && !S ? ` pre` : ``),
                    style: E && S ? { transitionDelay: t * 0.08 + `s` } : void 0,
                    children: [
                      c(`th`, {
                        scope: `row`,
                        children: [e.name, l(`small`, { children: e.note })],
                      }),
                      [e.a, e.b, e.c].map((e, n) =>
                        l(
                          `td`,
                          {
                            tabIndex: 0,
                            className:
                              (O && O[1] === n + 1 ? `hc` : ``) +
                              (O && O[0] === t && O[1] === n + 1 ? ` hot` : ``),
                            onPointerEnter: () => k([t, n + 1]),
                            onFocus: () => k([t, n + 1]),
                            children: j(e),
                          },
                          n
                        )
                      ),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        }),
      }),
      l(`p`, { className: `note mono`, children: m }),
    ],
  });
}
function N(e) {
  let t = s(null),
    r = s(null),
    i = g(t),
    u = C(),
    d = w(),
    [p, m] = o(`—`),
    [h, _] = o(d || u ? 0 : 48),
    [v, y] = o(1200);
  (f(() => {
    let t = Date.parse(e.deadline) || Date.UTC(2026, 11, 15, 17),
      n = (e) => String(e).padStart(2, `0`),
      r = () => {
        let e = Math.max(0, t - Date.now()) / 1e3,
          r = Math.floor(e / 86400);
        e -= r * 86400;
        let i = Math.floor(e / 3600);
        e -= i * 3600;
        let a = Math.floor(e / 60),
          o = Math.floor(e - a * 60);
        m(`${r} d ${n(i)}:${n(a)}:${n(o)}`);
      };
    if ((r(), d)) return;
    let i = a.setInterval(r, 1e3);
    return () => a.clearInterval(i);
  }, [e.deadline, d]),
    n(() => {
      let e = r.current;
      if (!e) return;
      let t = () => y(e.clientWidth);
      t();
      let n = new ResizeObserver(t);
      return (n.observe(e), () => n.disconnect());
    }, []),
    f(() => {
      if (d || u) return;
      let e = 0,
        n = () => {
          e = 0;
          let n = t.current;
          if (!n) return;
          let r = n.getBoundingClientRect(),
            i = a.innerHeight;
          _(48 * (1 - H((i * 0.95 - r.top) / (i * 0.4))));
        },
        r = () => {
          e ||= requestAnimationFrame(n);
        };
      return (
        n(),
        a.addEventListener(`scroll`, r, { passive: !0 }),
        () => {
          (a.removeEventListener(`scroll`, r), cancelAnimationFrame(e));
        }
      );
    }, [d, u]));
  let b = B(110, 13, 190, i);
  return c(`div`, {
    ref: t,
    className: `nl-bc`,
    style: { ...e.style, paddingTop: 28 },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Q } }),
      c(`div`, {
        style: { position: `relative` },
        children: [
          c(`span`, {
            className: `lbl t mono`,
            children: [e.topLabel, ` `, l(`b`, { children: p })],
          }),
          c(`div`, {
            className: `band`,
            ref: r,
            style: { height: b, clipPath: `inset(${h}% 0% ${h}% 0%)`, "--bw": v + `px` },
            children: [
              l(x, {
                lightX: e.lightX,
                lightY: 0.5,
                gain: e.gain,
                rib: 8,
                spread: 3,
                seed: e.seed,
                vignette: 0,
                floor: 0.06,
                sweep: 0,
                cursor: !0,
                mode: `fill`,
                word: ``,
                overlay: `none`,
              }),
              l(`i`, { className: `scan`, "aria-hidden": `true` }),
            ],
          }),
          c(`div`, {
            className: `frame`,
            "aria-hidden": `true`,
            children: [
              l(`span`, { className: `c`, style: { left: -4, top: -7 }, children: `+` }),
              l(`span`, { className: `c`, style: { right: -4, top: -7 }, children: `+` }),
              l(`span`, { className: `c`, style: { left: -4, bottom: -7 }, children: `+` }),
              l(`span`, { className: `c`, style: { right: -4, bottom: -7 }, children: `+` }),
            ],
          }),
          c(`span`, {
            className: `lbl b mono`,
            children: [e.bottomPre, ` `, l(`b`, { children: e.bottomValue }), ` `, e.bottomPost],
          }),
        ],
      }),
    ],
  });
}
function P(e) {
  let [n, r] = o(``),
    [i, a] = o(``),
    s = `nl-ef-` + t().replace(/[^a-z0-9]/gi, ``);
  return c(`form`, {
    className: `nl-ef`,
    style: e.style,
    noValidate: !0,
    onSubmit: (t) => {
      (t.preventDefault(), a(/^\S+@\S+\.\S+$/.test(n.trim()) ? e.okText : e.errText));
    },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: $ } }),
      e.label ? l(`span`, { className: `lbl mono`, children: e.label }) : null,
      c(`div`, {
        className: `field`,
        children: [
          l(`label`, { htmlFor: s, className: `sr`, children: `Work email` }),
          l(`input`, {
            id: s,
            type: `email`,
            placeholder: e.placeholder,
            autoComplete: `email`,
            value: n,
            onChange: (e) => r(e.target.value),
          }),
          l(`button`, { type: `submit`, children: e.button }),
        ],
      }),
      l(`span`, { className: `msg mono`, role: `status`, children: i }),
    ],
  });
}
var F,
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
  $,
  ee = e(() => {
    (r(),
      u(),
      d(),
      h(),
      S(),
      y(),
      (F = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (I = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (L = `rgba(243,243,243,.12)`),
      (R = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (z = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (B = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (V = (e, t, n) => e + (t - e) * n),
      (H = (e) => Math.max(0, Math.min(1, e))),
      (U = (e) => (e < 0.5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2)),
      (W = (e) => e * e),
      (G = ({ n: e, t, s: n }) =>
        c(`div`, {
          className: `lab`,
          children: [
            e ? l(`span`, { className: `n`, children: e }) : null,
            l(`span`, { children: t }),
            l(`span`, { className: `s`, children: n }),
          ],
        })),
      (K = `
.nl-hz{${I};position:relative;width:100%}
.nl-hz .mono{${F}}
.nl-hz .pin{position:sticky;top:0;height:100vh;min-height:620px;overflow:hidden;isolation:isolate}
.nl-hz .intro{position:absolute;inset:0;z-index:0}
.nl-hz .slit{position:absolute;inset:0}
.nl-hz .frame2{position:absolute;z-index:1;pointer-events:none;border-block:1px solid rgba(243,243,243,.14)}
.nl-hz .frame2 .c{position:absolute;font:300 12px/1 "Geist Mono",monospace;color:#A6A6A6}
.nl-hz .frame2 .fl{position:absolute;top:-22px;left:0;color:#A6A6A6}
.nl-hz .frame2 .fr{position:absolute;bottom:-22px;right:0;color:#A6A6A6}
.nl-hz h1{position:absolute;inset:0;z-index:2;margin:0;pointer-events:none;font-weight:400;letter-spacing:-.04em;line-height:1}
.nl-hz h1 .l1,.nl-hz h1 .l2{position:absolute;display:block}
.nl-hz h1 .l2{color:#A6A6A6}
.nl-hz h1 .wd{display:inline-block;white-space:nowrap}
.nl-hz h1 .ch{display:inline-block}
.nl-hz .rev{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;text-align:center;pointer-events:none}
.nl-hz .rev p{margin:0;letter-spacing:-.035em;line-height:1.08;max-width:20ch;text-wrap:balance}
.nl-hz .rev .mono{color:#C9BDFF}
.nl-hz .foot{position:absolute;bottom:22px;z-index:2;display:flex;justify-content:space-between;gap:16px;color:#A6A6A6}
.nl-hz .cue{display:flex;align-items:center;gap:10px}
.nl-hz .cue i{display:block;width:1px;height:22px;background:linear-gradient(#F3F3F3,transparent);animation:nl-hz-cue 2.2s cubic-bezier(.16,1,.3,1) infinite;transform-origin:50% 0}
@keyframes nl-hz-cue{0%{transform:scaleY(0)}50%{transform:scaleY(1);transform-origin:50% 0}51%{transform-origin:50% 100%}100%{transform:scaleY(0);transform-origin:50% 100%}}
@keyframes nl-hz-open{from{clip-path:inset(50% 50% 50% 50%)}to{clip-path:inset(0 0 0 0)}}
@keyframes nl-hz-frame{from{opacity:0;transform:scaleX(.2)}to{opacity:1;transform:none}}
@keyframes nl-hz-ch{from{opacity:0;filter:blur(16px);transform:translateY(.18em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-hz-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.nl-hz.anim .intro{animation:nl-hz-open 1.6s cubic-bezier(.87,0,.13,1) both}
.nl-hz.anim .frame2 .inner{animation:nl-hz-frame 1.4s cubic-bezier(.87,0,.13,1) .1s both}
.nl-hz.anim h1 .ch{animation:nl-hz-ch 1.3s cubic-bezier(.215,.61,.355,1) both}
.nl-hz.anim .foot>*{animation:nl-hz-up 1s cubic-bezier(.16,1,.3,1) both}
.nl-hz.is-sm .foot span:last-child{display:none}
@media (prefers-reduced-motion:reduce){.nl-hz *{animation:none!important}}
`),
      (D.defaultProps = {
        line1: `The coldest place`,
        line2: `to train a model.`,
        revLabel: `N-01 · Narvik`,
        revText: `Below 10 °C for 300 days a year. The air does the cooling.`,
        frameLeft: `Horizon · Narvik · 68.4° N`,
        frameRight: `Outside air −4 °C`,
        cue: `Scroll to open the horizon`,
        coords: `N 69.6492° · E 18.9553°`,
        lightX: 0.5,
        lightY: 0.5,
        gain: 2.4,
        rib: 9,
        spread: 1.15,
        seed: 11,
      }),
      p(D, {
        line1: { type: m.String, title: `Line 1` },
        line2: { type: m.String, title: `Line 2`, description: `Grey, right-aligned` },
        revLabel: { type: m.String, title: `Reveal label` },
        revText: { type: m.String, title: `Reveal text`, displayTextArea: !0 },
        frameLeft: { type: m.String, title: `Frame left` },
        frameRight: { type: m.String, title: `Frame right` },
        cue: { type: m.String, title: `Cue` },
        coords: { type: m.String, title: `Coordinates` },
        lightX: { type: m.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: m.Number, title: `Light Y`, min: 0, max: 1, step: 0.01 },
        gain: { type: m.Number, title: `Gain`, min: 0.5, max: 4, step: 0.05 },
        rib: { type: m.Number, title: `Rib`, min: 4, max: 40, step: 1 },
        spread: { type: m.Number, title: `Spread`, min: 0.4, max: 3, step: 0.05 },
        seed: { type: m.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }),
      (q = `
.nl-tk{${I};border-block:1px solid ${L};overflow:hidden;white-space:nowrap;width:100%}
.nl-tk .in{display:inline-flex;animation:nl-tk 48s linear infinite}
.nl-tk:hover .in{animation-play-state:paused}
.nl-tk span{${F};display:inline-flex;align-items:center;gap:12px;padding:16px 28px;border-right:1px solid ${L};color:#A6A6A6}
.nl-tk b{color:#F3F3F3;font-weight:400;font-variant-numeric:tabular-nums}
.nl-tk span.v b{color:#C9BDFF}
@keyframes nl-tk{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.nl-tk .in{animation:none}}
`),
      (O.defaultProps = {
        seconds: 48,
        items: [
          { label: `PUE · N-01`, value: `1.08`, violet: !1, live: `pue` },
          { label: `Hall load`, value: `72%`, violet: !1, live: `load` },
          { label: `Outside air`, value: `−4 °C`, violet: !1, live: `none` },
          { label: `NO4 spot`, value: `€4.3 / MWh`, violet: !0, live: `none` },
          { label: `GPUs online`, value: `24,576`, violet: !1, live: `none` },
          { label: `Fabric`, value: `3.2 Tb/s`, violet: !1, live: `none` },
          { label: `Water used`, value: `0 L`, violet: !0, live: `none` },
          { label: `Heat reused`, value: `41 GWh`, violet: !1, live: `none` },
          { label: `Uptime`, value: `99.995%`, violet: !1, live: `none` },
        ],
      }),
      p(O, {
        items: {
          type: m.Array,
          title: `Items`,
          control: {
            type: m.Object,
            controls: {
              label: { type: m.String, title: `Label` },
              value: { type: m.String, title: `Value` },
              violet: { type: m.Boolean, title: `Violet` },
              live: {
                type: m.Enum,
                title: `Live`,
                options: [`none`, `pue`, `load`],
                optionTitles: [`None`, `PUE drift`, `Load drift`],
              },
            },
          },
        },
        seconds: { type: m.Number, title: `Loop`, min: 10, max: 120, unit: `s` },
      }),
      (J = `
.nl-ps{${I};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;width:100%}
.nl-ps .mono{${F}}
.nl-ps .lab{${R}}
.nl-ps .lab .n{${z}}
.nl-ps .lab .s{color:#A6A6A6}
.nl-ps .side{grid-column:1 / span 3;align-self:start;position:sticky;top:120px}
.nl-ps .intro{margin:24px 0 0;color:#A6A6A6;font-weight:400;max-width:28ch}
.nl-ps .steps{grid-column:5 / span 8;position:relative;border-top:1px solid ${L}}
.nl-ps .spine{position:absolute;left:0;top:0;bottom:0;width:1px;background:${L}}
.nl-ps .spine i{position:absolute;inset:0;background:linear-gradient(#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.7);transform-origin:50% 0}
.nl-ps .step{position:relative;display:grid;grid-template-columns:64px minmax(0,1fr) auto;column-gap:24px;padding:28px 0 28px 28px;border-bottom:1px solid ${L}}
.nl-ps .step::before{content:"";position:absolute;left:-3px;top:38px;width:7px;height:7px;background:#000;box-shadow:inset 0 0 0 1px #5E5E5E;transition:background .5s,box-shadow .5s}
.nl-ps .step.on::before{background:#C9BDFF;box-shadow:0 0 10px rgba(110,75,255,.9)}
.nl-ps .step .n{color:#5E5E5E;transition:color .5s}
.nl-ps .step.on .n{color:#C9BDFF}
.nl-ps .step h3{margin:0;font-size:var(--psh);font-weight:400;letter-spacing:-.03em;line-height:1.05;color:#A6A6A6;transition:color .5s}
.nl-ps .step.on h3{color:#F3F3F3}
.nl-ps .step .t{color:#5E5E5E;text-align:right}
.nl-ps .step .body{grid-column:2 / span 2;display:grid;grid-template-rows:0fr;transition:grid-template-rows .7s cubic-bezier(.16,1,.3,1)}
.nl-ps .step.on .body{grid-template-rows:1fr}
.nl-ps .step .body>div{overflow:hidden}
.nl-ps .step p{margin:0;color:#A6A6A6;font-weight:400;max-width:52ch;padding-top:12px}
.nl-ps .step .tags{display:flex;gap:8px;flex-wrap:wrap;padding-top:14px}
.nl-ps .step .tags span{padding:5px 7px;box-shadow:inset 0 0 0 1px ${L};color:#A6A6A6}
.nl-ps.is-md .side{grid-column:1 / -1;position:static}
.nl-ps.is-md .steps{grid-column:1 / -1;margin-top:32px}
.nl-ps.is-sm .step{grid-template-columns:44px minmax(0,1fr);padding-left:20px}
.nl-ps.is-sm .step .t{grid-column:2;text-align:left;margin-top:8px}
.nl-ps.is-sm .step .body{grid-column:2}
`),
      (k.defaultProps = {
        number: `01`,
        title: `Process`,
        sub: `From signature to first job`,
        intro: `Eleven days from contract to a cluster running your code. Every step is metered.`,
        steps: [
          {
            title: `Reserve`,
            time: `Day 0`,
            text: `Tell us cluster size, GPU type and start date. You get a fixed quote with power, cooling and fabric included.`,
            tags: `Quote in 1 day, Fixed price`,
          },
          {
            title: `Rack`,
            time: `Day 3`,
            text: `Pods are allocated in Hall A and burned in for 72 hours before your first job touches them.`,
            tags: `72 h burn-in, H200 · B300`,
          },
          {
            title: `Train`,
            time: `Day 11`,
            text: `Jobs land on a dedicated 3.2 Tb/s fabric. Checkpoints stay in-hall, two milliseconds from your GPUs.`,
            tags: `Slurm · K8s, Live PUE`,
          },
          {
            title: `Report`,
            time: `Ongoing`,
            text: `Every hour of compute comes with metered energy, carbon and water figures you can hand to an auditor.`,
            tags: `Hourly meters, Scope 2`,
          },
        ],
      }),
      p(k, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        steps: {
          type: m.Array,
          title: `Steps`,
          control: {
            type: m.Object,
            controls: {
              title: { type: m.String, title: `Title` },
              time: { type: m.String, title: `Time` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
              tags: { type: m.String, title: `Tags`, description: `Comma separated` },
            },
          },
        },
      }),
      (Y = `
.nl-lt{${I};position:relative;width:100%}
.nl-lt .mono{${F}}
.nl-lt .lab{${R}}
.nl-lt .lab .n{${z}}
.nl-lt .lab .s{color:#A6A6A6}
.nl-lt .pin{position:sticky;top:0;height:100vh;min-height:640px;display:flex;flex-direction:column;padding-top:92px;padding-bottom:28px;overflow:hidden;border-top:1px solid ${L}}
.nl-lt .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;padding-inline:var(--gut)}
.nl-lt .hint{color:#A6A6A6;display:flex;align-items:center;gap:10px}
.nl-lt .hint i{display:block;width:1px;height:16px;background:linear-gradient(#F3F3F3,transparent);animation:nl-lt-cue 2.2s cubic-bezier(.16,1,.3,1) infinite}
@keyframes nl-lt-cue{0%{transform:scaleY(0)}50%{transform:scaleY(1);transform-origin:50% 0}51%{transform-origin:50% 100%}100%{transform:scaleY(0);transform-origin:50% 100%}}
.nl-lt .body{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,4fr) minmax(0,3fr) minmax(0,5fr);gap:24px;align-items:stretch;margin-top:24px;padding-inline:var(--gut)}
.nl-lt .read{display:flex;flex-direction:column;justify-content:center;gap:14px}
.nl-lt .read .mono:first-child{color:#A6A6A6}
.nl-lt .read b{font:400 var(--ltb)/.9 "Geist Mono",monospace;letter-spacing:-.07em;font-variant-numeric:tabular-nums;white-space:nowrap}
.nl-lt .read b small{font-size:.32em;letter-spacing:0;color:#A6A6A6;margin-left:.15em}
.nl-lt .read .zone{color:#C9BDFF}
.nl-lt .read .zone.below{color:#A6A6A6}
.nl-lt .read .km{color:#5E5E5E}
.nl-lt .rw{position:relative;overflow:hidden;-webkit-mask-image:linear-gradient(transparent,#000 16%,#000 84%,transparent);mask-image:linear-gradient(transparent,#000 16%,#000 84%,transparent)}
.nl-lt .ruler{position:absolute;left:0;right:0;top:0;will-change:transform}
.nl-lt .ax{position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(243,243,243,.14)}
.nl-lt .tk{position:absolute;height:1px;right:50%;background:rgba(243,243,243,.2)}
.nl-lt .tk.m{background:rgba(243,243,243,.35)}
.nl-lt .tk.M{background:rgba(243,243,243,.6)}
.nl-lt .tl{position:absolute;right:calc(50% + 44px);transform:translateY(-50%);font:400 10px/1 "Geist Mono",monospace;letter-spacing:.08em;color:#A6A6A6;font-variant-numeric:tabular-nums}
.nl-lt .mk{position:absolute;left:50%;height:1px;width:46px;background:linear-gradient(90deg,#C9BDFF,transparent)}
.nl-lt .mk::before{content:"";position:absolute;left:-3px;top:-3px;width:7px;height:7px;background:#C9BDFF;box-shadow:0 0 10px #6E4BFF}
.nl-lt .ml{position:absolute;left:calc(50% + 54px);transform:translateY(-50%);font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#F3F3F3;white-space:nowrap}
.nl-lt .ac{position:absolute;left:0;right:0;height:0;border-top:1px dashed rgba(201,189,255,.55)}
.nl-lt .acl{position:absolute;left:calc(50% + 54px);transform:translateY(-140%);font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#C9BDFF;white-space:nowrap}
.nl-lt .reticle{position:absolute;left:0;right:0;top:50%;height:1px;z-index:2;pointer-events:none;background:linear-gradient(90deg,transparent,#C9BDFF 18%,#fff 50%,#C9BDFF 82%,transparent);box-shadow:0 0 12px 2px rgba(110,75,255,.75)}
.nl-lt .reticle::before{content:"";position:absolute;left:0;right:0;top:-70px;height:140px;background:linear-gradient(transparent,rgba(110,75,255,.14),transparent)}
.nl-lt .reticle::after{content:"";position:absolute;left:50%;top:-4px;width:9px;height:9px;margin-left:-4px;border:1px solid #fff;transform:rotate(45deg);background:#000}
.nl-lt .cards{display:grid;align-items:center}
.nl-lt .lc{grid-area:1 / 1;display:flex;flex-direction:column;gap:18px;opacity:0;filter:blur(14px);transform:translateY(16px);transition:opacity .7s cubic-bezier(.16,1,.3,1),filter .7s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);visibility:hidden}
.nl-lt .lc.on{opacity:1;filter:none;transform:none;visibility:visible}
.nl-lt .lc .code{display:flex;justify-content:space-between;gap:12px;color:#A6A6A6}
.nl-lt .lc .live::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;margin-right:8px;vertical-align:1px;animation:nl-lt-blink 1.6s infinite}
@keyframes nl-lt-blink{50%{opacity:.25}}
.nl-lt .lc h3{margin:0;font-size:var(--lth);font-weight:300;letter-spacing:-.055em;line-height:.85}
.nl-lt .lc p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch}
.nl-lt .lc .facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid ${L}}
.nl-lt .lc .facts div{display:flex;flex-direction:column;gap:6px;padding:12px 14px 0 0;min-width:0}
.nl-lt .lc .facts div+div{padding-left:14px;border-left:1px solid ${L}}
.nl-lt .lc .facts span{color:#A6A6A6}
.nl-lt .lc .facts b{font:400 var(--ltf)/1 "Geist Mono",monospace;letter-spacing:-.04em;color:#F3F3F3;font-variant-numeric:tabular-nums;white-space:nowrap}
.nl-lt .lc .prog{display:flex;align-items:center;gap:12px;color:#A6A6A6}
.nl-lt .lc .prog i{display:block;flex:1;max-width:220px;height:2px;background:rgba(243,243,243,.1);position:relative}
.nl-lt .lc .prog i::after{content:"";position:absolute;inset:0 auto 0 0;width:var(--pw);background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.7)}
.nl-lt .lc .prog b{color:#F3F3F3;font-weight:400}
.nl-lt.static .pin{position:relative;height:auto;min-height:0}
.nl-lt.static .cards{grid-template-columns:1fr 1fr;gap:40px 24px}
.nl-lt.static .lc{grid-area:auto;opacity:1;filter:none;transform:none;visibility:visible}
.nl-lt.static .rw{min-height:420px}
.nl-lt.is-md .body{grid-template-columns:96px minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:16px 18px}
.nl-lt.is-md .read{grid-column:1 / -1;flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:6px 16px}
.nl-lt.is-md .ml,.nl-lt.is-md .acl,.nl-lt.is-md .tl{display:none}
.nl-lt.is-md .lc .facts{grid-template-columns:1fr 1fr}
.nl-lt.is-md .lc .facts div:nth-child(3){display:none}
.nl-lt.is-md.static .cards{grid-template-columns:1fr}
`),
      (A.defaultProps = {
        number: `02`,
        title: `Sites`,
        sub: `Everything we run sits above the Arctic Circle`,
        hint: `Scroll to travel north`,
        start: 66.2,
        end: 69.75,
        circle: 66.5634,
        sites: [
          {
            lat: 66.5634,
            code: `66.5634° N`,
            status: `The line`,
            name: `Arctic Circle`,
            text: `North of this line the sun stays down for weeks each winter and the air stays below 10 °C for most of the year. That is our cooling system.`,
            progress: 0,
            progressLabel: ``,
            f1: `Days below 10 °C`,
            v1: `300+`,
            f2: `Chillers needed`,
            v2: `0`,
            f3: `Grid`,
            v3: `Hydro`,
            live: !1,
            marker: ``,
          },
          {
            lat: 67.8558,
            code: `N-02 · 67.8558° N`,
            status: `Construction`,
            name: `Kiruna`,
            text: `A 120 MW campus on the SE1 grid, built next to a hydro plant. First jobs land in Q3 2027.`,
            progress: 38,
            progressLabel: `Building shell`,
            f1: `Capacity`,
            v1: `120 MW`,
            f2: `Halls`,
            v2: `4`,
            f3: `Opens`,
            v3: `Q3 2027`,
            live: !1,
            marker: `Kiruna · N-02`,
          },
          {
            lat: 68.4385,
            code: `N-01 · 68.4385° N`,
            status: `Live`,
            name: `Narvik`,
            text: `Our first hall, inside a former iron-ore mine above the Ofotfjord. Waste heat warms the town.`,
            progress: 0,
            progressLabel: ``,
            f1: `PUE now`,
            v1: `1.08`,
            f2: `Hall load`,
            v2: `72%`,
            f3: `GPUs`,
            v3: `24,576`,
            live: !0,
            marker: `Narvik · N-01`,
          },
          {
            lat: 69.6492,
            code: `HQ · 69.6492° N`,
            status: `Tromsø`,
            name: `Tromsø`,
            text: `Engineering and the 24/7 operations room. Every hall is watched from here, two hours' drive from the nearest rack.`,
            progress: 0,
            progressLabel: ``,
            f1: `Engineers`,
            v1: `34`,
            f2: `Ops room`,
            v2: `24/7`,
            f3: `Polar night`,
            v3: `Nov–Jan`,
            live: !1,
            marker: `Tromsø · HQ`,
          },
        ],
      }),
      p(A, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        hint: { type: m.String, title: `Hint` },
        start: { type: m.Number, title: `Start °N`, min: 66, max: 70, step: 0.01 },
        end: { type: m.Number, title: `End °N`, min: 66, max: 70, step: 0.01 },
        circle: { type: m.Number, title: `Circle °N`, min: 66, max: 70, step: 1e-4 },
        sites: {
          type: m.Array,
          title: `Places`,
          control: {
            type: m.Object,
            controls: {
              lat: { type: m.Number, title: `Latitude`, min: 66, max: 70, step: 1e-4 },
              marker: { type: m.String, title: `Ruler label` },
              code: { type: m.String, title: `Code` },
              status: { type: m.String, title: `Status` },
              live: { type: m.Boolean, title: `Live dot` },
              name: { type: m.String, title: `Name` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
              progress: { type: m.Number, title: `Progress %`, min: 0, max: 100 },
              progressLabel: { type: m.String, title: `Progress label` },
              f1: { type: m.String, title: `Fact 1` },
              v1: { type: m.String, title: `Value 1` },
              f2: { type: m.String, title: `Fact 2` },
              v2: { type: m.String, title: `Value 2` },
              f3: { type: m.String, title: `Fact 3` },
              v3: { type: m.String, title: `Value 3` },
            },
          },
        },
      }),
      (X = `
.nl-qw{${I};display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;border-top:1px solid ${L};padding-top:22px;width:100%}
.nl-qw .mono{${F}}
.nl-qw .lab{${R};grid-column:1 / span 3}
.nl-qw .lab .n{${z}}
.nl-qw .lab .s{color:#A6A6A6}
.nl-qw figure{grid-column:4 / span 9;margin:0;display:flex;flex-direction:column;gap:36px}
.nl-qw blockquote{margin:0;font-weight:400;letter-spacing:-.035em;line-height:1.06;max-width:24ch;text-wrap:balance}
.nl-qw figcaption{display:flex;align-items:center;gap:14px;font-size:14px}
.nl-qw figcaption svg{width:20px;height:20px}
.nl-qw figcaption .mono{color:#A6A6A6}
.nl-qw.is-md .lab,.nl-qw.is-md figure{grid-column:1 / -1}
`),
      (j.defaultProps = {
        number: `03`,
        title: `Customers`,
        sub: `In their words`,
        quote: `We moved pre-training to Narvik in March. Same throughput, and our energy bill fell by a third. The board noticed before we told them.`,
        name: `Amara Okafor`,
        role: `Head of Infrastructure · Tensorfield`,
      }),
      p(j, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        quote: { type: m.String, title: `Quote`, displayTextArea: !0 },
        name: { type: m.String, title: `Name` },
        role: { type: m.String, title: `Role` },
      }),
      (Z = `
.nl-rt{${I};width:100%}
.nl-rt .mono{${F}}
.nl-rt .lab{${R}}
.nl-rt .lab .n{${z}}
.nl-rt .lab .s{color:#A6A6A6}
.nl-rt .lab{transition:opacity 1.1s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1)}
.nl-rt.pre .lab{opacity:0;transform:translateY(20px)}
.nl-rt .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:32px}
.nl-rt .head>.mono{color:#A6A6A6}
.nl-rt .wrap{overflow-x:auto;border-top:1px solid ${L}}
.nl-rt table{width:100%;min-width:640px;border-collapse:collapse;font-variant-numeric:tabular-nums}
.nl-rt th,.nl-rt td{padding:22px 18px;border-bottom:1px solid ${L};text-align:right;transition:background .3s}
.nl-rt th:first-child,.nl-rt td:first-child{text-align:left;padding-left:0}
.nl-rt thead th{font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6;padding-top:16px;padding-bottom:16px}
.nl-rt tbody th{font-weight:400;font-size:var(--rtn);letter-spacing:-.025em}
.nl-rt tbody th small{display:block;margin-top:6px;font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#5E5E5E}
.nl-rt td b{font:400 var(--rtp)/1 "Geist Mono",monospace;letter-spacing:-.05em;font-feature-settings:"zero" 1;color:#A6A6A6;transition:color .3s}
.nl-rt td b small{font-size:10px;letter-spacing:.06em;margin-left:4px;color:#5E5E5E}
.nl-rt tr.hl td,.nl-rt td.hc{background:rgba(110,75,255,.05)}
.nl-rt td.hot{background:rgba(110,75,255,.14);box-shadow:inset 0 -1px 0 #C9BDFF}
.nl-rt td.hot b,.nl-rt tr.hl td b{color:#F3F3F3}
.nl-rt th.hc{color:#C9BDFF}
.nl-rt tbody tr{transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1)}
.nl-rt tbody tr.pre{opacity:0;transform:translateY(20px)}
.nl-rt .note{margin-top:14px;color:#5E5E5E}
`),
      (M.defaultProps = {
        number: `04`,
        title: `Rates`,
        sub: `Per GPU-hour, all-in`,
        aside: `Power, cooling and fabric included`,
        cols: `Hardware, On-demand, 1-year term, 3-year term`,
        unit: `/hr`,
        rows: [
          { name: `H200 SXM`, note: `141 GB HBM3e`, a: `$2.24`, b: `$1.84`, c: `$1.62` },
          { name: `B300`, note: `288 GB HBM3e`, a: `$2.98`, b: `$2.61`, c: `$2.34` },
          { name: `Sovereign hall`, note: `Private · EEA`, a: `—`, b: `Custom`, c: `Custom` },
        ],
        note: `Prices in USD, excluding VAT. Volume pricing from 4,096 GPUs.`,
      }),
      p(M, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        aside: { type: m.String, title: `Aside` },
        cols: { type: m.String, title: `Columns`, description: `Comma separated` },
        unit: { type: m.String, title: `Unit` },
        rows: {
          type: m.Array,
          title: `Rows`,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Name` },
              note: { type: m.String, title: `Note` },
              a: { type: m.String, title: `Column 2` },
              b: { type: m.String, title: `Column 3` },
              c: { type: m.String, title: `Column 4` },
            },
          },
        },
        note: { type: m.String, title: `Note` },
      }),
      (Q = `
.nl-bc{${I};position:relative;width:100%}
.nl-bc .mono{${F}}
.nl-bc .band{position:relative;isolation:isolate;overflow:hidden}
.nl-bc .scan{position:absolute;top:0;bottom:0;left:0;z-index:1;width:1px;background:linear-gradient(transparent,#fff 40%,#fff 60%,transparent);box-shadow:0 0 14px 3px rgba(201,189,255,.75),0 0 40px 10px rgba(110,75,255,.35);animation:nl-bc-scan 7s cubic-bezier(.6,0,.4,1) infinite}
@keyframes nl-bc-scan{0%{transform:translateX(0)}50%{transform:translateX(calc(var(--bw,1200px) - 1px))}100%{transform:translateX(0)}}
.nl-bc .frame{position:absolute;inset:0;z-index:2;pointer-events:none;border-block:1px solid rgba(243,243,243,.14)}
.nl-bc .frame .c{position:absolute;font:300 12px/1 "Geist Mono",monospace;color:#A6A6A6}
.nl-bc .lbl{position:absolute;color:#A6A6A6;font-variant-numeric:tabular-nums;transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1)}
.nl-bc .lbl b{color:#F3F3F3;font-weight:400}
.nl-bc .lbl.t{left:0;top:-24px}
.nl-bc .lbl.b{right:0;bottom:-24px}
.nl-bc .lbl.b b{color:#C9BDFF}
@media (prefers-reduced-motion:reduce){.nl-bc .scan{animation:none}}
`),
      (N.defaultProps = {
        topLabel: `Allocation closes in`,
        deadline: `2026-12-15T17:00:00Z`,
        bottomPre: `Q1 2027 ·`,
        bottomValue: `1,024`,
        bottomPost: `H200 left`,
        lightX: 0.55,
        gain: 2.2,
        seed: 27,
      }),
      p(N, {
        topLabel: { type: m.String, title: `Top label` },
        deadline: {
          type: m.String,
          title: `Deadline`,
          description: `ISO date, e.g. 2026-12-15T17:00:00Z`,
        },
        bottomPre: { type: m.String, title: `Bottom text` },
        bottomValue: { type: m.String, title: `Bottom value` },
        bottomPost: { type: m.String, title: `Bottom after` },
        lightX: { type: m.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        gain: { type: m.Number, title: `Gain`, min: 0.5, max: 4, step: 0.05 },
        seed: { type: m.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }),
      ($ = `
.nl-ef{${I};position:relative;display:flex;flex-direction:column;gap:14px;width:100%}
.nl-ef .mono{${F}}
.nl-ef .lbl{color:#A6A6A6;margin-bottom:4px}
.nl-ef .field{display:flex;align-items:center;gap:8px;border-bottom:1px solid #F3F3F3;padding-bottom:8px}
.nl-ef input{flex:1;min-width:0;background:transparent;border:0;color:#F3F3F3;font:400 16px "Inter Tight",sans-serif;outline:none;padding:0;height:36px}
.nl-ef input::placeholder{color:rgba(243,243,243,.4)}
.nl-ef .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.nl-ef .msg{position:absolute;left:0;top:calc(100% + 10px);color:#D9D9D9}
.nl-ef button{position:relative;display:inline-flex;align-items:center;gap:10px;height:38px;padding:0 0 0 12px;border-radius:2px;border:0;cursor:pointer;white-space:nowrap;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;color:#000;background:linear-gradient(#000,#000) 0 0/0% 100% no-repeat,#F3F3F3;box-shadow:inset 0 0 0 1px #F3F3F3;transition:background-size .6s cubic-bezier(.16,1,.3,1),color .4s cubic-bezier(.16,1,.3,1)}
.nl-ef button::before{content:"";width:5px;height:5px;background:currentColor;flex:none}
.nl-ef button::after{content:"";width:12px;box-sizing:content-box;align-self:stretch;margin-left:6px;padding:0 13px;border-left:1px solid currentColor;opacity:.75;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23000' stroke-width='1.1'/%3E%3C/svg%3E") center/12px 12px no-repeat;transition:padding .5s cubic-bezier(.16,1,.3,1)}
.nl-ef button:hover{background-size:100% 100%,auto;color:#F3F3F3}
.nl-ef button:hover::after{padding:0 9px 0 15px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23F3F3F3' stroke-width='1.1'/%3E%3C/svg%3E")}
`),
      (P.defaultProps = {
        label: `Q1 2027 allocation is open`,
        placeholder: `Work email`,
        button: `Request quote`,
        okText: `Thanks. An engineer replies within one working day.`,
        errText: `Enter a work email, like you@lab.com`,
      }),
      p(P, {
        label: { type: m.String, title: `Label` },
        placeholder: { type: m.String, title: `Placeholder` },
        button: { type: m.String, title: `Button` },
        okText: { type: m.String, title: `Success text` },
        errText: { type: m.String, title: `Error text` },
      }));
  });
export { j as a, ee as c, k as i, D as n, M as o, A as r, O as s, N as t };
//# sourceMappingURL=Home02.Dzfl0wlh.mjs.map
