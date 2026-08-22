"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "pn-academic",
    label: "Renowned Academic",
    subtitle: "Lectured at Wits University, UKZN, Tshwane University of Technology, and London colleges."
  },
  {
    id: "pn-awards",
    label: "Living Legend Awardee",
    subtitle: "Recipient of Joburg Living Legends Award (2012) and ACT Lifetime Achievement Award (2013)."
  },
  {
    id: "pn-monuments",
    label: "Sculptor & Poet",
    subtitle: "Famous for found-object exhibitions (Scent of Invisible Footprints) and struggle monuments."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "indigenous-systems",
    number: "Theme 01",
    title: "Indigenous Knowledge Systems.",
    copy: "Exploring traditional African philosophies, cultural frameworks, and their integration into modern structures."
  },
  {
    id: "art-and-revolution",
    number: "Theme 02",
    title: "Art, Memory & Revolution.",
    copy: "Analyzing how visual arts, poetry, and struggle monuments preserve identity, history, and drive social cohesion."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Prof. Pitika Ntuli is a world-renowned South African sculptor, poet, writer, and academic who has contributed extensively to the country's political, cultural, and artistic discourse. Born in Springs, East of Johannesburg, he grew up with a deep passion for art while actively participating in the struggle against the apartheid regime, which eventually led to his exile.",
  "Ntuli spent years in exile, including a year in solitary confinement on death row in Swaziland before international pressure secured his release to the UK in 1978. In exile, he studied at the Pratt Institute in New York, earning a Master of Fine Arts and a Master of Arts in Comparative Industrial Relations. He then spent years lecturing at prestigious British institutions, including Camberwell College of Arts, Central Saint Martins, and Middlesex University.",
  "Upon his return to South Africa in 1994, Prof. Ntuli lectured at Wits University and the University of KwaZulu-Natal, while establishing major art movements. His first South African exhibition in 2010, 'Scent of Invisible Footprints,' featured 180 found-object sculptures to critical acclaim. A regular commentator on indigenous knowledge systems and a lifetime achievements awardee, he continues to shape conversations on culture and national identity.",
  "Book Prof. Pitika Ntuli through The Speakers Firm, A Leading African Speakers Bureau, to deliver deeply insightful keynotes on African indigenous systems, comparative literature, and the transformative power of art and dialogue at your next event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "ukzn", name: "UNIVERSITY OF KWAZULU-NATAL" },
  { id: "tut", name: "TSHWANE UNIV OF TECHNOLOGY" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "pn-art-1",
      headline: "Minister Zizi Kodwa pays tribute to Prof Pitika Ntuli",
      publication: "Department of Sport, Arts and Culture",
      date: "2024",
      action: "Read Article",
      url: "https://www.dsac.gov.za/node/278",
      image: "/speakers/Prof Pitika Ntuli/Prof-Pitika-Ntuli-The-Speakers-Firm.jpg"
    },
    {
      id: "pn-art-2",
      headline: "Prof Pitika Ntuli speaks at the 3rd Hugh Lewin Memorial Human Rights Lecture",
      publication: "St John's College",
      date: "2021",
      action: "Read Feature",
      url: "https://www.stjohnscollege.co.za/news/2021/prof-patika-ntuli-speaks-at-the-3rd-hugh-lewin-memorial-human-rights-lecture-1",
      image: "/speakers/Prof Pitika Ntuli/Prof-Pitika-Ntuli-The-Speakers-Firm4.jpg"
    },
    {
      id: "pn-art-3",
      headline: "Professor Pitika Ntuli urges return of stolen art to Africa to restore cultural pride",
      publication: "News24 / City Press",
      date: "2024",
      action: "Read Feature",
      url: "https://www.news24.com/citypress/trending/professor-pitika-ntuli-urges-return-of-stolen-art-to-africa-to-restore-cultural-pride-20240211",
      image: "/speakers/Prof Pitika Ntuli/Prof-Pitika-Ntuli-The-Speakers-Firm6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "pn-vid-1",
      label: "Prof Pitika Ntuli in Conversation on Art and Heritage",
      youtubeId: "-F5ePSm3HHc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Prof. Pitika Ntuli"
      speakerTitle=""
      speakerDesignation="Celebrated Sculptor, Poet, Writer & Academic"
      speakerRole="Indigenous Knowledge & Cultural Heritage Keynote"
      speakerRef="TSF-PN-80"
      heroBackgroundImage="/speakers/Prof Pitika Ntuli/Prof-Pitika-Ntuli-The-Speakers-Firm2.jpg"
      biographyImage="/speakers/Prof Pitika Ntuli/Prof-Pitika-Ntuli-The-Speakers-Firm3.jpg"
      bioHook="“Bridging the values of our African heritage and modern aesthetics to challenge representation and inspire dialogue through art, poetry, and comparative knowledge systems.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="prof-pitika-ntuli" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="prof-pitika-ntuli" 
        customIntroText="Indigenous knowledge systems symposiums, national heritage dialogues, and visual arts keynote addresses led by Prof. Pitika Ntuli."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
