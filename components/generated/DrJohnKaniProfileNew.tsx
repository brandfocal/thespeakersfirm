"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "john-legend",
    label: "Living Legend & Icon",
    subtitle: "Renowned globally as a legendary actor, playwright, director, and pioneer of protest theatre."
  },
  {
    id: "john-honours",
    label: "OIS & OBE recipient",
    subtitle: "Recipient of the Order of Ikhamanga (Silver) in South Africa and Officer of the Order of the British Empire (OBE)."
  },
  {
    id: "john-tony",
    label: "Tony Award Winner",
    subtitle: "Winner of the prestigious Tony Award for Best Actor in 'Sizwe Banzi is Dead' and 'The Island'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "cultural-storytelling",
    number: "Theme 01",
    title: "Cultural Heritage & Storytelling.",
    copy: "Using artistic narrative to define societal identities, heal historical divisions, and preserve the legacy of struggle."
  },
  {
    id: "creative-leadership",
    number: "Theme 02",
    title: "Creative Leadership & Advocacy.",
    copy: "Steering institutions toward intellectual honesty, supporting freedom of expression, and mentoring future cultural leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. John Kani is a world-renowned South African actor, playwright, director, and activist. Known globally for his seminal protest plays such as 'Sizwe Banzi is Dead' and 'The Island' (co-authored with Athol Fugard and Winston Ntshona), Kani's work has defined and challenged global cultural narratives.",
  "His highly distinguished career spans international stage performances, critically acclaimed roles in Hollywood blockbusters (including 'Black Panther' and 'The Lion King'), and leadership of major cultural institutions such as the Market Theatre.",
  "As a public intellectual and speaker, Dr. Kani focuses on the power of cultural memory, storytelling, and active civic participation. He challenges corporate, academic, and governmental leadership to support the arts and build inclusive national identities.",
  "Book Dr. John Kani through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring the lived wisdom, authority, and inspiring stories of a global cultural legend to your event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "tony", name: "Tony Awards" },
  { id: "market-theatre", name: "Market Theatre" },
  { id: "brics", name: "BRICS Arts" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "john-art-1",
      headline: "Dr. John Kani on cultural heritage and protest theatre",
      publication: "Theatre & Arts Quarterly",
      date: "2024",
      action: "Read Interview",
      url: "https://www.citizen.co.za/lifestyle/south-african-legend-john-kani-joins-the-oscars-voting-body-flying-the-african-flag-high/",
      image: "/speakers/John Kani/dr-john-kani-the-speakers-firm-12.jpg"
    },
    {
      id: "john-art-2",
      headline: "Shaping South Africa's post-apartheid cultural identity",
      publication: "Cultural Studies Journal",
      date: "2024",
      action: "Read Feature",
      url: "https://mg.co.za/friday/2023-05-12-john-kani-still-questions-about-the-truth-after-21-years/",
      image: "/speakers/John Kani/dr-john-kani-the-speakers-firm-5.jpg"
    },
    {
      id: "john-art-3",
      headline: "The role of artists in democratic consolidation",
      publication: "Arts & Society Review",
      date: "2023",
      action: "Read Article",
      url: "https://www.goodthingsguy.com/people/dr-john-kani-honoured-with-an-international-shakespeare-award/",
      image: "/speakers/John Kani/dr-john-kani-the-speakers-firm-14.jpg"
    }
  ];

  const customVideos = [
    {
      id: "john-vid-1",
      label: "Dr. John Kani on Theatre and Struggle",
      youtubeId: "IgHxi9pQASY"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. John Kani"
      speakerTitle=""
      speakerDesignation="Living Legend, Actor, Playwright & Cultural Icon"
      speakerRole="Global Actor & Protest Playwright"
      speakerRef="TSF-JK-10"
      heroBackgroundImage="/speakers/John Kani/dr-john-kani-the-speakers-firm-13.jpg"
      biographyImage="/speakers/John Kani/dr-john-kani-the-speakers-firm-5.jpg"
      bioHook="“We do not tell stories to entertain; we tell stories to hold a mirror up to society, ensuring history is never forgotten.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="john-kani" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="john-kani" 
        customIntroText="Lived wisdom keynotes, theatre masterclasses, and national heritage discussions led by Dr. John Kani."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
