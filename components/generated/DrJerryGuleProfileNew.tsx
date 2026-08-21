"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "jg-ceo",
    label: "CEO of IPM",
    subtitle: "Chief Executive Officer at the Institute of People Management, driving HR excellence."
  },
  {
    id: "jg-harvard",
    label: "Harvard Alumnus",
    subtitle: "Completed his post-graduate studies and Doctor of Education at Harvard University."
  },
  {
    id: "jg-lovetrust",
    label: "Chairman of The Love Trust",
    subtitle: "Leads the governance of a top education-focused non-profit organization in South Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "corporate-transformation",
    number: "Theme 01",
    title: "Transformation & Ethical Leadership.",
    copy: "Building corporate values, ensuring compliance, and establishing people-first workspace cultures."
  },
  {
    id: "masculinity-empowerment",
    number: "Theme 02",
    title: "Men's Empowerment & Coach.",
    copy: "Facilitating positive masculinity, family accountability, and purposeful executive mentorship."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Jerry Gule is a Harvard-educated leadership expert, CEO of the Institute of People Management (IPM), and one of Africa’s most respected authorities on leadership, transformation, and men’s empowerment. A seasoned executive coach, mentor, and thought leader, Dr Gule challenges men to lead with purpose, authenticity, and emotional intelligence.",
  "Dr Gule draws on decades of senior leadership experience, from pioneering transformation at TOTAL South Africa to steering national impact as CEO of IPM. His work bridges corporate excellence with human-centred leadership, offering insight that speaks to both heart and strategy.",
  "Recognised globally as a Harvard-educated leadership and men’s development coach in South Africa, Dr Gule delivers deeply engaging sessions that explore leadership, fatherhood, ethics, and purpose, blending international best practice with African wisdom. As the Chairman of The Love Trust, he also campaigns for the sustainable growth and decolonial transformation of South African NPOs.",
  "Book Dr Jerry Gule through The Speakers Firm, A Leading African Speakers Bureau, to bring definitive transformation workshops, ethical leadership masterclasses, and executive coaching frameworks to your organization."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ipm", name: "INSTITUTE OF PEOPLE MANAGEMENT" },
  { id: "totalenergies", name: "TOTALENERGIES" },
  { id: "lovetrust", name: "THE LOVE TRUST" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "gule-art-1",
      headline: "Leadership Lessons with Dr Jerry Gule",
      publication: "SABC / YouTube / IPM",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=2yPhBAePjP0",
      image: "/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm-2.jpg"
    },
    {
      id: "gule-art-2",
      headline: "A vision of the future of NPOs in South Africa through transformation, inclusion and sustainability",
      publication: "The Love Trust / News",
      date: "2023",
      action: "Read Article",
      url: "https://lovetrust.co.za/a-vision-of-the-future-of-npos-in-south-africa-through-transformation-inclusion-and-sustainability/",
      image: "/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm-5.jpg"
    },
    {
      id: "gule-art-3",
      headline: "Meet Inspirathon speaker – Dr Jerry Gule",
      publication: "Inspirathon / HR News",
      date: "2022",
      action: "Read Profile",
      url: "https://inspirathon.co.za/speakers/jerry-gule/",
      image: "/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "gule-vid-1",
      label: "Dr Jerry Gule on Corporate Governance & Transformation",
      youtubeId: "2yPhBAePjP0"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Jerry Gule"
      speakerTitle=""
      speakerDesignation="Leadership & Transformation Expert"
      speakerRole="CEO of the Institute of People Management (IPM)"
      speakerRef="TSF-JG-45"
      heroBackgroundImage="/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm-hero.jpg"
      biographyImage="/speakers/Jerry Gule/Dr-Jerry-Gule-The-Speakers-Firm-bio.jpg"
      bioHook="“Redefining modern masculinity through courage, accountability, and service, bridging corporate excellence with human-centred leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-jerry-gule" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-jerry-gule" 
        customIntroText="Corporate leadership workshops, ethics seminars, and positive masculinity dialogues led by Dr Jerry Gule."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
