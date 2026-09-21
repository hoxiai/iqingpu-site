import { e as useI18n, aF as useLocaleRouter, t as useSettings, bp as useLocalizedSettings, u as useHead, b9 as useSeoMeta, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_1 from './SectionHeading-D_ZqEZzo.mjs';
import __nuxt_component_2 from './ShoplyConsultDialog-DzKSr2T3.mjs';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyConsult } from './useShoplyConsult-BDwgC787.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-n0CVRUji.mjs';
import { e as en, z as zh, a as zhHK, r as ru } from './zh-HK-BoOaWI-H.mjs';
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
import './ShoplyLeadForm-ws6ipEnv.mjs';
import './CaptchaSlider-BQPTipsy.mjs';

const aiMarkUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='43'%20height='40'%20viewBox='0%200%2043%2040'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20y1='0%25'%20x2='0%25'%20y2='100%25'%3e%3cstop%20stop-color='%23E02044'/%3e%3cstop%20offset='.49'%20stop-color='%233F32FF'/%3e%3cstop%20offset='1'%20stop-color='%2300F7DF'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20y='10'%20width='29'%20height='29'%20rx='7'%20fill='url(%23a)'/%3e%3cpath%20fill='%23fff'%20d='m7.5%2018-5%2013h3l1.2-3h5.6l.5%203h2.8l-2-12.2c-.1-.5-.5-.8-1.1-.8h-5Zm.2%207.5%202.1-5.6.8%205.6H7.7ZM18%2018h2.8L19%2031h-2.7L18%2018Z'/%3e%3cpath%20fill='%23FFA410'%20d='M37%201c0%202%201.2%203.4%203.8%204-2.6.6-3.8%202-3.8%204-.6-2.6-2-3.8-4-4%202-.6%203.4-2%204-4Zm-1%2012c0%201.6%201%202.7%203%203.2-2%20.5-3%201.6-3%203.2-.5-2.1-1.6-3.2-3.2-3.2%201.6-.5%202.7-1.6%203.2-3.2ZM26%203c0%201.1.7%201.9%202%202.2-1.3.3-2%201.1-2%202.2-.3-1.4-1.1-2.2-2.2-2.2%201.1-.3%201.9-1.1%202.2-2.2Z'/%3e%3c/svg%3e";
const ribbonsUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='179'%20height='28'%20viewBox='0%200%20179%2028'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='100%25'%20y1='49%25'%20x2='0%25'%20y2='51%25'%3e%3cstop%20stop-color='%2332C5FF'%20stop-opacity='0'/%3e%3cstop%20offset='.14'%20stop-color='%2335C1FE'/%3e%3cstop%20offset='.51'%20stop-color='%23B620E0'/%3e%3cstop%20offset='.93'%20stop-color='%23F5B107'/%3e%3cstop%20offset='1'%20stop-color='%23F7B500'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M1%2024c34-13%2058-19%2072-17%2021%204-3%2025%2048%2013%2034-9%2053-14%2058-16'%20stroke='url(%23a)'%20stroke-width='8'%20fill='none'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, mergeLocaleMessage } = useI18n();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { getLocalizedSetting } = useLocalizedSettings();
    mergeLocaleMessage("en", { shoply: en });
    mergeLocaleMessage("zh", { shoply: zh });
    mergeLocaleMessage("zh-HK", { shoply: zhHK });
    mergeLocaleMessage("ru", { shoply: ru });
    const localeMessages = { zh, "zh-HK": zhHK, en, ru };
    const messages = computed(() => localeMessages[locale.value] || zh);
    const valueItems = computed(() => messages.value.values.items);
    const dealModeItems = computed(() => messages.value.dealModes.items);
    const audienceItems = computed(() => messages.value.audiences.items);
    const aiItems = computed(() => messages.value.ai.items);
    const platformItems = computed(() => messages.value.platform.items);
    const deploymentItems = computed(() => messages.value.deployment.items);
    const ecosystemItems = computed(() => messages.value.ecosystem.items);
    const ecosystemColors = ["bg-blue-600", "bg-indigo-600", "bg-emerald-600", "bg-orange-500", "bg-rose-500", "bg-blue-500", "bg-green-600", "bg-slate-800"];
    const { signUpUrl } = useShoplyAuthLinks();
    const { consultUrl, isOpen: isConsultOpen } = useShoplyConsult();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const seoTitle = computed(() => {
      return getLocalizedSetting("site_title") || getLocalizedSetting("seo_title") || getSetting("site_name") || t("shoply.seo.title");
    });
    const seoDescription = computed(() => {
      return getLocalizedSetting("site_description") || getLocalizedSetting("seo_description") || t("shoply.seo.description");
    });
    const seoKeywords = computed(() => {
      return getLocalizedSetting("site_keywords") || getLocalizedSetting("keywords") || getSetting("site_keywords") || getSetting("keywords") || t("shoply.seo.keywords") || "";
    });
    useHead({
      titleTemplate: null
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value || void 0,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_SectionHeading = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_ShoplyConsultDialog = __nuxt_component_2;
      _push(`<!--[--><div id="top" class="bg-white"><section class="relative isolate overflow-hidden bg-[#2678ff] text-white"><div class="absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-28 top-18 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-800/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-12 px-5 py-18 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-28"><div class="relative z-10 min-w-0 max-w-2xl"><div class="animate-shoply-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-blue-50 uppercase backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(253,224,71,0.9)] animate-pulse"></span> ${ssrInterpolate(_ctx.$t("shoply.hero.eyebrow"))}</div><h1 class="animate-shoply-fade-in-up mt-7 text-4xl font-black leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-7xl">${ssrInterpolate(_ctx.$t("shoply.hero.titleBefore"))} <span class="mt-2 block text-amber-300">${ssrInterpolate(_ctx.$t("shoply.hero.titleAccent"))}</span></h1><p class="animate-shoply-fade-in-up animate-delay-100 mt-7 max-w-xl text-base leading-8 text-blue-50/85 sm:text-lg">${ssrInterpolate(_ctx.$t("shoply.hero.description"))}</p><div class="animate-shoply-fade-in-up animate-delay-180 mt-9 flex flex-col gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(_ctx.$t("shoply.hero.primary"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a href="#solutions" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.hero.secondary"))}</a></div><div class="animate-shoply-fade-in-up animate-delay-240 mt-8 flex items-center gap-3 text-sm font-semibold text-blue-100"><span class="flex -space-x-2"><span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-cyan-300 text-[10px] font-black text-blue-900 shadow-sm transition-transform hover:scale-110">B2C</span><span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-amber-300 text-[10px] font-black text-blue-900 shadow-sm transition-transform hover:scale-110">B2B</span><span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-[10px] font-black text-blue-700 shadow-sm transition-transform hover:scale-110">AI</span></span> ${ssrInterpolate(_ctx.$t("shoply.hero.proof"))}</div></div><div class="animate-shoply-slide-in-right animate-delay-150 relative mx-auto min-w-0 w-full max-w-[680px] lg:mx-0 lg:justify-self-end"><div class="animate-shoply-glow absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"></div><div class="relative overflow-hidden rounded-[1.75rem] border border-white/30 bg-white p-3 shadow-[0_35px_90px_rgba(13,45,120,0.35)] transition-shadow duration-500 hover:shadow-[0_45px_100px_rgba(13,45,120,0.45)] sm:p-4"><div class="flex items-center gap-2 rounded-t-[1.1rem] bg-slate-100 px-4 py-3"><span class="h-2.5 w-2.5 rounded-full bg-rose-400"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span><div class="ml-2 flex-1 rounded-full bg-white px-4 py-1.5 text-center text-[10px] font-semibold text-slate-400 sm:text-xs">${ssrInterpolate(_ctx.$t("shoply.hero.visualUrl"))}</div></div><div class="relative min-h-[360px] overflow-hidden rounded-b-[1.1rem] bg-[#f8f4ef] p-5 sm:min-h-[430px] sm:p-8"><div class="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] font-bold text-emerald-600 shadow-sm backdrop-blur-sm"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${ssrInterpolate(_ctx.$t("shoply.hero.visualBadge"))}</div><div class="max-w-[54%] pt-10 sm:pt-14"><p class="text-[10px] font-bold tracking-[0.18em] text-orange-500 uppercase">${ssrInterpolate(brandName.value)} / 2026</p><p class="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-4xl">${ssrInterpolate(_ctx.$t("shoply.hero.visualTitle"))}</p><p class="mt-3 text-xs leading-5 text-slate-500 sm:text-sm">${ssrInterpolate(_ctx.$t("shoply.hero.visualSubtitle"))}</p><span class="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-[10px] font-bold text-white shadow-md transition-transform hover:scale-105 sm:text-xs">${ssrInterpolate(_ctx.$t("shoply.hero.visualButton"))}</span></div><div class="absolute -bottom-8 -right-10 h-[82%] w-[58%] rotate-[-6deg] rounded-t-[48%] bg-gradient-to-br from-amber-100 via-orange-200 to-rose-300 shadow-2xl transition-transform duration-700 hover:rotate-[-4deg] hover:scale-105"><div class="absolute left-[16%] top-[12%] h-[76%] w-[68%] rounded-[45%_45%_20%_20%] border-[12px] border-white/45 bg-gradient-to-b from-rose-100 to-amber-50 shadow-inner sm:border-[18px]"></div></div><div class="animate-shoply-float-delayed absolute bottom-6 right-[36%] rounded-2xl border border-white/80 bg-white/85 p-3 shadow-xl backdrop-blur transition-transform hover:scale-105 sm:p-4"><p class="text-[9px] font-bold text-slate-400 uppercase">${ssrInterpolate(_ctx.$t("shoply.hero.visualProduct"))}</p><p class="mt-1 text-sm font-black text-blue-600 sm:text-lg">+${ssrInterpolate(_ctx.$t("shoply.hero.visualDiscount"))}</p></div></div></div><div class="animate-shoply-float absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 text-slate-900 shadow-xl backdrop-blur transition-transform hover:scale-105 sm:-left-8"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-line-up-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</span><div><p class="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Conversion</p><p class="text-sm font-black text-slate-900">+38.6%</p></div></div></div></div></section><section id="solutions" class="scroll-mt-20 bg-slate-50 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.values.label"),
        title: _ctx.$t("shoply.values.title"),
        description: _ctx.$t("shoply.values.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(valueItems.value, (item, index) => {
        _push(`<article class="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"><span class="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7 transition-transform duration-300 group-hover:rotate-6"
        }, null, _parent));
        _push(`</span><h3 class="mt-6 text-xl font-extrabold tracking-tight text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.description)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section id="deal-modes" class="scroll-mt-20 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.dealModes.label"),
        title: _ctx.$t("shoply.dealModes.title"),
        description: _ctx.$t("shoply.dealModes.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(dealModeItems.value, (mode) => {
        _push(`<article class="group flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"><span class="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: mode.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><h3 class="mt-6 text-xl font-extrabold tracking-tight text-slate-900">${ssrInterpolate(mode.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(mode.description)}</p><ul class="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6"><!--[-->`);
        ssrRenderList(mode.points, (point) => {
          _push(`<li class="flex gap-2.5 text-sm leading-6 text-slate-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(mode.to),
          class: "mt-7 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-600 transition-colors hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(mode.action)} `);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-4 w-4 transition-transform group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(mode.action) + " ", 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.audiences.label"),
        title: _ctx.$t("shoply.audiences.title"),
        description: _ctx.$t("shoply.audiences.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-5 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(audienceItems.value, (item, index) => {
        _push(`<article class="${ssrRenderClass([index === 0 ? "bg-blue-600 text-white" : "bg-white text-slate-900", "group relative overflow-hidden rounded-[2rem] border border-slate-200 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"])}"><div class="relative z-10 flex items-start gap-5"><span class="${ssrRenderClass([index === 0 ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600", "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><div><h3 class="text-2xl font-black tracking-tight">${ssrInterpolate(item.title)}</h3><p class="${ssrRenderClass([index === 0 ? "text-blue-100" : "text-slate-600", "mt-3 max-w-xl text-sm leading-7"])}">${ssrInterpolate(item.description)}</p><div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(item.tags, (tag) => {
          _push(`<span class="${ssrRenderClass([index === 0 ? "bg-white/12 text-white" : "bg-slate-100 text-slate-600", "rounded-full px-3 py-1.5 text-xs font-bold transition-transform hover:scale-105"])}">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "absolute -bottom-12 -right-8 h-44 w-44 opacity-[0.04] transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.08]"
        }, null, _parent));
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section id="ai" class="scroll-mt-20 overflow-hidden bg-[#07152f] py-20 text-white sm:py-28"><div class="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12"><div><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(aiMarkUrl))} alt="" class="h-10 w-11 animate-pulse"><p class="text-sm font-black tracking-[0.18em] text-cyan-300 uppercase">${ssrInterpolate(_ctx.$t("shoply.ai.label"))}</p></div><h2 class="mt-6 max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">${ssrInterpolate(_ctx.$t("shoply.ai.title"))}</h2><p class="mt-6 max-w-xl text-base leading-8 text-blue-100/70">${ssrInterpolate(_ctx.$t("shoply.ai.description"))}</p><a${ssrRenderAttr("href", unref(consultUrl))} class="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-blue-700 shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.ai.action"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-right-bold",
        class: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      }, null, _parent));
      _push(`</a></div><div class="relative"><img${ssrRenderAttr("src", unref(ribbonsUrl))} alt="" class="animate-shoply-float absolute -top-8 right-4 h-7 w-44"><div class="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur sm:p-6"><div class="rounded-2xl bg-white p-5 text-slate-900 sm:p-7"><div class="flex items-center justify-between gap-4 border-b border-slate-100 pb-5"><div><p class="text-base font-black sm:text-lg">${ssrInterpolate(_ctx.$t("shoply.ai.panelTitle"))}</p><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(_ctx.$t("shoply.ai.panelHint"))}</p></div><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-fill",
        class: "h-5 w-5 animate-pulse"
      }, null, _parent));
      _push(`</span></div><div class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(aiItems.value, (item, index) => {
        _push(`<div class="group/ai flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:scale-[1.01] hover:border-blue-200 hover:bg-blue-50/80 hover:shadow-md"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-blue-600 shadow-sm transition-colors group-hover/ai:bg-blue-600 group-hover/ai:text-white">${ssrInterpolate(index + 1)}</span><div class="min-w-0 flex-1"><p class="text-sm font-extrabold text-slate-900 group-hover/ai:text-blue-700 transition-colors">${ssrInterpolate(item.title)}</p><p class="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">${ssrInterpolate(item.description)}</p></div>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-5 w-5 shrink-0 text-blue-500 transition-transform group-hover/ai:translate-x-1"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section id="platform" class="scroll-mt-20 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.platform.label"),
        title: _ctx.$t("shoply.platform.title"),
        description: _ctx.$t("shoply.platform.description")
      }, null, _parent));
      _push(`<div class="mt-12 grid gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(platformItems.value, (item, index) => {
        _push(`<article class="group flex gap-4 rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-200 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><div><h3 class="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(item.description)}</p></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div class="grid items-end gap-8 lg:grid-cols-2">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.ecosystem.label"),
        title: _ctx.$t("shoply.ecosystem.title"),
        description: _ctx.$t("shoply.ecosystem.description"),
        align: "left"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 gap-3 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(ecosystemItems.value, (item, index) => {
        _push(`<div class="flex min-h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 text-center text-sm font-black text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-md active:scale-95"><span class="${ssrRenderClass([ecosystemColors[index], "mr-2 flex h-7 w-7 items-center justify-center rounded-lg text-xs text-white shadow-sm"])}">${ssrInterpolate(item.slice(0, 1))}</span> ${ssrInterpolate(item)}</div>`);
      });
      _push(`<!--]--></div></div></div></section><section id="deployment" class="scroll-mt-20 py-20 sm:py-28"><div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: _ctx.$t("shoply.deployment.label"),
        title: _ctx.$t("shoply.deployment.title"),
        description: _ctx.$t("shoply.deployment.description")
      }, null, _parent));
      _push(`<div class="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(deploymentItems.value, (item, index) => {
        _push(`<article class="${ssrRenderClass([index === 0 ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-950 text-white", "group relative overflow-hidden rounded-[2rem] border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10"])}"><div class="flex items-start justify-between gap-4"><span class="${ssrRenderClass([index === 0 ? "bg-white text-blue-600 shadow-sm" : "bg-white/10 text-cyan-300", "flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><span class="${ssrRenderClass([index === 0 ? "bg-blue-600 text-white" : "bg-cyan-300/15 text-cyan-300", "rounded-full px-3 py-1.5 text-xs font-extrabold shadow-sm"])}">${ssrInterpolate(item.badge)}</span></div><h3 class="mt-8 text-3xl font-black tracking-tight">${ssrInterpolate(item.title)}</h3><p class="${ssrRenderClass([index === 0 ? "text-slate-600" : "text-slate-300", "mt-4 min-h-[84px] text-sm leading-7"])}">${ssrInterpolate(item.description)}</p><a${ssrRenderAttr("href", index === 0 ? unref(signUpUrl) : unref(consultUrl))} class="${ssrRenderClass([index === 0 ? "text-blue-600" : "text-cyan-300", "mt-7 inline-flex items-center gap-2 text-sm font-extrabold transition-transform group-hover:translate-x-1"])}">${ssrInterpolate(item.action)} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-right-bold",
          class: "h-4 w-4 transition-transform group-hover:translate-x-1"
        }, null, _parent));
        _push(`</a></article>`);
      });
      _push(`<!--]--></div></div></section><section class="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"><div class="relative mx-auto max-w-[1344px] overflow-hidden rounded-[2rem] bg-[#2678ff] px-6 py-16 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-12 sm:py-20"><div class="animate-shoply-glow absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-indigo-900/30 blur-3xl"></div><div class="relative"><p class="text-xs font-black tracking-[0.18em] text-amber-300 uppercase">${ssrInterpolate(_ctx.$t("shoply.cta.eyebrow"))}</p><h2 class="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">${ssrInterpolate(_ctx.$t("shoply.cta.title"))}</h2><p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">${ssrInterpolate(_ctx.$t("shoply.cta.description"))}</p><div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-blue-600 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(_ctx.$t("shoply.cta.primary"))}</a><a${ssrRenderAttr("href", unref(consultUrl))} class="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(_ctx.$t("shoply.cta.secondary"))}</a></div></div></div></section></div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "homepage"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
