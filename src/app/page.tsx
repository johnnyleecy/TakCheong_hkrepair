// src/app/page.tsx
// 純前端維修網站：首頁直接導向「維修介紹」頁
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/repair");
}
