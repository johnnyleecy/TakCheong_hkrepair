// src/components/Repair/RepairImage.tsx
// 維修頁面插圖：統一輸出對 AI / SEO 友善的 <img>（完整 alt、寬高、lazy loading）
// 用法：<RepairImage slug="/repair/water-electric" alt="水電師傅正在檢查電箱" caption="專業水電師傅上門檢查" />
import { repairImage } from "@/lib/repair";

type RepairImageProps = {
  slug: string; // "/repair" 或 "/repair/xxx"
  alt: string; // 必須提供，AI/SEO 可讀
  caption?: string; // 可選 figcaption
  className?: string; // figure 外層樣式
  imgClassName?: string; // 可覆蓋 img 樣式（例如卡片內滿版圖）
  width?: number;
  height?: number;
};

export default function RepairImage({
  slug,
  alt,
  caption,
  className = "",
  imgClassName = "h-auto w-full rounded-xl border border-gray-200 bg-white object-cover shadow-sm",
  width = 800,
  height = 450,
}: RepairImageProps) {
  return (
    <figure className={className}>
      <img
        src={repairImage(slug)}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={imgClassName}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
