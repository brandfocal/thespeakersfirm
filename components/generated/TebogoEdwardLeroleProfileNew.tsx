"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tl-actnow",
    label: "Founder of Act Now Foundation",
    subtitle: "Leading community-focused campaigns against GBVF and driving social restoration."
  },
  {
    id: "tl-gbvf",
    label: "GBVF Social Activist",
    subtitle: "A leading male voice campaigning for gender justice, active allyship, and structural reform."
  },
  {
    id: "tl-creative",
    label: "Artist & Philanthropist",
    subtitle: "Leverages benefit concerts and creative arts to raise funds and restore dignity to vulnerable communities."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "gender-restoration",
    number: "Theme 01",
    title: "Gender Restoration & GBVF Prevention.",
    copy: "Activating positive masculinity and male accountability to champion gender safety and dismantle GBVF."
  },
  {
    id: "creative-advocacy",
    number: "Theme 02",
    title: "Creative Advocacy & Philanthropy.",
    copy: "Harnessing media, music, and benefit events to drive corporate social responsibility and community impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Tebogo Edward Lerole is a distinguished entrepreneur, musician, and social impact advocate. Widely known for bridging creativity and social change, he has built a powerful reputation as one of South Africa's most prominent voices for positive masculinity, community restoration, and active citizenship.",
  "As the founder of the Act Now Foundation, Tebogo leads critical campaigns addressing Gender-Based Violence and Femicide (GBVF). Under his leadership, the foundation has mobilized communities to demand justice for survivors, and campaigned extensively to involve men in conquering GBVF, asserting that men are the missing element in the fight.",
  "A passionate believer in restoring dignity to the vulnerable, Tebogo frequently leverages benefit concerts and cultural events to provide direct aid and raise awareness for community causes. His efforts bring together leading artists, corporate sponsors, and social enterprises to build sustainable support systems for communities in need.",
  "Book Tebogo Edward Lerole through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive social transformation keynotes, community development insights, and active citizenship workshops to your next event or summit."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "actnow", name: "ACT NOW FOUNDATION" },
  { id: "timeslive", name: "TIMESLIVE" },
  { id: "iol", name: "IOL NEWS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "lerole-art-1",
      headline: "Tebogo Lerole’s Act Now Foundation joins forces with community to demand #JusticeForCwecwe",
      publication: "TimesLive",
      date: "2025",
      action: "Read Report",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2025-03-31-tebogo-leroles-act-now-foundation-joins-forces-with-community-to-demand-justiceforcwecwe/",
      image: "/speakers/Tebogo Edward Lerole/Tebogo-Edward-Lerole-The-Speakers-Firm-4.jpg"
    },
    {
      id: "lerole-art-2",
      headline: "Tebogo Lerole’s fight against GBVF is far from over",
      publication: "TimesLive",
      date: "2024",
      action: "Read Column",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2024-12-10-tebogo-leroles-fight-against-gbvf-is-far-from-over/",
      image: "/speakers/Tebogo Edward Lerole/Tebogo-Edward-Lerole-The-Speakers-Firm-2.jpg"
    },
    {
      id: "lerole-art-3",
      headline: "Tebogo Lerole wants to restore evicted Soweto Gogo’s dignity with benefit concert",
      publication: "IOL News",
      date: "2022",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/celebrity-news/local/2022-10-19-tebogo-lerole-wants-to-restore-evicted-soweto-gogos-dignity-with-benefit-concert/",
      image: "/speakers/Tebogo Edward Lerole/Tebogo-Edward-Lerole-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "lerole-vid-1",
      label: "Tebogo Edward Lerole on GBVF Activism & Social Impact",
      youtubeId: "ipzlNOqT0N0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tebogo Edward Lerole"
      speakerTitle=""
      speakerDesignation="Entrepreneur, Artist & Social Impact Advocate"
      speakerRole="Founder of the Act Now Foundation"
      speakerRef="TSF-TL-35"
      heroBackgroundImage="/speakers/Tebogo Edward Lerole/Tebogo-Edward-Lerole-The-Speakers-Firm-3.jpg"
      biographyImage="/speakers/Tebogo Edward Lerole/Tebogo-Edward-Lerole-The-Speakers-Firm.jpg"
      bioHook="“Men are largely the missing element and force needed to conquer Gender-Based Violence and Femicide (GBVF) and restore community dignity.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tebogo-edward-lerole" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tebogo-edward-lerole" 
        customIntroText="GBVF prevention keynotes, social impact panels, and active citizenship workshops led by Tebogo Edward Lerole."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
