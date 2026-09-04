// src/components/Repair/RepairServicePage.tsx
// 單一維修服務詳情頁面（水電 / 水喉 / 磁磚 / 門類 / 油漆磚牆 / 商業裝修）
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RepairPageLayout from "@/components/Repair/RepairPageLayout";
import RepairContactCTA from "@/components/Repair/RepairContactCTA";
import RepairBreadcrumb from "@/components/Repair/RepairBreadcrumb";
import RepairFaq from "@/components/Repair/RepairFaq";
import RepairImage from "@/components/Repair/RepairImage";
import {
  REPAIR_SITE,
  REPAIR_SERVICES,
  whatsappLink,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/repair";
import type { Faq } from "@/lib/repair";

export type ServicePageData = {
  slug: string;
  title: string;
  intro: string;
  serviceType: string;
  keywords: string[];
  metaDescription: string;
  features: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: Faq[];
  relatedTitle: string;
  heroImageAlt: string;
  heroImageCaption?: string;
};

export function buildServiceMetadata(data: ServicePageData): Metadata {
  return {
    title: `${data.title} | 德昌五金`,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: data.slug },
    openGraph: {
      title: `${data.title} | 德昌五金`,
      description: data.metaDescription,
      type: "website",
      url: data.slug,
      locale: "zh_HK",
    },
  };
}

export default function RepairServicePage({ data }: { data: ServicePageData }) {
  const related = REPAIR_SERVICES.filter((s) => s.href !== data.slug);

  const jsonLd = [
    serviceSchema({
      slug: data.slug,
      title: data.title,
      description: data.metaDescription,
      serviceType: data.serviceType,
      keywords: data.keywords,
    }),
    breadcrumbSchema([{ name: "維修介紹", url: "/repair" }, { name: data.title, url: data.slug }]),
    faqSchema(data.faqs),
  ];

  return (
    <RepairPageLayout jsonLd={jsonLd}>
      <RepairBreadcrumb items={[{ name: "維修介紹", href: "/repair" }, { name: data.title }]} />

      {/* H1 Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            德昌五金{data.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{data.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2 bg-green-600 text-white hover:bg-green-700">
              <a
                href={whatsappLink(`你好，我想查詢德昌五金的${data.title}服務，麻煩報價，謝謝。`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp 查詢報價
              </a>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={`tel:${REPAIR_SITE.phoneTel}`}>
                <Phone className="size-5" aria-hidden="true" />
                {REPAIR_SITE.phoneDisplay}
              </a>
            </Button> */}
          </div>
        </div>

        {/* 服務主視覺：AI 可讀插圖 */}
        <div className="lg:pl-4">
          <RepairImage
            slug={data.slug}
            alt={data.heroImageAlt}
            caption={data.heroImageCaption}
            className="rounded-xl"
          />
        </div>
        </div>
      </section>

      {/* 服務項目 */}
      <section aria-labelledby="features-title" className="border-y border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="features-title" className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {data.title}服務範圍
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 流程 */}
      <section aria-labelledby="process-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 id="process-title" className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          服務流程
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.process.map((p, i) => (
            <li key={p.title} className="rounded-xl border border-gray-200 bg-white p-6">
              <span className="text-sm font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 其他維修服務 */}
      <section aria-labelledby="related-title" className="border-t border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="related-title" className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            其他維修服務
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">{data.relatedTitle}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <RepairImage
                  slug={s.href}
                  alt={`德昌五金${s.title}服務，師傅上門即日報價`}
                  imgClassName="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-gray-600">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    了解詳情
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RepairFaq faqs={data.faqs} />
      <RepairContactCTA
        title={`需要${data.title}？立即聯絡我們`}
        subtitle="WhatsApp 傳相片即可快速報價，師傅最快即日上門。"
      />
    </RepairPageLayout>
  );
}
