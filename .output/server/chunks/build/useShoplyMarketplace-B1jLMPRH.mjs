import { computed } from 'vue';
import { e as useI18n, t as useSettings, F as useExtensions, y as useFetch, bn as publishedOptionalThemeSet } from './server.mjs';
import { s as shoplyMarketplaceLocales } from './marketplace-6HVcFXY0.mjs';

const shoplyAppSeeds = [
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "stripe", name: "Stripe", category: "payment", mark: "S", accent: "#635bff", publishedAt: "2024-06-22", downloads: 12 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "paddle", name: "Paddle", category: "payment", mark: "P", accent: "#7357ff", publishedAt: "2024-06-22", downloads: 1 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", slug: "google-translate", name: "Google Translate", category: "localization", mark: "G", accent: "#4285f4", publishedAt: "2024-07-02", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "paypal", name: "PayPal", category: "payment", mark: "P", accent: "#0070ba", publishedAt: "2024-06-22", downloads: 9 },
  { kind: "app", packageKind: "extension", runtimeKind: "importer", slug: "fastdatas", name: "FastDatas", category: "data", mark: "F", accent: "#0ea5e9", publishedAt: "2024-06-22", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "coin-gate", name: "CoinGate", category: "payment", mark: "C", accent: "#16a34a", publishedAt: "2024-08-26", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "mailer", name: "Mailer", category: "communication", mark: "M", accent: "#f97316", publishedAt: "2024-08-26", downloads: 8 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "wechat", name: "WeChat", category: "communication", mark: "W", accent: "#07c160", publishedAt: "2024-08-26", downloads: 2 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "alisms", name: "Alibaba SMS", category: "communication", mark: "A", accent: "#ff6a00", publishedAt: "2024-08-26", downloads: 10 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", artifactId: "example-tools", slug: "test", name: "Shoply Test", category: "utility", mark: "T", accent: "#64748b", publishedAt: "2024-08-27", downloads: 34 },
  { kind: "app", packageKind: "extension", runtimeKind: "importer", slug: "shopifyimport", name: "Shopify Import", category: "commerce", mark: "S", accent: "#95bf47", publishedAt: "2024-11-04", downloads: 14 },
  { kind: "app", packageKind: "extension", runtimeKind: "payment", slug: "receive", name: "Cash on Delivery", category: "payment", mark: "C", accent: "#0891b2", publishedAt: "2024-11-04", downloads: 8 },
  { kind: "app", packageKind: "extension", runtimeKind: "ui", slug: "qrcode", name: "QR Code", category: "utility", mark: "QR", accent: "#111827", publishedAt: "2024-11-04", downloads: 0 },
  { kind: "app", packageKind: "extension", runtimeKind: "messaging", slug: "bird", name: "Bird", category: "communication", mark: "B", accent: "#2563eb", downloads: 1 },
  { kind: "app", packageKind: "extension", runtimeKind: "auth", slug: "apple", name: "Sign in with Apple", category: "identity", mark: "A", accent: "#111827", publishedAt: "2026-03-18", downloads: 3 }
];
const shoplyThemeSeeds = [
  { kind: "theme", packageKind: "theme", artifactId: "shoply", slug: "shoply-website", name: "Shoply Website", category: "business", mark: "SW", accent: "#2563eb" },
  { kind: "theme", packageKind: "theme", slug: "outdoor-equipment-mall", name: "Outdoor Equipment", category: "outdoor", mark: "OE", accent: "#0f766e" },
  { kind: "theme", packageKind: "theme", slug: "audio-headphones-mall", name: "Audio & Headphones", category: "electronics", mark: "AH", accent: "#7c3aed" },
  { kind: "theme", packageKind: "theme", slug: "clothing-shoes-mall", name: "Clothing & Shoes", category: "fashion", mark: "CS", accent: "#db2777" },
  { kind: "theme", packageKind: "theme", slug: "beauty-skin-care-mall", name: "Beauty & Skin Care", category: "beauty", mark: "BS", accent: "#e11d48" },
  { kind: "theme", packageKind: "theme", slug: "underwear-clothing-mall", name: "Intimates & Apparel", category: "fashion", mark: "IA", accent: "#be185d" },
  { kind: "theme", packageKind: "theme", slug: "pet-equipment-mall", name: "Pet Supplies", category: "pets", mark: "PS", accent: "#ea580c" },
  { kind: "theme", packageKind: "theme", slug: "home-textiles-mall", name: "Home Textiles", category: "home", mark: "HT", accent: "#a16207" },
  { kind: "theme", packageKind: "theme", slug: "cycling-accessories-mall", name: "Cycling Accessories", category: "sports", mark: "CA", accent: "#0284c7" },
  { kind: "theme", packageKind: "theme", slug: "jewelry-accessories", name: "Jewelry & Accessories", category: "jewelry", mark: "JA", accent: "#ca8a04" },
  { kind: "theme", packageKind: "theme", slug: "medical-equipment", name: "Medical Equipment", category: "medical", mark: "ME", accent: "#0d9488" },
  { kind: "theme", packageKind: "theme", slug: "furniture-mattress-mall", name: "Furniture & Mattress", category: "home", mark: "FM", accent: "#92400e" },
  { kind: "theme", packageKind: "theme", slug: "children-toys-mall", name: "Children & Toys", category: "kids", mark: "CT", accent: "#4f46e5" },
  { kind: "theme", packageKind: "theme", slug: "wig-mall", name: "Wigs & Hair", category: "beauty", mark: "WH", accent: "#c026d3" },
  { kind: "theme", packageKind: "theme", slug: "shoes-mall", name: "Footwear", category: "fashion", mark: "FW", accent: "#dc2626" },
  { kind: "theme", packageKind: "theme", slug: "fitness-equipment-mall", name: "Fitness Equipment", category: "sports", mark: "FE", accent: "#16a34a" }
];
const shoplyMarketplaceSeeds = [...shoplyAppSeeds, ...shoplyThemeSeeds];
const parseMeta = (value) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  if (typeof value !== "string") return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const appCategories = /* @__PURE__ */ new Set(["payment", "localization", "data", "communication", "commerce", "identity", "utility"]);
const themeCategories = /* @__PURE__ */ new Set(["business", "outdoor", "electronics", "fashion", "beauty", "home", "pets", "sports", "jewelry", "medical", "kids"]);
const normalizeCategory = (kind, category) => {
  if (kind === "app") return appCategories.has(category) ? category : "utility";
  return themeCategories.has(category) ? category : "fashion";
};
const useShoplyMarketplace = () => {
  const { locale } = useI18n();
  const { getSetting } = useSettings();
  const { installedExtensions, enabledExtensions } = useExtensions();
  const localeCode = computed(() => locale.value in shoplyMarketplaceLocales ? locale.value : "zh");
  const copy = computed(() => shoplyMarketplaceLocales[localeCode.value]);
  const { data: productsData, status, error } = useFetch(
    "/api/products",
    {
      key: "shoply-marketplace-products",
      query: { pageSize: 200 }
    },
    "$XqD3YUZXNu"
    /* nuxt-injected */
  );
  const installedExtensionIds = computed(() => new Set(installedExtensions.value.map((extension) => extension.id)));
  const enabledExtensionIds = computed(() => new Set(enabledExtensions.value.map((extension) => extension.id)));
  const packageState = (packageKind, artifactId) => {
    if (!artifactId) return { packageStatus: "not_built", managementPath: null };
    if (packageKind === "extension") {
      if (!installedExtensionIds.value.has(artifactId)) return { packageStatus: "not_built", managementPath: null };
      return {
        packageStatus: enabledExtensionIds.value.has(artifactId) ? "enabled" : "ready",
        managementPath: "/admin/settings/extensions"
      };
    }
    if (!publishedOptionalThemeSet.has(artifactId)) return { packageStatus: "not_built", managementPath: null };
    return {
      packageStatus: getSetting("active_theme") === artifactId ? "active" : "ready",
      managementPath: "/admin/settings/themes"
    };
  };
  const entries = computed(() => {
    var _a;
    const products = ((_a = productsData.value) == null ? void 0 : _a.data) || [];
    const productByKey = /* @__PURE__ */ new Map();
    for (const product of products) {
      const meta = parseMeta(product.metaData);
      if (!meta.shoply_catalog_type || !product.slug) continue;
      productByKey.set(`${meta.shoply_catalog_type}:${meta.marketplace_slug || product.slug}`, { product, meta });
    }
    const seeded = shoplyMarketplaceSeeds.map((seed) => {
      var _a2, _b;
      const override = productByKey.get(`${seed.kind}:${seed.slug}`);
      const translation = (_a2 = override == null ? void 0 : override.meta.translations) == null ? void 0 : _a2[localeCode.value];
      const categoryCopy = seed.kind === "app" ? copy.value.appCategories[seed.category] : null;
      const summary = (translation == null ? void 0 : translation.description) || (seed.kind === "app" ? (categoryCopy == null ? void 0 : categoryCopy[1]) || copy.value.detail.appGeneric : copy.value.detail.themeGeneric);
      const sections = ((_b = translation == null ? void 0 : translation.sections) == null ? void 0 : _b.flatMap((section) => {
        var _a3;
        return section.title && ((_a3 = section.paragraphs) == null ? void 0 : _a3.length) ? [{ title: section.title, paragraphs: section.paragraphs }] : [];
      })) || (seed.slug === "paddle" ? copy.value.detail.paddle.map((section) => ({ title: section.title, paragraphs: [...section.paragraphs] })) : [{ title: seed.kind === "app" ? copy.value.detail.appTitle : copy.value.detail.themeTitle, paragraphs: [seed.kind === "app" ? copy.value.detail.appGeneric : copy.value.detail.themeGeneric] }]);
      productByKey.delete(`${seed.kind}:${seed.slug}`);
      const packageKind = (override == null ? void 0 : override.meta.package_kind) || seed.packageKind;
      const artifactId = (override == null ? void 0 : override.meta.artifact_id) || seed.artifactId;
      return {
        ...seed,
        packageKind,
        artifactId,
        runtimeKind: (override == null ? void 0 : override.meta.runtime_kind) || seed.runtimeKind,
        name: (translation == null ? void 0 : translation.name) || (override == null ? void 0 : override.product.name) || seed.name,
        summary,
        contentTitle: (translation == null ? void 0 : translation.content_title) || (seed.kind === "app" ? copy.value.detail.appTitle : copy.value.detail.themeTitle),
        sections,
        accent: (override == null ? void 0 : override.meta.accent) || seed.accent,
        mark: (override == null ? void 0 : override.meta.mark) || seed.mark,
        category: normalizeCategory(seed.kind, (override == null ? void 0 : override.meta.category) || seed.category),
        version: (override == null ? void 0 : override.meta.version) || seed.version,
        demoUrl: (override == null ? void 0 : override.meta.demo_url) || seed.demoUrl,
        price: override ? Number(override.product.price || 0) : 0,
        productSlug: (override == null ? void 0 : override.product.slug) || null,
        imageUrl: (override == null ? void 0 : override.product.imageUrl) || null,
        ...packageState(packageKind, artifactId)
      };
    });
    const additional = [...productByKey.values()].map(({ product, meta }) => {
      var _a2, _b;
      const kind = meta.shoply_catalog_type || "app";
      const packageKind = meta.package_kind || (kind === "app" ? "extension" : "theme");
      const translation = (_a2 = meta.translations) == null ? void 0 : _a2[localeCode.value];
      return {
        kind,
        packageKind,
        artifactId: meta.artifact_id,
        runtimeKind: meta.runtime_kind,
        slug: meta.marketplace_slug || product.slug || "",
        name: (translation == null ? void 0 : translation.name) || product.name,
        summary: (translation == null ? void 0 : translation.description) || product.description || (kind === "app" ? copy.value.detail.appGeneric : copy.value.detail.themeGeneric),
        contentTitle: (translation == null ? void 0 : translation.content_title) || (kind === "app" ? copy.value.detail.appTitle : copy.value.detail.themeTitle),
        sections: ((_b = translation == null ? void 0 : translation.sections) == null ? void 0 : _b.flatMap((section) => {
          var _a3;
          return section.title && ((_a3 = section.paragraphs) == null ? void 0 : _a3.length) ? [{ title: section.title, paragraphs: section.paragraphs }] : [];
        })) || [],
        category: normalizeCategory(kind, meta.category),
        mark: meta.mark || product.name.slice(0, 2).toUpperCase(),
        accent: meta.accent || "#2563eb",
        version: meta.version,
        demoUrl: meta.demo_url,
        price: Number(product.price || 0),
        productSlug: product.slug,
        imageUrl: product.imageUrl,
        ...packageState(packageKind, meta.artifact_id)
      };
    });
    return [...seeded, ...additional];
  });
  const apps = computed(() => entries.value.filter((entry) => entry.kind === "app"));
  const themes = computed(() => entries.value.filter((entry) => entry.kind === "theme"));
  const findEntry = (kind, slug) => entries.value.find((entry) => entry.kind === kind && entry.slug === slug) || null;
  return { apps, themes, entries, findEntry, copy, localeCode, status, error };
};

export { useShoplyMarketplace as u };
