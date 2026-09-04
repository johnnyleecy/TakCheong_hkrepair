// src/app/repair/door/page.tsx
// 門類維修
import RepairServicePage, { buildServiceMetadata } from "@/components/Repair/RepairServicePage";
import type { ServicePageData } from "@/components/Repair/RepairServicePage";

const data: ServicePageData = {
  slug: "/repair/door",
  title: "門類維修",
  serviceType: "門類維修",
  keywords: [
    "門鎖維修",
    "換門鎖",
    "木門維修",
    "鐵閘維修",
    "趟門維修",
    "門鉸更換",
    "大門更換",
    "香港門鎖師傅",
  ],
  metaDescription:
    "德昌五金門類維修服務：門鎖更換、木門維修、鐵閘維修、趟門及門鉸維修等，師傅上門即日報價。WhatsApp 6506 3277 查詢。",
  intro:
    "門鎖失靈、木門變形、趟門卡住，影響家居安全與使用體驗。德昌五金提供專業門類維修服務，涵蓋門鎖更換、木門及鐵閘維修、趟門及門鉸調整等，師傅上門即場處理。",
  features: [
    { title: "門鎖更換維修", desc: "更換失靈、生鏽的門鎖，安裝電子鎖及防盜鎖。" },
    { title: "木門維修", desc: "處理木門變形、掉漆、破損及門邊修補。" },
    { title: "鐵閘維修", desc: "維修鬆脫、生鏽、開關不順的鐵閘。" },
    { title: "趟門維修", desc: "調整及更換趟門路軌、滾輪，回復順暢。" },
    { title: "門鉸調整", desc: "維修鬆脫門鉸、門扇傾斜問題。" },
    { title: "更換門扇", desc: "更換損壞嚴重的木門或大門門扇。" },
  ],
  process: [
    { title: "WhatsApp 查詢", desc: "傳相片描述門鎖或門扇問題，即時報價。" },
    { title: "師傅上門檢查", desc: "上門檢查損壞程度及配件型號。" },
    { title: "確認報價施工", desc: "確認方案及費用後即場維修或更換。" },
    { title: "測試驗收", desc: "測試開關及鎖具運作，即場驗收。" },
  ],
  faqs: [
    {
      q: "換門鎖需要多久？",
      a: "一般門鎖更換約 30 分鐘至 1 小時完成，電子鎖安裝約 1–2 小時，師傅上門後即場處理。",
    },
    {
      q: "可以安裝電子鎖嗎？",
      a: "可以。我們提供電子鎖、密碼鎖及指紋鎖安裝服務，可 WhatsApp 查詢型號及報價。",
    },
    {
      q: "木門破損可以只修局部嗎？",
      a: "視乎破損情況，輕微破損可局部修補及翻新，嚴重變形或霉爛則建議更換門扇，師傅會提供專業意見。",
    },
  ],
  relatedTitle: "除了門類維修，德昌五金亦提供水電、水喉、磁磚、油漆及商業裝修等一站式維修服務。",
  heroImageAlt: "德昌五金師傅安裝及維修門鎖木門",
  heroImageCaption: "門類師傅更換門鎖及調整門鉸",
};

export const metadata = buildServiceMetadata(data);

export default function DoorPage() {
  return <RepairServicePage data={data} />;
}
