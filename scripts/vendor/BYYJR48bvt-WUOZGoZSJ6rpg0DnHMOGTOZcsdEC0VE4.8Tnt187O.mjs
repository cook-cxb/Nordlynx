import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { S as t, U as n, q as r } from "./framer.CKDq5C8y.mjs";
import { i, n as a } from "./dzeGrkSa8.GQ4PdegG.mjs";
function o(e, t) {
  let n = e?.F8WZDPH5k,
    r = e?.lwoG6K4kh;
  return {
    breakpoints: [
      { hash: `1r27xvr`, mediaQuery: `(min-width: 1280px)` },
      { hash: `1te2b5j`, mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)` },
      { hash: `youycl`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{lwoG6K4kh}}` : l(r)}`,
    elements: { b416sRgir: `apply` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-Ua9Pl`,
    title: `${n === void 0 ? `{{F8WZDPH5k}}` : l(n)} — Nordlys`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new t(),
    s = {
      from: { alias: `JtdSvG6rD`, data: a, type: `Collection` },
      select: [
        { collection: `JtdSvG6rD`, name: `F8WZDPH5k`, type: `Identifier` },
        { collection: `JtdSvG6rD`, name: `lwoG6K4kh`, type: `Identifier` },
      ],
      where: n(e, `JtdSvG6rD`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    i = {
      from: { alias: `JtdSvG6rD`, data: a, type: `Collection` },
      select: [
        { collection: `JtdSvG6rD`, name: `F8WZDPH5k`, type: `Identifier` },
        { collection: `JtdSvG6rD`, name: `lwoG6K4kh`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `JtdSvG6rD`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: o(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (r(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
f();
export {
  d as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  u as metadataVersion,
  f as t,
};
//# sourceMappingURL=BYYJR48bvt-WUOZGoZSJ6rpg0DnHMOGTOZcsdEC0VE4.8Tnt187O.mjs.map
