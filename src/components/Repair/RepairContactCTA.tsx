// src/components/Repair/RepairContactCTA.tsx
// 頁尾 CTA：吸引訪客透過 WhatsApp / 電話聯絡報價
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REPAIR_SITE, whatsappLink } from "@/lib/repair";

export default function RepairContactCTA({
  title = "需要維修？立即聯絡我們報價",
  subtitle = "WhatsApp 傳相片即可快速報價，師傅最快即日上門。",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      aria-label="聯絡德昌五金報價"
      className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {subtitle}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Clock className="size-4" aria-hidden="true" />
                星期一至六 9:00–19:00
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {REPAIR_SITE.address}
              </li>
            </ul>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-green-600 text-white hover:bg-green-700"
            >
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp 即日報價
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
