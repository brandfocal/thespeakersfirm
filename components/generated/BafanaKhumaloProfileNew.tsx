"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bk-cofounder",
    label: "Co-Founder of Sonke Gender Justice",
    subtitle: "Serves as Director of Strategic Partnerships and oversees regional advocacy networks."
  },
  {
    id: "bk-commissioner",
    label: "Former CGE Commissioner",
    subtitle: "Served at the National Commission for Gender Equality from 2000-2006 and 2007-2011."
  },
  {
    id: "bk-awardee",
    label: "Vital Voices Honouree",
    subtitle: "Received the international Vital Voices Solidarity Award for tireless anti-GBV advocacy."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "policy-faith",
    number: "Theme 01",
    title: "Faith, Policy & Gender Justice.",
    copy: "Mobilizing faith organizations, traditional leadership houses, and government sectors to implement safety laws."
  },
  {
    id: "accountability-evidence",
    number: "Theme 02",
    title: "GBV Evidence & Accountability.",
    copy: "Utilizing data-driven interventions and advocating for legislative accountability to halt gender violence."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Bafana Khumalo is the Director of Strategic Partnerships at Sonke Gender Justice and one of the organisation’s co-founders. Bafana has a long and accomplished track record in the NGO sector. He was senior gender technical advisor for EngenderHealth South Africa, working with SANAC and the National Department of Health to integrate gender into public health strategies.",
  "From 2000 to 2011, Bafana served as a Commissioner at the National Commission for Gender Equality (CGE). At the CGE, he was instrumental in assisting National and Provincial Departments of Government to plan and coordinate activities related to men, gender, and HIV/AIDS, including national dialogues on gender-based violence.",
  "Bafana is highly recognized for his work with traditional and religious leaders across South Africa’s provinces, building the National Gender Machinery Working Group on Men and Gender Equality. For his tireless contributions to human rights and gender justice, Bafana was honored with the prestigious Vital Voices Solidarity Award.",
  "Book Bafana Khumalo through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive policy advocacy insights, gender equity frameworks, and community mobilization keynotes to your organization or conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sonke", name: "SONKE GENDER JUSTICE" },
  { id: "cge", name: "COMMISSION FOR GENDER EQUALITY" },
  { id: "vitalvoices", name: "VITAL VOICES SOLIDARITY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "khumalo-art-1",
      headline: "Sonke Co-executive director Bafana Khumalo honoured for outstanding advocacy against GBV",
      publication: "Sonke Gender Justice News",
      date: "2024",
      action: "Read Announcement",
      url: "https://genderjustice.org.za/news-item/sonke-co-executive-director-honoured-for-outstanding-advocacy-against-gbv/",
      image: "/speakers/Bafana Khumalo/Bafana-Khumalo.jpg"
    },
    {
      id: "khumalo-art-2",
      headline: "OPINION: Lack of GBV interventions are costing women’s lives",
      publication: "News24",
      date: "2021",
      action: "Read Column",
      url: "https://www.news24.com/opinions/columnists/guestcolumn/opinion-bafana-khumalo-rumbie-elizabeth-chidoori-lack-of-gbv-interventions-are-costing-womens-lives-20210829",
      image: "/speakers/Bafana Khumalo/Bafana-Khumalo-the-speakers-firm-6.jpg"
    },
    {
      id: "khumalo-art-3",
      headline: "Op-Ed: Accountability is key in bringing an end to violence against women",
      publication: "Daily Maverick",
      date: "2017",
      action: "Read Op-Ed",
      url: "https://www.dailymaverick.co.za/article/2017-10-02-op-ed-accountability-is-key-in-bringing-an-end-to-violence-against-women/",
      image: "/speakers/Bafana Khumalo/Bafana-Khumalo-the-speakers-firm-7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "khumalo-vid-1",
      label: "Bafana Khumalo on Sonke's Vision & Faith Sector Mobilization",
      youtubeId: "kgz2QWnmMYs"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Bafana Khumalo"
      speakerTitle=""
      speakerDesignation="Co-Founder of Sonke Gender Justice"
      speakerRole="Director of Strategic Partnerships & Policy Advocate"
      speakerRef="TSF-BK-43"
      heroBackgroundImage="/speakers/Bafana Khumalo/Bafana-Khumalo-the-speakers-firm-fourth.jpg"
      biographyImage="/speakers/Bafana Khumalo/Bafana-Khumalo-the-speakers-firm-11.jpg"
      bioHook="“Employing the multiple strategies of evidence, action, and accountability is key in bringing an end to violence against women and children.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="bafana-khumalo" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="bafana-khumalo" 
        customIntroText="Policy advocacy briefings, faith sector gender training, and community mobilization keynotes led by Bafana Khumalo."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
