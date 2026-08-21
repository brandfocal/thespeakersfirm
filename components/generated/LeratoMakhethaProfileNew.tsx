"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "lm-isidingo",
    label: "Lead Soapie Actor",
    subtitle: "Celebrated for his role as Ntando Sibeko on SABC 3's flagship soapie Isidingo."
  },
  {
    id: "lm-classical",
    label: "Drakensberg Choir Alumnus",
    subtitle: "Received rigorous classical piano and vocal training from a world-renowned choral academy."
  },
  {
    id: "lm-producer",
    label: "Media Entrepreneur",
    subtitle: "Co-host and Executive Producer of 'The Makhs' thriving YouTube & Podcast network."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "creative-biz",
    number: "Theme 01",
    title: "Creative Entrepreneurship.",
    copy: "Building sustainable business models in music, film, and digital media in the modern era."
  },
  {
    id: "wellness-creatives",
    number: "Theme 02",
    title: "Workplace Wellness & Resilience.",
    copy: "Sharing tools to overcome professional dark days, manage provider anxiety, and lead with empathy."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Lerato Makhetha is a distinguished South African artist, renowned for his multifaceted talents as a film and stage actor, music, and television producer. Widely recognized for his compelling portrayal of Ntando Sibeko on the acclaimed SABC 3 Soapie, Isidingo, Lerato has garnered acclaim both locally and internationally for his contributions to the arts and entertainment industry.",
  "Born in the vibrant township of Soweto and honing his skills in the cultural melting pot of New York before returning to Johannesburg, Lerato’s artistic journey began early in life. At the age of 10, he secured a coveted spot at the esteemed Drakensberg Boys’ Choir School, where he received rigorous classical training in piano and vocal performance, laying the foundation for his future success. He continued his education at the National School of the Arts.",
  "With over two decades of experience in the music industry, Lerato has evolved into a seasoned pianist, music producer, and collaborator with renowned artists such as HHP, Tuks Sengaga, JR, Unathi Msengana, and Kabomo. In addition to his musical prowess, Lerato has featured in Netflix, Showmax, and Mzansi films including Real Estate Sisters, A Safe Bet, and Baby Mamas.",
  "Embracing the digital era, Lerato has successfully expanded his brand into the online space with The Makhs, a thriving YouTube and Podcast platform that engages audiences globally. As a devoted family man and role model, he inspires aspiring creatives to build excellence, resilience, and multi-dimensional careers.",
  "Book Lerato Makhetha through The Speakers Firm, A Leading African Speakers Bureau, to bring inspirational keynote addresses, creative entrepreneurship panels, and authentic storytelling sessions to your next summit or event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "isidingo", name: "SABC ISIDINGO" },
  { id: "themakhs", name: "THE MAKHS PODCAST" },
  { id: "universal", name: "UNIVERSAL MUSIC" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "makhetha-art-1",
      headline: "Lerato, Jerry Mofokeng wa Makhetha to play father and son on ‘Isibopho’",
      publication: "TimesLive",
      date: "2022",
      action: "Read Report",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2022-07-11-lerato-jerry-mofokeng-wa-makhetha-to-play-father-and-son-on-isibopho/",
      image: "/speakers/Lerato Makhetha/Lerato-Makhetha-The-Speakers-Firm-3.jpg"
    },
    {
      id: "makhetha-art-2",
      headline: "Lerato Makhetha on his big break on Isidingo",
      publication: "News24 / DRUM",
      date: "2018",
      action: "Read Interview",
      url: "https://www.news24.com/drum/celebs/i-am-my-dads-son-i-think-hes-amazing-lerato-makhetha-speaks-about-his-relationship-with-his-father-and-life-as-an-actor-20180921/",
      image: "/speakers/Lerato Makhetha/Lerato-Makhetha-The-Speakers-Firm-4.jpg"
    },
    {
      id: "makhetha-art-3",
      headline: "Lerato Makhetha's dark days: I felt like I was failing as a man & provider",
      publication: "TimesLive",
      date: "2018",
      action: "Read Column",
      url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2018-07-20-lerato-makhethas-dark-days-i-felt-like-i-was-failing-as-a-man--provider/",
      image: "/speakers/Lerato Makhetha/Lerato-Makhetha-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "makhetha-vid-1",
      label: "Lerato Makhetha on Creative Resilience & Building The Makhs",
      youtubeId: "SkoIEgMrKk4"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Lerato Makhetha"
      speakerTitle=""
      speakerDesignation="Versatile Artist, Media Personality & Producer"
      speakerRole="Co-host of 'The Makhs' & Creative Entrepreneur"
      speakerRef="TSF-LM-42"
      heroBackgroundImage="/speakers/Lerato Makhetha/Lerato-Makhetha-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Lerato Makhetha/Lerato-Makhetha-7.jpg"
      bioHook="“Harnessing creative storytelling, digital innovation, and family values to inspire the next generation of creative entrepreneurs.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="lerato-makhetha" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="lerato-makhetha" 
        customIntroText="Creative industry panel moderations, mental wellness discussions, and digital strategy workshops led by Lerato Makhetha."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
