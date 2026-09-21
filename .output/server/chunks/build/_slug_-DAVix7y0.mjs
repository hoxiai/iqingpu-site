import __nuxt_component_0 from './MarketplaceDetail-z-vBkvde.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useShoplyMarketplace } from './useShoplyMarketplace-B1jLMPRH.mjs';
import { C as useRoute, G as setResponseStatus, b9 as useSeoMeta } from './server.mjs';
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
import './marketplace-6HVcFXY0.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { findEntry, copy } = useShoplyMarketplace();
    const slug = computed(() => {
      const value = route.params.slug;
      return Array.isArray(value) ? String(value.at(-1) || "") : String(value || "");
    });
    const entry = computed(() => findEntry("app", slug.value));
    const category = computed(() => {
      var _a;
      return entry.value ? ((_a = copy.value.appCategories[entry.value.category]) == null ? void 0 : _a[0]) || entry.value.category : "";
    });
    if (!entry.value) setResponseStatus(404);
    useSeoMeta({
      title: () => entry.value ? `${entry.value.name} | ${copy.value.apps.seoTitle}` : copy.value.common.notFound,
      description: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || copy.value.apps.seoDescription;
      },
      keywords: () => entry.value ? `${entry.value.name},${category.value},${copy.value.apps.seoKeywords}` : copy.value.apps.seoKeywords,
      ogTitle: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.name) || copy.value.common.notFound;
      },
      ogDescription: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || copy.value.apps.seoDescription;
      },
      ogImage: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.imageUrl) || void 0;
      },
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.name) || copy.value.common.notFound;
      },
      twitterDescription: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.summary) || copy.value.apps.seoDescription;
      },
      twitterImage: () => {
        var _a;
        return ((_a = entry.value) == null ? void 0 : _a.imageUrl) || void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarketplaceDetail = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MarketplaceDetail, mergeProps({
        kind: "app",
        entry: entry.value,
        copy: unref(copy),
        category: category.value
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/apps/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
