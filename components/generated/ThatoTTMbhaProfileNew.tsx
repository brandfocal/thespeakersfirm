"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tt-bre",
    label: "CEO of Black Real Estate",
    subtitle: "Built one of South Africa's most influential property brands to enable access and mentorship."
  },
  {
    id: "tt-amatyma",
    label: "Founder of Amatyma Movement",
    subtitle: "Drives men's wellness, mental health, and positive masculinity dialogues."
  },
  {
    id: "tt-media",
    label: "Mzansi Cribs Host & Producer",
    subtitle: "Celebrates aspirational living and renovates homes for deserving families through digital media."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "property-wealth",
    number: "Theme 01",
    title: "Real Estate & Generational Wealth.",
    copy: "Demystifying property investment, unlocking ownership pathways, and driving real estate entrepreneurship."
  },
  {
    id: "male-wellness",
    number: "Theme 02",
    title: "Positive Masculinity & Wellness.",
    copy: "Facilitating open dialogues on men's mental health, family accountability, and integrity-driven leadership."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Thato “TT” Mbha is a celebrated entrepreneur, real estate leader, and media personality whose journey embodies vision, perseverance, and transformation. As the CEO of Black Real Estate, TT has built one of South Africa’s most influential property brands, redefining what black excellence looks like in a sector historically limited to a few. He discovered his passion for property at the age of sixteen, later co-founding Square Metre Holdings in 2004 and Completely Customized Marketing in 2006.",
  "In 2014, TT partnered with Keller Williams Realty Worldwide, one of the world’s leading property firms, where he trained and operated as a Master Practitioner. This collaboration gave birth to Black Real Estate (Pty) Ltd, his proudly South African venture designed to unlock access, mentorship, and empowerment in the property sector. Through this platform, TT has inspired a new generation of real estate professionals and entrepreneurs committed to building wealth through ownership and innovation.",
  "Beyond real estate, TT is the founder of Amatyma, a movement and suit-up premium experience dedicated to addressing the wellness of men, tackling issues that affect their lives, and promoting positive masculinity. He is also the host of 'Mzansi Cribs Makeover', leveraging media and digital storytelling to make property relatable and provide home renovations to deserving individuals. TT is recognized as a leading keynote speaker on leadership, purpose, and men’s empowerment.",
  "Book Thato “TT” Mbha through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring dynamic entrepreneurship masterclasses, property investment keynotes, and men’s empowerment workshops to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "blackrealestate", name: "BLACK REAL ESTATE" },
  { id: "amatyma", name: "AMATYMA" },
  { id: "mzansicribs", name: "MZANSI CRIBS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mbha-art-1",
      headline: "TT keeps it healthy as a dynamic entrepreneur",
      publication: "Vutivi Business News",
      date: "2023",
      action: "Read Profile",
      url: "https://vutivibusiness.co.za/business/mbhas-entrepreneurship-journey/",
      image: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-4.jpeg"
    },
    {
      id: "mbha-art-2",
      headline: "Men’s conference to address the wellness of men, tackle issues that affect their lives",
      publication: "IOL News",
      date: "2022",
      action: "Read Article",
      url: "https://iol.co.za/the-star/news/2022-11-15-mens-conference-to-address-the-wellness-of-men-tackle-issues-that-affect-their-lives/",
      image: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-5.jpg"
    },
    {
      id: "mbha-art-3",
      headline: "TT Mbha’s home makeover show to premiere on Mzansi Magic",
      publication: "The Citizen",
      date: "2023",
      action: "Read Announcement",
      url: "https://www.citizen.co.za/entertainment/tt-mbhas-home-makeover-show-to-premiere-on-mzansi-magic/",
      image: "/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mbha-vid-1",
      label: "TT Mbha on Entrepreneurship, Real Estate & Amatyma",
      youtubeId: "z7AlU47ocrc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Thato “TT” Mbha"
      speakerTitle=""
      speakerDesignation="Entrepreneur & Real Estate Visionary"
      speakerRole="CEO of Black Real Estate & Founder of Amatyma"
      speakerRef="TSF-TM-36"
      heroBackgroundImage="/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-11.jpg"
      biographyImage="/speakers/Thato TT Mbha/TT-Mbha-The-Speakers-Firm-12.jpeg"
      bioHook="“Redefining property ownership, positive masculinity, and purpose-driven leadership to inspire a new generation of wealth-builders.”"
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
        customIntroText="Property investment masterclasses, positive masculinity panels, and leadership keynotes led by Thato “TT” Mbha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
