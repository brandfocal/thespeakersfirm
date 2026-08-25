import type { Metadata } from "next";
import { TSFGallery } from "@/components/generated/TSFGallery";

export const metadata: Metadata = {
  title: "Media Gallery & Reels | The Speakers Firm",
  description: "View our speakers in action. Browse videos, reels, event photos, and summit highlights featuring our elite roster of boardroom practitioners.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/gallery",
  }
};

export default function GalleryPage() {
  return <TSFGallery />;
}
