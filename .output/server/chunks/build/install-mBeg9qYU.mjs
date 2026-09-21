import { cK as buildAssetsURL } from '../nitro/nitro.mjs';
import { e as useI18n, b9 as useSeoMeta, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './ShoplyLeadForm-ws6ipEnv.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { i as installLocales } from './marketing-pages-DoIILZ-P.mjs';
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
import './CaptchaSlider-BQPTipsy.mjs';

const linuxIcon = "" + buildAssetsURL("linux.Dv2HEo-j.svg");
const windowsIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1723470407504'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8920'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M0%20139.392L409.429333%2081.92l0.170667%20407.210667-409.216%202.389333L0%20139.392z%20m409.301333%20395.818667L409.6%20942.08%200%20884.181333V532.48l409.301333%202.730667z%20m41.258667-454.186667L1024%200v487.125333l-573.44%204.394667V81.024zM1024%20533.333333L1023.872%201024l-572.501333-79.274667-0.810667-412.245333%20573.44%200.896z'%20fill='%23491eff'%20p-id='8921'%3e%3c/path%3e%3c/svg%3e";
const macosIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1723470726300'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10012'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M928.768%20750.592c-1.536%204.096-21.504%2074.24-70.656%20145.92-43.008%2062.464-87.04%20124.928-156.672%20125.952-68.608%201.024-90.624-40.96-168.96-40.96s-102.912%2039.936-167.936%2041.984c-67.072%202.56-118.784-68.096-161.792-130.048C115.2%20767.488%2047.616%20534.528%20138.24%20378.88c44.544-77.824%20124.928-127.488%20211.968-129.024%2065.536-1.024%20128.512%2044.544%20168.448%2044.544%2040.96%200%20116.736-55.296%20196.608-47.104%2033.28%201.536%20126.976%2013.824%20186.88%20101.376-4.608%203.072-111.616%2066.56-110.592%20195.072%201.024%20155.136%20135.68%20206.336%20137.216%20206.848m-266.24-586.24c35.84-44.032%2059.904-104.448%2053.248-164.352-51.2%202.048-114.176%2034.304-151.04%2077.824-32.768%2037.888-61.952%2099.328-53.76%20158.72%2056.832%203.072%20115.712-30.208%20151.552-72.192'%20fill='%23491eff'%20p-id='10013'%3e%3c/path%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "install",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const copy = computed(() => {
      const current = locale.value;
      return installLocales[current in installLocales ? current : "zh"];
    });
    const copied = ref(false);
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.install.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.install.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.install.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_ShoplyLeadForm = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#09172e] via-[#0d2347] to-[#12366c] px-5 pb-20 pt-16 text-white sm:px-8 sm:pb-28 sm:pt-24 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-emerald-500/15 blur-3xl"></div><div class="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-300 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block bg-gradient-to-r from-emerald-200 via-teal-200 to-sky-300 bg-clip-text text-transparent">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="#quick-install" class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-8 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-2xl active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:terminal-window-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.primaryCta)}</span></a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chats-teardrop-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-200/90 sm:text-sm"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div id="quick-install" class="relative mx-auto mt-14 max-w-4xl scroll-mt-24"><div class="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl shadow-blue-950/80"><div class="flex items-center justify-between border-b border-slate-800 pb-4"><div class="flex items-center gap-2"><span class="h-3.5 w-3.5 rounded-full bg-rose-500"></span><span class="h-3.5 w-3.5 rounded-full bg-amber-500"></span><span class="h-3.5 w-3.5 rounded-full bg-emerald-500"></span><span class="ml-3 text-xs font-mono text-slate-400">root@server: ~</span></div><span class="text-[11px] font-mono text-emerald-400">v1.9.13 Latest LTS</span></div><div class="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-sm"><div class="flex items-center gap-3 text-slate-200 overflow-x-auto w-full"><span class="text-emerald-400 font-bold select-none">$</span><code class="text-xs sm:text-sm text-emerald-200">bash -c &quot;$(curl -sSL https://resource.platship.com/resource/package/consolex/install.sh)&quot;</code></div><button type="button" class="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-blue-500 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:copy-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u547D\u4EE4")}</span></button></div><div class="mt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"><span>\u26A1 \u5B89\u88C5\u65F6\u957F\uFF1A\u7EA6 60 \u79D2</span><span>\u{1F4E6} \u4F9D\u8D56\u73AF\u5883\uFF1A\u5168\u81EA\u52A8\u9002\u914D</span><span>\u{1F512} \u6570\u636E\u5E93\uFF1A\u5185\u7F6E SQLite / \u652F\u6301\u5207\u6362 PG &amp; MySQL</span></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700"> \u90E8\u7F72\u6D41\u7A0B </span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl"> \u7B80\u5355 3 \u6B65\uFF0C\u5B8C\u6210\u72EC\u7ACB\u79C1\u6709\u5316\u4E0A\u7EBF </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u652F\u6301\u4E91\u670D\u52A1\u5668\u516C\u7F51\u90E8\u7F72\u3001\u5185\u7F51\u9694\u79BB\u73AF\u5883\u90E8\u7F72\u6216\u5BB9\u5668\u7F16\u6392\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.methods, (m) => {
        _push(`<div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10"><span class="text-4xl font-black text-emerald-600/30">${ssrInterpolate(m.step)}</span><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(m.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(m.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl"> \u591A\u64CD\u4F5C\u7CFB\u7EDF\u67B6\u6784\u4E8C\u8FDB\u5236\u72EC\u7ACB\u5305 </h2><p class="mt-4 text-base text-slate-600 sm:text-lg"> \u5355\u4E00\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u65E0\u4EFB\u4F55\u989D\u5916\u5916\u90E8\u8FD0\u884C\u65F6\u4F9D\u8D56\uFF0C\u5F00\u7BB1\u5373\u8DD1\u3002 </p></div><div class="mt-14 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"><div class="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 text-center transition-all hover:bg-white hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(linuxIcon))} alt="Linux" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">Linux</h3><p class="mt-2 text-xs text-slate-500">Ubuntu / Debian / CentOS / \u7EDF\u4FE1 / \u9E92\u9E9F</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Linux-amd64 (x86_64) </div><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Linux-arm64 (aarch64) </div></div></div><div class="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 text-center transition-all hover:bg-white hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(windowsIcon))} alt="Windows" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">Windows</h3><p class="mt-2 text-xs text-slate-500">Windows Server 2016+ / Windows 10/11</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Windows-amd64 (.exe) </div><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Windows \u670D\u52A1\u7BA1\u7406\u5957\u4EF6 </div></div></div><div class="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 text-center transition-all hover:bg-white hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(macosIcon))} alt="macOS" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">macOS</h3><p class="mt-2 text-xs text-slate-500">macOS 12 Monterey \u53CA\u66F4\u65B0\u7248\u672C</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> macOS-arm64 (Apple Silicon) </div><div class="rounded-xl bg-white border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> macOS-amd64 (Intel) </div></div></div></div><div class="mt-12 mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/60 p-6"><div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-900"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:cpu-duotone",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span><strong>\u6700\u4F4E\u914D\u7F6E\uFF1A</strong> 1 \u6838 CPU / 1 GB \u5185\u5B58 / 10 GB \u53EF\u7528\u5B58\u50A8\u7A7A\u95F4</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-duotone",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span><strong>\u7F51\u7EDC\u8981\u6C42\uFF1A</strong> \u5F00\u653E 80 / 443 \u7AEF\u53E3\uFF0C\u652F\u6301\u7ED1\u5B9A HTTPS \u8BC1\u4E66</span></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-emerald-700 via-teal-700 to-blue-800 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-emerald-800 shadow-xl transition-all hover:bg-emerald-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/pricing",
        class: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:tag-bold",
              class: "h-5 w-5 text-amber-300"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:tag-bold",
                class: "h-5 w-5 text-amber-300"
              }),
              createVNode("span", null, toDisplayString(copy.value.bottomCta.secondaryText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:terminal-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">\u9884\u7EA6\u79C1\u6709\u90E8\u7F72\u4E13\u5BB6\u534F\u52A9</h3><p class="mt-2 text-xs text-slate-500">\u8FD0\u7EF4\u4E13\u5BB6\u5C06\u534F\u52A9\u60A8\u8FDB\u884C\u670D\u52A1\u5668\u521D\u59CB\u5316\u3001\u7F51\u7EDC\u914D\u7F6E\u4E0E\u7CFB\u7EDF\u5B89\u88C5</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "self-hosted"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/install.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
