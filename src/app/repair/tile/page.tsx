// src/app/repair/tile/page.tsx
// 磁磚維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/tile",
  title: "磁磚維修",
  serviceType: "磁磚維修",
  keywords: [
    "磁磚維修",
    "磁磚鬆脫",
    "空心磚",
    "鋪磁磚",
    "牆磚維修",
    "地磚更換",
    "防水工程",
    "香港磁磚師傅",
  ],
  metaDescription:
    "德昌五金磁磚維修服務：磁磚鬆脫、空心磚、裂磚更換、鋪貼磁磚、浴室防水等，師傅上門即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "磁磚鬆脫、空心磚或裂磚，除了影響外觀，更可能藏有安全隱患。德昌五金提供專業磁磚維修服務，處理牆磚、地磚鬆脫及更換問題，同時提供浴室、廚房防水工程，令磁磚更耐用。",
  features: [
    { title: "磁磚鬆脫修復", desc: "重新黏貼鬆脫的牆磚及地磚，穩固耐用。" },
    { title: "空心磚處理", desc: "檢測及處理空心磚，防止日後剝落。" },
    { title: "裂磚更換", desc: "更換破裂、缺角的磁磚，盡量配對原有顏色。" },
    { title: "鋪貼磁磚", desc: "浴室、廚房、客廳等新鋪或重鋪磁磚工程。" },
    { title: "防水工程", desc: "浴室及廚房防水層處理，防止滲水問題。" },
    { title: "填縫翻新", desc: "磁磚縫老化發黑翻新，回復美觀。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片顯示磁磚情況，即時獲得報價。" },
    { title: "師傅上門檢查", desc: "檢查鬆脫範圍及底層狀況。" },
    { title: "確認報價施工", desc: "確認方案及費用後安排施工。" },
    { title: "完工驗收", desc: "檢查平整度及黏貼效果，即場驗收。" },
  ],
  faqs: [
    {
      q: "磁磚鬆脫一定要全部重鋪嗎？",
      a: "不一定。視乎鬆脫範圍及底層狀況，部分情況只需局部修復或重新黏貼，師傅上門檢查後會提供最合適方案。",
    },
    {
      q: "更換磁磚可以配回相同顏色嗎？",
      a: "我們會盡量為你配對相近的磁磚款式及顏色，如已停產亦可提供相近替代方案。",
    },
    {
      q: "浴室磁磚維修需要做防水嗎？",
      a: "如果維修範圍涉及浴室牆身或地面，建議同時檢查防水層，避免日後滲水，師傅會按實際情況提供建議。",
    },
  ],
  relatedTitle: "除了磁磚維修，德昌五金亦提供水電、水喉、門類、油漆及商業裝修等一站式維修服務。",
  heroImageAlt: "德昌五金磁磚師傅鋪貼及修復鬆脫磁磚",
  heroImageCaption: "磁磚師傅重新黏貼鬆脫磁磚，平整耐用",
};

export const metadata = buildServiceMetadata(data);

export default function TilePage() {
  return <RepairServicePage data={data} />;
}
