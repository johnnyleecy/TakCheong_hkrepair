// src/components/Repair/RepairBreadcrumb.tsx
// 麵包屑導覽（SEO 內部連結）
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RepairBreadcrumb({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="麵包屑"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
        <li>
          <Link href="/" className="transition-colors hover:text-gray-900">
            首頁
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-gray-900"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-900" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
