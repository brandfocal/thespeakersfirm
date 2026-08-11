"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mpp-oxford",
    label: "Master in Public Policy (Oxford)",
    subtitle: "Blavatnik School of Government graduate."
  },
  {
    id: "lecturer-wits",
    label: "Lecturer (Wits School of Governance)",
    subtitle: "Teaching manager at the Tayarisha African Centre of Excellence."
  },
  {
    id: "mandela-rhodes",
    label: "Mandela-Rhodes Scholar",
    subtitle: "Recognized as a leading young African academic."
  },
  {
    id: "chevening-scholar",
    label: "Chevening Scholar",
    subtitle: "UK Government's global scholarship programme recipient."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "decoloniality-policy",
    number: "Theme 01",
    title: "Decoloniality & Public Policy",
    copy: "Analysing developmental challenges, public policy formulation, and societal movements through a decolonial framework."
  },
  {
    id: "digital-governance",
    number: "Theme 02",
    title: "Digital Governance & Innovation",
    copy: "Exploring how digital transformation, public administration, and emerging technology tools shape modern state governance."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Rekgotsofetse Chikane is a lecturer at the Wits School of Governance, Teaching Manager at the Tayarisha African Centre of Excellence in Digital Governance, and a Research Associate at the Wits Institute of Socio-Economic Research.",
  "He is a graduate of the University of Oxford (Blavatnik School of Government) having completed his Master in Public Policy degree in 2017 and he completed a Bachelor in Social Science (Hons) degree at the University of Cape Town in 2015 specialising in Public Policy, Public Administration and Economics. He is the author of Breaking a Rainbow, Building a Nation: The Politics behind the #MustFall Movements.",
  "He is Mandela-Rhodes Scholar, a Mandela-Washington Fellow, a Chevening Scholar, a former Masters Fellow at the Public Affairs Research Institute, one of Mail and Guardians Top 200 Young People (2016 – Civil Society) and an Obama Africa Programme leader for 2019. He is also a fellow for the International Strategic Forum with the Schmidt Futures Foundation. His research focuses on decoloniality and development, public policy and digital governance."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "oxford", name: "UNIVERSITY OF OXFORD" },
  { id: "uct", name: "UNIVERSITY OF CAPE TOWN" },
  { id: "mandela-rhodes", name: "MANDELA RHODES" }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Rekgotsofetse Chikane"
      speakerTitle=""
      speakerDesignation="Lecturer: Wits School of Governance, Scholar & Author"
      speakerRole="Redefining digital governance, public policy, and decoloniality in Africa."
      speakerRef="TSF-RC-01"
      heroBackgroundImage="/speakers/Rekgotsofetse Chikane/Rekgotsofetse-Chikane-The-Speakers-Firm-4.jpg"
      biographyImage="/speakers/Rekgotsofetse Chikane/Rekgotsofetse-Chikane-The-Speakers-Firm-three.jpg"
      bioHook="“Debunking development myths and engineering future-fit public policies for the digital state.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "rekgotso-book-1",
          title: "Breaking a Rainbow, Building a Nation",
          description: "The Politics behind the #MustFall Movements.",
          coverImage: "/speakers/Rekgotsofetse Chikane/Breaking-a-Rainbow-Building-a-Nation.jpg",
          url: "https://www.loot.co.za/product/rekgotsofetse-chikane-breaking-a-rainbow-building-a-na/mgdv-5635-g2a0"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      <ProfileAdditionalSections 
        speakerId="rekgotsofetse-chikane" 
        customIntroText="Snapshots from Rekgotsofetse Chikane's academic engagements, book launches, and political roundtables."
        customGallery={[]}
        customVideos={[
          {
            id: "rekgotso-video-1",
            label: "Rekgotsofetse Chikane on Digital Governance",
            youtubeId: "QTVKH4WWozc"
          },
          {
            id: "rekgotso-video-2",
            label: "Rekgotsofetse Chikane: “The Death of South African Politics”",
            youtubeId: "FavPP_6idOA"
          },
          {
            id: "rekgotso-video-3",
            label: "Exploring protest culture in South Africa",
            youtubeId: "p_pTa1UuidM"
          },
          {
            id: "rekgotso-video-4",
            label: "Reactions to New National Executive | Dr Rekgotsofetse Chikane",
            youtubeId: "K49pjHUQUnw"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
