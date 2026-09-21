import __nuxt_component_0 from './MarketplaceList-pHBJS6pO.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useShoplyMarketplace } from './useShoplyMarketplace-BcG3LQpk.mjs';
import { bo as useCollectionPageJsonLd, b9 as useSeoMeta } from './server.mjs';
import './MarketplaceHero-Ie-4Bbve.mjs';
import './MarketplaceCard-C2_FObBk.mjs';
import './MarketplaceVisual-AVDGulXA.mjs';
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
import './marketplace-1fbll1JN.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { themes, copy } = useShoplyMarketplace();
    useCollectionPageJsonLd("shoply-themes-list", {
      path: "/theme",
      name: () => copy.value.themes.title,
      description: () => copy.value.themes.description,
      items: themes
    });
    useSeoMeta({
      title: () => copy.value.themes.seoTitle,
      description: () => copy.value.themes.seoDescription,
      ogTitle: () => copy.value.themes.seoTitle,
      ogDescription: () => copy.value.themes.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarketplaceList = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MarketplaceList, mergeProps({
        kind: "theme",
        entries: unref(themes),
        copy: unref(copy),
        eyebrow: unref(copy).themes.eyebrow,
        title: unref(copy).themes.title,
        description: unref(copy).themes.description
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/theme/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
