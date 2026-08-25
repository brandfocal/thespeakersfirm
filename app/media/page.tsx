import type { Metadata } from "next";
import { TSFMediaPage } from "@/components/generated/TSFMediaPage";

export const metadata: Metadata = {
  title: "Media & Press | The Speakers Firm Newsroom",
  description: "Stay updated with our latest media statements, press releases, thought leadership publications, and industry insights from The Speakers Firm.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/media",
  }
};

export default function MediaPage() {
  return <TSFMediaPage />;
}
