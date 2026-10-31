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
import { m, p as h, w as g, x as _ } from "./shared-lib.W6te6cXm.mjs";
import { a as v, n as y, r as b, t as x } from "./Inner-d2rabs.CpMZmyL3.mjs";
function S(e) {
  let t = e;
  for (let n = 0; n < 5 && t; n++) {
    let n = t.parentElement;
    if (!n) break;
    for (let r of Array.from(n.children)) {
      if (r === t || r.contains(e)) continue;
      if (r.hasAttribute(`data-framer-background-image-wrapper`) || r.tagName === `IMG`) return r;
      let n = getComputedStyle(r).backgroundImage;
      if (n && n.startsWith(`url(`) && !r.childElementCount) return r;
    }
    let r = getComputedStyle(n).backgroundImage;
    if (r && r.startsWith(`url(`)) return null;
    t = n;
  }
  return null;
}
function C(e) {
  let {
      contrast: n,
      brightness: c,
      mesh: l,
      parallax: d,
      corners: f,
      shade: p,
      reveal: m,
      cornerSet: h,
      overlay: b,
      label: x,
      chip: C,
      chipIcon: T,
    } = e,
    E = a(null),
    D = `nl-mesh-` + t().replace(/[^a-zA-Z0-9]/g, ``),
    O = g();
  (u(() => {
    let e = 0,
      t = 0,
      i = null,
      a = () => {
        if (((i = S(E.current)), !i)) {
          e++ < 20 && (t = r.setTimeout(a, 250));
          return;
        }
        ((i.style.cssText += `;` + w(n, c, l)),
          d &&
            !O &&
            !_() &&
            ((i.style.top = `-10%`),
            (i.style.bottom = `auto`),
            (i.style.height = `120%`),
            (i.style.willChange = `transform`)));
      };
    return (a(), () => r.clearTimeout(t));
  }, [n, c, l, d, O]),
    u(() => {
      if (!d || O || _()) return;
      let e = 0,
        t = () => {
          e = 0;
          let t = E.current?.parentElement,
            n = S(E.current);
          if (!t || !n) return;
          let i = t.getBoundingClientRect(),
            a = r.innerHeight;
          if (i.bottom < 0 || i.top > a) return;
          let o = (i.top + i.height / 2 - a / 2) / (a / 2 + i.height / 2);
          n.style.transform = `translate3d(0,${(-o * 8).toFixed(3)}%,0)`;
        },
        n = () => {
          e ||= requestAnimationFrame(t);
        },
        i = r.setTimeout(n, 50);
      return (
        r.addEventListener(`scroll`, n, { passive: !0 }),
        r.addEventListener(`resize`, n),
        () => {
          (r.clearTimeout(i),
            r.removeEventListener(`scroll`, n),
            r.removeEventListener(`resize`, n),
            cancelAnimationFrame(e));
        }
      );
    }, [d, O]),
    u(() => {
      if (!m || O || _()) return;
      let e = S(E.current)?.parentElement;
      if (!e) return;
      let t = 0,
        n = () => {
          t = 0;
          let n = e.getBoundingClientRect(),
            i = r.innerHeight,
            a = Math.max(0, Math.min(1, (i * 0.92 - n.top) / (i * 0.57))),
            o = (1 - a) * 12,
            s = (1 - a) * 10;
          e.style.clipPath = `inset(${o}% ${s}% ${o}% ${s}%)`;
        },
        i = () => {
          t ||= requestAnimationFrame(n);
        };
      return (
        n(),
        r.addEventListener(`scroll`, i, { passive: !0 }),
        r.addEventListener(`resize`, i),
        () => {
          (r.removeEventListener(`scroll`, i),
            r.removeEventListener(`resize`, i),
            cancelAnimationFrame(t),
            (e.style.clipPath = ``));
        }
      );
    }, [m, O]));
  let k = (e) => {
      if (!e || e.indexOf(`{`) < 0) return e;
      let t = E.current;
      if (!t || typeof document > `u`) return e.replace(/\{[^}]*\}/g, ``);
      let n = t.closest(`a`),
        r = n?.getAttribute(`href`) || ``,
        i = [
          ...(n ? [n] : []),
          ...(r ? Array.from(document.querySelectorAll(`a[href="${r}"]`)) : []),
          document,
        ];
      return e.replace(/\{([^}]*)\}/g, (e, t) => {
        for (let e of i) {
          let n = e.querySelector(`[data-framer-name="${t}"]`);
          if (n && (n.textContent || ``).trim()) return (n.textContent || ``).trim();
        }
        return ``;
      });
    },
    [A, j] = i({ label: x && x.indexOf(`{`) < 0 ? x : ``, chip: C && C.indexOf(`{`) < 0 ? C : `` });
  u(() => {
    let e = () => j({ label: k(x), chip: k(C) });
    e();
    let t = r.setTimeout(e, 400);
    return () => r.clearTimeout(t);
  }, [x, C]);
  let M = h || `all`,
    N = [
      ...([`all`, `top`, `diagonal`].includes(M) ? [`0 0/14px 1px`, `0 0/1px 14px`] : []),
      ...(M === `all` || M === `top` ? [`100% 0/14px 1px`, `100% 0/1px 14px`] : []),
      ...(M === `all` ? [`0 100%/14px 1px`, `0 100%/1px 14px`] : []),
      ...(M === `all` || M === `diagonal` ? [`100% 100%/14px 1px`, `100% 100%/1px 14px`] : []),
    ],
    P =
      b === `case`
        ? `radial-gradient(80% 60% at 100% 100%, rgba(110,75,255,.22), transparent 70%), linear-gradient(rgba(0,0,0,0) 55%, rgba(0,0,0,.75))`
        : b === `news`
          ? `radial-gradient(70% 60% at 100% 100%, rgba(110,75,255,.28), transparent 70%), linear-gradient(rgba(0,0,0,0) 55%, rgba(0,0,0,.6))`
          : ``,
    F = `${y}
.${D} .lb{position:absolute;top:18px;right:40px;font:400 10px/1.45 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:rgba(243,243,243,.75)}
.${D} .nl-chip{position:absolute;left:16px;bottom:16px;pointer-events:auto}
a:hover .${D} .nl-di,.${D} .nl-chip:hover .nl-di{filter:drop-shadow(0 0 4px rgba(110,75,255,.9))}
a:hover .${D} .nl-di circle,.${D} .nl-chip:hover .nl-di circle{opacity:1;fill:#C9BDFF}
a:hover .${D} .nl-chip{box-shadow:inset 0 0 0 1px rgba(201,189,255,.45)}`,
    I = `[data-framer-background-image-wrapper]:has(~ * .${D}),[data-framer-background-image-wrapper]:has(~ .${D}){${w(n, c, l)}}`;
  return o(`div`, {
    ref: E,
    className: D,
    "aria-hidden": `true`,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      pointerEvents: `none`,
    },
    children: [
      s(`style`, { dangerouslySetInnerHTML: { __html: I } }),
      (x || C) && s(`style`, { dangerouslySetInnerHTML: { __html: F } }),
      p &&
        s(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            background: `linear-gradient(rgba(0,0,0,0) 60%, rgba(0,0,0,.55))`,
          },
        }),
      P && s(`div`, { style: { position: `absolute`, inset: 0, background: P } }),
      f &&
        s(`div`, {
          style: {
            position: `absolute`,
            inset: 14,
            opacity: 0.7,
            background: N.map((e) => `linear-gradient(#F3F3F3,#F3F3F3) ${e} no-repeat`).join(`,`),
          },
        }),
      x && A.label ? s(`span`, { className: `lb`, children: A.label }) : null,
      C && A.chip ? o(`span`, { className: `nl-chip`, children: [v(T || `chip`), A.chip] }) : null,
    ],
  });
}
var w,
  T = e(() => {
    (n(),
      c(),
      l(),
      p(),
      h(),
      x(),
      (w = (e, t, n) =>
        `filter:grayscale(1) contrast(${e}) brightness(${t});` +
        (n
          ? `-webkit-mask-image:${m};mask-image:${m};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px;-webkit-mask-repeat:repeat;mask-repeat:repeat;`
          : ``)),
      (C.defaultProps = {
        contrast: 1.08,
        brightness: 0.82,
        mesh: !0,
        parallax: !1,
        corners: !1,
        shade: !1,
        reveal: !1,
        cornerSet: `all`,
        overlay: `none`,
        label: ``,
        chip: ``,
        chipIcon: `chip`,
      }),
      d(C, {
        contrast: { type: f.Number, title: `Contrast`, min: 0.8, max: 1.4, step: 0.01 },
        brightness: { type: f.Number, title: `Brightness`, min: 0.4, max: 1.2, step: 0.01 },
        mesh: { type: f.Boolean, title: `Mesh`, description: `The perforated hex pattern` },
        parallax: {
          type: f.Boolean,
          title: `Parallax`,
          description: `Photo drifts while the page scrolls`,
        },
        corners: { type: f.Boolean, title: `Corners`, description: `Hairline corner marks` },
        shade: {
          type: f.Boolean,
          title: `Shade`,
          description: `Dark fade at the bottom for captions`,
        },
        reveal: {
          type: f.Boolean,
          title: `Reveal`,
          description: `The frame opens from an inset while it scrolls in`,
        },
        cornerSet: {
          type: f.Enum,
          title: `Corner set`,
          options: [`all`, `top`, `diagonal`],
          optionTitles: [`All four`, `Top two`, `Top-left + bottom-right`],
          hidden: (e) => !e.corners,
        },
        overlay: {
          type: f.Enum,
          title: `Overlay`,
          options: [`none`, `case`, `news`],
          optionTitles: [`None`, `Case (violet 22%)`, `News (violet 28%)`],
        },
        label: {
          type: f.String,
          title: `Label`,
          description: `Top right. {Layer name} inserts that layer's text`,
        },
        chip: {
          type: f.String,
          title: `Chip`,
          description: `Bottom left glass chip. e.g. {GPUs} GPUs · {Site}`,
        },
        chipIcon: { type: f.Enum, title: `Chip icon`, options: b, hidden: (e) => !e.chip },
      }));
  });
export { T as n, C as t };
//# sourceMappingURL=Mesh.BJnCAXXu.mjs.map
