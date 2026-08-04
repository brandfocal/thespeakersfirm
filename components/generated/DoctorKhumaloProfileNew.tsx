"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "elite-performance-theme",
    number: "Theme 01",
    title: "Elite Performance Psychology & Tactical Acumen",
    copy: "Keynotes focused on translating the intense mindset, focus, and strategic thinking of high-level soccer into actionable models for corporate teams. Underlines how to maintain composure, read the field, and make decisive moves under extreme market pressures."
  },
  {
    id: "sports-business-strategy",
    number: "Theme 02",
    title: "Translating Sports Excellence into Corporate Business Strategy",
    copy: "Bridging the worlds of professional athletics and corporate governance. Focuses on the role of structure, strong leadership, mentorship, and building winning teams that consistently perform at their highest potential."
  }
];

const TICKER_LOGOS = [
  "KAIZER CHIEFS", "BAFANA BAFANA", "COLUMBUS CREW", "FERRO CARRIL OESTE", "FIFA", "MZANSI MAGIC", "NEWS24", "DRUM"
];

const FULL_BIO_PARAGRAPHS = [
  "Doctor Khumalo is a former South African professional footballer. Popularly nicknamed Doctor for his tactical acumen, he was a renowned midfielder for Kaizer Chiefs and the South African national team.",
  "Khumalo went on to become a star player for Kaizer Chiefs and did not play for any other South African football club, only leaving them for short overseas playing periods – he signed with FIFA agent Marcelo Houseman who first took him to Argentinian club Ferro Carril Oeste for six months in 1995, while in 1996 and 1997 he played for the Columbus Crew of Major League Soccer.",
  "The high-point of Khumalo's football career was the 1990s; he was part of the Kaizer Chiefs teams that won three South African league championship titles and five knockout trophies and was also voted South African Footballer of the Year in 1992. During his career at the club, he played in a total of 397 league and cup games, scoring 75 goals.",
  "After the re-admission of South Africa to FIFA in 1992, Khumalo was selected to be a member of the South African squad for its first official international match in July of the same year, against Cameroon. South Africa won the match 1–0, due to a penalty scored by Khumalo. He was also a leading member of the winning South African national team at the 1996 African Nations Cup. He also represented South Africa in the 1998 Football World Cup. Throughout his whole international career, he played for South Africa 50 times (twice as captain), scoring nine goals making him the 13th most capped South African footballer.",
  "He retired in 2002 and then in 2004 as a player-coach. Although he was a winning co-coach (with Donald 'Ace' Khuse) of Kaizer Chiefs in the 2002–2003 season (guiding the club to a 12-game unbeaten record and earning themselves a joint Coach of the Month PSL award), Khumalo has stated that his aim is to become a football administrator. Since 2004, Khumalo served as a television football commentator and presenter, being named afterwards South African Under-17 national coach."
];

const CREDENTIAL_BADGES = [
  {
    id: "sa-soccer-legend",
    label: "South African Soccer Legend",
    subtitle: "Over 397 appearances and 75 goals for Kaizer Chiefs."
  },
  {
    id: "nations-cup-champion",
    label: "1996 African Nations Cup Champion",
    subtitle: "Core playmaker in Bafana Bafana's legendary continental triumph."
  }
];

const GALLERY_IMAGES = [
  {
    id: "dk-gal-1",
    src: "/speakers/Doctor Khumalo/Doctor-Khumalo-180512-Urges-G-1050.jpg",
    alt: "Doctor Khumalo addressing youth",
    caption: "Doctor Khumalo encouraging young football talent",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "dk-gal-2",
    src: "/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm-2.jpg",
    alt: "Doctor Khumalo pose",
    caption: "Representing Kaizer Chiefs and SA Football legacy",
    className: ""
  },
  {
    id: "dk-gal-3",
    src: "/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm-5.jpg",
    alt: "Doctor Khumalo in casual attire",
    caption: "Media host, commentator and advisory expert",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "dk-vid-1",
    label: "Doctor Khumalo: 16V Untold Documentary",
    youtubeId: "ZhVH6D4XBxc"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "dk-med-1",
    headline: "Kaizer Chiefs Return: Doctor Khumalo Makes A Comeback",
    publication: "ForeverYena Sports",
    date: "12 Oct 2024",
    action: "Read Article",
    url: "https://foreveryena.co.za/sports/kaizer-chiefs-return/",
    image: "/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm-6.jpg"
  },
  {
    id: "dk-med-2",
    headline: "‘No script, no lies, just me letting people into my life’ – Doctor Khumalo on his documentary series",
    publication: "Drum / News24",
    date: "03 Oct 2022",
    action: "Read Interview",
    url: "https://www.news24.com/drum/celebs/news/no-script-no-lies-just-me-letting-people-into-my-life-doctor-khumalo-on-his-documentary-series-20221003",
    image: "/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm-3.jpg"
  },
  {
    id: "dk-med-3",
    headline: "16V tells all: Part 1 | Doctor Khumalo: Untold | Ep 1 | Mzansi Magic",
    publication: "Mzansi Magic / YouTube",
    date: "15 Sep 2022",
    action: "Watch Preview",
    url: "https://www.youtube.com/watch?v=ZhVH6D4XBxc",
    image: "/speakers/Doctor Khumalo/drkhumalo.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Doctor Khumalo"
        speakerTitle="Doctor"
        speakerDesignation="Soccer Icon. Bafana Bafana Legend. Media Commentator."
        speakerRole="Translating elite athletic performance, strategy, and team focus into corporate success."
        speakerRef="TSF-DK-01"
        heroBackgroundImage="/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm-4.jpg"
        biographyImage="/speakers/Doctor Khumalo/Doctor-Khumalo-The-Speakers-Firm.jpg"
        bioHook="“Read the pitch, command the play, and build championship trust.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="doctor-khumalo" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="doctor-khumalo"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Moments from Doctor Khumalo's coaching career, documentary launch, and high-impact media commentary."
        />
      </SpeakerProfileTemplate>
    </>
  );
};

export const SpeakerFooter = () => {
  return null;
};

export const ProfileAdditionalSectionsOld = () => {
  return null;
};
