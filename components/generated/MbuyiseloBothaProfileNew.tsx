"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mbuyiselo-advocate",
    label: "Positive Masculinity Expert",
    subtitle: "Highly respected strategist challenging traditional archetypes and promoting positive male identity."
  },
  {
    id: "mbuyiselo-founder",
    label: "Sonke Gender Justice Founder",
    subtitle: "Co-founder of Sonke Gender Justice, driving systemic changes in gender equality across Africa."
  },
  {
    id: "mbuyiselo-broadcaster",
    label: "Broadcast Commentator",
    subtitle: "Renowned commentator on national radio and television advocating for social transformation and allyship."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "positive-masculinity",
    number: "Theme 01",
    title: "Positive Masculinity & Allyship.",
    copy: "Deconstructing negative cultural norms, fostering positive male role models, and building active allyship for women."
  },
  {
    id: "social-transformation",
    number: "Theme 02",
    title: "Systemic Gender Transformation.",
    copy: "Integrating gender justice frameworks into corporate governance and promoting equity at all levels of society."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Mbuyiselo Botha is one of South Africa's most prominent gender activists, commentators, and pioneers in positive masculinity. As a co-founder of Sonke Gender Justice, he has spent decades driving national and continental dialogues on gender equality, allyship, and the role of men in social transformation.",
  "Mbuyiselo is highly regarded for his ability to facilitate courageous, Nuanced conversations around male identity, gender relations, and domestic justice on national broadcasts and in corporate boardrooms.",
  "Through his advisory work and keynote addresses, Mbuyiselo counsels leadership teams on hardwiring gender equity into organizational culture, building inclusive workspaces, and fostering collaborative relationships between men and women allies.",
  "Book Mbuyiselo Botha through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver definitive workshops, keynotes, and panel dialogues on masculinity, gender justice, and inclusive leadership."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sonke", name: "Sonke Gender Justice" },
  { id: "sabc-radio", name: "SABC Radio Contributor" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mbuyiselo-art-1",
      headline: "Mbuyiselo Botha on the role of men in gender transformation",
      publication: "Gender Dialogues Quarterly",
      date: "2024",
      action: "Read Article",
      url: "https://www.sowetanlive.co.za/opinion/columnists/2019-06-12-absent-fathers-are-major-catalyst-for-social-problems-in-our-country/",
      image: "/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm.jpg"
    },
    {
      id: "mbuyiselo-art-2",
      headline: "Deconstructing stereotypes: Building positive male archetypes",
      publication: "Socio-Cultural Transformation",
      date: "2024",
      action: "Read Feature",
      url: "https://www.sowetanlive.co.za/opinion/columnists/2019-06-19-women-dying-with-protection-orders-in-their-handbags/",
      image: "/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm-second.jpg"
    },
    {
      id: "mbuyiselo-art-3",
      headline: "Fostering boardroom allyship and gender equity models",
      publication: "Corporate Culture Today",
      date: "2023",
      action: "Read Article",
      url: "https://www.sowetanlive.co.za/opinion/columnists/2019-06-26-father-and-child-relationship-is-rewarding-but-equally-challenging/",
      image: "/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm-third.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mbuyiselo-vid-1",
      label: "Mbuyiselo Botha on Masculinity and Social Justice",
      youtubeId: "X_uytsYrhrY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mbuyiselo Botha"
      speakerTitle=""
      speakerDesignation="Positive Masculinity Pioneer, Co-Founder of Sonke Gender Justice & Broadcaster"
      speakerRole="Gender Equity Consultant & Social Transformation Advocate"
      speakerRef="TSF-MB-77"
      heroBackgroundImage="/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm-6.jpg"
      biographyImage="/speakers/Mbuyiselo Botha/Mbuyiselo-Botha-The-Speakers-Firm-fifth.jpg"
      bioHook="“True gender equality cannot be achieved by women alone; it requires men to actively deconstruct limiting norms, stand as allies, and lead with empathy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mbuyiselo-botha" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mbuyiselo-botha" 
        customIntroText="Positive masculinity masterclasses, gender equity advisories, and community transformation dialogues led by Mbuyiselo Botha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
