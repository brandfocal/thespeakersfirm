"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bmf-founder",
    label: "BMF Founder & Past President",
    subtitle: "Founding member and president of the Black Management Forum (1976-1981)."
  },
  {
    id: "african-leadership",
    label: "African Leadership Group Specialist",
    subtitle: "Senior Specialist Consultant and Executive Management member."
  },
  {
    id: "board-director",
    label: "Non-Executive Director",
    subtitle: "Board member of WWF South Africa, Ceramic Industries, and Pivot."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "legacy-leadership",
    number: "Theme 01",
    title: "Black Professional Development & BMF History.",
    copy: "Understanding the legacy of black executive representation, corporate diversity progress, and professional networks in South Africa."
  },
  {
    id: "corporate-governance",
    number: "Theme 02",
    title: "Corporate Governance & Board Effectiveness.",
    copy: "Best practices for board accountability, strategic alignment, risk oversight, and ethical stewardship."
  },
  {
    id: "strategic-research",
    number: "Theme 03",
    title: "Branding, Marketing & Communications.",
    copy: "Leveraging market research, sociology, and communication strategies to build strong reputation capital for brands."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Eric Mafuna is a seasoned consultant, strategic advisor, and a prominent figure in South African business and leadership circles. He is widely recognized for his pioneering contributions as a leadership expert, reputation strategist, and corporate advisor.",
  "His professional career spans several decades and multiple sectors, including financial services, automotive, food and beverage, media, and scientific fields. He is a founding member and past president (1976–1981) of the Black Management Forum (BMF), playing a historic role in shaping black professional development in South Africa.",
  "Currently, Mafuna serves as a Senior Specialist Consultant and Executive Management Team member at the African Leadership Group, focusing on strategic research and organizational development. He also sits as a non-executive director on the boards of various institutions including Pivot, Ceramic Industries, and WWF, while continuing to provide strategic counsel through Wisdom Keys Group.",
  "Educated in both South Africa and the United States, he holds a BA and BA Honours in Sociology and Psychology, as well as a Marketing Management Diploma. His advisory work has impacted organizations across South Africa, the United Kingdom, Australia, and the African continent."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bmf", name: "BLACK MANAGEMENT FORUM" },
  { id: "alg", name: "AFRICAN LEADERSHIP GROUP" },
  { id: "wwf", name: "WWF SOUTH AFRICA" }
];

const ERIC_MEDIA = [
  {
    id: "eric-art-1",
    headline: "BMF Founder Eric Mafuna shares his encounters with Dr Richard Maponya",
    publication: "Power Business",
    date: "10 Jan 2020",
    action: "Listen to Podcast",
    url: "https://omny.fm/shows/power-business/bmf-ceo-eric-mafuna-shares-his-encounters-with-dr#description",
    image: "/speakers/Eric Mafuna/Eric-Mafuna-The-Speakers-Firm-2.jpg"
  },
  {
    id: "eric-art-2",
    headline: "Black Management Forum: Founding & Legacy Perspectives",
    publication: "YouTube Interview",
    date: "15 Mar 2021",
    action: "Watch Interview",
    url: "https://www.youtube.com/watch?v=ZCR8kIME8VQ",
    image: "/speakers/Eric Mafuna/Eric-Mafuna-The-Speakers-Firm-3.jpg"
  },
  {
    id: "eric-art-3",
    headline: "Transformation and Ethical Leadership in African Institutions",
    publication: "African Leader / BusinessMediaMags",
    date: "18 Jun 2022",
    action: "Read Article",
    url: "https://businessmediamags.co.za/government-politics/african-leader/transformation-and-ethical-leadership/",
    image: "/speakers/Eric Mafuna/Eric-Mafuna-The-Speakers-Firm-4.jpg"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "eric-vid-1",
      label: "Eric Mafuna in Action",
      youtubeId: "e0zLEi7i-sU"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Eric Mafuna"
      speakerTitle=""
      speakerDesignation="Founder of BMF, Leadership Expert & Board Advisor"
      speakerRole="Founding president of the BMF, specialist consultant for the African Leadership Group, and board director."
      speakerRef="TSF-EM-01"
      heroBackgroundImage="/speakers/Eric Mafuna/Eric-Mafuna-The-Speakers-Firm5.jpg"
      biographyImage="/speakers/Eric Mafuna/Eric-Mafuna-The-Speakers-Firm.jpg"
      bioHook="“Transforming African institutions through legacy advisory, corporate governance, and strategic mentorship.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="eric-mafuna" customMedia={ERIC_MEDIA} />
      }
    >
      <ProfileAdditionalSections speakerId="eric-mafuna" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
