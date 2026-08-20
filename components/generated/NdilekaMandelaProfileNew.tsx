"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ndileka-author",
    label: "Bestselling Author",
    subtitle: "Author of 'I Am Ndileka', chronicling her life, the Mandela legacy, and her personal journey of healing."
  },
  {
    id: "ndileka-activist",
    label: "Social Justice Advocate",
    subtitle: "Founder of The Thembelihle Development Foundation, promoting rural development and education."
  },
  {
    id: "ndileka-nurse",
    label: "Healthcare Professional",
    subtitle: "Former ICU nurse and healthcare advocate with extensive experience in community health and nursing."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "legacy-governance",
    number: "Theme 01",
    title: "Preserving Legacy & Social Justice.",
    copy: "Translating historical legacies into contemporary action to promote human rights, gender equality, and ethical leadership."
  },
  {
    id: "rural-development",
    number: "Theme 02",
    title: "Rural Development & Education.",
    copy: "Empowering rural communities through sustainable development programs, educational resources, and healthcare advocacy."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ndileka Mandela is a prominent social activist, healthcare professional, writer, and the eldest grandchild of Nelson Mandela. With a rich background in nursing and community development, she dedicates her life to continuing the Mandela family's legacy of struggle, integrity, and social justice.",
  "As the founder and CEO of The Thembelihle Development Foundation, Ndileka spearheads projects aimed at improving education, healthcare facilities, and agricultural resources in rural South African communities.",
  "Her memoir, 'I Am Ndileka', offers a powerful, deeply personal account of her life, detailing the trials and triumphs of growing up Mandela, and highlighting her advocacy for women's empowerment and rural development.",
  "Book Ndileka Mandela through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver deeply moving keynotes on legacy preservation, social justice, and personal resilience."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "thembelihle", name: "Thembelihle Foundation" },
  { id: "mandela-legacy", name: "Mandela Legacy Voice" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ndileka-art-1",
      headline: "Ndileka Mandela on preserving her grandfather's social justice legacy",
      publication: "Legacy & Human Rights Review",
      date: "2024",
      action: "Read Feature",
      url: "https://thespeakersfirm.co.za/ndileka-mandela/",
      image: "/speakers/Ndileka Mandela/Ndileka-Mandela-The-Speakers-Firm-6.jpg"
    },
    {
      id: "ndileka-art-2",
      headline: "Developing rural school infrastructures in the Eastern Cape",
      publication: "Rural Development Journal",
      date: "2024",
      action: "Read Article",
      url: "https://thespeakersfirm.co.za/ndileka-mandela/",
      image: "/speakers/Ndileka Mandela/Ndileka-Mandela-The-Speakers-Firm-7.jpg"
    },
    {
      id: "ndileka-art-3",
      headline: "I Am Ndileka: A journey of self-actualisation and voice",
      publication: "African Literary Review",
      date: "2023",
      action: "Read Review",
      url: "https://thespeakersfirm.co.za/ndileka-mandela/",
      image: "/speakers/Ndileka Mandela/Ndileka-Mandela-The-Speakers-Firm.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ndileka-vid-1",
      label: "Ndileka Mandela on Voice, Power, and Legacy",
      youtubeId: "36BBGOH2iGs"
    }
  ];

  const customBooks = [
    {
      id: "i-am-ndileka",
      title: "I Am Ndileka",
      description: "An honest and deeply personal memoir detailing Ndileka Mandela's life, her relationship with her grandfather Nelson Mandela, and her path to finding her own voice.",
      coverImage: "/speakers/Ndileka Mandela/I-am-Ndileka-Cover.jpg",
      url: "https://www.exclusivebooks.co.za/product/9781431429066"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ndileka Mandela"
      speakerTitle=""
      speakerDesignation="Social Activist, Author & Founder of Thembelihle Development Foundation"
      speakerRole="Legacy Leader & Social Justice Advocate"
      speakerRef="TSF-NM-88"
      heroBackgroundImage="/speakers/Ndileka Mandela/Ndileka-Mandela-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Ndileka Mandela/Ndileka-Mandela-The-Speakers-Firm-8.jpg"
      bioHook="“Legacy is not passive memory; it is active stewardship. We honor our past only by stepping forward to champion the rights of the marginalized today.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={customBooks}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ndileka-mandela" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ndileka-mandela" 
        customIntroText="Legacy preservation dialogues, rural development masterclasses, and social justice keynotes led by Ndileka Mandela."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
