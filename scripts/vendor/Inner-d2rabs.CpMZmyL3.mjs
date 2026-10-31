import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { I as t, R as n, _ as r, b as i, l as a, o, s, w as c, y as l } from "./react.Dlpel5Rf.mjs";
import { k as u, o as d, q as f } from "./framer.CKDq5C8y.mjs";
import {
  C as p,
  a as m,
  d as h,
  g,
  h as _,
  m as v,
  o as y,
  p as b,
  w as x,
  x as S,
  y as C,
} from "./shared-lib.W6te6cXm.mjs";
import { t as w } from "./Parts-ISc5PT.Do1ptRxj.mjs";
function T({ name: e, style: t }) {
  return o(`svg`, {
    className: `nl-di`,
    viewBox: `0 0 33 21`,
    "aria-hidden": `true`,
    style: t,
    children: (M[e] || M.snow)
      .split(` `)
      .map((e) => e.split(`,`).map(Number))
      .map(([e, t], n) =>
        o(
          `circle`,
          { cx: 1.5 + e * 3, cy: 1.5 + t * 3, r: `.9`, style: { transitionDelay: n * 12 + `ms` } },
          n
        )
      ),
  });
}
function E(e) {
  let t = i(null),
    s = p(t),
    c = x(),
    u = S(),
    d = !u && !c,
    f = n !== void 0 && !u ? n.innerHeight : 900,
    m = j(16, 2.2, 32, s),
    v = Math.max(e.minPx, Math.min(e.maxPx, (f * e.minVh) / 100)),
    [b, w] = r(``);
  l(() => {
    if (e.layout !== `now`) return;
    let t = () =>
      w(
        new Date().toLocaleTimeString(`en-GB`, {
          hour: `2-digit`,
          minute: `2-digit`,
          timeZone: `Europe/Oslo`,
        }) + ` CET`
      );
    if ((t(), u)) return;
    let r = n.setInterval(t, 1e3);
    return () => n.clearInterval(r);
  }, [e.layout, u]);
  let T = 0,
    D = (e) =>
      e
        .split(/(\s+)/)
        .map((e, t) =>
          /^\s+$/.test(e) || !e
            ? e
            : o(
                `span`,
                {
                  className: `wd`,
                  children: Array.from(e).map((e, t) =>
                    o(
                      `span`,
                      {
                        className: `ch`,
                        style: { animationDelay: (0.15 + T++ * 0.02).toFixed(3) + `s` },
                        children: e,
                      },
                      t
                    )
                  ),
                },
                t
              )
        ),
    O = 0,
    k = () => ({ animationDelay: (0.4 + O++ * 0.08).toFixed(2) + `s` }),
    A = e.layout === `price`,
    M = s <= 600 ? j(96, 30, 140, s) : j(96, 17, 280, s),
    N = j(9, 0.9, 14, s);
  return a(`section`, {
    ref: t,
    className:
      `nl-ph` +
      (d ? ` anim` : ``) +
      (e.stackMeta ? ` stack` : ``) +
      (e.photo && e.photo !== `none` ? ` photo` : ``) +
      g(s),
    style: {
      ...e.style,
      minHeight: v,
      paddingLeft: m,
      paddingRight: m,
      paddingBottom: j(32, 4, 56, s),
    },
    children: [
      C(),
      o(`style`, { dangerouslySetInnerHTML: { __html: L } }),
      o(`div`, {
        className: `bg`,
        "aria-hidden": `true`,
        children: o(y, {
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
      e.photo && e.photo !== `none`
        ? o(`img`, { className: `hbg`, src: _[e.photo], alt: ``, "aria-hidden": `true` })
        : null,
      o(`div`, { className: `shade`, style: { background: I[e.shade] || I.left } }),
      e.frame
        ? o(`i`, {
            className: `frm`,
            "aria-hidden": `true`,
            style:
              s <= 600 ? { inset: `72px 10px 10px` } : { top: 76, left: m, right: m, bottom: 16 },
          })
        : null,
      A &&
        a(`div`, {
          className: `top mono in`,
          style: { left: m, right: m, ...k() },
          children: [
            o(`span`, { className: `live eb`, children: e.eyebrow }),
            o(`span`, { className: `r2`, children: e.topRight }),
          ],
        }),
      a(`div`, {
        className: `grid`,
        children: [
          a(`div`, {
            className: `l`,
            children: [
              !A && o(`span`, { className: `eb mono live in`, style: k(), children: e.eyebrow }),
              A
                ? a(`h1`, {
                    style: { display: `flex`, flexDirection: `column`, gap: j(18, 2, 30, s) },
                    "aria-label": `${e.currency}${e.price} ${e.priceLine} ${e.priceTone}`,
                    children: [
                      a(`span`, {
                        className: `big`,
                        "aria-hidden": `true`,
                        style: { fontSize: M },
                        children: [
                          o(`span`, { className: `cu`, children: e.currency }),
                          e.price,
                          o(`i`, { className: `nd`, style: { width: N, height: N } }),
                        ],
                      }),
                      a(`span`, {
                        className: `pl`,
                        "aria-hidden": `true`,
                        style: { fontSize: s <= 600 ? 24 : j(22, 2.2, 36, s) },
                        children: [
                          d ? D(e.priceLine) : e.priceLine,
                          ` `,
                          o(`span`, {
                            className: `tone`,
                            children: d ? D(e.priceTone) : e.priceTone,
                          }),
                        ],
                      }),
                    ],
                  })
                : o(`h1`, {
                    style: {
                      fontSize: j(e.titleMin ?? 40, e.titleFluid ?? 5.6, e.titleMax ?? 96, s),
                      maxWidth: e.titleMaxWidth > 0 ? e.titleMaxWidth + `em` : void 0,
                    },
                    "aria-label": e.title + ` ` + e.tone,
                    children: a(`span`, {
                      "aria-hidden": `true`,
                      children: [
                        d ? D(e.title) : e.title,
                        ` `,
                        o(`span`, {
                          className: `tone ` + (e.toneLine ? `blk` : `nw`),
                          children: d ? D(e.tone) : e.tone,
                        }),
                      ],
                    }),
                  }),
            ],
          }),
          a(`div`, {
            className: `r`,
            children: [
              e.text ? o(`p`, { className: `in`, style: k(), children: e.text }) : null,
              e.layout === `now`
                ? a(`div`, {
                    className: `now in`,
                    style: k(),
                    "aria-label": e.nowLabel,
                    children: [
                      a(`div`, {
                        className: `now-top mono`,
                        children: [
                          o(`span`, { className: `live`, children: e.nowLabel }),
                          o(`span`, { children: b }),
                        ],
                      }),
                      o(`div`, {
                        className: `now-row`,
                        children: (e.nowItems || []).map((e, t) =>
                          a(
                            `div`,
                            {
                              children: [
                                o(`span`, { className: `mono`, children: e.label }),
                                a(`b`, {
                                  children: [
                                    e.value,
                                    e.unit ? o(`small`, { children: e.unit }) : null,
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    ],
                  })
                : null,
              (e.buttons || []).length
                ? o(`div`, {
                    className: `btns in`,
                    style: k(),
                    children: e.buttons.map((e, t) =>
                      o(
                        h,
                        {
                          label: e.label,
                          link: e.link || E.defaultProps.buttons[t]?.link,
                          ghost: e.ghost,
                          newTab: !1,
                          submit: !1,
                          visual: !1,
                          full: !1,
                        },
                        t
                      )
                    ),
                  })
                : null,
            ],
          }),
        ],
      }),
      (e.meta || []).length
        ? o(`div`, {
            className: `meta in`,
            style: { marginTop: j(40, 5, 72, s), ...k() },
            children: e.meta.map((e, t) =>
              a(
                `div`,
                {
                  children: [
                    o(`span`, { className: `mono`, children: e.label }),
                    o(`b`, { className: e.violet ? `v` : ``, children: e.value }),
                  ],
                },
                t
              )
            ),
          })
        : null,
    ],
  });
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (t(),
      s(),
      c(),
      f(),
      b(),
      m(),
      w(),
      (D = `font-family:"Geist Mono",ui-monospace,monospace;font-weight:400;font-size:10px;letter-spacing:.1em;text-transform:uppercase;line-height:1.45`),
      (O = `font-family:"Inter Tight",ui-sans-serif,system-ui,sans-serif;color:#F3F3F3;-webkit-font-smoothing:antialiased;font-weight:500;font-size:16px;line-height:1.45;letter-spacing:.01em;box-sizing:border-box`),
      (k = `rgba(243,243,243,.12)`),
      (A = `cubic-bezier(.16,1,.3,1)`),
      (j = (e, t, n, r) => Math.max(e, Math.min(n, (r * t) / 100))),
      (M = {
        wind: `6,0 0,1 1,1 2,1 3,1 4,1 5,1 6,1 8,1 10,2 0,3 1,3 2,3 3,3 4,3 5,3 6,3 8,3 6,4 0,6 2,6 4,6 6,6 8,6 10,6`,
        snow: `5,0 2,1 5,1 8,1 3,2 5,2 7,2 0,3 1,3 2,3 3,3 4,3 5,3 6,3 7,3 8,3 9,3 10,3 3,4 5,4 7,4 2,5 5,5 8,5 5,6`,
        hydro: `6,0 7,0 5,1 6,1 4,2 5,2 3,3 4,3 5,3 6,3 7,3 8,3 5,4 6,4 4,5 5,5 3,6 4,6`,
        shield: `3,0 4,0 5,0 6,0 7,0 2,1 8,1 2,2 8,2 1,3 2,3 3,3 4,3 5,3 6,3 7,3 8,3 9,3 1,4 5,4 9,4 1,5 5,5 9,5 1,6 2,6 3,6 4,6 5,6 6,6 7,6 8,6 9,6`,
        drop: `5,0 4,1 6,1 3,2 7,2 2,3 8,3 2,4 5,4 8,4 3,5 7,5 4,6 5,6 6,6`,
        heat: `2,0 3,0 4,0 5,0 6,0 7,0 8,0 1,1 9,1 0,2 4,2 5,2 6,2 10,2 0,3 3,3 7,3 10,3 0,4 4,4 5,4 6,4 10,4 1,5 9,5 2,6 3,6 4,6 6,6 7,6 8,6`,
        chip: `1,0 3,0 5,0 7,0 9,0 0,1 1,1 2,1 3,1 4,1 5,1 6,1 7,1 8,1 9,1 10,1 0,2 10,2 0,3 3,3 4,3 5,3 6,3 7,3 10,3 0,4 10,4 0,5 1,5 2,5 3,5 4,5 5,5 6,5 7,5 8,5 9,5 10,5 1,6 3,6 5,6 7,6 9,6`,
        pulse: `4,0 4,1 3,2 5,2 0,3 1,3 3,3 5,3 7,3 9,3 10,3 2,4 6,4 8,4 6,5 8,5 7,6`,
      }),
      (N = Object.keys(M)),
      (P = `
.nl-di{width:34px;height:22px;flex:none;color:#F3F3F3;overflow:visible}
.nl-di circle{fill:currentColor;opacity:.55;transition:opacity .35s,fill .35s}
.lit .nl-di{transition:filter .5s}
.lit:hover .nl-di,.lit:focus-visible .nl-di{filter:drop-shadow(0 0 4px rgba(110,75,255,.9))}
.lit:hover .nl-di circle,.lit:focus-visible .nl-di circle{opacity:1;fill:#C9BDFF}
.nl-chip{display:inline-flex;align-items:center;gap:16px;padding:14px 20px 14px 16px;background:rgba(10,8,18,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:inset 0 0 0 1px ${k};font:400 11px/1 "Geist Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#F3F3F3;transition:box-shadow .4s;box-sizing:border-box}
.nl-chip:hover{box-shadow:inset 0 0 0 1px rgba(201,189,255,.45)}
.nl-chip .nl-di{width:28px;height:18px}
`),
      (F = (e, t) => o(T, { name: e, style: t })),
      (I = {
        left: `radial-gradient(38% 46% at 100% 78%,rgba(0,0,0,.62),transparent 72%),linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.15) 60%,rgba(0,0,0,.35)),linear-gradient(180deg,rgba(0,0,0,.45),transparent 35%,rgba(0,0,0,.75))`,
        right: `linear-gradient(180deg,rgba(0,0,0,.25),transparent 30%,rgba(0,0,0,.82) 88%),linear-gradient(270deg,rgba(0,0,0,.7),transparent 60%)`,
        price: `radial-gradient(38% 46% at 100% 78%,rgba(0,0,0,.62),transparent 72%),linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.1) 55%,rgba(0,0,0,.4)),linear-gradient(180deg,rgba(0,0,0,.45),transparent 35%,rgba(0,0,0,.75))`,
      }),
      (L = `
.nl-ph{${O};position:relative;isolation:isolate;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding-top:120px;width:100%}
.nl-ph .mono{${D}}
.nl-ph .bg{position:absolute;inset:0;z-index:-2}
.nl-ph .hbg{position:absolute;inset:0;z-index:-3;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1) brightness(.5);-webkit-mask-image:${v};mask-image:${v};-webkit-mask-size:5px 8.66px;mask-size:5px 8.66px}
.nl-ph.photo .bg{mix-blend-mode:screen;opacity:.9}
.nl-ph .frm{position:absolute;z-index:3;pointer-events:none;opacity:.75;background:linear-gradient(#F3F3F3,#F3F3F3) 0 0/14px 1px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 0 0/1px 14px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 100% 0/14px 1px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 100% 0/1px 14px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 0 100%/14px 1px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 0 100%/1px 14px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 100% 100%/14px 1px no-repeat,linear-gradient(#F3F3F3,#F3F3F3) 100% 100%/1px 14px no-repeat}
.nl-ph .shade{position:absolute;inset:0;z-index:-1;pointer-events:none}
.nl-ph .eb{display:flex;align-items:center;gap:10px;color:#A6A6A6}
.nl-ph .live::before{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#D9D9D9;animation:nl-ph-blink 1.6s infinite}
@keyframes nl-ph-blink{50%{opacity:.25}}
.nl-ph h1{margin:0;font-weight:400;letter-spacing:-.045em;line-height:.95;text-wrap:balance}
.nl-ph h1 .tone{color:#A6A6A6}
.nl-ph h1 .tone.nw{white-space:nowrap}
.nl-ph h1 .tone.blk{display:block}
.nl-ph .wd{display:inline-block;white-space:nowrap}
.nl-ph .ch{display:inline-block}
.nl-ph .grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:24px;align-items:end}
.nl-ph .l{grid-column:1 / span 8;display:flex;flex-direction:column;gap:26px}
.nl-ph .r{grid-column:9 / span 4;display:flex;flex-direction:column;align-items:flex-end;gap:18px;text-align:right}
.nl-ph .r p{margin:0;color:#A6A6A6;font-weight:400;max-width:34ch;text-wrap:balance}
.nl-ph .btns{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.nl-ph .meta{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid ${k}}
.nl-ph .meta > div{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:14px 16px 0 0;min-width:0}
.nl-ph .meta > div + div{padding-left:16px;border-left:1px solid ${k}}
.nl-ph .meta .mono{color:#A6A6A6}
.nl-ph .meta b{font-weight:500;font-size:14px;white-space:nowrap}
.nl-ph .meta b.v{color:#C9BDFF}
.nl-ph.stack .meta > div{flex-direction:column;align-items:flex-start;gap:8px;padding-bottom:14px}
.nl-ph .top{position:absolute;top:104px;display:flex;justify-content:space-between;gap:16px;color:#A6A6A6}
.nl-ph .big{position:relative;display:block;width:max-content;font-family:"Geist Mono",monospace;font-weight:400;line-height:.78;letter-spacing:-.085em;font-feature-settings:"zero" 1;color:#F3F3F3}
.nl-ph .big .cu{font-size:.42em;letter-spacing:-.04em;vertical-align:.95em;margin-right:.06em;color:#A6A6A6}
.nl-ph .big .nd{position:absolute;right:-.1em;top:.02em;background:#C9BDFF;box-shadow:0 0 0 4px rgba(110,75,255,.22),0 0 24px rgba(110,75,255,.95)}
.nl-ph .pl{display:block;font-weight:400;letter-spacing:-.03em;line-height:1.1;max-width:24ch}
.nl-ph .pl .tone{color:#A6A6A6}
.nl-ph .now{width:min(360px,100%);text-align:left;background:rgba(10,8,18,.55);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:inset 0 0 0 1px ${k}}
.nl-ph .now-top{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid ${k};color:#A6A6A6}
.nl-ph .now-top .live{color:#F3F3F3}
.nl-ph .now-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.nl-ph .now-row > div{display:flex;flex-direction:column;gap:10px;padding:14px}
.nl-ph .now-row > div + div{border-left:1px solid ${k}}
.nl-ph .now-row .mono{color:#A6A6A6;font-size:9px}
.nl-ph .now-row b{font:400 20px/1 "Geist Mono",monospace;letter-spacing:-.05em;font-variant-numeric:tabular-nums;white-space:nowrap}
.nl-ph .now-row b small{font-size:11px;letter-spacing:0;color:#A6A6A6;margin-left:2px}
@keyframes nl-ph-ch{from{opacity:0;filter:blur(16px);transform:translateY(.18em)}to{opacity:1;filter:blur(0);transform:none}}
@keyframes nl-ph-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.nl-ph.anim h1 .ch{animation:nl-ph-ch 1.3s cubic-bezier(.215,.61,.355,1) both}
.nl-ph.anim .in{animation:nl-ph-up 1.1s ${A} both}
.nl-ph.is-md .l,.nl-ph.is-md .r{grid-column:1 / -1}
.nl-ph.is-md .r{align-items:flex-start;text-align:left}
.nl-ph.is-md .btns{justify-content:flex-start}
.nl-ph.is-md .meta{grid-template-columns:repeat(2,minmax(0,1fr))}
.nl-ph.is-md .meta > div:nth-child(3){padding-left:0;border-left:0}
.nl-ph.is-md .meta > div:nth-child(n+3){border-top:1px solid ${k};margin-top:14px}
.nl-ph.is-md .top{top:88px}
.nl-ph.is-md h1{white-space:normal}
.nl-ph.is-sm .meta{grid-template-columns:1fr}
.nl-ph.is-sm .meta > div:nth-child(n){padding:12px 0;border-left:0;margin-top:0}
.nl-ph.is-sm .meta > div:nth-child(n+2){border-top:1px solid ${k}}
.nl-ph.is-sm .meta b{white-space:normal;text-align:right}
.nl-ph.is-sm.stack .meta > div{flex-direction:row;align-items:baseline}
.nl-ph.is-sm .top .r2{display:none}
`),
      (E.defaultProps = {
        layout: `standard`,
        eyebrow: `Pricing · All-in per GPU-hour`,
        title: `Priced per GPU-hour.`,
        tone: `Nothing else.`,
        toneLine: !1,
        titleMin: 40,
        titleFluid: 5.6,
        titleMax: 96,
        titleMaxWidth: 0,
        text: `Power, cooling, fabric and checkpoint storage are in the rate. Longer terms lower it.`,
        buttons: [{ label: `Request a quote`, link: `/contact-01`, ghost: !1 }],
        meta: [
          { label: `From`, value: `$1.46 / GPU-hr`, violet: !1 },
          { label: `Power`, value: `98.7% hydro`, violet: !1 },
          { label: `Minimum term`, value: `None`, violet: !1 },
          { label: `Billing`, value: `Monthly · EUR or USD`, violet: !1 },
        ],
        stackMeta: !1,
        topRight: ``,
        currency: `$`,
        price: `1.46`,
        priceLine: `per GPU-hour, three-year Sovereign,`,
        priceTone: `all-in.`,
        nowLabel: `Narvik now`,
        nowItems: [
          { label: `Outside`, value: `−4.2`, unit: `°C` },
          { label: `PUE`, value: `1.08`, unit: `` },
          { label: `Hydro`, value: `98.7`, unit: `%` },
        ],
        minVh: 72,
        minPx: 520,
        maxPx: 780,
        shade: `left`,
        photo: `none`,
        frame: !1,
        lightX: 0.64,
        lightY: 0.74,
        gain: 2.6,
        rib: 10,
        spread: 1.1,
        seed: 31,
      }),
      u(E, {
        layout: {
          type: d.Enum,
          title: `Layout`,
          options: [`standard`, `price`, `now`],
          optionTitles: [`Standard`, `Big price`, `Live panel`],
        },
        eyebrow: { type: d.String, title: `Eyebrow` },
        title: { type: d.String, title: `Title`, hidden: (e) => e.layout === `price` },
        tone: { type: d.String, title: `Title (grey)`, hidden: (e) => e.layout === `price` },
        toneLine: {
          type: d.Boolean,
          title: `Grey on new line`,
          hidden: (e) => e.layout === `price`,
        },
        titleMin: {
          type: d.Number,
          title: `Title min`,
          min: 16,
          max: 200,
          unit: `px`,
          hidden: (e) => e.layout === `price`,
        },
        titleFluid: {
          type: d.Number,
          title: `Title fluid`,
          min: 1,
          max: 20,
          step: 0.1,
          unit: `%`,
          description: `Size as % of page width`,
          hidden: (e) => e.layout === `price`,
        },
        titleMax: {
          type: d.Number,
          title: `Title max`,
          min: 16,
          max: 300,
          unit: `px`,
          hidden: (e) => e.layout === `price`,
        },
        titleMaxWidth: {
          type: d.Number,
          title: `Title width`,
          min: 0,
          max: 40,
          step: 0.5,
          unit: `em`,
          description: `0 = no limit`,
          hidden: (e) => e.layout === `price`,
        },
        topRight: { type: d.String, title: `Top right`, hidden: (e) => e.layout !== `price` },
        currency: { type: d.String, title: `Currency`, hidden: (e) => e.layout !== `price` },
        price: { type: d.String, title: `Price`, hidden: (e) => e.layout !== `price` },
        priceLine: { type: d.String, title: `Price line`, hidden: (e) => e.layout !== `price` },
        priceTone: {
          type: d.String,
          title: `Price line (grey)`,
          hidden: (e) => e.layout !== `price`,
        },
        text: { type: d.String, title: `Text`, displayTextArea: !0 },
        nowLabel: { type: d.String, title: `Panel title`, hidden: (e) => e.layout !== `now` },
        nowItems: {
          type: d.Array,
          title: `Panel values`,
          hidden: (e) => e.layout !== `now`,
          control: {
            type: d.Object,
            controls: {
              label: { type: d.String, title: `Label` },
              value: { type: d.String, title: `Value` },
              unit: { type: d.String, title: `Unit` },
            },
          },
        },
        buttons: {
          type: d.Array,
          title: `Buttons`,
          maxCount: 2,
          control: {
            type: d.Object,
            controls: {
              label: { type: d.String, title: `Label` },
              link: { type: d.Link, title: `Link` },
              ghost: { type: d.Boolean, title: `Ghost` },
            },
          },
        },
        meta: {
          type: d.Array,
          title: `Facts`,
          maxCount: 4,
          control: {
            type: d.Object,
            controls: {
              label: { type: d.String, title: `Label` },
              value: { type: d.String, title: `Value` },
              violet: { type: d.Boolean, title: `Violet` },
            },
          },
        },
        stackMeta: { type: d.Boolean, title: `Facts stacked` },
        minVh: { type: d.Number, title: `Height (vh)`, min: 30, max: 100, unit: `vh` },
        minPx: { type: d.Number, title: `Min height`, min: 300, max: 1200, unit: `px` },
        maxPx: { type: d.Number, title: `Max height`, min: 300, max: 1400, unit: `px` },
        shade: {
          type: d.Enum,
          title: `Shade`,
          options: [`left`, `right`, `price`],
          optionTitles: [`Dark left`, `Dark right`, `Price`],
        },
        photo: {
          type: d.Enum,
          title: `Photo`,
          options: [`none`, `tourColdAisle`, `racks`, `trays`, `hero`, `narvikCampus`, `company02`],
          optionTitles: [
            `None`,
            `Cold aisle tour`,
            `Racks`,
            `Cable trays`,
            `Hall`,
            `Narvik campus`,
            `Narvik fjord`,
          ],
          description: `Grayscale mesh photo behind the light`,
        },
        frame: { type: d.Boolean, title: `Corner frame` },
        lightX: { type: d.Number, title: `Light X`, min: 0, max: 1, step: 0.01 },
        lightY: { type: d.Number, title: `Light Y`, min: 0, max: 1.2, step: 0.01 },
        gain: { type: d.Number, title: `Gain`, min: 0.5, max: 4, step: 0.05 },
        rib: { type: d.Number, title: `Rib`, min: 4, max: 40, step: 1 },
        spread: { type: d.Number, title: `Spread`, min: 0.4, max: 3, step: 0.05 },
        seed: { type: d.Number, title: `Seed`, min: 0, max: 99, step: 1 },
      }));
  }),
  z = e(() => {
    R();
  });
export { F as a, E as i, P as n, R as o, N as r, z as t };
//# sourceMappingURL=Inner-d2rabs.CpMZmyL3.mjs.map
