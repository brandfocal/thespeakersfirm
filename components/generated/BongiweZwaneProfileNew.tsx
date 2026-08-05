"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "menell-fellow",
    label: "Menell Media Fellow",
    subtitle: "Duke University Menell Media Fellowship recipient for journalism excellence."
  },
  {
    id: "mipad-100",
    label: "MIPAD 100 Under 40",
    subtitle: "Recognised among the 100 Most Influential People of African Descent."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "media-democracy",
    number: "Theme 01",
    title: "Media's Role in Democracy.",
    copy: "Thought-provoking insights on news credibility, public interest broadcasting, and media's role in building and protecting democratic institutions."
  },
  {
    id: "editorial-leadership",
    number: "Theme 02",
    title: "Editorial Leadership & Media Strategy.",
    copy: "Blueprints for managing complex newsrooms, ensuring journalistic integrity, and steering editorial direction in a volatile digital landscape."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Bongiwe Zwane, a seasoned journalist, broadcaster, and media leader whose voice has shaped South Africa’s news landscape for over 15 years. Known for her sharp intellect, composure, and journalistic integrity, Bongiwe stands among the most respected figures in South African current affairs broadcasting, a trusted storyteller committed to truth, context, and nation building.",
  "Bongiwe currently anchors SABC’s prime time news programme “The Full View” and SABC 1’s flagship current affairs show “Asikhulume, Let’s Talk,” where she leads in depth discussions that bring clarity and perspective to the issues shaping South Africa’s social, political, and economic future. She also hosts SAfm’s “Weekend View” on Sunday mornings, offering audiences thoughtful analysis, engaging interviews, and balanced commentary on national and global developments.",
  "Her journalism journey has spanned some of the country’s most defining moments. As a Field Reporter at eNCA, Bongiwe covered major national stories including the Marikana Massacre, the passing of former President Nelson Mandela, and several pivotal chapters in South Africa’s democratic history. Her credibility and courage in the field established her as a trusted voice during times of great national significance.",
  "Beyond the newsroom, Bongiwe has excelled in editorial leadership, having served as both Input Editor and Managing Editor at Newzroom Afrika, where she played a vital role in shaping editorial direction, managing teams, and ensuring journalistic excellence. Her career reflects a rare blend of on air presence and behind the scenes strategy, earning her respect as both a leader and practitioner in modern media."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "sabc", name: "SABC NEWS" },
  { id: "safm", name: "SAFM" },
  { id: "newzroom", name: "NEWZROOM AFRIKA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "bongiwe-art-1",
      headline: "Marikana massacre: 10 years on and we still don't know who gave the order to shoot",
      publication: "News24",
      date: "11 Aug 2022",
      action: "Read Opinion",
      url: "https://www.news24.com/opinions/fridaybriefing/bongiwe-zwane-marikana-massacre-10-years-on-and-we-still-dont-know-who-gave-the-order-to-shoot-20220811",
      image: "/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-2.jpg"
    },
    {
      id: "bongiwe-art-2",
      headline: "SABC News' 2021 elections coverage with Bongiwe Zwane",
      publication: "SABC News",
      date: "03 Oct 2022",
      action: "Watch Coverage",
      url: "https://www.youtube.com/watch?v=V-bneYUWmF8",
      image: "/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-6.jpg"
    }
  ];

  const customGallery = [
    {
      id: "bongiwe-gal-1",
      src: "/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-3.jpg",
      alt: "Bongiwe Zwane broadcasting",
      caption: "Broadcasting live on SABC News",
      className: "sm:col-span-2 lg:col-span-2"
    },
    {
      id: "bongiwe-gal-2",
      src: "/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-4.jpg",
      alt: "Bongiwe Zwane editorial meeting",
      caption: "Leading editorial and content planning",
      className: ""
    },
    {
      id: "bongiwe-gal-3",
      src: "/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-5.jpg",
      alt: "Bongiwe Zwane speaking event",
      caption: "Facilitating leadership panel dialogue",
      className: ""
    }
  ];

  const customVideos = [
    {
      id: "bongiwe-vid-1",
      label: "Bongiwe Zwane - Broadcaster & Anchor Profile",
      youtubeId: "nn5lz3Edeyo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Bongiwe Zwane"
      speakerTitle=""
      speakerDesignation="News Anchor, Broadcaster & Media Leader"
      speakerRole="Prime time news anchor, editorial strategist, and Duke University Menell Media Fellow."
      speakerRef="TSF-BZ-02"
      heroBackgroundImage="/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm.jpg"
      biographyImage="/speakers/Bongiwe Zwane/Bongiwe-Zwane-The-Speakers-Firm-7.jpg"
      bioHook="“Journalistic integrity is about giving context to the truth and empowering nations to construct their own future.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="bongiwe-zwane" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="bongiwe-zwane" 
        customGallery={customGallery} 
        customIntroText="Broadcasting, facilitation and media leadership showcases by Bongiwe Zwane."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};
