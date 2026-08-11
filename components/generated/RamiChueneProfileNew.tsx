"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "creative-artist-25",
    label: "25+ Years Performing Artist",
    subtitle: "Stellar career in television, film, and performing arts."
  },
  {
    id: "author-we-kissed",
    label: "Author of 'We Kissed the Sun'",
    subtitle: "Memoir tracing her artistic journey in SA showbiz."
  },
  {
    id: "foundation-founder",
    label: "Founder: Rami Chuene Foundation",
    subtitle: "Preserving heritage and supporting local communities."
  },
  {
    id: "netflix-star",
    label: "Netflix & Telenovela Star",
    subtitle: "Featured in 'How to Ruin Christmas' and 'The Queen'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "storytelling-heritage",
    number: "Theme 01",
    title: "Storytelling & Literary Heritage",
    copy: "Preserving local histories and translating classic novels (e.g. Es'kia Mphahlele's works) into indigenous languages like Sepedi."
  },
  {
    id: "community-philanthropy",
    number: "Theme 02",
    title: "Community Service & Philanthropy",
    copy: "Leveraging public platforms and foundations to build sustainable, high-impact community interventions."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Rami Chuene, one of South Africa’s most accomplished and versatile creative forces, a celebrated actress, singer, author, speaker, and philanthropist whose career spans more than 25 years of excellence in television, film, and the performing arts. With a commanding presence, emotional depth, and unwavering authenticity, Rami has become a symbol of resilience, creativity, and empowerment in South Africa’s entertainment landscape.",
  "Rami has graced some of the country’s most beloved productions, including iconic roles in The Queen, Muvhango, Scandal!, Backstage, and Giyani: Land of Blood. Her television work extends to acclaimed dramas such as Inkaba, Harvest, The Republic, Abomzala, It’s Complicated, Justice for All, and BET’s ISONO, as well as the international British-American series Strike Back. On film, she has delivered memorable performances in Life Above All and Hijack Stories, and continues to shine on global platforms through her roles in Netflix’s hit franchise, How to Ruin Christmas, including The Wedding, The Funeral, and The Baby Shower.",
  "Beyond the screen, Rami is a recording artist and author. Her music album, From Fear to Love, released in 2014, showcases her soulful voice and her ability to connect through storytelling in song. Her memoir, We Kissed the Sun and Embraced the Moon (2015), remains an inspiring testament to her personal and creative journey. Most recently, she translated Professor Es’kia Mphahlele’s novel Father Come Home into Sepedi, preserving and celebrating South African literary heritage.",
  "A passionate advocate for women’s empowerment and youth development, Rami uses her platform to inspire transformation and purpose. As a speaker, MC, and voice-over artist, she brings a rare combination of warmth, wit, and wisdom to corporate events, leadership forums, and social impact initiatives. Through the Rami Chuene Foundation, she continues to uplift communities, proving that her influence extends far beyond entertainment, it is anchored in service, empowerment, and impact."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "netflix", name: "NETFLIX" },
  { id: "sabc", name: "SABC" },
  { id: "multichoice", name: "MULTICHOICE" }
];

const customMedia = [
  {
    id: "rami-art-1",
    headline: "Rami Chuene In High Spirits As She Clocks 50 Years",
    publication: "GQ South Africa",
    date: "",
    url: "https://themediaonline.co.za/2018/08/rami-chuene-the-jazz-queen-of-sabc-radio/",
    action: "Read Article",
    image: "/speakers/Rami Chuene/Rami-Chuene-The-Speakers-Firm-7.jpg"
  },
  {
    id: "rami-art-2",
    headline: "Rami Chuene: The jazz queen of SABC radio",
    publication: "The Media Online",
    date: "",
    url: "https://themediaonline.co.za/2018/08/rami-chuene-the-jazz-queen-of-sabc-radio/",
    action: "Read Article",
    image: "/speakers/Rami Chuene/si-judith-939.jpg"
  },
  {
    id: "rami-art-3",
    headline: "Actress Rami Chuene ready to wow on The Queen",
    publication: "TimesLIVE",
    date: "",
    url: "https://www.timeslive.co.za/tshisa-live/tshisa-live/2017-07-25-rami-chuene-ready-to-wow-on-the-queen/",
    action: "Read Article",
    image: "/speakers/Rami Chuene/rami-the-queen.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Rami Chuene"
      speakerTitle=""
      speakerDesignation="Actress, Author, Speaker & Philanthropist"
      speakerRole="Empowering communities and celebrating African storytelling."
      speakerRef="TSF-RC-01"
      heroBackgroundImage="/speakers/Rami Chuene/Rami-Chuene-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/Rami Chuene/Rami-Chuene-The-Speakers-Firm-4.jpg"
      bioHook="“Celebrating a 25-year legacy of television, literature, and social impact.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "rami-book-1",
          title: "We Kissed the Sun and Embraced the Moon",
          description: "A memoir tracing her personal, artistic, and creative journey in South African showbiz.",
          coverImage: "/speakers/Rami Chuene/We-Kissed-the-Sun-and-Embraced-the-Moon-Rami-Chuene.jpg",
          url: "https://bulabuka.co.za/books/we-kissed-the-sun-and-embraced-the-moon/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="rami-chuene" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="rami-chuene" 
        customIntroText="Snapshots from Rami Chuene's book signings, TV productions, and foundation engagements."
        customGallery={[]}
        customVideos={[
          {
            id: "rami-video-1",
            label: "Rami Chuene Presentation Reel",
            youtubeId: "PBQ4x2-xUcE"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
