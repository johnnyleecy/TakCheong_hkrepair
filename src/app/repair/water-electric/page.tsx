// src/app/repair/water-electric/page.tsx
// 水電維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/water-electric",
  title: "水電維修",
  serviceType: "水電維修",
  keywords: [
    "水電維修",
    "跳掣維修",
    "電線維修",
    "插座更換",
    "燈具安裝",
    "熱水爐維修",
    "漏電檢查",
    "香港電工",
  ],
  metaDescription:
    "德昌五金水電維修服務：跳掣、漏電、電線老化、插座更換、燈具安裝、熱水爐維修等，持牌師傅上門，即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "家居或商舖的電力問題可大可小，處理不當隨時有危險。德昌五金提供專業水電維修服務，由經驗師傅上門檢查，處理跳掣、漏電、電線老化、插座更換等問題，即場確認報價，安全又放心。",
  features: [
    { title: "跳掣／漏電檢查", desc: "查明跳掣及漏電原因，更換損壞的斷路器或漏電保護掣。" },
    { title: "電線老化更換", desc: "處理電線老化、過熱等問題，更換不合規格的舊電線。" },
    { title: "插座／開關更換", desc: "更換鬆動、燒焦或失靈的插座及開關掣。" },
    { title: "燈具安裝維修", desc: "安裝及維修天花燈、射燈、光管，處理燈具不著等問題。" },
    { title: "熱水爐維修安裝", desc: "檢查及維修電熱水爐、氣體熱水爐，提供更換建議。" },
    { title: "小型電力工程", desc: "拉線、加裝插座位、電箱檢查等小型電力工程。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片描述問題，即時獲得初步報價。" },
    { title: "師傅上門檢查", desc: "預約時間，師傅上門檢查電力狀況。" },
    { title: "確認報價施工", desc: "確認最終費用後開始維修，收費清晰。" },
    { title: "測試驗收", desc: "完成後測試運作正常，即場驗收。" },
  ],
  faqs: [
    {
      q: "經常跳掣是什麼原因？",
      a: "常見原因包括電器漏電、電線老化、電箱負荷過重或斷路器損壞。建議停止使用相關電器並聯絡我們上門檢查，避免釀成危險。",
    },
    {
      q: "水電維修可以即日上門嗎？",
      a: "緊急電力問題如跳掣、有燒焦味等，我們會優先安排。WhatsApp 我們確認時間即可。",
    },
    {
      q: "維修前需要準備什麼？",
      a: "只需以 WhatsApp 傳相片說明問題位置，如能提供電箱相片更佳，可加快報價及上門安排。",
    },
  ],
  relatedTitle: "除了水電維修，德昌五金亦提供水喉、磁磚、門類、油漆及商業裝修等一站式維修服務。",
  heroImageAlt: "德昌五金水電師傅上門檢查電箱及維修電力問題",
  heroImageCaption: "持牌水電師傅檢查電箱、跳掣及漏電問題",
};

export const metadata = buildServiceMetadata(data);

export default function WaterElectricPage() {
  return <RepairServicePage data={data} />;
}
