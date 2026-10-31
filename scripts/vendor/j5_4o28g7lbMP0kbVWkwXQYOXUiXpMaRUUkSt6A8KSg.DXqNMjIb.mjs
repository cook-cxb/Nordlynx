import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { S as t, U as n, q as r } from "./framer.CKDq5C8y.mjs";
import { i, t as a } from "./s7TqDO7B2.D7yYim1s.mjs";
function o(e, t) {
  let n = e?.YFyJuaDIZ,
    r = e?.UnGiPgSff;
  return {
    breakpoints: [
      { hash: `71spnw`, mediaQuery: `(min-width: 1280px)` },
      { hash: `ejkg9m`, mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)` },
      { hash: `uglu5g`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{UnGiPgSff}}` : l(r)}`,
    elements: { OrT7Cl3ge: `story` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-aD636`,
    title: `${n === void 0 ? `{{YFyJuaDIZ}}` : l(n)} — Nordlys`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new t(),
    s = {
      from: { alias: `PjrO0w6gt`, data: a, type: `Collection` },
      select: [
        { collection: `PjrO0w6gt`, name: `YFyJuaDIZ`, type: `Identifier` },
        { collection: `PjrO0w6gt`, name: `UnGiPgSff`, type: `Identifier` },
      ],
      where: n(e, `PjrO0w6gt`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    i = {
      from: { alias: `PjrO0w6gt`, data: a, type: `Collection` },
      select: [
        { collection: `PjrO0w6gt`, name: `YFyJuaDIZ`, type: `Identifier` },
        { collection: `PjrO0w6gt`, name: `UnGiPgSff`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `PjrO0w6gt`, name: t, type: `Identifier` });
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
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=j5_4o28g7lbMP0kbVWkwXQYOXUiXpMaRUUkSt6A8KSg.DXqNMjIb.mjs.map
