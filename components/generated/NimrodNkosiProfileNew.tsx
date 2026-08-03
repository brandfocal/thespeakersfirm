import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { id: "lotto-man", label: "The Lotto Man", subtitle: "14 Years National Lottery Face" },
  { id: "multi-lingual", label: "Multi-Lingual Host", subtitle: "Fluent in 6 South African Languages" },
  { id: "ultimate-games", label: "Games Master", subtitle: "Corporate In-House Game Shows" },
  { id: "award-tv", label: "Award-Winning TV Host", subtitle: "Law, Love & Betrayal & Utatakho" }
];

const STRATEGIC_THEMES = [
  {
    id: "theme-1",
    number: "01",
    title: "Audience Motivation & Engagement Design",
    copy: "Applying performance design, scriptwriting, and energy projection to align large crowds and drive corporate activation success."
  },
  {
    id: "theme-2",
    number: "02",
    title: "Master of Ceremonies & Awards Gala Hosting",
    copy: "Delivering professional, high-vibe, and scandal-free event hosting across multicultural client tiers."
  },
  {
    id: "theme-3",
    number: "03",
    title: "Media Representation & Screen Performance",
    copy: "Mentoring young entertainers on character management, brand longevity, and media performance standards."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Nimrod Nkosi, one of South Africa’s most beloved entertainers and a masterful event host whose charisma, professionalism, and versatility have made him a household name. With a career spanning television, radio, and live events, Nimrod continues to set the gold standard for Master of Ceremonies, television presenting, and audience engagement.",
  "Fondly known as “The Lotto Man,” Nimrod captivated South Africans for over 14 years as the face and voice of the national lottery, a role that showcased not only his infectious energy but also his precision, warmth, and genuine connection with audiences. Beyond the spotlight, he contributed directly to the brand’s success through scriptwriting, audience motivation, and performance design, ensuring each production delivered excellence and excitement.",
  "Renowned for his dynamic style and impeccable professionalism, Nimrod has become a first-choice MC for corporate functions, awards ceremonies, team-building events, and private celebrations. His mastery of television and corporate in-house game shows has earned him the title of “The Ultimate Games Master,” with clients repeatedly booking him for his unmatched ability to bring energy, humour, and seamless flow to every occasion.",
  "Nimrod’s multi-lingual fluency, in English, isiZulu, isiXhosa, siSwati, Sesotho, and Tshivenda, allows him to connect authentically with South Africa’s richly diverse audiences, making him a true national treasure. His engaging yet tasteful comedic flair ensures that every event is memorable, uplifting, and inclusive.",
  "Known for his scandal-free reputation, Nimrod represents the highest standards of integrity and reliability in the entertainment industry. Feedback from clients consistently describes him as charismatic, articulate, professional, loyal, passionate, punctual, multi-talented, and humble, qualities that have cemented his place as one of the most respected and trusted personalities in South African entertainment.",
  "Book Nimrod Nkosi through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, for your next corporate event, awards gala, or brand activation, and experience an MC who delivers excellence, laughter, and connection with every audience he encounters."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "showmax", name: "SHOWMAX" },
  { id: "sabc", name: "SABC" },
  { id: "national-lottery", name: "NATIONAL LOTTERY" }
];

const customMedia = [
  {
    id: "nimrod-media-1",
    headline: "Nimrod Nkosi helms star-studded legal series, ‘Law, Love & Betrayal’",
    publication: "IOL / Sunday Tribune",
    date: "August 2024",
    url: "https://iol.co.za/sunday-tribune/entertainment/2024-08-08-nimrod-nkosi-helms-star-studded-legal-series-law-love--betrayal/",
    action: "Read Article",
    image: "/speakers/Nimrod%20Nkosi/nimrod-nkosi-the-speakers-firm-6.jpg"
  },
  {
    id: "nimrod-media-2",
    headline: "Grootman of the small screen, Nimrod Nkosi, back on our screens in a new role",
    publication: "News24 / Drum",
    date: "August 2024",
    url: "https://www.news24.com/drum/celebs/news/grootman-of-the-small-screen-nimrod-nkosi-back-on-our-screens-in-a-new-role-20240822",
    action: "Read Article",
    image: "/speakers/Nimrod%20Nkosi/Nimrod-Nkosi-The-Speakers-Firm.jpg"
  },
  {
    id: "nimrod-media-3",
    headline: "NIMROD NKOSI ADVISES YOUNG ENTERTAINERS",
    publication: "SNL24 / Daily Sun",
    date: "March 2019",
    url: "https://www.snl24.com/dailysun/News/Entertainment/nimrod-nkosi-advises-young-entertainers-20190319",
    action: "Read Article",
    image: "/speakers/Nimrod%20Nkosi/nimrod-nkosi-the-speakers-firm-3.jpg"
  }
];

const customGallery = [
  {
    id: "nimrod-gal-1",
    src: "/speakers/Nimrod%20Nkosi/Nimrod-Nkosi-The-Speakers-Firm-2.jpg",
    alt: "Nimrod Nkosi Portrait",
    caption: "Nimrod Nkosi",
    className: ""
  },
  {
    id: "nimrod-gal-2",
    src: "/speakers/Nimrod%20Nkosi/nimrod-nkosi-the-speakers-firm-5.jpg",
    alt: "Nimrod Nkosi Stage Hosting",
    caption: "Corporate Awards Host",
    className: ""
  },
  {
    id: "nimrod-gal-3",
    src: "/speakers/Nimrod%20Nkosi/nimrod-nkosi-the-speakers-firm-4.jpg",
    alt: "Nimrod Nkosi Game Show",
    caption: "The Ultimate Games Master Session",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Nimrod Nkosi"
      speakerTitle=""
      speakerDesignation="Television Presenter, Actor & Master of Ceremonies"
      speakerRole="South Africa's Beloved Event Host & Entertainer"
      speakerRef="TSF-NN-42"
      heroBackgroundImage="/speakers/Nimrod%20Nkosi/Nimrod-Nkosi-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Nimrod%20Nkosi/Nimrod-Nkosi-The-Speakers-Firm-2.jpg"
      bioHook="“Connecting authentically with diverse audiences is about delivering precision, precision, and genuine human warmth in every performance.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="nimrod-nkosi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="nimrod-nkosi" 
        customGallery={customGallery} 
        customVideos={[
          {
            id: "nimrod-video-1",
            label: "Nimrod Nkosi Presentation",
            youtubeId: "5dfN4vslFlM"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
