// src/app/about/page.tsx
// 關於我們：德昌五金 20 年老字號公司介紹
// 聯絡方式：只限 WhatsApp（6506 3277）
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Users,
  Store,
  Hammer,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  PhoneOff,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RepairImage from "@/components/Repair/RepairImage";
import RepairPageLayout from "@/components/Repair/RepairPageLayout";
import {
  BRAND,
  REPAIR_SITE,
  REPAIR_SERVICES,
  whatsappLink,
  localBusinessSchema,
  breadcrumbSchema,
  itemListSchema,
} from "@/lib/repair";

export const metadata: Metadata = {
  title: "關於我們 | 德昌五金 20年老字號 維修工程",
  description:
    "德昌五金扎根深水埗20年，香港老字號，包辦五金和維修工程，提供水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修及商業裝修服務。地址：九龍深水埗大南街67號地下B舖，WhatsApp 6506 3277（只限WhatsApp查詢）。",
  keywords: [
    "德昌五金",
    "深水埗五金",
    "香港維修公司",
    "老字號裝修",
    "水電維修",
    "水喉維修",
    "磁磚維修",
    "門類維修",
    "油漆工程",
    "商業裝修",
    "WhatsApp維修查詢",
  ],
  alternates: {
    canonical: `${REPAIR_SITE.url}/about`,
  },
  openGraph: {
    title: "關於我們 | 德昌五金 20年老字號",
    description:
      "德昌五金扎根深水埗20年，提供一站式家居及商業維修服務。WhatsApp 6506 3277（只限WhatsApp查詢）。",
    type: "website",
    url: `${REPAIR_SITE.url}/about`,
    siteName: BRAND,
    locale: "zh_HK",
  },
};

// 公司里程碑
const milestones = [
  {
    year: "2000年代初",
    title: "扎根深水埗",
    description:
      "德昌五金於九龍深水埗大南街開業，由小型五金舖起步，服務街坊街里，累積口碑。",
    icon: Store,
  },
  {
    year: "十年深耕",
    title: "拓展維修工程",
    description:
      "由五金零售擴展至家居維修工程，水電、水喉、磁磚、門類、油漆等服務陸續上線。",
    icon: Hammer,
  },
  {
    year: "近年",
    title: "服務全港",
    description:
      "服務範圍覆蓋九龍、新界及港島，為住宅及商業客戶提供一站式維修與裝修方案。",
    icon: Building2,
  },
  {
    year: "今日",
    title: "20年老字號",
    description:
      "多年來以老實報價、認真施工、清晰收費見稱，WhatsApp 6506 3277 即時查詢報價。",
    icon: ShieldCheck,
  },
];

// 我們的優勢
const advantages = [
  {
    title: "20年老字號",
    description: "扎根深水埗20年，經驗豐富，熟悉香港舊樓常見問題，懂得對症下藥。",
    icon: Store,
  },
  {
    title: "師傅團隊",
    description: "水電、水喉、泥水、油漆等各工種師傅，自己團隊施工，質素有保證。",
    icon: Users,
  },
  {
    title: "老實報價",
    description: "先報價後施工，收費清晰，不取巧、不亂加價，最怕客戶受騙。",
    icon: ShieldCheck,
  },
  {
    title: "WhatsApp 即時查詢",
    description: "影相傳給我們即可免費初步報價，快靚正，唔使撲嚟撲去。",
    icon: MessageCircle,
  },
];

export default function AboutPage() {
  const jsonLd = [
    {
      ...localBusinessSchema(),
      foundingDate: "2000年代初",
      slogan: "20年老字號，老實報價，認真施工",
      knowsAbout: REPAIR_SERVICES.map((s) => s.title),
    },
    breadcrumbSchema([{ name: "關於我們", url: "/about" }]),
    itemListSchema(REPAIR_SERVICES),
  ];

  return (
    <RepairPageLayout badge="關於我們" showPhone={false} jsonLd={jsonLd}>
      {/* Hero */}
      <section
        className="border-b border-gray-100 bg-gray-50"
        aria-labelledby="about-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav aria-label="麵包屑" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  首頁
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900 font-medium">
                關於我們
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              深水埗 20 年老字號
            </Badge>
            <h1
              id="about-title"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              德昌五金 — 香港人的維修好幫手
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              德昌五金扎根<strong>九龍深水埗</strong>20年，由街坊熟識的五金舖，
              亦提供一站式家居及商業維修服務。多年來以
              <strong>老實報價、認真施工、清晰收費</strong>見稱，
              是香港人信得過的老字號。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a
                  href={whatsappLink("你好，我想了解德昌五金的維修服務，麻煩報價，謝謝。")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 mr-2" aria-hidden="true" />
                  WhatsApp 查詢報價
                  <span className="ml-1">（{REPAIR_SITE.phoneDisplay}）</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/repair">
                  瀏覽維修服務
                  <ArrowRight className="size-4 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            {/* <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-500">
              <PhoneOff className="size-4" aria-hidden="true" />
              只限 WhatsApp 查詢，請勿致電。
            </p> */}
          </div>
        </div>
      </section>

      {/* 公司介紹 */}
      <section className="border-b border-gray-100" aria-labelledby="company-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2
                id="company-title"
                className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              >
                關於德昌五金
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>德昌五金</strong>位於九龍深水埗大南街67號地下B舖，
                  深耕社區20年，由最初的家居五金零售，已發展成為會提供不同類型的維修服務，包括
                  <strong>水電維修、水喉維修、磁磚維修、門類維修、油漆磚牆維修
                  及商業裝修及維修</strong>。
                </p>
                <p>
                  我們明白香港樓宇老化、維修需求多的情況，因此一直以
                  <strong>貼地、老實、快捷</strong>為原則服務街坊：
                  無論是跳掣、爆喉、磁磚鬆脫、門鎖損壞，還是店舖裝修翻新，
                  只需在 WhatsApp 影相描述問題，即可獲得初步報價，師傅上門後再落實細節，
                  收費公開透明。
                </p>
                <p>
                  20年來，我們靠的是<strong>口碑與回頭客</strong>。
                  每一個工程都當作自己屋企去做，用料不偷工、工序不馬虎，
                  完工後如有問題亦會跟進到底。這份堅持，
                  讓我們成為深水埗街坊以至全港客戶信賴的老字號。
                </p>
              </div>

              {/* 聯絡資料 */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">聯絡我們</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      地址：<strong>{REPAIR_SITE.address}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>營業時間：星期一至日 09:00–19:00</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      WhatsApp：<strong>{REPAIR_SITE.phoneDisplay}</strong>
                      （只限 WhatsApp，請勿致電）
                    </span>
                  </li>
                </ul>
                <Button className="mt-5 w-full sm:w-auto" asChild>
                  <a
                    href={whatsappLink("你好，我想查詢德昌五金的維修服務，麻煩報價，謝謝。")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4 mr-2" aria-hidden="true" />
                    WhatsApp 立即查詢
                  </a>
                </Button>
              </div>
            </div>

            {/* 里程碑 */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                我們的足跡
              </h2>
              <ol className="mt-8 space-y-0">
                {milestones.map((m, i) => (
                  <li key={m.title} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < milestones.length - 1 && (
                      <span
                        className="absolute left-5 top-12 bottom-0 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <m.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {m.year}
                      </p>
                      <h3 className="mt-1 font-semibold text-gray-900">{m.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                        {m.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的優勢 */}
      <section className="border-b border-gray-100 bg-gray-50" aria-labelledby="advantage-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h2
              id="advantage-title"
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              為何選擇德昌五金？
            </h2>
            <p className="mt-3 text-gray-600">
              20年老字號，唔係得個講字。以下四點，是街坊多年來對我們的評價。
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <Card key={a.title} className="h-full">
                <CardHeader>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="mt-4 text-lg">{a.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-gray-600">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 服務範圍 */}
      <section className="border-b border-gray-100" aria-labelledby="service-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h2
              id="service-title"
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              我們的維修服務
            </h2>
            <p className="mt-3 text-gray-600">
              涵蓋家居及商業各類維修工程，一站式幫你搞掂。
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </ul>
        </div>
      </section>

      {/* 最後 CTA */}
      <section className="bg-primary text-primary-foreground" aria-labelledby="cta-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h2
            id="cta-title"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            有維修問題？即刻 WhatsApp 我哋
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            影相講低問題，免費初步報價。德昌五金 20 年老字號，
            師傅上門，老實報價，認真施工。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a
                href={whatsappLink("你好，我想查詢德昌五金的維修服務，麻煩報價，謝謝。")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4 mr-2" aria-hidden="true" />
                WhatsApp 查詢報價（{REPAIR_SITE.phoneDisplay}）
              </a>
            </Button>
          </div>
          {/* <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-primary-foreground/70">
            <PhoneOff className="size-4" aria-hidden="true" />
            只限 WhatsApp 查詢，請勿致電。
          </p> */}
        </div>
      </section>
    </RepairPageLayout>
  );
}
