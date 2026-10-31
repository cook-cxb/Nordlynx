import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  O as r,
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
import { C as p, k as m, o as h, q as g } from "./framer.CKDq5C8y.mjs";
function _(e) {
  let t = null;
  for (let n = e?.parentElement || null; n; n = n.parentElement)
    n.dataset?.framerComponentType === `Frame` && (t = n);
  return t;
}
function v(e) {
  t(() => {
    if (!E()) return;
    let t = _(e.current);
    t && getComputedStyle(t).containerType === `normal` && (t.style.containerType = `inline-size`);
  }, []);
}
function y() {
  let [e, t] = a(!1);
  return (
    f(() => {
      if (i === void 0 || !i.matchMedia) return;
      let e = i.matchMedia(`(prefers-reduced-motion: reduce)`);
      t(e.matches);
      let n = () => t(e.matches);
      return (e.addEventListener?.(`change`, n), () => e.removeEventListener?.(`change`, n));
    }, []),
    e
  );
}
function b(e) {
  let [n, r] = a(1280);
  return (
    t(() => {
      let t = () => {
        let t = E() ? _(e.current) : null;
        r(t ? t.offsetWidth : i.innerWidth);
      };
      t();
      let n = E() ? _(e.current) : null,
        a = new ResizeObserver(t);
      return (
        n ? a.observe(n) : e.current && a.observe(e.current),
        i.addEventListener(`resize`, t),
        () => {
          (a.disconnect(), i.removeEventListener(`resize`, t));
        }
      );
    }, []),
    n
  );
}
function x(e, t = 600, n = 0) {
  let r = e.textContent || ``,
    a = performance.now() + n,
    o = (n) => {
      let i = Math.min(1, Math.max(0, (n - a) / t)),
        s = Math.floor(i * r.length),
        c = r.slice(0, s);
      for (let e = s; e < r.length; e++)
        c += /\s/.test(r[e]) ? r[e] : `0123456789/#_:+·`[(Math.random() * 16) | 0];
      ((e.textContent = i >= 1 ? r : c), i < 1 && requestAnimationFrame(o));
    };
  (requestAnimationFrame(o),
    i.setTimeout(
      () => {
        e.textContent = r;
      },
      n + t + 600
    ));
}
function S(e) {
  if (i === void 0) return e();
  let t = i,
    n = document.querySelector(`.nl-nv .ld:not(.done)`);
  if (
    t.__nlIntroDone ||
    !n ||
    (i.matchMedia && i.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
  )
    return e();
  let r = !1,
    a = () => {
      r || ((r = !0), i.removeEventListener(`nl:intro`, a), e());
    };
  (i.addEventListener(`nl:intro`, a), i.setTimeout(a, 3e3));
}
function C(e, t = `0px 0px -12% 0px`) {
  let [n, r] = a(!1);
  return (
    f(() => {
      if (E()) {
        r(!0);
        return;
      }
      let n = e.current;
      if (!n) return;
      let i = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (i.disconnect(), S(() => r(!0)));
        },
        { rootMargin: t }
      );
      return (i.observe(n), () => i.disconnect());
    }, []),
    n
  );
}
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N = e(() => {
    (n(),
      u(),
      d(),
      g(),
      (w = `../../styles/css2-c89704.css`),
      (T = () => l(`link`, { rel: `stylesheet`, href: w })),
      (E = () => p.current() === p.canvas),
      (D = () => i !== void 0 && !!i.matchMedia && i.matchMedia(`(pointer:fine)`).matches),
      (O = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='8.66' viewBox='0 0 5 8.66'%3E%3Crect width='5' height='8.66' fill='%23fff' fill-opacity='0.62'/%3E%3Cg fill='%23fff'%3E%3Ccircle cx='0' cy='0' r='2.1'/%3E%3Ccircle cx='5' cy='0' r='2.1'/%3E%3Ccircle cx='0' cy='8.66' r='2.1'/%3E%3Ccircle cx='5' cy='8.66' r='2.1'/%3E%3Ccircle cx='2.5' cy='4.33' r='2.1'/%3E%3C/g%3E%3C/svg%3E")`),
      (k = {
        right: `M1 6h10M6.5 1.5 11 6l-4.5 4.5`,
        ne: `M2.5 9.5 9.5 2.5M4 2.5h5.5V8`,
        left: `M11 6H1M5.5 1.5 1 6l4.5 4.5`,
        up: `M6 11V1M1.5 5.5 6 1l4.5 4.5`,
      }),
      (A = (e = `right`, t = 12) =>
        l(`svg`, {
          viewBox: `0 0 12 12`,
          width: t,
          height: t,
          fill: `none`,
          "aria-hidden": `true`,
          style: { display: `block`, flex: `none` },
          children: l(`path`, {
            d: k[e],
            stroke: `currentColor`,
            strokeWidth: 1.1,
            vectorEffect: `non-scaling-stroke`,
          }),
        })),
      (j = (e) =>
        (e <= 1080 ? ` is-lg` : ``) + (e <= 960 ? ` is-md` : ``) + (e <= 600 ? ` is-sm` : ``)),
      (M = {
        careers01: `https://framerusercontent.com/images/5G0uBdV5IYbdi5q5GOofWkHOY5I.webp`,
        careers02: `https://framerusercontent.com/images/Cb6NShADj1J2m67GkRCSg0e4Zng.webp`,
        careers03: `https://framerusercontent.com/images/Ai4xxgbxXpFhagbw0qXlOd9IVfw.webp`,
        company01: `https://framerusercontent.com/images/gV2ICTMu40dkfCzbOB51RBFhs.webp`,
        company02: `https://framerusercontent.com/images/qOMdurKui3c6Hf3LTGpzcDug04.webp`,
        ravi: `https://framerusercontent.com/images/asl8VXZN2Xgv4kpKCSVTCwvEJY.webp`,
        lena: `https://framerusercontent.com/images/wCyXikqhpn8ZRnb1XcFh1VdAT5Y.webp`,
        tourColdAisle: `https://framerusercontent.com/images/eUh8hcsVOP06ARQmOBLBYKaAvZM.webp`,
        amaraVisit: `https://framerusercontent.com/images/3sTcStexzcipmObizZH0T6vQCY.webp`,
        hero: `https://framerusercontent.com/images/qc4Gm0XcIGUYTWSf79wKTFDwteo.webp`,
        narvikCampus: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp`,
        tensorfieldHall: `https://framerusercontent.com/images/il3fLZBrudDNyrgDlH5W6cSHeU.webp`,
        helixFiber: `https://framerusercontent.com/images/7WhklDT8jSCqVZ9KL0STcG1Mz8.webp`,
        orbitSatellite: `https://framerusercontent.com/images/ohqShmvv7oQh4Vwg3i2E5ordBSI.webp`,
        amara: `https://framerusercontent.com/images/nbdf1Q4Uu5xvGHq7u4j9BlVgo0.webp`,
        jonas: `https://framerusercontent.com/images/rQfbpW4RDKL3jiQbq4SXcntjo.webp`,
        erik: `https://framerusercontent.com/images/9dRa9GNOn2pkAv37fo7HxxMJnU.webp`,
        jonasSeated: `https://framerusercontent.com/images/jWZrIfneZrvhOfzL5rq988LgQcc.webp`,
        inlineHotAisle: `https://framerusercontent.com/images/h6lUKTs2ohc7OzXVE6p6DVsV3k0.webp`,
        inlineTensorfieldPod: `https://framerusercontent.com/images/In9tXGFDU6Q1xmCAbPWxybPHPE.webp`,
        news01: `https://framerusercontent.com/images/dBxbVgGac5ZBak8KH3c2k7RJkQ.webp`,
        news02: `https://framerusercontent.com/images/eOB4mru7L2boahQXQbYt3gZo.webp`,
        news03: `https://framerusercontent.com/images/qym3o4qGCQ2l623Ug0hw3c87nI0.webp`,
        news04: `https://framerusercontent.com/images/ELIaui9uYOr1tvAGMUmRX8glM.webp`,
        news05: `https://framerusercontent.com/images/VV9uNBIzewmTxMjt8pQU9i0RsFI.webp`,
        news06: `https://framerusercontent.com/images/Wz3RTZnOZa8Ft7uATN2nybXi6NA.webp`,
        pAmara: `https://framerusercontent.com/images/UY1cCsBgTrtqpZYAPRYHG2Xjc.webp`,
        pErik: `https://framerusercontent.com/images/f015M29cdVIE2tsqhlti8akVI.webp`,
        pJonas: `https://framerusercontent.com/images/aAbogpIiBvIHRl8mnzywyXvkQ.webp`,
        pLena: `https://framerusercontent.com/images/PrWrN9Zjb1Jhf0pTASp4khvC0.webp`,
        pRavi: `https://framerusercontent.com/images/iQrNObuFz2kl9D8Jgxuc2egyw0.webp`,
        racks: `https://framerusercontent.com/images/OKyqU4J0NYDJFfdpVRATu3aTIw0.webp`,
        switch: `https://framerusercontent.com/images/EDVSFbCLyMm8CudWiRCptnAzKM.webp`,
        trays: `https://framerusercontent.com/images/CW17CQDWSjWXhwMpKKFkZJISWg.webp`,
        wafer: `https://framerusercontent.com/images/ai8BxgA5AFjxY0cCCO7miuXrA.webp`,
        airIntake: `https://framerusercontent.com/images/b4vAmKNl2K7fqv9jceI0ZO34dOo.webp`,
        waterFree: `https://framerusercontent.com/images/8QrAk0Bk5vAyxa5kdYP4iUMpJQ.webp`,
        heatRecovery: `https://framerusercontent.com/images/gUZqRtoU1MRNcqc7ErYHIkPzkU.webp`,
        tromsoHq: `https://framerusercontent.com/images/YPXPk06yaGZaSkFv5EhKmsmLhI.webp`,
        hallA: `https://framerusercontent.com/images/P2uUGpA5LM6bn66T9RJozYmKSws.webp`,
        kirunaBuild: `https://framerusercontent.com/images/6RmYaTMdo5pQg9UJkXIEtrtdS4.webp`,
        hallATrays: `https://framerusercontent.com/images/iZHJQlQnOniWxoJTKZ4kBT4ytfE.webp`,
        kernelHall: `https://framerusercontent.com/images/anLSKJrZMWmBwGsKvIgKmOo5Qis.webp`,
        photonStorage: `https://framerusercontent.com/images/ZjTJOeNJzRPKhpXTKGwbwo4G8U.webp`,
        vektorRobot: `https://framerusercontent.com/images/R355GgaFIczKVwEGEsEXo46lho.webp`,
        henrik: `https://framerusercontent.com/images/RqWcMaaY4hBh0TtehZpLK8u4nh0.webp`,
        arjun: `https://framerusercontent.com/images/jueXC4Dz7cRgYZLeWuwmjfMRtTA.webp`,
        maja: `https://framerusercontent.com/images/Cu1ZkDGxgm9adQxee4trqruCotY.webp`,
        airFans: `https://framerusercontent.com/images/0RYZ1lW6HTT5Q2QXQXehOKgwa8.webp`,
      }));
  }),
  P = e(() => {
    N();
  });
function F(e) {
  let { label: t, link: n, ghost: r, newTab: i, submit: a, visual: o, full: s } = e,
    u = `nl-pl` + (r ? ` ghost` : ``) + (s ? ` full` : ``),
    d = { ...e.style, width: s ? `100%` : void 0 },
    f = o
      ? l(`span`, { className: u, style: { width: s ? `100%` : void 0 }, children: t })
      : a
        ? l(`button`, {
            type: `submit`,
            className: u,
            style: { width: s ? `100%` : void 0 },
            children: t,
          })
        : l(`a`, {
            className: u,
            style: { width: s ? `100%` : void 0 },
            href: n || `#`,
            target: i ? `_blank` : void 0,
            rel: i ? `noopener` : void 0,
            children: t,
          });
  return c(`div`, {
    style: { ...d, display: s ? `flex` : `inline-flex` },
    children: [T(), l(`style`, { dangerouslySetInnerHTML: { __html: B } }), f],
  });
}
function I(e) {
  let {
      text: t,
      tone: n,
      toneNoWrap: r,
      toneLine: s,
      balance: u,
      tag: d,
      min: p,
      fluid: m,
      max: h,
      weight: g,
      lineHeight: _,
      tracking: b,
      align: x,
      reveal: C,
      delay: w,
      color: D,
      toneColor: O,
    } = e,
    k = o(null),
    A = y(),
    j = E(),
    [M, N] = a(``);
  (v(k),
    f(() => {
      if (C !== `scroll` || j || A) return;
      let e = k.current;
      if (!e) return;
      let t = e.getBoundingClientRect();
      if (t.bottom <= 0) return;
      let n = !1;
      if ((N(`is-pre`), t.top < i.innerHeight * 0.88))
        return (
          S(() => {
            n || N(`is-in`);
          }),
          () => {
            n = !0;
          }
        );
      let r = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (N(`is-in`), r.disconnect());
        },
        { rootMargin: `0px 0px -12% 0px` }
      );
      return (r.observe(e), () => r.disconnect());
    }, [C, j, A]));
  let P = 0,
    F = C === `scroll` ? 0.022 : 0.02,
    I = (e, t) =>
      e
        .split(/(\s+)/)
        .map((e, n) =>
          e
            ? /^\s+$/.test(e)
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
                          style: { animationDelay: (w + P++ * F).toFixed(3) + `s` },
                          children: e,
                        },
                        t
                      )
                    ),
                  },
                  t + n
                )
            : null
        ),
    L = !j && C !== `none`,
    R = L ? I(t || ``, `t`) : t,
    z = n ? (L ? I(n, `n`) : n) : null,
    B = d || `h2`,
    H = `clamp(${p}px, ${m}cqw, ${h}px)`,
    U = [`nl-hd`, C === `load` && L ? `is-load` : ``, M].join(` `),
    W = C === `scroll` ? { "--hb": `14px`, "--hy": `.15em`, "--hd": `1.2s` } : {};
  return c(`div`, {
    style: { ...e.style, width: `100%` },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: V } }),
      l(B, {
        ref: k,
        className: U,
        "aria-label": L ? (t + (n ? ` ` + n : ``)).trim() : void 0,
        style: {
          ...W,
          textWrap: u === !1 ? `wrap` : `balance`,
          fontSize: H,
          fontWeight: g,
          lineHeight: _,
          letterSpacing: b + `em`,
          textAlign: x,
          color: D,
          width: `100%`,
        },
        children: c(`span`, {
          "aria-hidden": L ? `true` : void 0,
          children: [
            R,
            n && !s ? ` ` : null,
            n
              ? l(`span`, {
                  className: `tn` + (s ? ` blk` : r ? ` nw` : ``),
                  style: { color: O },
                  children: z,
                })
              : null,
          ],
        }),
      }),
    ],
  });
}
function L(e) {
  let { number: t, kicker: n, title: r, sub: s, reveal: u } = e,
    d = o(null),
    p = y(),
    [m, h] = a(!1);
  return (
    f(() => {
      if (!u || E() || p) return;
      let e = d.current;
      if (!e || e.getBoundingClientRect().top < i.innerHeight * 0.92) return;
      h(!0);
      let t = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (h(!1), t.disconnect());
        },
        { rootMargin: `0px 0px -8% 0px` }
      );
      return (t.observe(e), () => t.disconnect());
    }, [u, p]),
    c(`div`, {
      ref: d,
      className: `nl-lb` + (m ? ` is-pre` : ``),
      style: e.style,
      children: [
        T(),
        l(`style`, { dangerouslySetInnerHTML: { __html: H } }),
        t ? l(`span`, { className: `n`, children: t }) : null,
        n ? l(`span`, { className: `k`, children: n }) : null,
        r ? l(`span`, { children: r }) : null,
        s ? l(`span`, { className: `s`, children: s }) : null,
      ],
    })
  );
}
function R(e) {
  let t = {
    position: `absolute`,
    top: -6,
    font: `300 11px/1 "Geist Mono",ui-monospace,monospace`,
    color: e.color,
    pointerEvents: `none`,
  };
  return c(`div`, {
    "aria-hidden": `true`,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      pointerEvents: `none`,
    },
    children: [
      T(),
      l(`span`, { style: { ...t, left: -3 }, children: `+` }),
      l(`span`, { style: { ...t, right: -3 }, children: `+` }),
    ],
  });
}
var z,
  B,
  V,
  H,
  U = e(() => {
    (n(),
      u(),
      d(),
      g(),
      P(),
      (z = (e) =>
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23${e}' stroke-width='1.1'/%3E%3C/svg%3E")`),
      (B = `
.nl-pl{--fg:#F3F3F3;--ease:cubic-bezier(.16,1,.3,1);position:relative;display:inline-flex;align-items:center;gap:10px;height:38px;padding:0 0 0 12px;border-radius:2px;border:0;cursor:pointer;white-space:nowrap;font:400 11px/1 "Geist Mono",ui-monospace,monospace;letter-spacing:.09em;text-transform:uppercase;text-decoration:none;color:#000;background:linear-gradient(#000,#000) 0 0/0% 100% no-repeat,var(--fg);box-shadow:inset 0 0 0 1px var(--fg);transition:background-size .6s var(--ease),color .4s var(--ease);-webkit-font-smoothing:antialiased;box-sizing:border-box}
.nl-pl::before{content:"";width:5px;height:5px;background:currentColor;flex:none}
.nl-pl::after{content:"";width:12px;box-sizing:content-box;align-self:stretch;margin-left:6px;padding:0 13px;border-left:1px solid currentColor;opacity:.75;background:${z(`000`)} center/12px 12px no-repeat;transition:padding .5s var(--ease)}
.nl-pl:hover,button:hover .nl-pl,a:hover .nl-pl{background-size:100% 100%,auto;color:var(--fg)}
.nl-pl:hover::after,button:hover .nl-pl::after,a:hover .nl-pl::after{padding:0 9px 0 15px;background-image:${z(`F3F3F3`)}}
.nl-pl.ghost{color:var(--fg);background:linear-gradient(var(--fg),var(--fg)) 0 0/0% 100% no-repeat,rgba(0,0,0,.2);box-shadow:inset 0 0 0 1px rgba(243,243,243,.3)}
.nl-pl.ghost::after{border-left-color:rgba(243,243,243,.3);background-image:${z(`F3F3F3`)};transition:padding .5s var(--ease),border-color .4s}
.nl-pl.ghost:hover,button:hover .nl-pl.ghost,a:hover .nl-pl.ghost{color:#000;background-size:100% 100%,auto;box-shadow:inset 0 0 0 1px var(--fg)}
.nl-pl.ghost:hover::after,button:hover .nl-pl.ghost::after,a:hover .nl-pl.ghost::after{border-left-color:rgba(0,0,0,.35);background-image:${z(`000`)}}
.nl-pl.full{width:100%;justify-content:flex-start}
.nl-pl.full::after{margin-left:auto}
.nl-pl:focus-visible{outline:1px solid var(--fg);outline-offset:4px}
`),
      (F.defaultProps = {
        label: `Plan capacity`,
        link: `/contact-01`,
        ghost: !1,
        newTab: !1,
        submit: !1,
        visual: !1,
        full: !1,
      }),
      m(F, {
        label: { type: h.String, title: `Label` },
        link: { type: h.Link, title: `Link`, hidden: (e) => e.submit || e.visual },
        ghost: { type: h.Boolean, title: `Ghost`, description: `Outlined version` },
        newTab: { type: h.Boolean, title: `New tab`, hidden: (e) => e.submit || e.visual },
        submit: { type: h.Boolean, title: `Form submit` },
        visual: {
          type: h.Boolean,
          title: `Visual only`,
          description: `Inside a Form Submit component`,
          hidden: (e) => !e.submit,
        },
        full: { type: h.Boolean, title: `Full width` },
      }),
      (V = `
.nl-hd{margin:0;font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;text-wrap:balance;-webkit-font-smoothing:antialiased}
.nl-hd .tn{color:#A6A6A6}
.nl-hd .nw{white-space:nowrap}
.nl-hd .tn.blk{display:block}
.nl-hd .wd{display:inline-block;white-space:nowrap}
.nl-hd .ch{display:inline-block}
@keyframes nl-hd-in{from{opacity:0;filter:blur(var(--hb,16px));transform:translateY(var(--hy,.18em))}to{opacity:1;filter:blur(0);transform:none}}
.nl-hd.is-load .ch,.nl-hd.is-in .ch{animation:nl-hd-in var(--hd,1.3s) cubic-bezier(.215,.61,.355,1) both}
.nl-hd.is-pre .ch{opacity:0}
@media (prefers-reduced-motion:reduce){.nl-hd .ch{animation:none!important;opacity:1!important}}
`),
      (I.defaultProps = {
        text: `Compute, cooled by the`,
        tone: `Arctic.`,
        toneNoWrap: !0,
        toneLine: !1,
        balance: !0,
        tag: `h2`,
        min: 30,
        fluid: 3.4,
        max: 58,
        weight: 400,
        lineHeight: 1,
        tracking: -0.04,
        align: `left`,
        reveal: `scroll`,
        delay: 0,
        color: `#F3F3F3`,
        toneColor: `#A6A6A6`,
      }),
      m(I, {
        text: { type: h.String, title: `Text`, displayTextArea: !0 },
        tone: { type: h.String, title: `Tone`, description: `Grey ending` },
        toneNoWrap: { type: h.Boolean, title: `Keep tone together`, hidden: (e) => e.toneLine },
        toneLine: { type: h.Boolean, title: `Grey on new line` },
        balance: {
          type: h.Boolean,
          title: `Balance`,
          description: `Even line lengths (text-wrap: balance)`,
        },
        tag: {
          type: h.Enum,
          title: `Tag`,
          options: [`h1`, `h2`, `h3`, `p`],
          optionTitles: [`H1`, `H2`, `H3`, `P`],
        },
        min: { type: h.Number, title: `Min`, min: 10, max: 200, unit: `px` },
        fluid: {
          type: h.Number,
          title: `Fluid`,
          min: 0.5,
          max: 20,
          step: 0.1,
          unit: `%`,
          description: `Size as % of page width`,
        },
        max: { type: h.Number, title: `Max`, min: 10, max: 300, unit: `px` },
        weight: { type: h.Number, title: `Weight`, min: 300, max: 500, step: 100 },
        lineHeight: { type: h.Number, title: `Line height`, min: 0.7, max: 1.6, step: 0.01 },
        tracking: {
          type: h.Number,
          title: `Tracking`,
          min: -0.1,
          max: 0.1,
          step: 0.001,
          unit: `em`,
        },
        align: {
          type: h.Enum,
          title: `Align`,
          options: [`left`, `center`, `right`],
          displaySegmentedControl: !0,
        },
        reveal: {
          type: h.Enum,
          title: `Blur-in`,
          options: [`load`, `scroll`, `none`],
          optionTitles: [`Load`, `Scroll`, `None`],
          displaySegmentedControl: !0,
        },
        delay: { type: h.Number, title: `Delay`, min: 0, max: 3, step: 0.05, unit: `s` },
        color: { type: h.Color, title: `Color` },
        toneColor: { type: h.Color, title: `Tone color` },
      }),
      (H = `
.nl-lb{display:flex;flex-direction:column;gap:2px;font:500 16px/1.45 "Inter Tight",ui-sans-serif,system-ui,sans-serif;letter-spacing:-.005em;color:#F3F3F3;-webkit-font-smoothing:antialiased;transition:opacity 1.1s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1)}
.nl-lb .n{align-self:flex-start;font:400 9px/1 "Geist Mono",ui-monospace,monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat}
.nl-lb .s{color:#A6A6A6}
.nl-lb .k{font:400 10px/1.45 "Geist Mono",ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#A6A6A6;margin-bottom:10px}
.nl-lb.is-pre{opacity:0;transform:translateY(20px)}
`),
      (L.defaultProps = {
        number: `01`,
        kicker: ``,
        title: `Customers`,
        sub: `Who trains in the North`,
        reveal: !0,
      }),
      m(L, {
        number: { type: h.String, title: `Number` },
        kicker: { type: h.String, title: `Kicker`, description: `Small mono line above the title` },
        title: { type: h.String, title: `Title` },
        sub: { type: h.String, title: `Subtitle` },
        reveal: {
          type: h.Boolean,
          title: `Reveal`,
          description: `Fades up when it enters the view`,
        },
      }),
      (R.defaultProps = { color: `#A6A6A6` }),
      m(R, { color: { type: h.Color, title: `Color` } }));
  });
function W(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t),
    i = e - n,
    a = t - r,
    o = i * i * (3 - 2 * i),
    s = a * a * (3 - 2 * a),
    c = Y(n, r),
    l = Y(n + 1, r),
    u = Y(n, r + 1),
    d = Y(n + 1, r + 1);
  return c + (l - c) * o + (u + (d - u) * o - (c + (l - c) * o)) * s;
}
function G(e, t) {
  let n = 0,
    r = 0.5;
  for (let i = 0; i < 4; i++)
    ((n += r * W(e, t)), (e = e * 2.02 + 3.1), (t = t * 2.02 + 7.7), (r *= 0.5));
  return n;
}
function K(e, t, n) {
  let r = G(e * 1.1, t * 1.1 + n),
    i = G(e * 1.1 + 5.2, t * 1.1 - n * 0.8),
    a = G(e * 1.4 + 2.4 * r + 1.7 + n * 0.5, t * 1.4 + 2.4 * i + 9.2 + n * 0.5),
    o = G(e * 1.4 + 2.4 * r + 8.3 - n * 0.4, t * 1.4 + 2.4 * i + 2.8 - n * 0.4);
  return G(e * 1.1 + 2.8 * a, t * 1.1 + 2.8 * o);
}
function q(e, t) {
  e = Math.min(1, Math.max(0, e));
  let n = (e, n, r) => e[t] + (n[t] - e[t]) * r;
  return e < 0.3
    ? n(X[0], X[1], e / 0.3)
    : e < 0.62
      ? n(X[1], X[2], (e - 0.3) / 0.32)
      : e < 0.88
        ? n(X[2], X[3], (e - 0.62) / 0.26)
        : n(X[3], X[4], (e - 0.88) / 0.12);
}
function ee(e, t, n) {
  let r = e.width,
    i = e.height,
    a = e.getContext(`2d`);
  if (!a || r < 2 || i < 2) return;
  let o = a.createImageData(r, i),
    s = r / i,
    c = (t.seed || 0) * 0.05,
    l = r / Math.max(1, n),
    u = Math.max(1, (t.rib || 10) * l),
    d = t.spread || 1,
    f = t.gain || 1,
    p = t.vignette ?? 1,
    m = t.floor || 0,
    h = t.lightX * s + Math.sin(c * 1.9) * 0.07,
    g = t.lightY + Math.cos(c * 1.4) * 0.04,
    _ = (e, t) => {
      let n = (e - h) * (0.6 / d),
        r = (t - g) * (1.2 / d);
      return Math.exp(-(n * n + r * r) * 3);
    };
  for (let e = 0; e < i; e++) {
    let t = i - e - 0.5,
      n = t / u,
      a = ie(n),
      l = Math.floor(n),
      d = a - 0.5,
      h = 0.55 + 0.45 * Math.sin(a * Math.PI),
      g = Math.min(1, Math.max(0, 1 - Math.abs(a - 0.14) * 6)) ** 2 * 0.85,
      v = Z(0, 0.05, a) * Z(1, 0.95, a),
      y = (h + g) * v * f,
      b = (Y(l, 3) - 0.5) * 0.01;
    for (let n = 0; n < r; n++) {
      let l = (n + 0.5) / r,
        u = t / i,
        f = l * s + d * 0.025 + b,
        h = u + d * -0.07,
        g = K(f * 1.15, h * 1.15, c),
        v = Z(0.28, 0.82, g),
        x = 0.018,
        S = q(v * _(f, h - d * x) * y, 0),
        C = q(v * _(f, h) * y, 1),
        w = q(v * _(f, h + d * x) * y, 2),
        T = l - 0.5,
        E = (u - 0.5) * 1.3,
        D = 1 + (Z(1.3, 0.2, Math.sqrt(T * T + E * E)) - 1) * p,
        O = m * (0.55 + 0.45 * Math.sin(a * Math.PI)),
        k = (e * r + n) * 4;
      ((o.data[k] = Math.max(0, Math.min(255, (S * D + O * 0.2) * 255))),
        (o.data[k + 1] = Math.max(0, Math.min(255, (C * D + O * 0.18) * 255))),
        (o.data[k + 2] = Math.max(0, Math.min(255, (w * D + O * 0.28) * 255))),
        (o.data[k + 3] = 255));
    }
  }
  a.putImageData(o, 0, 0);
}
function J(e) {
  let {
      mode: n,
      word: r,
      lightX: a,
      lightY: s,
      gain: u,
      rib: d,
      spread: p,
      vignette: m,
      floor: h,
      seed: g,
      sweep: _,
      cursor: b,
      overlay: x,
    } = e,
    S = o(null),
    C = o(null),
    w = o(null),
    O = y(),
    k = o(e);
  ((k.current = e),
    v(S),
    f(() => {
      let e = C.current;
      if (!e) return;
      if (E()) {
        let t = 0,
          n = () => {
            let t = S.current,
              n = e.clientWidth || t?.offsetWidth || 0,
              r = e.clientHeight || t?.offsetHeight || 0;
            if (n < 2 || r < 2) return;
            let i = Math.min(1, 400 / n);
            ((e.width = Math.max(2, Math.round(n * i))),
              (e.height = Math.max(2, Math.round(r * i))),
              ee(e, k.current, n));
          },
          r = new ResizeObserver(() => {
            (i.clearTimeout(t), (t = i.setTimeout(n, 120)));
          });
        return (
          r.observe(e),
          n(),
          () => {
            (r.disconnect(), i.clearTimeout(t));
          }
        );
      }
      let t = e.getContext(`webgl`, { antialias: !1, premultipliedAlpha: !1, alpha: !1 });
      if (!t) return;
      let n = (e, n) => {
          let r = t.createShader(e);
          return (t.shaderSource(r, n), t.compileShader(r), r);
        },
        r = t.createProgram();
      if (
        (t.attachShader(r, n(t.VERTEX_SHADER, re)),
        t.attachShader(r, n(t.FRAGMENT_SHADER, te)),
        t.linkProgram(r),
        !t.getProgramParameter(r, t.LINK_STATUS))
      )
        return;
      t.useProgram(r);
      let a = t.createBuffer();
      (t.bindBuffer(t.ARRAY_BUFFER, a),
        t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW));
      let o = t.getAttribLocation(r, `a`);
      (t.enableVertexAttribArray(o), t.vertexAttribPointer(o, 2, t.FLOAT, !1, 0, 0));
      let s = (e) => t.getUniformLocation(r, e),
        c = {
          res: s(`uRes`),
          time: s(`uTime`),
          mouse: s(`uMouse`),
          hover: s(`uHover`),
          light: s(`uLight`),
          gain: s(`uGain`),
          rib: s(`uRib`),
          spread: s(`uSpread`),
          vig: s(`uVig`),
          floor: s(`uFloor`),
        },
        l = O || E(),
        u = 1,
        d = k.current.lightX,
        f = k.current.lightY,
        p = d,
        m = f,
        h = 0,
        g = 0,
        _ = !1,
        v = 0,
        y = 0,
        b = k.current.seed || 0,
        x = () => {
          let n = e.getBoundingClientRect();
          u = Math.min(1.5, i.devicePixelRatio || 1);
          let r = e.clientWidth || n.width,
            a = e.clientHeight || n.height;
          ((e.width = Math.max(1, (r * u) | 0)),
            (e.height = Math.max(1, (a * u) | 0)),
            t.viewport(0, 0, e.width, e.height));
        },
        w = (n) => {
          let r = k.current,
            i = y ? Math.min(0.05, (n - y) / 1e3) : 0;
          ((y = n),
            (b += i),
            (d += (p - d) * 0.06),
            (f += (m - f) * 0.06),
            (h += (g - h) * 0.05),
            t.uniform2f(c.res, e.width, e.height),
            t.uniform1f(c.time, b),
            t.uniform2f(c.mouse, d, f),
            t.uniform1f(c.hover, h),
            t.uniform2f(c.light, r.sweep ? 0.5 + 0.44 * Math.sin(b * r.sweep) : r.lightX, r.lightY),
            t.uniform1f(c.gain, r.gain || 1),
            t.uniform1f(c.rib, (r.rib || 10) * u),
            t.uniform1f(c.spread, r.spread || 1),
            t.uniform1f(c.vig, r.vignette ?? 1),
            t.uniform1f(c.floor, r.floor || 0),
            t.drawArrays(t.TRIANGLES, 0, 3),
            _ && !l && (v = requestAnimationFrame(w)));
        };
      x();
      let T = new ResizeObserver(() => {
        (x(), (!_ || l) && w(performance.now()));
      });
      T.observe(e);
      let A = S.current.parentElement || S.current,
        j = (t) => {
          let n = e.getBoundingClientRect();
          ((p = (t.clientX - n.left) / n.width), (m = 1 - (t.clientY - n.top) / n.height), (g = 1));
        },
        M = () => {
          g = 0;
        },
        N = k.current.cursor && D() && !l;
      N && (A.addEventListener(`pointermove`, j), A.addEventListener(`pointerleave`, M));
      let P = new IntersectionObserver(([e]) => {
        ((_ = e.isIntersecting),
          _ && ((y = 0), cancelAnimationFrame(v), (v = requestAnimationFrame(w))));
      });
      return (
        P.observe(e),
        w(performance.now()),
        () => {
          ((_ = !1),
            cancelAnimationFrame(v),
            T.disconnect(),
            P.disconnect(),
            N &&
              (A.removeEventListener(`pointermove`, j), A.removeEventListener(`pointerleave`, M)));
        }
      );
    }, [O, E() ? [a, s, u, d, p, m, h, g, _].join() : ``]),
    t(() => {
      if (n !== `wordmark`) return;
      let e = w.current;
      if (!e) return;
      let t = e.firstElementChild,
        r = () => {
          let n = document.createElement(`canvas`).getContext(`2d`);
          ((n.font = `500 100px "Inter Tight"`),
            `letterSpacing` in n && (n.letterSpacing = `-6px`));
          let r = n.measureText(t.textContent || ``),
            i = r.actualBoundingBoxLeft + r.actualBoundingBoxRight;
          if (!i) return;
          let a = (100 * e.clientWidth) / i;
          ((e.style.fontSize = a + `px`),
            (t.style.marginLeft = (r.actualBoundingBoxLeft * a) / 100 + `px`));
        };
      r();
      let i = new ResizeObserver(r);
      return (i.observe(e), document.fonts?.ready?.then(r), () => i.disconnect());
    }, [n, r]));
  let A = l(`canvas`, {
    ref: C,
    "aria-hidden": `true`,
    style: {
      position: `absolute`,
      inset: 0,
      width: `100%`,
      height: `100%`,
      display: `block`,
      background: `radial-gradient(45% 45% at 68% 38%,rgba(110,75,255,.35),transparent 70%),#000`,
    },
  });
  return n === `wordmark`
    ? c(`div`, {
        ref: S,
        "aria-hidden": `true`,
        style: {
          ...e.style,
          position: `relative`,
          isolation: `isolate`,
          overflow: `hidden`,
          width: `100%`,
        },
        children: [
          T(),
          A,
          l(`div`, {
            ref: w,
            style: {
              position: `relative`,
              zIndex: 1,
              background: `#000`,
              color: `#fff`,
              mixBlendMode: `multiply`,
              display: `block`,
              fontFamily: `"Inter Tight", sans-serif`,
              fontSize: `20cqw`,
              fontWeight: 500,
              letterSpacing: `-.06em`,
              lineHeight: 1.22,
              whiteSpace: `nowrap`,
              userSelect: `none`,
              overflow: `hidden`,
              boxShadow: `0 0 0 3px #000`,
            },
            children: l(`span`, {
              style: {
                display: `block`,
                width: `max-content`,
                marginTop: `-.16em`,
                marginBottom: `.02em`,
              },
              children: r,
            }),
          }),
        ],
      })
    : c(`div`, {
        ref: S,
        "aria-hidden": `true`,
        style: {
          ...e.style,
          position: `relative`,
          overflow: `hidden`,
          width: `100%`,
          height: `100%`,
          background: `#000`,
        },
        children: [
          A,
          x &&
            x !== `none` &&
            l(`div`, {
              "aria-hidden": `true`,
              style: { position: `absolute`, inset: 0, pointerEvents: `none`, background: ne[x] },
            }),
        ],
      });
}
var te,
  ne,
  re,
  ie,
  Y,
  X,
  Z,
  ae = e(() => {
    (n(),
      u(),
      d(),
      g(),
      P(),
      (te = `
precision highp float;
uniform vec2 uRes; uniform float uTime; uniform vec2 uMouse; uniform float uHover;
uniform vec2 uLight; uniform float uGain; uniform float uRib; uniform float uSpread; uniform float uVig; uniform float uFloor;
float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.02+vec2(3.1,7.7); a*=.5; } return v; }
float silk(vec2 p, float t){
  vec2 q = vec2(fbm(p*1.1+vec2(0.,t)), fbm(p*1.1+vec2(5.2,-t*.8)));
  vec2 r = vec2(fbm(p*1.4+2.4*q+vec2(1.7,9.2)+t*.5), fbm(p*1.4+2.4*q+vec2(8.3,2.8)-t*.4));
  return fbm(p*1.1+2.8*r);
}
vec3 ramp(float x){
  x = clamp(x,0.,1.);
  vec3 c0=vec3(.0,.0,.0), c1=vec3(.10,.06,.22), c2=vec3(.43,.29,1.), c3=vec3(.80,.74,1.), c4=vec3(1.,.98,1.);
  if(x<.3) return mix(c0,c1,x/.3);
  if(x<.62) return mix(c1,c2,(x-.3)/.32);
  if(x<.88) return mix(c2,c3,(x-.62)/.26);
  return mix(c3,c4,(x-.88)/.12);
}
float lightMask(vec2 p, vec2 L){ vec2 d=(p-L)*vec2(.6/uSpread,1.2/uSpread); return exp(-dot(d,d)*3.); }
void main(){
  vec2 uv = gl_FragCoord.xy/uRes; float ar = uRes.x/uRes.y;
  float t = uTime*.05;
  vec2 m = vec2(uMouse.x*ar, uMouse.y);
  vec2 p0 = vec2(uv.x*ar, uv.y);
  float md = length(p0-m);
  float ry = gl_FragCoord.y/uRib; float r = fract(ry); float id = floor(ry);
  float bend = (r-.5)*(1.+1.6*uHover*exp(-md*md*7.));
  vec2 p = p0 + vec2(bend*.025+(hash(vec2(id,3.))-.5)*.01, bend*-.07);
  vec2 L = vec2(uLight.x*ar, uLight.y) + vec2(sin(t*1.9)*.07, cos(t*1.4)*.04);
  L = mix(L, m, .4*uHover);
  float f = silk(p*1.15, t);
  float fold = smoothstep(.28,.82,f);
  float disp = .018;
  float mr = lightMask(p+vec2(0.,bend*disp*-1.), L);
  float mg = lightMask(p, L);
  float mb = lightMask(p+vec2(0.,bend*disp), L);
  float body = .55+.45*sin(r*3.14159);
  float lip  = pow(clamp(1.-abs(r-.14)*6.,0.,1.),2.)*.85;
  float seam = smoothstep(0.,.05,r)*smoothstep(1.,.95,r);
  float k = (body+lip)*seam*uGain;
  vec3 col = vec3(ramp(fold*mr*k).r, ramp(fold*mg*k).g, ramp(fold*mb*k).b);
  col *= mix(1., smoothstep(1.3,.2,length((uv-.5)*vec2(1.,1.3))), uVig);
  col += uFloor*vec3(.20,.18,.28)*(.55+.45*sin(r*3.14159));
  col += (hash(gl_FragCoord.xy+fract(uTime*7.))-.5)*.035;
  gl_FragColor = vec4(max(col,0.),1.);
}`),
      (ne = {
        hero: `linear-gradient(180deg,rgba(0,0,0,.55),transparent 22%,transparent 55%,rgba(0,0,0,.75))`,
        cta: `linear-gradient(180deg,#000 0%,transparent 30%,transparent 60%,rgba(0,0,0,.7))`,
      }),
      (re = `attribute vec2 a; void main(){ gl_Position=vec4(a,0.,1.); }`),
      (ie = (e) => e - Math.floor(e)),
      (Y = (e, t) => ie(Math.sin(e * 127.1 + t * 311.7) * 43758.5453)),
      (X = [
        [0, 0, 0],
        [0.1, 0.06, 0.22],
        [0.43, 0.29, 1],
        [0.8, 0.74, 1],
        [1, 0.98, 1],
      ]),
      (Z = (e, t, n) => {
        let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
        return r * r * (3 - 2 * r);
      }),
      (J.defaultProps = {
        mode: `fill`,
        word: `Nordlys`,
        lightX: 0.62,
        lightY: 0.55,
        gain: 2.4,
        rib: 10,
        spread: 1.1,
        vignette: 1,
        floor: 0,
        seed: 12,
        sweep: 0,
        cursor: !0,
        overlay: `none`,
      }),
      m(J, {
        mode: {
          type: h.Enum,
          title: `Mode`,
          options: [`fill`, `wordmark`],
          optionTitles: [`Fill`, `Wordmark`],
          displaySegmentedControl: !0,
        },
        word: { type: h.String, title: `Word`, hidden: (e) => e.mode !== `wordmark` },
        lightX: {
          type: h.Number,
          title: `Light X`,
          min: 0,
          max: 1,
          step: 0.01,
          description: `Hot spot, 0 = left, 1 = right`,
        },
        lightY: {
          type: h.Number,
          title: `Light Y`,
          min: 0,
          max: 1,
          step: 0.01,
          description: `Hot spot, 0 = bottom, 1 = top`,
        },
        gain: {
          type: h.Number,
          title: `Gain`,
          min: 0.5,
          max: 4,
          step: 0.05,
          description: `Brightness, 1.5–3 looks best`,
        },
        rib: {
          type: h.Number,
          title: `Rib`,
          min: 4,
          max: 40,
          step: 1,
          unit: `px`,
          description: `Height of each glass flute`,
        },
        spread: { type: h.Number, title: `Spread`, min: 0.4, max: 3, step: 0.05 },
        vignette: { type: h.Number, title: `Vignette`, min: 0, max: 1, step: 0.05 },
        floor: {
          type: h.Number,
          title: `Floor`,
          min: 0,
          max: 0.6,
          step: 0.01,
          description: `Faint ribs outside the light`,
        },
        seed: {
          type: h.Number,
          title: `Seed`,
          min: 0,
          max: 99,
          step: 1,
          description: `Different fold pattern`,
        },
        sweep: {
          type: h.Number,
          title: `Sweep`,
          min: 0,
          max: 1,
          step: 0.05,
          description: `Light drifts left–right (0 = off)`,
        },
        cursor: {
          type: h.Boolean,
          title: `Cursor`,
          description: `Ribs bend and the light follows the pointer`,
        },
        overlay: {
          type: h.Enum,
          title: `Overlay`,
          options: [`none`, `hero`, `cta`],
          optionTitles: [`None`, `Hero fade`, `CTA fade`],
          description: `Dark fade on top so text stays readable`,
        },
      }));
  }),
  oe = e(() => {
    (ae(), ae());
  });
function se(e) {
  let {
      mailLabel: n,
      email: r,
      hint: u,
      col1Title: d,
      col1: p,
      col2Title: m,
      col2: h,
      stations: g,
      wordmark: _,
      word: v,
      lightX: y,
      lightY: b,
      gain: x,
      copyright: S,
      status: C,
      credit: w,
      creditLink: D,
      createdLabel: O,
      author: k,
      authorLink: j,
      avatar: M,
      toTop: N,
      bare: P,
    } = e,
    F = o(null),
    [I, L] = a(1280),
    [R, z] = a(`—`);
  (t(() => {
    let e = F.current;
    if (!e) return;
    let t = new ResizeObserver(() => L(e.offsetWidth));
    return (t.observe(e), L(e.offsetWidth), () => t.disconnect());
  }, []),
    f(() => {
      let e = () => z(_e());
      if ((e(), E())) return;
      let t = i.setInterval(e, 1e3);
      return () => i.clearInterval(t);
    }, []));
  let B = I + 16,
    V = (e, t, n) => Math.max(e, Math.min(n, t)),
    H = {
      "--gut": V(16, B * 0.022, 32) + `px`,
      "--ftp": V(56, B * 0.06, 96) + `px`,
      "--mfs": V(22, B * 0.025, 40) + `px`,
      "--wmt": V(32, B * 0.04, 64) + `px`,
    },
    U = [`nl-ft`, I <= 960 ? `is-md` : ``, I <= 600 ? `is-sm` : ``, P ? `is-bare` : ``].join(` `),
    W = Array.from(r || ``);
  return c(`footer`, {
    ref: F,
    className: U,
    style: { ...e.style, ...H },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: ge } }),
      !P &&
        c(s, {
          children: [
            c(`div`, {
              className: `f-top`,
              children: [
                c(`div`, {
                  className: `f-mail`,
                  children: [
                    l(`span`, { className: `mono`, children: n }),
                    c(`a`, {
                      className: `mail`,
                      href: `mailto:` + r,
                      "aria-label": `Email ` + r,
                      children: [
                        l(`span`, {
                          className: `txt`,
                          "aria-hidden": `true`,
                          children: W.map((e, t) =>
                            c(
                              `span`,
                              {
                                className: `ch`,
                                children: [
                                  l(`i`, {
                                    style: { transitionDelay: t * 14 + `ms` },
                                    children: e,
                                  }),
                                  l(`i`, {
                                    style: { transitionDelay: t * 14 + `ms` },
                                    children: e,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                        c(`span`, {
                          className: `ar`,
                          "aria-hidden": `true`,
                          children: [A(`ne`), A(`ne`)],
                        }),
                      ],
                    }),
                    l(`span`, { className: `hint mono`, children: u }),
                  ],
                }),
                c(`div`, {
                  className: `f-cols`,
                  children: [
                    c(`div`, {
                      className: `fcol`,
                      children: [
                        l(`span`, { className: `mono`, children: d }),
                        (p || []).map((e, t) => l(`a`, { href: ue(e, ce), children: e.label }, t)),
                      ],
                    }),
                    c(`div`, {
                      className: `fcol`,
                      children: [
                        l(`span`, { className: `mono`, children: m }),
                        (h || []).map((e, t) => l(`a`, { href: ue(e, le), children: e.label }, t)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l(`div`, {
              className: `stations`,
              children: (g || []).map((e, t) =>
                c(
                  `div`,
                  {
                    className: `stn`,
                    children: [
                      l(`span`, { className: `mono`, children: e.label }),
                      l(`b`, { children: (e.value || ``).replace(`{clock}`, R) }),
                    ],
                  },
                  t
                )
              ),
            }),
            _ &&
              l(`div`, {
                className: `wm`,
                children: l(J, {
                  mode: `wordmark`,
                  word: v,
                  lightX: y,
                  lightY: b,
                  gain: x,
                  rib: 10,
                  spread: 1.05,
                  seed: 3,
                  vignette: 0.3,
                  floor: 0.12,
                  sweep: 0.3,
                  cursor: !0,
                }),
              }),
          ],
        }),
      c(`div`, {
        className: `fbot mono`,
        children: [
          c(`span`, { className: `fb-l`, children: [l(me, {}), S] }),
          c(`span`, { className: `build`, children: [l(`i`, {}), C] }),
          w &&
            c(`a`, {
              className: `credit`,
              href: D || de,
              target: `_blank`,
              rel: `noopener`,
              children: [l(he, {}), w],
            }),
          k &&
            c(`a`, {
              className: `by`,
              href: j || fe,
              target: `_blank`,
              rel: `noopener`,
              children: [O, M && l(`img`, { src: M, alt: `` }), l(`b`, { children: k })],
            }),
          c(`button`, {
            type: `button`,
            onClick: () => i.scrollTo({ top: 0, behavior: `smooth` }),
            children: [N, ` `, A(`up`, 9)],
          }),
        ],
      }),
    ],
  });
}
var ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye = e(() => {
    (n(),
      u(),
      d(),
      g(),
      P(),
      oe(),
      (ce = [
        { label: `Home`, link: `/home-01` },
        { label: `Company`, link: `/company` },
        { label: `Pricing`, link: `/pricing-01` },
        { label: `Case studies`, link: `/case-studies` },
        { label: `News`, link: `/news` },
        { label: `Careers`, link: `/careers` },
        { label: `Contact`, link: `/contact-01` },
      ]),
      (le = [
        { label: `Design system`, link: `/design-system` },
        { label: `All pages`, link: `/` },
        { label: `404`, link: `/404` },
      ]),
      (ue = (e, t) => e.link || t.find((t) => t.label === e.label)?.link || `#`),
      (de = `https://www.framer.com/@flowmance/`),
      (fe = `https://flowmance.com`),
      (pe = `../../assets/images/2153vn59-115426.jpg`),
      (me = () =>
        c(`svg`, {
          viewBox: `0 0 20 20`,
          width: 12,
          height: 12,
          "aria-hidden": `true`,
          fill: `currentColor`,
          style: { flex: `none`, color: `#F3F3F3` },
          children: [
            l(`rect`, { x: `2`, y: `2`, width: `3.6`, height: `16` }),
            l(`polygon`, { points: `6.7,2 10,2 13.3,18 10,18` }),
            l(`rect`, { x: `14.4`, y: `2`, width: `3.6`, height: `16` }),
          ],
        })),
      (he = () =>
        l(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": `true`,
          fill: `currentColor`,
          children: l(`path`, { d: `M4 0h16v8h-8L4 0zM4 8h8l8 8H4V8zM4 16h8v8l-8-8z` }),
        })),
      (ge = `
.nl-ft{--fg:#F3F3F3;--mute:#A6A6A6;--dim:#5E5E5E;--line:rgba(243,243,243,.12);--ease:cubic-bezier(.16,1,.3,1);position:relative;width:100%;padding:0 var(--gut,28px);font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:var(--fg);-webkit-font-smoothing:antialiased;background:#000}
.nl-ft *{box-sizing:border-box}
.nl-ft a{color:inherit;text-decoration:none}
.nl-ft .mono{font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45}
.nl-ft .f-top{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;padding-block:var(--ftp,77px)}
.nl-ft .f-mail{grid-column:1 / span 7;display:flex;flex-direction:column;gap:18px;min-width:0}
.nl-ft .f-mail>.mono:first-child{color:var(--mute)}
.nl-ft .mail{position:relative;display:inline-flex;align-items:center;gap:.35em;align-self:flex-start;max-width:100%;padding-bottom:10px;font-size:var(--mfs,32px);font-weight:500;letter-spacing:-.035em;line-height:1;color:var(--fg)}
.nl-ft .mail .txt{display:inline-flex;flex-wrap:wrap;min-width:0}
.nl-ft .mail .ch{position:relative;display:inline-block;overflow:hidden;height:1.12em;line-height:1.12}
.nl-ft .mail .ch i{display:block;font-style:normal;transition:transform .7s var(--ease)}
.nl-ft .mail .ch i+i{position:absolute;left:0;top:100%;color:#C9BDFF}
.nl-ft .mail:hover .ch i,.nl-ft .mail:focus-visible .ch i{transform:translateY(-100%)}
.nl-ft .mail::before,.nl-ft .mail::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px}
.nl-ft .mail::before{background:var(--dim)}
.nl-ft .mail::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform:scaleX(0);transform-origin:100% 50%;transition:transform .8s var(--ease)}
.nl-ft .mail:hover::after,.nl-ft .mail:focus-visible::after{transform:scaleX(1);transform-origin:0 50%}
.nl-ft .mail .ar{position:relative;display:grid;place-items:center;width:.9em;height:.9em;overflow:hidden;flex:none}
.nl-ft .mail .ar svg{width:.62em;height:.62em;transition:transform .7s var(--ease)}
.nl-ft .mail .ar svg+svg{position:absolute;transform:translate(-120%,120%);color:#C9BDFF}
.nl-ft .mail:hover .ar svg:first-child{transform:translate(120%,-120%)}
.nl-ft .mail:hover .ar svg+svg{transform:none}
.nl-ft .hint{color:var(--dim)}
.nl-ft .f-cols{grid-column:9 / span 4;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.nl-ft .fcol{display:flex;flex-direction:column;gap:8px;font-size:14px;font-weight:500;letter-spacing:.011em;line-height:1.45}
.nl-ft .fcol .mono{color:var(--dim);margin-bottom:8px}
.nl-ft .fcol a{color:var(--mute);transition:color .3s}
.nl-ft .fcol a:hover{color:var(--fg)}
.nl-ft .stations{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums}
.nl-ft .stations::before,.nl-ft .stations::after{content:"+";position:absolute;top:-6px;font:300 11px/1 "Geist Mono",monospace;color:var(--mute);pointer-events:none}
.nl-ft .stations::before{left:-3px}.nl-ft .stations::after{right:-3px}
.nl-ft .stn{padding:14px 16px 16px 0;display:flex;justify-content:space-between;align-items:baseline;gap:12px;min-width:0}
.nl-ft .stn+.stn{padding-left:16px;border-left:1px solid var(--line)}
.nl-ft .stn .mono{color:var(--mute)}
.nl-ft .stn b{font-weight:500;font-size:14px;letter-spacing:.011em;white-space:nowrap}
.nl-ft .wm{position:relative;margin-top:var(--wmt,51px)}
.nl-ft .fbot{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;padding-block:18px 96px;border-top:1px solid var(--line);color:var(--dim)}
.nl-ft .fb-l{display:flex;align-items:center;gap:10px}
.nl-ft .build i{display:inline-block;width:5px;height:5px;border-radius:50%;background:#7FD4A8;margin-right:8px;vertical-align:1px;box-shadow:0 0 6px #7FD4A8}
.nl-ft .credit{display:inline-flex;align-items:center;gap:8px;color:var(--mute);transition:color .3s}
.nl-ft .credit svg{width:11px;height:11px;flex:none;color:var(--fg)}
.nl-ft .credit:hover,.nl-ft .credit:focus-visible{color:var(--fg)}
.nl-ft .by{display:inline-flex;align-items:center;gap:8px;color:var(--dim)}
.nl-ft .by img{width:20px;height:20px;border-radius:50%;object-fit:cover;flex:none;box-shadow:0 0 0 1px var(--line)}
.nl-ft .by b{font-weight:400;color:var(--fg);transition:color .3s}
.nl-ft .by:hover b,.nl-ft .by:focus-visible b{color:#C9BDFF}
.nl-ft .fbot button{display:inline-flex;align-items:center;gap:6px;background:none;border:0;color:var(--mute);font:inherit;letter-spacing:0;cursor:pointer;padding:0;text-transform:uppercase}
.nl-ft .fbot button:hover{color:var(--fg)}
.nl-ft.is-md .f-mail,.nl-ft.is-md .f-cols{grid-column:1 / -1}
.nl-ft.is-md .stations{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-ft.is-md .stn:nth-child(3){padding-left:0;border-left:0}
.nl-ft.is-md .stn:nth-child(n+3){border-top:1px solid var(--line)}
.nl-ft.is-sm .stations{grid-template-columns:1fr}
.nl-ft.is-sm .stn,.nl-ft.is-sm .stn+.stn{padding-left:0;border-left:0}
.nl-ft.is-sm .stn+.stn{border-top:1px solid var(--line)}
.nl-ft.is-bare .fbot{border-top:1px solid var(--line)}
`),
      (_e = () =>
        new Date().toLocaleTimeString(`en-GB`, {
          hour: `2-digit`,
          minute: `2-digit`,
          timeZone: `Europe/Oslo`,
        }) + ` local`),
      (se.defaultProps = {
        mailLabel: `Talk to an engineer`,
        email: `hello@nordlys.example`,
        hint: `Engineers reply within one working day`,
        col1Title: `Pages`,
        col1: ce,
        col2Title: `Template`,
        col2: le,
        stations: [
          { label: `Tromsø HQ`, value: `{clock}` },
          { label: `N-01 Narvik`, value: `−4 °C · Live` },
          { label: `N-02 Kiruna`, value: `−9 °C · 2027` },
          { label: `NO4 price`, value: `€4.3 / MWh` },
        ],
        wordmark: !0,
        word: `Nordlys`,
        lightX: 0.5,
        lightY: 0.5,
        gain: 2.4,
        copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
        status: `All systems normal · build 26.10.05`,
        credit: `Built in Framer`,
        creditLink: de,
        createdLabel: `Created by`,
        author: `Flowmance`,
        authorLink: fe,
        avatar: pe,
        toTop: `Back to top`,
        bare: !1,
      }),
      (ve = (e) => ({
        type: h.Array,
        title: e,
        control: {
          type: h.Object,
          controls: {
            label: { type: h.String, title: `Label` },
            link: { type: h.Link, title: `Link` },
          },
        },
      })),
      m(se, {
        mailLabel: { type: h.String, title: `Mail label` },
        email: { type: h.String, title: `Email` },
        hint: { type: h.String, title: `Hint` },
        col1Title: { type: h.String, title: `Column 1` },
        col1: ve(`Links 1`),
        col2Title: { type: h.String, title: `Column 2` },
        col2: ve(`Links 2`),
        stations: {
          type: h.Array,
          title: `Stations`,
          control: {
            type: h.Object,
            controls: {
              label: { type: h.String, title: `Label` },
              value: { type: h.String, title: `Value`, description: `{clock} = live Tromsø time` },
            },
          },
        },
        wordmark: { type: h.Boolean, title: `Wordmark` },
        word: { type: h.String, title: `Word`, hidden: (e) => !e.wordmark },
        lightX: {
          type: h.Number,
          title: `Light X`,
          min: 0,
          max: 1,
          step: 0.01,
          hidden: (e) => !e.wordmark,
        },
        lightY: {
          type: h.Number,
          title: `Light Y`,
          min: 0,
          max: 1,
          step: 0.01,
          hidden: (e) => !e.wordmark,
        },
        gain: {
          type: h.Number,
          title: `Gain`,
          min: 0.5,
          max: 4,
          step: 0.05,
          hidden: (e) => !e.wordmark,
        },
        copyright: { type: h.String, title: `Copyright` },
        status: { type: h.String, title: `Status` },
        credit: { type: h.String, title: `Credit`, description: `Leave empty to hide` },
        creditLink: { type: h.Link, title: `Credit link` },
        createdLabel: { type: h.String, title: `Created label` },
        author: { type: h.String, title: `Author`, description: `Leave empty to hide` },
        authorLink: { type: h.Link, title: `Author link` },
        avatar: { type: h.Image, title: `Avatar` },
        toTop: { type: h.String, title: `Back to top` },
        bare: { type: h.Boolean, title: `Bare`, description: `Bottom bar only (404 page)` },
      }));
  });
function be(e) {
  let {
      logo: n,
      logoLink: s,
      coords: u,
      links: d,
      current: p,
      cta: m,
      ctaLink: h,
      items: g,
      allPages: _,
      allPagesLink: v,
      bare: b,
      rail: x,
      showLinks: S,
      bottomBlur: C,
      preloader: w,
      formStyle: D,
      listHover: O,
    } = e,
    k = o(null),
    j = o(null),
    M = o(null),
    N = o(null),
    [P, F] = a(!1),
    [I, L] = a(!1),
    [R, z] = a(!1),
    [B, V] = a(1280),
    H = y(),
    U = E(),
    [W, G] = a(!1),
    [K, q] = a(!1);
  (f(() => {
    if (U || i === void 0) return;
    let e = i,
      t = () => {
        (q(!0), (e.__nlIntroDone = !0), i.dispatchEvent(new Event(`nl:intro`)));
      },
      n = i.matchMedia && i.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    if (!w || n || e.__nlIntroDone) {
      t();
      return;
    }
    let r = typeof performance < `u` ? performance.now() : 0,
      a = i.setTimeout(t, Math.max(0, 1550 - r));
    return () => i.clearTimeout(a);
  }, [U, w]),
    f(() => {
      if (U || !O || H || i === void 0 || !i.matchMedia || !i.matchMedia(`(pointer:fine)`).matches)
        return;
      let e = null,
        t = 0,
        n = 0,
        r = { x: 0, y: 0, r: 0 },
        a = { x: 0, y: 0, r: 0 },
        o = (e, t, n) => Math.max(e, Math.min(t, n)),
        s = () => {
          if (!e) {
            t = 0;
            return;
          }
          ((r.x += (a.x - r.x) * 0.12),
            (r.y += (a.y - r.y) * 0.12),
            (r.r += (a.r - r.r) * 0.15),
            e.style.setProperty(`--mx`, r.x + `px`),
            e.style.setProperty(`--my`, r.y + `px`),
            e.style.setProperty(`--rot`, r.r + `deg`),
            (t = requestAnimationFrame(s)));
        },
        c = (c) => {
          if (i.innerWidth < 1280) return;
          let l = c.target?.closest?.(
            `[data-framer-name="Case Row"],[data-framer-name="Note Row"]`
          );
          if (!l) {
            e = null;
            return;
          }
          let u = l.querySelector(`[data-framer-name="RowImg"],[data-framer-name="Thumb"]`);
          if (!u) return;
          let d = l.getBoundingClientRect();
          (l.dataset.framerName === `Note Row`
            ? ((a.x = o(0, d.width - u.offsetWidth, c.clientX - d.left + 40)),
              (a.y = (c.clientY - d.top - d.height / 2) * 0.5),
              (a.r = o(-4, 4, c.movementX * 0.4)),
              i.clearTimeout(n),
              (n = i.setTimeout(() => (a.r = 0), 300)))
            : ((a.x = o(0, d.width - u.offsetWidth - 36, c.clientX - d.left)),
              (a.y = c.clientY - d.top),
              (a.r = 0)),
            l !== e && ((e = l), (r.x = a.x), (r.y = a.y), (r.r = 0)),
            (t ||= requestAnimationFrame(s)));
        };
      return (
        document.addEventListener(`pointermove`, c, { passive: !0 }),
        () => {
          (document.removeEventListener(`pointermove`, c),
            cancelAnimationFrame(t),
            i.clearTimeout(n));
        }
      );
    }, [U, O, H]),
    f(() => {
      if (U || !O || H || i === void 0 || !(`IntersectionObserver` in i)) return;
      let e = [`Metric 1 value`, `Metric 2 value`, `Metric 3 value`, `FtM1V`, `FtM2V`, `FtM3V`]
          .map((e) => `[data-framer-name="${e}"] .framer-text`)
          .join(`,`),
        t = new WeakSet(),
        n = (e) => {
          let t = e.textContent || ``,
            n = t.match(/^(.*?)(-?[\d.,]*\d)(.*)$/);
          if (!n) return;
          let r = n[2].replace(/^-/, ``),
            i = n[2].startsWith(`-`),
            a = parseFloat(r.replace(/,/g, ``)),
            o = (r.split(`.`)[1] || ``).length,
            s = r.includes(`,`),
            c = performance.now(),
            l = (r) => {
              let u = Math.min(1, (r - c) / 1600),
                d = a * (1 - (1 - u) ** 4);
              ((e.textContent =
                u < 1
                  ? n[1] +
                    (i ? `-` : ``) +
                    (s ? Math.round(d).toLocaleString(`en-US`) : d.toFixed(o)) +
                    n[3]
                  : t),
                u < 1 && requestAnimationFrame(l));
            };
          requestAnimationFrame(l);
        },
        r = new IntersectionObserver(
          (e) =>
            e.forEach((e) => {
              e.isIntersecting &&
                !t.has(e.target) &&
                (t.add(e.target), r.unobserve(e.target), n(e.target));
            }),
          { rootMargin: `0px 0px -8% 0px` }
        ),
        a = i.setTimeout(
          () =>
            document.querySelectorAll(e).forEach((e) => {
              !t.has(e) && e.getBoundingClientRect().bottom > 0 && r.observe(e);
            }),
          300
        );
      return () => {
        (i.clearTimeout(a), r.disconnect());
      };
    }, [U, O, H]),
    f(() => {
      if (U || !O || H || !K || i === void 0) return;
      Array.from(
        document.querySelectorAll(
          `[data-framer-name="TitleWrap"] h1.framer-text,[data-framer-name="HeadGrid"] [data-framer-name="Title"] h1.framer-text,[data-framer-name="HeadL"] > [data-framer-name="Headline"] h1.framer-text`
        )
      ).forEach((e) => {
        if (e.classList.contains(`nl-split`) || e.childElementCount > 0) {
          e.classList.add(`nl-split`);
          return;
        }
        let t = (e.textContent || ``).split(` `),
          n = 0;
        ((e.innerHTML = ``),
          t.forEach((r, i) => {
            let a = document.createElement(`span`);
            a.className = `nl-w`;
            for (let e of Array.from(r)) {
              let t = document.createElement(`span`);
              ((t.className = `nl-c`),
                (t.textContent = e),
                (t.style.animationDelay = (0.15 + n++ * 0.021).toFixed(3) + `s`),
                a.appendChild(t));
            }
            (e.appendChild(a), i < t.length - 1 && e.appendChild(document.createTextNode(` `)));
          }),
          e.setAttribute(`aria-label`, t.join(` `)),
          e.classList.add(`nl-split`));
      });
      let e = Array.from(
        document.querySelectorAll(
          `[data-framer-name="Content"][data-framer-component-type="RichTextContainer"] > *`
        )
      ).filter((e) => e.getBoundingClientRect().top > i.innerHeight * 0.9);
      e.forEach((e) => e.classList.add(`nl-rise`));
      let t = new IntersectionObserver(
        (e) =>
          e.forEach((e) => {
            e.isIntersecting && (e.target.classList.add(`in`), t.unobserve(e.target));
          }),
        { rootMargin: `0px 0px -10% 0px` }
      );
      return (e.forEach((e) => t.observe(e)), () => t.disconnect());
    }, [U, O, H, K]),
    f(() => {
      if (U || i === void 0) return;
      let e = i.CSS;
      G(!!i.chrome && !!(e && e.supports && e.supports(`backdrop-filter`, `url(#nl-kb-0)`)));
    }, [U]),
    t(() => {
      let e = k.current;
      if (!e) return;
      let t = new ResizeObserver(() => V(e.offsetWidth));
      return (t.observe(e), V(e.offsetWidth), () => t.disconnect());
    }, []),
    f(() => {
      if (U) return;
      let e = () => {
        z(i.scrollY > 20);
        let e = document.documentElement.scrollHeight - i.innerHeight,
          t = e > 0 ? Math.min(1, i.scrollY / e) : 0;
        (j.current && (j.current.style.transform = `scaleY(${t})`),
          M.current && (M.current.textContent = String(Math.round(t * 100)).padStart(3, `0`)));
      };
      return (
        e(),
        i.addEventListener(`scroll`, e, { passive: !0 }),
        () => i.removeEventListener(`scroll`, e)
      );
    }, [U]));
  let ee = o(P);
  ee.current = P;
  let J = r(
    (e) => {
      (e && !H
        ? (L(!0),
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              (F(!0), L(!1));
            })
          ))
        : F(e),
        e && setTimeout(() => N.current?.focus({ preventScroll: !0 }), 60));
    },
    [H]
  );
  f(() => {
    if (U) return;
    let e = (e) => {
      let t = (document.activeElement?.tagName || ``).toUpperCase();
      ((e.key === `m` || e.key === `M`) &&
        !e.metaKey &&
        !e.ctrlKey &&
        !/INPUT|TEXTAREA|SELECT/.test(t) &&
        J(!ee.current),
        e.key === `Escape` && J(!1));
    };
    return (i.addEventListener(`keydown`, e), () => i.removeEventListener(`keydown`, e));
  }, [U, J]);
  let te = Math.max(16, Math.min(32, B * 0.022));
  return c(`div`, {
    ref: k,
    className: [
      `nl-nv`,
      B <= 960 ? `is-md` : ``,
      B <= 600 ? `is-sm` : ``,
      b ? `is-bare` : ``,
      R ? `is-scrolled` : ``,
      P ? `is-open` : ``,
      I ? `is-anim` : ``,
      U ? `is-canvas` : ``,
      w && !U ? `has-ld` : ``,
    ].join(` `),
    style: { ...e.style, "--gut": te + `px`, position: `relative` },
    children: [
      T(),
      l(`style`, { dangerouslySetInnerHTML: { __html: Oe } }),
      D && !U && l(`style`, { dangerouslySetInnerHTML: { __html: ke } }),
      O && !U && l(`style`, { dangerouslySetInnerHTML: { __html: je } }),
      l(`header`, {
        className: `nv-bar`,
        children: c(`div`, {
          className: `nv-in`,
          children: [
            c(`div`, {
              className: `nv-l`,
              children: [
                c(`a`, {
                  href: s || `/`,
                  className: `nv-logo`,
                  "aria-label": `${n} home`,
                  children: [l(we, {}), n],
                }),
                l(`span`, { className: `nv-sep`, "aria-hidden": `true` }),
                l(`span`, { className: `nv-c mono`, children: u }),
              ],
            }),
            c(`div`, {
              className: `nv-r`,
              children: [
                S &&
                  (d || []).map((e, t) =>
                    l(
                      `a`,
                      {
                        className: `lk` + (p && p === e.label ? ` cur` : ``),
                        href: Ce(e, xe),
                        children: e.label,
                      },
                      t
                    )
                  ),
                l(`a`, { className: `pill`, href: h || `/contact-01`, children: m }),
                c(`button`, {
                  className: `mbtn`,
                  type: `button`,
                  "aria-expanded": P,
                  "aria-controls": `nl-panel`,
                  onClick: () => J(!P),
                  children: [
                    c(`span`, {
                      className: `lbl`,
                      children: [l(`span`, { children: `Menu` }), l(`span`, { children: `Close` })],
                    }),
                    c(`span`, {
                      className: `ic`,
                      "aria-hidden": `true`,
                      children: [l(`i`, {}), l(`i`, {})],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      l(`div`, { className: `scrim`, onClick: () => J(!1) }),
      c(`div`, {
        className: `panel`,
        id: `nl-panel`,
        role: `dialog`,
        "aria-label": `Menu`,
        children: [
          c(`div`, {
            className: `panel-top`,
            children: [
              l(we, { size: 14 }),
              c(`span`, {
                className: `mono`,
                children: [`Press `, l(`kbd`, { children: `M` }), ` to toggle`],
              }),
            ],
          }),
          l(`nav`, {
            children: (g || []).map((e, t) =>
              c(
                `a`,
                {
                  ref: t === 0 ? N : void 0,
                  href: Ce(e, Se),
                  onClick: () => J(!1),
                  style: { transitionDelay: P ? `${0.05 + t * 0.045}s` : `0s` },
                  children: [
                    l(`span`, {
                      className: `pl`,
                      children: c(`span`, {
                        className: `rl`,
                        children: [
                          l(`i`, { children: e.label }),
                          l(`i`, { "aria-hidden": `true`, children: e.label }),
                        ],
                      }),
                    }),
                    l(`span`, { className: `mono`, children: e.note }),
                  ],
                },
                t
              )
            ),
          }),
          c(`div`, {
            className: `pf`,
            style: { transitionDelay: P ? `${0.05 + (g || []).length * 0.045}s` : `0s` },
            children: [
              c(`a`, { className: `mono`, href: v || `/`, children: [_, ` `, A(`ne`, 12)] }),
              l(`a`, { className: `pill`, href: h || `/contact-01`, children: m }),
            ],
          }),
        ],
      }),
      w &&
        !U &&
        l(`div`, {
          className: `ld` + (K ? ` done` : ``),
          "aria-hidden": `true`,
          children: c(`svg`, {
            viewBox: `0 0 20 20`,
            children: [
              l(`rect`, { className: `m1`, x: `2`, y: `2`, width: `3.6`, height: `16` }),
              l(`polygon`, { className: `m2`, points: `6.7,2 10,2 13.3,18 10,18` }),
              l(`rect`, { className: `m3`, x: `14.4`, y: `2`, width: `3.6`, height: `16` }),
            ],
          }),
        }),
      C &&
        c(`div`, {
          className: `bb`,
          "aria-hidden": `true`,
          children: [
            l(Ee, {}),
            Te.map((e) =>
              l(
                `i`,
                {
                  style: W
                    ? { backdropFilter: `url(#${e.id})`, WebkitBackdropFilter: `url(#${e.id})` }
                    : void 0,
                },
                e.id
              )
            ),
          ],
        }),
      x &&
        !b &&
        c(`div`, {
          className: `rail`,
          "aria-hidden": `true`,
          children: [l(`i`, { ref: j }), l(`span`, { className: `mono`, ref: M, children: `000` })],
        }),
    ],
  });
}
var xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Q,
  Ae,
  $,
  je,
  Me = e(() => {
    (n(),
      u(),
      d(),
      g(),
      P(),
      (xe = [
        { label: `Company`, link: `/company` },
        { label: `Pricing`, link: `/pricing-01` },
        { label: `Customers`, link: `/case-studies` },
        { label: `News`, link: `/news` },
      ]),
      (Se = [
        { label: `Home`, note: `4 layouts`, link: `/home-01` },
        { label: `Company`, note: `Since 2024`, link: `/company` },
        { label: `Pricing`, note: `From $1.62`, link: `/pricing-01` },
        { label: `Case studies`, note: `6 teams`, link: `/case-studies` },
        { label: `News`, note: `Field notes`, link: `/news` },
        { label: `Careers`, note: `7 open roles`, link: `/careers` },
        { label: `Contact`, note: `Reply in 1 day`, link: `/contact-01` },
      ]),
      (Ce = (e, t) => e.link || t.find((t) => t.label === e.label)?.link || `#`),
      (we = ({ size: e = 17 }) =>
        c(`svg`, {
          viewBox: `0 0 20 20`,
          width: e,
          height: e,
          "aria-hidden": `true`,
          style: { flex: `none`, display: `block` },
          fill: `currentColor`,
          children: [
            l(`rect`, { x: `2`, y: `2`, width: `3.6`, height: `16` }),
            l(`polygon`, { points: `6.7,2 10,2 13.3,18 10,18` }),
            l(`rect`, { x: `14.4`, y: `2`, width: `3.6`, height: `16` }),
          ],
        })),
      (Te = [0, 1, 2, 3, 4].map((e) => {
        let t = +(24e-5 * (e + 1) * (e + 1)).toFixed(5);
        return { id: `nl-kb-` + e, sd: t, shift: +((-t * 2) / 3).toFixed(5) };
      })),
      (Ee = () =>
        l(`svg`, {
          width: `0`,
          height: `0`,
          "aria-hidden": `true`,
          style: { position: `absolute`, width: 0, height: 0, overflow: `hidden` },
          children: l(`defs`, {
            children: Te.map((e) =>
              c(
                `filter`,
                {
                  id: e.id,
                  colorInterpolationFilters: `sRGB`,
                  primitiveUnits: `objectBoundingBox`,
                  x: `0%`,
                  y: `0%`,
                  width: `100%`,
                  height: `100%`,
                  children: [
                    l(`feGaussianBlur`, {
                      in: `SourceGraphic`,
                      stdDeviation: e.sd,
                      result: `blurred`,
                    }),
                    l(`feOffset`, { in: `blurred`, dx: e.shift, dy: `0`, result: `shifted` }),
                    l(`feColorMatrix`, {
                      in: `shifted`,
                      type: `matrix`,
                      values: `0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 .2126 .7152 .0722 0 0`,
                      result: `lum`,
                    }),
                    l(`feOffset`, { in: `lum`, dx: -e.sd, dy: `0`, result: `lumL` }),
                    l(`feOffset`, { in: `lum`, dx: e.sd, dy: `0`, result: `lumR` }),
                    l(`feComposite`, {
                      in: `lumL`,
                      in2: `lum`,
                      operator: `arithmetic`,
                      k1: `0`,
                      k2: `1.6`,
                      k3: `-1.6`,
                      k4: `0`,
                      result: `dL`,
                    }),
                    l(`feComposite`, {
                      in: `lumR`,
                      in2: `lum`,
                      operator: `arithmetic`,
                      k1: `0`,
                      k2: `1.6`,
                      k3: `-1.6`,
                      k4: `0`,
                      result: `dR`,
                    }),
                    l(`feColorMatrix`, {
                      in: `dL`,
                      type: `matrix`,
                      values: `0 0 0 0 .43 0 0 0 0 .29 0 0 0 0 1 0 0 0 1 0`,
                      result: `tV`,
                    }),
                    l(`feColorMatrix`, {
                      in: `dR`,
                      type: `matrix`,
                      values: `0 0 0 0 .2 0 0 0 0 .45 0 0 0 0 1 0 0 0 1 0`,
                      result: `tB`,
                    }),
                    l(`feComposite`, {
                      in: `shifted`,
                      in2: `tV`,
                      operator: `arithmetic`,
                      k1: `0`,
                      k2: `1`,
                      k3: `1`,
                      k4: `0`,
                      result: `sv`,
                    }),
                    l(`feComposite`, {
                      in: `sv`,
                      in2: `tB`,
                      operator: `arithmetic`,
                      k1: `0`,
                      k2: `1`,
                      k3: `1`,
                      k4: `0`,
                    }),
                  ],
                },
                e.id
              )
            ),
          }),
        })),
      (De = (e) =>
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23${e}' stroke-width='1.1'/%3E%3C/svg%3E")`),
      (Oe = `
.nl-nv{--fg:#F3F3F3;--mute:#A6A6A6;--line:rgba(243,243,243,.12);--ease:cubic-bezier(.16,1,.3,1);font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:var(--fg);-webkit-font-smoothing:antialiased;width:100%}
.nl-nv *{box-sizing:border-box}
.nl-nv a{color:inherit;text-decoration:none}
.nl-nv .nv-bar{position:relative;height:65px;border-bottom:1px solid transparent;transition:background .5s,border-color .5s}
.nl-nv.is-scrolled .nv-bar{background:rgba(0,0,0,.8);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom-color:var(--line)}
.nl-nv .nv-in{display:flex;justify-content:space-between;align-items:center;height:64px;gap:16px;padding:0 var(--gut,28px)}
.nl-nv .nv-l{display:flex;align-items:center;gap:14px}
.nl-nv .nv-logo{display:flex;align-items:center;gap:8px;font-size:17px;font-weight:500;letter-spacing:-.035em;line-height:1.45}
.nl-nv .nv-sep{width:1px;height:14px;background:rgba(243,243,243,.25)}
.nl-nv .mono{font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45}
.nl-nv .nv-c{color:var(--mute)}
.nl-nv .nv-r{display:flex;align-items:center;justify-content:flex-end;gap:28px;font-size:14px;font-weight:500;letter-spacing:.011em}
.nl-nv .lk{position:relative;opacity:.7;transition:opacity .3s}
.nl-nv .lk:hover,.nl-nv .lk.cur{opacity:1}
.nl-nv .lk::before,.nl-nv .lk::after{position:absolute;top:0;font-family:"Geist Mono",monospace;color:var(--mute);opacity:0;transition:opacity .3s,transform .5s var(--ease)}
.nl-nv .lk::before{content:"[";left:-9px;transform:translateX(5px)}
.nl-nv .lk::after{content:"]";right:-9px;transform:translateX(-5px)}
.nl-nv .lk:hover::before,.nl-nv .lk:hover::after{opacity:1;transform:none}
.nl-nv .lk.cur::before,.nl-nv .lk.cur::after{opacity:1;transform:none;color:#C9BDFF}
.nl-nv .pill{position:relative;display:inline-flex;align-items:center;gap:10px;height:38px;padding:0 0 0 12px;border-radius:2px;border:0;cursor:pointer;white-space:nowrap;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;color:#000;background:linear-gradient(#000,#000) 0 0/0% 100% no-repeat,var(--fg);box-shadow:inset 0 0 0 1px var(--fg);transition:background-size .6s var(--ease),color .4s var(--ease)}
.nl-nv .pill::before{content:"";width:5px;height:5px;background:currentColor;flex:none}
.nl-nv .pill::after{content:"";width:12px;box-sizing:content-box;align-self:stretch;margin-left:6px;padding:0 13px;border-left:1px solid currentColor;opacity:.75;background:${De(`000`)} center/12px 12px no-repeat;transition:padding .5s var(--ease)}
.nl-nv .pill:hover{background-size:100% 100%,auto;color:var(--fg)}
.nl-nv .pill:hover::after{padding:0 9px 0 15px;background-image:${De(`F3F3F3`)}}
.nl-nv .mbtn{margin-left:-20px;display:inline-flex;align-items:center;gap:12px;height:38px;padding:0 12px 0 14px;border-radius:2px;background:rgba(243,243,243,.05);box-shadow:inset 0 0 0 1px rgba(243,243,243,.3);color:var(--fg);font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;border:0;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:background .4s}
.nl-nv .mbtn:hover{background:rgba(243,243,243,.12)}
.nl-nv .mbtn .lbl{display:grid;height:11px;overflow:hidden}
.nl-nv .mbtn .lbl span{transition:transform .6s var(--ease)}
.nl-nv.is-open .mbtn .lbl span{transform:translateY(-100%)}
.nl-nv .mbtn .ic{position:relative;width:10px;height:10px}
.nl-nv .mbtn .ic i{position:absolute;left:0;right:0;top:50%;height:1.2px;background:currentColor;transition:transform .6s var(--ease)}
.nl-nv .mbtn .ic i:first-child{transform:translateY(-2.5px)}
.nl-nv .mbtn .ic i:last-child{transform:translateY(2.5px)}
.nl-nv.is-open .mbtn .ic i:first-child{transform:rotate(45deg)}
.nl-nv.is-open .mbtn .ic i:last-child{transform:rotate(-45deg)}
.nl-nv .scrim{position:fixed;inset:0;z-index:-1;background:rgba(0,0,0,.45);opacity:0;visibility:hidden;transition:opacity .5s,visibility .5s}
.nl-nv.is-open .scrim{opacity:1;visibility:visible}
.nl-nv .panel{position:absolute;top:72px;right:var(--gut,28px);width:min(380px,calc(100% - 2 * var(--gut,28px)));padding:8px 20px 18px;border-radius:14px;background:rgba(14,11,24,.78);backdrop-filter:blur(22px) saturate(140%);-webkit-backdrop-filter:blur(22px) saturate(140%);box-shadow:inset 0 0 0 1px var(--line),0 40px 80px -30px rgba(0,0,0,.8);transform-origin:top right;opacity:0;visibility:hidden;transform:translateY(-8px) scale(.97);transition:opacity .45s var(--ease),transform .6s var(--ease),visibility .45s}
.nl-nv.is-open .panel{opacity:1;visibility:visible;transform:none}
.nl-nv .panel nav{display:flex;flex-direction:column}
.nl-nv .panel nav a{position:relative;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);font-size:20px;font-weight:400;letter-spacing:-.025em;transition:color .3s}
.nl-nv .panel nav a::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:100% 50%;transition:transform .7s var(--ease)}
.nl-nv .panel nav a:hover::after,.nl-nv .panel nav a:focus-visible::after{transform:scaleX(1);transform-origin:0 50%}
.nl-nv .panel .pl{display:inline-flex;align-items:center}
.nl-nv .panel .pl::before{content:"";width:0;height:5px;margin-right:0;background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.8);transition:width .5s var(--ease),margin .5s var(--ease)}
.nl-nv .panel nav a:hover .pl::before{width:5px;margin-right:12px}
.nl-nv .panel .rl{display:block;overflow:hidden;height:1.18em;line-height:1.18}
.nl-nv .panel .rl i{display:block;font-style:normal;transition:transform .6s var(--ease)}
.nl-nv .panel nav a:hover .rl i{transform:translateY(-100%)}
.nl-nv .panel nav a .mono{color:var(--mute);transition:color .4s,letter-spacing .6s var(--ease)}
.nl-nv .panel nav a:hover .mono{color:#C9BDFF;letter-spacing:.16em}
.nl-nv .panel nav:hover a{color:var(--mute)}
.nl-nv .panel nav a:hover{color:var(--fg)}
.nl-nv .panel nav a,.nl-nv .panel .pf{opacity:1;transform:none}
.nl-nv.is-anim .panel nav a,.nl-nv.is-anim .panel .pf{opacity:0;transform:translateY(14px)}
.nl-nv.is-open .panel nav a,.nl-nv.is-open .panel .pf{transition:color .3s,opacity .8s var(--ease),transform .8s var(--ease)}
.nl-nv .panel-top{display:flex;justify-content:space-between;align-items:center;padding:12px 0 10px;border-bottom:1px solid var(--line);color:var(--mute)}
.nl-nv .panel-top svg{color:var(--fg)}
.nl-nv kbd{font:400 9px/1 "Geist Mono",monospace;padding:3px 5px;box-shadow:inset 0 0 0 1px rgba(243,243,243,.3);color:var(--fg)}
.nl-nv .pf{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:16px}
.nl-nv .pf .mono{color:var(--mute);display:inline-flex;gap:6px;align-items:center}
.nl-nv .rail{position:fixed;right:14px;top:50%;height:120px;width:1px;background:var(--line);transform:translateY(-50%);pointer-events:none}
.nl-nv .rail i{position:absolute;left:0;top:0;width:1px;height:100%;background:linear-gradient(#6E4BFF,#C9BDFF);transform-origin:50% 0;transform:scaleY(0)}
.nl-nv .rail span{position:absolute;top:calc(100% + 8px);right:-3px;color:#5E5E5E;writing-mode:vertical-rl;font-variant-numeric:tabular-nums}
.nl-nv .bb{position:fixed;left:0;right:0;bottom:0;height:69px;z-index:36;pointer-events:none;overflow:hidden}
.nl-nv .bb i{position:absolute;inset:0 -24px}
.nl-nv .bb i:nth-of-type(1){backdrop-filter:blur(.35px);-webkit-backdrop-filter:blur(.35px);-webkit-mask-image:linear-gradient(#0000 0%,#000 20% 40%,#0000 60%);mask-image:linear-gradient(#0000 0%,#000 20% 40%,#0000 60%)}
.nl-nv .bb i:nth-of-type(2){backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);-webkit-mask-image:linear-gradient(#0000 20%,#000 40% 60%,#0000 80%);mask-image:linear-gradient(#0000 20%,#000 40% 60%,#0000 80%)}
.nl-nv .bb i:nth-of-type(3){backdrop-filter:blur(3.1px);-webkit-backdrop-filter:blur(3.1px);-webkit-mask-image:linear-gradient(#0000 40%,#000 60% 80%,#0000 100%);mask-image:linear-gradient(#0000 40%,#000 60% 80%,#0000 100%)}
.nl-nv .bb i:nth-of-type(4){backdrop-filter:blur(5.5px);-webkit-backdrop-filter:blur(5.5px);-webkit-mask-image:linear-gradient(#0000 60%,#000 80% 100%,#0000 120%);mask-image:linear-gradient(#0000 60%,#000 80% 100%,#0000 120%)}
.nl-nv .bb i:nth-of-type(5){backdrop-filter:blur(8.6px);-webkit-backdrop-filter:blur(8.6px);-webkit-mask-image:linear-gradient(#0000 80%,#000 100% 120%,#0000 140%);mask-image:linear-gradient(#0000 80%,#000 100% 120%,#0000 140%)}
.nl-nv.is-canvas .bb{display:none}
.nl-nv .ld{position:fixed;inset:0;z-index:90;background:#000;display:grid;place-items:center;pointer-events:none;clip-path:inset(0 0 0 0);animation:nl-ld-wipe 1s cubic-bezier(.87,0,.13,1) 1.25s forwards}
.nl-nv .ld svg{width:44px;height:44px;fill:var(--fg);overflow:visible;animation:nl-ld-out .6s cubic-bezier(.7,0,.84,0) 1s forwards}
.nl-nv .ld .m1,.nl-nv .ld .m2,.nl-nv .ld .m3{transform-box:fill-box}
.nl-nv .ld .m1{transform-origin:50% 100%;animation:nl-ld-bar .7s cubic-bezier(.87,0,.13,1) both}
.nl-nv .ld .m3{transform-origin:50% 0%;animation:nl-ld-bar .7s cubic-bezier(.87,0,.13,1) .08s both}
.nl-nv .ld .m2{animation:nl-ld-mid .6s cubic-bezier(.16,1,.3,1) .35s both}
@keyframes nl-ld-bar{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes nl-ld-mid{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
@keyframes nl-ld-out{to{transform:scale(.6);opacity:0}}
@keyframes nl-ld-wipe{to{clip-path:inset(0 0 100% 0);visibility:hidden}}
@media (prefers-reduced-motion:reduce){.nl-nv .ld{display:none}}
.nl-nv.is-canvas .ld{display:none}
@media (prefers-reduced-motion:no-preference){
html:has(.nl-nv .ld:not(.done)) body *:not(.nl-nv):not(.nl-nv *){animation-play-state:paused!important}
.nl-nv.has-ld .nv-l>*,.nl-nv.has-ld .nv-r>*{animation:nl-nv-in 1s cubic-bezier(.16,1,.3,1) both}
.nl-nv.has-ld .nv-l>*:nth-child(1){animation-delay:1.55s}.nl-nv.has-ld .nv-l>*:nth-child(2){animation-delay:1.6s}.nl-nv.has-ld .nv-l>*:nth-child(3){animation-delay:1.65s}
.nl-nv.has-ld .nv-r>*:nth-last-child(2){animation-delay:1.7s}.nl-nv.has-ld .nv-r>*:nth-last-child(1){animation-delay:1.75s}
}
@keyframes nl-nv-in{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
.nl-nv.is-md .lk,.nl-nv.is-md .nv-c,.nl-nv.is-md .nv-sep,.nl-nv.is-md .rail{display:none}
.nl-nv.is-sm .nv-r .pill{display:none}
.nl-nv.is-bare .nv-r,.nl-nv.is-bare .nv-c,.nl-nv.is-bare .nv-sep,.nl-nv.is-bare .rail{display:none}
.nl-nv.is-canvas .rail{display:none}
`),
      (ke = `
.framer-form-text-input,.framer-form-select-wrapper{padding-left:0!important;padding-right:0!important;box-shadow:none!important;background:transparent!important}
.framer-form-text-input::after,.framer-form-select-wrapper::after{border-width:0!important}
label:has(>.framer-form-text-input),label:has(>.framer-form-select-wrapper),label:has(.framer-form-text-input),label:has(.framer-form-select-wrapper){position:relative}
label:has(.framer-form-text-input)::before,label:has(.framer-form-select-wrapper)::before{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;z-index:2;pointer-events:none;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);transform:scaleX(0);transform-origin:0 50%;transition:transform .7s cubic-bezier(.16,1,.3,1)}
label:has(.framer-form-text-input):focus-within::before,label:has(.framer-form-select-wrapper):focus-within::before{transform:scaleX(1)}
select.framer-form-input{padding-left:0!important}
textarea.framer-form-input{padding-left:0!important;padding-right:0!important}
.framer-form-input::placeholder{color:#5E5E5E}
.framer-form-text-input,.framer-form-select-wrapper{height:auto!important;min-height:38px;overflow:visible!important}
.framer-form-text-input .framer-form-input,input.framer-form-input,select.framer-form-input{padding-top:6px!important;padding-bottom:6px!important;height:auto!important;min-height:38px;line-height:1.3!important;box-sizing:border-box}
textarea.framer-form-input{padding-top:6px!important;padding-bottom:6px!important;min-height:92px;line-height:1.3!important}
.framer-form-input{--framer-input-font-family:"Inter Tight",sans-serif!important;font-family:"Inter Tight",sans-serif!important;letter-spacing:-.015em}
`),
      (Q = `cubic-bezier(.16,1,.3,1)`),
      (Ae = `[data-framer-name="News Row"],[data-framer-name="Note Row"],[data-framer-name="Case Row"],[data-framer-name="Role Row"],[data-framer-name="Rel Card"]`),
      ($ = `[data-framer-name="News Row"],[data-framer-name="Note Row"],[data-framer-name="Role Row"]`),
      (je = `
:is(${Ae})::before{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;z-index:1;pointer-events:none;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(.0001);transform-origin:100% 50%;transition:transform .8s ${Q}}
:is(${Ae}):is(:hover,:focus-visible)::before{transform:scaleX(1);transform-origin:0 50%}
:is(${$}){transform:none!important;transition:padding-left .6s ${Q}}
:is(${$}):hover{padding-left:12px!important;z-index:2}
@media (max-width:809.98px){:is([data-framer-name="Note Row"],[data-framer-name="Role Row"]):hover{padding-left:0!important}}
:is([data-framer-name="News Row"] [data-framer-name="Title"],[data-framer-name="Note Row"] [data-framer-name="Title"],[data-framer-name="Role Row"] [data-framer-name="Title"],[data-framer-name="Case Row"] [data-framer-name="RowHeadline"],[data-framer-name="Rel Card"] [data-framer-name="Title"]) .framer-text{color:#A6A6A6!important;transition:color .4s,text-shadow .4s}
:is([data-framer-name="News Row"],[data-framer-name="Case Row"],[data-framer-name="Rel Card"]):hover :is([data-framer-name="Title"],[data-framer-name="RowHeadline"]) .framer-text{color:#F3F3F3!important}
:is([data-framer-name="Note Row"],[data-framer-name="Role Row"]):hover [data-framer-name="Title"] .framer-text{color:#F3F3F3!important;text-shadow:0 1px 18px rgba(0,0,0,.6)}
[data-framer-name="News Row"] [data-framer-name="Arrow"],[data-framer-name="Note Row"] [data-framer-name="RowArrow"] p,[data-framer-name="Role Row"] [data-framer-name="RoleArrow"] p{display:inline-block;transition:transform .5s ${Q},color .3s}
[data-framer-name="News Row"]:hover [data-framer-name="Arrow"],[data-framer-name="Note Row"]:hover [data-framer-name="RowArrow"] p{transform:rotate(-45deg)}
[data-framer-name="Role Row"]:hover [data-framer-name="RoleArrow"] p{transform:translateX(4px);color:#C9BDFF!important}
:is([data-framer-name="Note Row"] [data-framer-name="RowCategory"],[data-framer-name="Role Row"] [data-framer-name="RoleDeptText"]) .framer-text{transition:color .3s}
[data-framer-name="Note Row"]:hover [data-framer-name="RowTag"],[data-framer-name="Role Row"]:hover [data-framer-name="DeptTag"]{--border-color:rgba(201,189,255,.35)!important}
[data-framer-name="Note Row"]:hover [data-framer-name="RowCategory"] .framer-text,[data-framer-name="Role Row"]:hover [data-framer-name="RoleDeptText"] .framer-text{color:#C9BDFF!important}
[data-framer-name="Case Row"] [data-framer-name="RowBrand"]::before{content:"";flex:none;order:-1;width:0;height:6px;margin-right:-12px;background:#C9BDFF;box-shadow:0 0 8px rgba(110,75,255,.9);transition:width .6s ${Q},margin .6s ${Q}}
[data-framer-name="Case Row"]:hover [data-framer-name="RowBrand"]::before{width:6px;margin-right:2px}
@media (hover:hover) and (min-width:1280px){[data-framer-name="Case Row"]{transition:opacity .5s ${Q}}[data-framer-name="Case List"]:hover [data-framer-name="Case Row"]:not(:hover){opacity:.45}}
[data-framer-name="Rel Card"] [data-framer-name="Cover"]{overflow:hidden}
[data-framer-name="Rel Card"] [data-framer-name="Cover"] [data-framer-background-image-wrapper]{transition:filter 1s ${Q}}
[data-framer-name="Rel Card"] [data-framer-name="Cover"] [data-framer-background-image-wrapper] img{transition:transform 1.4s ${Q}}
[data-framer-name="Rel Card"]:hover [data-framer-name="Cover"] [data-framer-background-image-wrapper]{filter:grayscale(1) contrast(1.12) brightness(.92)!important}
[data-framer-name="Rel Card"]:hover [data-framer-name="Cover"] [data-framer-background-image-wrapper] img{transform:scale(1.04)}
@media (min-width:1280px) and (hover:hover){
[data-framer-name="Case Row"]:hover,[data-framer-name="Note Row"]:hover{z-index:2}
[data-framer-name="Case Row"] [data-framer-name="RowImg"]{position:absolute!important;z-index:3;left:var(--mx,56%);top:var(--my,50%);width:clamp(220px,19vw,300px)!important;height:auto!important;aspect-ratio:4/3;transform:translate(28px,-50%);clip-path:inset(50% 0)!important;transition:clip-path .7s ${Q},left .55s ${Q},top .55s ${Q};overflow:hidden;background:#0A0A0A;pointer-events:none}
[data-framer-name="Case Row"]:hover [data-framer-name="RowImg"]{clip-path:inset(0)!important}
[data-framer-name="Case Row"] [data-framer-name="RowImg"] img{transform:scale(1.25);transition:transform 1.1s ${Q}}
[data-framer-name="Case Row"]:hover [data-framer-name="RowImg"] img{transform:scale(1)}
[data-framer-name="Case Row"] [data-framer-name="RowImg"]::after{content:"";position:absolute;inset:0;z-index:2;background:radial-gradient(90% 70% at 100% 100%,rgba(110,75,255,.35),transparent 70%);box-shadow:inset 0 0 0 1px rgba(243,243,243,.15)}
[data-framer-name="Note Row"] [data-framer-name="Thumb"]{position:absolute!important;z-index:3;top:50%;left:0;width:clamp(220px,19vw,300px)!important;height:auto!important;aspect-ratio:4/3;background:#0A0A0A;overflow:hidden;pointer-events:none;opacity:0;clip-path:inset(50% 0);transform:translate3d(var(--mx,58vw),calc(-50% + var(--my,0px)),0) rotate(var(--rot,0deg));transition:clip-path .7s ${Q},opacity .4s}
[data-framer-name="Note Row"]:hover [data-framer-name="Thumb"]{clip-path:inset(0);opacity:1}
[data-framer-name="Note Row"] [data-framer-name="Thumb"] [data-framer-background-image-wrapper]{filter:grayscale(1) contrast(1.1) brightness(.85);-webkit-mask-image:${O};mask-image:${O};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px}
[data-framer-name="Note Row"] [data-framer-name="Thumb"] img{transform:scale(1.15);transition:transform 1s ${Q}}
[data-framer-name="Note Row"]:hover [data-framer-name="Thumb"] img{transform:scale(1)}
[data-framer-name="Note Row"] [data-framer-name="Thumb"]::after{content:"";position:absolute;inset:0;z-index:2;background:radial-gradient(80% 70% at 100% 100%,rgba(110,75,255,.35),transparent 70%);box-shadow:inset 0 0 0 1px rgba(243,243,243,.18)}
[data-framer-name="Note Row"] [data-framer-name="Title"]{position:relative;z-index:4}
}
a[data-styles-preset="e2IbyvcQu"],[data-framer-name="Content"] a.framer-text{--framer-link-text-color:#F3F3F3!important;--framer-link-hover-text-color:#C9BDFF!important;--framer-link-text-decoration:none!important;transition:color .3s}
:is([data-framer-name="AllCases"],[data-framer-name="EndBack"],[data-framer-name="ShareIn"],[data-framer-name="ShareMail"],[data-framer-name="BackText"]) a.framer-text{--framer-link-text-color:#A6A6A6!important;--framer-link-hover-text-color:#F3F3F3!important}
[data-framer-name="Newsletter"] [data-framer-name="FieldEmail"] .framer-form-input{font-size:clamp(20px,1.8vw,26px)!important}
[data-framer-name="TopicsGrid"]{display:flex!important;flex-wrap:wrap;gap:6px!important;padding-top:6px}
[data-framer-name="TopicsGrid"] > label,[data-framer-name="TopicsGrid"] > label > *{width:auto!important;max-width:none!important;flex:none!important;white-space:nowrap}
[data-framer-name="TopicsGrid"] > label{position:relative;display:inline-flex!important;align-items:center;gap:10px!important;height:32px!important;min-height:32px;box-sizing:border-box;padding:0 12px!important;box-shadow:inset 0 0 0 1px rgba(243,243,243,.12);cursor:pointer;transition:box-shadow .3s,background .3s}
[data-framer-name="TopicsGrid"] > label input[type=checkbox]{position:absolute!important;opacity:0!important;width:1px!important;height:1px!important;pointer-events:none}
[data-framer-name="TopicsGrid"] > label::before{content:"";flex:none;width:5px;height:5px;box-shadow:inset 0 0 0 1px currentColor;color:#A6A6A6;transition:background .3s,box-shadow .3s}
[data-framer-name="TopicsGrid"] > label .framer-text{font-family:"Geist Mono",monospace!important;font-size:11px!important;letter-spacing:.08em!important;text-transform:uppercase;color:#A6A6A6!important;transition:color .3s}
[data-framer-name="TopicsGrid"] > label:hover .framer-text{color:#F3F3F3!important}
[data-framer-name="TopicsGrid"] > label:has(input:checked){background:rgba(110,75,255,.1);box-shadow:inset 0 0 0 1px rgba(201,189,255,.5)}
[data-framer-name="TopicsGrid"] > label:has(input:checked) .framer-text{color:#F3F3F3!important}
[data-framer-name="TopicsGrid"] > label:has(input:checked)::before{background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9)}
[data-framer-name="TopicsGrid"] > label:has(input:focus-visible){outline:1px solid #C9BDFF;outline-offset:2px}
[data-framer-name="LetterList"] > * > .framer-text::before{content:"";display:inline-block;width:5px;height:5px;margin-right:12px;vertical-align:.18em;background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9)}
[data-framer-name="Meta"] > [data-framer-name="Tag"]{--border-color:rgba(201,189,255,.35)!important}
[data-framer-name="Head"] > [data-framer-name="Glass"]{-webkit-mask-image:linear-gradient(#000 10%,transparent 85%);mask-image:linear-gradient(#000 10%,transparent 85%)}
[data-framer-name="Head"] > [data-framer-name="Glass"]::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(90deg,rgba(0,0,0,.85),rgba(0,0,0,.3) 65%,rgba(0,0,0,.5))}
[data-framer-name="Back"] [data-framer-name="Arrow"]{transition:transform .5s ${Q}}
[data-framer-name="Back"]:hover [data-framer-name="Arrow"]{transform:translateX(-4px)}
[data-framer-name="Back"] .framer-text{transition:color .3s}
[data-framer-name="Back"]:hover .framer-text{color:#F3F3F3!important}
[data-framer-name="TitleWrap"] h1.framer-text{font-size:clamp(42px,6vw,104px)!important}
[data-framer-name="Head"]:has(> [data-framer-name="JMeta"]) [data-framer-name="HeadGrid"] [data-framer-name="Title"] .framer-text{max-width:16ch}
[data-framer-name="Head"]:has(> [data-framer-name="JMeta"]) [data-framer-name="HeadGrid"] [data-framer-name="Title"] .framer-text{font-size:clamp(40px,5.6vw,96px)!important;text-wrap:balance}
[data-framer-name="HeadL"] > [data-framer-name="Headline"] .framer-text{max-width:23ch}
[data-framer-name="HeadL"] > [data-framer-name="Headline"] .framer-text{font-size:clamp(36px,4.3vw,76px)!important;text-wrap:balance}
@keyframes nl-hb{from{opacity:0;filter:blur(14px);transform:translateY(.16em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-show{to{opacity:1}}
@media (prefers-reduced-motion:no-preference){
:is([data-framer-name="TitleWrap"],[data-framer-name="HeadGrid"] [data-framer-name="Title"],[data-framer-name="HeadL"] > [data-framer-name="Headline"]) h1.framer-text:not(.nl-split){opacity:0;animation:nl-show 0s 2.6s forwards}
h1.nl-split .nl-w{display:inline-block;white-space:nowrap}
h1.nl-split .nl-c{display:inline-block;animation:nl-hb 1.25s cubic-bezier(.25,1,.5,1) both}
.nl-rise{opacity:0;transform:translateY(22px);transition:opacity 1s ${Q},transform 1s ${Q}}
.nl-rise.in{opacity:1;transform:none}
}
:is([data-framer-name="FtQuote"],[data-framer-name="VQuote"] [data-framer-name="Quote"]) .framer-text::before{content:"\\201C"}
:is([data-framer-name="FtQuote"],[data-framer-name="VQuote"] [data-framer-name="Quote"]) .framer-text::after{content:"\\201D"}
@media (max-width:809.98px){[data-framer-name="Start"] [data-framer-name="StartRow"]{flex-direction:column!important;align-items:flex-start!important;gap:28px!important}[data-framer-name="Start"] [data-framer-name="StartRow"] > *{width:100%!important;align-items:flex-start!important}[data-framer-name="Start"] [data-framer-name="Side"] .framer-text{text-align:left!important}[data-framer-name="Start"] [data-framer-name="StartIn"]{gap:56px!important}}
@media (max-width:1279.98px){:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"]){height:auto!important;min-height:0!important}:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"]) > [data-framer-name="VQuote"]{flex:none!important;height:auto!important;padding-top:56px!important}:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"]) > [data-framer-name="VTop"]{padding-bottom:40px!important}}
@media (max-width:809.98px){:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"],[data-framer-name="FtCover"],[data-framer-name="Portrait"]){width:100%!important;max-width:100%!important;flex:none!important}:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"]) :is([data-framer-name="VTop"],[data-framer-name="VQuote"],[data-framer-name="VBy"]){padding-left:20px!important;padding-right:20px!important}:is([data-framer-name="FtVoice"],[data-framer-name="VoiceCard"]) [data-framer-name="VBy"]{flex-wrap:wrap;gap:14px!important}:is([data-framer-name="FtQuote"],[data-framer-name="VQuote"] [data-framer-name="Quote"]){max-width:100%!important;width:100%!important}:is([data-framer-name="FtQuote"],[data-framer-name="VQuote"] [data-framer-name="Quote"]) .framer-text{font-size:21px!important}}
#__framer-badge-container .nl-rise{opacity:1!important;transform:none!important}
[data-framer-name="FeatFlag"]{box-shadow:inset 0 0 0 1px rgba(201,189,255,.35)}
[data-framer-name="Feat Card"] :is([data-framer-name="FeatImg"],[data-framer-name="FtCover"]){overflow:hidden}
[data-framer-name="Feat Card"] :is([data-framer-name="FeatImg"],[data-framer-name="FtCover"]) [data-framer-background-image-wrapper] img{transition:transform 1.6s ${Q}}
[data-framer-name="Feat Card"]:hover :is([data-framer-name="FeatImg"],[data-framer-name="FtCover"]) [data-framer-background-image-wrapper] img{transform:scale(1.03)}
[data-framer-name="Feat Card"] [data-framer-name="FeatImg"] [data-framer-background-image-wrapper]{transition:filter 1s ${Q}}
[data-framer-name="Feat Card"]:hover [data-framer-name="FeatImg"] [data-framer-background-image-wrapper]{filter:grayscale(1) contrast(1.12) brightness(.9)!important}
[data-framer-name="ReadLink"]{position:relative}
[data-framer-name="ReadLink"]::before{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;z-index:1;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform:scaleX(0);transform-origin:0 50%;transition:transform .7s ${Q}}
a:hover [data-framer-name="ReadLink"]::before{transform:scaleX(1)}
[data-framer-name="ReadArrow"]{transition:transform .5s ${Q}}
a:hover [data-framer-name="ReadArrow"]{transform:translateX(4px)}
[data-framer-name="TabsSlot"] [data-highlight],[data-framer-name="News Tabs"] [data-highlight]{transition:background-color .3s}
[data-framer-name="TabsSlot"] [data-highlight]::before,[data-framer-name="News Tabs"] [data-highlight]::before{content:"";flex:none;width:5px;height:5px;margin-right:10px;box-shadow:inset 0 0 0 1px currentColor;color:#A6A6A6;transition:background .3s,box-shadow .3s}
[data-framer-name="TabsSlot"] [data-highlight]:hover .framer-text,[data-framer-name="News Tabs"] [data-highlight]:hover .framer-text{color:#F3F3F3!important}
:is([data-framer-name="TabsSlot"],[data-framer-name="News Tabs"]) [data-framer-name="Active"]{background-color:rgba(110,75,255,.1)!important;--border-color:rgba(201,189,255,.5)!important}
:is([data-framer-name="TabsSlot"],[data-framer-name="News Tabs"]) [data-framer-name="Active"] .framer-text{color:#F3F3F3!important}
:is([data-framer-name="TabsSlot"],[data-framer-name="News Tabs"]) [data-framer-name="Active"]::before{background:#C9BDFF;box-shadow:0 0 6px rgba(110,75,255,.9)}
`),
      (be.defaultProps = {
        logo: `Nordlys`,
        logoLink: `/`,
        coords: `69.6492° N — Arctic compute`,
        links: xe,
        current: ``,
        cta: `Plan capacity`,
        ctaLink: `/contact-01`,
        items: Se,
        allPages: `All pages`,
        allPagesLink: `/`,
        bare: !1,
        rail: !0,
        showLinks: !1,
        bottomBlur: !0,
        preloader: !0,
        formStyle: !0,
        listHover: !0,
      }),
      m(be, {
        logo: { type: h.String, title: `Logo` },
        logoLink: {
          type: h.Link,
          title: `Logo link`,
          description: `Where the logo goes (default: the Overview page)`,
        },
        coords: { type: h.String, title: `Coordinates` },
        showLinks: {
          type: h.Boolean,
          title: `Show links`,
          description: `Page links in the bar (off in the original design; the Menu lists every page)`,
        },
        links: {
          type: h.Array,
          title: `Links`,
          hidden: (e) => !e.showLinks,
          control: {
            type: h.Object,
            controls: {
              label: { type: h.String, title: `Label` },
              link: { type: h.Link, title: `Link` },
            },
          },
        },
        current: {
          type: h.String,
          title: `Current`,
          description: `Label of the link to light up on this page`,
          hidden: (e) => !e.showLinks,
        },
        cta: { type: h.String, title: `Button` },
        ctaLink: { type: h.Link, title: `Button link` },
        items: {
          type: h.Array,
          title: `Menu items`,
          control: {
            type: h.Object,
            controls: {
              label: { type: h.String, title: `Label` },
              note: { type: h.String, title: `Note` },
              link: { type: h.Link, title: `Link` },
            },
          },
        },
        allPages: { type: h.String, title: `All pages` },
        allPagesLink: { type: h.Link, title: `All pages link` },
        bare: { type: h.Boolean, title: `Bare`, description: `Logo only (404 page)` },
        rail: { type: h.Boolean, title: `Scroll rail` },
        bottomBlur: {
          type: h.Boolean,
          title: `Bottom blur`,
          description: `Graduated blur along the bottom of the window`,
        },
        preloader: {
          type: h.Boolean,
          title: `Preloader`,
          description: `Split-N mark intro on page load (2.25 s, skipped with reduced motion)`,
        },
        formStyle: {
          type: h.Boolean,
          title: `Form style`,
          description: `Original underline look for every native form (no input borders, violet focus line)`,
        },
        listHover: {
          type: h.Boolean,
          title: `List hovers`,
          description: `Original hovers on the CMS rows and cards (underline, title, arrow, floating photo) and the filter tab look`,
        },
      }));
  });
export {
  b as C,
  C as S,
  S as T,
  x as _,
  oe as a,
  N as b,
  I as c,
  F as d,
  U as f,
  j as g,
  M as h,
  ye as i,
  L as l,
  O as m,
  Me as n,
  J as o,
  P as p,
  se as r,
  ae as s,
  be as t,
  R as u,
  D as v,
  y as w,
  E as x,
  T as y,
};
//# sourceMappingURL=shared-lib.W6te6cXm.mjs.map
