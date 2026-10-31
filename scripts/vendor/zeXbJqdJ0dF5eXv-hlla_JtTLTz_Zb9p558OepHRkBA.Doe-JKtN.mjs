import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { S as t, U as n, q as r } from "./framer.CKDq5C8y.mjs";
import { a as i, r as a } from "./k3QcAAKya.NShUb68E.mjs";
function o(e, t) {
  let n = e?.K2EK0JLRZ,
    r = e?.dd7sbEcpH;
  return {
    breakpoints: [
      { hash: `14r6g2v`, mediaQuery: `(min-width: 1280px)` },
      { hash: `cnhbu2`, mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)` },
      { hash: `11shh8c`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{dd7sbEcpH}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-PSeY0`,
    title: `${n === void 0 ? `{{K2EK0JLRZ}}` : l(n)} — Nordlys`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let a = new t(),
    s = {
      from: { alias: `zX8G5Rmeb`, data: i, type: `Collection` },
      select: [
        { collection: `zX8G5Rmeb`, name: `K2EK0JLRZ`, type: `Identifier` },
        { collection: `zX8G5Rmeb`, name: `dd7sbEcpH`, type: `Identifier` },
      ],
      where: n(e, `zX8G5Rmeb`),
    },
    c = await a.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    a = {
      from: { alias: `zX8G5Rmeb`, data: i, type: `Collection` },
      select: [
        { collection: `zX8G5Rmeb`, name: `K2EK0JLRZ`, type: `Identifier` },
        { collection: `zX8G5Rmeb`, name: `dd7sbEcpH`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `zX8G5Rmeb`, name: t, type: `Identifier` });
  return (await r.query(a, n)).map((t) => ({
    metadata: o(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (r(),
      a(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=zeXbJqdJ0dF5eXv-hlla_JtTLTz_Zb9p558OepHRkBA.Doe-JKtN.mjs.map
