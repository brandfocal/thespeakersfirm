"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "comedic-heavyweight",
    label: "Comedic Heavyweight",
    subtitle: "Regular headliner at major national comedy festivals and clubs."
  },
  {
    id: "sought-after-mc",
    label: "Sought-After Corporate MC",
    subtitle: "Trusted host for premium government and blue-chip corporate events."
  },
  {
    id: "entrepreneurial-comedian",
    label: "Entrepreneurial Comedian",
    subtitle: "Bridging business acumen with creative stage presence."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "versatile-facilitation",
    number: "Theme 01",
    title: "Versatile Event Facilitation.",
    copy: "Dynamic hosting tailormade for diverse corporate and public sector audiences, ensuring engagement and fluidity."
  },
  {
    id: "strategic-comedy",
    number: "Theme 02",
    title: "Strategic Comedy & Storytelling.",
    copy: "Using stand-up comedy and sharp cultural observations to foster genuine human connection and break board-room tension."
  },
  {
    id: "brand-disruption",
    number: "Theme 03",
    title: "Brand and Culture Disruption.",
    copy: "Challenging traditional communication norms through clean, witty, and deeply engaging audience dialogue."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ntosh Madlingozi is an entrepreneur and one of South Africa’s sought-after stand-up comedians and MC. He has featured, to great acclaim, in theatre shows such as Blacks Only, Heavyweight Comedy Jam, Tshwane Comedy Festival, 99% Xhosa Comedy Festival, Cape Town International Comedy Festival, Mind The Gap Comedy Festival, Soweto Comedy Festival, MetroFM comedy experience and the DSTV comedy Festival. His fresh brand of in-your-face, laissez faire humour has found favour at various venues around Gauteng including The Box, Awednesday, Comedy Wednesdays, The Bassline and others. He is a regular performer at the comedy clubs around the country.",
  "He has also performed for government clients such as the Gauteng Dept of Economic Development, Sports and Recreation, Arts and Culture and corporate clients such as Nedbank, Black Information Technology Forum(BITF), The Billionaire Group, FNB, Gijima AST, Black Management Forum to name but a few. One of his key strengths is versatility, able to cater for different audiences with equally hilarious material. He has shared the stage with a diverse array of comics, including Chris Forrest, John Vlismas, Tom Stade (Canada), Dwayne Perkins(U.S.A) Al Prodgers and Kagiso Lediga to name but a few."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "nedbank", name: "NEDBANK" },
  { id: "fnb", name: "FNB" },
  { id: "gijima", name: "GIJIMA AST" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ntosh-art-1",
      headline: "231 | NTOSH MADLINGOZI | ON NOT WANTING KIDS; CAREER EVOLUTION; ACTING; RELATIONSHIPS",
      publication: "WawWhatAweek",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=94c08GzcjEE",
      image: "/speakers/Ntosh Madlingozi/Ntosh-Madingozi-The-Speakers-Firm-2.jpg"
    },
    {
      id: "ntosh-art-2",
      headline: "Get to know Ntosh Madlingozi ‘The Comedy Prophet’ ahead of Jokers in July Festival",
      publication: "GQ South Africa",
      date: "2023",
      action: "Read Article",
      url: "https://www.gq.co.za/culture/entertainment/get-to-know-ntosh-madlingozi-the-comedy-prophet-ahead-of-jokers-in-july-festival-22f43dba-c53c-426d-9bd0-980f0de69aa7",
      image: "/speakers/Ntosh Madlingozi/Ntosh-Madingozi-The-Speakers-Firm-3.jpg"
    },
    {
      id: "ntosh-art-3",
      headline: "Comedian Ntosh Madlingozi tells us about ‘Sober Sex’ and male privilege",
      publication: "News24",
      date: "2020",
      action: "Read Article",
      url: "https://www.news24.com/life/arts-and-entertainment/music/comedian-ntosh-madlingozi-tells-us-about-sober-sex-and-male-privilege-20200227",
      image: "/speakers/Ntosh Madlingozi/Ntosh-Madingozi-The-Speakers-Firm.jpg"
    }
  ];

  const customGallery = [
    {
      id: "ntosh-gal-1",
      src: "/speakers/Ntosh Madlingozi/Ntosh-Madlingozi-The-Speakers-Firm-4.jpg",
      alt: "Ntosh Madlingozi stage",
      caption: "Performing live at a national comedy showcase.",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "ntosh-gal-2",
      src: "/speakers/Ntosh Madlingozi/Ntosh-Madlingozi-The-Speakers-Firm-5.jpg",
      alt: "Ntosh corporate MC",
      caption: "Directing programs for blue-chip corporate engagements.",
      className: ""
    },
    {
      id: "ntosh-gal-3",
      src: "/speakers/Ntosh Madlingozi/Ntosh-Madlingozi-The-Speakers-Firm-6.jpg",
      alt: "Ntosh profile portrait",
      caption: "Creative director and strategist profile photo.",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "ntosh-vid-1",
      label: "Ntosh Madlingozi Comedy Showcase",
      youtubeId: "nfS7SRV-gSs"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ntosh Madlingozi"
      speakerTitle="Ntobeko “Ntosh”"
      speakerDesignation="Entrepreneur, Stand-Up Comedian & Master of Ceremonies"
      speakerRole="Comedy pioneer, versatile corporate MC, and media personality."
      speakerRef="TSF-NM-23"
      heroBackgroundImage="/speakers/Ntosh Madlingozi/bg_ntosh.jpg"
      biographyImage="/speakers/Ntosh Madlingozi/Ntobeko-Ntosh-Madlingozi.jpg"
      bioHook="“Understanding and adapting to the collective funny bone of an audience is where comedy transforms into connection.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ntosh-madlingozi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ntosh-madlingozi" 
        customGallery={customGallery} 
        customIntroText="Versatile corporate MC interventions, high-impact comedic panels and cultural advisory sessions by Ntosh Madlingozi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
