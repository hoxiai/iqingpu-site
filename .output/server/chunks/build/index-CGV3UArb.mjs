import __nuxt_component_0 from './MarketplaceList-DeQ5mRIS.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useShoplyMarketplace } from './useShoplyMarketplace-B1jLMPRH.mjs';
import { bo as useCollectionPageJsonLd, b9 as useSeoMeta } from './server.mjs';
import './MarketplaceHero-Ie-4Bbve.mjs';
import './MarketplaceCard-C2_FObBk.mjs';
import './MarketplaceVisual-AVDGulXA.mjs';
import './marketplace-6HVcFXY0.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { apps, copy } = useShoplyMarketplace();
    useCollectionPageJsonLd("shoply-apps-list", {
      path: "/apps",
      name: () => copy.value.apps.title,
      description: () => copy.value.apps.description,
      items: apps
    });
    useSeoMeta({
      title: () => copy.value.apps.seoTitle,
      description: () => copy.value.apps.seoDescription,
      keywords: () => copy.value.apps.seoKeywords,
      ogTitle: () => copy.value.apps.seoTitle,
      ogDescription: () => copy.value.apps.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.apps.seoTitle,
      twitterDescription: () => copy.value.apps.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarketplaceList = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MarketplaceList, mergeProps({
        kind: "app",
        entries: unref(apps),
        copy: unref(copy),
        eyebrow: unref(copy).apps.eyebrow,
        title: unref(copy).apps.title,
        description: unref(copy).apps.description
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/apps/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
