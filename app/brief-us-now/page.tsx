import { BookASpeaker } from "@/components/generated/BookASpeaker";
import { Suspense } from "react";

export default function BriefUsNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <BookASpeaker />
    </Suspense>
  );
}
