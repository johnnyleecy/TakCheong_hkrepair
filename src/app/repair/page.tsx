// src/app/repair/page.tsx
// 維修介紹（總覽頁）
import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  MessageSquareText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
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
  localBusinessSchema,
  faqSchema,
  itemListSchema,
} from "@/lib/repair";

export const metadata: Metadata = {
  title: "維修介紹 | 德昌五金 — 家居及商業維修服務",
  description:
    "德昌五金提供一站式維修服務：水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修、商業裝修及維修。師傅上門，即日報價，WhatsApp 6506 3277 聯絡我們。",
  keywords: [
    "維修服務",
    "家居維修",
    "商業維修",
    "水電維修",
    "水喉維修",
    "磁磚維修",
    "門類維修",
    "油漆維修",
    "商業裝修",
    "香港維修師傅",
  ],
  alternates: { canonical: "/repair" },
  openGraph: {
    title: "維修介紹 | 德昌五金 — 家居及商業維修服務",
    description:
      "一站式維修服務：水電、水喉、磁磚、門類、油漆磚牆、商業裝修。師傅上門，即日報價。",
    type: "website",
    url: "/repair",
    locale: "zh_HK",
  },
};

const faqs = [
  {
    q: "德昌五金提供哪些維修服務？",
    a: "我們提供水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修，以及商業裝修及維修等一站式服務，家居和商舖均適用。",
  },
  {
    q: "如何查詢維修報價？",
    a: "最快捷的方式是 WhatsApp 6506 3277 聯絡我們，傳相片說明問題，即可快速獲得初步報價，師傅上門後再確認最終費用。",
  },
  {
    q: "維修服務覆蓋香港哪些地區？",
    a: "我們服務香港九龍、新界及港島各區，師傅可按情況安排上門檢查及維修。",
  },
  {
    q: "可以即日安排師傅上門嗎？",
    a: "視乎工程內容及地區而定，緊急維修可優先安排。建議 WhatsApp 我們確認最快上門時間。",
  },
];

export default function RepairHomePage() {
  const jsonLd = [
    localBusinessSchema(),
    itemListSchema(REPAIR_SERVICES),
    breadcrumbSchema([{ name: "維修介紹", url: "/repair" }]),
    faqSchema(faqs),
  ];

  return (
    <RepairPageLayout jsonLd={jsonLd}>
      {/* H1 + 簡介 + 主圖 */}
      <section className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                德昌五金維修介紹
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                德昌五金提供一站式家居及商業維修服務，涵蓋
                <strong className="font-semibold text-gray-900">水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修</strong>
                及
                <strong className="font-semibold text-gray-900">商業裝修及維修</strong>
                。師傅經驗豐富、報價清晰，WhatsApp 傳相即可快速報價，最快即日上門。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 bg-green-600 text-white hover:bg-green-700">
                  <a
                    href={whatsappLink("你好，我想查詢德昌五金的維修服務，麻煩報價，謝謝。")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    WhatsApp 即日報價
                  </a>
                </Button>
              </div>
            </div>
            <RepairImage
              slug="/repair"
              alt="德昌五金維修師傅上門提供家居及商業維修服務"
              className="overflow-hidden rounded-2xl shadow-md"
              imgClassName="aspect-[4/3] h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 服務項目 */}
      <section aria-labelledby="services-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="services-title" className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            我們的維修服務
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            點擊服務項目了解詳情，或直接 WhatsApp 我們查詢。
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              <RepairImage
                slug={service.href}
                alt={`${service.title}服務實況 — 德昌五金專業師傅施工`}
                className="block"
                imgClassName="aspect-[4/3] h-auto w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6 pt-5">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-600">
                  {service.short}
                </p>
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
      </section>

      {/* 服務流程 */}
      <section aria-labelledby="process-title" className="border-y border-gray-100 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="process-title" className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            維修流程
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "WhatsApp 聯絡",
                desc: "傳相片說明問題，即時獲得初步報價",
              },
              {
                step: "02",
                title: "預約上門",
                desc: "確認時間，師傅準時上門檢查",
              },
              {
                step: "03",
                title: "確認報價",
                desc: "檢查後確認最終費用，清晰透明",
              },
              {
                step: "04",
                title: "施工驗收",
                desc: "完成維修，即場驗收安心使用",
              },
            ].map((item) => (
              <li key={item.step} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="text-sm font-bold text-primary">{item.step}</span>
                <h3 className="mt-2 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 服務承諾 */}
      <section aria-labelledby="promise-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
          <h2 id="promise-title" className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            為什麼選擇德昌五金？
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldCheck className="size-6" aria-hidden="true" />,
                title: "明碼實價",
                desc: "上門檢查後確認報價，不隱藏收費",
              },
              {
                icon: <Clock className="size-6" aria-hidden="true" />,
                title: "即日上門",
                desc: "緊急維修優先安排，盡快解決問題",
              },
              {
                icon: <MessageSquareText className="size-6" aria-hidden="true" />,
                title: "免費諮詢",
                desc: "WhatsApp 傳相即可獲得初步報價",
              },
              {
                icon: <CheckCircle2 className="size-6" aria-hidden="true" />,
                title: "完工驗收",
                desc: "完成後即場驗收，確保滿意",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  {item.icon}
                </span>
                <h3 className="mt-3 font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RepairFaq faqs={faqs} />
      <RepairContactCTA />
    </RepairPageLayout>
  );
}
