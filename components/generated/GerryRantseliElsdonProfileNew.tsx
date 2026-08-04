"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "women-empowerment-advocacy",
    number: "Theme 01",
    title: "Women's Empowerment, Public Health & Global Advocacy",
    copy: "Keynotes centered on female-led corporate stewardship, social responsibility, and health wellness. Reflects on serving as National Tuberculosis Ambassador and addressing global agencies (UN, WHO, IFRC) on equity."
  },
  {
    id: "humanitarian-leadership-empathy",
    number: "Theme 02",
    title: "Humanitarian Leadership: Building Purpose-Driven Cultures",
    copy: "Focuses on leading corporate cultures with deep empathy, authentic storytelling, and community-driven action. Practical steps to align internal strategies with external societal values."
  }
];

const TICKER_LOGOS = [
  "M-NET", "BIG BROTHER AFRICA JUDGE", "UN AMBASSADOR", "UNAIDS SPEAKER", "WHO ADVOCATE", "IFRC GLOBAL LEADER", "ANN7 VUKA AFRICA", "EAST COAST RADIO", "AFTERNOON EXPRESS"
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Gerry Rantseli-Elsdon, an acclaimed TV Presenter, International Humanitarian, and Motivational Speaker, celebrated for her work in women’s empowerment, public health advocacy, and community transformation.",
  "Known for her iconic presence on M-Net and as a judge on Big Brother Africa, Gerry has transcended her television legacy to become one of Africa’s most respected voices in social impact, wellness, and humanitarian leadership.",
  "A passionate advocate for public health and wellbeing, Gerry serves as National Tuberculosis Ambassador for South Africa, driving awareness and change in global health discourse. She has represented the nation at the highest international platforms, delivering keynote addresses for the United Nations (UN), UNAIDS, UNCTAD, The World Health Organization (WHO), and the International Federation of the Red Cross (IFRC).",
  "Her powerful storytelling and commanding stage presence connect deeply with audiences, inspiring action, empathy, and social responsibility. Whether she’s addressing corporate leadership teams, women’s forums, or global conferences, Gerry blends compassion, conviction, and courage to ignite purpose-driven transformation.",
  "Her keynotes are perfect for year-end functions, leadership strategy sessions, and teambuilding retreats, bringing heart, humanity, and vision to every stage she graces."
];

const CREDENTIAL_BADGES = [
  {
    id: "national-tb-ambassador",
    label: "National Tuberculosis Ambassador",
    subtitle: "Appointed to lead national and international public health dialogues."
  },
  {
    id: "global-un-advocate",
    label: "Global UN & WHO Advocate",
    subtitle: "Represented South African development platforms at the United Nations in Geneva."
  }
];

const GALLERY_IMAGES = [
  {
    id: "gr-gal-1",
    src: "/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-third.jpg",
    alt: "Gerry Rantseli Elsdon hosting live",
    caption: "Gerry hosting major television panel award structures",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "gr-gal-2",
    src: "/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-4.jpg",
    alt: "Gerry close-up portrait",
    caption: "Media personality, global speaker and brand ambassador",
    className: ""
  },
  {
    id: "gr-gal-3",
    src: "/speakers/Gerry Rantseli Elsdon/gerryrantselielsdon-gallery-04.jpg",
    alt: "Gerry posing at event",
    caption: "Activist championing women's development programs",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "gr-vid-1",
    label: "Gerry Rantseli-Elsdon: International Broadcast Highlight",
    youtubeId: "iF8-Ajhsjgw"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "gr-med-1",
    headline: "Cooking with Gerry Rantseli-Elsdon",
    publication: "East Coast Radio (ECR)",
    date: "10 Dec 2024",
    action: "Read Recipes",
    url: "https://www.ecr.co.za/lifestyle/food/cooking-gerry-rantseli-elsdon/",
    image: "/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-8.jpg"
  },
  {
    id: "gr-med-2",
    headline: "Media personality and businesswoman Gerri Elsdon talks to us about the Fairlady Women of the Future Awards.",
    publication: "Afternoon Express",
    date: "12 Oct 2023",
    action: "Watch Interview",
    url: "https://afternoonexpress.co.za/guests/gerry-elsdon/835",
    image: "/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-7.jpg"
  },
  {
    id: "gr-med-3",
    headline: "Gerry Rantseli: Star feels beautiful inside and out.",
    publication: "The Herald Zimbabwe",
    date: "25 May 2022",
    action: "Read News Profile",
    url: "https://www.heraldonline.co.zw/gerry-rantseli-star-feels-beautiful-inside-and-out/",
    image: "/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Gerry Rantseli-Elsdon"
        speakerTitle=""
        speakerDesignation="TV Presenter. International Humanitarian. Motivational Speaker. Corporate MC."
        speakerRole="Inspiring high-performing teams to lead with empathy, strategic purpose, and social responsibility."
        speakerRef="TSF-GRE-01"
        heroBackgroundImage="/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-third.jpg"
        biographyImage="/speakers/Gerry Rantseli Elsdon/gerry-rantseli-elsdon-the-speakers-firm-4.jpg"
        bioHook="“Uncover your authentic voice to lead with compassion, clarity, and enduring impact.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="gerry-rantseli-elsdon" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="gerry-rantseli-elsdon"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Gerry's global humanitarian projects, M-Net broadcasts, and keynote events."
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
