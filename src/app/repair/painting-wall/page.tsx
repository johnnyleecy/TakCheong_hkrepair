// src/app/repair/painting-wall/page.tsx
// 油漆磚牆維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/painting-wall",
  title: "油漆磚牆維修",
  serviceType: "油漆磚牆維修",
  keywords: [
    "油漆維修",
    "牆身剝落",
    "裂縫修補",
    "全屋油漆",
    "乳膠漆",
    "防水油漆",
    "磚牆維修",
    "香港油漆師傅",
  ],
  metaDescription:
    "德昌五金油漆磚牆維修服務：牆身剝落、裂縫修補、發霉處理、全屋油漆翻新等，師傅上門即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "牆身剝落、發霉、裂縫，除了影響觀感，更可能反映滲水或結構問題。德昌五金提供專業油漆及磚牆維修服務，由批灰、防潮、防水到上油一站式處理，令牆身回復平滑美觀。",
  features: [
    { title: "牆身剝落修補", desc: "鏟底、批灰、重油，徹底處理牆身剝落問題。" },
    { title: "裂縫修補", desc: "修補牆身及天花裂縫，防止問題惡化。" },
    { title: "發霉處理", desc: "處理牆身發霉及滲水跡，做防潮及防水處理。" },
    { title: "全屋油漆", desc: "住宅或商舖全屋翻新油漆，提供顏色建議。" },
    { title: "磚牆維修", desc: "修補磚牆鬆脫、破損及磚縫問題。" },
    { title: "防水工程", desc: "外牆及室內防水處理，杜絕滲水。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片顯示牆身問題及範圍，即時報價。" },
    { title: "師傅上門檢查", desc: "檢查牆身狀況、面積及滲水來源。" },
    { title: "確認報價施工", desc: "確認油漆用料及費用後安排施工。" },
    { title: "完工驗收", desc: "檢查平整度及上色效果，即場驗收。" },
  ],
  faqs: [
    {
      q: "牆身剝落可以只油局部嗎？",
      a: "可以。輕微剝落可局部修補，但如果範圍較大或涉及滲水，建議全幅牆身處理，以免日後再剝落，師傅會提供專業意見。",
    },
    {
      q: "油漆工程需要多久？",
      a: "視乎面積而定，一般 400–800 呎單位全屋油漆約需 3–5 日，包括批灰及上油時間。",
    },
    {
      q: "牆身發霉是否一定關滲水事？",
      a: "不一定，潮濕或通風不足亦會引致發霉。師傅上門檢查後會判斷是否需先處理滲水或做防水，再進行翻新。",
    },
  ],
  relatedTitle: "除了油漆磚牆維修，德昌五金亦提供水電、水喉、磁磚、門類及商業裝修等一站式維修服務。",
  heroImageAlt: "德昌五金油漆師傅為牆身批灰上油翻新",
  heroImageCaption: "油漆師傅處理牆身剝落，全屋翻新",
};

export const metadata = buildServiceMetadata(data);

export default function PaintingWallPage() {
  return <RepairServicePage data={data} />;
}
