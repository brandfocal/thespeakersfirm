"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "josina-activist",
    label: "Human Rights Defender",
    subtitle: "Renowned globally for her tireless advocacy for gender equality and combatting gender-based violence."
  },
  {
    id: "josina-founder",
    label: "Kuhluka Movement Founder",
    subtitle: "Founder of the Kuhluka Movement, supporting survivors of domestic violence and empowering women."
  },
  {
    id: "josina-legacy",
    label: "Iconic African Legacy",
    subtitle: "Daughter of Graça Machel and Samora Machel, continuing a historic family commitment to social justice."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "gbv-advocacy",
    number: "Theme 01",
    title: "Combating Gender-Based Violence (GBV).",
    copy: "Building supportive ecosystems for survivors, mobilizing community action, and advocating for policy reforms."
  },
  {
    id: "female-empowerment",
    number: "Theme 02",
    title: "Socioeconomic Empowerment of Women.",
    copy: "Unlocking structural opportunities, supporting female leadership, and fostering economic independence."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Josina Z. Machel is a highly recognized Mozambican and South African human rights defender, gender activist, and founder of the Kuhluka Movement. Continuing a proud family legacy of social justice and liberation, Josina focuses her work on championing women’s rights and ending gender-based violence (GBV) across Africa.",
  "As a survivor of domestic violence herself, Josina has channeled her personal experiences into global advocacy, speaking before international bodies and community forums to call for stronger laws and support structures for GBV survivors.",
  "Through the Kuhluka Movement, Josina works to establish safe havens, provide psychological support, and foster economic independence for women escaping domestic abuse, helping them build sustainable and self-reliant futures.",
  "Book Josina Z. Machel through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver deeply inspiring keynotes on gender equality, personal resilience, and community advocacy."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "kuhluka", name: "Kuhluka Movement" },
  { id: "un-women", name: "UN Women Partner" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "josina-art-1",
      headline: "Josina Machel on breaking the silence around domestic abuse",
      publication: "Gender Justice Review",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/gender/josina-z-machel/",
      image: "/speakers/Josina Machel/Josina-Machel-The-Speakers-Firm3.jpg"
    },
    {
      id: "josina-art-2",
      headline: "The Kuhluka Movement: Safe havens for survivors of GBV",
      publication: "African Women's Advocacy Quarterly",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/gender/josina-z-machel/",
      image: "/speakers/Josina Machel/Josina-Machel-The-Speakers-Firm5.jpg"
    },
    {
      id: "josina-art-3",
      headline: "Continuing a legacy of liberation: Samora and Graça's daughter speaks",
      publication: "Socio-Economic History Journal",
      date: "2023",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/gender/josina-z-machel/",
      image: "/speakers/Josina Machel/Josina-Machel-The-Speakers-Firm6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "josina-vid-1",
      label: "Josina Z. Machel on Gender Equality and Justice",
      youtubeId: "AnjFeLGPKhY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Josina Z. Machel"
      speakerTitle=""
      speakerDesignation="Human Rights Defender, Gender Activist & Founder of Kuhluka Movement"
      speakerRole="Global Women's Rights Advocate & Legacy Leader"
      speakerRef="TSF-JM-99"
      heroBackgroundImage="/speakers/Josina Machel/Josina-Machel-The-Speakers-Firm4.jpg"
      biographyImage="/speakers/Josina Machel/Josina-Machel-The-Speakers-Firm7.jpg"
      bioHook="“Ending violence against women is not a charity; it is a fundamental battle for human dignity, justice, and the future of our continent.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="josina-machel" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="josina-machel" 
        customIntroText="Gender justice presentations, GBV support programs, and community-led human rights dialogues led by Josina Z. Machel."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
