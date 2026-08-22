"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "dk-bishop",
    label: "Spiritual Leader",
    subtitle: "Highly respected Bishop guiding communities on faith, ethics, and cultural stewardship."
  },
  {
    id: "dk-commentator",
    label: "Cultural Commentator",
    subtitle: "Frequent media panelist lecturing on indigenous wisdom and moral values."
  },
  {
    id: "dk-wisdom",
    label: "Indigenous Wisdom Authority",
    subtitle: "compelling speaker dedicated to building ethical community leadership."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "african-spirituality-values",
    number: "Theme 01",
    title: "African Spirituality & Family.",
    copy: "Promoting moral regeneration, community values, and family structures through the lens of indigenous wisdom."
  },
  {
    id: "ethical-community-leadership",
    number: "Theme 02",
    title: "Moral Leadership in Society.",
    copy: "Building unified community programs and ethical systems grounded in traditional African values and identity."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Bishop Dick Khoza is a prominent South African spiritual leader, cultural commentator, and compelling speaker. He has dedicated his life to addressing core issues of African spirituality, indigenous wisdom, identity, values, and community leadership. As a respected Bishop, he acts as a moral compass, advising both community organizations and media platforms on ethical development.",
  "Leveraging deep roots in indigenous systems, Bishop Khoza advocates for moral regeneration and family restoration. He is frequently invited to speak at cultural forums and leadership summits, guiding audiences on how to harmonize traditional African values with contemporary social and corporate responsibilities.",
  "His work focuses heavily on building unified, resilient community structures. Through his keynotes and dialogues, he promotes a return to core values such as integrity, respect, and shared responsibility, inspiring a new generation of ethical leaders who honor their heritage while driving societal progress.",
  "Book Bishop Dick Khoza through The Speakers Firm, A Leading African Speakers Bureau, to deliver deeply moving keynotes on African identity, moral leadership, and community values at your next conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "community", name: "ETHICAL LEADERSHIP COLLABORATIVE" },
  { id: "broadcasting", name: "SABC RELIGIOUS & CULTURAL DIALOGUES" },
  { id: "council", name: "NATIONAL VALUES COUNCIL" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "dk-art-1",
      headline: "Bishop Dick Khoza on Spirituality and Community Values",
      publication: "Moral Leadership Channel / YouTube",
      date: "2023",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=b3YTpwYNPEw",
      image: "/speakers/Bishop Dick Khoza/Bishop-Dick-Khoza-The-Speakers-Firm.jpg"
    },
    {
      id: "dk-art-2",
      headline: "Indigenous Wisdom and Modern African Identity",
      publication: "Heritage Dialogues / YouTube",
      date: "2022",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=mQse5KwlZco",
      image: "/speakers/Bishop Dick Khoza/Bishop-Dick-Khoza-The-Speakers-Firm2.jpg"
    },
    {
      id: "dk-art-3",
      headline: "Bishop Dick Khoza panel discussion on moral leadership",
      publication: "Leadership Forum / YouTube",
      date: "2024",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=4coGY9bpqKw",
      image: "/speakers/Bishop Dick Khoza/Bishop-Dick-Khoza-The-Speakers-Firm4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "dk-vid-1",
      label: "Bishop Dick Khoza Address on Spiritual Stewardship",
      youtubeId: "8hQ9lcv-2es"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Bishop Dick Khoza"
      speakerTitle=""
      speakerDesignation="Spiritual Leader, Cultural Commentator & Speaker"
      speakerRole="African Spirituality & Ethical Community Leadership Keynote"
      speakerRef="TSF-DK-53"
      heroBackgroundImage="/speakers/Bishop Dick Khoza/Bishop-Dick-Khoza-The-Speakers-Firm3.jpg"
      biographyImage="/speakers/Bishop Dick Khoza/Bishop-Dick-Khoza-The-Speakers-Firm5.jpg"
      bioHook="“Guiding communities towards moral regeneration and spiritual stewardship by reviving the core values of African identity and indigenous wisdom.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dick-khoza" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dick-khoza" 
        customIntroText="Moral leadership colloquiums, spiritual stewardship seminars, and indigenous values keynotes led by Bishop Dick Khoza."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
