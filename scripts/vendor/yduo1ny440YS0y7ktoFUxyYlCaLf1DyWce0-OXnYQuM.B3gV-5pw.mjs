import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  O as a,
  P as o,
  R as s,
  _ as c,
  b as l,
  c as u,
  j as d,
  l as f,
  o as p,
  p as m,
  s as h,
  w as g,
  y as _,
} from "./react.Dlpel5Rf.mjs";
import { T as v, a as y, r as b, t as x } from "./motion.C738HobR.mjs";
import {
  B as S,
  H as C,
  M as w,
  O as T,
  P as E,
  St as D,
  T as O,
  Tt as k,
  V as A,
  _t as ee,
  a as j,
  bt as te,
  f as ne,
  ft as re,
  gt as ie,
  i as M,
  k as N,
  l as ae,
  lt as oe,
  m as se,
  mt as P,
  o as F,
  pt as ce,
  q as le,
  tt as ue,
  u as de,
  w as fe,
  x as I,
  yt as L,
} from "./framer.CKDq5C8y.mjs";
import { i as pe, n as me, r as he, t as ge } from "./g2u_JGMqL.DWxQ7lGG.mjs";
import {
  C as R,
  S as z,
  _ as _e,
  c as ve,
  d as ye,
  f as be,
  g as B,
  h as V,
  i as xe,
  l as H,
  m as Se,
  n as Ce,
  o as we,
  p as Te,
  r as Ee,
  s as De,
  t as Oe,
  u as ke,
  v as Ae,
  w as U,
  x as W,
  y as G,
} from "./shared-lib.W6te6cXm.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./nm2zECWKu.85OYCxwA.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./X0BbqEMSb.BMIfrwxe.mjs";
import { n as ze, t as Be } from "./qJzt46ANV.iC7o-JA7.mjs";
import { n as Ve, t as He } from "./Mesh.BJnCAXXu.mjs";
import {
  a as Ue,
  c as We,
  d as Ge,
  f as Ke,
  i as qe,
  l as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  s as Qe,
  t as $e,
  u as et,
} from "./YiV_09ME0.BW32W9WQ.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./RnBEBxYqd.BIBeXHa3.mjs";
import { i as at, n as ot, r as st, t as ct } from "./VG9ZrjMNG.eJrPKaJV.mjs";
import lt, { t as ut } from "./AefQsgqJYF38uAyPnHYvID82ocDLcq1LmbWcyB4Kcvc.C49Z_NSU.mjs";
function dt(e) {
  let { items: t, delay: n } = e,
    r = l(null),
    i = R(r),
    a = U(),
    o = W(),
    [u, d] = c(() => (t || []).map((e) => e.value));
  (_(() => d((t || []).map((e) => e.value)), [t]),
    _(() => {
      if (o) return;
      let e = 1.08,
        i = 72,
        c = () => new Date().toISOString().slice(11, 19),
        l = () =>
          new Date().toLocaleTimeString(`en-GB`, {
            hour: `2-digit`,
            minute: `2-digit`,
            timeZone: `Europe/Oslo`,
          }),
        u = () =>
          d((e) =>
            (t || []).map((t, n) => (t.kind === `utc` ? c() : t.kind === `clock` ? l() : e[n]))
          );
      u();
      let f = s.setInterval(u, 1e3),
        p = a
          ? 0
          : s.setInterval(() => {
              ((e = Math.min(1.11, Math.max(1.06, e + (Math.random() - 0.5) * 0.01))),
                (i = Math.min(88, Math.max(61, i + Math.round((Math.random() - 0.5) * 4)))),
                d((n) =>
                  (t || []).map((t, r) =>
                    t.kind === `pue` ? e.toFixed(2) : t.kind === `load` ? i + `%` : n[r]
                  )
                ));
            }, 2400),
        m = a
          ? 0
          : s.setTimeout(
              () => {
                r.current?.querySelectorAll(`.mono,b`).forEach((e, t) => {
                  /[0-9]{2}:[0-9]{2}/.test(e.textContent || ``) || _e(e, 700, t * 70);
                });
              },
              (n + 0.85) * 1e3
            );
      return () => {
        (s.clearInterval(f), s.clearInterval(p), s.clearTimeout(m));
      };
    }, [o, a, t, n]));
  let m = (e) => ({ animationDelay: n + e + `s` });
  return f(`div`, {
    ref: r,
    className: `nl-ro` + (o || a ? `` : ` anim`) + B(i),
    style: e.style,
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: _t } }),
      (t || []).map((e, t) =>
        f(
          `div`,
          {
            className: `ro`,
            children: [
              t > 0 && p(`i`, { className: `vl`, style: m(0.75 + t * 0.12) }),
              p(`i`, { className: `tl`, style: m(0.35 + t * 0.12) }),
              p(`span`, {
                className: `mono` + (t === 0 ? ` live` : ``),
                style: m(0.85 + t * 0.08),
                children: e.label,
              }),
              p(`b`, { style: m(0.87 + t * 0.08), children: u[t] ?? e.value }),
            ],
          },
          t
        )
      ),
    ],
  });
}
function ft(e) {
  let { clients: t } = e,
    n = l(null),
    r = l(null),
    i = R(n),
    a = U(),
    o = z(n, `0px 0px -15% 0px`),
    [u, d] = c(!1);
  (_(() => {
    let e = n.current;
    !e || W() || a || (e.getBoundingClientRect().top > s.innerHeight * 0.85 && d(!0));
  }, [a]),
    _(() => {
      let e = n.current,
        t = r.current;
      if (!e || !t) return;
      let i = () => {
        let n = Array.from(e.querySelectorAll(`.cl`));
        if (!n.length) return;
        let r = e.getBoundingClientRect(),
          i = e.clientWidth,
          a = e.clientHeight,
          o = r.width / i || 1,
          s = getComputedStyle(e).gridTemplateColumns.split(` `).length,
          c = [0.5],
          l = [0.5];
        for (let e = 0; e < s && e < n.length; e++)
          c.push((n[e].getBoundingClientRect().right - r.left) / o + 0.5);
        for (let e = 0; e < n.length; e += s)
          l.push((n[e].getBoundingClientRect().bottom - r.top) / o + 0.5);
        ((c[c.length - 1] = i + 0.5),
          (l[l.length - 1] = a + 0.5),
          t.setAttribute(`viewBox`, `0 0 ${i + 2} ${a + 2}`));
        let u = ``;
        (l.forEach((e) => (u += `<line x1="0" x2="${i + 2}" y1="${e}" y2="${e}"/>`)),
          c.forEach((e) => (u += `<line x1="${e}" x2="${e}" y1="0" y2="${a + 2}"/>`)),
          (t.innerHTML = u));
      };
      i();
      let a = new ResizeObserver(i);
      if (
        (a.observe(e),
        e.style.setProperty(`--m`, `radial-gradient(circle 1px at -999px -999px,#000,transparent)`),
        !Ae() || W())
      )
        return () => a.disconnect();
      let o = { x: -999, y: -999, on: 0, t: 0 },
        s = 0,
        c = () => {
          ((o.t += (+!!o.on - o.t) * 0.12),
            e.style.setProperty(
              `--m`,
              `radial-gradient(circle ${200 * o.t + 1}px at ${o.x + 1}px ${o.y + 1}px,#000 0%,transparent 70%)`
            ),
            (s = o.on || o.t > 0.01 ? requestAnimationFrame(c) : 0));
        },
        l = (t) => {
          let n = e.getBoundingClientRect();
          ((o.x = t.clientX - n.left),
            (o.y = t.clientY - n.top),
            (o.on = 1),
            (s ||= requestAnimationFrame(c)));
        },
        u = () => {
          ((o.on = 0), (s ||= requestAnimationFrame(c)));
        };
      return (
        e.addEventListener(`pointermove`, l),
        e.addEventListener(`pointerleave`, u),
        () => {
          (a.disconnect(),
            e.removeEventListener(`pointermove`, l),
            e.removeEventListener(`pointerleave`, u),
            cancelAnimationFrame(s));
        }
      );
    }, [t, i]));
  let m = { "--clh": q(110, 11, 150, i) + `px`, "--clf": q(15, 1.3, 19, i) + `px` };
  return f(`div`, {
    ref: n,
    className: `nl-cg` + B(i),
    style: { ...e.style, ...m },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: yt } }),
      p(`svg`, { ref: r, className: `cg-svg`, "aria-hidden": `true` }),
      (t || []).map((e, t) =>
        f(
          `div`,
          {
            className: `cl` + (u ? (o ? ` in` : ` pre`) : ``),
            style: u && o ? { transitionDelay: t * 0.04 + `s` } : void 0,
            children: [
              vt[e.icon] || vt.squares,
              p(`span`, { className: e.look || `medium`, children: e.name }),
            ],
          },
          t
        )
      ),
    ],
  });
}
function pt(e) {
  let { text: t, min: n, fluid: r, max: i, maxWidth: a } = e,
    o = l(null),
    u = R(o),
    d = U(),
    m = (t || ``).split(/(\s+)/),
    h = m.filter((e) => e.trim()).length,
    [g, v] = c(1);
  _(() => {
    if (W() || d) {
      v(1);
      return;
    }
    let e = o.current;
    if (!e) return;
    let t = 0,
      n = () => {
        t = 0;
        let n = e.getBoundingClientRect(),
          r = s.innerHeight,
          i = r * 0.82,
          a = r * 0.45;
        v(Math.max(0, Math.min(1, (i - n.top) / (i - (a - n.height)))));
      },
      r = () => {
        t ||= requestAnimationFrame(n);
      };
    return (
      n(),
      s.addEventListener(`scroll`, r, { passive: !0 }),
      s.addEventListener(`resize`, r),
      () => {
        (s.removeEventListener(`scroll`, r),
          s.removeEventListener(`resize`, r),
          cancelAnimationFrame(t));
      }
    );
  }, [d, t]);
  let y = (h - 1) * 0.1 + 0.5,
    b = 0,
    x = (e) => {
      let t = [94, 94, 94],
        n = [243, 243, 243];
      return `rgb(${t.map((t, r) => Math.round(t + (n[r] - t) * e)).join(`,`)})`;
    };
  return f(`p`, {
    ref: o,
    className: `nl-sw`,
    style: { ...e.style, fontSize: q(n, r, i, u) + `px`, maxWidth: a + `ch` },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: bt } }),
      m.map((e, t) => {
        if (!e.trim()) return e;
        let n = Math.max(0, Math.min(1, (g * y - b++ * 0.1) / 0.5));
        return p(
          `span`,
          { className: `w`, style: { color: x(n), transition: `none` }, children: e },
          t
        );
      }),
    ],
  });
}
function mt(e) {
  let { title: t, unit: n } = e,
    i = l(null),
    a = l(null),
    o = R(i),
    s = U(),
    d = z(i, `0px 0px -35% 0px`),
    [m, h] = c(-1),
    [g, _] = c({ W: 1200, H: 307 }),
    v = St,
    y = v.reduce((e, t) => e + t, 0) / v.length,
    b = Math.max(...v),
    x = q(200, 24, 320, o);
  r(() => {
    let e = a.current;
    if (!e) return;
    let t = () => _({ W: e.clientWidth || 1200, H: e.clientHeight || x });
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, [x]);
  let { W: S } = g,
    C = (e) => 6 + (g.H - 22 - 6) * (1 - e / 30),
    w = (S - 34) / v.length,
    T = (e) => {
      let t = new Date(Date.now() - (47 - e) * 36e5);
      return String(t.getHours()).padStart(2, `0`) + `:00`;
    },
    E = (e) => {
      let t = a.current.getBoundingClientRect(),
        n = t.width / S || 1;
      return Math.max(0, Math.min(47, Math.floor(((e.clientX - t.left) / n - 34) / w)));
    },
    D = m >= 0 ? 34 + m * w + w / 2 : 0,
    O = m >= 0 ? v[m] : 0,
    k = Math.round((O / y - 1) * 100);
  return f(`div`, {
    ref: i,
    className: `nl-ch` + (d || s ? ` in` : ``) + (m >= 0 ? ` hov` : ``),
    style: e.style,
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: xt } }),
      f(`div`, {
        className: `chart-head mono`,
        children: [
          p(`span`, { children: t }),
          f(`span`, {
            className: `c-stats`,
            children: [
              f(`span`, { children: [`Now `, f(`b`, { children: [`€`, v[47].toFixed(1)] })] }),
              f(`span`, { children: [`Avg `, f(`b`, { children: [`€`, y.toFixed(1)] })] }),
              f(`span`, { children: [`Peak `, f(`b`, { children: [`€`, b.toFixed(1)] })] }),
            ],
          }),
        ],
      }),
      f(`svg`, {
        ref: a,
        style: { height: x },
        tabIndex: 0,
        role: `img`,
        "aria-label": `${t}. Now €${v[47].toFixed(1)}, average €${y.toFixed(1)}, peak €${b.toFixed(1)}.`,
        onPointerMove: (e) => h(E(e)),
        onPointerDown: (e) => h(E(e)),
        onPointerLeave: () => h(-1),
        onFocus: () => m < 0 && h(47),
        onBlur: () => h(-1),
        onKeyDown: (e) => {
          ((e.key === `ArrowRight` || e.key === `ArrowLeft`) &&
            (e.preventDefault(),
            h((t) =>
              Math.max(0, Math.min(47, (t < 0 ? 47 : t) + (e.key === `ArrowRight` ? 1 : -1)))
            )),
            e.key === `Escape` && h(-1));
        },
        children: [
          [0, 10, 20, 30].map((e) =>
            f(
              `g`,
              {
                children: [
                  p(`line`, {
                    x1: 34,
                    x2: S,
                    y1: C(e),
                    y2: C(e),
                    stroke: `rgba(243,243,243,${e ? 0.07 : 0.2})`,
                  }),
                  f(`text`, { x: 0, y: C(e) + 3, children: [`€`, e] }),
                ],
              },
              e
            )
          ),
          v.map((e, t) =>
            p(
              `rect`,
              {
                className: `b`,
                style: { "--d": t, opacity: m >= 0 ? (t === m ? 1 : 0.28) : void 0 },
                x: 34 + t * w + w / 2 - 1,
                y: C(e),
                width: 2,
                height: C(0) - C(e),
                fill: t === 47 ? `#C9BDFF` : `rgba(243,243,243,${0.25 + (0.5 * e) / 30})`,
              },
              t
            )
          ),
          p(`line`, { className: `avg`, x1: 34, x2: S, y1: C(y), y2: C(y) }),
          f(`text`, {
            className: `avg-t`,
            x: S,
            y: C(y) - 6,
            textAnchor: `end`,
            children: [`avg €`, y.toFixed(1)],
          }),
          [0, 12, 24, 36, 47].map((e) =>
            p(
              `text`,
              {
                className: `xl` + (m >= 0 && Math.abs(e - m) < 1 ? ` on` : ``),
                x: 34 + e * w + w / 2,
                y: g.H - 4,
                textAnchor: `middle`,
                children: e === 47 ? `Now` : `−` + (48 - e) + `h`,
              },
              e
            )
          ),
          p(`line`, { className: `guide`, x1: D, x2: D, y1: 6, y2: C(0) }),
          p(`circle`, { className: `dot`, r: 3.2, cx: D, cy: m >= 0 ? C(O) : 0 }),
        ],
      }),
      p(`div`, {
        className: `tip` + (m >= 0 ? ` on` : ``),
        style: {
          left: D,
          top: (a.current?.offsetTop || 33) + 6,
          "--tx": D > S * 0.6 ? `calc(-100% - 12px)` : `12px`,
        },
        children:
          m >= 0 &&
          f(u, {
            children: [
              f(`span`, {
                className: `mono t1`,
                children: [m === 47 ? `Now` : 48 - m + ` h ago`, ` · `, T(m)],
              }),
              f(`b`, { children: [`€`, O.toFixed(1), p(`small`, { children: n })] }),
              f(`span`, {
                className: `mono t2` + (k < 0 ? ` lo` : ``),
                children: [k > 0 ? `+` : ``, k, `% vs 48 h avg`],
              }),
            ],
          }),
      }),
    ],
  });
}
function ht(e) {
  let { rows: t, mesh: n } = e,
    r = l(null),
    i = l(null),
    a = R(r),
    o = U(),
    u = z(r, `0px 0px -15% 0px`),
    [d, m] = c(!1),
    [h, g] = c(-1);
  (_(() => {
    let e = r.current;
    e && !W() && !o && e.getBoundingClientRect().top > s.innerHeight * 0.85 && m(!0);
  }, [o]),
    _(() => {
      if (W()) return;
      let e = 0,
        t = 0,
        n = 0,
        r = 0,
        a = 0,
        o = () => {
          ((e += (n - e) * 0.14),
            (t += (r - t) * 0.14),
            i.current && (i.current.style.transform = `translate(${e + 24}px,${t - 120}px)`),
            (a = requestAnimationFrame(o)));
        },
        c = (i) => {
          ((n = i.clientX), (r = i.clientY), e || ((e = n), (t = r)));
        };
      return (
        s.addEventListener(`mousemove`, c, { passive: !0 }),
        (a = requestAnimationFrame(o)),
        () => {
          (s.removeEventListener(`mousemove`, c), cancelAnimationFrame(a));
        }
      );
    }, []));
  let v = (e, t) => e.image?.src || [V.tensorfieldHall, V.helixFiber, V.orbitSatellite][t % 3],
    y = n
      ? `.nl-pr .peek img,.nl-pr .prow .thumb img{-webkit-mask-image:${Se};mask-image:${Se};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px}`
      : ``;
  return f(`div`, {
    ref: r,
    className: `nl-pr` + B(a),
    style: { ...e.style, "--prh": q(21, 2, 30, a) + `px` },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: Ct + y } }),
      (t || []).map((e, t) =>
        f(
          `a`,
          {
            className: `prow` + (d && !u ? ` pre` : ``),
            href: e.link || wt.find((t) => t.title === e.title)?.link || `#`,
            style: d && u ? { transitionDelay: `0s,0s,${t * 0.08}s,${t * 0.08}s` } : void 0,
            onMouseEnter: () => g(t),
            onMouseLeave: () => g(-1),
            children: [
              p(`h3`, { children: e.title }),
              p(`p`, { children: e.text }),
              p(`span`, { className: `mono`, children: e.price }),
              p(`svg`, {
                viewBox: `0 0 18 18`,
                fill: `none`,
                "aria-hidden": `true`,
                children: p(`path`, {
                  d: `M2 9h14M10 3l6 6-6 6`,
                  stroke: `currentColor`,
                  strokeWidth: `1.4`,
                }),
              }),
              p(`div`, {
                className: `thumb`,
                children: p(`img`, { src: v(e, t), alt: e.image?.alt || ``, loading: `lazy` }),
              }),
            ],
          },
          t
        )
      ),
      p(`div`, {
        ref: i,
        className: `peek` + (h >= 0 ? ` on` : ``),
        "aria-hidden": `true`,
        children: (t || []).map((e, t) =>
          p(`img`, { className: h === t ? `on` : ``, src: v(e, t), alt: `` }, t)
        ),
      }),
    ],
  });
}
var gt,
  K,
  q,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt = e(() => {
    (i(),
      h(),
      g(),
      le(),
      Te(),
      (gt = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (K = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (q = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (_t = `
.nl-ro{${K};display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%}
.nl-ro .mono{${gt};color:#A6A6A6}
.nl-ro .ro{position:relative;display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:14px 16px 16px 0;min-width:0}
.nl-ro .ro+.ro{padding-left:16px}
.nl-ro .tl{position:absolute;left:0;right:0;top:0;height:1px;background:rgba(243,243,243,.22);transform-origin:0 50%}
.nl-ro .vl{position:absolute;left:0;top:0;bottom:0;width:1px;background:rgba(243,243,243,.22);transform-origin:50% 0}
.nl-ro b{font:400 13px/1 "Geist Mono",monospace;letter-spacing:.02em;font-variant-numeric:tabular-nums slashed-zero;white-space:nowrap}
.nl-ro .live::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;margin-right:8px;vertical-align:1px;animation:nl-ro-blink 1.6s infinite}
@keyframes nl-ro-blink{50%{opacity:.25}}
@keyframes nl-ro-x{from{transform:scaleX(0)}to{transform:none}}
@keyframes nl-ro-y{from{transform:scaleY(0)}to{transform:none}}
@keyframes nl-ro-o{from{opacity:0}to{opacity:1}}
.nl-ro.anim .tl{animation:nl-ro-x 1.2s cubic-bezier(.87,0,.13,1) both}
.nl-ro.anim .vl{animation:nl-ro-y .9s cubic-bezier(.87,0,.13,1) both}
.nl-ro.anim .mono,.nl-ro.anim b{animation:nl-ro-o .3s linear both}
.nl-ro.is-lg{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-ro.is-lg .ro:nth-child(3){padding-left:0}
.nl-ro.is-lg .ro:nth-child(3) .vl{display:none}
.nl-ro.is-sm .ro{flex-direction:column;gap:6px}
@media (prefers-reduced-motion:reduce){.nl-ro *{animation:none!important}}
`),
      (dt.defaultProps = {
        items: [
          { label: `PUE · N-01`, value: `1.08`, kind: `pue` },
          { label: `Hall load`, value: `72%`, kind: `load` },
          { label: `Outside air`, value: `−4 °C`, kind: `static` },
          { label: `UTC`, value: `—`, kind: `utc` },
        ],
        delay: 0,
      }),
      N(dt, {
        items: {
          type: F.Array,
          title: `Readouts`,
          maxCount: 4,
          control: {
            type: F.Object,
            controls: {
              label: { type: F.String, title: `Label` },
              value: { type: F.String, title: `Value` },
              kind: {
                type: F.Enum,
                title: `Live`,
                options: [`static`, `pue`, `load`, `utc`, `clock`],
                optionTitles: [`Static`, `PUE drift`, `Load drift`, `UTC clock`, `Oslo clock`],
              },
            },
          },
        },
        delay: { type: F.Number, title: `Delay`, min: 0, max: 3, step: 0.05, unit: `s` },
      }),
      (vt = {
        squares: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            p(`rect`, { x: `2`, y: `2`, width: `8`, height: `8` }),
            p(`rect`, { x: `12`, y: `2`, width: `8`, height: `8`, opacity: `.45` }),
            p(`rect`, { x: `2`, y: `12`, width: `8`, height: `8`, opacity: `.45` }),
            p(`rect`, { x: `12`, y: `12`, width: `8`, height: `8` }),
          ],
        }),
        rings: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            p(`circle`, { cx: `11`, cy: `11`, r: `9` }),
            p(`circle`, { cx: `11`, cy: `11`, r: `5` }),
            p(`circle`, { cx: `11`, cy: `11`, r: `1.4`, fill: `currentColor` }),
          ],
        }),
        vee: p(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: p(`path`, { d: `M2 4h5l4 9 4-9h5l-7 15h-4z` }),
        }),
        helix: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            p(`path`, { d: `M2 11c2.5-6 5.5-6 9 0s6.5 6 9 0` }),
            p(`path`, { d: `M2 11c2.5 6 5.5 6 9 0s6.5-6 9 0`, opacity: `.5` }),
          ],
        }),
        hex: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            p(`path`, { d: `M11 2 19 6.5v9L11 20 3 15.5v-9z` }),
            p(`path`, {
              d: `M11 7 15 9.3v4.4L11 16l-4-2.3V9.3z`,
              fill: `currentColor`,
              stroke: `none`,
            }),
          ],
        }),
        nodes: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            p(`circle`, { cx: `4.5`, cy: `16`, r: `2.5` }),
            p(`circle`, { cx: `11`, cy: `5`, r: `2.5` }),
            p(`circle`, { cx: `17.5`, cy: `16`, r: `2.5` }),
            p(`path`, {
              d: `M4.5 16 11 5l6.5 11z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `1.2`,
            }),
          ],
        }),
        orbit: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          children: [
            p(`circle`, { cx: `11`, cy: `11`, r: `4`, fill: `currentColor`, stroke: `none` }),
            p(`ellipse`, {
              cx: `11`,
              cy: `11`,
              rx: `9.5`,
              ry: `4`,
              transform: `rotate(-25 11 11)`,
            }),
          ],
        }),
        cross: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            p(`rect`, { x: `2`, y: `9.5`, width: `18`, height: `3` }),
            p(`rect`, { x: `9.5`, y: `2`, width: `3`, height: `18` }),
            p(`rect`, { x: `5`, y: `5`, width: `2`, height: `2` }),
            p(`rect`, { x: `15`, y: `15`, width: `2`, height: `2` }),
          ],
        }),
      }),
      (yt = `
.nl-cg{${K};position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid rgba(243,243,243,.12);width:100%}
.nl-cg .cg-svg{position:absolute;left:-1px;top:-1px;width:calc(100% + 2px);height:calc(100% + 2px);pointer-events:none;overflow:visible;z-index:2;-webkit-mask-image:var(--m);mask-image:var(--m);filter:drop-shadow(0 0 3px rgba(124,92,255,.95)) drop-shadow(0 0 10px rgba(110,75,255,.55))}
.nl-cg .cg-svg line{stroke:#C9BDFF;stroke-width:1.2}
.nl-cg .cl{position:relative;height:var(--clh);display:flex;align-items:center;justify-content:center;gap:10px;font-size:var(--clf);letter-spacing:-.03em;color:#A6A6A6;transition:background .5s cubic-bezier(.16,1,.3,1),color .5s;opacity:1}
.nl-cg .cl:not(:nth-of-type(4n)){border-right:1px solid rgba(243,243,243,.12)}
.nl-cg .cl:nth-of-type(-n+4){border-bottom:1px solid rgba(243,243,243,.12)}
.nl-cg .cl:hover{background:radial-gradient(70% 90% at 50% 100%,rgba(110,75,255,.12),transparent 70%),#0A0A0A;color:#F3F3F3}
.nl-cg .cl svg{width:22px;height:22px;flex:none}
.nl-cg .cl .medium{font-weight:500}
.nl-cg .cl .mono{font-family:"Geist Mono",monospace;font-size:.82em;letter-spacing:.06em;text-transform:uppercase;font-weight:500}
.nl-cg .cl .light{font-weight:400;letter-spacing:-.05em}
.nl-cg.is-md{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-cg.is-md .cl{border-right:0;border-bottom:0}
.nl-cg.is-md .cl:nth-of-type(odd){border-right:1px solid rgba(243,243,243,.12)}
.nl-cg.is-md .cl:nth-of-type(-n+6){border-bottom:1px solid rgba(243,243,243,.12)}
.nl-cg .cl.pre{opacity:0}
.nl-cg .cl.in{opacity:1;transition:opacity 1s cubic-bezier(.25,.46,.45,.94),background .5s,color .5s}
`),
      (ft.defaultProps = {
        clients: [
          { name: `Tensorfield`, icon: `squares`, look: `medium` },
          { name: `quorum`, icon: `rings`, look: `light` },
          { name: `Vektor`, icon: `vee`, look: `mono` },
          { name: `Helix AI`, icon: `helix`, look: `medium` },
          { name: `Kernel`, icon: `hex`, look: `mono` },
          { name: `synapse`, icon: `nodes`, look: `light` },
          { name: `Orbit Labs`, icon: `orbit`, look: `medium` },
          { name: `Photon`, icon: `cross`, look: `mono` },
        ],
      }),
      N(ft, {
        clients: {
          type: F.Array,
          title: `Clients`,
          control: {
            type: F.Object,
            controls: {
              name: { type: F.String, title: `Name` },
              icon: { type: F.Enum, title: `Icon`, options: Object.keys(vt) },
              look: {
                type: F.Enum,
                title: `Type`,
                options: [`medium`, `light`, `mono`],
                optionTitles: [`Medium`, `Light`, `Mono`],
              },
            },
          },
        },
      }),
      (bt = `
.nl-sw{${K};margin:0;font-weight:500;letter-spacing:-.02em;line-height:1.12;color:#5E5E5E}
.nl-sw .w{transition:color .6s cubic-bezier(.16,1,.3,1)}
`),
      (pt.defaultProps = {
        text: `Training a frontier model now draws as much power as a small city. Up to forty percent of it goes to cooling, in places that are already too hot. We chose a place where the air does that work for free.`,
        min: 21,
        fluid: 2.1,
        max: 32,
        maxWidth: 30,
      }),
      N(pt, {
        text: { type: F.String, title: `Text`, displayTextArea: !0 },
        min: { type: F.Number, title: `Min`, unit: `px`, min: 10, max: 80 },
        fluid: { type: F.Number, title: `Fluid`, unit: `%`, min: 0.5, max: 10, step: 0.1 },
        max: { type: F.Number, title: `Max`, unit: `px`, min: 10, max: 120 },
        maxWidth: { type: F.Number, title: `Max width`, unit: `ch`, min: 10, max: 80 },
      }),
      (xt = `
.nl-ch{${K};position:relative;width:100%}
.nl-ch .mono{${gt}}
.nl-ch .chart-head{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px;color:#A6A6A6}
.nl-ch .c-stats{display:flex;gap:20px;flex-wrap:wrap}
.nl-ch .c-stats span{display:flex;gap:8px}
.nl-ch .c-stats b{color:#F3F3F3;font-weight:400}
.nl-ch svg{width:100%;display:block;overflow:visible;cursor:crosshair;touch-action:pan-y;outline:none}
.nl-ch svg:focus-visible{outline:1px solid rgba(201,189,255,.5);outline-offset:8px}
.nl-ch svg rect.b{transform-box:fill-box;transform-origin:50% 100%;transform:scaleY(0);transition:transform 1s cubic-bezier(.16,1,.3,1),opacity .25s;transition-delay:calc(var(--d) * 14ms),0s}
.nl-ch.in svg rect.b{transform:none}
.nl-ch .guide{stroke:rgba(201,189,255,.5);stroke-dasharray:2 3;opacity:0;transition:opacity .2s}
.nl-ch .dot{fill:#fff;opacity:0;filter:drop-shadow(0 0 5px #6E4BFF) drop-shadow(0 0 10px rgba(110,75,255,.8));transition:opacity .2s}
.nl-ch.hov .guide,.nl-ch.hov .dot{opacity:1}
.nl-ch .avg{stroke:rgba(201,189,255,.45);stroke-dasharray:4 4}
.nl-ch .avg-t{fill:#C9BDFF}
.nl-ch .xl.on{fill:#F3F3F3}
.nl-ch svg text{font-family:"Geist Mono",monospace;font-size:10px;letter-spacing:.06em;fill:#5E5E5E}
.nl-ch .tip{position:absolute;left:0;top:0;z-index:2;pointer-events:none;min-width:150px;padding:11px 12px 10px;display:flex;flex-direction:column;gap:7px;background:rgba(12,9,22,.88);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:inset 0 0 0 1px rgba(201,189,255,.22),0 18px 40px -16px rgba(0,0,0,.9);white-space:nowrap;opacity:0;transform:translate(var(--tx,12px),6px);transition:opacity .2s,transform .3s cubic-bezier(.16,1,.3,1)}
.nl-ch .tip::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF 60%,transparent)}
.nl-ch .tip.on{opacity:1;transform:translate(var(--tx,12px),0)}
.nl-ch .tip .t1{color:#A6A6A6}
.nl-ch .tip b{font:400 22px/1 "Geist Mono",monospace;letter-spacing:-.04em;color:#F3F3F3;font-feature-settings:"zero" 1}
.nl-ch .tip b small{font-size:10px;letter-spacing:.06em;color:#A6A6A6;margin-left:6px}
.nl-ch .tip .t2{color:#C9BDFF}
.nl-ch .tip .t2.lo{color:#7FD4A8}
`),
      (St = Array.from({ length: 48 }, (e, t) => {
        let n = t % 24,
          r =
            13 +
            9 * Math.sin(((n - 7) / 24) * Math.PI * 2) +
            4 * Math.sin(t * 1.3) +
            (t > 24 ? 3 : 0);
        return Math.max(3.5, +r.toFixed(1));
      })),
      (mt.defaultProps = { title: `Spot power price · NO4 · last 48 h · € / MWh`, unit: `/ MWh` }),
      N(mt, { title: { type: F.String, title: `Title` }, unit: { type: F.String, title: `Unit` } }),
      (Ct = `
.nl-pr{${K};width:100%;border-top:1px solid rgba(243,243,243,.12)}
.nl-pr .mono{${gt}}
.nl-pr .prow{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,4fr) minmax(0,2fr) 24px;gap:24px;align-items:center;padding:30px 0;border-bottom:1px solid rgba(243,243,243,.12);color:#F3F3F3;text-decoration:none;transition:color .4s,padding .6s cubic-bezier(.16,1,.3,1),opacity 1.2s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)}
.nl-pr .prow h3{margin:0;font-size:var(--prh);font-weight:400;letter-spacing:-.03em;line-height:1}
.nl-pr .prow p{margin:0;color:#A6A6A6;font-weight:400;max-width:40ch}
.nl-pr .prow .mono{color:#A6A6A6;font-size:11px}
.nl-pr .prow svg{width:18px;height:18px;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.nl-pr:hover .prow,.nl-pr:hover .prow p,.nl-pr:hover .prow .mono{color:#5E5E5E}
.nl-pr .prow:hover{color:#F3F3F3!important;padding-left:14px}
.nl-pr .prow:hover p{color:#A6A6A6!important}
.nl-pr .prow:hover svg{transform:rotate(-45deg)}
.nl-pr .prow .thumb{display:none}
.nl-pr .prow.pre{opacity:0;transform:translateY(30px)}
.nl-pr.is-md .prow{grid-template-columns:minmax(0,1fr) 24px;gap:12px 16px}
.nl-pr.is-md .prow p,.nl-pr.is-md .prow .mono{grid-column:1 / -1}
.nl-pr.is-md .prow svg{grid-column:2;grid-row:1}
.nl-pr.is-md .prow .thumb{display:block;grid-column:1 / -1;aspect-ratio:16/9;overflow:hidden;max-width:100%}
.nl-pr.is-md .prow .thumb img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.08) brightness(.85)}
.nl-pr .peek{position:fixed;left:0;top:0;width:340px;aspect-ratio:4/3;max-width:60vw;pointer-events:none;z-index:20;overflow:hidden;clip-path:inset(50% 50% 50% 50%);transition:clip-path .6s cubic-bezier(.16,1,.3,1)}
.nl-pr .peek.on{clip-path:inset(0)}
.nl-pr .peek img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .35s;filter:grayscale(1) contrast(1.1)}
.nl-pr .peek img.on{opacity:1}
.nl-pr.is-md .peek{display:none}
`),
      (wt = [
        {
          title: `Reserved clusters`,
          text: `Dedicated H200 and B300 pods from 256 GPUs, on one-to-three year terms.`,
          price: `From $1.62 / GPU-hr`,
          link: `#cta`,
          image: void 0,
        },
        {
          title: `On-demand`,
          text: `Spin up 8 to 512 GPUs in minutes. Billed per second, no commitment.`,
          price: `From $2.24 / GPU-hr`,
          link: `#cta`,
          image: void 0,
        },
        {
          title: `Sovereign tenancy`,
          text: `Private halls for governments and labs. EEA jurisdiction, your keys, your staff.`,
          price: `By arrangement`,
          link: `#cta`,
          image: void 0,
        },
      ]),
      (ht.defaultProps = { mesh: !0, rows: wt }),
      N(ht, {
        rows: {
          type: F.Array,
          title: `Rows`,
          control: {
            type: F.Object,
            controls: {
              title: { type: F.String, title: `Title` },
              text: { type: F.String, title: `Text`, displayTextArea: !0 },
              price: { type: F.String, title: `Price` },
              link: { type: F.Link, title: `Link` },
              image: { type: F.ResponsiveImage, title: `Image` },
            },
          },
        },
        mesh: { type: F.Boolean, title: `Mesh`, description: `Perforated pattern on the photos` },
      }));
  });
function Et(e) {
  let { number: t, title: n, sub: i, cases: a, mesh: o } = e,
    u = l(null),
    d = l(null),
    m = l(null),
    h = R(u),
    g = U(),
    v = W(),
    y = h <= 960,
    [b, x] = c(0),
    [S, C] = c(() => new Set(v || g ? (a || []).map((e, t) => t) : [])),
    [w, T] = c(0),
    E = a || [];
  (r(() => {
    let e = d.current;
    if (!e) return;
    let t = () => T(Math.max(0, e.scrollWidth - (e.parentElement?.clientWidth || h)));
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, [h, E.length]),
    _(() => {
      if (v) return;
      let e = u.current,
        t = d.current;
      if (!e || !t) return;
      let n = 0,
        r = () => {
          n = 0;
          let r = 0;
          if (y) r = t.scrollLeft / Math.max(1, t.scrollWidth - t.clientWidth);
          else {
            let n = e.getBoundingClientRect();
            ((r = w > 0 ? Math.max(0, Math.min(1, -n.top / w)) : 0),
              (t.style.transform = `translate3d(${-r * w}px,0,0)`));
          }
          m.current && (m.current.style.transform = `scaleX(${0.08 + 0.92 * r})`);
          let i = Math.max(0, Math.min(E.length - 1, Math.round(r * (E.length - 1))));
          x(i);
        },
        i = () => {
          n ||= requestAnimationFrame(r);
        };
      return (
        r(),
        s.addEventListener(`scroll`, i, { passive: !0 }),
        s.addEventListener(`resize`, i),
        t.addEventListener(`scroll`, i, { passive: !0 }),
        () => {
          (s.removeEventListener(`scroll`, i),
            s.removeEventListener(`resize`, i),
            t.removeEventListener(`scroll`, i),
            cancelAnimationFrame(n));
        }
      );
    }, [v, y, w, E.length]));
  let D = z(u, `0px 0px -20% 0px`);
  _(() => {
    if (!D || S.has(b)) return;
    let e = new Set(S);
    if ((e.add(b), C(e), !g && !v)) {
      let e = d.current?.querySelectorAll(`.rc-big b`)[b];
      e && _e(e, 700, 150);
    }
  }, [b, D]);
  let O = {
      "--gut": Z(16, 2.2, 32, h) + `px`,
      "--rcg": Z(24, 3, 40, h) + `px`,
      "--rcp": Z(120, 14, 220, h) + `px`,
      "--rcw": Math.min(1120, h * 0.8) + `px`,
      "--rcn": h * 0.84 + `px`,
      "--rch": Math.min(600, (v || s === void 0 ? 800 : s.innerHeight) * 0.64) + `px`,
      "--rcb": Z(22, 2.6, 36, h) + `px`,
      "--rch3": Z(20, 1.8, 26, h) + `px`,
      "--rch3m": Z(24, 3, 40, h) + `px`,
      "--rcbig": Z(56, 6, 96, h) + `px`,
      "--rccm": Z(22, 2.4, 32, h) + `px`,
      "--rclm": Z(20, 2.2, 28, h) + `px`,
    },
    k = o
      ? `.nl-rc .rc-img img{-webkit-mask-image:${Se};mask-image:${Se};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px}`
      : ``,
    A = (e) => String(e).padStart(2, `0`);
  return f(`section`, {
    ref: u,
    className: `nl-rc` + B(h),
    style: { ...e.style, ...O, height: !y && !v && w ? `calc(100vh + ${w}px)` : void 0 },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: Nt + k } }),
      f(`div`, {
        className: `pin`,
        children: [
          f(`div`, {
            className: `head`,
            children: [
              f(`div`, {
                className: `lab`,
                children: [
                  t ? p(`span`, { className: `n`, children: t }) : null,
                  p(`span`, { children: n }),
                  p(`span`, { children: i }),
                ],
              }),
              f(`div`, {
                className: `meta mono`,
                children: [
                  f(`span`, { children: [p(`b`, { children: A(b + 1) }), ` / `, A(E.length)] }),
                  p(`span`, {
                    className: `prog`,
                    children: p(`i`, { ref: m, style: { transform: `scaleX(.08)` } }),
                  }),
                ],
              }),
            ],
          }),
          p(`div`, {
            className: `track`,
            ref: d,
            children: E.map((e, t) =>
              f(
                `a`,
                {
                  href: e.link || Pt.find((t) => t.brand === e.brand)?.link || `#`,
                  className: `rc` + (t === b || y ? ` on` : ``) + (S.has(t) ? `` : ` pre`),
                  children: [
                    f(`div`, {
                      className: `rc-img`,
                      children: [
                        p(`img`, {
                          src: e.image?.src || Ft[t % 3],
                          alt: e.alt || e.image?.alt || ``,
                          loading: `lazy`,
                        }),
                        f(`span`, { className: `num mono`, children: [`Case `, A(t + 1)] }),
                        p(`span`, { className: `mk`, children: Q[e.icon] || Q.squares }),
                      ],
                    }),
                    f(`div`, {
                      className: `rc-body`,
                      children: [
                        f(`div`, {
                          className: `rc-top`,
                          children: [
                            f(`span`, {
                              className: `rc-brand`,
                              children: [Q[e.icon] || Q.squares, e.brand],
                            }),
                            p(`span`, { className: `mono`, children: e.meta }),
                          ],
                        }),
                        p(`h3`, { children: e.title }),
                        f(`div`, {
                          className: `rc-big`,
                          children: [
                            p(`b`, { children: e.big }),
                            p(`span`, { className: `mono`, children: e.bigLabel }),
                          ],
                        }),
                        p(`div`, {
                          className: `cmp`,
                          children: [
                            [e.r1Label, e.r1From, e.r1To, e.r1Before, e.r1After],
                            [e.r2Label, e.r2From, e.r2To, e.r2Before, e.r2After],
                          ].map((e, t) =>
                            f(
                              `div`,
                              {
                                className: `cmp-row mono`,
                                children: [
                                  f(`div`, {
                                    className: `hd`,
                                    children: [
                                      p(`span`, { children: e[0] }),
                                      f(`span`, {
                                        children: [f(`em`, { children: [e[1], Mt] }), e[2]],
                                      }),
                                    ],
                                  }),
                                  f(`div`, {
                                    className: `trk`,
                                    children: [
                                      p(`i`, { className: `bf`, style: { width: e[3] + `%` } }),
                                      p(`i`, { className: `af`, style: { width: e[4] + `%` } }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                        f(`span`, {
                          className: `rc-link`,
                          children: [
                            `Read case study `,
                            p(`svg`, {
                              viewBox: `0 0 14 14`,
                              fill: `none`,
                              children: p(`path`, {
                                d: `M1 7h12M8 2l5 5-5 5`,
                                stroke: `currentColor`,
                                strokeWidth: `1.2`,
                              }),
                            }),
                          ],
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
  });
}
function Dt({ value: e, run: t }) {
  let [n, r] = c(e);
  return (
    _(() => {
      if (!t) return;
      let n = parseFloat(e.replace(/,/g, ``));
      if (isNaN(n)) {
        r(e);
        return;
      }
      let i = (e.split(`.`)[1] || ``).length,
        a = performance.now(),
        o = 0,
        s = (t) => {
          let c = Math.min(1, (t - a) / 1800),
            l = c >= 1 ? 1 : 1 - 2 ** (-10 * c);
          (r((n * l).toFixed(i)), c < 1 ? (o = requestAnimationFrame(s)) : r(e));
        };
      return ((o = requestAnimationFrame(s)), () => cancelAnimationFrame(o));
    }, [t, e]),
    p(u, { children: n })
  );
}
function Ot(e) {
  let { items: t } = e,
    n = l(null),
    r = R(n),
    i = U(),
    a = z(n, `0px 0px -10% 0px`),
    [o, u] = c(!1);
  return (
    _(() => {
      let e = n.current;
      e && !W() && !i && e.getBoundingClientRect().top > s.innerHeight * 0.9 && u(!0);
    }, [i]),
    f(`div`, {
      ref: n,
      className: `nl-fg` + B(r),
      style: { ...e.style, "--fgb": Z(40, 4, 62, r) + `px` },
      children: [
        G(),
        p(`style`, { dangerouslySetInnerHTML: { __html: It } }),
        (t || []).map((e, t) =>
          f(
            `div`,
            {
              className: `fc` + (o && !a ? ` pre` : ``),
              style: o && a ? { transitionDelay: t * 0.08 + `s` } : void 0,
              children: [
                p(`span`, { className: `mono`, children: e.label }),
                f(`b`, {
                  children: [
                    o ? p(Dt, { value: e.value, run: a }) : e.value,
                    e.unit ? p(`small`, { children: e.unit }) : null,
                  ],
                }),
                p(`p`, { children: e.text }),
              ],
            },
            t
          )
        ),
      ],
    })
  );
}
function kt(e) {
  let { number: t, title: n, sub: r, voices: i, seconds: u } = e,
    d = l(null),
    m = l(null),
    h = l(null),
    g = l([]),
    v = R(d),
    y = U(),
    b = W(),
    x = i || [],
    [S, C] = c(0),
    [w, T] = c(0),
    E = l({ speak: 1, seed: x[0]?.seed || 3.1, start: 0, visible: !1 }),
    D = a(
      (e) => {
        let t = (e + x.length) % x.length;
        (C(t),
          T((e) => e + 1),
          (E.current.speak = 1),
          (E.current.seed = x[t]?.seed || 3),
          (E.current.start = performance.now()),
          g.current.forEach((e) => e && (e.style.transform = `scaleX(0)`)),
          !y && h.current && requestAnimationFrame(() => h.current && _e(h.current, 600, 0)));
      },
      [x.length, y]
    ),
    O = l(D);
  O.current = D;
  let k = l(S);
  ((k.current = S),
    _(() => {
      let e = m.current,
        t = d.current;
      if (!e || !t) return;
      let n = e.getContext(`2d`);
      if (!n) return;
      let r = (u || 8) * 1e3,
        i = 0,
        a = 0,
        o = 0,
        c = 0;
      E.current.start = performance.now();
      let l = () => {
          let t = Math.min(2, s.devicePixelRatio || 1);
          ((e.width = e.clientWidth * t),
            (e.height = e.clientHeight * t),
            n.setTransform(t, 0, 0, t, 0, 0));
        },
        f = (t) => {
          let s = E.current,
            c = o ? Math.min(0.05, (t - o) / 1e3) : 0;
          ((o = t), (a += c), (s.speak = Math.max(0.18, s.speak - c * 0.32)));
          let l = e.clientWidth,
            u = e.clientHeight;
          (n.clearRect(0, 0, l, u),
            (n.strokeStyle = `rgba(243,243,243,.12)`),
            n.setLineDash([2, 4]),
            n.beginPath(),
            n.moveTo(0, u / 2),
            n.lineTo(l, u / 2),
            n.stroke(),
            n.setLineDash([]));
          let d = n.createLinearGradient(0, 0, l, 0);
          if (
            (d.addColorStop(0, `rgba(110,75,255,0)`),
            d.addColorStop(0.2, `#6E4BFF`),
            d.addColorStop(0.6, `#C9BDFF`),
            d.addColorStop(1, `rgba(201,189,255,0)`),
            [
              [1, 1.6],
              [0.45, 1],
            ].forEach(([e, t], r) => {
              (n.beginPath(),
                (n.strokeStyle = d),
                (n.globalAlpha = r ? 0.35 : 1),
                (n.lineWidth = t));
              for (let t = 0; t <= l; t += 2) {
                let i = t / l,
                  o = Math.sin(Math.PI * i) ** 1.4,
                  c =
                    Math.sin(t * 0.045 + a * 3.1 + s.seed) * 0.55 +
                    Math.sin(t * 0.11 - a * 4.7 + s.seed * 2) * 0.3 +
                    Math.sin(t * 0.021 + a * 1.3) * 0.4,
                  d = u / 2 + c * o * u * 0.42 * s.speak * e * (r ? -1 : 1);
                t ? n.lineTo(t, d) : n.moveTo(t, d);
              }
              n.stroke();
            }),
            (n.globalAlpha = 1),
            !y && !b)
          ) {
            let e = (t - s.start) / r,
              n = g.current[k.current];
            (n && (n.style.transform = `scaleX(${Math.min(1, e)})`),
              e >= 1 && O.current(k.current + 1));
          }
          i = s.visible && !y && !b ? requestAnimationFrame(f) : 0;
        };
      l();
      let p = new ResizeObserver(() => {
        (l(), i || f(performance.now()));
      });
      p.observe(e);
      let h = new IntersectionObserver(
        ([e]) => {
          let t = performance.now();
          ((E.current.visible = e.isIntersecting),
            e.isIntersecting
              ? (c && (E.current.start += t - c),
                (c = 0),
                (i ||= ((o = 0), requestAnimationFrame(f))))
              : (c = t));
        },
        { threshold: 0.25 }
      );
      return (
        h.observe(t),
        f(performance.now()),
        () => {
          (p.disconnect(), h.disconnect(), cancelAnimationFrame(i));
        }
      );
    }, [y, b, u]));
  let A = x[S] || x[0],
    ee = l(null),
    j = { "--vwh": Z(64, 7, 96, v) + `px`, "--vqf": Z(24, 2.6, 40, v) + `px` };
  return f(`div`, {
    ref: d,
    className: `nl-vo` + (y || b ? `` : ` anim`) + B(v),
    style: { ...e.style, ...j },
    onKeyDown: (e) => {
      ((e.key === `ArrowDown` || e.key === `ArrowRight`) && D(S + 1),
        (e.key === `ArrowUp` || e.key === `ArrowLeft`) && D(S - 1));
    },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: Lt } }),
      p(`span`, { className: `xh`, style: { left: -3 }, children: `+` }),
      p(`span`, { className: `xh`, style: { right: -3 }, children: `+` }),
      f(`div`, {
        className: `left`,
        children: [
          f(`div`, {
            className: `lab`,
            children: [
              t ? p(`span`, { className: `n`, children: t }) : null,
              p(`span`, { children: n }),
              p(`span`, { children: r }),
            ],
          }),
          p(`div`, {
            className: `list`,
            role: `tablist`,
            "aria-label": n,
            children: x.map((e, t) =>
              f(
                `button`,
                {
                  type: `button`,
                  role: `tab`,
                  "aria-selected": t === S,
                  className: `it` + (t === S ? ` on` : ``),
                  onClick: () => D(t),
                  children: [
                    p(`span`, { className: `av`, children: Rt(e.name) }),
                    f(`span`, {
                      className: `nm`,
                      children: [
                        p(`span`, { children: e.name }),
                        p(`span`, { className: `mono`, children: e.company }),
                      ],
                    }),
                    p(`span`, { className: `ix mono`, children: String(t + 1).padStart(2, `0`) }),
                    p(`i`, {
                      className: `vb`,
                      ref: (e) => {
                        g.current[t] = e;
                      },
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
      f(`div`, {
        className: `right`,
        onPointerDown: (e) => (ee.current = e.clientX),
        onPointerUp: (e) => {
          if (ee.current === null) return;
          let t = e.clientX - ee.current;
          ((ee.current = null), Math.abs(t) > 50 && D(t < 0 ? S + 1 : S - 1));
        },
        children: [
          p(`canvas`, { ref: m, "aria-hidden": `true` }),
          p(
            `blockquote`,
            {
              "aria-live": `polite`,
              children: (`“` + (A?.quote || ``) + `”`)
                .split(` `)
                .map((e, t) =>
                  f(
                    o,
                    {
                      children: [
                        p(`span`, {
                          className: `vw`,
                          style: { animationDelay: t * 0.035 + `s` },
                          children: e,
                        }),
                        ` `,
                      ],
                    },
                    t
                  )
                ),
            },
            w
          ),
          f(`div`, {
            className: `vmeta mono`,
            children: [p(`span`, { children: A?.who }), p(`span`, { ref: h, children: A?.meta })],
          }),
        ],
      }),
    ],
  });
}
function At(e) {
  let { number: t, title: r, sub: i, termLabel: a, terms: u, term: d, plans: m, note: h } = e,
    g = l(null),
    v = R(g),
    y = U(),
    b = z(g, `0px 0px -15% 0px`),
    [x, S] = c(!1),
    [C, w] = c(d),
    T = `nl-term-` + n().replace(/[^a-z0-9]/gi, ``);
  (_(() => w(d), [d]),
    _(() => {
      let e = g.current;
      e && !W() && !y && e.getBoundingClientRect().top > s.innerHeight * 0.85 && S(!0);
    }, [y]));
  let E = (e) => {
      (w(e),
        !y &&
          requestAnimationFrame(() =>
            g.current?.querySelectorAll(`.price b[data-p]`).forEach((e, t) => _e(e, 520, t * 90))
          ));
    },
    D = (u || ``)
      .split(`,`)
      .map((e) => e.trim())
      .filter(Boolean),
    O = (e) => {
      let t = (e.prices || ``).split(`,`).map((e) => e.trim());
      return t.length > 1 ? t[Math.min(C, t.length - 1)] : t[0];
    };
  return f(`div`, {
    ref: g,
    className: `nl-pp` + (x && !b ? ` pre` : ``) + B(v),
    style: { ...e.style, "--ppb": Z(40, 4, 60, v) + `px` },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: zt } }),
      f(`div`, {
        className: `p-head`,
        children: [
          f(`div`, {
            className: `lab`,
            children: [
              t ? p(`span`, { className: `n`, children: t }) : null,
              p(`span`, { children: r }),
              p(`span`, { children: i }),
            ],
          }),
          f(`fieldset`, {
            children: [
              p(`legend`, { className: `mono`, children: a }),
              p(`div`, {
                className: `seg`,
                children: D.map((e, t) =>
                  f(
                    o,
                    {
                      children: [
                        p(`input`, {
                          type: `radio`,
                          name: T,
                          id: T + t,
                          value: t,
                          checked: C === t,
                          onChange: () => E(t),
                        }),
                        p(`label`, { htmlFor: T + t, children: e }),
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
      p(`div`, {
        className: `plans`,
        children: (m || []).map((e, t) => {
          let n = (e.prices || ``).includes(`,`),
            r = O(e);
          return f(
            `div`,
            {
              className: `plan` + (e.hot ? ` hot` : ``) + (x && !b ? ` pre` : ``),
              style: x && b ? { transitionDelay: `0s,${t * 0.1}s,${t * 0.1}s` } : void 0,
              children: [
                f(`div`, {
                  className: `top`,
                  children: [
                    p(`span`, { className: `mono`, children: e.name }),
                    e.badge
                      ? p(`span`, { className: `badge mono`, children: e.badge })
                      : p(`span`, { className: `mono mute`, children: e.note }),
                  ],
                }),
                f(`div`, {
                  className: `price`,
                  children: [
                    p(`b`, {
                      "data-p": n ? `1` : void 0,
                      children: /^[0-9.]+$/.test(r) ? `$` + r : r,
                    }),
                    e.unit ? p(`span`, { className: `mono`, children: e.unit }) : null,
                  ],
                }),
                p(`p`, { children: e.text }),
                p(`ul`, {
                  children: (e.features || ``)
                    .split(
                      `
`
                    )
                    .filter(Boolean)
                    .map((e, t) => p(`li`, { children: e }, t)),
                }),
                p(`div`, {
                  className: `pill-wrap`,
                  children: p(`a`, {
                    className: `pill` + (e.hot ? `` : ` ghost`),
                    href: e.link || Bt.find((t) => t.name === e.name)?.link || `#`,
                    children: p(`span`, { className: `t`, children: e.cta }),
                  }),
                }),
              ],
            },
            t
          );
        }),
      }),
      h ? p(`p`, { className: `p-note mono`, children: h }) : null,
    ],
  });
}
function jt(e) {
  let {
      legend: t,
      sizes: r,
      size: i,
      rate: a,
      email: s,
      placeholder: l,
      button: d,
      sentText: m,
      errorText: h,
    } = e,
    g = (r || ``)
      .split(`,`)
      .map((e) => parseInt(e.replace(/[^0-9]/g, ``), 10))
      .filter((e) => e > 0),
    [_, v] = c(g[i] || g[0] || 1024),
    [y, b] = c(``),
    [x, S] = c(``),
    C = `nl-gpus-` + n().replace(/[^a-z0-9]/gi, ``),
    w = (_ * 0.7 * 730 * 1.08) / 1e3,
    T = (w * 238) / 1e3;
  return f(`form`, {
    className: `nl-cp`,
    style: e.style,
    noValidate: !0,
    onSubmit: (e) => {
      (e.preventDefault(),
        S(/^\S+@\S+\.\S+$/.test(y.trim()) ? m.replace(`{gpus}`, _.toLocaleString(`en-US`)) : h));
    },
    children: [
      G(),
      p(`style`, { dangerouslySetInnerHTML: { __html: Vt } }),
      f(`fieldset`, {
        children: [
          p(`legend`, { className: `mono`, children: t }),
          p(`div`, {
            className: `seg`,
            children: g.map((e, t) =>
              f(
                o,
                {
                  children: [
                    p(`input`, {
                      type: `radio`,
                      name: C,
                      id: C + t,
                      value: e,
                      checked: _ === e,
                      onChange: () => v(e),
                    }),
                    p(`label`, { htmlFor: C + t, children: e.toLocaleString(`en-US`) }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
      f(`p`, {
        className: `est`,
        "aria-live": `polite`,
        children: [
          `About `,
          p(`b`, { children: Ht(_ * a * 730) }),
          ` a month, `,
          f(`b`, { children: [Math.round(w).toLocaleString(`en-US`), ` MWh`] }),
          ` of hydro power, and `,
          f(`b`, { children: [Math.round(T).toLocaleString(`en-US`), ` t`] }),
          ` less CO₂ than an average EU site.`,
        ],
      }),
      s
        ? f(u, {
            children: [
              f(`div`, {
                className: `field`,
                children: [
                  p(`label`, { htmlFor: C + `-email`, className: `sr`, children: `Work email` }),
                  p(`input`, {
                    id: C + `-email`,
                    type: `email`,
                    placeholder: l,
                    autoComplete: `email`,
                    value: y,
                    onChange: (e) => b(e.target.value),
                  }),
                  p(`button`, { type: `submit`, children: d }),
                ],
              }),
              p(`span`, { className: `msg mono`, role: `status`, children: x }),
            ],
          })
        : null,
    ],
  });
}
var J,
  Y,
  X,
  Z,
  Mt,
  Q,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut = e(() => {
    (i(),
      h(),
      g(),
      le(),
      Te(),
      (J = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (Y = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (X = `rgba(243,243,243,.12)`),
      (Z = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (Mt = p(`svg`, {
        viewBox: `0 0 10 10`,
        width: `9`,
        height: `9`,
        fill: `none`,
        "aria-hidden": `true`,
        style: { display: `inline-block`, verticalAlign: `middle`, margin: `0 4px` },
        children: p(`path`, {
          d: `M1 5h8M5.5 1.5 9 5 5.5 8.5`,
          stroke: `currentColor`,
          strokeWidth: `1`,
        }),
      })),
      (Q = {
        squares: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            p(`rect`, { x: `2`, y: `2`, width: `8`, height: `8` }),
            p(`rect`, { x: `12`, y: `2`, width: `8`, height: `8`, opacity: `.45` }),
            p(`rect`, { x: `2`, y: `12`, width: `8`, height: `8`, opacity: `.45` }),
            p(`rect`, { x: `12`, y: `12`, width: `8`, height: `8` }),
          ],
        }),
        helix: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            p(`path`, { d: `M2 11c2.5-6 5.5-6 9 0s6.5 6 9 0` }),
            p(`path`, { d: `M2 11c2.5 6 5.5 6 9 0s6.5-6 9 0`, opacity: `.5` }),
          ],
        }),
        orbit: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          children: [
            p(`circle`, { cx: `11`, cy: `11`, r: `4`, fill: `currentColor`, stroke: `none` }),
            p(`ellipse`, {
              cx: `11`,
              cy: `11`,
              rx: `9.5`,
              ry: `4`,
              transform: `rotate(-25 11 11)`,
            }),
          ],
        }),
        vee: p(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: p(`path`, { d: `M2 4h5l4 9 4-9h5l-7 15h-4z` }),
        }),
        hex: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
          children: [
            p(`path`, { d: `M11 2 19 6.5v9L11 20 3 15.5v-9z` }),
            p(`path`, {
              d: `M11 7 15 9.3v4.4L11 16l-4-2.3V9.3z`,
              fill: `currentColor`,
              stroke: `none`,
            }),
          ],
        }),
        cross: f(`svg`, {
          viewBox: `0 0 22 22`,
          fill: `currentColor`,
          children: [
            p(`rect`, { x: `2`, y: `9.5`, width: `18`, height: `3` }),
            p(`rect`, { x: `9.5`, y: `2`, width: `3`, height: `18` }),
            p(`rect`, { x: `5`, y: `5`, width: `2`, height: `2` }),
            p(`rect`, { x: `15`, y: `15`, width: `2`, height: `2` }),
          ],
        }),
      }),
      (Nt = `
.nl-rc{${Y};position:relative;width:100%}
.nl-rc .mono{${J}}
.nl-rc .pin{position:sticky;top:0;height:100vh;min-height:640px;display:flex;flex-direction:column;justify-content:center;gap:var(--rcg);overflow:hidden}
.nl-rc .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;padding-inline:var(--gut)}
.nl-rc .lab{display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em}
.nl-rc .lab .n{align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat}
.nl-rc .lab span:last-child{color:#A6A6A6}
.nl-rc .meta{display:flex;align-items:center;gap:16px;color:#A6A6A6;font-variant-numeric:tabular-nums}
.nl-rc .meta b{color:#F3F3F3;font-weight:400}
.nl-rc .prog{width:var(--rcp);height:1px;background:${X};position:relative;overflow:hidden}
.nl-rc .prog i{position:absolute;inset:0;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);transform-origin:0 50%}
.nl-rc .track{display:flex;gap:24px;padding-inline:var(--gut);will-change:transform}
.nl-rc .rc{flex:0 0 var(--rcw);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);height:var(--rch);border:1px solid ${X};transition:opacity .8s cubic-bezier(.16,1,.3,1),border-color .8s;text-decoration:none;color:inherit}
.nl-rc .rc:not(.on){opacity:.35}
.nl-rc .rc.on{border-color:rgba(243,243,243,.16)}
.nl-rc .rc-img{position:relative;overflow:hidden;border-right:1px solid ${X};min-height:0}
.nl-rc .rc-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08) brightness(.72);transform:scale(1.04);transition:transform 1.6s cubic-bezier(.16,1,.3,1),filter 1.2s cubic-bezier(.16,1,.3,1)}
.nl-rc .rc.on .rc-img img{transform:none;filter:grayscale(1) contrast(1.1) brightness(.8)}
.nl-rc .rc-img::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),transparent 30%,transparent 60%,rgba(0,0,0,.65))}
.nl-rc .rc-img .num{position:absolute;left:18px;top:16px;z-index:1;color:#A6A6A6}
.nl-rc .rc-img .mk{position:absolute;left:18px;bottom:18px;z-index:1;width:34px;height:34px;color:#F3F3F3}
.nl-rc .rc-body{display:flex;flex-direction:column;padding:var(--rcb);min-width:0}
.nl-rc .rc-top{display:flex;justify-content:space-between;align-items:center;gap:12px}
.nl-rc .rc-brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.nl-rc .rc-brand svg{width:18px;height:18px;flex:none}
.nl-rc .rc-top .mono{color:#A6A6A6}
.nl-rc .rc-body h3{margin:var(--rch3m) 0 0;font-size:var(--rch3);font-weight:400;letter-spacing:-.03em;line-height:1.15;max-width:22ch;text-wrap:balance}
.nl-rc .rc-big{margin-top:auto;display:flex;flex-direction:column;gap:10px}
.nl-rc .rc-big b{font-weight:300;font-size:var(--rcbig);line-height:.85;letter-spacing:-.06em;font-variant-numeric:tabular-nums}
.nl-rc .rc-big span{color:#A6A6A6}
.nl-rc .cmp{display:flex;flex-direction:column;gap:16px;margin-top:var(--rccm);padding-top:18px;border-top:1px solid ${X}}
.nl-rc .cmp-row{display:flex;flex-direction:column;gap:9px}
.nl-rc .cmp-row .hd{display:flex;justify-content:space-between;gap:12px}
.nl-rc .cmp-row .hd span:first-child{color:#A6A6A6}
.nl-rc .cmp-row .hd span:last-child{color:#F3F3F3;font-variant-numeric:tabular-nums}
.nl-rc .cmp-row .hd em{font-style:normal;color:#5E5E5E}
.nl-rc .trk{position:relative;height:2px;background:rgba(243,243,243,.08)}
.nl-rc .trk .bf{position:absolute;left:0;top:0;bottom:0;background:rgba(243,243,243,.28)}
.nl-rc .trk .af{position:absolute;left:0;top:-1px;bottom:-1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 10px rgba(110,75,255,.7);transform-origin:0 50%;transition:transform 1.3s cubic-bezier(.16,1,.3,1) .15s}
.nl-rc .rc.pre .trk .af{transform:scaleX(0)}
.nl-rc .rc-link{margin-top:var(--rclm);align-self:flex-start;display:inline-flex;align-items:center;gap:10px;font-size:14px;position:relative;padding-bottom:6px}
.nl-rc .rc-link::before,.nl-rc .rc-link::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px}
.nl-rc .rc-link::before{background:#5E5E5E}
.nl-rc .rc-link::after{background:linear-gradient(90deg,#6E4BFF,#C9BDFF);transform:scaleX(0);transform-origin:100% 50%;transition:transform .7s cubic-bezier(.16,1,.3,1)}
.nl-rc .rc:hover .rc-link::after{transform:scaleX(1);transform-origin:0 50%}
.nl-rc .rc-link svg{width:13px;height:13px;transition:transform .5s cubic-bezier(.16,1,.3,1)}
.nl-rc .rc:hover .rc-link svg{transform:translateX(4px)}
.nl-rc.is-md .pin{position:relative;height:auto;min-height:0;display:block}
.nl-rc.is-md .head{padding-bottom:28px}
.nl-rc.is-md .track{overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:4px;transform:none!important}
.nl-rc.is-md .track::-webkit-scrollbar{display:none}
.nl-rc.is-md .rc{flex-basis:var(--rcn);height:auto;grid-template-columns:1fr;scroll-snap-align:start}
.nl-rc.is-md .rc-big{margin-top:28px}
.nl-rc.is-md .rc-img{aspect-ratio:4/3;border-right:0;border-bottom:1px solid ${X}}
.nl-rc.is-md .rc:not(.on){opacity:1}
.nl-rc.is-sm .head{flex-direction:column;align-items:flex-start}
`),
      (Pt = [
        {
          brand: `Tensorfield`,
          icon: `squares`,
          meta: `2026 · Pre-training`,
          title: `A 70B foundation model, trained in 19 days on 4,096 H200s.`,
          big: `−34%`,
          bigLabel: `Energy cost vs. previous region`,
          r1Label: `Energy / run`,
          r1From: `€1.42M`,
          r1To: `€0.94M`,
          r1Before: 100,
          r1After: 66,
          r2Label: `Time to train`,
          r2From: `24 d`,
          r2To: `19 d`,
          r2Before: 100,
          r2After: 79,
          link: `/case-studies/tensorfield`,
          image: void 0,
          alt: `Overhead cable trays above server racks`,
        },
        {
          brand: `Helix AI`,
          icon: `helix`,
          meta: `2026 · Inference`,
          title: `A protein-folding inference fleet moved north without a code change.`,
          big: `−61%`,
          bigLabel: `CO₂ per million queries`,
          r1Label: `CO₂ / M queries`,
          r1From: `41 kg`,
          r1To: `16 kg`,
          r1Before: 100,
          r1After: 39,
          r2Label: `p50 latency`,
          r2From: `38.0 ms`,
          r2To: `40.1 ms`,
          r2Before: 95,
          r2After: 100,
          link: `/case-studies/helix-ai`,
          image: void 0,
          alt: `Network switch with fibre connections`,
        },
        {
          brand: `Orbit Labs`,
          icon: `orbit`,
          meta: `2025 · Vision`,
          title: `Petabyte-scale satellite vision, cooled by the fjord.`,
          big: `0 L`,
          bigLabel: `Water used for cooling, per month`,
          r1Label: `Water / month`,
          r1From: `3.1 ML`,
          r1To: `0 L`,
          r1Before: 100,
          r1After: 1,
          r2Label: `Throughput`,
          r2From: `0.8 PB`,
          r2To: `1.2 PB`,
          r2Before: 67,
          r2After: 100,
          link: `/case-studies/orbit-labs`,
          image: void 0,
          alt: `Silicon wafer with chip dies`,
        },
      ]),
      (Ft = [V.tensorfieldHall, V.helixFiber, V.orbitSatellite]),
      (Et.defaultProps = {
        number: `04`,
        title: `Case studies`,
        sub: `Built on cold compute`,
        cases: Pt,
        mesh: !0,
      }),
      N(Et, {
        number: { type: F.String, title: `Number` },
        title: { type: F.String, title: `Title` },
        sub: { type: F.String, title: `Subtitle` },
        cases: {
          type: F.Array,
          title: `Cases`,
          control: {
            type: F.Object,
            controls: {
              brand: { type: F.String, title: `Brand` },
              icon: { type: F.Enum, title: `Icon`, options: Object.keys(Q) },
              meta: { type: F.String, title: `Meta` },
              title: { type: F.String, title: `Title`, displayTextArea: !0 },
              big: { type: F.String, title: `Big number` },
              bigLabel: { type: F.String, title: `Big label` },
              r1Label: { type: F.String, title: `Bar 1` },
              r1From: { type: F.String, title: `Bar 1 before` },
              r1To: { type: F.String, title: `Bar 1 after` },
              r1Before: { type: F.Number, title: `Bar 1 old %`, min: 0, max: 100 },
              r1After: { type: F.Number, title: `Bar 1 new %`, min: 0, max: 100 },
              r2Label: { type: F.String, title: `Bar 2` },
              r2From: { type: F.String, title: `Bar 2 before` },
              r2To: { type: F.String, title: `Bar 2 after` },
              r2Before: { type: F.Number, title: `Bar 2 old %`, min: 0, max: 100 },
              r2After: { type: F.Number, title: `Bar 2 new %`, min: 0, max: 100 },
              link: { type: F.Link, title: `Link` },
              image: { type: F.ResponsiveImage, title: `Image` },
              alt: { type: F.String, title: `Alt text` },
            },
          },
        },
        mesh: { type: F.Boolean, title: `Mesh` },
      }),
      (It = `
.nl-fg{${Y};display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid ${X};width:100%}
.nl-fg .mono{${J};color:#A6A6A6}
.nl-fg .fc{padding:22px 22px 28px 0;display:flex;flex-direction:column;gap:56px;min-width:0;transition:opacity 1.1s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1)}
.nl-fg .fc+.fc{padding-left:22px;border-left:1px solid ${X}}
.nl-fg .fc b{font-family:"Geist Mono",monospace;font-weight:400;font-size:var(--fgb);letter-spacing:-.06em;font-feature-settings:"zero" 1;line-height:.9;font-variant-numeric:tabular-nums}
.nl-fg .fc b small{font-size:.38em;letter-spacing:-.01em;color:#A6A6A6;margin-left:.12em}
.nl-fg .fc p{margin:0;color:#A6A6A6;font-weight:400;font-size:14px;max-width:26ch;letter-spacing:.02em}
.nl-fg .fc.pre{opacity:0;transform:translateY(24px)}
.nl-fg.is-md{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-fg.is-md .fc:nth-child(3){padding-left:0;border-left:0}
.nl-fg.is-md .fc:nth-child(n+3){border-top:1px solid ${X}}
.nl-fg.is-sm{grid-template-columns:1fr}
.nl-fg.is-sm .fc,.nl-fg.is-sm .fc+.fc{padding-left:0;border-left:0}
.nl-fg.is-sm .fc+.fc{border-top:1px solid ${X}}
.nl-fg.is-sm .fc{gap:28px}
`),
      (Ot.defaultProps = {
        items: [
          {
            label: `Annual PUE`,
            value: `1.09`,
            unit: ``,
            text: `Average power usage effectiveness across 2025, metered hourly.`,
          },
          {
            label: `Renewable share`,
            value: `98.7`,
            unit: `%`,
            text: `Hydro and wind from the NO4 grid, matched by the hour.`,
          },
          {
            label: `Water used`,
            value: `0`,
            unit: `L`,
            text: `Free-air cooling. No evaporative towers, no chilled water loops.`,
          },
          {
            label: `Heat reused`,
            value: `41`,
            unit: `GWh`,
            text: `Delivered to Narvik's district heating network last winter.`,
          },
        ],
      }),
      N(Ot, {
        items: {
          type: F.Array,
          title: `Figures`,
          control: {
            type: F.Object,
            controls: {
              label: { type: F.String, title: `Label` },
              value: { type: F.String, title: `Value` },
              unit: { type: F.String, title: `Unit` },
              text: { type: F.String, title: `Text`, displayTextArea: !0 },
            },
          },
        },
      }),
      (Lt = `
.nl-vo{${Y};position:relative;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;border-top:1px solid ${X};padding-top:22px;width:100%}
.nl-vo .mono{${J}}
.nl-vo .xh{position:absolute;top:-6px;font:300 11px/1 "Geist Mono",monospace;color:#A6A6A6;pointer-events:none}
.nl-vo .left{grid-column:1 / span 4;display:flex;flex-direction:column;gap:40px}
.nl-vo .lab{display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em}
.nl-vo .lab .n{align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat}
.nl-vo .lab span:last-child{color:#A6A6A6}
.nl-vo .list{display:flex;flex-direction:column;border-top:1px solid ${X}}
.nl-vo .it{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:14px;align-items:center;padding:14px 0;border:0;border-bottom:1px solid ${X};background:none;color:#A6A6A6;text-align:left;font:inherit;cursor:pointer;transition:color .4s}
.nl-vo .it:hover,.nl-vo .it.on{color:#F3F3F3}
.nl-vo .it .av{width:40px;height:40px;display:grid;place-items:center;box-shadow:inset 0 0 0 1px rgba(243,243,243,.25);font:400 11px/1 "Geist Mono",monospace;letter-spacing:.04em;transition:box-shadow .4s,background .4s}
.nl-vo .it.on .av{box-shadow:inset 0 0 0 1px rgba(201,189,255,.6);background:rgba(110,75,255,.14)}
.nl-vo .it .nm{display:flex;flex-direction:column;gap:3px;font-size:15px}
.nl-vo .it .nm .mono{color:#5E5E5E}
.nl-vo .it.on .nm .mono{color:#A6A6A6}
.nl-vo .it .ix{color:#5E5E5E}
.nl-vo .it .vb{position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,#6E4BFF,#C9BDFF);box-shadow:0 0 8px rgba(110,75,255,.6);transform-origin:0 50%;transform:scaleX(0)}
.nl-vo .right{grid-column:6 / span 7;display:flex;flex-direction:column;gap:28px;min-width:0;touch-action:pan-y}
.nl-vo canvas{display:block;width:100%;height:var(--vwh)}
.nl-vo blockquote{margin:0;font-size:var(--vqf);line-height:1.12;letter-spacing:-.03em;font-weight:400;text-wrap:balance;min-height:3.4em}
.nl-vo blockquote .vw{display:inline-block}
@keyframes nl-vo-in{from{opacity:0;filter:blur(10px);transform:translateY(8px)}to{opacity:1;filter:blur(0);transform:none}}
.nl-vo.anim blockquote .vw{animation:nl-vo-in .9s cubic-bezier(.215,.61,.355,1) both}
.nl-vo .vmeta{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#A6A6A6;border-top:1px solid ${X};padding-top:14px}
.nl-vo.is-md .left,.nl-vo.is-md .right{grid-column:1 / -1}
.nl-vo.is-md .left{gap:24px}
`),
      (Rt = (e) =>
        e
          .split(/\s+/)
          .map((e) => e[0] || ``)
          .join(``)
          .slice(0, 2)
          .toUpperCase()),
      (kt.defaultProps = {
        number: `06`,
        title: `Testimonials`,
        sub: `Voices from N-01`,
        seconds: 8,
        voices: [
          {
            name: `Amara Okafor`,
            company: `Tensorfield`,
            quote: `We moved pre-training to Narvik in March. Same throughput, and our energy bill fell by a third.`,
            who: `Amara Okafor, Head of Infrastructure, Tensorfield`,
            meta: `Recorded in Oslo · Mar 2026`,
            seed: 3.1,
          },
          {
            name: `Jonas Weber`,
            company: `Helix AI`,
            quote: `The cluster was racked, burned in and running our jobs eleven days after we signed. I haven’t seen that anywhere else.`,
            who: `Jonas Weber, CTO, Helix AI`,
            meta: `Recorded in London · May 2026`,
            seed: 5.7,
          },
          {
            name: `Marta Sørensen`,
            company: `Synapse`,
            quote: `Sovereign tenancy let us keep patient data inside the EEA and still train on the newest hardware.`,
            who: `Marta Sørensen, CTO, Synapse`,
            meta: `Recorded in Copenhagen · Jul 2026`,
            seed: 8.3,
          },
          {
            name: `Erik Halvorsen`,
            company: `Orbit Labs`,
            quote: `Their live PUE feed is the first sustainability number our board actually asks about.`,
            who: `Erik Halvorsen, CFO, Orbit Labs`,
            meta: `Recorded in Lisbon · Sep 2026`,
            seed: 2.2,
          },
        ],
      }),
      N(kt, {
        number: { type: F.String, title: `Number` },
        title: { type: F.String, title: `Title` },
        sub: { type: F.String, title: `Subtitle` },
        voices: {
          type: F.Array,
          title: `Voices`,
          control: {
            type: F.Object,
            controls: {
              name: { type: F.String, title: `Name` },
              company: { type: F.String, title: `Company` },
              quote: { type: F.String, title: `Quote`, displayTextArea: !0 },
              who: { type: F.String, title: `Credit` },
              meta: { type: F.String, title: `Meta` },
              seed: { type: F.Number, title: `Wave seed`, min: 0, max: 10, step: 0.1 },
            },
          },
        },
        seconds: {
          type: F.Number,
          title: `Seconds`,
          min: 3,
          max: 20,
          unit: `s`,
          description: `Time per voice`,
        },
      }),
      (zt = `
.nl-pp{${Y};width:100%}
.nl-pp .mono{${J}}
.nl-pp .p-head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:40px}
.nl-pp .lab{display:flex;flex-direction:column;gap:2px;letter-spacing:-.005em}
.nl-pp .lab .n{align-self:flex-start;font:400 9px/1 "Geist Mono",monospace;letter-spacing:.14em;color:#A6A6A6;margin-bottom:12px;padding-right:34px;background:linear-gradient(90deg,#6E4BFF,rgba(201,189,255,.6) 60%,transparent) right 50%/24px 1px no-repeat}
.nl-pp .lab span:last-child{color:#A6A6A6}
.nl-pp .lab{transition:opacity 1.1s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1)}
.nl-pp.pre .lab{opacity:0;transform:translateY(20px)}
.nl-pp fieldset{border:0;margin:0;padding:0;min-width:0}
.nl-pp legend{padding:0;margin-bottom:10px;color:#A6A6A6}
.nl-pp .seg{display:flex;flex-wrap:wrap;gap:6px}
.nl-pp .seg input{position:absolute;opacity:0;pointer-events:none}
.nl-pp .seg label{height:32px;padding:0 12px;display:inline-flex;align-items:center;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(243,243,243,.25);font:400 11px/1 "Geist Mono",monospace;letter-spacing:.06em;cursor:pointer;transition:background .3s,color .3s,box-shadow .3s;background:rgba(0,0,0,.25)}
.nl-pp .seg label:hover{box-shadow:inset 0 0 0 1px #F3F3F3}
.nl-pp .seg input:checked+label{background:#F3F3F3;color:#000;box-shadow:none}
.nl-pp .seg input:focus-visible+label{outline:1px solid #F3F3F3;outline-offset:3px}
.nl-pp .plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid ${X}}
.nl-pp .plan{position:relative;display:flex;flex-direction:column;gap:26px;padding:28px 26px 26px;min-width:0;transition:background .5s cubic-bezier(.16,1,.3,1),opacity 1.2s cubic-bezier(.16,1,.3,1),transform 1.2s cubic-bezier(.16,1,.3,1)}
.nl-pp .plan+.plan{border-left:1px solid ${X}}
.nl-pp .plan:hover{background:radial-gradient(80% 60% at 50% 0%,rgba(110,75,255,.10),transparent 70%)}
.nl-pp .plan.hot::before{content:"";position:absolute;left:-1px;right:-1px;top:-1px;height:1px;background:linear-gradient(90deg,transparent,#C9BDFF 30%,#6E4BFF 70%,transparent);box-shadow:0 0 12px 1px rgba(110,75,255,.7)}
.nl-pp .plan .top{display:flex;justify-content:space-between;align-items:center;gap:12px}
.nl-pp .plan .top .mono:first-child{color:#F3F3F3}
.nl-pp .plan .top .mute{color:#A6A6A6}
.nl-pp .badge{padding:5px 7px;box-shadow:inset 0 0 0 1px rgba(201,189,255,.45);color:#C9BDFF}
.nl-pp .price{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.nl-pp .price b{font:400 var(--ppb)/1 "Geist Mono",monospace;letter-spacing:-.06em;font-feature-settings:"zero" 1;font-variant-numeric:tabular-nums}
.nl-pp .price span{color:#A6A6A6}
.nl-pp .plan>p{margin:0;color:#A6A6A6;font-weight:400;font-size:15px;max-width:34ch}
.nl-pp .plan ul{list-style:none;margin:0;padding:18px 0 0;border-top:1px solid ${X};display:flex;flex-direction:column;gap:11px;font-size:14px;font-weight:400}
.nl-pp .plan li{display:flex;gap:12px;align-items:baseline}
.nl-pp .plan li::before{content:"";width:5px;height:5px;background:#F3F3F3;flex:none;transform:translateY(-2px)}
.nl-pp .plan .pill-wrap{margin-top:auto}
.nl-pp .p-note{margin-top:14px;color:#5E5E5E}
.nl-pp .plan.pre{opacity:0;transform:translateY(30px)}
.nl-pp.is-md .plans{grid-template-columns:1fr}
.nl-pp.is-md .plan+.plan{border-left:0;border-top:1px solid ${X}}
.nl-pp .pill{position:relative;display:flex;justify-content:space-between;align-items:center;gap:10px;height:38px;padding:0 0 0 12px;border-radius:2px;white-space:nowrap;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;text-decoration:none;color:#000;background:linear-gradient(#000,#000) 0 0/0% 100% no-repeat,#F3F3F3;box-shadow:inset 0 0 0 1px #F3F3F3;transition:background-size .6s cubic-bezier(.16,1,.3,1),color .4s cubic-bezier(.16,1,.3,1)}
.nl-pp .pill::before{content:"";width:5px;height:5px;background:currentColor;flex:none}
.nl-pp .pill .t{margin-right:auto}
.nl-pp .pill::after{content:"";width:12px;box-sizing:content-box;align-self:stretch;margin-left:6px;padding:0 13px;border-left:1px solid currentColor;opacity:.75;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23000' stroke-width='1.1'/%3E%3C/svg%3E") center/12px 12px no-repeat;transition:padding .5s cubic-bezier(.16,1,.3,1)}
.nl-pp .pill:hover{background-size:100% 100%,auto;color:#F3F3F3}
.nl-pp .pill:hover::after,.nl-pp .pill.ghost::after{padding:0 9px 0 15px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23F3F3F3' stroke-width='1.1'/%3E%3C/svg%3E")}
.nl-pp .pill.ghost{color:#F3F3F3;background:linear-gradient(#F3F3F3,#F3F3F3) 0 0/0% 100% no-repeat,rgba(0,0,0,.2);box-shadow:inset 0 0 0 1px rgba(243,243,243,.3)}
.nl-pp .pill.ghost::after{padding:0 13px;border-left-color:rgba(243,243,243,.3)}
.nl-pp .pill.ghost:hover{color:#000;background-size:100% 100%,auto;box-shadow:inset 0 0 0 1px #F3F3F3}
.nl-pp .pill.ghost:hover::after{padding:0 9px 0 15px;border-left-color:rgba(0,0,0,.35);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23000' stroke-width='1.1'/%3E%3C/svg%3E")}
`),
      (Bt = [
        {
          name: `Explore`,
          note: `8 – 512 GPUs`,
          badge: ``,
          prices: `2.24, 2.04, 1.92`,
          unit: `/ GPU-hr`,
          text: `For research teams, fine-tunes and evaluation runs.`,
          features: `Per-second billing
Shared 400 Gb/s fabric
Checkpoint storage up to 2× model size
Email support, next business day`,
          cta: `Start exploring`,
          link: `#cta`,
          hot: !1,
        },
        {
          name: `Scale`,
          note: ``,
          badge: `Most chosen`,
          prices: `1.98, 1.84, 1.62`,
          unit: `/ GPU-hr`,
          text: `Dedicated pods for production training, 256 to 16,384 GPUs.`,
          features: `Dedicated 3.2 Tb/s InfiniBand
Deadline guarantees with credits
Live PUE and carbon reports
Named engineer, 4-hour response`,
          cta: `Reserve a pod`,
          link: `#cta`,
          hot: !0,
        },
        {
          name: `Sovereign`,
          note: `Private hall`,
          badge: ``,
          prices: `Custom`,
          unit: ``,
          text: `Isolated halls under EEA jurisdiction for governments and labs.`,
          features: `Dedicated hall and power feed
Customer-held keys, on-site staff option
ISO 27001 · Tier III
24/7 incident line`,
          cta: `Talk to sales`,
          link: `#cta`,
          hot: !1,
        },
      ]),
      (At.defaultProps = {
        number: `07`,
        title: `Pricing`,
        sub: `Per H200 GPU-hour`,
        termLabel: `Term`,
        terms: `On-demand, 1 year, 3 years`,
        term: 1,
        note: `Prices exclude VAT. B300 pricing on request. Power and cooling included.`,
        plans: Bt,
      }),
      N(At, {
        number: { type: F.String, title: `Number` },
        title: { type: F.String, title: `Title` },
        sub: { type: F.String, title: `Subtitle` },
        termLabel: { type: F.String, title: `Term label` },
        terms: { type: F.String, title: `Terms`, description: `Comma separated` },
        term: {
          type: F.Number,
          title: `Default term`,
          min: 0,
          max: 5,
          step: 1,
          description: `0 = first`,
        },
        plans: {
          type: F.Array,
          title: `Plans`,
          control: {
            type: F.Object,
            controls: {
              name: { type: F.String, title: `Name` },
              note: { type: F.String, title: `Note` },
              badge: { type: F.String, title: `Badge` },
              prices: {
                type: F.String,
                title: `Prices`,
                description: `One per term, comma separated, or text`,
              },
              unit: { type: F.String, title: `Unit` },
              text: { type: F.String, title: `Text`, displayTextArea: !0 },
              features: {
                type: F.String,
                title: `Features`,
                displayTextArea: !0,
                description: `One per line`,
              },
              cta: { type: F.String, title: `Button` },
              link: { type: F.Link, title: `Link` },
              hot: { type: F.Boolean, title: `Highlight` },
            },
          },
        },
        note: { type: F.String, title: `Note` },
      }),
      (Vt = `
.nl-cp{${Y};position:relative;display:flex;flex-direction:column;gap:18px;width:100%}
.nl-cp .mono{${J}}
.nl-cp fieldset{border:0;margin:0;padding:0;min-width:0}
.nl-cp legend{padding:0;margin-bottom:10px;color:#A6A6A6}
.nl-cp .seg{display:flex;flex-wrap:wrap;gap:6px}
.nl-cp .seg input{position:absolute;opacity:0;pointer-events:none}
.nl-cp .seg label{height:32px;padding:0 12px;display:inline-flex;align-items:center;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(243,243,243,.25);font:400 11px/1 "Geist Mono",monospace;letter-spacing:.06em;cursor:pointer;transition:background .3s,color .3s,box-shadow .3s;font-variant-numeric:tabular-nums;background:rgba(0,0,0,.25);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.nl-cp .seg label:hover{box-shadow:inset 0 0 0 1px #F3F3F3}
.nl-cp .seg input:checked+label{background:#F3F3F3;color:#000;box-shadow:none}
.nl-cp .seg input:focus-visible+label{outline:1px solid #F3F3F3;outline-offset:3px}
.nl-cp .est{margin:0;font-size:14px;color:rgba(243,243,243,.75);font-weight:400;font-variant-numeric:tabular-nums;max-width:40ch}
.nl-cp .est b{color:#F3F3F3;font-weight:500}
.nl-cp .field{display:flex;align-items:center;gap:8px;border-bottom:1px solid #F3F3F3;padding-bottom:8px}
.nl-cp .field input{flex:1;min-width:0;background:transparent;border:0;color:#F3F3F3;font:400 16px "Inter Tight",sans-serif;outline:none;padding:0;height:36px}
.nl-cp .field input::placeholder{color:rgba(243,243,243,.45)}
.nl-cp .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.nl-cp .msg{position:absolute;left:0;top:calc(100% + 10px);color:#D9D9D9}
.nl-cp button{position:relative;display:inline-flex;align-items:center;gap:10px;height:38px;padding:0 0 0 12px;border-radius:2px;border:0;cursor:pointer;white-space:nowrap;font:400 11px/1 "Geist Mono",monospace;letter-spacing:.09em;text-transform:uppercase;color:#000;background:linear-gradient(#000,#000) 0 0/0% 100% no-repeat,#F3F3F3;box-shadow:inset 0 0 0 1px #F3F3F3;transition:background-size .6s cubic-bezier(.16,1,.3,1),color .4s cubic-bezier(.16,1,.3,1)}
.nl-cp button::before{content:"";width:5px;height:5px;background:currentColor;flex:none}
.nl-cp button::after{content:"";width:12px;box-sizing:content-box;align-self:stretch;margin-left:6px;padding:0 13px;border-left:1px solid currentColor;opacity:.75;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23000' stroke-width='1.1'/%3E%3C/svg%3E") center/12px 12px no-repeat;transition:padding .5s cubic-bezier(.16,1,.3,1)}
.nl-cp button:hover{background-size:100% 100%,auto;color:#F3F3F3}
.nl-cp button:hover::after{padding:0 9px 0 15px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 6h10M6.5 1.5 11 6l-4.5 4.5' stroke='%23F3F3F3' stroke-width='1.1'/%3E%3C/svg%3E")}
`),
      (Ht = (e) =>
        e >= 1e6
          ? `$` + (e / 1e6).toFixed(e >= 1e7 ? 1 : 2) + `M`
          : `$` + Math.round(e / 1e3) + `k`),
      (jt.defaultProps = {
        legend: `Cluster size · H200, 1-year term`,
        sizes: `256, 1024, 4096, 16384`,
        size: 1,
        rate: 1.84,
        email: !1,
        placeholder: `Work email`,
        button: `Request quote`,
        sentText: `Request for {gpus} GPUs noted. Template only, nothing sent.`,
        errorText: `Enter a work email, like you@lab.com`,
      }),
      N(jt, {
        legend: { type: F.String, title: `Legend` },
        sizes: { type: F.String, title: `Sizes`, description: `GPU counts, comma separated` },
        size: {
          type: F.Number,
          title: `Default size`,
          min: 0,
          max: 5,
          step: 1,
          description: `0 = first`,
        },
        rate: {
          type: F.Number,
          title: `Rate`,
          min: 0.5,
          max: 5,
          step: 0.01,
          unit: `$`,
          description: `Per GPU-hour for the estimate`,
        },
        email: {
          type: F.Boolean,
          title: `Email field`,
          description: `Demo only, sends nothing. Keep it off and place a native Framer form below.`,
        },
        placeholder: { type: F.String, title: `Placeholder`, hidden: (e) => !e.email },
        button: { type: F.String, title: `Button` },
        sentText: { type: F.String, title: `Sent text`, description: `{gpus} = selected size` },
        errorText: { type: F.String, title: `Error text` },
      }));
  }),
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  $,
  Tn;
e(() => {
  (h(),
    le(),
    x(),
    g(),
    pe(),
    me(),
    ze(),
    xe(),
    Ve(),
    Ce(),
    be(),
    De(),
    Tt(),
    Ut(),
    Ke(),
    je(),
    We(),
    tt(),
    at(),
    Fe(),
    qe(),
    ut(),
    (Wt = S(Oe)),
    (Gt = S(we)),
    (Kt = S(ve)),
    (qt = S(dt)),
    (Jt = S(H)),
    (Yt = S(ft)),
    (Xt = S(pt)),
    (Zt = S(ye)),
    (Qt = S(ke)),
    ($t = S(He)),
    (en = S(mt)),
    (tn = S(ht)),
    (nn = S(Et)),
    (rn = S(Ot)),
    (an = S(kt)),
    (on = S(At)),
    (sn = S(jt)),
    (cn = S(Be)),
    (ln = S(Ee)),
    (un = S(he)),
    (dn = k(j)),
    (fn = S(ge)),
    (pn = {
      eTvjycwCe: `(min-width: 810px) and (max-width: 1279.98px)`,
      gqfiMmqZG: `(max-width: 809.98px)`,
      N7TVxQCnl: `(min-width: 1280px)`,
    }),
    (mn = []),
    (hn = `framer-l6Zo4`),
    (gn = {
      eTvjycwCe: `framer-v-hc62dk`,
      gqfiMmqZG: `framer-v-1xhw4nk`,
      N7TVxQCnl: `framer-v-hf6orh`,
    }),
    (_n = (e, t, n) => (e && t ? `position` : n)),
    (vn = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (yn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 2.4, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (bn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (xn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 2.2, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Sn = { Desktop: `N7TVxQCnl`, Phone: `gqfiMmqZG`, Tablet: `eTvjycwCe` }),
    (Cn = ({ value: e }) =>
      P()
        ? null
        : p(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (wn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Sn[r.variant] ?? r.variant ?? `N7TVxQCnl`,
    })),
    ($ = D(
      m(function (e, r) {
        let i = l(null),
          a = r ?? i,
          s = n(),
          { activeLocale: c, setLocale: m } = ie(),
          h = oe(),
          { style: g, className: _, layoutId: x, variant: S, ...T } = wn(e);
        ee(d(() => lt({}, c), [c]));
        let [E, D] = ce(S, pn, !1),
          k = w(hn, Re, ct, Je, it, Ue, $e, Pe),
          A = t(ne)?.isLayoutTemplate,
          N = !!t(y)?.transition?.layout,
          P = _n(A, N);
        te();
        let F = L(`Zlt_RRgAq`),
          le = l(null),
          ue = L(`SXshTwgzI`),
          pe = l(null),
          me = L(`clRnCfRoK`),
          R = l(null),
          z = L(`TPPCrceEH`),
          _e = l(null),
          be = L(`wABJY7hSv`),
          B = l(null),
          V = L(`T71aig18L`),
          xe = l(null),
          Se = L(`DvV_HzpnD`),
          Ce = l(null);
        return (
          re({}),
          p(ne.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Sn,
              primaryVariantId: `N7TVxQCnl`,
              variantClassNames: gn,
            },
            children: f(b, {
              id: x ?? s,
              children: [
                p(Cn, {
                  value: `html body { background: var(--token-4a4df212-112a-4b64-b931-433f97538933, rgb(0, 0, 0)); }`,
                }),
                f(v.div, {
                  ...T,
                  className: w(k, `framer-hf6orh`, _),
                  ref: a,
                  style: { ...g },
                  children: [
                    p(v.div, {
                      className: `framer-c8hhxp`,
                      "data-framer-name": `Navigation`,
                      layout: P,
                      children: p(fe, {
                        links: [
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `ftsL6c6mE` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `kZ7752sFG` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `f4IvkyEC_` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `JXDOUrKk6` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `leSVJ7Uql` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          p(M, {
                            children: p(j, {
                              className: `framer-1wbv968-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `BQGMpOJw3`,
                              scopeId: `aiXHfKTMN`,
                              children: p(I, {
                                breakpoint: E,
                                overrides: {
                                  eTvjycwCe: {
                                    allPagesLink: e[11],
                                    ctaLink: e[10],
                                    links: [
                                      { id: `HDXifmxtw`, label: `Company`, link: e[6] },
                                      { id: `YoYmWSsUx`, label: `Pricing`, link: e[7] },
                                      { id: `a6Q3EHKqu`, label: `Customers`, link: e[8] },
                                      { id: `rElcBF5Or`, label: `News`, link: e[9] },
                                    ],
                                  },
                                  gqfiMmqZG: {
                                    allPagesLink: e[17],
                                    ctaLink: e[16],
                                    links: [
                                      { id: `HDXifmxtw`, label: `Company`, link: e[12] },
                                      { id: `YoYmWSsUx`, label: `Pricing`, link: e[13] },
                                      { id: `a6Q3EHKqu`, label: `Customers`, link: e[14] },
                                      { id: `rElcBF5Or`, label: `News`, link: e[15] },
                                    ],
                                  },
                                },
                                children: p(Oe, {
                                  allPages: `All pages`,
                                  allPagesLink: e[5],
                                  bare: !1,
                                  bottomBlur: !0,
                                  coords: `69.6492° N — Arctic compute`,
                                  cta: `Plan capacity`,
                                  ctaLink: e[4],
                                  current: ``,
                                  formStyle: !0,
                                  height: `100%`,
                                  id: `BQGMpOJw3`,
                                  items: [
                                    { id: `dPeHoAipf`, label: `Home`, note: `4 layouts` },
                                    { id: `YKu8rd4Ga`, label: `Company`, note: `Since 2024` },
                                    { id: `bHBk18MNU`, label: `Pricing`, note: `From $1.62` },
                                    { id: `uR4xVipK_`, label: `Case studies`, note: `6 teams` },
                                    { id: `q1_BwuorQ`, label: `News`, note: `Field notes` },
                                    { id: `h9bchgJTF`, label: `Careers`, note: `7 open roles` },
                                    { id: `qOOZgCdVn`, label: `Contact`, note: `Reply in 1 day` },
                                  ],
                                  layoutId: `BQGMpOJw3`,
                                  links: [
                                    { id: `HDXifmxtw`, label: `Company`, link: e[0] },
                                    { id: `YoYmWSsUx`, label: `Pricing`, link: e[1] },
                                    { id: `a6Q3EHKqu`, label: `Customers`, link: e[2] },
                                    { id: `rElcBF5Or`, label: `News`, link: e[3] },
                                  ],
                                  listHover: !0,
                                  logo: `Nordlys`,
                                  logoLink: `/`,
                                  preloader: !0,
                                  rail: !0,
                                  showLinks: !1,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                    }),
                    f(v.div, {
                      className: `framer-17r31qx`,
                      "data-framer-name": `Hero`,
                      layout: P,
                      children: [
                        p(`div`, {
                          className: `framer-1ne4wxp`,
                          "data-framer-name": `Light`,
                          children: p(M, {
                            children: p(j, {
                              className: `framer-evgzwb-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `kUvSQ9a1w`,
                              scopeId: `aiXHfKTMN`,
                              children: p(we, {
                                cursor: !0,
                                floor: 0,
                                gain: 2.3,
                                height: `100%`,
                                id: `kUvSQ9a1w`,
                                layoutId: `kUvSQ9a1w`,
                                lightX: 0.66,
                                lightY: 0.6,
                                mode: `fill`,
                                overlay: `hero`,
                                rib: 10,
                                seed: 3,
                                spread: 1.05,
                                style: { height: `100%`, width: `100%` },
                                sweep: 0,
                                vignette: 1,
                                width: `100%`,
                                word: `Nordlys`,
                              }),
                            }),
                          }),
                        }),
                        p(`div`, {
                          className: `framer-4euvlf`,
                          "data-framer-name": `Hero main`,
                          children: p(M, {
                            children: p(j, {
                              className: `framer-dbwhr3-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `yzouMQO_m`,
                              scopeId: `aiXHfKTMN`,
                              children: p(I, {
                                breakpoint: E,
                                overrides: {
                                  eTvjycwCe: { fluid: 8.6, lineHeight: 1, max: 64 },
                                  gqfiMmqZG: { fluid: 8.6, lineHeight: 1, max: 64 },
                                },
                                children: p(ve, {
                                  align: `left`,
                                  balance: !0,
                                  color: `rgb(243, 243, 243)`,
                                  delay: 0.1,
                                  fluid: 4.6,
                                  height: `100%`,
                                  id: `yzouMQO_m`,
                                  layoutId: `yzouMQO_m`,
                                  lineHeight: 0.98,
                                  max: 78,
                                  min: 36,
                                  reveal: `load`,
                                  style: { width: `100%` },
                                  tag: `h1`,
                                  text: `Compute, cooled by the`,
                                  tone: `Arctic.`,
                                  toneColor: `rgb(166, 166, 166)`,
                                  toneLine: !1,
                                  toneNoWrap: !0,
                                  tracking: -0.035,
                                  weight: 400,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        p(M, {
                          children: p(j, {
                            className: `framer-1f51tou-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `BJxo3Fcdr`,
                            scopeId: `aiXHfKTMN`,
                            children: p(dt, {
                              delay: 0,
                              height: `100%`,
                              id: `BJxo3Fcdr`,
                              items: [
                                {
                                  id: `CxgbzsY48`,
                                  kind: `pue`,
                                  label: `PUE · N-01`,
                                  value: `1.08`,
                                },
                                { id: `MCJyJlzxP`, kind: `load`, label: `Hall load`, value: `72%` },
                                {
                                  id: `hMYgMSvJK`,
                                  kind: `static`,
                                  label: `Outside air`,
                                  value: `−4 °C`,
                                },
                                { id: `LkiQxPU6R`, kind: `utc`, label: `UTC`, value: `—` },
                              ],
                              layoutId: `BJxo3Fcdr`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-ok5iqz`,
                      "data-framer-name": `Clients`,
                      layout: P,
                      children: [
                        p(M, {
                          children: p(j, {
                            className: `framer-nza1of-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `NICpX_zIp`,
                            scopeId: `aiXHfKTMN`,
                            children: p(H, {
                              height: `100%`,
                              id: `NICpX_zIp`,
                              kicker: ``,
                              layoutId: `NICpX_zIp`,
                              number: `01⁠`,
                              reveal: !0,
                              sub: `Who trains in the North`,
                              title: `Customers`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        p(M, {
                          children: p(j, {
                            className: `framer-1iggcsp-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `KRZTSGlGR`,
                            scopeId: `aiXHfKTMN`,
                            children: p(ft, {
                              clients: [
                                {
                                  icon: `squares`,
                                  id: `Y3DpdItvc`,
                                  look: `medium`,
                                  name: `Tensorfield`,
                                },
                                { icon: `rings`, id: `l9FmTenWL`, look: `light`, name: `quorum` },
                                { icon: `vee`, id: `oIYy86Qel`, look: `mono`, name: `Vektor` },
                                {
                                  icon: `helix`,
                                  id: `u9J5dUDFK`,
                                  look: `medium`,
                                  name: `Helix AI`,
                                },
                                { icon: `hex`, id: `sE_WsEu_t`, look: `mono`, name: `Kernel` },
                                { icon: `nodes`, id: `AyIlK_OVZ`, look: `light`, name: `synapse` },
                                {
                                  icon: `orbit`,
                                  id: `EoBbOO88e`,
                                  look: `medium`,
                                  name: `Orbit Labs`,
                                },
                                { icon: `cross`, id: `EtsiYiyOU`, look: `mono`, name: `Photon` },
                              ],
                              height: `100%`,
                              id: `KRZTSGlGR`,
                              layoutId: `KRZTSGlGR`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-5mu73z`,
                      "data-framer-name": `Statement`,
                      layout: P,
                      children: [
                        p(M, {
                          children: p(j, {
                            className: `framer-100fbux-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `PpAji0Z5q`,
                            scopeId: `aiXHfKTMN`,
                            children: p(pt, {
                              fluid: 2.1,
                              height: `100%`,
                              id: `PpAji0Z5q`,
                              layoutId: `PpAji0Z5q`,
                              max: 32,
                              maxWidth: 30,
                              min: 21,
                              style: { width: `100%` },
                              text: `Training a frontier model now draws as much power as a small city. Up to forty percent of it goes to cooling, in places that are already too hot. We chose a place where the air does that work for free.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        p(fe, {
                          links: [
                            {
                              href: { hash: `:Zlt_RRgAq`, webPageId: `aiXHfKTMN` },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { hash: `:Zlt_RRgAq`, webPageId: `aiXHfKTMN` },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { hash: `:Zlt_RRgAq`, webPageId: `aiXHfKTMN` },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (e) =>
                            p(M, {
                              children: p(j, {
                                className: `framer-29n73l-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `fUjyQk6kk`,
                                scopeId: `aiXHfKTMN`,
                                children: p(I, {
                                  breakpoint: E,
                                  overrides: {
                                    eTvjycwCe: { link: e[1] },
                                    gqfiMmqZG: { link: e[2] },
                                  },
                                  children: p(ye, {
                                    full: !1,
                                    ghost: !1,
                                    height: `100%`,
                                    id: `fUjyQk6kk`,
                                    label: `Learn more`,
                                    layoutId: `fUjyQk6kk`,
                                    link: e[0],
                                    newTab: !1,
                                    submit: !1,
                                    visual: !1,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-b36b2r`,
                      "data-framer-name": `Plate`,
                      layout: P,
                      children: [
                        f(`div`, {
                          className: `framer-gfq5ok`,
                          "data-border": !0,
                          "data-framer-name": `Plate head`,
                          children: [
                            p(`div`, {
                              className: `framer-46z73v`,
                              "data-framer-name": `Marks`,
                              children: p(M, {
                                children: p(j, {
                                  className: `framer-10wf3no-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `kc43AlLc6`,
                                  scopeId: `aiXHfKTMN`,
                                  children: p(ke, {
                                    color: `rgb(166, 166, 166)`,
                                    height: `100%`,
                                    id: `kc43AlLc6`,
                                    layoutId: `kc43AlLc6`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            p(M, {
                              children: p(j, {
                                className: `framer-101awgl-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `RySbaz2yg`,
                                scopeId: `aiXHfKTMN`,
                                children: p(H, {
                                  height: `100%`,
                                  id: `RySbaz2yg`,
                                  kicker: `2026 onwards`,
                                  layoutId: `RySbaz2yg`,
                                  number: `02⁠`,
                                  reveal: !0,
                                  sub: `Two sites, 180 MW by 2028`,
                                  title: `Arctic capacity`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            p(O, {
                              __fromCanvasComponent: !0,
                              children: p(o, {
                                children: p(`p`, {
                                  className: `framer-styles-preset-14yqjsj`,
                                  "data-styles-preset": `X0BbqEMSb`,
                                  dir: `auto`,
                                  children: `Fig. 01 — Cold aisle, N-01`,
                                }),
                              }),
                              className: `framer-1s8t26r`,
                              "data-framer-name": `Figure caption`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        p(I, {
                          breakpoint: E,
                          overrides: {
                            eTvjycwCe: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: C((h?.y || 0) + 8 + 2038 + 0 + 262),
                                pixelHeight: 1024,
                                pixelWidth: 1280,
                                sizes: `calc(${h?.width || `100vw`} - 52px)`,
                                src: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024`,
                                srcSet: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=512&width=1280&height=1024 512w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=1024&width=1280&height=1024 1024w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024 1280w`,
                              },
                            },
                            gqfiMmqZG: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: C((h?.y || 0) + 8 + 2038 + 0 + 300.5),
                                pixelHeight: 1024,
                                pixelWidth: 1280,
                                sizes: `calc(${h?.width || `100vw`} - 48px)`,
                                src: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024`,
                                srcSet: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=512&width=1280&height=1024 512w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=1024&width=1280&height=1024 1024w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024 1280w`,
                              },
                            },
                          },
                          children: f(se, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: C((h?.y || 0) + 8 + 2191 + 0 + 262),
                              pixelHeight: 1024,
                              pixelWidth: 1280,
                              sizes: `calc(${h?.width || `100vw`} - 72px)`,
                              src: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024`,
                              srcSet: `https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=512&width=1280&height=1024 512w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?scale-down-to=1024&width=1280&height=1024 1024w,https://framerusercontent.com/images/RoAWOHMcCZZEdu62gPqQiS5FQ.webp?width=1280&height=1024 1280w`,
                            },
                            className: `framer-t8n66s`,
                            "data-framer-name": `Photo [frame]`,
                            children: [
                              p(`div`, {
                                className: `framer-3xupmk`,
                                "data-framer-name": `Mesh`,
                                children: p(M, {
                                  children: p(j, {
                                    className: `framer-1n26xa8-container`,
                                    "data-code-component-plugin-id": `mcp001`,
                                    isAuthoredByUser: !0,
                                    nodeId: `RlwUvNVbM`,
                                    scopeId: `aiXHfKTMN`,
                                    children: p(He, {
                                      brightness: 0.85,
                                      chip: ``,
                                      chipIcon: `chip`,
                                      contrast: 1.1,
                                      corners: !0,
                                      cornerSet: `all`,
                                      height: `100%`,
                                      id: `RlwUvNVbM`,
                                      label: ``,
                                      layoutId: `RlwUvNVbM`,
                                      mesh: !0,
                                      overlay: `none`,
                                      parallax: !0,
                                      reveal: !0,
                                      shade: !0,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              p(O, {
                                __fromCanvasComponent: !0,
                                children: p(o, {
                                  children: p(`p`, {
                                    className: `framer-styles-preset-f5nf9u`,
                                    "data-styles-preset": `VG9ZrjMNG`,
                                    dir: `auto`,
                                    children: `68.4385° N · Narvik, Norway`,
                                  }),
                                }),
                                className: `framer-1m51zwb`,
                                "data-framer-name": `Caption`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-i99hrf`,
                      "data-framer-name": `Site`,
                      id: F,
                      layout: P,
                      ref: le,
                      children: [
                        f(`div`, {
                          className: `framer-tcj9av`,
                          "data-border": !0,
                          "data-framer-name": `Site grid`,
                          children: [
                            p(`div`, {
                              className: `framer-uuikzy`,
                              "data-framer-name": `Marks`,
                              children: p(M, {
                                children: p(j, {
                                  className: `framer-bt6sod-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `Ch0B1Yaww`,
                                  scopeId: `aiXHfKTMN`,
                                  children: p(ke, {
                                    color: `rgb(166, 166, 166)`,
                                    height: `100%`,
                                    id: `Ch0B1Yaww`,
                                    layoutId: `Ch0B1Yaww`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            f(`div`, {
                              className: `framer-1ioxhmw`,
                              "data-framer-name": `Site left`,
                              children: [
                                p(O, {
                                  __fromCanvasComponent: !0,
                                  children: p(o, {
                                    children: p(`p`, {
                                      className: `framer-styles-preset-14yqjsj`,
                                      "data-styles-preset": `X0BbqEMSb`,
                                      dir: `auto`,
                                      children: `Site index`,
                                    }),
                                  }),
                                  className: `framer-1kgkm1x`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(`div`, {
                                  className: `framer-xqz5hy`,
                                  "data-framer-name": `Title row`,
                                  children: [
                                    p(M, {
                                      children: p(j, {
                                        className: `framer-1xk3lam-container`,
                                        "data-code-component-plugin-id": `mcp001`,
                                        isAuthoredByUser: !0,
                                        nodeId: `jmD4PpyNz`,
                                        scopeId: `aiXHfKTMN`,
                                        children: p(ve, {
                                          align: `left`,
                                          balance: !0,
                                          color: `rgb(243, 243, 243)`,
                                          delay: 0,
                                          fluid: 5.2,
                                          height: `100%`,
                                          id: `jmD4PpyNz`,
                                          layoutId: `jmD4PpyNz`,
                                          lineHeight: 0.9,
                                          max: 80,
                                          min: 44,
                                          reveal: `none`,
                                          tag: `h2`,
                                          text: `N-01 Narvik`,
                                          tone: ``,
                                          toneColor: `rgb(166, 166, 166)`,
                                          toneLine: !1,
                                          toneNoWrap: !0,
                                          tracking: -0.032,
                                          weight: 400,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    f(`div`, {
                                      className: `framer-1cybyq3`,
                                      "data-framer-name": `Live tag`,
                                      children: [
                                        p(`div`, {
                                          className: `framer-vl1uo4`,
                                          "data-framer-name": `Dot`,
                                        }),
                                        p(O, {
                                          __fromCanvasComponent: !0,
                                          children: p(o, {
                                            children: p(`p`, {
                                              className: `framer-styles-preset-1ijfyvl`,
                                              "data-styles-preset": `n9FHkUlL5`,
                                              dir: `auto`,
                                              children: `Live`,
                                            }),
                                          }),
                                          className: `framer-ukdrng`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                p(O, {
                                  __fromCanvasComponent: !0,
                                  children: p(o, {
                                    children: p(`p`, {
                                      className: `framer-styles-preset-5efwe0`,
                                      "data-styles-preset": `RnBEBxYqd`,
                                      dir: `auto`,
                                      children: `Our first hall sits in a decommissioned mine above the Ofotfjord. Outside air below 10 °C for 300 days a year means no chillers, only fans. Waste heat warms the town's district network.`,
                                    }),
                                  }),
                                  className: `framer-1ruwwvw`,
                                  "data-framer-name": `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                p(fe, {
                                  links: [
                                    {
                                      href: { hash: `:TPPCrceEH`, webPageId: `aiXHfKTMN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:TPPCrceEH`, webPageId: `aiXHfKTMN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:TPPCrceEH`, webPageId: `aiXHfKTMN` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    p(M, {
                                      children: p(j, {
                                        className: `framer-1axwg1i-container`,
                                        "data-code-component-plugin-id": `mcp001`,
                                        isAuthoredByUser: !0,
                                        nodeId: `iv_JEbDRq`,
                                        scopeId: `aiXHfKTMN`,
                                        children: p(I, {
                                          breakpoint: E,
                                          overrides: {
                                            eTvjycwCe: { link: e[1] },
                                            gqfiMmqZG: { link: e[2] },
                                          },
                                          children: p(ye, {
                                            full: !1,
                                            ghost: !0,
                                            height: `100%`,
                                            id: `iv_JEbDRq`,
                                            label: `See site data`,
                                            layoutId: `iv_JEbDRq`,
                                            link: e[0],
                                            newTab: !1,
                                            submit: !1,
                                            visual: !1,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-6nnme4`,
                              "data-framer-name": `Site specs`,
                              children: [
                                f(`div`, {
                                  className: `framer-xtwy23`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `Capacity`,
                                        }),
                                      }),
                                      className: `framer-1f8m206`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `60 MW IT`,
                                        }),
                                      }),
                                      className: `framer-yekhjp`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-1x0qefz`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `GPUs online`,
                                        }),
                                      }),
                                      className: `framer-3k33cd`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `24,576 × H200`,
                                        }),
                                      }),
                                      className: `framer-1aputc6`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-1skgmtt`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `Interconnect`,
                                        }),
                                      }),
                                      className: `framer-14jbwg5`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `3.2 Tb/s InfiniBand`,
                                        }),
                                      }),
                                      className: `framer-1nucqul`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-a34ibk`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `Grid`,
                                        }),
                                      }),
                                      className: `framer-18ninto`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `NO4 · 98.7% hydro`,
                                        }),
                                      }),
                                      className: `framer-1j4j58s`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-13lnllq`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `Latency to Oslo`,
                                        }),
                                      }),
                                      className: `framer-hski42`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `9.4 ms`,
                                        }),
                                      }),
                                      className: `framer-1ytmofb`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-oe7p5`,
                                  "data-border": !0,
                                  "data-framer-name": `Spec`,
                                  children: [
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-1gjp555`,
                                          "data-styles-preset": `q59f5cYwz`,
                                          dir: `auto`,
                                          children: `Certification`,
                                        }),
                                      }),
                                      className: `framer-17bcc5f`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    p(O, {
                                      __fromCanvasComponent: !0,
                                      children: p(o, {
                                        children: p(`p`, {
                                          className: `framer-styles-preset-l5egyg`,
                                          "data-styles-preset": `YiV_09ME0`,
                                          dir: `auto`,
                                          children: `ISO 27001 · Tier III`,
                                        }),
                                      }),
                                      className: `framer-13ba0po`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        p(M, {
                          children: p(j, {
                            className: `framer-84d9qt-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `akTct3woI`,
                            scopeId: `aiXHfKTMN`,
                            children: p(mt, {
                              height: `100%`,
                              id: `akTct3woI`,
                              layoutId: `akTct3woI`,
                              style: { width: `100%` },
                              title: `Spot power price · NO4 · last 48 h · € / MWh`,
                              unit: `/ MWh`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    f(v.div, {
                      className: `framer-8k5ukj`,
                      "data-framer-name": `Products`,
                      id: ue,
                      layout: P,
                      ref: pe,
                      children: [
                        p(M, {
                          children: p(j, {
                            className: `framer-uq65v5-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `uLS0lNPlh`,
                            scopeId: `aiXHfKTMN`,
                            children: p(H, {
                              height: `100%`,
                              id: `uLS0lNPlh`,
                              kicker: ``,
                              layoutId: `uLS0lNPlh`,
                              number: `03⁠`,
                              reveal: !0,
                              sub: `Three ways to run`,
                              title: `Compute`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        p(M, {
                          children: p(j, {
                            className: `framer-c17md9-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `FtKaNgnwz`,
                            scopeId: `aiXHfKTMN`,
                            children: p(ht, {
                              height: `100%`,
                              id: `FtKaNgnwz`,
                              layoutId: `FtKaNgnwz`,
                              mesh: !0,
                              rows: [
                                {
                                  id: `gJJ6o2Iif`,
                                  price: `From $1.62 / GPU-hr`,
                                  text: `Dedicated H200 and B300 pods from 256 GPUs, on one-to-three year terms.`,
                                  title: `Reserved clusters`,
                                },
                                {
                                  id: `kChvlC5Df`,
                                  price: `From $2.24 / GPU-hr`,
                                  text: `Spin up 8 to 512 GPUs in minutes. Billed per second, no commitment.`,
                                  title: `On-demand`,
                                },
                                {
                                  id: `PR8ylN9lV`,
                                  price: `By arrangement`,
                                  text: `Private halls for governments and labs. EEA jurisdiction, your keys, your staff.`,
                                  title: `Sovereign tenancy`,
                                },
                              ],
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(v.div, {
                      className: `framer-1yz869h`,
                      "data-framer-name": `Case studies`,
                      id: me,
                      layout: P,
                      ref: R,
                      children: p(M, {
                        children: p(j, {
                          className: `framer-5c6iqt-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `cpY9njy5M`,
                          scopeId: `aiXHfKTMN`,
                          children: p(Et, {
                            cases: [
                              {
                                alt: `Overhead cable trays above server racks`,
                                big: `−34%`,
                                bigLabel: `Energy cost vs. previous region`,
                                brand: `Tensorfield`,
                                icon: `squares`,
                                id: `teWyWhxAF`,
                                meta: `2026 · Pre-training`,
                                r1After: 66,
                                r1Before: 100,
                                r1From: `€1.42M`,
                                r1Label: `Energy / run`,
                                r1To: `€0.94M`,
                                r2After: 79,
                                r2Before: 100,
                                r2From: `24 d`,
                                r2Label: `Time to train`,
                                r2To: `19 d`,
                                title: `A 70B foundation model, trained in 19 days on 4,096 H200s.`,
                              },
                              {
                                alt: `Network switch with fibre connections`,
                                big: `−61%`,
                                bigLabel: `CO₂ per million queries`,
                                brand: `Helix AI`,
                                icon: `helix`,
                                id: `f3ESOCPjI`,
                                meta: `2026 · Inference`,
                                r1After: 39,
                                r1Before: 100,
                                r1From: `41 kg`,
                                r1Label: `CO₂ / M queries`,
                                r1To: `16 kg`,
                                r2After: 100,
                                r2Before: 95,
                                r2From: `38.0 ms`,
                                r2Label: `p50 latency`,
                                r2To: `40.1 ms`,
                                title: `A protein-folding inference fleet moved north without a code change.`,
                              },
                              {
                                alt: `Silicon wafer with chip dies`,
                                big: `0 L`,
                                bigLabel: `Water used for cooling, per month`,
                                brand: `Orbit Labs`,
                                icon: `orbit`,
                                id: `spP1DlVqR`,
                                meta: `2025 · Vision`,
                                r1After: 1,
                                r1Before: 100,
                                r1From: `3.1 ML`,
                                r1Label: `Water / month`,
                                r1To: `0 L`,
                                r2After: 100,
                                r2Before: 67,
                                r2From: `0.8 PB`,
                                r2Label: `Throughput`,
                                r2To: `1.2 PB`,
                                title: `Petabyte-scale satellite vision, cooled by the fjord.`,
                              },
                            ],
                            height: `100%`,
                            id: `cpY9njy5M`,
                            layoutId: `cpY9njy5M`,
                            mesh: !0,
                            number: `04⁠`,
                            style: { width: `100%` },
                            sub: `Built on cold compute`,
                            title: `Case studies`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(v.div, {
                      className: `framer-6e0dcc`,
                      "data-framer-name": `Figures`,
                      id: z,
                      layout: P,
                      ref: _e,
                      children: [
                        p(M, {
                          children: p(j, {
                            className: `framer-obmyzs-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `KxPY4wq17`,
                            scopeId: `aiXHfKTMN`,
                            children: p(H, {
                              height: `100%`,
                              id: `KxPY4wq17`,
                              kicker: ``,
                              layoutId: `KxPY4wq17`,
                              number: `05⁠`,
                              reveal: !0,
                              sub: `Measured at the meter`,
                              title: `Data`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        p(M, {
                          children: p(j, {
                            className: `framer-uw36xq-container`,
                            "data-code-component-plugin-id": `mcp001`,
                            isAuthoredByUser: !0,
                            nodeId: `iH0HELDGl`,
                            scopeId: `aiXHfKTMN`,
                            children: p(Ot, {
                              height: `100%`,
                              id: `iH0HELDGl`,
                              items: [
                                {
                                  id: `w8o30TaJc`,
                                  label: `Annual PUE`,
                                  text: `Average power usage effectiveness across 2025, metered hourly.`,
                                  unit: ``,
                                  value: `1.09`,
                                },
                                {
                                  id: `K2X2onbdo`,
                                  label: `Renewable share`,
                                  text: `Hydro and wind from the NO4 grid, matched by the hour.`,
                                  unit: `%`,
                                  value: `98.7`,
                                },
                                {
                                  id: `x1SFrXj3K`,
                                  label: `Water used`,
                                  text: `Free-air cooling. No evaporative towers, no chilled water loops.`,
                                  unit: `L`,
                                  value: `0`,
                                },
                                {
                                  id: `yjfD7knvg`,
                                  label: `Heat reused`,
                                  text: `Delivered to Narvik's district heating network last winter.`,
                                  unit: `GWh`,
                                  value: `41`,
                                },
                              ],
                              layoutId: `iH0HELDGl`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(v.div, {
                      className: `framer-1rhgyph`,
                      "data-framer-name": `Testimonials`,
                      id: be,
                      layout: P,
                      ref: B,
                      children: p(M, {
                        children: p(j, {
                          className: `framer-11ll417-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `Xc4FhJUCc`,
                          scopeId: `aiXHfKTMN`,
                          children: p(kt, {
                            height: `100%`,
                            id: `Xc4FhJUCc`,
                            layoutId: `Xc4FhJUCc`,
                            number: `06⁠`,
                            seconds: 8,
                            style: { width: `100%` },
                            sub: `Voices from N-01`,
                            title: `Testimonials`,
                            voices: [
                              {
                                company: `Tensorfield`,
                                id: `g_6yeFeLP`,
                                meta: `Recorded in Oslo · Mar 2026`,
                                name: `Amara Okafor`,
                                quote: `We moved pre-training to Narvik in March. Same throughput, and our energy bill fell by a third.`,
                                seed: 3.1,
                                who: `Amara Okafor, Head of Infrastructure, Tensorfield`,
                              },
                              {
                                company: `Helix AI`,
                                id: `KlWoBT3NW`,
                                meta: `Recorded in London · May 2026`,
                                name: `Jonas Weber`,
                                quote: `The cluster was racked, burned in and running our jobs eleven days after we signed. I haven’t seen that anywhere else.`,
                                seed: 5.7,
                                who: `Jonas Weber, CTO, Helix AI`,
                              },
                              {
                                company: `Synapse`,
                                id: `I9lDF1Te9`,
                                meta: `Recorded in Copenhagen · Jul 2026`,
                                name: `Marta Sørensen`,
                                quote: `Sovereign tenancy let us keep patient data inside the EEA and still train on the newest hardware.`,
                                seed: 8.3,
                                who: `Marta Sørensen, CTO, Synapse`,
                              },
                              {
                                company: `Orbit Labs`,
                                id: `SATazu2NC`,
                                meta: `Recorded in Lisbon · Sep 2026`,
                                name: `Erik Halvorsen`,
                                quote: `Their live PUE feed is the first sustainability number our board actually asks about.`,
                                seed: 2.2,
                                who: `Erik Halvorsen, CFO, Orbit Labs`,
                              },
                            ],
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    p(v.div, {
                      className: `framer-1szbp7e`,
                      "data-framer-name": `Pricing`,
                      id: V,
                      layout: P,
                      ref: xe,
                      children: p(M, {
                        children: p(j, {
                          className: `framer-123lc3f-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `VWlDyOXJJ`,
                          scopeId: `aiXHfKTMN`,
                          children: p(At, {
                            height: `100%`,
                            id: `VWlDyOXJJ`,
                            layoutId: `VWlDyOXJJ`,
                            note: `Prices exclude VAT. B300 pricing on request. Power and cooling included.`,
                            number: `07⁠`,
                            plans: [
                              {
                                badge: ``,
                                cta: `Start exploring`,
                                features: `Per-second billing
Shared 400 Gb/s fabric
Checkpoint storage up to 2× model size
Email support, next business day`,
                                hot: !1,
                                id: `mUrZKNUXd`,
                                name: `Explore`,
                                note: `8 – 512 GPUs`,
                                prices: `2.24, 2.04, 1.92`,
                                text: `For research teams, fine-tunes and evaluation runs.`,
                                unit: `/ GPU-hr`,
                              },
                              {
                                badge: `Most chosen`,
                                cta: `Reserve a pod`,
                                features: `Dedicated 3.2 Tb/s InfiniBand
Deadline guarantees with credits
Live PUE and carbon reports
Named engineer, 4-hour response`,
                                hot: !0,
                                id: `O0QRv6oqr`,
                                name: `Scale`,
                                note: ``,
                                prices: `1.98, 1.84, 1.62`,
                                text: `Dedicated pods for production training, 256 to 16,384 GPUs.`,
                                unit: `/ GPU-hr`,
                              },
                              {
                                badge: ``,
                                cta: `Talk to sales`,
                                features: `Dedicated hall and power feed
Customer-held keys, on-site staff option
ISO 27001 · Tier III
24/7 incident line`,
                                hot: !1,
                                id: `rRvGZ0Y3k`,
                                name: `Sovereign`,
                                note: `Private hall`,
                                prices: `Custom`,
                                text: `Isolated halls under EEA jurisdiction for governments and labs.`,
                                unit: ``,
                              },
                            ],
                            style: { width: `100%` },
                            sub: `Per H200 GPU-hour`,
                            term: 1,
                            termLabel: `Term`,
                            terms: `On-demand, 1 year, 3 years`,
                            title: `Pricing`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(v.div, {
                      className: `framer-xpnfny`,
                      "data-framer-name": `CTA`,
                      id: Se,
                      layout: P,
                      ref: Ce,
                      children: [
                        p(`div`, {
                          className: `framer-1a8pkes`,
                          "data-framer-name": `Light`,
                          children: p(M, {
                            children: p(j, {
                              className: `framer-1a1wqzb-container`,
                              "data-code-component-plugin-id": `mcp001`,
                              isAuthoredByUser: !0,
                              nodeId: `f7BCgJVdZ`,
                              scopeId: `aiXHfKTMN`,
                              children: p(we, {
                                cursor: !0,
                                floor: 0,
                                gain: 2,
                                height: `100%`,
                                id: `f7BCgJVdZ`,
                                layoutId: `f7BCgJVdZ`,
                                lightX: 0.64,
                                lightY: 0.56,
                                mode: `fill`,
                                overlay: `cta`,
                                rib: 13,
                                seed: 40,
                                spread: 0.95,
                                style: { height: `100%`, width: `100%` },
                                sweep: 0,
                                vignette: 1,
                                width: `100%`,
                                word: `Nordlys`,
                              }),
                            }),
                          }),
                        }),
                        f(`div`, {
                          className: `framer-11ym1ra`,
                          "data-border": !0,
                          "data-framer-name": `CTA top`,
                          children: [
                            p(`div`, {
                              className: `framer-15w7ggd`,
                              "data-framer-name": `Marks`,
                              children: p(M, {
                                children: p(j, {
                                  className: `framer-g2k6y-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `ftgr_6ycP`,
                                  scopeId: `aiXHfKTMN`,
                                  children: p(ke, {
                                    color: `rgb(166, 166, 166)`,
                                    height: `100%`,
                                    id: `ftgr_6ycP`,
                                    layoutId: `ftgr_6ycP`,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            p(M, {
                              children: p(j, {
                                className: `framer-54vsb9-container`,
                                "data-code-component-plugin-id": `mcp001`,
                                isAuthoredByUser: !0,
                                nodeId: `ZqSew8DmR`,
                                scopeId: `aiXHfKTMN`,
                                children: p(H, {
                                  height: `100%`,
                                  id: `ZqSew8DmR`,
                                  kicker: ``,
                                  layoutId: `ZqSew8DmR`,
                                  number: `08⁠`,
                                  reveal: !0,
                                  sub: `Q1 2027 allocation is open`,
                                  title: `Plan capacity`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            p(O, {
                              __fromCanvasComponent: !0,
                              children: p(o, {
                                children: p(`p`, {
                                  className: `framer-styles-preset-14yqjsj`,
                                  "data-styles-preset": `X0BbqEMSb`,
                                  dir: `auto`,
                                  children: `Reply within one working day`,
                                }),
                              }),
                              className: `framer-6u2xhf`,
                              "data-framer-name": `Reply note`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        f(`div`, {
                          className: `framer-iz40a9`,
                          "data-framer-name": `CTA main`,
                          children: [
                            p(`div`, {
                              className: `framer-1gi3jlb`,
                              "data-framer-name": `Headline`,
                              children: p(M, {
                                children: p(j, {
                                  className: `framer-1x5r8ip-container`,
                                  "data-code-component-plugin-id": `mcp001`,
                                  isAuthoredByUser: !0,
                                  nodeId: `QUVnwW1Nz`,
                                  scopeId: `aiXHfKTMN`,
                                  children: p(ve, {
                                    align: `left`,
                                    balance: !0,
                                    color: `rgb(243, 243, 243)`,
                                    delay: 0,
                                    fluid: 4.6,
                                    height: `100%`,
                                    id: `QUVnwW1Nz`,
                                    layoutId: `QUVnwW1Nz`,
                                    lineHeight: 0.9,
                                    max: 76,
                                    min: 38,
                                    reveal: `scroll`,
                                    style: { width: `100%` },
                                    tag: `h2`,
                                    text: `Build where it’s cold.`,
                                    tone: ``,
                                    toneColor: `rgb(166, 166, 166)`,
                                    toneLine: !1,
                                    toneNoWrap: !0,
                                    tracking: -0.032,
                                    weight: 400,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            f(`div`, {
                              className: `framer-1v28mlo`,
                              "data-framer-name": `Planner`,
                              children: [
                                p(M, {
                                  children: p(j, {
                                    className: `framer-1s5wsw0-container`,
                                    "data-code-component-plugin-id": `mcp001`,
                                    isAuthoredByUser: !0,
                                    nodeId: `BO1LDKSmy`,
                                    scopeId: `aiXHfKTMN`,
                                    children: p(jt, {
                                      button: `Request quote`,
                                      email: !1,
                                      errorText: `Enter a work email, like you@lab.com`,
                                      height: `100%`,
                                      id: `BO1LDKSmy`,
                                      layoutId: `BO1LDKSmy`,
                                      legend: `Cluster size · H200, 1-year term`,
                                      placeholder: `Work email`,
                                      rate: 1.84,
                                      sentText: `Request for {gpus} GPUs noted. Template only, nothing sent.`,
                                      size: 1,
                                      sizes: `256, 1024, 4096, 16384`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                p(ae, {
                                  className: `framer-18b8q3`,
                                  "data-framer-name": `Quote request`,
                                  nodeId: `Ds1daqSoa`,
                                  children: (e) =>
                                    f(u, {
                                      children: [
                                        f(`label`, {
                                          className: `framer-1hqoi48`,
                                          "data-border": !0,
                                          "data-framer-name": `Field Email`,
                                          children: [
                                            p(O, {
                                              __fromCanvasComponent: !0,
                                              children: p(o, {
                                                children: p(`p`, {
                                                  className: `framer-styles-preset-14yqjsj`,
                                                  "data-styles-preset": `X0BbqEMSb`,
                                                  dir: `auto`,
                                                  children: `Work email`,
                                                }),
                                              }),
                                              className: `framer-19n9rzy`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(de, {
                                              className: `framer-13lxl6s`,
                                              inputName: `email`,
                                              placeholder: `ingrid@lab.ai`,
                                              required: !0,
                                              type: `email`,
                                            }),
                                          ],
                                        }),
                                        f(`div`, {
                                          className: `framer-jpj9nf`,
                                          "data-framer-name": `Foot`,
                                          children: [
                                            p(O, {
                                              __fromCanvasComponent: !0,
                                              children: p(o, {
                                                children: p(`p`, {
                                                  className: `framer-styles-preset-vj4i3z`,
                                                  "data-styles-preset": `nm2zECWKu`,
                                                  dir: `auto`,
                                                  children: `An engineer replies within one working day.`,
                                                }),
                                              }),
                                              className: `framer-1aqqi1j`,
                                              "data-framer-name": `Note`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            p(I, {
                                              breakpoint: E,
                                              overrides: {
                                                eTvjycwCe: {
                                                  y:
                                                    (h?.y || 0) +
                                                    8 +
                                                    6027.3 +
                                                    24 +
                                                    222 +
                                                    130 +
                                                    224 +
                                                    0 +
                                                    208 +
                                                    0 +
                                                    80.5 +
                                                    37.25,
                                                },
                                                gqfiMmqZG: {
                                                  y:
                                                    (h?.y || 0) +
                                                    8 +
                                                    5946.8 +
                                                    24 +
                                                    248.5 +
                                                    120 +
                                                    224 +
                                                    0 +
                                                    208 +
                                                    0 +
                                                    80.5 +
                                                    37.25,
                                                },
                                              },
                                              children: p(M, {
                                                height: 38,
                                                y:
                                                  (h?.y || 0) +
                                                  8 +
                                                  6541.5 +
                                                  24 +
                                                  222 +
                                                  205 +
                                                  0 +
                                                  0 +
                                                  208 +
                                                  0 +
                                                  80.5 +
                                                  37.25,
                                                children: p(j, {
                                                  className: `framer-wbbocg-container`,
                                                  nodeId: `mPj2OZucM`,
                                                  scopeId: `aiXHfKTMN`,
                                                  children: p(Be, {
                                                    ayADjZZmZ: `Request quote`,
                                                    height: `100%`,
                                                    id: `mPj2OZucM`,
                                                    layoutId: `mPj2OZucM`,
                                                    variant: vn(`xaRnQgVZZ`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p(v.div, {
                      className: `framer-1tia3xu`,
                      "data-framer-name": `Footer`,
                      layout: P,
                      children: p(M, {
                        children: p(j, {
                          className: `framer-1agbh4f-container`,
                          "data-code-component-plugin-id": `mcp001`,
                          isAuthoredByUser: !0,
                          nodeId: `H2YqMi84T`,
                          scopeId: `aiXHfKTMN`,
                          children: p(Ee, {
                            author: `Flowmance`,
                            authorLink: `https://flowmance.com`,
                            bare: !1,
                            col1: [
                              { id: `pJA3SkO_k`, label: `Home` },
                              { id: `pBzMTdDbv`, label: `Company` },
                              { id: `Dx3zrLCzn`, label: `Pricing` },
                              { id: `znBZASJiv`, label: `Case studies` },
                              { id: `pi3UVx762`, label: `News` },
                              { id: `sxMvZ_LBd`, label: `Careers` },
                              { id: `prDWno6FF`, label: `Contact` },
                            ],
                            col1Title: `Pages`,
                            col2: [
                              { id: `W0XjEYllP`, label: `Design system` },
                              { id: `z2cF5G5eF`, label: `All pages` },
                              { id: `IGR7oUa3U`, label: `404` },
                            ],
                            col2Title: `Template`,
                            copyright: `© 2026 Nordlys AS · Org. 931 204 118`,
                            createdLabel: `Created by`,
                            credit: `Built in Framer`,
                            creditLink: `https://www.framer.com/@flowmance/`,
                            email: `hello@nordlys.example`,
                            gain: 2.4,
                            height: `100%`,
                            hint: `Engineers reply within one working day`,
                            id: `H2YqMi84T`,
                            layoutId: `H2YqMi84T`,
                            lightX: 0.5,
                            lightY: 0.5,
                            mailLabel: `Talk to an engineer`,
                            stations: [
                              { id: `UoIdfbBRY`, label: `Tromsø HQ`, value: `{clock}` },
                              { id: `yzQxzTyjW`, label: `N-01 Narvik`, value: `−4 °C · Live` },
                              { id: `xdY2UGswP`, label: `N-02 Kiruna`, value: `−9 °C · 2027` },
                              { id: `B_KnDJvba`, label: `NO4 price`, value: `€4.3 / MWh` },
                            ],
                            status: `All systems normal · build 26.10.05`,
                            style: { width: `100%` },
                            toTop: `Back to top`,
                            width: `100%`,
                            word: `Nordlys`,
                            wordmark: !0,
                          }),
                        }),
                      }),
                    }),
                    p(M, {
                      height: 42,
                      y: 894,
                      children: p(dn, {
                        animate: yn,
                        className: `framer-1612ocs-container`,
                        "data-framer-appear-id": `1612ocs`,
                        initial: bn,
                        isModuleExternal: !0,
                        layout: P,
                        layoutScroll: !0,
                        nodeId: `sHl5tdbJ_`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `aiXHfKTMN`,
                        children: p(he, {
                          height: `100%`,
                          id: `sHl5tdbJ_`,
                          layoutId: `sHl5tdbJ_`,
                          NBFndEgQg: `Get Free Template`,
                          oNEtXPX1m: `https://flowmance.lemonsqueezy.com/checkout/buy/65781208-9fe3-4149-a904-9a5a4b707c86`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    p(M, {
                      height: 42,
                      width: `190px`,
                      y: 845,
                      children: p(dn, {
                        animate: xn,
                        className: `framer-cnhhct-container`,
                        "data-framer-appear-id": `cnhhct`,
                        initial: bn,
                        layout: P,
                        layoutScroll: !0,
                        nodeId: `y8qQ4yT4S`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `aiXHfKTMN`,
                        children: p(ge, {
                          height: `100%`,
                          id: `y8qQ4yT4S`,
                          layoutId: `y8qQ4yT4S`,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                p(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-l6Zo4.framer-8njfbo, .framer-l6Zo4 .framer-8njfbo { display: block; }`,
        `.framer-l6Zo4.framer-hf6orh { align-content: center; align-items: center; background-color: var(--token-4a4df212-112a-4b64-b931-433f97538933, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1280px; }`,
        `.framer-l6Zo4 .framer-c8hhxp { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 40; }`,
        `.framer-l6Zo4 .framer-1wbv968-container, .framer-l6Zo4 .framer-dbwhr3-container, .framer-l6Zo4 .framer-1f51tou-container, .framer-l6Zo4 .framer-1iggcsp-container, .framer-l6Zo4 .framer-100fbux-container, .framer-l6Zo4 .framer-84d9qt-container, .framer-l6Zo4 .framer-c17md9-container, .framer-l6Zo4 .framer-5c6iqt-container, .framer-l6Zo4 .framer-uw36xq-container, .framer-l6Zo4 .framer-11ll417-container, .framer-l6Zo4 .framer-123lc3f-container, .framer-l6Zo4 .framer-1x5r8ip-container, .framer-l6Zo4 .framer-1s5wsw0-container, .framer-l6Zo4 .framer-1agbh4f-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-17r31qx { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: flex-end; max-height: 1100px; min-height: 620px; overflow: hidden; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1ne4wxp, .framer-l6Zo4 .framer-3xupmk, .framer-l6Zo4 .framer-1a8pkes { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-l6Zo4 .framer-evgzwb-container, .framer-l6Zo4 .framer-10wf3no-container, .framer-l6Zo4 .framer-1n26xa8-container, .framer-l6Zo4 .framer-bt6sod-container, .framer-l6Zo4 .framer-1a1wqzb-container, .framer-l6Zo4 .framer-g2k6y-container { flex: none; height: 100%; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-4euvlf { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 43px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-ok5iqz { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 115px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-nza1of-container, .framer-l6Zo4 .framer-29n73l-container, .framer-l6Zo4 .framer-101awgl-container, .framer-l6Zo4 .framer-1xk3lam-container, .framer-l6Zo4 .framer-1axwg1i-container, .framer-l6Zo4 .framer-uq65v5-container, .framer-l6Zo4 .framer-obmyzs-container, .framer-l6Zo4 .framer-54vsb9-container, .framer-l6Zo4 .framer-wbbocg-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-l6Zo4 .framer-5mu73z { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 179px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-b36b2r, .framer-l6Zo4 .framer-8k5ukj, .framer-l6Zo4 .framer-6e0dcc { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-gfq5ok, .framer-l6Zo4 .framer-tcj9av { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-46z73v, .framer-l6Zo4 .framer-uuikzy, .framer-l6Zo4 .framer-15w7ggd { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; left: 0px; padding: 0px; position: absolute; right: 0px; top: 0px; }`,
        `.framer-l6Zo4 .framer-1s8t26r, .framer-l6Zo4 .framer-1kgkm1x, .framer-l6Zo4 .framer-ukdrng, .framer-l6Zo4 .framer-1f8m206, .framer-l6Zo4 .framer-yekhjp, .framer-l6Zo4 .framer-3k33cd, .framer-l6Zo4 .framer-1aputc6, .framer-l6Zo4 .framer-14jbwg5, .framer-l6Zo4 .framer-1nucqul, .framer-l6Zo4 .framer-18ninto, .framer-l6Zo4 .framer-1j4j58s, .framer-l6Zo4 .framer-hski42, .framer-l6Zo4 .framer-1ytmofb, .framer-l6Zo4 .framer-17bcc5f, .framer-l6Zo4 .framer-13ba0po, .framer-l6Zo4 .framer-6u2xhf, .framer-l6Zo4 .framer-19n9rzy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-l6Zo4 .framer-t8n66s { align-content: center; align-items: center; aspect-ratio: 2 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-l6Zo4 .framer-1m51zwb { bottom: 14px; flex: none; height: auto; left: 16px; position: absolute; white-space: pre; width: auto; z-index: 2; }`,
        `.framer-l6Zo4 .framer-i99hrf { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 77px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1ioxhmw { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 49%; }`,
        `.framer-l6Zo4 .framer-xqz5hy { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-l6Zo4 .framer-1cybyq3 { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 16px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-l6Zo4 .framer-vl1uo4 { background-color: var(--token-2c3dcaf9-292a-4e6e-bcb0-445794caf139, #d9d9d9); border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; border-top-left-radius: 50%; border-top-right-radius: 50%; flex: none; height: 5px; position: relative; width: 5px; }`,
        `.framer-l6Zo4 .framer-1ruwwvw { flex: none; height: auto; max-width: 426px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l6Zo4 .framer-6nnme4 { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 41%; }`,
        `.framer-l6Zo4 .framer-xtwy23, .framer-l6Zo4 .framer-1x0qefz, .framer-l6Zo4 .framer-1skgmtt, .framer-l6Zo4 .framer-a34ibk, .framer-l6Zo4 .framer-13lnllq, .framer-l6Zo4 .framer-oe7p5 { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 12px 0px 12px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1yz869h { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 0px 179px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1rhgyph, .framer-l6Zo4 .framer-1szbp7e { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 28px 179px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-xpnfny { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 828px; overflow: hidden; padding: 24px 28px 51px 28px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-11ym1ra { --border-bottom-width: 0px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-iz40a9 { align-content: flex-end; align-items: flex-end; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 205px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1gi3jlb { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 57%; }`,
        `.framer-l6Zo4 .framer-1v28mlo { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 32%; }`,
        `.framer-l6Zo4 .framer-18b8q3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1hqoi48 { --border-bottom-width: 1px; --border-color: var(--token-67bdce6b-cb82-4858-81d2-6b6836295930, rgba(243, 243, 243, 0.12)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-13lxl6s { --framer-input-focused-border-color: var(--token-d7825663-e6b8-4112-bfd1-b6fab992d4bf, #6e4bff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-font-color: var(--token-4a14c563-a4f1-47d7-b5aa-39550489a8cf, #f3f3f3); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: -0.015em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 18px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-49f72bc3-4036-46c0-9fa1-3dcd44ff537e, #5e5e5e); flex: none; height: 44px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-jpj9nf { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1aqqi1j { flex: 0.8 0 0px; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l6Zo4 .framer-1tia3xu { align-content: flex-start; align-items: flex-start; background-color: rgba(0, 0, 0, 0); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l6Zo4 .framer-1612ocs-container { bottom: 64px; flex: none; height: auto; position: fixed; right: 20px; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        `.framer-l6Zo4 .framer-cnhhct-container { bottom: 113px; flex: none; height: auto; position: fixed; right: 20px; width: 190px; will-change: var(--framer-will-change-effect-override, transform); z-index: 9; }`,
        ...Ie,
        ...ot,
        ...et,
        ...nt,
        ...Xe,
        ...Ye,
        ...Me,
        `.framer-l6Zo4[data-border="true"]::after, .framer-l6Zo4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-l6Zo4.framer-hf6orh { width: 810px; } .framer-l6Zo4 .framer-17r31qx { padding: 0px 18px 0px 18px; } .framer-l6Zo4 .framer-4euvlf { padding: 0px 0px 28px 0px; } .framer-l6Zo4 .framer-ok5iqz { padding: 80px 18px 0px 18px; } .framer-l6Zo4 .framer-5mu73z { padding: 120px 18px 120px 18px; } .framer-l6Zo4 .framer-b36b2r, .framer-l6Zo4 .framer-8k5ukj, .framer-l6Zo4 .framer-6e0dcc, .framer-l6Zo4 .framer-1rhgyph, .framer-l6Zo4 .framer-1szbp7e { padding: 0px 18px 120px 18px; } .framer-l6Zo4 .framer-i99hrf { gap: 56px; padding: 0px 18px 120px 18px; } .framer-l6Zo4 .framer-tcj9av { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-l6Zo4 .framer-1ioxhmw, .framer-l6Zo4 .framer-6nnme4, .framer-l6Zo4 .framer-1gi3jlb { width: 100%; } .framer-l6Zo4 .framer-1yz869h { padding: 0px 0px 120px 0px; } .framer-l6Zo4 .framer-xpnfny { padding: 24px 18px 32px 18px; } .framer-l6Zo4 .framer-iz40a9 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 130px 0px 0px 0px; } .framer-l6Zo4 .framer-1v28mlo { width: 57%; }}`,
        `@media (max-width: 809.98px) { .framer-l6Zo4.framer-hf6orh { width: 390px; } .framer-l6Zo4 .framer-17r31qx { min-height: 680px; padding: 0px 16px 0px 16px; } .framer-l6Zo4 .framer-4euvlf { padding: 0px 0px 28px 0px; } .framer-l6Zo4 .framer-ok5iqz { padding: 80px 16px 0px 16px; } .framer-l6Zo4 .framer-5mu73z { padding: 120px 16px 120px 16px; } .framer-l6Zo4 .framer-b36b2r, .framer-l6Zo4 .framer-8k5ukj, .framer-l6Zo4 .framer-6e0dcc, .framer-l6Zo4 .framer-1rhgyph, .framer-l6Zo4 .framer-1szbp7e { padding: 0px 16px 120px 16px; } .framer-l6Zo4 .framer-gfq5ok, .framer-l6Zo4 .framer-tcj9av { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-l6Zo4 .framer-t8n66s { aspect-ratio: 1.3333 / 1; } .framer-l6Zo4 .framer-i99hrf { gap: 56px; padding: 0px 16px 120px 16px; } .framer-l6Zo4 .framer-1ioxhmw, .framer-l6Zo4 .framer-6nnme4, .framer-l6Zo4 .framer-1gi3jlb, .framer-l6Zo4 .framer-1v28mlo { width: 100%; } .framer-l6Zo4 .framer-1yz869h { padding: 0px 0px 120px 0px; } .framer-l6Zo4 .framer-xpnfny { padding: 24px 16px 28px 16px; } .framer-l6Zo4 .framer-11ym1ra { flex-direction: column; gap: 12px; justify-content: flex-start; } .framer-l6Zo4 .framer-iz40a9 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: flex-start; padding: 120px 0px 0px 0px; }}`,
      ],
      `framer-l6Zo4`
    )),
    ($.displayName = `Home 01`),
    ($.defaultProps = { height: 9403.5, width: 1280 }),
    T(
      $,
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
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...Jt,
        ...Yt,
        ...Xt,
        ...Zt,
        ...Qt,
        ...$t,
        ...en,
        ...tn,
        ...nn,
        ...rn,
        ...an,
        ...on,
        ...sn,
        ...cn,
        ...ln,
        ...un,
        ...fn,
        ...A(Le),
        ...A(st),
        ...A(Ge),
        ...A(rt),
        ...A(Qe),
        ...A(Ze),
        ...A(Ne),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => ue([() => E(Be, {}, t), () => E(he, {}, t), () => E(ge, {}, t)], t),
    }),
    (Tn = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraiXHfKTMN`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `9403.5`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"Zlt_RRgAq":{"pattern":":Zlt_RRgAq","name":"site"},"SXshTwgzI":{"pattern":":SXshTwgzI","name":"products"},"clRnCfRoK":{"pattern":":clRnCfRoK","name":"cases"},"TPPCrceEH":{"pattern":":TPPCrceEH","name":"figures"},"wABJY7hSv":{"pattern":":wABJY7hSv","name":"testimonials"},"T71aig18L":{"pattern":":T71aig18L","name":"pricing"},"DvV_HzpnD":{"pattern":":DvV_HzpnD","name":"cta"}}`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"eTvjycwCe":{"layout":["fixed","auto"]},"gqfiMmqZG":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1280`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Tn as __FramerMetadata__, $ as default, mn as queryParamNames };
//# sourceMappingURL=yduo1ny440YS0y7ktoFUxyYlCaLf1DyWce0-OXnYQuM.B3gV-5pw.mjs.map
