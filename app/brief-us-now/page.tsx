import { BriefUsNow } from "@/components/generated/BriefUsNow";
import { Suspense } from "react";

export default function BriefUsNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <BriefUsNow />
    </Suspense>
  );
}
