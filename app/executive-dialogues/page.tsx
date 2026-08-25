import type { Metadata } from "next";
import { ExecutiveDialogues } from "@/components/generated/ExecutiveDialogues";

export const metadata: Metadata = {
  title: "Executive Dialogues | C-Suite Boardroom Insights",
  description: "Exclusive C-Suite boardroom dialogues and masterclasses. Dive deep into political science, macroeconomic intelligence, and corporate strategy with leading thinkers.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/executive-dialogues",
  }
};

export default function DialoguesPage() {
  return <ExecutiveDialogues />;
}
