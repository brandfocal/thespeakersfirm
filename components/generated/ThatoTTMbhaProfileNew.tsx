"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "25-year-track-record",
    label: "25-Year Track Record",
    subtitle: "Award-winning social entrepreneur, public figure, keynote speaker, and television host."
  },
  {
    id: "mp-re-cm-sa",
    label: "MP(RE) & CM(SA)",
    subtitle: "Master Practitioner in Real Estate and Chartered Marketer South Africa."
  },
  {
    id: "triple-qualifications",
    label: "Triple Academic Credentials",
    subtitle: "Postgraduate Diploma in Project Management, Diploma in Marketing Management & Diploma in Clothing Management."
  },
  {
    id: "executive-producer",
    label: "Executive Producer & Host",
    subtitle: "Founder and broadcaster for TTMBHA TV, Mzansi Cribs Makeover, and Amatyma Broadcast Network."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "turnkey-real-estate",
    number: "Theme 01",
    title: "Turnkey Real Estate, Property Sales & Renovation.",
    copy: "Unlocking pathways to residential and commercial property ownership, renovation, and turnkey development through Mzansi Cribs, Mzansi Cribs Makeover, and Mzansi Business Make-Over."
  },
  {
    id: "financial-services",
    number: "Theme 02",
    title: "Financial Services & Inclusive Economic Empowerment.",
    copy: "Providing tailored long-term and short-term financial guidance to make financial empowerment accessible for individuals, families, and businesses across Africa."
  },
  {
    id: "amatyma-brotherhood",
    number: "Theme 03",
    title: "The Amatyma Brotherhood & Community Upliftment.",
    copy: "Driving boy-child and girl-child wellness via the Amatyma Suit Drive, Amatyma Pad Drive, Father's Day Self-Care Summit, International Men's Day, and healing podcasts."
  },
  {
    id: "africa-2-the-world",
    number: "Theme 04",
    title: "Africa 2 The World (A2TW) & Retail Brand Building.",
    copy: "Scaling a proudly African lifestyle and essentials enterprise woven into everyday African households, embodying quality, comfort, and pride."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thato “TT” Mbha is a highly respected social entrepreneur, Master Practitioner in Real Estate MP(RE), and Chartered Marketer South Africa CM(SA) with an illustrious 25-year award-winning career track record. A multifaceted public figure, keynote speaker, television host, executive producer, and family man, TT has successfully graduated with a Diploma in Clothing Management, a Diploma in Marketing Management, and a Postgraduate Diploma in Project Management.",
  "As the visionary behind Mzansi Cribs, TT oversees a turnkey real estate sales agency servicing the everyday residential and commercial buyer, seller, and developer. His enterprise footprint extends to full-scale construction and renovation through Mzansi Cribs Makeover (residential renovations) and Mzansi Business Make-Over (commercial client developments), as well as his subscription-based digital television channel TTMBHA TV (www.ttmbhatv.co.za).",
  "Through TTMBHA Financial Services, TT leads a proudly African financial services provider with a distinct commitment to delivering exceptional guidance for short-term and long-term client needs. Rooted in the mission to make financial empowerment accessible to all, the firm equips individuals, families, and businesses with the knowledge, tools, and support needed to make informed decisions and secure their financial futures.",
  "Deeply dedicated to driving community development across South Africa, TT established TTMBHA Community Drive NPC, focusing on education and social development. The flagship Amatyma Brotherhood Circle champions the wellness and upliftment of men and boys through signature community drives—including the Amatyma Suit Drive (boy child) and Amatyma Pad Drive (girl child)—and annual platforms such as the Amatyma Father’s Day Self-Care Summit, Amatyma Heritage Summit, and Amatyma International Men’s Day Celebration.",
  "Anchored in the African philosophy 'Umuntu Ngumuntu Ngabantu' ('I am because we are'), TT also powers Africa 2 The World (A2TW), bringing everyday affordable essentials, clothing, and gear to households across Africa. Book Thato 'TT' Mbha through The Speakers Firm for high-impact masterclasses, keynote addresses, and corporate moderation on entrepreneurship, real estate, financial literacy, and community building."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mzansicribs", name: "MZANSI CRIBS" },
  { id: "mzansibusiness", name: "MZANSI BUSINESS MAKEOVER" },
  { id: "ttmbhafinancial", name: "TTMBHA FINANCIAL SERVICES" },
  { id: "amatyma", name: "AMATYMA BROTHERHOOD" },
  { id: "a2tw", name: "AFRICA 2 THE WORLD" },
  { id: "ttmbhatv", name: "TTMBHA TV" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mbha-art-1",
      headline: "TT keeps it healthy as a dynamic entrepreneur",
      publication: "Vutivi Business News",
      date: "2023",
      action: "Read Article",
      url: "https://vutivibusiness.co.za/business/mbhas-entrepreneurship-journey/",
      image: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-4.jpeg"
    },
    {
      id: "mbha-art-2",
      headline: "TT Mbha puts bana ba SEKOLO first: South African businessman to hand over five school libraries",
      publication: "Daily Sun",
      date: "28 Jul 2023",
      action: "Read Article",
      url: "https://www.snl24.com/dailysun/celebs/south-african-businessman-to-hand-over-five-school-libraries-20230728/",
      image: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mbha-vid-1",
      label: "TT Mbha - Real Estate, Media & Entrepreneurship",
      youtubeId: "_uVqIYGAjEQ"
    },
    {
      id: "mbha-vid-2",
      label: "TT Mbha on Entrepreneurship, Real Estate & Amatyma",
      youtubeId: "z7AlU47ocrc"
    }
  ];

  const customGallery = [
    {
      id: "tt-gal-1",
      src: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-3.jpg",
      alt: "TT Mbha Keynote Address",
      caption: "TT Mbha delivering entrepreneurship & real estate keynotes",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "tt-gal-2",
      src: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-8.png",
      alt: "TT Mbha Media & Television",
      caption: "Television host and executive producer",
      className: ""
    },
    {
      id: "tt-gal-3",
      src: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-10.jpg",
      alt: "TT Mbha Community Leadership",
      caption: "Amatyma Brotherhood Circle dialogues",
      className: ""
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Thato “TT” Mbha"
      speakerTitle=""
      speakerDesignation="Social Entrepreneur, Master Practitioner in Real Estate MP(RE) & Chartered Marketer CM(SA)"
      speakerRole="Founder & CEO of Mzansi Cribs, TTMBHA Financial Services & Amatyma Community Drive NPC"
      speakerRef="TSF-TM-36"
      heroBackgroundImage="/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-11.jpg"
      biographyImage="/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-12.jpeg"
      bioHook="“Umuntu Ngumuntu Ngabantu: Empowering communities through real estate, financial accessibility, and purpose-driven brotherhood.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="thato-tt-mbha" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thato-tt-mbha" 
        customGallery={customGallery}
        customIntroText="Property investment masterclasses, positive masculinity summits, and leadership keynotes led by Thato “TT” Mbha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
