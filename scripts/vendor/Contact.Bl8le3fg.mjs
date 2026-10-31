import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  I as t,
  P as n,
  R as r,
  _ as i,
  b as a,
  c as o,
  l as s,
  o as c,
  s as l,
  w as u,
  y as d,
} from "./react.Dlpel5Rf.mjs";
import { k as f, o as p, q as m } from "./framer.CKDq5C8y.mjs";
import {
  C as h,
  S as g,
  T as _,
  a as v,
  d as ee,
  g as y,
  h as b,
  m as x,
  o as te,
  p as ne,
  w as S,
  x as C,
  y as w,
} from "./shared-lib.W6te6cXm.mjs";
import { t as re } from "./Parts-ISc5PT.Do1ptRxj.mjs";
import { a as T, n as E, r as D, t as ie } from "./Inner-d2rabs.CpMZmyL3.mjs";
function O(e, t = 0.85, n = `0px 0px -15% 0px`) {
  let a = S(),
    o = g(e, n),
    [s, c] = i(!1);
  return (
    d(() => {
      let n = e.current;
      n && !C() && !a && n.getBoundingClientRect().top > r.innerHeight * t && c(!0);
    }, [a]),
    { pre: s && !o, go: s && o }
  );
}
function ae(e) {
  let t = S(),
    [n, a] = i(``);
  return (
    d(() => {
      let n = e.current;
      if (!n || C() || t) return;
      let i = n.getBoundingClientRect();
      if (i.bottom <= 0) return;
      let o = !1;
      if ((a(`is-pre`), i.top < r.innerHeight * 0.88))
        return (
          _(() => {
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
      return (s.observe(n), () => s.disconnect());
    }, [t]),
    `nl-blur` + (n ? ` ` + n : ``)
  );
}
function k(e, t = !1) {
  let n = () => {
      try {
        let n = new Date().toLocaleTimeString(`en-GB`, {
          hour: `2-digit`,
          minute: `2-digit`,
          timeZone: e,
        });
        if (!t) return n;
        let r =
          new Intl.DateTimeFormat(`en-GB`, { timeZone: e, timeZoneName: `shortOffset` })
            .formatToParts(new Date())
            .find((e) => e.type === `timeZoneName`)?.value || ``;
        return n + `|` + r.replace(`GMT`, `UTC`);
      } catch {
        return `—`;
      }
    },
    [a, o] = i(n);
  return (
    d(() => {
      if (C()) return;
      let e = r.setInterval(() => o(n()), 1e3);
      return () => r.clearInterval(e);
    }, [e]),
    a
  );
}
function A(e) {
  let t = a(null),
    i = h(t),
    o = S(),
    l = C(),
    u = !l && !o,
    d = r !== void 0 && !l ? r.innerHeight : 900,
    f = G(16, 2.2, 32, i),
    p = i <= 600 ? Math.max(600, Math.min(760, d)) : Math.max(640, Math.min(980, d)),
    m = (e.email || ``).indexOf(`@`),
    g = Array.from(e.email || ``),
    _ = 0,
    v = () => ({ animationDelay: (0.4 + _++ * 0.08).toFixed(2) + `s` }),
    b = A.defaultProps.buttons;
  return s(`section`, {
    ref: t,
    className: `nl-mh` + (u ? ` anim` : ``) + y(i),
    style: {
      ...e.style,
      minHeight: p,
      paddingLeft: f,
      paddingRight: f,
      paddingBottom: G(32, 4, 56, i),
    },
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: Q } }),
      c(`div`, {
        className: `bg`,
        "aria-hidden": `true`,
        children: c(te, {
          lightX: e.lightX,
          lightY: e.lightY,
          gain: e.gain,
          rib: 12,
          spread: 1.25,
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
      c(`div`, { className: `shade` }),
      c(`span`, {
        className: `eb mono in`,
        style: { ...v(), marginBottom: G(20, 2.4, 36, i) },
        children: e.eyebrow,
      }),
      c(`h1`, {
        children: s(`a`, {
          className: `mail`,
          href: `mailto:` + e.email,
          "aria-label": `Email ` + e.email,
          style: { fontSize: i <= 600 ? i * 0.106 : G(32, 6.6, 128, i) },
          children: [
            c(`span`, {
              className: `txt`,
              "aria-hidden": `true`,
              children: g.map((e, t) =>
                s(
                  n,
                  {
                    children: [
                      t === m + 1 ? c(`span`, { className: `brk` }) : null,
                      s(`span`, {
                        className: `ch`,
                        style: { animationDelay: (0.15 + t * 0.02).toFixed(2) + `s` },
                        children: [
                          c(`i`, { style: { transitionDelay: t * 14 + `ms` }, children: e }),
                          c(`i`, {
                            "aria-hidden": `true`,
                            style: { transitionDelay: t * 14 + `ms` },
                            children: e,
                          }),
                        ],
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
            s(`span`, { className: `ar`, "aria-hidden": `true`, children: [q, q] }),
          ],
        }),
      }),
      s(`div`, {
        className: `row`,
        style: { marginTop: G(28, 3, 44, i) },
        children: [
          c(`p`, { className: `in`, style: v(), children: e.text }),
          c(`div`, {
            className: `btns in`,
            style: v(),
            children: (e.buttons || []).map((e, t) =>
              c(
                ee,
                {
                  label: e.label,
                  link: e.link || b[t]?.link,
                  ghost: e.ghost,
                  newTab: !1,
                  submit: !1,
                  visual: !1,
                  full: !1,
                },
                t
              )
            ),
          }),
        ],
      }),
      c(`div`, {
        className: `meta in`,
        style: { marginTop: G(40, 5, 72, i), ...v() },
        children: (e.meta || []).map((e, t) =>
          s(
            `div`,
            {
              children: [
                c(`span`, { className: `mono`, children: e.label }),
                c(`b`, { children: e.value }),
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
  let t = a(null),
    n = h(t),
    r = k(e.timezone),
    i = `24px ${G(20, 1.8, 28, n)}px`;
  return s(`aside`, {
    ref: t,
    className: `nl-ca` + y(n),
    style: e.style,
    "aria-label": `What happens next`,
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: $ } }),
      s(`div`, {
        className: `box`,
        style: { padding: i },
        children: [
          s(`span`, {
            className: `mono`,
            children: [
              c(`span`, { className: `live`, children: e.deskLabel }),
              c(`b`, { children: r }),
            ],
          }),
          s(`p`, {
            className: `promise`,
            style: { fontSize: G(26, 2.3, 36, n) },
            children: [e.promise, ` `, c(`span`, { className: `tone`, children: e.promiseTone })],
          }),
          s(`div`, {
            className: `pstat`,
            children: [
              s(`div`, {
                children: [
                  c(`span`, { className: `mono`, children: e.stat1Label }),
                  s(`b`, {
                    children: [e.stat1, e.stat1Unit ? c(`small`, { children: e.stat1Unit }) : null],
                  }),
                ],
              }),
              s(`div`, {
                children: [
                  c(`span`, { className: `mono`, children: e.stat2Label }),
                  c(`b`, { children: e.stat2 }),
                ],
              }),
            ],
          }),
        ],
      }),
      s(`div`, {
        className: `box`,
        style: { padding: i },
        children: [
          c(`span`, { className: `mono`, children: e.stepsLabel }),
          c(`ol`, {
            children: (e.steps || []).map((e, t) =>
              s(
                `li`,
                {
                  children: [
                    c(`span`, { className: `n`, children: String(t + 1).padStart(2, `0`) }),
                    c(`span`, { className: `t`, children: e.title }),
                    c(`span`, { className: `wh`, children: e.when }),
                    c(`p`, { children: e.text }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
      c(`div`, {
        className: `box`,
        style: { padding: i },
        children: s(`div`, {
          className: `eng`,
          children: [
            s(`figure`, {
              className: `ph`,
              children: [
                c(`img`, {
                  src: e.image?.src || J[e.photo] || b.lena,
                  alt: `Portrait of ` + e.name,
                  loading: `lazy`,
                }),
                c(`i`, {
                  className: `crn`,
                  style: { top: 6, left: 6, borderTopWidth: 1, borderLeftWidth: 1 },
                }),
                c(`i`, {
                  className: `crn`,
                  style: { bottom: 6, right: 6, borderBottomWidth: 1, borderRightWidth: 1 },
                }),
              ],
            }),
            s(`div`, {
              className: `who`,
              children: [
                s(`p`, { className: `nm`, children: [e.name, c(`span`, { children: e.role })] }),
                s(`span`, { className: `mono`, children: [c(`i`, {}), e.note] }),
              ],
            }),
          ],
        }),
      }),
      s(`div`, {
        className: `box`,
        style: { padding: i },
        children: [
          c(`span`, { className: `mono`, children: e.directLabel }),
          s(`a`, {
            className: `dlk`,
            href: `mailto:` + e.email,
            children: [e.email, c(`span`, { className: `ar`, "aria-hidden": `true`, children: q })],
          }),
          s(`a`, {
            className: `dlk sm`,
            href: `tel:` + e.phone.replace(/[^+\d]/g, ``),
            children: [e.phone, c(`span`, { className: `ar`, "aria-hidden": `true`, children: q })],
          }),
        ],
      }),
    ],
  });
}
function oe({ l: e, i: t, w: n, go: r }) {
  let [i, a] = k(e.timezone || `Europe/Oslo`, !0).split(`|`),
    o = M.defaultProps.items[t] || {};
  return s(`article`, {
    className: `loc`,
    style: { transitionDelay: r ? t * 0.07 + `s` : void 0 },
    children: [
      s(`figure`, {
        className: `ph`,
        children: [
          c(`img`, { src: e.image?.src || J[e.photo] || b.tromsoHq, alt: e.alt, loading: `lazy` }),
          c(`i`, {
            className: `crn`,
            style: {
              top: 12,
              left: 12,
              width: 12,
              height: 12,
              borderTopWidth: 1,
              borderLeftWidth: 1,
            },
          }),
          c(`i`, {
            className: `crn`,
            style: {
              bottom: 12,
              right: 12,
              width: 12,
              height: 12,
              borderBottomWidth: 1,
              borderRightWidth: 1,
            },
          }),
          c(`span`, { className: `tag mono` + (e.tagViolet ? ` v` : ``), children: e.tag }),
          s(`span`, { className: `co mono`, children: [e.lat, c(`br`, {}), e.lon] }),
        ],
      }),
      s(`div`, {
        className: `b`,
        children: [
          s(`div`, {
            className: `h`,
            children: [
              s(`h3`, {
                style: { fontSize: G(22, 2, 30, n) },
                children: [e.name, c(`span`, { children: e.sub })],
              }),
              c(`span`, { className: `mono` + (e.live ? ` live` : ``), children: e.status }),
            ],
          }),
          s(`dl`, {
            children: [
              s(`div`, {
                children: [
                  c(`dt`, { className: `mono`, children: `Local time` }),
                  s(`dd`, { children: [i, c(`span`, { className: `off`, children: a })] }),
                ],
              }),
              s(`div`, {
                children: [
                  c(`dt`, { className: `mono`, children: e.k2 }),
                  c(`dd`, { children: e.v2 }),
                ],
              }),
              s(`div`, {
                children: [
                  c(`dt`, { className: `mono`, children: `Address` }),
                  c(`dd`, { children: e.address }),
                ],
              }),
            ],
          }),
          s(`a`, {
            className: `go mono`,
            href: e.link || o.link || `#`,
            children: [e.linkLabel, ` `, q],
          }),
        ],
      }),
    ],
  });
}
function M(e) {
  let t = a(null),
    n = h(t),
    { pre: r, go: i } = O(t);
  return s(`div`, {
    ref: t,
    className: `nl-lc` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: ce } }),
      s(`div`, {
        className: `head`,
        style: { marginBottom: G(40, 5, 72, n) },
        children: [c(K, { n: e.number, t: e.title, s: e.sub }), c(`p`, { children: e.intro })],
      }),
      c(`div`, {
        className: `locs`,
        children: (e.items || []).map((e, t) => c(oe, { l: e, i: t, w: n, go: i }, t)),
      }),
    ],
  });
}
function N(e) {
  let t = a(null),
    n = h(t),
    { pre: r, go: i } = O(t);
  return s(`div`, {
    ref: t,
    className: `nl-dp` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: le } }),
      s(`div`, {
        className: `head`,
        style: { marginBottom: G(40, 5, 72, n) },
        children: [c(K, { n: e.number, t: e.title, s: e.sub }), c(`p`, { children: e.intro })],
      }),
      c(`div`, {
        className: `list`,
        children: (e.items || []).map((e, t) =>
          s(
            `a`,
            {
              className: `d`,
              href: `mailto:` + e.email,
              style: { transitionDelay: i ? `0s,${t * 0.07}s,${t * 0.07}s` : void 0 },
              children: [
                c(`span`, { className: `ix mono`, children: String(t + 1).padStart(2, `0`) }),
                c(`span`, {
                  className: `nm`,
                  style: { fontSize: G(22, 2.1, 32, n) },
                  children: e.name,
                }),
                c(`span`, { className: `ds`, children: e.text }),
                c(`span`, { className: `tag mono` + (e.tagViolet ? ` v` : ``), children: e.tag }),
                c(`span`, { className: `em`, children: e.email }),
                c(`span`, { className: `ar`, "aria-hidden": `true`, children: q }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function se({ value: e, on: t }) {
  let n = (e || ``).match(/^([^0-9]*)([0-9.,]+)(.*)$/),
    [r, a] = i(e);
  return (
    d(() => {
      if (!t || !n) {
        a(e);
        return;
      }
      let r = parseFloat(n[2].replace(/,/g, ``)),
        i = (n[2].split(`.`)[1] || ``).length,
        o = performance.now(),
        s = 0,
        c = (t) => {
          let l = Math.min(1, (t - o) / 1400);
          (a(n[1] + (r * (1 - 2 ** (-10 * l))).toFixed(i) + n[3]),
            l < 1 ? (s = requestAnimationFrame(c)) : a(e));
        };
      return ((s = requestAnimationFrame(c)), () => cancelAnimationFrame(s));
    }, [t, e]),
    c(o, { children: r })
  );
}
function P(e) {
  let t = a(null),
    n = h(t),
    { pre: r, go: i } = O(t);
  return s(`div`, {
    ref: t,
    className: `nl-ti` + (r ? ` pre` : ``) + y(n),
    style: e.style,
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: ue } }),
      c(K, { n: e.number, t: e.title, s: e.sub }),
      s(`p`, {
        className: `t fx`,
        style: { fontSize: G(26, 2.6, 44, n) },
        children: [e.text, ` `, c(`span`, { className: `tone`, children: e.tone })],
      }),
      c(`div`, {
        className: `stats`,
        style: { marginTop: G(48, 5, 80, n) },
        children: (e.stats || []).map((e, t) =>
          s(
            `div`,
            {
              className: `fx`,
              style: { transitionDelay: i ? 0.15 + t * 0.07 + `s` : void 0 },
              children: [
                c(`b`, {
                  style: { fontSize: G(40, 4, 64, n) },
                  children: c(se, { value: e.value, on: i }),
                }),
                c(`span`, { className: `mono`, children: e.label }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function F(e) {
  let t = a(null),
    n = a(null),
    o = h(t),
    l = S(),
    { pre: u, go: f } = O(t),
    [p, m] = i(0);
  return (
    d(() => {
      if (C() || l) return;
      let e = 0,
        t = () => {
          e = 0;
          let t = n.current;
          if (!t) return;
          let i = t.getBoundingClientRect(),
            a = r.innerHeight;
          m(1 - Math.max(0, Math.min(1, (a * 0.92 - i.top) / (a * 0.52))));
        },
        i = () => {
          e ||= requestAnimationFrame(t);
        };
      return (
        t(),
        r.addEventListener(`scroll`, i, { passive: !0 }),
        () => {
          (r.removeEventListener(`scroll`, i), cancelAnimationFrame(e));
        }
      );
    }, [l]),
    s(`div`, {
      ref: t,
      className: `nl-it` + (u ? ` pre` : ``) + y(o),
      style: e.style,
      children: [
        w(),
        c(`style`, { dangerouslySetInnerHTML: { __html: de } }),
        s(`div`, {
          className: `head`,
          style: { marginBottom: G(40, 5, 72, o) },
          children: [c(K, { n: e.number, t: e.title, s: e.sub }), c(`p`, { children: e.intro })],
        }),
        s(`div`, {
          className: `grid`,
          children: [
            s(`figure`, {
              ref: n,
              className: `ph`,
              style: { clipPath: `inset(${p * 10}% ${p * 8}% ${p * 10}% ${p * 8}%)` },
              children: [
                c(`img`, {
                  src: e.image?.src || J[e.photo] || b.hallATrays,
                  alt: e.alt,
                  loading: `lazy`,
                }),
                c(`i`, {
                  className: `crn`,
                  style: { top: 14, left: 14, borderTopWidth: 1, borderLeftWidth: 1 },
                }),
                c(`i`, {
                  className: `crn`,
                  style: { top: 14, right: 14, borderTopWidth: 1, borderRightWidth: 1 },
                }),
                c(`span`, { className: `idx mono`, children: e.photoLabel }),
                e.chip
                  ? s(`span`, {
                      className: `nl-chip lit`,
                      tabIndex: 0,
                      children: [T(e.chipIcon), e.chip],
                    })
                  : null,
              ],
            }),
            c(`ol`, {
              children: (e.stops || []).map((e, t) =>
                s(
                  `li`,
                  {
                    style: {
                      paddingBottom: G(40, 4, 60, o),
                      transitionDelay: f ? t * 0.07 + `s` : void 0,
                    },
                    children: [
                      s(`span`, {
                        className: `tm`,
                        children: [e.time, c(`span`, { children: e.dur })],
                      }),
                      s(`div`, {
                        children: [
                          c(`h3`, { style: { fontSize: G(22, 1.9, 28, o) }, children: e.title }),
                          c(`p`, { children: e.text }),
                          e.tag
                            ? c(`span`, {
                                className: `tag mono` + (e.tagViolet ? ` v` : ``),
                                children: e.tag,
                              })
                            : null,
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
    })
  );
}
function I(e) {
  let t = a(null),
    n = h(t),
    r = a(null),
    i = ae(r),
    o = { n: 0 };
  return s(`div`, {
    ref: t,
    className: `nl-bs` + y(n),
    style: e.style,
    children: [
      w(),
      c(`style`, { dangerouslySetInnerHTML: { __html: fe } }),
      c(K, { n: e.number, t: e.title, s: e.sub }),
      c(`h2`, {
        ref: r,
        className: i,
        style: { fontSize: G(30, 3.4, 58, n) },
        "aria-label": e.heading + ` ` + e.tone,
        children: s(`span`, {
          "aria-hidden": `true`,
          children: [
            Z(e.heading, o),
            ` `,
            c(`span`, { className: `tone`, children: Z(e.tone, o) }),
          ],
        }),
      }),
      s(`div`, {
        className: `bring`,
        children: [
          c(`span`, { className: `mono`, children: e.bringLabel }),
          c(`ul`, {
            children: (e.items || []).map((e, t) =>
              s(
                `li`,
                {
                  className: `lit`,
                  children: [
                    T(e.icon),
                    s(`div`, {
                      children: [c(`b`, { children: e.title }), c(`span`, { children: e.text })],
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
  $,
  ce,
  le,
  ue,
  de,
  fe,
  pe = e(() => {
    (t(),
      l(),
      u(),
      m(),
      ne(),
      v(),
      re(),
      ie(),
      (L = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (R = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (z = `rgba(243,243,243,.12)`),
      (B = `cubic-bezier(.16,1,.3,1)`),
      (V = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (H = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (U = `-webkit-mask-image:${x};mask-image:${x};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px`),
      (W = (e) => `
.${e}{${R};width:100%}
.${e} .mono{${L}}
.${e} .lab{${V}}
.${e} .lab .n{${H}}
.${e} .lab .s{color:#A6A6A6}
.${e} .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.${e} .head > p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch;text-wrap:balance}
.${e} .tag{display:inline-flex;align-items:center;gap:8px;height:24px;padding:0 9px;box-shadow:inset 0 0 0 1px ${z};color:#A6A6A6;white-space:nowrap}
.${e} .tag.v{color:#C9BDFF;box-shadow:inset 0 0 0 1px rgba(201,189,255,.35)}
.${e} .live::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;margin-right:8px;vertical-align:1px;animation:nl-c-blink 1.6s infinite}
@keyframes nl-c-blink{50%{opacity:.25}}
.${e} .ph{position:relative;overflow:hidden;background:#0A0A0A;margin:0}
.${e} .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.82);transition:transform 1.4s ${B},filter 1s ${B};${U}}
.${e} .ph::after{content:"";position:absolute;inset:0;background:radial-gradient(80% 60% at 100% 100%,rgba(110,75,255,.22),transparent 70%);pointer-events:none}
.${e} .crn{position:absolute;width:14px;height:14px;z-index:1;border:0 solid rgba(243,243,243,.7)}
.${e} .fx{transition:opacity 1.1s ${B},transform 1.1s ${B}}
.${e}.pre .fx{opacity:0;transform:translateY(28px)}
.${e} .lab{transition:opacity 1.1s ${B},transform 1.1s ${B}}
.${e}.pre .lab{opacity:0;transform:translateY(20px)}
`),
      (G = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (K = ({ n: e, t, s: n }) =>
        s(`div`, {
          className: `lab`,
          children: [
            e ? c(`span`, { className: `n`, children: e }) : null,
            c(`span`, { children: t }),
            c(`span`, { className: `s`, children: n }),
          ],
        })),
      (q = c(`svg`, {
        viewBox: `0 0 12 12`,
        width: `12`,
        height: `12`,
        fill: `none`,
        "aria-hidden": `true`,
        children: c(`path`, {
          d: `M2.5 9.5 9.5 2.5M4 2.5h5.5V8`,
          stroke: `currentColor`,
          strokeWidth: `1.1`,
        }),
      })),
      (J = {
        hero: b.hero,
        racks: b.racks,
        trays: b.trays,
        lena: b.lena,
        ravi: b.ravi,
        tourColdAisle: b.tourColdAisle,
        narvikCampus: b.narvikCampus,
        company02: b.company02,
        tromsoHq: b.tromsoHq,
        hallA: b.hallA,
        kirunaBuild: b.kirunaBuild,
        hallATrays: b.hallATrays,
      }),
      (Y = Object.keys(J)),
      (X = `
.nl-blur .bw{display:inline-block;white-space:nowrap}
.nl-blur .bc{display:inline-block}
@keyframes nl-blur-in{from{opacity:0;filter:blur(14px);transform:translateY(.16em)}to{opacity:1;filter:blur(0);transform:none}}
.nl-blur.is-in .bc{animation:nl-blur-in 1.25s cubic-bezier(.25,1,.5,1) both}
.nl-blur.is-pre .bc{opacity:0}
@media (prefers-reduced-motion:reduce){.nl-blur .bc{animation:none!important;opacity:1!important}}
`),
      (Z = (e, t, n = 0.021) =>
        C()
          ? e
          : (e || ``)
              .split(/(\s+)/)
              .map((e, r) =>
                /^\s+$/.test(e) || !e
                  ? e
                  : c(
                      `span`,
                      {
                        className: `bw`,
                        children: Array.from(e).map((e, r) =>
                          c(
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
      (Q = `
.nl-mh{${R};position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding-top:120px;width:100%}
.nl-mh .mono{${L}}
.nl-mh .bg{position:absolute;inset:0;z-index:-2}
.nl-mh .shade{position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.55),transparent 30%,transparent 55%,rgba(0,0,0,.8)),linear-gradient(90deg,rgba(0,0,0,.55),transparent 70%)}
.nl-mh.is-sm .shade{background:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.4) 45%,rgba(0,0,0,.85))}
.nl-mh .eb{display:flex;align-items:center;gap:10px;color:#A6A6A6}
.nl-mh .eb::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;animation:nl-mh-blink 1.6s infinite}
@keyframes nl-mh-blink{50%{opacity:.25}}
.nl-mh h1{margin:0;font-weight:400}
.nl-mh .mail{position:relative;display:inline-flex;align-items:center;gap:.18em;max-width:100%;padding-bottom:.14em;letter-spacing:-.055em;line-height:1;color:#F3F3F3;text-decoration:none}
.nl-mh .txt{display:inline-flex;flex-wrap:wrap;min-width:0}
.nl-mh .ch{position:relative;display:inline-block;overflow:visible;clip-path:inset(0 -.3em);height:1.24em;line-height:1.24}
.nl-mh .ch i{display:block;font-style:normal;transition:transform .7s ${B}}
.nl-mh .ch i + i{position:absolute;left:0;top:100%;color:#C9BDFF;text-shadow:0 0 30px rgba(110,75,255,.6)}
.nl-mh .mail:hover .ch i,.nl-mh .mail:focus-visible .ch i{transform:translateY(-100%)}
.nl-mh .mail::before,.nl-mh .mail::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px}
.nl-mh .mail::before{background:#5E5E5E;height:1px}
.nl-mh .mail::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${B}}
.nl-mh .mail:hover::after,.nl-mh .mail:focus-visible::after{transform:scaleX(1);transform-origin:0 50%}
.nl-mh .ar{position:relative;display:grid;place-items:center;width:.7em;height:.7em;overflow:hidden;flex:none}
.nl-mh .ar svg{width:.62em;height:.62em;transition:transform .7s ${B}}
.nl-mh .ar svg + svg{position:absolute;transform:translate(-120%,120%);color:#C9BDFF}
.nl-mh .mail:hover .ar svg:first-child{transform:translate(120%,-120%)}
.nl-mh .mail:hover .ar svg + svg{transform:none}
.nl-mh .brk{display:none}
.nl-mh.is-sm .brk{display:block;flex-basis:100%;height:0}
.nl-mh.is-sm .mail{align-items:flex-end}
.nl-mh .row{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-mh .row p{grid-column:1 / span 5;margin:0;color:#A6A6A6;font-weight:400;max-width:44ch;text-wrap:balance}
.nl-mh .btns{grid-column:8 / span 5;display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.nl-mh.is-md .row p,.nl-mh.is-md .btns{grid-column:1 / -1}
.nl-mh.is-md .btns{justify-content:flex-start}
.nl-mh .meta{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid ${z}}
.nl-mh .meta > div{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:14px 16px 0 0;min-width:0}
.nl-mh .meta > div + div{padding-left:16px;border-left:1px solid ${z}}
.nl-mh .meta .mono{color:#A6A6A6}
.nl-mh .meta b{font-weight:500;font-size:14px;white-space:nowrap}
.nl-mh.is-md .meta{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-mh.is-md .meta > div:nth-child(3){padding-left:0;border-left:0}
.nl-mh.is-md .meta > div:nth-child(n+3){border-top:1px solid ${z};margin-top:14px}
.nl-mh.is-sm .meta{grid-template-columns:1fr}
.nl-mh.is-sm .meta > div,.nl-mh.is-sm .meta > div + div{padding:12px 0 0;border-left:0;margin-top:0}
.nl-mh.is-sm .meta > div + div{border-top:1px solid ${z};margin-top:12px}
@keyframes nl-mh-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes nl-mh-ch{from{opacity:0;filter:blur(16px);transform:translateY(.18em)}to{opacity:1;filter:blur(0);transform:none}}
.nl-mh.anim .in{animation:nl-mh-up 1.1s ${B} both}
.nl-mh.anim .ch{animation:nl-mh-ch 1.3s cubic-bezier(.215,.61,.355,1) both}
`),
      (A.defaultProps = {
        eyebrow: `Contact · Tromsø desk open now`,
        email: `hello@nordlys.example`,
        text: `One address for everything. Write in English, Norwegian or German; a person in Tromsø routes it to the right desk within the hour.`,
        buttons: [
          { label: `Plan capacity`, link: `/contact-01`, ghost: !1 },
          { label: `Book a site tour`, link: `/contact-03`, ghost: !0 },
        ],
        meta: [
          { label: `Switchboard`, value: `+47 77 60 00 00` },
          { label: `Desk hours`, value: `08–18 CET` },
          { label: `Hall support`, value: `24/7` },
          { label: `Org. no.`, value: `931 204 118` },
        ],
        lightX: 0.74,
        lightY: 0.86,
        gain: 2.6,
        seed: 58,
      }),
      f(A, {
        eyebrow: { type: p.String, title: `Eyebrow` },
        email: { type: p.String, title: `Email` },
        text: { type: p.String, title: `Text`, displayTextArea: !0 },
        buttons: {
          type: p.Array,
          title: `Buttons`,
          maxCount: 2,
          control: {
            type: p.Object,
            controls: {
              label: { type: p.String, title: `Label` },
              link: { type: p.Link, title: `Link` },
              ghost: { type: p.Boolean, title: `Ghost` },
            },
          },
        },
        meta: {
          type: p.Array,
          title: `Facts`,
          maxCount: 4,
          control: {
            type: p.Object,
            controls: {
              label: { type: p.String, title: `Label` },
              value: { type: p.String, title: `Value` },
            },
          },
        },
        lightX: { type: p.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: p.Number, title: `Light Y`, min: 0, max: 1.2, step: 0.01 },
        gain: { type: p.Number, title: `Gain`, min: 0.5, max: 4, step: 0.05 },
        seed: { type: p.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }),
      ($ =
        W(`nl-ca`) +
        `
.nl-ca{display:flex;flex-direction:column;border:1px solid ${z};background:linear-gradient(180deg,rgba(110,75,255,.05),transparent 40%)}
.nl-ca .box + .box{border-top:1px solid ${z}}
.nl-ca .box > .mono{display:flex;justify-content:space-between;gap:12px;color:#A6A6A6}
.nl-ca .box > .mono b{font-weight:400;color:#F3F3F3;font-variant-numeric:tabular-nums}
.nl-ca .promise{margin:26px 0 0;font-weight:400;letter-spacing:-.04em;line-height:1}
.nl-ca .promise .tone{display:block;color:#A6A6A6}
.nl-ca .pstat{display:grid;grid-template-columns:1fr 1fr;margin-top:26px;border-top:1px solid ${z}}
.nl-ca .pstat > div{display:flex;flex-direction:column;gap:8px;padding-top:14px}
.nl-ca .pstat > div + div{padding-left:16px;border-left:1px solid ${z}}
.nl-ca .pstat .mono{color:#A6A6A6}
.nl-ca .pstat b{font:400 20px/1 "Geist Mono",monospace;letter-spacing:-.04em}
.nl-ca .pstat b small{font-size:11px;color:#A6A6A6;letter-spacing:.02em}
.nl-ca ol{list-style:none;margin:18px 0 0;padding:0;position:relative}
.nl-ca ol::before{content:"";position:absolute;left:4px;top:10px;bottom:10px;width:1px;background:linear-gradient(180deg,#6E4BFF,rgba(201,189,255,.3) 60%,${z})}
.nl-ca li{position:relative;display:grid;grid-template-columns:auto 1fr auto;gap:4px 16px;padding:12px 0 12px 26px}
.nl-ca li::before{content:"";position:absolute;left:0;top:17px;width:9px;height:9px;background:#000;box-shadow:inset 0 0 0 1px rgba(201,189,255,.7)}
.nl-ca li:first-child::before{background:#C9BDFF;box-shadow:0 0 10px rgba(110,75,255,.9)}
.nl-ca li .n{font:400 10px/1.9 "Geist Mono",monospace;color:#C9BDFF;letter-spacing:.1em}
.nl-ca li .t{font-size:16px;font-weight:400;letter-spacing:-.015em}
.nl-ca li .wh{font:400 10px/1.9 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#5E5E5E}
.nl-ca li p{grid-column:2 / -1;margin:0;text-wrap:pretty;color:#A6A6A6;font-weight:400;font-size:14px;line-height:1.45}
.nl-ca.is-sm li{grid-template-columns:auto 1fr}
.nl-ca.is-sm li .wh{grid-column:2;grid-row:2}
.nl-ca.is-sm li p{grid-column:2}
.nl-ca .eng{display:grid;grid-template-columns:84px 1fr;gap:18px;align-items:stretch}
.nl-ca .eng .ph{width:84px;height:104px}
.nl-ca .eng .crn{width:8px;height:8px;border-color:rgba(243,243,243,.75)}
.nl-ca .eng .who{display:flex;flex-direction:column;justify-content:space-between;gap:10px;min-width:0}
.nl-ca .eng .nm{margin:0;font-size:18px;font-weight:400;letter-spacing:-.02em;line-height:1.1}
.nl-ca .eng .nm span{display:block;margin-top:4px;color:#A6A6A6;font-size:14px;letter-spacing:0}
.nl-ca .eng .mono{color:#A6A6A6;line-height:1.6}
.nl-ca .eng .mono i{display:inline-block;width:5px;height:5px;margin-right:8px;background:#7FD4A8;box-shadow:0 0 6px #7FD4A8;vertical-align:1px}
.nl-ca .dlk{position:relative;display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;padding-bottom:10px;font-size:18px;font-weight:400;letter-spacing:-.02em;color:#F3F3F3;text-decoration:none}
.nl-ca .dlk::before,.nl-ca .dlk::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px}
.nl-ca .dlk::before{background:${z}}
.nl-ca .dlk::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${B}}
.nl-ca .dlk:hover::after,.nl-ca .dlk:focus-visible::after{transform:scaleX(1);transform-origin:0 50%}
.nl-ca .dlk .ar{color:#A6A6A6;transition:transform .6s ${B},color .3s;display:inline-flex}
.nl-ca .dlk:hover .ar{transform:translate(3px,-3px);color:#C9BDFF}
.nl-ca .dlk + .dlk{margin-top:12px}
.nl-ca .dlk.sm{font-size:15px;color:#A6A6A6}
`),
      (j.defaultProps = {
        deskLabel: `Desk open`,
        timezone: `Europe/Oslo`,
        promise: `A real reply,`,
        promiseTone: `within one working day.`,
        stat1Label: `Median reply`,
        stat1: `3h 40`,
        stat1Unit: `m`,
        stat2Label: `Requests / wk`,
        stat2: `41`,
        stepsLabel: `What happens next`,
        steps: [
          {
            title: `Reply in 1 day`,
            when: `Day 1`,
            text: `An engineer reads your note and books a 30-minute call.`,
          },
          {
            title: `Site and fabric plan`,
            when: `Week 1`,
            text: `Pod layout, power draw and InfiniBand topology on one page.`,
          },
          {
            title: `Contract and racking`,
            when: `Week 2–3`,
            text: `Rate fixed for the term, GPUs racked and burned in.`,
          },
        ],
        photo: `lena`,
        name: `Lena Berg`,
        role: `Solutions engineer, N-01 Narvik`,
        note: `Your contact · NO / EN / DE`,
        directLabel: `Rather write directly`,
        email: `sales@nordlys.example`,
        phone: `+47 77 60 00 00`,
      }),
      f(j, {
        deskLabel: { type: p.String, title: `Desk label` },
        timezone: { type: p.String, title: `Time zone` },
        promise: { type: p.String, title: `Promise` },
        promiseTone: { type: p.String, title: `Promise (grey)` },
        stat1Label: { type: p.String, title: `Stat 1 label` },
        stat1: { type: p.String, title: `Stat 1` },
        stat1Unit: { type: p.String, title: `Stat 1 unit` },
        stat2Label: { type: p.String, title: `Stat 2 label` },
        stat2: { type: p.String, title: `Stat 2` },
        stepsLabel: { type: p.String, title: `Steps label` },
        steps: {
          type: p.Array,
          title: `Steps`,
          control: {
            type: p.Object,
            controls: {
              title: { type: p.String, title: `Title` },
              when: { type: p.String, title: `When` },
              text: { type: p.String, title: `Text`, displayTextArea: !0 },
            },
          },
        },
        image: { type: p.ResponsiveImage, title: `Portrait` },
        photo: {
          type: p.Enum,
          title: `Photo`,
          options: Y,
          description: `Used when no portrait is set`,
        },
        name: { type: p.String, title: `Name` },
        role: { type: p.String, title: `Role` },
        note: { type: p.String, title: `Note` },
        directLabel: { type: p.String, title: `Direct label` },
        email: { type: p.String, title: `Email` },
        phone: { type: p.String, title: `Phone` },
      }),
      (ce =
        W(`nl-lc`) +
        `
.nl-lc .locs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.nl-lc .loc{position:relative;display:flex;flex-direction:column;transition:opacity 1.1s ${B},transform 1.1s ${B}}
.nl-lc.pre .loc{opacity:0;transform:translateY(28px)}
.nl-lc .loc .ph{aspect-ratio:5/4}
.nl-lc .loc:hover .ph img{transform:scale(1.04);filter:grayscale(1) contrast(1.12) brightness(.92)}
.nl-lc .loc .ph::before{content:"";position:absolute;inset:auto 0 0 0;height:45%;z-index:1;background:linear-gradient(0deg,rgba(0,0,0,.6),transparent);pointer-events:none}
.nl-lc .loc .ph .tag{position:absolute;top:14px;right:14px;z-index:2;background:rgba(0,0,0,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#F3F3F3}
.nl-lc .loc .ph .tag.v{color:#C9BDFF}
.nl-lc .co{position:absolute;left:16px;bottom:16px;z-index:2;color:rgba(243,243,243,.85);line-height:1.6}
.nl-lc .b{position:relative;display:flex;flex-direction:column;flex:1;padding-top:22px}
.nl-lc .b::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${B}}
.nl-lc .loc:hover .b::before{transform:scaleX(1);transform-origin:0 50%}
.nl-lc .h{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.nl-lc h3{margin:0;font-weight:400;letter-spacing:-.03em;line-height:1.1}
.nl-lc h3 span{display:block;margin-top:6px;font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6}
.nl-lc .h .mono{color:#A6A6A6}
.nl-lc dl{margin:26px 0 0;border-top:1px solid ${z}}
.nl-lc dl > div{display:grid;grid-template-columns:96px 1fr;gap:12px;align-items:baseline;padding:13px 0;border-bottom:1px solid ${z}}
.nl-lc dt{color:#A6A6A6}
.nl-lc dd{margin:0;font-weight:400;font-size:15px;letter-spacing:-.02em}
.nl-lc dd .off{margin-left:10px;color:#5E5E5E;font:400 10px/1 "Geist Mono",monospace;letter-spacing:.1em}
.nl-lc .go{display:inline-flex;align-items:center;gap:10px;margin-top:20px;color:#A6A6A6;text-decoration:none;transition:color .3s}
.nl-lc .go::before{content:"";width:5px;height:5px;background:currentColor}
.nl-lc .go:hover{color:#F3F3F3}
.nl-lc.is-md .locs{grid-template-columns:1fr;gap:64px}
.nl-lc.is-md .loc .ph{aspect-ratio:16/10}
.nl-lc.is-sm .loc .ph{aspect-ratio:4/3}
.nl-lc.is-sm dl > div{grid-template-columns:84px 1fr}
`),
      (M.defaultProps = {
        number: `01`,
        title: `Locations`,
        sub: `Three sites above the Arctic Circle`,
        intro: `Offices in Tromsø, compute in Narvik and, from 2027, Kiruna. All three run on Nordic hydro and Arctic air.`,
        items: [
          {
            photo: `tromsoHq`,
            alt: `Nordlys headquarters, Tromsø`,
            tag: `HQ · Office`,
            tagViolet: !1,
            lat: `69.6492° N`,
            lon: `18.9553° E`,
            name: `Tromsø`,
            sub: `Headquarters`,
            status: `Open`,
            live: !0,
            timezone: `Europe/Oslo`,
            k2: `Outside`,
            v2: `−2 °C · Light snow`,
            address: `Strandgata 14, 9008 Tromsø, Norway`,
            linkLabel: `Directions`,
            link: `https://maps.google.com/?q=69.6492,18.9553`,
          },
          {
            photo: `hallA`,
            alt: `Hall A at N-01 Narvik`,
            tag: `N-01 · Live`,
            tagViolet: !0,
            lat: `68.4385° N`,
            lon: `17.4273° E`,
            name: `Narvik`,
            sub: `N-01 · Hall A`,
            status: `Online`,
            live: !0,
            timezone: `Europe/Oslo`,
            k2: `Intake air`,
            v2: `−4 °C · PUE 1.08`,
            address: `Fagernesveien 2, 8514 Narvik, Norway`,
            linkLabel: `Book a site tour`,
            link: `/contact-03`,
          },
          {
            photo: `kirunaBuild`,
            alt: `N-02 Kiruna under construction`,
            tag: `N-02 · 2027`,
            tagViolet: !1,
            lat: `67.8558° N`,
            lon: `20.2253° E`,
            name: `Kiruna`,
            sub: `N-02 · Under construction`,
            status: `Q3 2027`,
            live: !1,
            timezone: `Europe/Stockholm`,
            k2: `Outside`,
            v2: `−9 °C · Clear`,
            address: `Industrivägen 9, 981 38 Kiruna, Sweden`,
            linkLabel: `Directions`,
            link: `https://maps.google.com/?q=67.8558,20.2253`,
          },
        ],
      }),
      f(M, {
        number: { type: p.String, title: `Number` },
        title: { type: p.String, title: `Title` },
        sub: { type: p.String, title: `Subtitle` },
        intro: { type: p.String, title: `Intro`, displayTextArea: !0 },
        items: {
          type: p.Array,
          title: `Sites`,
          control: {
            type: p.Object,
            controls: {
              image: { type: p.ResponsiveImage, title: `Photo` },
              photo: { type: p.Enum, title: `Built-in photo`, options: Y },
              alt: { type: p.String, title: `Alt text` },
              tag: { type: p.String, title: `Tag` },
              tagViolet: { type: p.Boolean, title: `Violet tag` },
              lat: { type: p.String, title: `Latitude` },
              lon: { type: p.String, title: `Longitude` },
              name: { type: p.String, title: `Name` },
              sub: { type: p.String, title: `Subtitle` },
              status: { type: p.String, title: `Status` },
              live: { type: p.Boolean, title: `Live dot` },
              timezone: { type: p.String, title: `Time zone` },
              k2: { type: p.String, title: `Fact` },
              v2: { type: p.String, title: `Value` },
              address: { type: p.String, title: `Address` },
              linkLabel: { type: p.String, title: `Link label` },
              link: { type: p.Link, title: `Link` },
            },
          },
        },
      }),
      (le =
        W(`nl-dp`) +
        `
.nl-dp .list{border-top:1px solid ${z}}
.nl-dp a.d{position:relative;display:grid;grid-template-columns:56px minmax(0,4fr) minmax(0,4fr) minmax(0,2fr) minmax(0,3fr) 24px;gap:24px;align-items:center;padding:30px 0;border-bottom:1px solid ${z};color:#F3F3F3;text-decoration:none;transition:background .4s,opacity 1.1s ${B},transform 1.1s ${B}}
.nl-dp.pre a.d{opacity:0;transform:translateY(28px)}
.nl-dp a.d::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${B}}
.nl-dp a.d:hover::after,.nl-dp a.d:focus-visible::after{transform:scaleX(1);transform-origin:0 50%}
.nl-dp a.d:hover{background:linear-gradient(90deg,rgba(110,75,255,.07),transparent 60%)}
.nl-dp .ix{color:#5E5E5E;transition:color .3s}
.nl-dp a.d:hover .ix{color:#C9BDFF}
.nl-dp .nm{display:flex;align-items:center;font-weight:400;letter-spacing:-.035em;line-height:1.05}
.nl-dp .nm::before{content:"";width:0;height:6px;margin-right:0;background:#C9BDFF;box-shadow:0 0 8px rgba(110,75,255,.9);transition:width .5s ${B},margin .5s ${B}}
.nl-dp a.d:hover .nm::before,.nl-dp a.d:focus-visible .nm::before{width:6px;margin-right:16px}
.nl-dp .ds{color:#A6A6A6;font-weight:400;font-size:15px;max-width:36ch}
.nl-dp .tag{justify-self:start}
.nl-dp .em{font:400 13px/1 "Geist Mono",monospace;letter-spacing:-.01em;color:#F3F3F3;transition:color .3s}
.nl-dp a.d:hover .em{color:#C9BDFF}
.nl-dp .ar{justify-self:end;color:#A6A6A6;transition:transform .6s ${B},color .3s;display:inline-flex}
.nl-dp a.d:hover .ar{transform:translate(3px,-3px);color:#C9BDFF}
.nl-dp.is-md a.d{grid-template-columns:40px minmax(0,1fr) auto;gap:10px 16px;padding:24px 0}
.nl-dp.is-md .ix{grid-row:1 / span 3;align-self:start;padding-top:8px}
.nl-dp.is-md .nm{grid-column:2}
.nl-dp.is-md .tag{grid-column:3;grid-row:1;justify-self:end}
.nl-dp.is-md .ds{grid-column:2 / -1}
.nl-dp.is-md .em{grid-column:2}
.nl-dp.is-md .ar{grid-column:3;grid-row:3}
.nl-dp.is-sm a.d{grid-template-columns:28px minmax(0,1fr) auto}
`),
      (N.defaultProps = {
        number: `02`,
        title: `Departments`,
        sub: `Write to the right desk`,
        intro: `Every inbox is read by a person. Response times are measured, not promised.`,
        items: [
          {
            name: `Sales`,
            text: `Capacity, pricing and contracts for 64 to 4,096+ GPUs.`,
            tag: `Reply < 1 day`,
            tagViolet: !1,
            email: `sales@nordlys.example`,
          },
          {
            name: `Support 24/7`,
            text: `For running customers. Hands on site in Narvik around the clock.`,
            tag: `15 min`,
            tagViolet: !0,
            email: `support@nordlys.example`,
          },
          {
            name: `Press`,
            text: `Interviews, images and media visits to the hall.`,
            tag: `Same day`,
            tagViolet: !1,
            email: `press@nordlys.example`,
          },
          {
            name: `Careers`,
            text: `7 open roles in Narvik, Tromsø and Kiruna.`,
            tag: `7 roles`,
            tagViolet: !1,
            email: `careers@nordlys.example`,
          },
          {
            name: `Security disclosure`,
            text: `Report a vulnerability. PGP key and safe-harbour policy on request.`,
            tag: `PGP`,
            tagViolet: !1,
            email: `security@nordlys.example`,
          },
        ],
      }),
      f(N, {
        number: { type: p.String, title: `Number` },
        title: { type: p.String, title: `Title` },
        sub: { type: p.String, title: `Subtitle` },
        intro: { type: p.String, title: `Intro`, displayTextArea: !0 },
        items: {
          type: p.Array,
          title: `Desks`,
          control: {
            type: p.Object,
            controls: {
              name: { type: p.String, title: `Name` },
              text: { type: p.String, title: `Text`, displayTextArea: !0 },
              tag: { type: p.String, title: `Tag` },
              tagViolet: { type: p.Boolean, title: `Violet tag` },
              email: { type: p.String, title: `Email` },
            },
          },
        },
      }),
      (ue =
        W(`nl-ti`) +
        `
.nl-ti{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}
.nl-ti .lab{grid-column:1 / span 3}
.nl-ti .t{grid-column:4 / -1;margin:0;font-weight:400;letter-spacing:-.035em;line-height:1.08;text-wrap:pretty}
.nl-ti .t .tone{color:#A6A6A6}
.nl-ti .stats{grid-column:4 / -1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid ${z}}
.nl-ti .stats > div{display:flex;flex-direction:column;gap:14px;padding:18px 16px 0 0}
.nl-ti .stats > div + div{padding-left:16px;border-left:1px solid ${z}}
.nl-ti .stats b{font-family:"Geist Mono",monospace;font-weight:400;line-height:1;letter-spacing:-.07em;font-feature-settings:"zero" 1}
.nl-ti .stats .mono{color:#A6A6A6;max-width:24ch;line-height:1.5}
.nl-ti.is-md .lab,.nl-ti.is-md .t,.nl-ti.is-md .stats{grid-column:1 / -1}
.nl-ti.is-md .lab{margin-bottom:24px}
.nl-ti.is-sm .stats{grid-template-columns:1fr}
.nl-ti.is-sm .stats > div,.nl-ti.is-sm .stats > div + div{padding:16px 0;border-left:0;flex-direction:row;justify-content:space-between;align-items:baseline;gap:16px}
.nl-ti.is-sm .stats > div + div{border-top:1px solid ${z}}
.nl-ti.is-sm .stats .mono{text-align:right}
`),
      (P.defaultProps = {
        number: `01`,
        title: `Why visit`,
        sub: `See it before you sign`,
        text: `Most teams that sign a Dedicated pod walk Hall A first.`,
        tone: `You see where your GPUs will sit, feel the intake air at −4 °C, and fly home with a site and fabric plan.`,
        stats: [
          { value: `62%`, label: `of 2026 contracts toured first` },
          { value: `34`, label: `tours since March 2025` },
          { value: `9`, label: `days, median tour to contract` },
        ],
      }),
      f(P, {
        number: { type: p.String, title: `Number` },
        title: { type: p.String, title: `Title` },
        sub: { type: p.String, title: `Subtitle` },
        text: { type: p.String, title: `Text`, displayTextArea: !0 },
        tone: { type: p.String, title: `Text (grey)`, displayTextArea: !0 },
        stats: {
          type: p.Array,
          title: `Stats`,
          maxCount: 3,
          control: {
            type: p.Object,
            controls: {
              value: { type: p.String, title: `Value`, description: `Numbers count up` },
              label: { type: p.String, title: `Label` },
            },
          },
        },
      }),
      (de =
        W(`nl-it`) +
        `
.nl-it .grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:start}
.nl-it .ph{grid-column:1 / span 5;position:sticky;top:96px;aspect-ratio:4/5;transition:clip-path .2s linear}
.nl-it .ph .idx{position:absolute;top:18px;right:40px;z-index:2;color:rgba(243,243,243,.75)}
.nl-it .ph .nl-chip{position:absolute;left:16px;bottom:16px;z-index:2}
.nl-it ol{grid-column:7 / -1;list-style:none;margin:0;padding:0;position:relative}
.nl-it ol::before{content:"";position:absolute;left:105px;top:8px;bottom:8px;width:1px;background:linear-gradient(180deg,#6E4BFF,rgba(201,189,255,.35) 40%,${z})}
.nl-it li{position:relative;display:grid;grid-template-columns:82px 1fr;gap:46px;transition:opacity 1.1s ${B},transform 1.1s ${B}}
.nl-it.pre li{opacity:0;transform:translateY(28px)}
.nl-it li:last-child{padding-bottom:0!important}
.nl-it li::before{content:"";position:absolute;left:101px;top:6px;width:9px;height:9px;background:#000;box-shadow:inset 0 0 0 1px rgba(201,189,255,.75);transition:background .4s,box-shadow .4s}
.nl-it li:first-child::before,.nl-it li:hover::before{background:#C9BDFF;box-shadow:0 0 10px rgba(110,75,255,.9)}
.nl-it .tm{font:400 18px/1 "Geist Mono",monospace;letter-spacing:-.04em;padding-top:2px}
.nl-it .tm span{display:block;margin-top:8px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#5E5E5E}
.nl-it h3{margin:0;font-weight:400;letter-spacing:-.03em;line-height:1.1;transition:color .3s}
.nl-it li:hover h3{color:#fff}
.nl-it li p{margin:10px 0 0;color:#A6A6A6;font-weight:400;max-width:46ch;text-wrap:pretty}
.nl-it li .tag{margin-top:16px}
.nl-it.is-md .ph{grid-column:1 / -1;position:relative;top:0;aspect-ratio:16/10;margin-bottom:48px}
.nl-it.is-md ol{grid-column:1 / -1}
.nl-it.is-sm .ph{aspect-ratio:4/3}
.nl-it.is-sm ol::before{left:4px}
.nl-it.is-sm li{grid-template-columns:1fr;gap:12px;padding-left:30px}
.nl-it.is-sm li::before{left:0}
.nl-it.is-sm .tm{display:flex;align-items:baseline;gap:12px}
.nl-it.is-sm .tm span{margin-top:0}
${E}
`),
      (F.defaultProps = {
        number: `02`,
        title: `Itinerary`,
        sub: `One morning in Narvik`,
        intro: `Fly in on the morning flight from Oslo, be back at the airport for the 15:10 departure.`,
        photo: `hallATrays`,
        alt: `Cable trays above the cold aisle in Hall A`,
        photoLabel: `Hall A`,
        chip: `68.4385° N · 17.4273° E`,
        chipIcon: `wind`,
        stops: [
          {
            time: `08:40`,
            dur: `Arrive`,
            title: `Harstad/Narvik airport`,
            text: `We meet you at arrivals (EVE) and drive 50 minutes along the Ofotfjord to Hall A.`,
            tag: `Transfer included`,
            tagViolet: !1,
          },
          {
            time: `09:45`,
            dur: `60 min`,
            title: `Hall walk`,
            text: `Badge in, a short safety briefing, then the cold aisle: 4,096 H200s on a dedicated 3.2 Tb/s fabric.`,
            tag: `Escorted`,
            tagViolet: !1,
          },
          {
            time: `10:45`,
            dur: `30 min`,
            title: `Cooling intake`,
            text: `Stand at the louvres where Arctic air enters the hall. No chillers, no evaporative water.`,
            tag: `Outdoor · dress warm`,
            tagViolet: !1,
          },
          {
            time: `11:15`,
            dur: `30 min`,
            title: `Heat exchange`,
            text: `The plate exchangers that send 14 MW of waste heat into Narvik's district heating grid.`,
            tag: `PUE 1.08`,
            tagViolet: !1,
          },
          {
            time: `11:45`,
            dur: `75 min`,
            title: `Q&A and lunch`,
            text: `Your engineer walks through a site and fabric plan for your workload, then lunch in the hall canteen.`,
            tag: `Bring your numbers`,
            tagViolet: !0,
          },
        ],
      }),
      f(F, {
        number: { type: p.String, title: `Number` },
        title: { type: p.String, title: `Title` },
        sub: { type: p.String, title: `Subtitle` },
        intro: { type: p.String, title: `Intro`, displayTextArea: !0 },
        image: { type: p.ResponsiveImage, title: `Photo` },
        photo: { type: p.Enum, title: `Built-in photo`, options: Y },
        alt: { type: p.String, title: `Alt text` },
        photoLabel: { type: p.String, title: `Photo label` },
        chip: { type: p.String, title: `Chip` },
        chipIcon: { type: p.Enum, title: `Chip icon`, options: D },
        stops: {
          type: p.Array,
          title: `Stops`,
          control: {
            type: p.Object,
            controls: {
              time: { type: p.String, title: `Time` },
              dur: { type: p.String, title: `Duration` },
              title: { type: p.String, title: `Title` },
              text: { type: p.String, title: `Text`, displayTextArea: !0 },
              tag: { type: p.String, title: `Tag` },
              tagViolet: { type: p.Boolean, title: `Violet tag` },
            },
          },
        },
      }),
      (fe =
        W(`nl-bs`) +
        X +
        `
.nl-bs{display:flex;flex-direction:column;gap:28px}
.nl-bs h2{margin:0;font-weight:400;letter-spacing:-.04em;line-height:1;text-wrap:balance}
.nl-bs h2 .tone{display:block;color:#A6A6A6}
.nl-bs .bring{margin-top:8px;border-top:1px solid ${z}}
.nl-bs .bring > .mono{display:block;padding:14px 0 6px;color:#A6A6A6}
.nl-bs ul{list-style:none;margin:0;padding:0}
.nl-bs li{display:grid;grid-template-columns:40px 1fr;gap:14px;align-items:start;padding:14px 0;border-bottom:1px solid ${z}}
.nl-bs li .nl-di{width:30px;height:20px;margin-top:2px}
.nl-bs li b{display:block;font-weight:400;font-size:16px;letter-spacing:-.01em}
.nl-bs li span{display:block;margin-top:2px;color:#A6A6A6;font-weight:400;font-size:14px}
${E}
`),
      (I.defaultProps = {
        number: `04`,
        title: `Book`,
        sub: `Reserve a place`,
        heading: `Book a tour.`,
        tone: `We confirm in a day.`,
        bringLabel: `What to bring`,
        items: [
          { icon: `shield`, title: `Passport or national ID`, text: `Checked at the gate.` },
          { icon: `snow`, title: `Warm layers`, text: `The intake runs below zero from November.` },
          {
            icon: `chip`,
            title: `Your workload numbers`,
            text: `Model, cluster size and start date make the Q&A count.`,
          },
        ],
      }),
      f(I, {
        number: { type: p.String, title: `Number` },
        title: { type: p.String, title: `Title` },
        sub: { type: p.String, title: `Subtitle` },
        heading: { type: p.String, title: `Heading` },
        tone: { type: p.String, title: `Heading (grey)` },
        bringLabel: { type: p.String, title: `List label` },
        items: {
          type: p.Array,
          title: `Items`,
          control: {
            type: p.Object,
            controls: {
              icon: { type: p.Enum, title: `Icon`, options: D },
              title: { type: p.String, title: `Title` },
              text: { type: p.String, title: `Text` },
            },
          },
        },
      }));
  });
export { M as a, pe as c, F as i, j as n, A as o, N as r, P as s, I as t };
//# sourceMappingURL=Contact.Bl8le3fg.mjs.map
