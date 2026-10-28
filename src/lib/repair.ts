// src/lib/repair.ts
// 維修服務共用資料：品牌資訊、服務清單、SEO / AEO 結構化資料（JSON-LD）產生器

export const BRAND = "德昌五金";

export const REPAIR_SITE = {
  name: BRAND,
  phoneDisplay: "6506 3277",
  phoneTel: "+85265063277",
  whatsapp: "https://wa.me/85265063277",
  whatsappText: encodeURIComponent("你好，我想查詢德昌五金的維修服務，麻煩報價，謝謝。"),
  address: "九龍深水埗大南街67號地下B舖",
  addressLocality: "深水埗",
  addressRegion: "九龍",
  country: "HK",
  areaServed: "香港（九龍、新界、港島）",
  url: "https://redsea.fit",
};

export const whatsappLink = (message?: string) =>
  `${REPAIR_SITE.whatsapp}?text=${encodeURIComponent(
    message ?? "你好，我想查詢德昌五金的維修服務，麻煩報價，謝謝。"
  )}`;

// 維修頁面插圖（AI 可讀：配合圖片 alt / figcaption / JSON-LD image 使用）
export const repairImage = (slug: string) =>
  `/images/repair/${slug === "/repair" ? "home" : slug.replace("/repair/", "")}.jpg`;

export const repairImageUrl = (slug: string) => `${REPAIR_SITE.url}${repairImage(slug)}`;

// 其他維修服務清單（navbar 下拉選單 + 站內互連用）
export type RepairService = {
  href: string;
  title: string;
  short: string; // 下拉選單 / 卡片用的簡短描述
};

export const REPAIR_SERVICES: RepairService[] = [
  {
    href: "/repair/water-electric",
    title: "水電維修",
    short: "跳掣、電線、插座、熱水爐等水電工程",
  },
  {
    href: "/repair/plumbing",
    title: "水喉維修",
    short: "爆喉、滲漏、塞渠、換水喉管",
  },
  {
    href: "/repair/tile",
    title: "磁磚維修",
    short: "磁磚鬆脫、空心磚、鋪貼及防水",
  },
  {
    href: "/repair/door",
    title: "門類維修",
    short: "門鎖、木門、鐵閘、趟門更換維修",
  },
  {
    href: "/repair/painting-wall",
    title: "油漆磚牆維修",
    short: "牆身剝落、裂縫修補、全屋油漆",
  },
  {
    href: "/repair/commercial",
    title: "商業裝修及維修",
    short: "店舖、辦公室裝修翻新及緊急維修",
  },
];

export type Faq = { q: string; a: string };

// ---------- JSON-LD 產生器（AEO / 結構化資料） ----------

const providerSchema = {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${REPAIR_SITE.url}/#business`,
  name: BRAND,
  telephone: REPAIR_SITE.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: REPAIR_SITE.address,
    addressLocality: REPAIR_SITE.addressLocality,
    addressRegion: REPAIR_SITE.addressRegion,
    addressCountry: REPAIR_SITE.country,
  },
  areaServed: REPAIR_SITE.areaServed,
  url: REPAIR_SITE.url,
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${REPAIR_SITE.url}/#business`,
    name: BRAND,
    description: "德昌五金提供一站式水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修及商業裝修服務。",
    telephone: REPAIR_SITE.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: REPAIR_SITE.address,
      addressLocality: REPAIR_SITE.addressLocality,
      addressRegion: REPAIR_SITE.addressRegion,
      addressCountry: REPAIR_SITE.country,
    },
    areaServed: REPAIR_SITE.areaServed,
    url: REPAIR_SITE.url,
    priceRange: "$$",
    image: [
      repairImageUrl("/repair"),
      ...REPAIR_SERVICES.filter((s) => s.href !== "/repair").map((s) => repairImageUrl(s.href)),
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: REPAIR_SITE.phoneTel,
      contactType: "customer service",
      availableLanguage: ["zh-Hant", "yue"],
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${REPAIR_SITE.url}${item.url}`,
    })),
  };
}

export function serviceSchema(opts: {
  slug: string;
  title: string;
  description: string;
  serviceType: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${REPAIR_SITE.url}${opts.slug}#service`,
    name: `${BRAND} ${opts.title}`,
    serviceType: opts.serviceType,
    description: opts.description,
    keywords: opts.keywords.join(", "),
    url: `${REPAIR_SITE.url}${opts.slug}`,
    image: repairImageUrl(opts.slug),
    provider: providerSchema,
    areaServed: {
      "@type": "Place",
      name: REPAIR_SITE.areaServed,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${REPAIR_SITE.url}${opts.slug}`,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: REPAIR_SITE.phoneTel,
        contactType: "customer service",
      },
    },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function itemListSchema(items: RepairService[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "德昌五金維修服務",
    itemListElement: items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${REPAIR_SITE.url}${s.href}`,
    })),
  };
}
