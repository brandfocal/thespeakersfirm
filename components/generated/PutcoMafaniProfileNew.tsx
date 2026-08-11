"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "professional-radio-20",
    label: "20+ Years Radio & TV Broadcaster",
    subtitle: "Presented on Umhlobo Wenene FM, Channel Africa, Kaya FM, CKI FM, and SABC."
  },
  {
    id: "sports-marketer-kc",
    label: "Kaizer Chiefs Sports Marketer",
    subtitle: "Over a decade of football sponsorship, public relations, and supporters mass communication."
  },
  {
    id: "crowd-control-eps",
    label: "Ellis Park Crowd Control Advocate",
    subtitle: "Played a key role in crowd management during the 2001 Ellis Park disaster."
  },
  {
    id: "fifa-world-cup-host",
    label: "FIFA World Cup Event Host",
    subtitle: "Anchored matches and corporate functions at the 2010 FIFA World Cup."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "mass-comm-pr",
    number: "Theme 01",
    title: "Mass Communications & Public Relations",
    copy: "Fostering community loyalty and corporate relationships through clubs, digital publishing, and traditional media."
  },
  {
    id: "sports-sponsorship-marketing",
    number: "Theme 02",
    title: "Sports Sponsorships & Marketing",
    copy: "Managing strategic commercial activations, sponsorships, and logistics for international brands."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Putco Mafani has nearly 20 year’s experience as Professional Radio & TV Broadcaster. Putco Mafani has nearly 20 year’s experience as Professional Radio & TV Broadcaster, including but not limited to: Radio Digital Editing, Productions and live Broadcasting – Umhlobo Wenene FM, Channel Africa, Kaya FM & CKI FM | Live TV Presenter for SABC Topsport, Xhosa TV News, Lifestyle Magazine programmes, etc | Years of Football experience as sports marketer , sponsorships and public relations: 10 | Mass Communications with KC supporters through club website management, Club Magazine, Hotline, club events (home games), newsletters, trade and exhibitions, road shows and mass meetings and traditional media | Events Management, conceptualization, MC services, strategy and implementation | Sponsorships and other commercial joint ventures (strategic, activation and implementation) | Sponsorship Activations with Reebok SA managing the Kaizer Chiefs account.",
  "Played a key role in controlling crowds at the Ellis Park stadium, during the EPS disaster of 2001, thanks to live Radio & TV experience. Putco has also anchored several High Profile events such as: Nelson Mandela Children’s Hospital Fund Raising Event, featuring international friendly matches of the Boks, Bafana • Bafana and the Bafana Legends plus an international concert all in one day – FNB Stadium 2013 | AFCON Cup Official Opening and Closing Events 2013 | Various International Music festival Shows 1994 – 2014 | Various COEGA Investment functions and sod turning ceremonies 2011/12 | Conducted Football Marketing & Public Relations workshops for all Premier League of Swaziland (PLS) clubs in Mbabane, 2011/12 | 2010 FIFA World Cup games in Nelson Mandela Bay/ Port Elizabeth."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "umhlobo-wenene", name: "UMHLOBO WENENE FM" },
  { id: "kaya-fm-logo", name: "KAYA FM" },
  { id: "kaizer-chiefs", name: "KAIZER CHIEFS FC" },
  { id: "sabc-sport", name: "SABC SPORT" }
];

const customMedia = [
  {
    id: "putco-art-1",
    headline: "Putco Mafani pays tribute to Dumile Mateza, a ‘straight talker and a walking encyclopedia for sports’",
    publication: "News24 (Drum)",
    date: "03 Feb 2022",
    url: "https://www.news24.com/drum/celebs/news/putco-mafani-pays-tribute-to-dumile-mateza-a-straight-talker-and-a-walking-encyclopedia-for-sports-20220203",
    action: "Read Tribute",
    image: "/speakers/Putco Mafani/Putco-Mafani-The-Speakers-Firm-4.jpg"
  },
  {
    id: "putco-art-2",
    headline: "The Price and Prize of Greatness – Putco Mafani",
    publication: "Polity.org.za",
    date: "27 Oct 2020",
    url: "https://www.polity.org.za/article/the-price-and-prize-of-greatness-putco-mafani-2020-10-27",
    action: "Read Article",
    image: "/speakers/Putco Mafani/Putco-Mafani-The-Speakers-Firm-8.jpg"
  },
  {
    id: "putco-art-3",
    headline: "At home with Putco Mafani",
    publication: "News24 (Drum)",
    date: "28 Jul 2017",
    url: "https://www.news24.com/drum/news/at-home-with-putco-mafani-20170728",
    action: "Read Profile",
    image: "/speakers/Putco Mafani/Putco-Mafani-The-Speakers-Firm-10.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Putco Mafani"
      speakerTitle=""
      speakerDesignation="Radio Broadcaster & Motivational Speaker"
      speakerRole="Two decades of professional radio, TV broadcasting, and sports marketing."
      speakerRef="TSF-PM-04"
      heroBackgroundImage="/speakers/Putco Mafani/Putco-Mafani-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Putco Mafani/Putco-Mafani-The-Speakers-Firm-7.jpg"
      bioHook="“Delivering high-profile corporate MC services, sports public relations, and mass communications.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "putco-book-1",
          title: "The Price and Prize of Greatness",
          description: "From humble beginnings in Bhofolo in the Eastern Cape, Putco Mafani has become a household name in South Africa.",
          coverImage: "/speakers/Putco Mafani/The-Price-of-Greatness-Putco-Mafani.jpg",
          url: "https://booksafrica.co.za/product/putco-mafani-the-price-and-prize-of-greatness/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="putco-mafani" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="putco-mafani" 
        customIntroText="Snapshots from Putco Mafani's radio broadcasts, stadium management engagements, and sports conferences."
        customGallery={[]}
        customVideos={[
          {
            id: "putco-video-1",
            label: "Putco Mafani Presentation Reel",
            youtubeId: "hoYmZct9FEc"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
