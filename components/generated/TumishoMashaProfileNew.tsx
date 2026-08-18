"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "tm-actor",
    label: "SAFTA Award-Winning Actor",
    subtitle: "First South African to portray Nelson Mandela in the film 'Mandela’s Gun' (Harlem Festival Best Actor)."
  },
  {
    id: "tm-presenter",
    label: "Top Billing Presenter Alumnus",
    subtitle: "Starred in SA's premier lifestyle magazine show from 2004 to 2009; hosted Miss World and SAMA awards."
  },
  {
    id: "tm-voice",
    label: "Premier Voice Artist & Producer",
    subtitle: "20+ years of voice work for major financial institutions, car brands, and Netflix hits."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "media-visibility",
    number: "Theme 01",
    title: "Media & Executive Visibility.",
    copy: "Leveraging 20+ years of media presence, storytelling, and high-impact communication to build personal and corporate brands."
  },
  {
    id: "creative-leadership",
    number: "Theme 02",
    title: "Creative Leadership & Narrative Power.",
    copy: "Harnessing the power of performance, writing, and production to inspire corporate innovation and culture."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "With a BA in Drama from Wits University, Tumisho started his Career in the theatre. He has proved himself as a talented actor, a voice artist, a television presenter, radio DJ, MC, television show host, writer and motivational speaker.",
  "His film and television credits as an actor include being the first South African actor to portray iconic leader Nelson Mandela in the international film Mandela’s Gun for which he won Best Actor at the Harlem International Film Festival in 2018. His international hits include Beyond Borders, Drum and Catch a Fire. His latest international television work being the Apple+ TV hit sci-fi series Invasion, Blood and Water, Silverton Siege and Spell all on Netflix. British TV series Wallander starring Kenneth Branagh, the British television drama Kidnap and Ransom, the popular BBC drama Silent Witness, Emmy Award winning HBO series No1 Ladies Detective Agency as well as the hip social awareness Film Shuga – Staying Alive on MTV.",
  "On local screens Tumisho’s last leading role was as Gibson Mosia on Mzansi Magic that won him a best actor SAFTA award nomination in 2017 for the drama series Saints and Sinners. He has played Jackson Mokaba on Isibaya. He won a Best Actor SAFTA award in 2012 for his portrayal of Modise Tladi on The Wild MNET’s critically acclaimed daily drama. He is still remembered as Dumisane Thusong from SABC 3’s Isidingo and as a presenter on Top Billing – South Africa’s premiere lifestyle magazine show, which he starred on from 2004 to 2009. He hosted the Miss World beauty pageant that was broadcast worldwide in 2008.",
  "Book Tumisho Masha through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring premium media visibility, creative leadership insights, and motivational keynotes to your next event or corporate gathering."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "netflix", name: "NETFLIX" },
  { id: "appletv", name: "APPLE TV+" },
  { id: "hbo", name: "HBO" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "tm-art-1",
      headline: "Unveiling Tumisho Masha: A South African Star’s Journey",
      publication: "The South African",
      date: "2023",
      action: "Read Article",
      url: "https://www.thesouthafrican.com/news/unveiling-tumisho-masha-a-south-african-stars-journey-september-2023/",
      image: "/speakers/Tumisho Masha/tumiso-3.jpg"
    },
    {
      id: "tm-art-2",
      headline: "Tumisho Masha celebrates 20 years in the entertainment industry",
      publication: "IOL / Entertainment",
      date: "2021",
      action: "Read Profile",
      url: "https://iol.co.za/entertainment/tv/local/2021-02-05-tumisho-masha-takes-fans-down-memory-lane-as-he-celebrates-20-years-in-the-industry/",
      image: "/speakers/Tumisho Masha/Tumisho-Masha-The-Speakers-Firm4.jpg"
    },
    {
      id: "tm-art-3",
      headline: "Tumisho Masha | The Success Rate with Thuli Magubane",
      publication: "The Success Rate Podcast / YouTube",
      date: "2020",
      action: "Watch Podcast",
      url: "https://www.youtube.com/watch?v=P30diso78-w",
      image: "/speakers/Tumisho Masha/Tumisho-Masha-The-Speakers-Firm6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "tm-vid-1",
      label: "Tumisho Masha on Acting, Production & Creative Leadership",
      youtubeId: "tzSpdgh_vtw"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Tumisho Masha"
      speakerTitle=""
      speakerDesignation="TV Actor, MC & Premier Voice Artist"
      speakerRole="SAFTA Award-Winning Actor & Film Producer"
      speakerRef="TSF-TM-66"
      heroBackgroundImage="/speakers/Tumisho Masha/Tumisho-Masha-The-Speakers-Firm9.jpg"
      biographyImage="/speakers/Tumisho Masha/Tumisho-Masha-The-Speakers-Firm7.jpg"
      bioHook="“Harnessing narrative power, performance, and international media experience to inspire creative leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="tumisho-masha" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="tumisho-masha" 
        customIntroText="Motivational keynotes, voice-over masterclasses, and creative leadership panels led by Tumisho Masha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
