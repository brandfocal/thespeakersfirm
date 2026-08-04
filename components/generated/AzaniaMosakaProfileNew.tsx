"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "strategic-communications-advocacy",
    number: "Theme 01",
    title: "Strategic Communications & Global Advocacy",
    copy: "Keynotes on humanizing brands, building consumer resonance, and executing global campaigns. Draws from extensive partnerships with blue-chip brands (Discovery, Audi, Nedbank) and advocacy roles inside the United Nations (UNAIDS) to help leaders craft authentic narratives."
  },
  {
    id: "creative-entrepreneurship-innovation",
    number: "Theme 02",
    title: "Creative Entrepreneurship, Brand Scaling & Leadership",
    copy: "Unpacks the journey of scaling a business in Africa. Drawing from her leadership of MSLONDON Cosmetics—growing to R35m in sales with major retail partnerships like Woolworths—she outlines operational agility, marketing disruption, and scaling systems."
  }
];

const TICKER_LOGOS = [
  "METRO FM", "RADIO 702", "UNAIDS", "UNITED NATIONS", "MSLONDON COSMETICS", "WOOLWORTHS PARTNER", "PEO IMPACT GARDENS", "DISCOVERY BANK", "AUDI"
];

const FULL_BIO_PARAGRAPHS = [
  "From breaking barriers as the first woman to host a breakfast show on commercial radio to leading global advocacy campaigns at the United Nations, Azania Mosaka has redefined what it means to be a voice of influence in modern Africa. Her career, spanning more than two decades across broadcasting, journalism, entrepreneurship, and strategic communications, is a masterclass in versatility, authenticity, and excellence.",
  "An award-winning broadcaster, journalist, and communications strategist, Azania’s journey began at Metro FM, where she rose through the ranks to become the first woman to host the station’s flagship breakfast show. Her distinctive voice, incisive commentary, and ability to connect with audiences propelled Metro FM to record-breaking listenership and established her as one of South Africa’s most beloved media personalities.",
  "Her impact extends far beyond the airwaves. As a programme director, panel facilitator, and master of ceremonies, Azania has hosted presidential galas, chaired ministerial conferences, and anchored major national and corporate events. From moderating executive panels at the United Nations and African Union forums to facilitating dialogues with CEOs, policymakers, and global thought leaders, she commands every stage with intellect, warmth, and precision.",
  "Azania’s work in strategic communications and advocacy is equally influential. As part of the Influencing and Partnerships team at the United Nations Joint Programme on HIV/AIDS (UNAIDS), she has led global campaigns that have reached millions, amplified the voices of international advocates, and mobilised global attention around health equity, gender justice, and human rights. Her ability to build coalitions, design communication strategies, and lead advocacy movements underscores her global credibility as both strategist and storyteller.",
  "In the corporate arena, she has worked with leading blue-chip brands, including Discovery Bank, Audi, Eskom, Sasol, and Nedbank, developing and executing communication strategies that humanise brands, inspire internal cultures, and drive market resonance. Her strategic consulting and media training work continues to position executives and organisations as credible voices in complex industries.",
  "As an entrepreneur, Azania is the Managing Director of MSLONDON Cosmetics, a groundbreaking South African beauty brand that achieved R35 million in sales within four years, with retail partnerships in Woolworths and other national outlets. Her leadership in brand development, product strategy, and influencer engagement positioned MSLONDON as a case study in creative entrepreneurship and female-led innovation.",
  "Her commitment to social impact is equally profound. Through Peo Impact Gardens, the non-profit she founded, Azania champions education and nutrition by building sustainable school gardens in Soweto, a project that fuses environmental stewardship with community empowerment.",
  "Across every role, Azania’s unique combination of media excellence, strategic intelligence, and social consciousness has earned her numerous awards and recognitions in broadcasting, women’s leadership, and social impact. She continues to inspire a generation of women leaders to merge visibility with purpose, influence with integrity, and power with empathy."
];

const CREDENTIAL_BADGES = [
  {
    id: "un-advocacy-strategist",
    label: "UNAIDS Advocacy Strategist",
    subtitle: "Designed and directed global campaigns for UNAIDS, mobilizing action on health equity."
  },
  {
    id: "cosmetics-managing-director",
    label: "MD of MSLONDON Cosmetics",
    subtitle: "Built mineral makeup brand to R35 million in sales in 4 years."
  }
];

const GALLERY_IMAGES = [
  {
    id: "am-gal-1",
    src: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-15.jpg",
    alt: "Azania Mosaka hosting event",
    caption: "Azania hosting a high-level summit",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "am-gal-2",
    src: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-17.jpg",
    alt: "Azania Mosaka media portrait",
    caption: "Strategic Communications consultant and TV host",
    className: ""
  },
  {
    id: "am-gal-3",
    src: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-11.jpg",
    alt: "Azania Mosaka broadcasting",
    caption: "Live radio broadcast and panel discussion hosting",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "am-vid-1",
    label: "Azania Mosaka: Media & Leadership Influence Interview",
    youtubeId: "g0lzaLz6t0Y"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "am-med-1",
    headline: "Azania Mosaka: Heard by the heavens",
    publication: "Sowetan S-Mag",
    date: "27 Mar 2023",
    action: "Read Article",
    url: "https://www.sowetanlive.co.za/s-mag/fashion-beauty/2023-03-27-azania-mosaka-heard-by-the-heavens/",
    image: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-5.jpg"
  },
  {
    id: "am-med-2",
    headline: "Azania Mosaka graduates with distinction",
    publication: "Drum / News24",
    date: "11 Jul 2023",
    action: "Read News Article",
    url: "https://www.news24.com/drum/celebs/news/pics-azania-mosaka-graduates-with-distinction-20230711",
    image: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-13.jpg"
  },
  {
    id: "am-med-3",
    headline: "She Is Every Woman, From A to Z … The One And Only Azania Mosaka",
    publication: "Joburg.co.za",
    date: "10 Aug 2022",
    action: "Read Interview",
    url: "https://joburg.co.za/every-women-z-one-azania-mosaka/",
    image: "/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-10.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Azania Mosaka"
        speakerTitle=""
        speakerDesignation="Broadcaster. Moderator. Strategic Communications Expert. Entrepreneur."
        speakerRole="Facilitating dialogue that transforms perspectives, scaling creative brands, and executing global advocacy."
        speakerRef="TSF-AM-01"
        heroBackgroundImage="/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-14.jpg"
        biographyImage="/speakers/Azania Mosaka/Azania-Mosaka-The-Speakers-Firm-16.jpg"
        bioHook="“Merge visibility with purpose, influence with integrity, and power with empathy.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="azania-mosaka" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="azania-mosaka"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Moments from Azania's media career, MSLONDON Cosmetics expansion, and Peo Impact Gardens projects."
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
