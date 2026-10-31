import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  I as n,
  P as r,
  R as i,
  _ as a,
  b as o,
  c as s,
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
  d as v,
  g as y,
  h as b,
  m as x,
  p as S,
  w as C,
  x as w,
  y as T,
} from "./shared-lib.W6te6cXm.mjs";
import { t as ee } from "./Parts-ISc5PT.Do1ptRxj.mjs";
import { a as te, n as ne, r as re, t as ie } from "./Inner-d2rabs.CpMZmyL3.mjs";
function E(e, t = 0, n = `0px 0px -8% 0px`) {
  let r = C(),
    o = _(e, n),
    [s, c] = a(!1);
  return (
    f(() => {
      let n = e.current;
      n && !w() && !r && n.getBoundingClientRect().bottom > i.innerHeight * t && c(!0);
    }, [r]),
    { pre: s && !o, go: s && o }
  );
}
function D(e) {
  let t = o(null),
    n = o(null),
    a = g(t),
    { pre: s } = E(t),
    u = C(),
    d = [];
  return (
    (e.parts || []).forEach((e) =>
      (e.text || ``)
        .split(/\s+/)
        .filter(Boolean)
        .forEach((t) => d.push({ t, grey: e.grey }))
    ),
    f(() => {
      let e = n.current;
      if (!e || w() || u) return;
      let t = Array.from(e.querySelectorAll(`.w`)),
        r = 1 + (t.length - 1) * 0.05,
        a = (e, t, n) => `rgb(${e.map((e, r) => Math.round(e + (t[r] - e) * n)).join(`,`)})`,
        o = [42, 42, 42],
        s = [243, 243, 243],
        c = [94, 94, 94],
        l = 0,
        d = () => {
          l = 0;
          let n = e.getBoundingClientRect(),
            u = i.innerHeight,
            d = u * 0.8,
            f = u * 0.45 - n.height,
            p = Math.max(0, Math.min(1, (d - n.top) / (d - f)));
          t.forEach((e, t) => {
            let n = Math.max(0, Math.min(1, p * r - t * 0.05));
            e.style.color = a(o, e.dataset.g ? c : s, n);
          });
        },
        f = () => {
          l ||= requestAnimationFrame(d);
        };
      return (
        d(),
        i.addEventListener(`scroll`, f, { passive: !0 }),
        i.addEventListener(`resize`, f),
        () => {
          (i.removeEventListener(`scroll`, f),
            i.removeEventListener(`resize`, f),
            cancelAnimationFrame(l));
        }
      );
    }, [u, e.parts]),
    c(`div`, {
      ref: t,
      className: `nl-mi` + (s ? ` pre` : ``) + y(a),
      style: e.style,
      children: [
        T(),
        l(`style`, { dangerouslySetInnerHTML: { __html: J } }),
        l(`span`, { className: `eb mono`, children: e.label }),
        c(`div`, {
          className: `b`,
          children: [
            l(`p`, {
              ref: n,
              style: { fontSize: a <= 600 ? 23 : H(24, 2.4, 40, a) },
              children: d.map((e, t) =>
                c(
                  r,
                  {
                    children: [
                      t ? ` ` : ``,
                      l(`span`, {
                        className: `w` + (e.grey ? ` tone` : ``),
                        "data-g": e.grey ? `1` : void 0,
                        children: e.t,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            e.button
              ? l(`div`, {
                  className: `fx`,
                  style: { marginTop: a <= 600 ? 32 : 44 },
                  children: l(v, {
                    label: e.button,
                    link: e.link,
                    ghost: !0,
                    newTab: !1,
                    submit: !1,
                    visual: !1,
                    full: !1,
                  }),
                })
              : null,
          ],
        }),
      ],
    })
  );
}
function O(e) {
  let t = o(null),
    n = o(null),
    r = g(t),
    s = C(),
    { pre: u, go: d } = E(t),
    [p, m] = a(0);
  f(() => {
    if (w() || s) return;
    let e = 0,
      t = () => {
        e = 0;
        let t = n.current;
        if (!t) return;
        let r = t.getBoundingClientRect(),
          a = i.innerHeight;
        m(1 - Math.max(0, Math.min(1, (a * 0.92 - r.top) / (a * 0.52))));
      },
      r = () => {
        e ||= requestAnimationFrame(t);
      };
    return (
      t(),
      i.addEventListener(`scroll`, r, { passive: !0 }),
      () => {
        (i.removeEventListener(`scroll`, r), cancelAnimationFrame(e));
      }
    );
  }, [s]);
  let h = e.events || [],
    _ = Math.max(
      0,
      h.findIndex((e) => e.state === `now`)
    ),
    v = r <= 960,
    x = h.length ? ((_ + 0.15) / h.length) * 100 : 0,
    S = r <= 600 ? 4 / 3 : v ? 16 / 10 : 2.5;
  return c(`div`, {
    ref: t,
    className: `nl-st` + (u ? ` pre` : ``) + y(r),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Y } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, r) },
        children: [l(U, { n: e.number, t: e.title, s: e.sub }), l(`p`, { children: e.intro })],
      }),
      c(`div`, {
        className: `tl`,
        role: `list`,
        style: { gridTemplateColumns: `repeat(${h.length || 1},minmax(0,1fr))` },
        children: [
          l(`span`, {
            className: `rail`,
            "aria-hidden": `true`,
            children: l(`i`, { style: v ? { height: x + `%` } : { width: x + `%` } }),
          }),
          h.map((t, n) =>
            c(
              `div`,
              {
                role: `listitem`,
                className: `ev fx ` + (t.state || `past`),
                style: q(d, n, 0.07, 0.2),
                children: [
                  t.state === `now` && e.nowLabel
                    ? l(`span`, {
                        className: `now-l mono`,
                        "aria-hidden": `true`,
                        children: e.nowLabel,
                      })
                    : null,
                  c(`span`, {
                    className: `yr`,
                    children: [t.year, l(`span`, { children: t.when })],
                  }),
                  l(`h3`, { style: { fontSize: H(20, 1.55, 24, r) }, children: t.title }),
                  l(`p`, { children: t.text }),
                  t.tag ? l(`span`, { className: `tag mono`, children: t.tag }) : null,
                  t.linkLabel
                    ? c(`a`, {
                        className: `more mono`,
                        href: t.link || O.defaultProps.events[n]?.link || `#`,
                        children: [t.linkLabel, ` `, W],
                      })
                    : null,
                ],
              },
              n
            )
          ),
        ],
      }),
      c(`figure`, {
        ref: n,
        className: `band`,
        style: {
          aspectRatio: String(S),
          marginTop: H(56, 7, 112, r),
          clipPath: `inset(${p * 10}% ${p * 8}% ${p * 10}% ${p * 8}%)`,
        },
        children: [
          l(`img`, { src: e.image?.src || G[e.photo] || b.company01, alt: e.alt, loading: `lazy` }),
          l(`i`, {
            className: `crn`,
            style: {
              top: 14,
              left: 14,
              width: 14,
              height: 14,
              borderTopWidth: 1,
              borderLeftWidth: 1,
            },
          }),
          l(`i`, {
            className: `crn`,
            style: {
              top: 14,
              right: 14,
              width: 14,
              height: 14,
              borderTopWidth: 1,
              borderRightWidth: 1,
            },
          }),
          c(`figcaption`, {
            className: `mono`,
            children: [
              l(`span`, { children: e.captionLeft }),
              l(`span`, { children: e.captionRight }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ae({ value: e, on: t }) {
  let n = (e || ``).match(/^([^0-9]*)([0-9.,]+)(.*)$/),
    [r, i] = a(e);
  return (
    f(() => {
      if (!t || !n) {
        i(e);
        return;
      }
      let r = n[2],
        a = parseFloat(r.replace(/,/g, ``)),
        o = (r.split(`.`)[1] || ``).length,
        s = r.includes(`,`),
        c = performance.now(),
        l = 0,
        u = (t) => {
          let r = Math.min(1, (t - c) / 1600),
            d = a * (1 - (1 - r) ** 4);
          (i(n[1] + (s ? Math.round(d).toLocaleString(`en-US`) : d.toFixed(o)) + n[3]),
            r < 1 ? (l = requestAnimationFrame(u)) : i(e));
        };
      return ((l = requestAnimationFrame(u)), () => cancelAnimationFrame(l));
    }, [t, e]),
    l(s, { children: r })
  );
}
function k(e) {
  let t = o(null),
    n = g(t),
    { pre: r, go: i } = E(t);
  return c(`div`, {
    ref: t,
    className: `nl-nb` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: X } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [l(U, { n: e.number, t: e.title, s: e.sub }), l(`p`, { children: e.intro })],
      }),
      l(`div`, {
        className: `nb`,
        children: (e.items || []).map((e, t) =>
          c(
            `div`,
            {
              className: `fx`,
              style: q(i, t),
              children: [
                c(`b`, {
                  style: { fontSize: n <= 600 ? H(34, 10, 44, n) : H(40, 4.2, 72, n) },
                  children: [
                    l(ae, { value: e.value, on: i }),
                    e.unit ? l(`small`, { children: e.unit }) : null,
                  ],
                }),
                l(`span`, { className: `mono`, children: e.label }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function A(e) {
  let t = o(null),
    n = g(t),
    { pre: r, go: i } = E(t),
    a = n <= 600 ? 1 : n <= 960 ? 2 : 4,
    s = e.items || [];
  return c(`div`, {
    ref: t,
    className: `nl-pr` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Z } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [l(U, { n: e.number, t: e.title, s: e.sub }), l(`p`, { children: e.intro })],
      }),
      l(`div`, {
        className: `pr`,
        style: { gridTemplateColumns: `repeat(${a},minmax(0,1fr))` },
        children: s.map((e, t) =>
          c(
            `article`,
            {
              className: `pt lit`,
              tabIndex: 0,
              style: {
                minHeight: n <= 960 ? 300 : 340,
                padding: H(22, 2.2, 30, n),
                borderLeft: t % a ? `1px solid ${I}` : void 0,
                borderTop: t >= a ? `1px solid ${I}` : void 0,
                ...q(i, t),
              },
              children: [
                c(`div`, {
                  className: `top`,
                  children: [
                    te(e.icon),
                    c(`span`, {
                      className: `mono`,
                      children: [`P / `, String(t + 1).padStart(2, `0`)],
                    }),
                  ],
                }),
                l(`h3`, { style: { fontSize: H(21, 1.7, 26, n) }, children: e.title }),
                l(`p`, { children: e.text }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function j(e) {
  let t = o(null),
    n = g(t),
    { pre: r, go: i } = E(t),
    a = n <= 600 ? 2 : n <= 1200 ? 3 : 6,
    s = n <= 600 ? `4/5` : n <= 1200 ? `1/1` : `4/5`,
    u = (e) =>
      e
        .split(/\s+/)
        .map((e) => e[0] || ``)
        .join(``)
        .slice(0, 2)
        .toUpperCase(),
    d = e.people || [];
  return c(`div`, {
    ref: t,
    className: `nl-tm` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: oe } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [l(U, { n: e.number, t: e.title, s: e.sub }), l(`p`, { children: e.intro })],
      }),
      c(`div`, {
        className: `team`,
        style: {
          gridTemplateColumns: `repeat(${a},minmax(0,1fr))`,
          rowGap: n <= 600 ? 36 : n <= 1200 ? 40 : 24,
          columnGap: n <= 600 ? 12 : 16,
        },
        children: [
          d.map((e, t) => {
            let r = e.image?.src || (e.photo && e.photo !== `none` ? G[e.photo] : ``);
            return c(
              `article`,
              {
                className: `pp`,
                style: q(i, t),
                children: [
                  r
                    ? c(`figure`, {
                        className: `ph`,
                        style: { aspectRatio: s },
                        children: [
                          l(`img`, { src: r, alt: e.name, loading: `lazy` }),
                          l(`i`, {
                            className: `crn`,
                            style: {
                              top: 10,
                              left: 10,
                              width: 10,
                              height: 10,
                              borderTopWidth: 1,
                              borderLeftWidth: 1,
                            },
                          }),
                          l(`i`, {
                            className: `crn`,
                            style: {
                              bottom: 10,
                              right: 10,
                              width: 10,
                              height: 10,
                              borderBottomWidth: 1,
                              borderRightWidth: 1,
                            },
                          }),
                        ],
                      })
                    : c(`div`, {
                        className: `mg`,
                        role: `img`,
                        "aria-label": e.name,
                        style: { aspectRatio: s, "--gx": Q[t % Q.length] },
                        children: [
                          l(`span`, {
                            className: `ini`,
                            style: { fontSize: H(34, 3, 50, n) },
                            children: u(e.name),
                          }),
                          l(`span`, {
                            className: `ix mono`,
                            children: String(t + 1).padStart(2, `0`),
                          }),
                        ],
                      }),
                  c(`div`, {
                    className: `b`,
                    children: [
                      l(`h3`, { children: e.name }),
                      l(`span`, { className: `mono`, children: e.role }),
                      l(`span`, { className: `mono dim`, children: e.place }),
                    ],
                  }),
                ],
              },
              t
            );
          }),
          e.joinTitle
            ? c(`a`, {
                className: `pp`,
                href: e.joinLink || `/careers`,
                style: q(i, d.length),
                children: [
                  c(`div`, {
                    className: `jn`,
                    style: { aspectRatio: s },
                    children: [
                      l(`i`, { className: `pl`, "aria-hidden": `true` }),
                      c(`div`, {
                        children: [
                          l(`b`, { style: { fontSize: H(30, 2.6, 42, n) }, children: e.joinCount }),
                          l(`span`, { className: `mono`, children: e.joinLabel }),
                        ],
                      }),
                    ],
                  }),
                  c(`div`, {
                    className: `b`,
                    children: [
                      l(`h3`, { children: e.joinTitle }),
                      c(`span`, { className: `mono go`, children: [e.joinGo, ` `, W] }),
                      l(`span`, { className: `mono dim`, children: e.joinNote }),
                    ],
                  }),
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function M(e) {
  let t = o(null),
    n = g(t),
    { pre: r, go: i } = E(t),
    a = n <= 960,
    s = n <= 600,
    u = s ? 72 : 88;
  return c(`div`, {
    ref: t,
    className: `nl-ls` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: se } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [
          l(U, { n: e.number, t: e.title, s: e.sub }),
          e.button
            ? l(v, {
                label: e.button,
                link: e.link,
                ghost: !0,
                newTab: !1,
                submit: !1,
                visual: !1,
                full: !1,
              })
            : null,
        ],
      }),
      l(`div`, {
        className: `row`,
        style: { gridTemplateColumns: a ? `1fr` : `repeat(3,minmax(0,1fr))` },
        children: (e.items || []).map((e, t) =>
          c(
            `a`,
            {
              className: `ls`,
              href: e.link || M.defaultProps.items[t]?.link || `/contact-02`,
              style: {
                gridTemplateColumns: `${u}px minmax(0,1fr)`,
                gap: s ? 16 : 18,
                padding: a
                  ? `18px ${s ? 0 : 18}px 18px 0`
                  : t
                    ? `18px 18px 18px 18px`
                    : `18px 18px 18px 0`,
                borderLeft: !a && t ? `1px solid ${I}` : void 0,
                borderTop: a && t ? `1px solid ${I}` : void 0,
                ...q(i, t),
              },
              children: [
                l(`figure`, {
                  className: `ph`,
                  style: { width: u, height: u },
                  children: l(`img`, {
                    src: e.image?.src || G[e.photo] || b.hero,
                    alt: ``,
                    loading: `lazy`,
                  }),
                }),
                c(`div`, {
                  className: `t`,
                  children: [
                    c(`div`, {
                      className: `h`,
                      children: [
                        l(`h3`, { children: e.name }),
                        e.tagged
                          ? l(`span`, {
                              className: `tag mono` + (e.violet ? ` v` : ``),
                              children: e.status,
                            })
                          : l(`span`, {
                              className: `mono` + (e.live ? ` live` : ``),
                              children: e.status,
                            }),
                      ],
                    }),
                    l(`span`, { className: `mono`, children: e.sub }),
                    l(`span`, { className: `mono co`, children: e.coords }),
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
function N(e) {
  let n = o(null),
    r = g(n),
    { pre: i, go: a } = E(n),
    s = r <= 960,
    u = r <= 600,
    d = e.items || [],
    f = (e) =>
      u
        ? { gridColumn: e === 4 ? `1 / -1` : `auto`, height: 92, fontSize: 15, gap: 8 }
        : s
          ? { gridColumn: e < 3 ? `span 2` : `span 3`, height: 128, fontSize: 19 }
          : { height: 128, fontSize: 19, borderLeft: e ? `1px solid ${I}` : void 0 };
  return c(`div`, {
    ref: n,
    className: `nl-iv` + (i ? ` pre` : ``) + y(r),
    style: e.style,
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: ce } }),
      c(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, r) },
        children: [l(U, { n: e.number, t: e.title, s: e.sub }), l(`p`, { children: e.intro })],
      }),
      l(`div`, {
        className: `inv`,
        style: {
          gridTemplateColumns: u
            ? `repeat(2,minmax(0,1fr))`
            : s
              ? `repeat(6,minmax(0,1fr))`
              : `repeat(${d.length || 1},minmax(0,1fr))`,
          gap: +!!s,
          background: s ? I : void 0,
        },
        children: d.map((e, n) =>
          c(
            `div`,
            {
              className: `iv`,
              style: { ...f(n), ...q(a, n) },
              children: [
                t($[e.mark] || $.wave, { width: u ? 16 : 20, height: u ? 16 : 20 }),
                l(`span`, { className: e.style || `bold`, children: e.name }),
                e.extra ? l(`span`, { className: `mono2`, children: e.extra }) : null,
              ],
            },
            n
          )
        ),
      }),
      l(`div`, {
        className: `foot mono`,
        children: (e.rounds || []).map((e, t) =>
          c(`span`, { children: [l(`b`, { children: e.name }), ` · `, e.when] }, t)
        ),
      }),
    ],
  });
}
var P,
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
  oe,
  Q,
  se,
  $,
  ce,
  le = e(() => {
    (n(),
      u(),
      d(),
      h(),
      S(),
      ee(),
      ie(),
      (P = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (F = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (I = `rgba(243,243,243,.12)`),
      (L = `cubic-bezier(.16,1,.3,1)`),
      (R = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (z = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (B = `-webkit-mask-image:${x};mask-image:${x};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px`),
      (V = (e) => `
.${e}{${F};width:100%}
.${e} .mono{${P}}
.${e} .lab{${R}}
.${e} .lab .n{${z}}
.${e} .lab .s{color:#A6A6A6}
.${e} .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.${e} .head > p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch;text-wrap:balance}
.${e} .tag{display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 9px;box-shadow:inset 0 0 0 1px ${I};color:#A6A6A6;white-space:nowrap}
.${e} .tag.v{color:#C9BDFF;box-shadow:inset 0 0 0 1px rgba(201,189,255,.35)}
.${e} .live::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;margin-right:8px;vertical-align:1px;animation:nl-co-blink 1.6s infinite}
@keyframes nl-co-blink{50%{opacity:.25}}
.${e} .ph{position:relative;overflow:hidden;background:#0A0A0A;margin:0}
.${e} .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.82);transition:transform 1.4s ${L},filter 1s ${L};${B}}
.${e} .ph::after{content:"";position:absolute;inset:0;background:radial-gradient(80% 60% at 100% 100%,rgba(110,75,255,.22),transparent 70%);pointer-events:none}
.${e} .crn{position:absolute;z-index:2;border:0 solid rgba(243,243,243,.7)}
.${e} .fx{transition:opacity 1.1s ${L},transform 1.1s ${L}}
.${e}.pre .fx{opacity:0;transform:translateY(28px)}
.${e} .lab{transition:opacity 1.1s ${L},transform 1.1s ${L}}
.${e}.pre .lab{opacity:0;transform:translateY(20px)}
`),
      (H = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (U = ({ n: e, t, s: n }) =>
        c(`div`, {
          className: `lab`,
          children: [
            e ? l(`span`, { className: `n`, children: e }) : null,
            l(`span`, { children: t }),
            l(`span`, { className: `s`, children: n }),
          ],
        })),
      (W = l(`svg`, {
        viewBox: `0 0 12 12`,
        width: `10`,
        height: `10`,
        fill: `none`,
        "aria-hidden": `true`,
        children: l(`path`, {
          d: `M2.5 9.5 9.5 2.5M4 2.5h5.5V8`,
          stroke: `currentColor`,
          strokeWidth: `1.1`,
        }),
      })),
      (G = {
        company01: b.company01,
        company02: b.company02,
        hero: b.hero,
        racks: b.racks,
        trays: b.trays,
        ravi: b.ravi,
        lena: b.lena,
        narvikCampus: b.narvikCampus,
        tromsoHq: b.tromsoHq,
        kirunaBuild: b.kirunaBuild,
      }),
      (K = Object.keys(G)),
      (q = (e, t, n = 0.07, r = 0) => (e ? { transitionDelay: r + t * n + `s` } : void 0)),
      (J =
        V(`nl-mi`) +
        `
.nl-mi{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px}
.nl-mi .eb{grid-column:1 / span 3;align-self:start;color:#A6A6A6;padding-top:.9em;display:flex;align-items:center;gap:10px}
.nl-mi .eb::before{content:"";width:5px;height:5px;background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9)}
.nl-mi .b{grid-column:4 / span 9}
.nl-mi p{margin:0;font-weight:400;line-height:1.14;letter-spacing:-.025em;max-width:31ch;text-wrap:pretty}
.nl-mi p .tone{color:#5E5E5E}
.nl-mi.is-md .eb,.nl-mi.is-md .b{grid-column:1 / -1}
.nl-mi.is-md .eb{padding-top:0;margin-bottom:8px}
`),
      (D.defaultProps = {
        label: `Mission`,
        parts: [
          { text: `Training a model is an energy problem.`, grey: !1 },
          {
            text: `Up to forty percent of that energy goes to fighting heat, in places that are already hot.`,
            grey: !0,
          },
          { text: `We put the GPUs where the air is cold and the power falls downhill,`, grey: !1 },
          { text: `and sell the result by the GPU-hour.`, grey: !0 },
        ],
        button: `How Hall A stays cold`,
        link: `/news/why-we-cool-with-air-not-water`,
      }),
      p(D, {
        label: { type: m.String, title: `Label` },
        parts: {
          type: m.Array,
          title: `Text parts`,
          control: {
            type: m.Object,
            controls: {
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
              grey: { type: m.Boolean, title: `Grey` },
            },
          },
        },
        button: { type: m.String, title: `Button` },
        link: { type: m.Link, title: `Link` },
      }),
      (Y =
        V(`nl-st`) +
        `
.nl-st .tl{position:relative;display:grid;gap:24px;padding-top:44px;margin-top:24px}
.nl-st .rail{position:absolute;left:0;right:0;top:4px;height:1px;background:repeating-linear-gradient(90deg,${I} 0 4px,transparent 4px 8px)}
.nl-st .rail i{position:absolute;left:0;top:0;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.6);transform-origin:0 50%;transition:transform 1.6s ${L}}
.nl-st.pre .rail i{transform:scaleX(0)}
.nl-st .ev{position:relative;display:flex;flex-direction:column;gap:14px;padding-right:12px}
.nl-st .ev::before{content:"";position:absolute;left:0;top:-44px;width:9px;height:9px;background:#F3F3F3}
.nl-st .ev.now::before{background:#C9BDFF;box-shadow:0 0 0 4px rgba(110,75,255,.18),0 0 14px rgba(110,75,255,.9)}
.nl-st .ev.future::before{background:#000;box-shadow:inset 0 0 0 1px #A6A6A6}
.nl-st .now-l{position:absolute;left:4px;top:-70px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;color:#C9BDFF;white-space:nowrap}
.nl-st .now-l::after{content:"";width:1px;height:14px;background:linear-gradient(#C9BDFF,transparent)}
.nl-st .yr{font:400 13px/1 "Geist Mono",monospace;letter-spacing:-.01em;color:#F3F3F3;font-feature-settings:"zero" 1}
.nl-st .yr span{margin-left:8px;color:#A6A6A6;font-size:10px;letter-spacing:.1em;text-transform:uppercase}
.nl-st h3{margin:0;font-weight:400;letter-spacing:-.03em;line-height:1.12;text-wrap:balance}
.nl-st .ev p{margin:0;color:#A6A6A6;font-weight:400;font-size:15px;max-width:30ch}
.nl-st .ev .tag{align-self:flex-start}
.nl-st .ev.future h3,.nl-st .ev.future .yr{color:#A6A6A6}
.nl-st .more{display:inline-flex;align-items:center;gap:8px;color:#A6A6A6;text-decoration:none;transition:color .3s}
.nl-st .more:hover{color:#C9BDFF}
.nl-st .band{position:relative;overflow:hidden;background:#0A0A0A;margin:0}
.nl-st .band img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.74);${B}}
.nl-st .band::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.25),transparent 30%,transparent 60%,rgba(0,0,0,.72)),radial-gradient(60% 70% at 0% 100%,rgba(110,75,255,.26),transparent 70%);pointer-events:none}
.nl-st .band figcaption{position:absolute;left:28px;right:28px;bottom:20px;z-index:2;display:flex;justify-content:space-between;gap:16px;color:rgba(243,243,243,.82)}
.nl-st.is-md .tl{grid-template-columns:1fr!important;gap:40px;padding-top:0;padding-left:36px;margin-top:0}
.nl-st.is-md .rail{left:4px;right:auto;top:6px;bottom:0;width:1px;height:auto;background:repeating-linear-gradient(180deg,${I} 0 4px,transparent 4px 8px)}
.nl-st.is-md .rail i{width:1px!important;background:linear-gradient(180deg,#6E4BFF,#C9BDFF);transform-origin:50% 0}
.nl-st.is-md.pre .rail i{transform:scaleY(0)}
.nl-st.is-md .now-l{display:none}
.nl-st.is-md .ev::before{left:-36px;top:2px}
.nl-st.is-md .ev p{max-width:44ch}
.nl-st.is-sm .band figcaption{left:16px;right:16px;bottom:14px;flex-direction:column;gap:6px}
`),
      (O.defaultProps = {
        number: `01`,
        title: `Story`,
        sub: `From a desk in Tromsø to two halls`,
        intro: `Three years, two sites and one rule: build only where the climate does the cooling.`,
        nowLabel: `Today`,
        events: [
          {
            year: `2024`,
            when: `Jan`,
            title: `Founded in Tromsø`,
            text: `Three engineers from grid operations and hyperscale build-out start Nordlys above the Arctic Circle.`,
            tag: ``,
            linkLabel: ``,
            link: ``,
            state: `past`,
          },
          {
            year: `2025`,
            when: `Apr`,
            title: `N-01 Narvik breaks ground`,
            text: `A former industrial site on the fjord, next to a 420 kV line. Series Seed closes the same month.`,
            tag: `Seed · $13M`,
            linkLabel: ``,
            link: ``,
            state: `past`,
          },
          {
            year: `2026`,
            when: `Mar`,
            title: `Hall A goes live`,
            text: `The first 2,048 H200s come online on free-air cooling. 9,984 are running by September.`,
            tag: ``,
            linkLabel: ``,
            link: ``,
            state: `past`,
          },
          {
            year: `2026`,
            when: `Sep`,
            title: `Series A, $48M`,
            text: `Raised to build N-02 in Kiruna and add B300 capacity in Narvik.`,
            tag: ``,
            linkLabel: `Read the news`,
            link: `/news/nordlys-raises-48m-series-a`,
            state: `now`,
          },
          {
            year: `2027`,
            when: `Q3`,
            title: `N-02 Kiruna opens`,
            text: `A second hall across the border in Sweden, on the same hydro grid and Arctic air.`,
            tag: `Planned`,
            linkLabel: ``,
            link: ``,
            state: `future`,
          },
        ],
        photo: `company01`,
        alt: `Engineers planning in Hall A, N-01 Narvik`,
        captionLeft: `Fig. 01 · Hall A, N-01 Narvik`,
        captionRight: `68.4385° N · 17.4273° E`,
      }),
      p(O, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        nowLabel: { type: m.String, title: `Now label` },
        events: {
          type: m.Array,
          title: `Milestones`,
          control: {
            type: m.Object,
            controls: {
              year: { type: m.String, title: `Year` },
              when: { type: m.String, title: `Month` },
              title: { type: m.String, title: `Title` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
              tag: { type: m.String, title: `Tag` },
              linkLabel: { type: m.String, title: `Link label` },
              link: { type: m.Link, title: `Link` },
              state: {
                type: m.Enum,
                title: `State`,
                options: [`past`, `now`, `future`],
                optionTitles: [`Past`, `Now`, `Future`],
              },
            },
          },
        },
        image: { type: m.ResponsiveImage, title: `Photo` },
        photo: { type: m.Enum, title: `Built-in photo`, options: K },
        alt: { type: m.String, title: `Alt text` },
        captionLeft: { type: m.String, title: `Caption left` },
        captionRight: { type: m.String, title: `Caption right` },
      }),
      (X =
        V(`nl-nb`) +
        `
.nl-nb .nb{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-block:1px solid ${I}}
.nl-nb .nb > div{position:relative;display:flex;flex-direction:column;gap:18px;padding:30px 24px 34px 0}
.nl-nb .nb > div + div{padding-left:24px;border-left:1px solid ${I}}
.nl-nb .nb > div::before{content:"";position:absolute;top:-1px;left:0;width:32px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.7)}
.nl-nb .nb > div + div::before{left:24px}
.nl-nb .nb b{font-family:"Geist Mono",monospace;font-weight:400;line-height:.9;letter-spacing:-.07em;font-feature-settings:"zero" 1;white-space:nowrap}
.nl-nb .nb b small{font-size:.42em;letter-spacing:-.02em;margin-left:.15em;color:#A6A6A6}
.nl-nb .nb .mono{color:#A6A6A6}
.nl-nb.is-md .nb{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-nb.is-md .nb > div:nth-child(3){padding-left:0;border-left:0}
.nl-nb.is-md .nb > div:nth-child(3)::before{left:0}
.nl-nb.is-md .nb > div:nth-child(n+3){border-top:1px solid ${I}}
.nl-nb.is-sm .nb > div{padding:24px 12px 26px 0}
.nl-nb.is-sm .nb > div + div{padding-left:12px}
.nl-nb.is-sm .nb > div:nth-child(3){padding-left:0}
.nl-nb.is-sm .nb > div + div::before{left:12px}
.nl-nb.is-sm .nb > div:nth-child(3)::before{left:0}
`),
      (k.defaultProps = {
        number: `02`,
        title: `In numbers`,
        sub: `Metered, not modelled`,
        intro: `Trailing twelve months, Hall A. Updated on the first of every month.`,
        items: [
          { value: `9,984`, unit: ``, label: `GPUs live in Narvik` },
          { value: `98.7%`, unit: ``, label: `Hydro power` },
          { value: `1.08`, unit: ``, label: `Average PUE` },
          { value: `0`, unit: `L`, label: `Cooling water used` },
        ],
      }),
      p(k, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        items: {
          type: m.Array,
          title: `Figures`,
          maxCount: 4,
          control: {
            type: m.Object,
            controls: {
              value: { type: m.String, title: `Value`, description: `Numbers count up` },
              unit: { type: m.String, title: `Unit` },
              label: { type: m.String, title: `Label` },
            },
          },
        },
      }),
      (Z =
        V(`nl-pr`) +
        `
.nl-pr .pr{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid ${I}}
.nl-pr .pt{position:relative;display:flex;flex-direction:column;gap:18px;min-height:340px;transition:background .5s ${L},opacity 1.1s ${L},transform 1.1s ${L};outline:none;box-sizing:border-box}
.nl-pr .pt::before{content:"";position:absolute;left:-1px;right:-1px;top:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${L}}
.nl-pr .pt:hover::before,.nl-pr .pt:focus-visible::before{transform:scaleX(1);transform-origin:0 50%}
.nl-pr .pt:hover{background:linear-gradient(180deg,rgba(110,75,255,.07),transparent 60%)}
.nl-pr .top{display:flex;justify-content:space-between;align-items:flex-start}
.nl-pr .top .mono{color:#5E5E5E;transition:color .3s}
.nl-pr .pt:hover .top .mono{color:#C9BDFF}
.nl-pr h3{margin:auto 0 0;font-weight:400;letter-spacing:-.03em;line-height:1.1;text-wrap:balance}
.nl-pr .pt p{margin:0;color:#A6A6A6;font-weight:400;font-size:15px;max-width:32ch}
.nl-pr.pre .pt{opacity:0;transform:translateY(28px)}
.nl-pr.is-sm .pt{min-height:0!important;gap:16px}
.nl-pr.is-sm h3{margin-top:28px}
${ne}
`),
      (A.defaultProps = {
        number: `03`,
        title: `Principles`,
        sub: `How we decide`,
        intro: `Four rules we use to choose sites, suppliers and customers.`,
        items: [
          {
            icon: `snow`,
            title: `Let the climate work`,
            text: `Narvik averages 1.6 °C a year. Outside air cools Hall A; no chillers, no towers, no water.`,
          },
          {
            icon: `hydro`,
            title: `Power you can trace`,
            text: `Every kilowatt-hour comes from Nordic hydro with guarantees of origin, published per hall.`,
          },
          {
            icon: `shield`,
            title: `Your data stays in the EEA`,
            text: `A Norwegian company with halls in Norway and Sweden. Customer-held keys, no transfers out.`,
          },
          {
            icon: `pulse`,
            title: `Measure everything`,
            text: `PUE, inlet temperature and grid mix are metered every minute and shared with customers.`,
          },
        ],
      }),
      p(A, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        items: {
          type: m.Array,
          title: `Principles`,
          control: {
            type: m.Object,
            controls: {
              icon: { type: m.Enum, title: `Icon`, options: re },
              title: { type: m.String, title: `Title` },
              text: { type: m.String, title: `Text`, displayTextArea: !0 },
            },
          },
        },
      }),
      (oe =
        V(`nl-tm`) +
        `
.nl-tm .team{display:grid;gap:24px 16px}
.nl-tm .pp{position:relative;display:flex;flex-direction:column;min-width:0;color:#F3F3F3;text-decoration:none;transition:opacity 1.1s ${L},transform 1.1s ${L}}
.nl-tm.pre .pp{opacity:0;transform:translateY(28px)}
.nl-tm .pp .ph:hover img,.nl-tm .pp:hover .ph img{transform:scale(1.04);filter:grayscale(1) contrast(1.12) brightness(.92)}
.nl-tm .mg{position:relative;overflow:hidden;display:grid;place-items:center;isolation:isolate;background:repeating-linear-gradient(90deg,rgba(243,243,243,.035) 0,rgba(243,243,243,0) 4px,rgba(0,0,0,.22) 7px,rgba(243,243,243,.035) 10px),radial-gradient(70% 55% at var(--gx,50%) 105%,rgba(110,75,255,.42),rgba(110,75,255,.08) 55%,transparent 75%),linear-gradient(180deg,#050409,#0D0A18);box-shadow:inset 0 0 0 1px ${I}}
.nl-tm .mg::after{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(50% 40% at var(--gx,50%) 100%,rgba(201,189,255,.35),transparent 70%);opacity:.35;transition:opacity .8s ${L}}
.nl-tm .pp:hover .mg::after{opacity:1}
.nl-tm .mg .ini{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.06em;color:#F3F3F3;text-shadow:0 0 24px rgba(110,75,255,.55)}
.nl-tm .mg .ix{position:absolute;left:12px;bottom:12px;color:rgba(243,243,243,.5)}
.nl-tm .b{position:relative;display:flex;flex-direction:column;gap:6px;padding-top:16px}
.nl-tm .b::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${L}}
.nl-tm .pp:hover .b::before{transform:scaleX(1);transform-origin:0 50%}
.nl-tm .b h3{margin:0;font-size:18px;font-weight:400;letter-spacing:-.02em;line-height:1.2}
.nl-tm .b .mono{color:#A6A6A6;line-height:1.4}
.nl-tm .b .mono.dim{color:#5E5E5E}
.nl-tm .jn{position:relative;display:flex;flex-direction:column;justify-content:space-between;padding:16px;box-shadow:inset 0 0 0 1px ${I};background:repeating-linear-gradient(135deg,rgba(243,243,243,.035) 0 1px,transparent 1px 9px);transition:box-shadow .4s,background-color .5s;box-sizing:border-box}
.nl-tm .pp:hover .jn{box-shadow:inset 0 0 0 1px rgba(201,189,255,.45);background-color:rgba(110,75,255,.06)}
.nl-tm .pl{width:18px;height:18px;position:relative;color:#A6A6A6;transition:color .3s,transform .6s ${L}}
.nl-tm .pl::before,.nl-tm .pl::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:currentColor}
.nl-tm .pl::after{transform:rotate(90deg)}
.nl-tm .pp:hover .pl{color:#C9BDFF;transform:rotate(90deg)}
.nl-tm .jn b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.06em}
.nl-tm .jn .mono{color:#A6A6A6;display:block;margin-top:10px}
.nl-tm .go{display:inline-flex;align-items:center;gap:8px}
.nl-tm.is-sm .b h3{font-size:16px}
`),
      (Q = [`30%`, `55%`, `75%`, `40%`, `65%`, `50%`]),
      (j.defaultProps = {
        number: `04`,
        title: `Team`,
        sub: `The people you will meet`,
        intro: `Founders and engineers from grid operations, hyperscale build-out and HPC research.`,
        people: [
          { name: `Ingrid Solberg`, role: `Co-founder & CEO`, place: `Tromsø`, photo: `none` },
          { name: `Mats Eriksen`, role: `Co-founder & CTO`, place: `Narvik`, photo: `none` },
          { name: `Sofia Lind`, role: `COO`, place: `Tromsø`, photo: `none` },
          { name: `Ravi Menon`, role: `Head of Engineering`, place: `Narvik`, photo: `ravi` },
          { name: `Lena Berg`, role: `Solutions engineer`, place: `N-01 Narvik`, photo: `lena` },
        ],
        joinCount: `7`,
        joinLabel: `Open roles`,
        joinTitle: `Join the team`,
        joinGo: `See careers`,
        joinNote: `Relocation covered`,
        joinLink: `/careers`,
      }),
      p(j, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        people: {
          type: m.Array,
          title: `People`,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Name` },
              role: { type: m.String, title: `Role` },
              place: { type: m.String, title: `Place` },
              image: { type: m.ResponsiveImage, title: `Portrait` },
              photo: {
                type: m.Enum,
                title: `Built-in photo`,
                options: [`none`, ...K],
                description: `None shows a monogram`,
              },
            },
          },
        },
        joinTitle: { type: m.String, title: `Join title`, description: `Empty hides the tile` },
        joinCount: { type: m.String, title: `Join number` },
        joinLabel: { type: m.String, title: `Join label` },
        joinGo: { type: m.String, title: `Join link label` },
        joinNote: { type: m.String, title: `Join note` },
        joinLink: { type: m.Link, title: `Join link` },
      }),
      (se =
        V(`nl-ls`) +
        `
.nl-ls .row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-block:1px solid ${I}}
.nl-ls a.ls{position:relative;display:grid;align-items:center;color:#F3F3F3;text-decoration:none;transition:background .4s,opacity 1.1s ${L},transform 1.1s ${L}}
.nl-ls.pre a.ls{opacity:0;transform:translateY(28px)}
.nl-ls a.ls::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${L}}
.nl-ls a.ls:hover::after{transform:scaleX(1);transform-origin:0 50%}
.nl-ls a.ls:hover{background:linear-gradient(90deg,rgba(110,75,255,.07),transparent 70%)}
.nl-ls a.ls:hover .ph img{transform:scale(1.06)}
.nl-ls .t{display:flex;flex-direction:column;gap:8px;min-width:0}
.nl-ls .h{display:flex;justify-content:space-between;align-items:center;gap:12px}
.nl-ls h3{margin:0;font-size:20px;font-weight:400;letter-spacing:-.025em;line-height:1}
.nl-ls .t > .mono{color:#A6A6A6}
.nl-ls .t .co{color:#5E5E5E;font-size:10px;letter-spacing:.06em}
.nl-ls .h .mono{color:#A6A6A6}
`),
      (M.defaultProps = {
        number: `05`,
        title: `Locations`,
        sub: `Three sites above 67° N`,
        button: `All offices`,
        link: `/contact-02`,
        items: [
          {
            name: `Tromsø`,
            status: `Open`,
            live: !0,
            tagged: !1,
            violet: !1,
            sub: `Headquarters`,
            coords: `69.6492° N · 18.9553° E`,
            photo: `tromsoHq`,
            link: `/contact-02`,
          },
          {
            name: `Narvik`,
            status: `Live`,
            live: !1,
            tagged: !0,
            violet: !0,
            sub: `N-01 · Hall A`,
            coords: `68.4385° N · 17.4273° E`,
            photo: `company02`,
            link: `/contact-02`,
          },
          {
            name: `Kiruna`,
            status: `Q3 2027`,
            live: !1,
            tagged: !0,
            violet: !1,
            sub: `N-02 · Under construction`,
            coords: `67.8558° N · 20.2253° E`,
            photo: `kirunaBuild`,
            link: `/contact-02`,
          },
        ],
      }),
      p(M, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        button: { type: m.String, title: `Button` },
        link: { type: m.Link, title: `Button link` },
        items: {
          type: m.Array,
          title: `Sites`,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Name` },
              status: { type: m.String, title: `Status` },
              live: { type: m.Boolean, title: `Live dot` },
              tagged: { type: m.Boolean, title: `Status as tag` },
              violet: { type: m.Boolean, title: `Violet tag` },
              sub: { type: m.String, title: `Subtitle` },
              coords: { type: m.String, title: `Coordinates` },
              image: { type: m.ResponsiveImage, title: `Photo` },
              photo: { type: m.Enum, title: `Built-in photo`, options: K },
              link: { type: m.Link, title: `Link` },
            },
          },
        },
      }),
      ($ = {
        wave: l(`svg`, {
          viewBox: `0 0 20 20`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.4`,
          children: l(`path`, { d: `M2 13l4-6 4 6 4-6 4 6` }),
        }),
        globe: c(`svg`, {
          viewBox: `0 0 20 20`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          children: [
            l(`circle`, { cx: `10`, cy: `10`, r: `7.5` }),
            l(`path`, { d: `M2.5 10h15` }),
            l(`circle`, { cx: `10`, cy: `10`, r: `2`, fill: `currentColor`, stroke: `none` }),
          ],
        }),
        star: l(`svg`, {
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          children: l(`path`, { d: `M10 1l1.6 7.4L19 10l-7.4 1.6L10 19l-1.6-7.4L1 10l7.4-1.6z` }),
        }),
        arcs: l(`svg`, {
          viewBox: `0 0 20 20`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          children: l(`path`, { d: `M2 16a8 8 0 0 1 16 0M5 16a5 5 0 0 1 10 0M8 16a2 2 0 0 1 4 0` }),
        }),
        peak: c(`svg`, {
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          children: [
            l(`path`, { d: `M10 3l7 12H3z`, opacity: `.35` }),
            l(`path`, { d: `M10 8l4 7H6z` }),
          ],
        }),
      }),
      (ce =
        V(`nl-iv`) +
        `
.nl-iv .inv{display:grid;border-block:1px solid ${I}}
.nl-iv .iv{display:flex;align-items:center;justify-content:center;gap:10px;color:#A6A6A6;letter-spacing:-.03em;white-space:nowrap;background:#000;transition:color .4s,background .5s,opacity 1.1s ${L},transform 1.1s ${L}}
.nl-iv.pre .iv{opacity:0;transform:translateY(28px)}
.nl-iv .iv:hover{color:#F3F3F3;background:radial-gradient(60% 80% at 50% 100%,rgba(110,75,255,.12),transparent 70%),#000}
.nl-iv .iv svg{flex:none}
.nl-iv .bold{font-weight:500}
.nl-iv .light{font-weight:300;letter-spacing:-.045em}
.nl-iv .mono2{font-family:"Geist Mono",monospace;font-size:.7em;letter-spacing:.1em;text-transform:uppercase;font-weight:400}
.nl-iv .plain{font-weight:400;letter-spacing:-.02em}
.nl-iv .foot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:16px;color:#5E5E5E}
.nl-iv .foot b{font-weight:400;color:#A6A6A6}
.nl-iv.is-sm .foot{flex-direction:column;gap:6px}
`),
      (N.defaultProps = {
        number: `06`,
        title: `Backed by`,
        sub: `$61M raised to date`,
        intro: `Long-horizon investors in energy and infrastructure, mostly from the Nordics.`,
        items: [
          { name: `Fjord Capital`, extra: ``, mark: `wave`, style: `bold` },
          { name: `Polar Ventures`, extra: ``, mark: `globe`, style: `mono2` },
          { name: `Northlight Partners`, extra: ``, mark: `star`, style: `light` },
          { name: `Aurora Fund`, extra: ``, mark: `arcs`, style: `plain` },
          { name: `Kvitøy`, extra: `Growth`, mark: `peak`, style: `bold` },
        ],
        rounds: [
          { name: `Seed · $13M`, when: `Apr 2025` },
          { name: `Series A · $48M`, when: `Sep 2026` },
        ],
      }),
      p(N, {
        number: { type: m.String, title: `Number` },
        title: { type: m.String, title: `Title` },
        sub: { type: m.String, title: `Subtitle` },
        intro: { type: m.String, title: `Intro`, displayTextArea: !0 },
        items: {
          type: m.Array,
          title: `Investors`,
          maxCount: 5,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Name` },
              extra: { type: m.String, title: `Suffix` },
              mark: { type: m.Enum, title: `Mark`, options: Object.keys($) },
              style: {
                type: m.Enum,
                title: `Type`,
                options: [`bold`, `light`, `plain`, `mono2`],
                optionTitles: [`Bold`, `Light`, `Regular`, `Mono`],
              },
            },
          },
        },
        rounds: {
          type: m.Array,
          title: `Rounds`,
          control: {
            type: m.Object,
            controls: {
              name: { type: m.String, title: `Round` },
              when: { type: m.String, title: `Date` },
            },
          },
        },
      }));
  });
export { A as a, le as c, k as i, M as n, O as o, D as r, j as s, N as t };
//# sourceMappingURL=Company.Qi2XKIpi.mjs.map
