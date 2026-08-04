"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "winning-teams-theme",
    number: "Theme 01",
    title: "Building and Leading Winning Teams",
    copy: "Drawing from elite sports leadership, this session deconstructs the mechanics of team synergy, deep trust, and maintaining peak focus under high-stakes environments. It translates the rules of the dressing room into corporate strategy, helping C-suite leaders align teams to a shared championship goal."
  },
  {
    id: "resilience-turnaround-theme",
    number: "Theme 02",
    title: "Resilience & Boardroom Turnarounds under Pressure",
    copy: "Insights on how to navigate critical setbacks, manage organizational turnarounds, and rebuild confidence when facing structural or performance crises. Provides actionable frameworks for leadership continuity, mental fortitude, and executing strategies with conviction during turbulent times."
  }
];

const TICKER_LOGOS = [
  "SAFA", "KAIZER CHIEFS", "BAFANA BAFANA", "PENGUIN RANDOM HOUSE", "IOL SPORT", "SOWETAN", "THE HERALD", "ABSA", "MTN"
];

const FULL_BIO_PARAGRAPHS = [
  "Neil Tovey stands as a monumental figure in South African soccer, renowned for his exceptional leadership, tactical acumen, and defensive prowess. As the captain of Bafana Bafana, he etched his name in history by leading the national team to victory in the 1996 African Cup of Nations. This triumph not only marked a golden era for South African soccer but also unified a nation through sport.",
  "Tovey’s illustrious club career, primarily with Kaizer Chiefs, showcased his resilience, intelligence, and unparalleled work ethic, making him a fan favorite and earning him respect across the soccer community. His tenure at Chiefs was characterised by numerous accolades and his reputation as a stalwart of the defence.",
  "After hanging up his boots, Tovey continued his commitment to soccer, transitioning into coaching and administrative roles. As South African Football Association’s Technical Director, he played a vital role in shaping the future of South African football by mentoring emerging talent and enhancing the game’s development across the country.",
  "Neil Tovey’s enduring legacy serves as an inspiration to players and fans alike. His story is one of determination, leadership, and a deep passion for the beautiful game, making him a highly sought-after speaker and a beloved figure in the world of sports."
];

const CREDENTIAL_BADGES = [
  {
    id: "afcon-champion-captain",
    label: "1996 AFCON Champion Captain",
    subtitle: "Led Bafana Bafana to historic African Cup of Nations glory."
  },
  {
    id: "safa-technical-director",
    label: "Former SAFA Technical Director",
    subtitle: "Designed and executed national youth development blueprints."
  }
];

const BOOKS = [
  {
    id: "captains-journey",
    title: "A Captain's Journey",
    description: "Neil Tovey's autobiography tells the story of his life and career in South African football, leading the nation to historic Cup of Nations glory.",
    coverImage: "/speakers/Neil Tovey/A-Captains-Journey-Neil-Tovey.jpg",
    url: "https://www.penguinrandomhouse.co.za/book/captains-journey/9781776094035"
  }
];

const GALLERY_IMAGES = [
  {
    id: "nt-gal-1",
    src: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-7.jpg",
    alt: "Neil Tovey on the pitch",
    caption: "Neil Tovey on the pitch celebrating victory",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "nt-gal-2",
    src: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-6.jpg",
    alt: "Neil Tovey holding trophy",
    caption: "With the 1996 AFCON trophy",
    className: ""
  },
  {
    id: "nt-gal-3",
    src: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-3.jpg",
    alt: "Neil Tovey in studio",
    caption: "Football analysis and media commentary",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "nt-vid-1",
    label: "Neil Tovey: A Captain's Journey Feature",
    youtubeId: "3daBmZH0J_Q"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "nt-med-1",
    headline: "WATCH: Kaizer Chiefs legend Neil Tovey explains what’s been holding the club back in recent years",
    publication: "IOL Sport",
    date: "07 Nov 2024",
    action: "Watch Interview",
    url: "https://iol.co.za/sport/soccer/psl/2024-11-07-watch-kaizer-chiefs-legend-neil-tovey-explains-whats-been-holding-the-club-back-in-recent-years/",
    image: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-4.jpg"
  },
  {
    id: "nt-med-2",
    headline: "Life and times of soccer great Neil Tovey",
    publication: "The Herald",
    date: "17 May 2019",
    action: "Read Article",
    url: "https://www.theherald.co.za/sport/2019-05-17-life-and-times-of-soccer-great-neil-tovey/",
    image: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-5.jpg"
  },
  {
    id: "nt-med-3",
    headline: "Neil Tovey, Class of '96 still the greatest",
    publication: "Sowetan Live",
    date: "12 Jul 2019",
    action: "Read Article",
    url: "https://www.sowetanlive.co.za/good-life/2019-07-12-neil-tovey-class-of-96-still-the-greatest/",
    image: "/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-2.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Neil Tovey"
        speakerTitle="Captain"
        speakerDesignation="Bafana Bafana Captain. Soccer Legend. Leadership Authority."
        speakerRole="Unifying organizations and building resilient, elite-performance team cultures."
        speakerRef="TSF-NT-01"
        heroBackgroundImage="/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm-8.jpg"
        biographyImage="/speakers/Neil Tovey/Neil-Tovey-The-Speakers-Firm.jpg"
        bioHook="“Elite performance is about consistency, resilience, and courageous team leadership.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        books={BOOKS}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="neil-tovey" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="neil-tovey"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Neil's historic 1996 AFCON victory, media coaching, and national football leadership."
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
