// src/app/repair/plumbing/page.tsx
// 水喉維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/plumbing",
  title: "水喉維修",
  serviceType: "水喉維修",
  keywords: [
    "水喉維修",
    "爆喉",
    "滲漏維修",
    "塞渠通渠",
    "換水喉",
    "廁所水箱",
    "水龍頭更換",
    "香港通渠",
  ],
  metaDescription:
    "德昌五金水喉維修服務：爆喉、滲漏、塞渠、水龍頭及水箱更換、換喉工程等，師傅上門即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "水喉滲漏、爆喉或塞渠，處理得越遲損失越大。德昌五金提供專業水喉維修服務，師傅上門檢查源頭，處理滲漏、爆喉、塞渠及各類水喉問題，收費透明，即場驗收。",
  features: [
    { title: "爆喉搶修", desc: "緊急處理爆喉、漏水，關水掣後即時檢查及更換損壞喉管。" },
    { title: "滲漏檢測", desc: "找出牆身、天花滲水源頭，徹底解決漏水問題。" },
    { title: "塞渠通渠", desc: "處理洗手盆、鋅盆、浴缸、坐廁堵塞問題。" },
    { title: "水龍頭更換", desc: "更換滴水、失靈的水龍頭及冷熱水掣。" },
    { title: "水箱／坐廁維修", desc: "維修及更換廁所水箱零件、坐廁配件。" },
    { title: "換喉工程", desc: "更換老化水喉，安裝明喉或暗喉。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片描述漏水或塞渠情況，即時報價。" },
    { title: "師傅上門檢查", desc: "上門檢查源頭，確認維修方案。" },
    { title: "確認報價施工", desc: "報價清晰後開始維修，絕不中途加價。" },
    { title: "測試驗收", desc: "測試水壓及運作正常，即場驗收。" },
  ],
  faqs: [
    {
      q: "發現漏水應該先做什麼？",
      a: "先關閉水掣或總掣，再用 WhatsApp 傳相片給我們。緊急漏水我們會優先安排師傅上門搶修。",
    },
    {
      q: "塞渠可以即日處理嗎？",
      a: "大部分塞渠問題可即日上門處理。WhatsApp 我們確認時間，師傅會帶備通渠工具上門。",
    },
    {
      q: "更換水喉需要多久？",
      a: "視乎喉管長度及位置而定，一般小型換喉工程可在數小時內完成，實際時間上門檢查後確認。",
    },
  ],
  relatedTitle: "除了水喉維修，德昌五金亦提供水電、磁磚、門類、油漆及商業裝修等一站式維修服務。",
  heroImageAlt: "德昌五金水喉師傅維修漏水水喉及更換老化喉管",
  heroImageCaption: "水喉師傅檢查滲漏源頭，更換老化喉管",
};

export const metadata = buildServiceMetadata(data);

export default function PlumbingPage() {
  return <RepairServicePage data={data} />;
}
