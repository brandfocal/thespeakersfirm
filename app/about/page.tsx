import type { Metadata } from "next";
import { TSFAboutUsRedesign } from "@/components/generated/TSFAboutUsRedesign";

export const metadata: Metadata = {
  title: "About Us | The Speakers Firm Bureau",
  description: "Forget middlemen. The Speakers Firm is your elite partner in boardrooms and transformation. We curate strategic weapons—speakers who elevate the stakes and leave rooms changed.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/about",
  }
};

export default function AboutPage() {
  return <TSFAboutUsRedesign />;
}
