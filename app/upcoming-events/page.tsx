import type { Metadata } from "next";
import { TSFUpcomingEvents } from "@/components/generated/TSFUpcomingEvents";

export const metadata: Metadata = {
  title: "Upcoming Events & Summits | The Speakers Firm",
  description: "Find details on upcoming keynote events, conferences, summits, and executive workshops featuring speakers from The Speakers Firm.",
  alternates: {
    canonical: "https://thespeakersfirm.co.za/upcoming-events",
  }
};

export default function UpcomingEventsPage() {
  return <TSFUpcomingEvents />;
}
