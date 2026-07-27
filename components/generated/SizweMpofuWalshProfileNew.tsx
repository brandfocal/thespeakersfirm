"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "wits-lecturer",
    label: "Lecturer at Wits University",
    subtitle: "Lectures in the Department of International Relations at Wits University."
  },
  {
    id: "oxford-dphil",
    label: "DPhil from Oxford",
    subtitle: "Holds a DPhil in International Relations from the University of Oxford."
  },
  {
    id: "smwx-founder",
    label: "Founder of SMWX",
    subtitle: "Founder of the popular current affairs YouTube channel and political podcast SMWX."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "political-analysis",
    number: "Theme 01",
    title: "South African Politics & Institutional Reform.",
    copy: "Deconstructing South Africa's political landscape, party dynamics, constitutional governance, and structural transformation."
  },
  {
    id: "future-governance",
    number: "Theme 02",
    title: "International Relations & Future of Work.",
    copy: "Exploring global geopolitics, transnational policy trends, and the socio-economic factors shaping the future workforce."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Sizwe Mpofu-Walsh is a Lecturer in the Department of International Relations at Wits University. He was SRC president at UCT in 2010. He holds a DPhil in International Relations from the University of Oxford.",
  "His first book Democracy and Delusion: 10 Myths in South African Politics (2017) won the City Press-Tafelberg Nonfiction Award. The book was accompanied by a rap album of the same name.",
  "His second book The New Apartheid (2021) was one of the bestselling books in South Africa that year.",
  "He is the founder of the popular current affairs YouTube channel SMWX, and has recently worked as a broadcaster on Unfiltered at the SABC."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "oxford", name: "UNIVERSITY OF OXFORD" },
  { id: "smwx", name: "SMWX PODCAST" },
  { id: "sabc", name: "SABC NEWS" }
];

const PUBLISHED_BOOKS = [
  {
    id: "democracy-delusion",
    title: "Democracy and Delusion",
    description: "10 Myths in South African Politics (2017) - Winner of the City Press-Tafelberg Nonfiction Award.",
    coverImage: "/speakers/Sizwe Mpofu-Walsh/New folder/Democracy-and-Delusion.png",
    url: "https://www.exclusivebooks.co.za/product/9780624082019"
  },
  {
    id: "new-apartheid",
    title: "The New Apartheid",
    description: "A bestselling exploration of structural segregation in contemporary South Africa (2021).",
    coverImage: "/speakers/Sizwe Mpofu-Walsh/New folder/The-New-Apartheid.png",
    url: "https://www.exclusivebooks.co.za/product/9781776191765"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Sizwe Mpofu-Walsh"
      speakerTitle="Dr."
      speakerDesignation="Lecturer, Podcaster, Author & Activist"
      speakerRole="International Relations scholar, founder of SMWX, and bestselling political author."
      speakerRef="TSF-SMW-04"
      heroBackgroundImage="/speakers/Sizwe Mpofu-Walsh/New folder/sizwe-mpofu-walsh-4.jpg"
      biographyImage="/speakers/Sizwe Mpofu-Walsh/New folder/Sizwe-Mpofu-Walsh-The-Speakers-Firm9.jpg"
      bioHook="“Deconstructing political delusions and building frameworks for a new generation of leaders.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={PUBLISHED_BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      <ProfileAdditionalSections speakerId="sizwe-mpofu-walsh" />
    </SpeakerProfileTemplate>
  );
};
