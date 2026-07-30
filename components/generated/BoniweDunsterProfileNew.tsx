"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ipm-finalist",
    label: "IPM HR Practitioner Finalist (2022)",
    subtitle: "Over 16 years of human resources advisory experience."
  },
  {
    id: "blue-eagle-founder",
    label: "Founder Blue Eagle HC",
    subtitle: "Established in 2021 to simplify HR advisory and services."
  },
  {
    id: "academic-credentials",
    label: "UCT, Stell, UWC, NWU Alumnus",
    subtitle: "Postgrad diplomas in Labour Law, Leadership, and Industrial Psych."
  },
  {
    id: "professional-membership",
    label: "IAWBH & IPM Member",
    subtitle: "South African Society of Labour Law and workplace bullying association."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "toxic-environments",
    number: "Theme 01",
    title: "Navigating Toxic Work Environments",
    copy: "Helping employees and organizations address bullying, manage stress, and establish workplace fairness and wellness."
  },
  {
    id: "human-capital-dynamics",
    number: "Theme 02",
    title: "Simplifying HR & Human Capital Dynamics",
    copy: "Boniwe breaks down everyday workplace dynamics, 'garden leave' policies, and strategic people management tools to educate the workforce."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Boniwe Dunster is an IPM Human Resources Practitioner of the Year Finalist (2022) with over 16 years’ experience from various industries (Manufacturing, Management Consulting and Financial Services). She is passionate about education, people development, fairness in the workplace, community projects and uses her work and general life experience together with the networks she has built over the years to educate people about the world of work, it’s everyday dynamics and how to navigate its complexities. She is the founder of Blue Eagle Human Capital Practice, which was found in November 2021 with the aim of simplifying HR Concepts and making HR advisory and services available to everyone.",
  "She is currently doing her Masters in People Management with University of Cape Town, holds a Postgraduate Diploma in Labour Law with University of Western Cape, Certificate in Coaching from University of Cape Town, Postgraduate Diploma in Leadership Development from Stellenbosch University, BA in Industrial Psychology from North West University and National Diploma in Public Relations from Vaal University of Technology.",
  "Professional Membership",
  "- International Association on Workplace Bullying and Harassment (IAWBH)",
  "- Institute of People Management",
  "- South African Society of Labour Law"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "blue-eagle", name: "BLUE EAGLE HUMAN CAPITAL" },
  { id: "ipm", name: "INSTITUTE OF PEOPLE MANAGEMENT" },
  { id: "uct", name: "UNIVERSITY OF CAPE TOWN" },
  { id: "sasll", name: "SOUTH AFRICAN SOCIETY OF LABOUR LAW" }
];

const customMedia = [
  {
    id: "boniwe-media-1",
    headline: "Boniwe Dunster, HR Specialist",
    publication: "First Thing is First on Omny.fm",
    date: "",
    url: "https://omny.fm/shows/the-take-off-with-bongani-mtolo-and-nonala-tose/boniwe-dunster-hr-specialist#description",
    action: "Listen Audio",
    image: "/speakers/Boniwe%20Dunster/boniwe-dunster-the-speakers-firm-two.jpg"
  },
  {
    id: "boniwe-media-2",
    headline: "WELLNESS IN THE WORKPLACE | Navigating Toxic Work Environments with Boniwe Dunster",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=lY2N-MpQXyY",
    action: "Watch Video",
    image: "/speakers/Boniwe%20Dunster/boniwe-dunster-the-speakers-firm.jpg"
  },
  {
    id: "boniwe-media-3",
    headline: "TrendingSA Season 6 Episode 51: Boniwe Dunster",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=eI4r2gmDdS0",
    action: "Watch Video",
    image: "/speakers/Boniwe%20Dunster/Boniwe-Dunster-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Boniwe Dunster"
      speakerTitle=""
      speakerDesignation="Finalist, 2022 IPM HR Practitioner of the Year & Executive Manager"
      speakerRole="IPM HR Practitioner of the Year Finalist."
      speakerRef="TSF-BD-25"
      heroBackgroundImage="/speakers/Boniwe%20Dunster/boniwe-dunster-the-speakers-firm-three.jpg"
      biographyImage="/speakers/Boniwe%20Dunster/boniwe-dunster-the-speakers-firm-four.jpg"
      bioHook="“Simplifying HR concepts and educating the workforce to navigate everyday career dynamics.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="boniwe-dunster" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="boniwe-dunster" 
        customVideos={[
          {
            id: "boniwe-video-1",
            label: "Experience Reel",
            youtubeId: "3mjpk6KDk6I"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
