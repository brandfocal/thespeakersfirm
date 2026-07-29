"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "public-protector",
    label: "Former Public Protector of SA",
    subtitle: "Served from 2009 to 2016, leading critical anti-corruption investigations."
  },
  {
    id: "law-professor",
    label: "Professor of Law",
    subtitle: "Distinguished academic career at Wits University and Stellenbosch."
  },
  {
    id: "constitutional-pioneer",
    label: "Constitutional Architect",
    subtitle: "Drafted key sections of South Africa's post-apartheid constitution."
  },
  {
    id: "global-acclaim",
    label: "Time 100 & BBC Recognition",
    subtitle: "Named one of the most influential people globally for integrity and courage."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "anti-corruption-accountability",
    number: "Theme 01",
    title: "Anti-Corruption, Transparency & Accountability",
    copy: "Drawing on her historic investigations into state capture and public resource misuse, Prof. Madonsela speaks on building robust governance structures, moral courage, and public trust."
  },
  {
    id: "human-rights-constitutionalism",
    number: "Theme 02",
    title: "Human Rights Advocacy & Constitutional Leadership",
    copy: "A discussion on systemic social parity, rule of law, and driving ethical policy reform from national administration to academic classrooms."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Since 1987, Thuli Madonsela has worked in several government departments, civil society organisations, and academia. She has, for instance, lectured law at Wits University; been the presiding officer at the Independent Electoral Commission (IEC); worked as deputy director at the Justice Department and held the position of managing director at the Office of the Status of Women in the Presidency. On 19 October 2009 Madonsela was appointed Public Protector by President Jacob Zuma for a non-renewable seven year term. She was the only full-time commissioner in the South African law Reform Commission at the time.",
  "Of all her achievements and high profile positions that she has held, it is the Public Protector position that most put her in the public eye. During her tenure she investigated several high profile cases, including the probe into state resources allocated to Zuma’s Nkandla residence upgrade (“Secure in Comfort” 19 March 2014) and the State Capture report (“State of Capture” 2 November 2016). For her role as Public Prosecutor Madonsela received international praise for her efficiency and professionalism, including recognition by the Daily Maverick, Time, Glamour, ANN7, Transparency International, and the BBC. She left that office on 14 October 2016 and was replaced by Advocate Busiswe Mkhwebane."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "public-protector", name: "PUBLIC PROTECTOR" },
  { id: "stellenbosch", name: "STELLENBOSCH UNIVERSITY" },
  { id: "time-100", name: "TIME 100" },
  { id: "daily-maverick", name: "DAILY MAVERICK" }
];

const customMedia = [
  {
    id: "thuli-media-1",
    headline: "The making of Cyclone Thuli – the story of a Public Protector and a living legend",
    publication: "Daily Maverick",
    date: "2023-09-13",
    url: "https://www.dailymaverick.co.za/article/2023-09-13-thuli-madonsela-the-story-of-a-public-protector-and-living-legend/",
    action: "Read Article",
    image: "/images/blog-placeholder.jpg"
  },
  {
    id: "thuli-media-2",
    headline: "Thuli Madonsela: AfriForum struggles with white people being ‘ordinary’ citizens in new South Africa",
    publication: "IOL News (Politics)",
    date: "2025-03-03",
    url: "https://iol.co.za/news/politics/2025-03-03-thuli-madonsela-afriforum-struggles-with-white-people-being-ordinary-citizens-in-new-south-africa/",
    action: "Read Article",
    image: "/images/blog-placeholder.jpg"
  },
  {
    id: "thuli-media-3",
    headline: "Thuli Madonsela: A timeline",
    publication: "Mail & Guardian",
    date: "2011-07-15",
    url: "https://mg.co.za/article/2011-07-15-thuli-madonsela-a-timeline/",
    action: "Read Article",
    image: "/images/blog-placeholder.jpg"
  }
];

const customGallery = [
  {
    id: "thuli-gal-1",
    src: "/speakers/Thuli%20Madonsela/D6CCgq9W4AAv9xs.jpg%20large.jpg",
    alt: "Prof. Thuli Madonsela on stage",
    caption: "Addressing values-driven leadership summits",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "thuli-gal-2",
    src: "/speakers/Thuli%20Madonsela/D9lLmDNWkAAPmaG.jpg%20large.jpg",
    alt: "Prof. Thuli Madonsela panelist",
    caption: "Academic dialogues on justice",
    className: ""
  },
  {
    id: "thuli-gal-3",
    src: "/speakers/Thuli%20Madonsela/thuli-madonsela-the-speakers-firm.jpg",
    alt: "Prof. Thuli Madonsela portrait",
    caption: "Rule of law and advocacy work",
    className: ""
  }
];

const customMediaUpdated = [
  {
    id: "thuli-media-1",
    headline: "The making of Cyclone Thuli – the story of a Public Protector and a living legend",
    publication: "Daily Maverick",
    date: "2023-09-13",
    url: "https://www.dailymaverick.co.za/article/2023-09-13-thuli-madonsela-the-story-of-a-public-protector-and-living-legend/",
    action: "Read Article",
    image: "/speakers/Thuli%20Madonsela/thuli_thumb.jpg"
  },
  {
    id: "thuli-media-2",
    headline: "Thuli Madonsela: AfriForum struggles with white people being ‘ordinary’ citizens in new South Africa",
    publication: "IOL News (Politics)",
    date: "2025-03-03",
    url: "https://iol.co.za/news/politics/2025-03-03-thuli-madonsela-afriforum-struggles-with-white-people-being-ordinary-citizens-in-new-south-africa/",
    action: "Read Article",
    image: "/speakers/Thuli%20Madonsela/D8OeoxJWsAE--Er.jpg%20large.jpg"
  },
  {
    id: "thuli-media-3",
    headline: "Thuli Madonsela: A timeline",
    publication: "Mail & Guardian",
    date: "2011-07-15",
    url: "https://mg.co.za/article/2011-07-15-thuli-madonsela-a-timeline/",
    action: "Read Article",
    image: "/speakers/Thuli%20Madonsela/D8YcWuSXsAEwwvn.jpg%20large.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thuli Madonsela"
      speakerTitle="Prof."
      speakerDesignation="Law Professor & Former Public Protector of South Africa"
      speakerRole="Globally acclaimed human rights champion, academic, and anti-corruption pioneer."
      speakerRef="TSF-TM-14"
      heroBackgroundImage="/speakers/Thuli%20Madonsela/thuli-madonsela.jpg"
      biographyImage="/speakers/Thuli%20Madonsela/Thuli-Madonsela-1024x1536.jpeg"
      bioHook="“Accountability, transparency, and justice are the cornerstones of ethical leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thuli-madonsela" customMedia={customMediaUpdated} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thuli-madonsela" 
        customGallery={customGallery}
        customIntroText="Snapshots from Prof. Thuli Madonsela's global lectures, human rights campaigns, and governance assemblies."
        customVideos={[
          {
            id: "thuli-video-1",
            label: "Experience Reel",
            youtubeId: "oxYMVR_Q0ys"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
