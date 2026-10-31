import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
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
import { N as d, k as f, o as p, q as m } from "./framer.CKDq5C8y.mjs";
import { p as h, w as g, x as _ } from "./shared-lib.W6te6cXm.mjs";
function v(e) {
  let n = a(null),
    [c, l] = i(null),
    d = g(),
    f = _(),
    [p, m] = i(!e.animate);
  (t(() => {
    let e = n.current,
      t = e?.parentElement?.closest(`[data-framer-name]`),
      i = e?.parentElement;
    if (!e || !i) return;
    let a = (t && t.querySelector(`[data-framer-name="VQuote"]`) ? t : i.parentElement) || i,
      o = () => {
        let t = e.getBoundingClientRect(),
          n = (n) => {
            let r = a.querySelector(`[data-framer-name="${n}"]`);
            if (!r) return null;
            let i = r.getBoundingClientRect(),
              o = t.height ? e.offsetHeight / t.height : 1;
            return { t: (i.top - t.top) * o, b: (i.bottom - t.top) * o };
          },
          r = a.getBoundingClientRect(),
          i = t.height ? e.offsetHeight / t.height : t.width ? e.offsetWidth / t.width : 1,
          o = n(`VTop`),
          s = n(`VQuote`),
          c = n(`VBy`);
        l(
          o && s && c
            ? { w: r.width * i, ox: (r.left - t.left) * i, oy: 0, top: o, quote: s, by: c }
            : null
        );
      };
    o();
    let s = new ResizeObserver(o);
    (s.observe(i),
      a
        .querySelectorAll(
          `[data-framer-name="VTop"],[data-framer-name="VQuote"],[data-framer-name="VBy"]`
        )
        .forEach((e) => s.observe(e)));
    let c = r.setTimeout(o, 600);
    return () => {
      (s.disconnect(), r.clearTimeout(c));
    };
  }, []),
    u(() => {
      if (!e.animate || f || d) {
        m(!0);
        return;
      }
      let t = n.current;
      if (!t) return;
      if (t.getBoundingClientRect().bottom < 0) {
        m(!0);
        return;
      }
      let r = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (m(!0), r.disconnect());
        },
        { rootMargin: `0px 0px -22% 0px` }
      );
      return (r.observe(t), () => r.disconnect());
    }, [e.animate, f, d]));
  let h = (e, t = 0.7) => ({ transition: `transform ${t}s ${y} ${e}s, opacity .3s ${e}s` }),
    v = c;
  return s(`div`, {
    ref: n,
    "aria-hidden": `true`,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      pointerEvents: `none`,
    },
    children:
      v &&
      o(`div`, {
        style: { position: `absolute`, left: v.ox, top: v.oy, width: v.w, height: 0 },
        children: [
          s(`i`, {
            style: {
              position: `absolute`,
              left: 0,
              top: v.top.t,
              width: 1,
              height: Math.max(0, v.quote.t - v.top.t),
              background: b,
              transformOrigin: `50% 0`,
              transform: p ? `none` : `scaleY(0)`,
              ...h(0),
            },
          }),
          s(`i`, {
            style: {
              position: `absolute`,
              left: 0,
              top: v.quote.t,
              width: v.w,
              height: 1,
              background: b,
              transformOrigin: `0 50%`,
              transform: p ? `none` : `scaleX(0)`,
              ...h(0.35, 0.8),
            },
          }),
          s(`i`, {
            style: {
              position: `absolute`,
              left: v.w - 5,
              top: v.quote.t - 4,
              width: 9,
              height: 9,
              background: `#F3F3F3`,
              boxShadow: `0 0 14px rgba(201,189,255,.5)`,
              transform: p ? `none` : `scale(0)`,
              transition: `transform .5s cubic-bezier(.34,1.56,.64,1) 1s`,
            },
          }),
          s(`i`, {
            style: {
              position: `absolute`,
              left: v.w - 1,
              top: v.quote.t,
              width: 1,
              height: v.quote.b - v.quote.t,
              background: `linear-gradient(rgba(243,243,243,.12), #6E4BFF 72%, rgba(110,75,255,.15))`,
              transformOrigin: `50% 0`,
              transform: p ? `none` : `scaleY(0)`,
              ...h(1.1, 0.8),
            },
          }),
          s(`i`, {
            style: {
              position: `absolute`,
              left: 0,
              top: v.quote.b - 1,
              width: v.w,
              height: 1,
              background: b,
              transformOrigin: `100% 50%`,
              transform: p ? `none` : `scaleX(0)`,
              ...h(1.5, 0.8),
            },
          }),
          s(`i`, {
            style: {
              position: `absolute`,
              left: 0,
              top: v.quote.b,
              width: 1,
              height: Math.max(0, v.by.b - v.quote.b),
              background: b,
              transformOrigin: `50% 0`,
              transform: p ? `none` : `scaleY(0)`,
              ...h(1.9),
            },
          }),
        ],
      }),
  });
}
var y,
  b,
  x = e(() => {
    (n(),
      c(),
      l(),
      m(),
      h(),
      (y = `cubic-bezier(.87,0,.13,1)`),
      (b = `rgba(243,243,243,.12)`),
      (v.defaultProps = { animate: !0 }),
      f(v, {
        animate: {
          type: p.Boolean,
          title: `Draw in`,
          description: `Lines draw in one after another when the card scrolls into view`,
        },
      }));
  }),
  S,
  C,
  w,
  T = e(() => {
    (m(),
      d.loadFonts([
        `GF;Geist Mono-regular`,
        `GF;Geist Mono-700`,
        `GF;Geist Mono-700italic`,
        `GF;Geist Mono-italic`,
      ]),
      (S = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `../../assets/fonts/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist Mono`,
              url: `../../assets/fonts/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeHaL55W7ihaO_CS.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist Mono`,
              url: `../../assets/fonts/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a5EX5Cl4PuCSdNg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Geist Mono`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist Mono`,
              url: `../../assets/fonts/or3wQ6H-1_WfwkMZI_qYFrIHlDMSVteuavT1a3YQ5Cl4PuCSdNg.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (C = [
        `.framer-QZS0r .framer-styles-preset-whytys:not(.rich-text-wrapper), .framer-QZS0r .framer-styles-preset-whytys.rich-text-wrapper p { --framer-font-family: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-bold-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-family-italic: "Geist Mono", "Geist Mono Placeholder", monospace; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.1em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-b63d417c-acbd-47bf-86cc-5329f9e4889d, #a6a6a6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (w = `framer-QZS0r`));
  }),
  E,
  D,
  O,
  k = e(() => {
    (m(),
      d.loadFonts([
        `GF;Inter Tight-regular`,
        `GF;Inter Tight-700`,
        `GF;Inter Tight-700italic`,
        `GF;Inter Tight-italic`,
      ]),
      (E = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qWSRToK8EPg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqWSRToK8EPg.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5SgqoUPvi5.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter Tight`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Inter Tight`,
              url: `../../assets/fonts/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5SgqoUPvi5.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (D = [
        `.framer-g3O2C .framer-styles-preset-16kvpq7:not(.rich-text-wrapper), .framer-g3O2C .framer-styles-preset-16kvpq7.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.012em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-4a14c563-a4f1-47d7-b5aa-39550489a8cf, #f3f3f3); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (O = `framer-g3O2C`));
  });
export { w as a, T as c, k as i, v as l, D as n, C as o, E as r, S as s, O as t, x as u };
//# sourceMappingURL=xVeHKGEs7.KwQ2VLq7.mjs.map
