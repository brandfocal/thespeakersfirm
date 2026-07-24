import { BriefUs } from "@/components/generated/BriefUs";
import { Suspense } from "react";

export default function BriefUsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <BriefUs />
    </Suspense>
  );
}
