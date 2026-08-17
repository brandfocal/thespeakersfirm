"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "as-psychologist",
    label: "Registered Clinical Psychologist",
    subtitle: "Registered with the Health Professions Council of South Africa (HPCSA)."
  },
  {
    id: "as-scholar",
    label: "Co-Editor, SAGE special edition",
    subtitle: "Leading academic work focused on decolonisation and psychology in South Africa."
  },
  {
    id: "as-wits",
    label: "Fatherhood Connections Alumnus",
    subtitle: "Member of the initiative funded by the Centre for Human Excellence at Wits University."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "ulwaluko-manhood",
    number: "Theme 01",
    title: "Ulwaluko & Constructing Manhood.",
    copy: "Examining traditional male initiation rites and their role in modern masculine identities."
  },
  {
    id: "decolonial-wellness",
    number: "Theme 02",
    title: "Decolonial Psychology & Wellness.",
    copy: "Integrating indigenous wisdom with clinical psychology to create healing frameworks for men."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Anele Siswana is a respected clinical psychologist, researcher, and thought leader who brings a deeply human and culturally grounded lens to conversations about manhood, identity, and healing. Proudly Xhosa, he integrates indigenous wisdom and psychological science to explore how men can lead with emotional depth, cultural consciousness, and integrity.",
  "A registered Clinical Psychologist with the Health Professions Council of South Africa (HPCSA), Dr Siswana’s work focuses on Ulwaluko kwa Xhosa, the traditional Xhosa male initiation rite, examining how it shapes the construction of manhood and masculinity in modern society. His research and public speaking explore the intersection of masculinity, sexuality, and culture, offering transformative insight into how African traditions can coexist with evolving definitions of identity and leadership.",
  "Currently a member of Fatherhood Connections, an initiative funded by the Centre for Human Excellence at Wits University, Dr Siswana’s work is at the frontier of male psychology, fatherhood, and emotional intelligence. He is also Co-Editor of an upcoming special edition of the SAGE South African Journal of Psychology, focused on Decolonisation and Psychology in South Africa, further demonstrating his academic and intellectual leadership.",
  "Book Dr Anele Siswana through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring decolonial psychology masterclasses, cultural intelligence briefings, and positive masculinity keynotes to your next event or boardroom."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "hpcsa", name: "HPCSA" },
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "sage", name: "SAGE PUBLICATIONS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "siswana-art-1",
      headline: "Mental health at the top of Anele’s MIND",
      publication: "Rhodes University / Rhodes Alumni",
      date: "2024",
      action: "Read Article",
      url: "https://www.ru.ac.za/latestnews/mentalhealthatthetopofanelesmind.html",
      image: "/speakers/Dr Anele Siswana/Dr-Anele-Siswana-The-Speakers-Firm-3.jpg"
    },
    {
      id: "siswana-art-2",
      headline: "Three outstanding Distinguished Alumni honoured this year",
      publication: "Rhodes University",
      date: "2023",
      action: "Read Profile",
      url: "https://www.ru.ac.za/latestnews/threeoutstandingdistinguishedalumnihonouredthisyear.html",
      image: "/speakers/Dr Anele Siswana/Dr-Anele-Siswana-The-Speakers-Firm-4.jpg"
    },
    {
      id: "siswana-art-3",
      headline: "South Africa must create more awareness around mental issues – expert",
      publication: "SABC News / YouTube",
      date: "2022",
      action: "Watch Discussion",
      url: "https://www.youtube.com/watch?v=Zq21hSTFVto",
      image: "/speakers/Dr Anele Siswana/Dr-Anele-Siswana-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "siswana-vid-1",
      label: "Dr Anele Siswana on Men's Mental Health & Cultural Identity",
      youtubeId: "Zq21hSTFVto"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Anele Siswana"
      speakerTitle=""
      speakerDesignation="Clinical Psychologist & Cultural Scholar"
      speakerRole="Co-Editor of SAGE Special Edition & Member of Fatherhood Connections"
      speakerRef="TSF-AS-44"
      heroBackgroundImage="/speakers/Dr Anele Siswana/Dr-Anele-Siswana-The-Speakers-Firm-hero.jpg"
      biographyImage="/speakers/Dr Anele Siswana/Dr-Anele-Siswana-bio.jpg"
      bioHook="“Ulwaluko and modern psychology coexist to redefine African masculinity, identity, and decolonial leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-anele-siswana" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-anele-siswana" 
        customIntroText="Mental health panels, cultural intelligence seminars, and decolonial psychology keynotes led by Dr Anele Siswana."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
