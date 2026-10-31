import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  I as n,
  L as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  g as p,
  h as m,
  i as h,
  n as g,
  r as _,
  t as v,
  w as y,
  y as b,
} from "./react.Dlpel5Rf.mjs";
import {
  Dt as x,
  Et as S,
  G as C,
  J as w,
  K as T,
  Q as E,
  X as D,
  bt as O,
  dt as k,
  et as A,
  gt as j,
  h as M,
  it as N,
  ot as P,
  p as F,
  q as I,
  rt as L,
  s as R,
  v as z,
  y as B,
} from "./framer.CKDq5C8y.mjs";
async function V({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: u,
  contentLocaleId: p,
  shouldResolveInitialRouteContentState: m = !1,
}) {
  let g = W[e].page.preload();
  (N({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    L(J));
  let _ = f(z, {
    children: f(F, {
      children: f(B, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        canonicalPathVariables: r,
        routes: W,
        collectionUtils: K,
        serverDatabaseClient: q,
        framerSiteId: J,
        notFoundPage: w(() => import("./jATABu-K4Xri3MvVcI4PV5a8E5Ky_hWj0effHUTrNIY.j2TA1OSi.mjs")),
        isReducedMotion: !0,
        localeId: i,
        locales: G,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://nordlys-template.framer.website`,
        EditorBar:
          s === void 0
            ? void 0
            : (() => {
                if (X) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return w(async () => {
                  s.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: k, useLocaleInfo: j, useRouter: O },
                    react: {
                      createElement: f,
                      Fragment: o,
                      memo: c,
                      useCallback: a,
                      useEffect: b,
                      useRef: d,
                      useState: l,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new M(
          () => import("./CWDLmgnPDFRYuHOtLftizoYc9pdw6-K8vVzZZ8R-uDE.CCjUfHEU.mjs")
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: p,
      }),
    }),
    value: { routes: {} },
  });
  return (await g, _);
}
function H() {
  Y && s.__framer_events.push(arguments);
}
async function U(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || s.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    H(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, a, o, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = E(W, r)));
    else {
      E(W, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!r || !a) {
        let e = C(W, decodeURIComponent(location.pathname), !0, G);
        ((r = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = V({
      routeId: r,
      localeId: a,
      contentLocaleId: o,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    s !== void 0 &&
      (async () => {
        let e = W[r],
          t = G.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && K) {
          let r = await K[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          o = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          s.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: J,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: s.location.href,
              hostname: s.location.hostname || null,
              pathname: s.location.pathname || null,
              hash: s.location.hash || null,
              search: s.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (S(`framer-rewrite-breakpoints`, () => {
          (A(u), s.__framer_onRewriteBreakpoints?.(u));
        }),
        (X ? (e) => e() : i)(() => {
          (D(), P(), v(t, p, { onRecoverableError: n }));
        }))
      : _(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var W, G, K, q, J, Y, X;
e(() => {
  if (
    (n(),
    I(),
    y(),
    u(),
    g(),
    (W = {
      augiA20Il: {
        elements: { vkp5yqBCe: `pages` },
        page: w(() => import("./asFTKLOj4gWXuTWWG2MnPdV-RZ6o-bwiUe8FdZt60qU.CMAxUYsC.mjs")),
        path: `/`,
      },
      aiXHfKTMN: {
        elements: {
          clRnCfRoK: `cases`,
          DvV_HzpnD: `cta`,
          SXshTwgzI: `products`,
          T71aig18L: `pricing`,
          TPPCrceEH: `figures`,
          wABJY7hSv: `testimonials`,
          Zlt_RRgAq: `site`,
        },
        page: w(() => import("./yduo1ny440YS0y7ktoFUxyYlCaLf1DyWce0-OXnYQuM.B3gV-5pw.mjs")),
        path: `/home-01`,
      },
      W8nXdKNSN: {
        elements: {},
        page: w(() => import("./TsOtxT-4Y0wRoqrmqW3-BszKisPZOf-g3s62fn4bGGc.DhWCT_g-.mjs")),
        path: `/home-02`,
      },
      G7lw_m7n0: {
        elements: { dJRnVIjzN: `talk` },
        page: w(() => import("./_2JmoquttNFMi2qK1qItVnZhFoOQYqfpweUzNVpBloI.Cca8fx5E.mjs")),
        path: `/home-03`,
      },
      UQ6wc3FlD: {
        elements: { e2xdAEaGA: `how`, eQzLpKMI1: `start`, hKZgh2aIl: `platform` },
        page: w(() => import("./o_4Sk5VpVwQ66liDtXGjeGos4iJXf-J2jI9BVAUuNUY.lhNhfhdR.mjs")),
        path: `/home-04`,
      },
      kZ7752sFG: {
        elements: {},
        page: w(() => import("./X4Apn50V-N1wj5sHsnLFNpTRCWNHXxA26k4VgtosTXo.BGjz6L4A.mjs")),
        path: `/pricing-01`,
      },
      utcMNoknc: {
        elements: { Iy3sp8E_J: `card` },
        page: w(() => import("./CwsKPHfJXEIEhFbxIQYVkj0GF5pijHae2bWLdBQ6x7o.DL0eZlTa.mjs")),
        path: `/pricing-02`,
      },
      JJMYDiTlX: {
        elements: {},
        page: w(() => import("./cf40W4gePiutS65y2aPrPg6aIYEShCv71GYS0zZ2yr4.syGJ1zSz.mjs")),
        path: `/pricing-03`,
      },
      leSVJ7Uql: {
        elements: {},
        page: w(() => import("./wOEeyHrYwBQykdqEjykmlJx7XMhqWf4R9r5JwOaZd-c.BRmVgDiv.mjs")),
        path: `/contact-01`,
      },
      suiKgumT3: {
        elements: {},
        page: w(() => import("./q6F_maGPTQYVs7fyCaPqyGzR_aCfQx3QECvbNkv8hL4.BYf58XRi.mjs")),
        path: `/contact-02`,
      },
      ow8r4AN8J: {
        elements: { BBC2TuYgL: `book` },
        page: w(() => import("./3_xuDNH9JQ75SB40PYIWwpw2Ff2YXVNrWPTtCZbQHfo.BJUXtCLY.mjs")),
        path: `/contact-03`,
      },
      ftsL6c6mE: {
        elements: {},
        page: w(() => import("./L4b3WOz9CP1qeZpNQOkEvbN8zz7UkZOSeWgMumIo7Mk.BzMzHdvk.mjs")),
        path: `/company`,
      },
      MEjos_75C: {
        elements: { nqsu1Cybt: `roles` },
        page: w(() => import("./j_D_vVfCcm2oDIIsW7_D5E7x1WG0uK3bgF4KhkUb4YQ.Y3btI_p4.mjs")),
        path: `/careers`,
      },
      f4IvkyEC_: {
        elements: {},
        page: w(() => import("./_aFeCCItFDtSNctmFCFOCqFMuiAuXPonceW9emqV6-A.CEyWFXS7.mjs")),
        path: `/case-studies`,
      },
      JXDOUrKk6: {
        elements: {},
        page: w(() => import("./SCFLhpyCKrxRFC8zB8-feXC--Sgz2D11wp7Y7qPcG70.R7XI88Ih.mjs")),
        path: `/news`,
      },
      Az4rug3ML: {
        elements: {},
        page: w(() => import("./jATABu-K4Xri3MvVcI4PV5a8E5Ky_hWj0effHUTrNIY.j2TA1OSi.mjs")),
        path: `/404`,
      },
      xnQ2EJwoO: {
        elements: { qIJ8PZ9Ek: `sections`, riByyulC7: `colors` },
        page: w(() => import("./Ni6Mag-jBufebiXvJoT5NaVuSRVeHh7XQZBsRo0k2jk.DiEY63mv.mjs")),
        path: `/design-system`,
      },
      JtdSvG6rD: {
        collectionId: `dzeGrkSa8`,
        elements: { b416sRgir: `apply` },
        page: w(() => import("./QRqEN8DlgQ2QsmvUZJJ0GS4R0kIhsE1kfELC7mld08c.CkVh9jfG.mjs")),
        path: `/careers/:Ag1lqLixQ`,
      },
      PjrO0w6gt: {
        collectionId: `s7TqDO7B2`,
        elements: { OrT7Cl3ge: `story` },
        page: w(() => import("./kMBDn14OCpJ4Xudqt3GA9B9LzBxZ37oT2nZ_2vA6jTE.BNJPKjS0.mjs")),
        path: `/case-studies/:NxLzBdWey`,
      },
      zX8G5Rmeb: {
        collectionId: `k3QcAAKya`,
        elements: {},
        page: w(() => import("./0yjSdf8a6XQq6wzuPOoe9aBWeE_ShuZ8R3ARZkNZR8w.1Kp20rIm.mjs")),
        path: `/news/:PDM6PbwuL`,
      },
    }),
    (G = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (K = {
      b5kUAs37G: async () =>
        (await import("./b5kUAs37G.CoAfs8yH.mjs").then((e) => (e.r(), e.t)))?.utils,
      dzeGrkSa8: async () =>
        (await import("./FDQec6_Qs_V6z7eDunBlahWG1QaywiPU5eY9ollylZY.UPC4OBv_.mjs"))?.utils,
      k_o9T6vaR: async () =>
        (await import("./k_o9T6vaR.CJmwIg0s.mjs").then((e) => (e.t(), e.n)))?.utils,
      k3QcAAKya: async () =>
        (await import("./cs9NXKYKXwRaItfpCGy07PqdvbsNIOZyPjt45Zmghm8.CScBwaXF.mjs"))?.utils,
      lgQWesQ9p: async () =>
        (await import("./lgQWesQ9p.CJkn6940.mjs").then((e) => (e.n(), e.r)))?.utils,
      s7TqDO7B2: async () =>
        (await import("./vSd1vgrl9pZPdfGA5PY9MordP8qdlm7OBBilcGBJxWw.CaDtsZUY.mjs"))?.utils,
    }),
    (q = void 0),
    (J = `fb5838677aa41abb52d76f25b005d1dffa1934f1a737fc7ec6110823edab1adb`),
    (Y = typeof document < `u`),
    (X = Y && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(r.userAgent)),
    Y)
  ) {
    ((s.__framer_importFromPackage = (e, t) => () =>
      f(R, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (s.__framer_events = s.__framer_events || []),
      T());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? U(!0, e) : U(!1, e);
  }
})();
export { V as getPageRoot };
//# sourceMappingURL=script_main.B0Twxbbu.mjs.map
