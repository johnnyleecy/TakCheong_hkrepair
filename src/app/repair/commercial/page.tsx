// src/app/repair/commercial/page.tsx
// 商業裝修及維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/commercial",
  title: "商業裝修及維修",
  serviceType: "商業裝修及維修",
  keywords: [
    "商業裝修",
    "店舖裝修",
    "辦公室裝修",
    "餐廳裝修",
    "商舖維修",
    "緊急維修",
    "招牌安裝",
    "香港裝修公司",
  ],
  metaDescription:
    "德昌五金商業裝修及維修服務：店舖、辦公室、餐廳裝修翻新、緊急維修、招牌安裝等，一站式服務即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "開業裝修、店舖翻新或辦公室維修，影響生意運作，必須準時可靠。德昌五金提供一站式商業裝修及維修服務，涵蓋水電、油漆、間隔、招牌等工程，減低對營業的影響，助你安心開業。",
  features: [
    { title: "店舖裝修", desc: "零售店、地舖整體裝修，包括間隔、水電及油漆。" },
    { title: "辦公室裝修", desc: "辦公室間隔、傢俬安裝、電力及網絡線槽工程。" },
    { title: "餐廳裝修", desc: "餐廳及食肆裝修，符合消防及牌照要求的工程。" },
    { title: "專業代辦牌照顧問服務", desc: "根據食肆牌照專家或中介人的引導和現場環境情況，確保食肆裝修符合政府規格以及裝修規格。" },
    { title: "緊急維修", desc: "商舖漏水、跳掣、門閘故障等維修，需要先預約，師傅按預約時間上門。" },
    { title: "招牌安裝", desc: "燈箱、招牌安裝及維修保養。" },
    { title: "翻新工程", desc: "舊舖翻新、牆身油漆、地板更換等翻新工程。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片或圖則，描述裝修需求，即時報價。" },
    { title: "免費度尺", desc: "安排師傅到場度尺，確認工程範圍。" },
    { title: "確認報價施工", desc: "提供清晰報價單，確認後按計劃施工。" },
    { title: "驗收交舖", desc: "按時完工，驗收後即可營業。" },
  ],
  faqs: [
    {
      q: "商業裝修一般需要多久？",
      a: "視乎店舖面積及工程範圍而定，一般小舖裝修約 1–2 星期，較大工程會按圖則提供明確工期。",
    },
    {
      q: "可以提供報價單嗎？",
      a: "可以。我們會按工程範圍提供清晰報價單，列明項目及費用，確認後才開始施工。",
    },
    {
      q: "商舖營業中可以進行維修嗎？",
      a: "可以。我們會盡量安排非營業時段施工，減少對生意的影響，緊急維修更會優先處理。",
    },
  ],
  relatedTitle: "除了商業裝修及維修，德昌五金亦提供水電、水喉、磁磚、門類及油漆等一站式維修服務。",
  heroImageAlt: "德昌五金商業裝修工程，店舖及辦公室裝修翻新",
  heroImageCaption: "一站式商業裝修，準時交舖，安心開業",
};

export const metadata = buildServiceMetadata(data);

export default function CommercialPage() {
  return <RepairServicePage data={data} />;
}
