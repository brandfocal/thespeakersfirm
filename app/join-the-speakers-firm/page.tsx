import { JoinTheSpeakersFirm } from "@/components/generated/JoinTheSpeakersFirm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join The Speakers Firm | Prospective Speaker & Talent Submissions",
  description: "Explore opportunities to join The Speakers Firm roster of elite thought leaders, keynote speakers, and boardroom practitioners.",
};

export default function JoinPage() {
  return <JoinTheSpeakersFirm />;
}
