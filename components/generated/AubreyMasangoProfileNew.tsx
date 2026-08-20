"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "aubrey-radio",
    label: "Acclaimed Radio Host",
    subtitle: "Host of premier late-night talk shows on Primedia's 702, driving intellectual national discourse."
  },
  {
    id: "aubrey-moderator",
    label: "Expert Moderator",
    subtitle: "Facilitates high-level dialogues and panels on governance, socioeconomic transformation, and leadership."
  },
  {
    id: "aubrey-business",
    label: "Strategic Advisor",
    subtitle: "Applies deep systemic understanding to counsel executive boards and lead organizational alignment."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "intellectual-dialogue",
    number: "Theme 01",
    title: "Intellectual Dialogue & National Discourse.",
    copy: "Fostering constructiveness in public debates and building spaces for critical thought, active citizenship, and transformation."
  },
  {
    id: "courageous-leadership",
    number: "Theme 02",
    title: "Courageous Leadership & Boardroom Ethics.",
    copy: "Shifting corporate cultures toward transparency, ethical governance, accountability, and long-term societal value."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Aubrey Masango is one of South Africa's most respected radio personalities, broadcasters, facilitators, and public speakers. Famously known for hosting late-night talk shows on 702, Aubrey has built a reputation for navigating complex, high-stakes national and international topics with deep intellectual curiosity, composure, and nuance.",
  "Leveraging over a decade of media and corporate experience, Aubrey is a highly sought-after moderator and master of ceremonies. He has anchored critical panel discussions involving national policymakers, corporate executives, and civic leaders, steering complex debates toward actionable conclusions.",
  "As an advisor and speaker, Aubrey focuses heavily on the concepts of self-mastery, active citizenship, and ethical corporate leadership. He challenges leadership teams to build open, collaborative cultures that respect diverse perspectives while maintaining absolute focus on strategic execution.",
  "Book Aubrey Masango through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to elevate your next conference, panel discussion, or corporate retreat with definitive facilitation and executive leadership keynotes."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "702", name: "702 Talk Radio" },
  { id: "primedia", name: "Primedia Broadcasting" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "aubrey-art-1",
      headline: "Intellectual dialogue as a tool for national building: Meet Aubrey Masango",
      publication: "Strategic Dialogue Quarterly",
      date: "2024",
      action: "Read Interview",
      url: "https://omny.fm/shows/evening-show/talkers-open-line-taxi-marshals-stop-commuters-from-using-buses#description",
      image: "/speakers/Aubrey Masango/Aubrey-Masango-The-Speakers-Firm.jpg"
    },
    {
      id: "aubrey-art-2",
      headline: "Fostering active citizenship on late-night radio",
      publication: "Media & Society Journal",
      date: "2024",
      action: "Read Feature",
      url: "https://omny.fm/shows/evening-show/change-your-mindset-dont-wait-until-the-voice-is-gone-the-conversations-you-ll-wish-you-had-while-there-s-still-time-to-have-them-because-your-parents-were-people-before-they-were-parents#description",
      image: "/speakers/Aubrey Masango/Aubrey-Masango-The-Speakers-Firm2.jpg"
    },
    {
      id: "aubrey-art-3",
      headline: "Shifting the focus of South Africa's public discourse",
      publication: "Broadcasters Digest",
      date: "2023",
      action: "Read Article",
      url: "https://tshwanetalks.com/702s-iconic-aubrey-masango-is-original-in-his-presentation/",
      image: "/speakers/Aubrey Masango/Aubrey-Masango-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "aubrey-vid-1",
      label: "Aubrey Masango on Dialogue and Leadership",
      youtubeId: "XEyKwRsBFvU"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Aubrey Masango"
      speakerTitle=""
      speakerDesignation="Radio Personality, Broadcaster, Moderator & Master of Ceremonies"
      speakerRole="Talk Show Host & Dialogue Moderator"
      speakerRef="TSF-AM-88"
      heroBackgroundImage="/speakers/Aubrey Masango/Aubrey-Masango-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Aubrey Masango/Aubrey-Masango-The-Speakers-Firm.jpg"
      bioHook="“Genuine national and boardroom transformation starts when we cultivate the courage to listen, challenge each other constructively, and lead with empathy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="aubrey-masango" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="aubrey-masango" 
        customIntroText="Thought-provoking keynotes, political and social panels, and expert event moderation led by Aubrey Masango."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
