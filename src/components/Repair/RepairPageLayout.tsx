// src/components/Repair/RepairPageLayout.tsx
// 維修服務頁面共用版面：Navbar（含其他維修服務下拉選單）+ Footer + JSON-LD 結構化資料
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ChevronDown,
  Wrench,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { REPAIR_SITE, REPAIR_SERVICES, whatsappLink } from "@/lib/repair";

export default function RepairPageLayout({
  children,
  jsonLd,
  badge = "維修服務",
  showPhone = true,
}: {
  children: React.ReactNode;
  jsonLd?: object | object[];
  badge?: string;
  showPhone?: boolean;
}) {
  const structuredData = jsonLd ? [jsonLd].flat() : [];

  return (
    <>
      {/* AEO / SEO 結構化資料 */}
      {structuredData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* 頂部資訊列 */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {REPAIR_SITE.address}
          </p>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="主要導覽"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center justify-between gap-4">
            {/* 品牌 */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold text-gray-900"
                aria-label="德昌五金首頁"
              >
                德昌五金
              </Link>
              <span className="hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 md:inline-block">
                {badge}
              </span>
            </div>

            {/* 桌面導覽 */}
            <div className="hidden items-center gap-1 lg:flex">
              <Link
                href="/repair"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                維修介紹
              </Link>

              {/* 其他維修服務下拉選單 */}
              <div className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  aria-haspopup="true"
                >
                  其他維修服務
                  <ChevronDown
                    className="size-4 transition-transform group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </button>
                <div className="invisible absolute right-0 top-full w-64 translate-y-1 rounded-lg border border-gray-200 bg-white p-1.5 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {REPAIR_SERVICES.filter((s) => s.href !== "/repair").map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                關於我們
              </Link>

            </div>

            {/* 電話 / WhatsApp CTA */}
            <div className="flex items-center gap-2">
              {/* <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-yellow-700 transition-colors hover:bg-yellow-100 hover:text-gray-900"
              >
                進入五金商城
              </Link> */}
              <Button asChild size="sm" className="gap-1.5">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  即日報價
                </a>
              </Button>
            </div>
          </div>

          {/* 手機版服務連結 */}
          <div className="flex gap-2 overflow-x-auto pb-3 lg:hidden">
            {REPAIR_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="flex items-center gap-2 text-base font-semibold text-gray-900">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Wrench className="size-4" aria-hidden="true" />
                </span>
                德昌五金
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                一站式家居及商業維修服務，師傅上門、即日報價，歡迎 WhatsApp
                查詢。
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">維修服務</p>
              <ul className="mt-3 space-y-2">
                {REPAIR_SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">聯絡我們</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-green-600 transition-colors hover:text-green-700"
                  >
                    <MessageCircle className="size-3.5" aria-hidden="true" />
                    WhatsApp {REPAIR_SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  {REPAIR_SITE.address}
                </li>
                <li className="flex items-center gap-1.5">
                  <Clock className="size-3.5" aria-hidden="true" />
                  星期一至六 9:00–19:00
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">服務承諾</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-1.5">
                  <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  報價清晰、明碼實價
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  師傅上門、準時可靠
                </li>
                <li className="flex items-start gap-1.5">
                  <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  完工驗收、安心保障
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-400">
            <p>{REPAIR_SITE.address}</p>
            <p>@ 2026 Tak Cheong. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 右下角固定浮動 WhatsApp Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp 聯絡我們"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#20bd5a] hover:shadow-xl transition-all"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        請WhatsApp聯絡我們
      </a>
    </>
  );
}
