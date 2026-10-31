import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { I as t, R as n, _ as r, b as i, l as a, o, s, w as c, y as l } from "./react.Dlpel5Rf.mjs";
import { k as u, o as d, q as f } from "./framer.CKDq5C8y.mjs";
import {
  C as p,
  S as m,
  T as ee,
  a as h,
  g,
  h as _,
  m as v,
  o as y,
  p as b,
  w as x,
  x as S,
  y as C,
} from "./shared-lib.W6te6cXm.mjs";
import { a as w, n as T, r as E, t as D } from "./Inner-d2rabs.CpMZmyL3.mjs";
function O(e, t = 0.85, i = `0px 0px -15% 0px`) {
  let a = x(),
    o = m(e, i),
    [s, c] = r(!1);
  return (
    l(() => {
      let r = e.current;
      r && !S() && !a && r.getBoundingClientRect().top > n.innerHeight * t && c(!0);
    }, [a]),
    { pre: s && !o, go: s && o }
  );
}
function k(e) {
  let t = x(),
    [i, a] = r(``);
  return (
    l(() => {
      let r = e.current;
      if (!r || S() || t) return;
      let i = r.getBoundingClientRect();
      if (i.bottom <= 0) return;
      let o = !1;
      if ((a(`is-pre`), i.top < n.innerHeight * 0.88))
        return (
          ee(() => {
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
function A(e) {
  let t = i(null),
    n = p(t),
    { pre: r, go: s } = O(t),
    c = i(null),
    l = k(c),
    u = { n: 0 },
    d = n <= 600 ? 1 : n <= 960 ? 2 : 3,
    f = e.perks || [],
    m = H(18, 2, 28, n);
  return a(`div`, {
    ref: t,
    className: `nl-pk` + (r ? ` pre` : ``) + g(n),
    style: e.style,
    children: [
      C(),
      o(`style`, { dangerouslySetInnerHTML: { __html: Z } }),
      a(`div`, {
        className: `ph`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [
          o(`div`, {
            style: { gridColumn: `1 / -1`, marginBottom: H(28, 3, 44, n) },
            children: o(U, { n: e.number, t: e.title, s: e.sub }),
          }),
          o(`h2`, {
            ref: c,
            className: `h2 ` + l,
            style: { fontSize: H(30, 3.4, 58, n) },
            "aria-label": [e.heading, e.headingNowrap, e.tone].filter(Boolean).join(` `),
            children: a(`span`, {
              "aria-hidden": `true`,
              children: [
                J(e.heading, u),
                ` `,
                e.headingNowrap
                  ? o(`span`, { className: `nw`, children: J(e.headingNowrap, u) })
                  : null,
                ` `,
                o(`span`, { className: `tone nw`, children: J(e.tone, u) }),
              ],
            }),
          }),
          o(`p`, { className: `lede`, children: e.lede }),
        ],
      }),
      o(`div`, {
        className: `perks`,
        style: { gridTemplateColumns: `repeat(${d},minmax(0,1fr))` },
        children: f.map((e, t) =>
          a(
            `div`,
            {
              className: `pk lit`,
              style: {
                padding: `24px ${m}px 26px ${t % d === 0 ? 0 : m}px`,
                borderLeft: t % d ? `1px solid ${I}` : void 0,
                ...Y(s, t),
              },
              children: [
                a(`div`, {
                  className: `top`,
                  children: [
                    w(e.icon),
                    o(`span`, { className: `mono`, children: String(t + 1).padStart(2, `0`) }),
                  ],
                }),
                o(`h3`, { style: { fontSize: H(20, 1.6, 24, n) }, children: e.title }),
                o(`p`, { children: e.text }),
                o(`span`, { className: `st mono`, children: X(e.stat) }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function j({ s: e, i: t, total: s, h: c }) {
  let u = i(null),
    d = x(),
    [f, p] = r(0);
  return (
    l(() => {
      if (S() || d) return;
      let e = 0,
        t = () => {
          e = 0;
          let t = u.current;
          if (!t) return;
          let r = t.getBoundingClientRect(),
            i = n.innerHeight;
          p(1 - Math.max(0, Math.min(1, (i * 0.92 - r.top) / (i * 0.52))));
        },
        r = () => {
          e ||= requestAnimationFrame(t);
        };
      return (
        t(),
        n.addEventListener(`scroll`, r, { passive: !0 }),
        () => {
          (n.removeEventListener(`scroll`, r), cancelAnimationFrame(e));
        }
      );
    }, [d]),
    a(`figure`, {
      className: `sp`,
      children: [
        a(`div`, {
          ref: u,
          className: `ph`,
          style: { height: c, clipPath: `inset(${f * 10}% ${f * 8}% ${f * 10}% ${f * 8}%)` },
          children: [
            o(`img`, {
              src: e.image?.src || G[e.photo] || _.careers01,
              alt: e.alt,
              loading: `lazy`,
            }),
            o(`span`, {
              className: `crn`,
              style: { top: 12, left: 12, borderTopWidth: 1, borderLeftWidth: 1 },
            }),
            o(`span`, {
              className: `crn`,
              style: { bottom: 12, right: 12, borderBottomWidth: 1, borderRightWidth: 1 },
            }),
          ],
        }),
        a(`figcaption`, {
          className: `mono`,
          children: [
            o(`span`, { children: e.caption }),
            a(`span`, {
              children: [String(t + 1).padStart(2, `0`), ` / `, String(s).padStart(2, `0`)],
            }),
          ],
        }),
      ],
    })
  );
}
function M(e) {
  let t = i(null),
    n = p(t),
    r = e.shots || [],
    s = n <= 960,
    c = s ? (n <= 600 ? 260 : 340) : H(300, 30, 480, n),
    l = s ? `1fr` : r.length === 3 ? `5fr 4fr 3fr` : `repeat(${r.length || 1},1fr)`;
  return a(`div`, {
    ref: t,
    className: `nl-lf` + g(n),
    style: e.style,
    children: [
      C(),
      o(`style`, { dangerouslySetInnerHTML: { __html: Q } }),
      a(`div`, {
        className: `head`,
        style: { marginBottom: H(40, 5, 72, n) },
        children: [o(U, { n: e.number, t: e.title, s: e.sub }), o(`p`, { children: e.intro })],
      }),
      o(`div`, {
        className: `strip`,
        style: { gridTemplateColumns: l },
        children: r.map((e, t) => o(j, { s: e, i: t, total: r.length, h: c }, t)),
      }),
    ],
  });
}
function N(e) {
  let t = i(null),
    n = p(t),
    { pre: r } = O(t, 0.88, `0px 0px -12% 0px`),
    s = i(null),
    c = k(s),
    l = { n: 0 },
    u = `mailto:` + e.email + (e.subject ? `?subject=` + encodeURIComponent(e.subject) : ``);
  return a(`div`, {
    ref: t,
    className: `nl-oa fx` + (r ? ` pre` : ``) + g(n),
    style: { ...e.style, padding: H(28, 3.4, 52, n) },
    children: [
      C(),
      o(`style`, { dangerouslySetInnerHTML: { __html: $ } }),
      o(`div`, {
        className: `bg`,
        "aria-hidden": `true`,
        children: o(y, {
          lightX: e.lightX,
          lightY: e.lightY,
          gain: 2.5,
          rib: 8,
          spread: 1.1,
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
      o(`div`, { className: `shade` }),
      a(`div`, {
        className: `l`,
        children: [
          o(U, { n: e.number, t: e.title, s: e.sub }),
          o(`h2`, {
            ref: s,
            className: c,
            style: { fontSize: H(32, 3.7, 62, n) },
            "aria-label": e.heading + ` ` + e.tone,
            children: a(`span`, {
              "aria-hidden": `true`,
              children: [
                J(e.heading, l),
                ` `,
                o(`span`, { className: `tone`, children: J(e.tone, l) }),
              ],
            }),
          }),
          o(`p`, { className: `lede`, children: e.lede }),
        ],
      }),
      a(`div`, {
        className: `r`,
        children: [
          o(`ul`, {
            children: (e.points || ``)
              .split(
                `
`
              )
              .map((e) => e.trim())
              .filter(Boolean)
              .map((e, t) => o(`li`, { children: e }, t)),
          }),
          a(`a`, {
            className: `dlk`,
            href: u,
            style: { fontSize: H(20, 1.8, 26, n) },
            children: [e.email, W],
          }),
          o(`span`, { className: `mono n`, children: e.note }),
        ],
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
  Q,
  $,
  te = e(() => {
    (t(),
      s(),
      c(),
      f(),
      b(),
      h(),
      D(),
      (P = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (F = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (I = `rgba(243,243,243,.12)`),
      (L = `cubic-bezier(.16,1,.3,1)`),
      (R = `display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em`),
      (z = `align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat`),
      (B = `-webkit-mask-image:${v};mask-image:${v};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px`),
      (V = (e) => `
.${e}{${F};width:100%}
.${e} .mono{${P}}
.${e} .lab{${R}}
.${e} .lab .n{${z}}
.${e} .lab .s{color:#A6A6A6}
.${e} .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.${e} .head > p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch;text-wrap:balance}
.${e} .h2{margin:0;font-weight:400;letter-spacing:-.04em;line-height:1;text-wrap:balance}
.${e} .h2 .tone{color:#A6A6A6}
.${e} .lede{margin:0;color:#A6A6A6;font-weight:400;max-width:44ch;text-wrap:balance}
.${e} .fx{transition:opacity 1.1s ${L},transform 1.1s ${L}}
.${e}.pre .fx{opacity:0;transform:translateY(28px)}
.${e} .lab{transition:opacity 1.1s ${L},transform 1.1s ${L}}
.${e}.pre .lab{opacity:0;transform:translateY(20px)}
`),
      (H = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (U = ({ n: e, t, s: n }) =>
        a(`div`, {
          className: `lab`,
          children: [
            e ? o(`span`, { className: `n`, children: e }) : null,
            o(`span`, { children: t }),
            o(`span`, { className: `s`, children: n }),
          ],
        })),
      (W = o(`svg`, {
        viewBox: `0 0 12 12`,
        width: `14`,
        height: `14`,
        fill: `none`,
        "aria-hidden": `true`,
        children: o(`path`, {
          d: `M2.5 9.5 9.5 2.5M4 2.5h5.5V8`,
          stroke: `currentColor`,
          strokeWidth: `1.1`,
        }),
      })),
      (G = {
        careers01: _.careers01,
        careers02: _.careers02,
        careers03: _.careers03,
        racks: _.racks,
        trays: _.trays,
        hero: _.hero,
      }),
      (K = Object.keys(G)),
      (q = `
.nl-blur .bw{display:inline-block;white-space:nowrap}
.nl-blur .bc{display:inline-block}
@keyframes nl-blur-in{from{opacity:0;filter:blur(14px);transform:translateY(.16em)}to{opacity:1;filter:blur(0);transform:none}}
.nl-blur.is-in .bc{animation:nl-blur-in 1.25s cubic-bezier(.25,1,.5,1) both}
.nl-blur.is-pre .bc{opacity:0}
@media (prefers-reduced-motion:reduce){.nl-blur .bc{animation:none!important;opacity:1!important}}
`),
      (J = (e, t, n = 0.021) =>
        S()
          ? e
          : (e || ``)
              .split(/(\s+)/)
              .map((e, r) =>
                /^\s+$/.test(e) || !e
                  ? e
                  : o(
                      `span`,
                      {
                        className: `bw`,
                        children: Array.from(e).map((e, r) =>
                          o(
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
      (Y = (e, t, n = 0.07, r = 0) => (e ? { transitionDelay: r + t * n + `s` } : void 0)),
      (X = (e) =>
        (e || ``)
          .split(/(\*\*[^*]+\*\*)/)
          .map((e, t) => (/^\*\*/.test(e) ? o(`b`, { children: e.slice(2, -2) }, t) : e))),
      (Z =
        V(`nl-pk`) +
        q +
        `
.nl-pk .ph{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-pk .ph .lab{grid-column:1 / -1}
.nl-pk .ph h2{grid-column:1 / span 7}
.nl-pk .ph h2 .nw{white-space:nowrap}
.nl-pk .ph p{grid-column:9 / span 4;justify-self:end;text-align:right}
.nl-pk .perks{display:grid;border-top:1px solid ${I}}
.nl-pk .pk{position:relative;display:flex;flex-direction:column;gap:16px;border-bottom:1px solid ${I};transition:background .6s ${L},opacity 1.1s ${L},transform 1.1s ${L};box-sizing:border-box}
.nl-pk.pre .pk{opacity:0;transform:translateY(28px)}
.nl-pk .pk::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${L}}
.nl-pk .pk:hover::after{transform:scaleX(1);transform-origin:0 50%}
.nl-pk .top{display:flex;justify-content:space-between;align-items:center;color:#5E5E5E}
.nl-pk .pk h3{margin:18px 0 0;font-weight:400;letter-spacing:-.025em;line-height:1.15;text-wrap:balance}
.nl-pk .pk p{margin:0;color:#A6A6A6;font-weight:400;font-size:15px;line-height:1.5;max-width:36ch;text-wrap:pretty}
.nl-pk .st{margin-top:auto;padding-top:8px;color:#A6A6A6;transition:color .4s}
.nl-pk .st b{font-weight:400;color:#F3F3F3}
.nl-pk .pk:hover .st{color:#C9BDFF}
.nl-pk.is-md .ph h2,.nl-pk.is-md .ph p{grid-column:1 / -1}
.nl-pk.is-md .ph p{justify-self:start;text-align:left}
${T}
`),
      (A.defaultProps = {
        number: `01`,
        title: `Why Nordlys`,
        sub: `What comes with the job`,
        heading: `Hard problems,`,
        headingNowrap: `cold air`,
        tone: `and time to think.`,
        lede: `We pay in the top quartile for Norway, publish every salary range and give everyone equity. The rest is below.`,
        perks: [
          {
            icon: `heat`,
            title: `Relocation to Narvik`,
            text: `Flights, a furnished flat for three months and a local guide for schools, banks and the best ski tracks.`,
            stat: `Up to **NOK 90k** · family included`,
          },
          {
            icon: `hydro`,
            title: `Winter light allowance`,
            text: `Polar night lasts six weeks. Spend it on a daylight lamp, a week in the south or a sauna membership.`,
            stat: `**NOK 15k** · every November`,
          },
          {
            icon: `shield`,
            title: `Equity for everyone`,
            text: `Every permanent hire gets options, from the hall floor to the board. Four years, one-year cliff, ten years to exercise.`,
            stat: `**100%** of permanent staff`,
          },
          {
            icon: `snow`,
            title: `Six weeks of holiday`,
            text: `Thirty days, and we close between Christmas and New Year. On-call is paid and rotated, never stacked on leave.`,
            stat: `**30 days** + winter close`,
          },
          {
            icon: `chip`,
            title: `Hardware budget`,
            text: `Pick your own laptop, monitors and chair. Engineers also get a standing GPU allocation for side projects.`,
            stat: `**NOK 40k** + 8 GPUs on call`,
          },
          {
            icon: `pulse`,
            title: `Learning days`,
            text: `Ten days a year for courses, conferences or a paper you want to reproduce. Results go in the Thursday notes.`,
            stat: `**10 days** · NOK 25k budget`,
          },
        ],
      }),
      u(A, {
        number: { type: d.String, title: `Number` },
        title: { type: d.String, title: `Title` },
        sub: { type: d.String, title: `Subtitle` },
        heading: { type: d.String, title: `Heading` },
        headingNowrap: { type: d.String, title: `Heading (no wrap)` },
        tone: { type: d.String, title: `Heading (grey)` },
        lede: { type: d.String, title: `Text`, displayTextArea: !0 },
        perks: {
          type: d.Array,
          title: `Perks`,
          control: {
            type: d.Object,
            controls: {
              icon: { type: d.Enum, title: `Icon`, options: E },
              title: { type: d.String, title: `Title` },
              text: { type: d.String, title: `Text`, displayTextArea: !0 },
              stat: { type: d.String, title: `Stat`, description: `**text** shows white` },
            },
          },
        },
      }),
      (Q =
        V(`nl-lf`) +
        `
.nl-lf .strip{display:grid;gap:24px}
.nl-lf .sp{margin:0;display:flex;flex-direction:column;gap:14px;min-width:0}
.nl-lf .ph{position:relative;overflow:hidden;background:#0A0A0A}
.nl-lf .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.82);transition:transform 1.4s ${L},filter 1s ${L};${B}}
.nl-lf .ph::after{content:"";position:absolute;inset:0;background:radial-gradient(80% 60% at 100% 100%,rgba(110,75,255,.22),transparent 70%);pointer-events:none}
.nl-lf .sp:hover .ph img{transform:scale(1.03);filter:grayscale(1) contrast(1.12) brightness(.9)}
.nl-lf .crn{position:absolute;z-index:1;width:12px;height:12px;border:0 solid rgba(243,243,243,.7)}
.nl-lf figcaption{display:flex;justify-content:space-between;gap:16px;padding-top:12px;border-top:1px solid ${I};color:#A6A6A6}
.nl-lf figcaption span:last-child{color:#5E5E5E}
`),
      (M.defaultProps = {
        number: `02`,
        title: `Life in the hall`,
        sub: `Narvik, 68.4° N`,
        intro: `Most of the team works within sight of the fjord. Hall tours for candidates run every second Tuesday.`,
        shots: [
          {
            photo: `careers01`,
            alt: `GPU racks in Hall A, Narvik`,
            caption: `Hall A, row 14 · 1,024 H200s`,
          },
          {
            photo: `careers02`,
            alt: `GPU trays under hot-aisle containment`,
            caption: `Weekly tray walk · Operations`,
          },
          { photo: `careers03`, alt: `Cold aisle in Hall A`, caption: `Cold aisle at −11 °C` },
        ],
      }),
      u(M, {
        number: { type: d.String, title: `Number` },
        title: { type: d.String, title: `Title` },
        sub: { type: d.String, title: `Subtitle` },
        intro: { type: d.String, title: `Intro`, displayTextArea: !0 },
        shots: {
          type: d.Array,
          title: `Photos`,
          maxCount: 4,
          control: {
            type: d.Object,
            controls: {
              image: { type: d.ResponsiveImage, title: `Photo` },
              photo: { type: d.Enum, title: `Built-in photo`, options: K },
              alt: { type: d.String, title: `Alt text` },
              caption: { type: d.String, title: `Caption` },
            },
          },
        },
      }),
      ($ =
        V(`nl-oa`) +
        q +
        `
.nl-oa{position:relative;isolation:isolate;overflow:hidden;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px}
.nl-oa .bg{position:absolute;inset:0;z-index:-2}
.nl-oa .shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.6) 55%,rgba(0,0,0,.5)),linear-gradient(0deg,rgba(0,0,0,.8),transparent 60%);box-shadow:inset 0 0 0 1px ${I}}
.nl-oa .l{grid-column:1 / span 6;display:flex;flex-direction:column;gap:28px}
.nl-oa h2{margin:0;font-weight:400;letter-spacing:-.04em;line-height:.98}
.nl-oa h2 .tone{display:block;color:#A6A6A6}
.nl-oa .lede{max-width:40ch}
.nl-oa .r{grid-column:8 / span 5;display:flex;flex-direction:column;justify-content:flex-end;gap:22px}
.nl-oa ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px;font-weight:400;font-size:15px;color:#A6A6A6}
.nl-oa li{display:flex;gap:12px;align-items:baseline}
.nl-oa li::before{content:"";flex:none;width:5px;height:5px;background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9);transform:translateY(-2px)}
.nl-oa .dlk{position:relative;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0 12px;font-weight:400;letter-spacing:-.025em;color:#F3F3F3;text-decoration:none}
.nl-oa .dlk::before,.nl-oa .dlk::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px}
.nl-oa .dlk::before{background:rgba(243,243,243,.3)}
.nl-oa .dlk::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s ${L}}
.nl-oa .dlk:hover::after{transform:scaleX(1);transform-origin:0 50%}
.nl-oa .dlk svg{transition:transform .6s ${L},color .3s;color:#A6A6A6}
.nl-oa .dlk:hover svg{transform:translate(3px,-3px);color:#C9BDFF}
.nl-oa .n{color:#5E5E5E}
.nl-oa.is-md .l,.nl-oa.is-md .r{grid-column:1 / -1}
`),
      (N.defaultProps = {
        number: `04`,
        title: `Open application`,
        sub: `No fitting role yet`,
        heading: `Not on the list?`,
        tone: `Write to us anyway.`,
        lede: `About a third of the team joined without an open role. Tell us what you would build at 69° N and the right lead reads it within a week.`,
        points: `A few lines on what you want to work on
A CV or LinkedIn link, no cover letter
Where you would like to be based`,
        email: `careers@nordlys.example`,
        subject: `Open application`,
        note: `Read by a person · Reply within 7 days`,
        lightX: 0.62,
        lightY: 1.05,
        seed: 23,
      }),
      u(N, {
        number: { type: d.String, title: `Number` },
        title: { type: d.String, title: `Title` },
        sub: { type: d.String, title: `Subtitle` },
        heading: { type: d.String, title: `Heading` },
        tone: { type: d.String, title: `Heading (grey)` },
        lede: { type: d.String, title: `Text`, displayTextArea: !0 },
        points: {
          type: d.String,
          title: `Points`,
          displayTextArea: !0,
          description: `One per line`,
        },
        email: { type: d.String, title: `Email` },
        subject: { type: d.String, title: `Mail subject` },
        note: { type: d.String, title: `Note` },
        lightX: { type: d.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: d.Number, title: `Light Y`, min: 0, max: 1.2, step: 0.01 },
        seed: { type: d.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }));
  });
export { te as i, N as n, A as r, M as t };
//# sourceMappingURL=Careers.DsdVTfYK.mjs.map
