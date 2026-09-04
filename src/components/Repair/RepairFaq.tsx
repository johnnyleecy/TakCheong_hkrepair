// src/components/Repair/RepairFaq.tsx
// FAQ 手風琴（AEO：FAQPage 結構化資料由頁面提供）
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/repair";

export default function RepairFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2
        id="faq-title"
        className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
      >
        常見問題
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 sm:text-base">
        關於維修服務的常見疑問，歡迎 WhatsApp 直接查詢。
      </p>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-base font-medium text-gray-900">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed text-gray-600">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
