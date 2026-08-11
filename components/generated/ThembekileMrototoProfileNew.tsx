"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "newzroom-anchor-mrototo",
    label: "Newzroom Afrika Co-Anchor",
    subtitle: "Presented the primetime evening news network."
  },
  {
    id: "showmax-host",
    label: "Showmax Host: Unfollowed",
    subtitle: "Docu-series anchor exploring social media culture."
  },
  {
    id: "radio-breakfast-host",
    label: "947 Breakfast Presenter",
    subtitle: "Name on the hit radio show 'Anele and the Club'."
  },
  {
    id: "moderator-mrototo",
    label: "Event Host & Moderator",
    subtitle: "Facilitating corporate forums and leadership summits."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "modern-journalism-credibility",
    number: "Theme 01",
    title: "Modern Journalism & News Credibility",
    copy: "Navigating media consolidation, state news dynamics, and presenting verified information in a polarizing world."
  },
  {
    id: "cancel-culture-digital-rep",
    number: "Theme 02",
    title: "Social Media Culture & Public Accountability",
    copy: "Insights from the Showmax docu-series 'Unfollowed' exploring cancel culture, digital reputation, and accountability."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Thembekile Mrototo, one of South Africa’s most trusted and dynamic broadcast journalists, radio personalities, and television anchors. With an engaging presence and an unwavering commitment to truth, credibility, and clarity, Thembekile stands among the new generation of media professionals shaping how South Africans experience news and national dialogue.",
  "A leading voice in mainstream media, Thembekile is best known as a co-anchor of Newzroom Afrika’s primetime evening news programme alongside Cathy Mohlahlana, where he brings sharp analysis, composure, and journalistic integrity to national and global stories. His ability to balance gravitas with authenticity has earned him a loyal following and deep respect within the media industry.",
  "Before joining Newzroom Afrika, Thembekile was a familiar face on eNCA, where he anchored breaking news, political coverage, and live national events with precision and professionalism.",
  "On radio, he became a household name as part of 947’s hit breakfast show “Anele and the Club”, where his voice, insight, and versatility contributed to one of South Africa’s most successful radio formats. He also presented news on 702, covering late-night and overnight bulletins for nearly two years, demonstrating his consistent command of current affairs and his ability to inform and engage diverse audiences.",
  "Expanding his storytelling influence into digital media, Thembekile currently serves as the anchor for Showmax’s popular docu-series “Unfollowed”, a bold and thought-provoking exploration of social media culture, public accountability, and contemporary influence. This role showcases his ability to navigate complex cultural narratives and his continued evolution as a multimedia storyteller.",
  "A sought-after moderator, event host, and media facilitator, Thembekile brings composure, clarity, and charisma to every engagement. Whether moderating corporate forums, leadership summits, or live national broadcasts, he embodies professionalism and presence, ensuring every conversation is both insightful and impactful."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "newzroom-afrika", name: "NEWZROOM AFRIKA" },
  { id: "showmax", name: "SHOWMAX" },
  { id: "radio-947", name: "947 RADIO" },
  { id: "radio-702", name: "702 RADIO" }
];

const customMedia = [
  {
    id: "thembekile-art-1",
    headline: "Thembekile Mrototo to return to TV as the host of ‘The Big Debate’",
    publication: "Independent Online (IOL)",
    date: "25 Apr 2024",
    url: "https://iol.co.za/sunday-tribune/entertainment/2024-04-25-thembekile-mrototo-to-return-to-tv-as-the-host-of-the-big-debate/",
    action: "Read Article",
    image: "/speakers/Thembekile Mrototo/Thembekile-Mrototo-The-Speakers-Firm-2.jpg"
  },
  {
    id: "thembekile-art-2",
    headline: "Thembekile Mrototo Celebrates A Decade As A News Anchor",
    publication: "Youth Village",
    date: "06 Jun 2024",
    url: "https://youthvillage.co.za/2024/06/thembekile-mrototo-celebrates-a-decade-as-a-news-anchor/",
    action: "Read Article",
    image: "/speakers/Thembekile Mrototo/Thembekile-Mrototo-The-Speakers-Firm-5.jpg"
  },
  {
    id: "thembekile-art-3",
    headline: "Thembekile Mrototo Bids Newzroom Afrika Farewell",
    publication: "Youth Village",
    date: "24 Jan 2024",
    url: "https://youthvillage.co.za/2024/01/thembekile-mrototo-bids-newzroom-afrika-farewell/",
    action: "Read Article",
    image: "/speakers/Thembekile Mrototo/Thembekile-Mrototo-The-Speakers-Firm.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Thembekile Mrototo"
      speakerTitle=""
      speakerDesignation="Newzroom Afrika Co-Anchor, Showmax Host & Broadcaster"
      speakerRole="A trusted voice shaping South Africa's primetime news and national dialogue."
      speakerRef="TSF-TM-05"
      heroBackgroundImage="/speakers/Thembekile Mrototo/Thembekile-Mrototo-The-Speakers-Firm-13.jpg"
      biographyImage="/speakers/Thembekile Mrototo/Thembekile-Mrototo-The-Speakers-Firm-6.jpg"
      bioHook="“Bringing composure, sharp analysis, and absolute journalistic integrity to global stories.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="thembekile-mrototo" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="thembekile-mrototo" 
        customIntroText="Snapshots from Thembekile Mrototo's primetime TV broadcasts, radio shows, and moderating sessions."
        customGallery={[]}
        customVideos={[
          {
            id: "thembekile-video-1",
            label: "Thembekile Mrototo Interview Reel",
            youtubeId: "-5kgnEuKdss"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
