"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "sm-therapist",
    label: "Certified Therapist & Trauma Counsellor",
    subtitle: "Holds a PhD in Christian Counselling & Christian Law; specializes in corporate and family wellness."
  },
  {
    id: "sm-musician",
    label: "Joyous Celebration Founding Member",
    subtitle: "Served as Assistant Musical Director, Producer, and Songwriter for SA's premier gospel choir."
  },
  {
    id: "sm-chaplain",
    label: "Certified Chaplain",
    subtitle: "Runs spiritual, physical, and emotional wellness workshops across organizations."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "trauma-therapy",
    number: "Theme 01",
    title: "Trauma, Wellness & Chaplaincy.",
    copy: "Integrating psychological trauma counselling with corporate and family wellness programs to restore mental health."
  },
  {
    id: "creative-rules",
    number: "Theme 02",
    title: "Creative Autonomy & Rules.",
    copy: "Teaching creative minds how to skip the box, create their own systems, and drive personal impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Steven Molakeng is an exceptionally gifted wellness coach, mentor, and qualified therapist. He studied music specializing in piano at Manu Technical College, and his musical skills have been outstanding both nationally and globally. He served Bishop Benjamin Dube both as a pianist and vocalist. One of his significant moments was to join the legends in the field of music the likes of Mthunzi Namba and Felicia Marion on a musical group namely “Sweetwater- Amanzi Mtoti, which later gave birth to Family Factory and Family Factory gave birth to Joyous Celebration. As a founding member of Joyous Celebration he had a tremendous recording project opportunity from their 1st to 6th album and later recorded with them a project called Joyous alumni on Joyous celebration 20. Part of his journey with Joyous Celebration project was to serve as an Assistant Musical Director, Producer and a Song Writer. He is also a founding member of multiple awards winning group “Redeemed” which has made a significant impact in the gospel music industry in SA and also served as a Musical Director.",
  "Nationally he has worked on a number of music projects with the highly gifted legends namely; Hugh Masekela, Sibongile Khumalo, Gloria Bosman, Themba Mkhize and Judith Siphuma. Gracefully he had amazing impactful music opportunities with some of the global music legends the likes of Bebe Winans and Kirk Franklin. He is a musical strategist very passionate about people’s growth and development in the music industry. Notably Dr Steven Molakeng is also a certified Chaplain, Certified therapist and a Trauma Counsellor. He holds a PhD doctorate in Christian Counselling and Christian law, an alumni of Impact Africa Technical University USA in 2022. He specialises with trauma counselling, coaching and running therapy classes and programs for patients, families and organization at large.",
  "Book Dr Steven Molakeng through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring music business insights, mental wellness workshops, and trauma counselling expertise to your next event or corporate program."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "joyous", name: "JOYOUS CELEBRATION" },
  { id: "impactafrica", name: "IMPACT AFRICA UNIVERSITY" },
  { id: "redeemed", name: "REDEEMED GOSPEL GROUP" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sm-art-1",
      headline: "Kingdom Wellness Workshop: Spiritual, Mental & Physical Balance",
      publication: "YouTube",
      date: "2024",
      action: "Watch Workshop",
      url: "https://www.youtube.com/watch?v=zlydsZaIOXc",
      image: "/speakers/Dr Steven Molakeng/Dr-Steven-Molakeng.jpg"
    },
    {
      id: "sm-art-2",
      headline: "Handling Family Dynamics - The Holiday Quest",
      publication: "POWER 98.7 / Power Breakfast",
      date: "2023",
      action: "Listen to Podcast",
      url: "https://omny.fm/shows/power-breakfast/handling-family-dynamics-the-not#description",
      image: "/speakers/Dr Steven Molakeng/Dr-Steven-Molakeng-The-Speakers-Firm-3.jpg"
    },
    {
      id: "sm-art-3",
      headline: "Creative Autonomy: Skipping the Entire Box",
      publication: "The Speakers Firm Briefings",
      date: "2022",
      action: "Read Brief",
      url: "https://thespeakersfirm.co.za/masculinity/dr-steven-molakeng/",
      image: "/speakers/Dr Steven Molakeng/Dr-Steven-Molakeng-The-Speakers-Firm-7.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sm-vid-1",
      label: "Dr. Steven Molakeng: Kingdom Wellness & Spiritual Health",
      youtubeId: "zlydsZaIOXc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Steven Molakeng"
      speakerTitle=""
      speakerDesignation="Chaplain, Therapist & Music Strategist"
      speakerRole="Founding Member of Joyous Celebration & Trauma Counsellor"
      speakerRef="TSF-SM-71"
      heroBackgroundImage="/speakers/Dr Steven Molakeng/Dr-Steven-Molakeng-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Dr Steven Molakeng/Dr-Steven-Molakeng-The-Speakers-Firm-2.jpg"
      bioHook="“Systems are not meant for creative people, creative people must be prepared to skip the entire box and create with their own set of rules.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-steven-molakeng" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-steven-molakeng" 
        customIntroText="Mental health panels, trauma counselling seminars, and music industry strategic keynotes led by Dr. Steven Molakeng."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
