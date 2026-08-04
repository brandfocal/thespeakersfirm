"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "africa-open-for-business",
    number: "Theme 01",
    title: "Africa Bounces Back & Open for Business",
    copy: "Addresses the geopolitical opportunities, economic integration, trade developments, and cross-border commercial dynamics defining the African continent. Unpacks how governments and corporations navigate post-crisis growth."
  },
  {
    id: "shareholder-activism-citizenship",
    number: "Theme 02",
    title: "Shareholder Activism, Corporate Governance & Ethical Regeneration",
    copy: "Keynotes highlighting active citizenship, ethical corporate structures, and public accountability. Focuses on bridging corporate investments with local community development and regional trade alignments."
  }
];

const TICKER_LOGOS = [
  "CNBC AFRICA", "POWER FM", "UNIVERSITY OF LIMPOPO", "PPC LTD", "ERNST & YOUNG", "WITS GRADUATE", "DAILY MAVERICK", "BUSINESS LIVE", "PAN MACMILLAN"
];

const FULL_BIO_PARAGRAPHS = [
  "Victor Kgomoeswana is a dynamic conference speaker, programme director, workshop facilitator and consultant on African business development.",
  "Victor is the author of “Africa is Open for Business” and “Africa Bounces Back,” and is a presenter on CNBC Africa and Power FM. Victor has facilitated various conferences and events including the annual Black Management Forum, the Annual Audit Committee Conference by Nkonki Inc, the National Treasury’s Financial Management Improvement III workshop, as well as the congratulatory dinners held by the ABSIP. He organised and led a trade conference on regional economic integration in East Africa with the Rwanda Development Board and the South African High Commission in Kigali. Until September 2013, he was Business Development Executive for PPC Ltd, and his role was to seek for investment opportunities across the African continent.",
  "In addition, Victor originated mergers and acquisitions transactions through discussions with governments, investors, company owners to establish good relations. He also served the Chief Executive Officer of PPC Ntsika Fund (Pty) Ltd until January 2014, the enterprise development initiative of PPC Ltd, set up to support black small and medium enterprises with finance, mentoring, coaching and other forms of support. Before PPC, he was Associate Director at Ernst & Young’s Africa Business Centre, a position he held since October 2009. He led the team that put together the database behind the firm’s Africa Interactive and Growing Beyond Borders – both tools are industry firsts among the big four firms globally."
];

const CREDENTIAL_BADGES = [
  {
    id: "african-business-specialist",
    label: "African Business Specialist",
    subtitle: "Acclaimed expert on economic integration, cross-border M&A, and trade development."
  },
  {
    id: "marketing-executive-director",
    label: "UL Marketing & Comm Executive Director",
    subtitle: "Appointed to lead marketing, communications, and institutional branding for the University of Limpopo."
  }
];

const BOOKS = [
  {
    id: "africa-bounces-back",
    title: "Africa Bounces Back",
    description: "Victor Kgomoeswana outlines key post-pandemic and Covid-19 lessons for and from Africa, focusing on business resilience, digital transformation, and regional trade assets.",
    coverImage: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-Africa-Bounces-Back.jpg",
    url: "https://www.panmacmillan.co.za/authors/victor-kgomoeswana/africa-bounces-back/9781770107625"
  },
  {
    id: "africa-open-business",
    title: "Africa is Open for Business",
    description: "His landmark book showcasing the African continent as a premier location of investment opportunity, commercial growth, and entrepreneurial vitality.",
    coverImage: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-Africa-Is-Open-For-Business.jpg",
    url: "https://www.panmacmillan.co.za/authors/victor-kgomoeswana/africa-is-open-for-business/9781770104464"
  }
];

const GALLERY_IMAGES = [
  {
    id: "vk-gal-1",
    src: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-3.jpg",
    alt: "Victor Kgomoeswana broadcasting",
    caption: "Victor presenting live on CNBC Africa",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "vk-gal-2",
    src: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-4.jpg",
    alt: "Victor Kgomoeswana keynote address",
    caption: "Addressing business delegates at regional M&A summits",
    className: ""
  },
  {
    id: "vk-gal-3",
    src: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-6.jpg",
    alt: "Victor on panel",
    caption: "Facilitating black industrialist discussions",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "vk-vid-1",
    label: "Victor Kgomoeswana: Africa Open For Business Highlights",
    youtubeId: "Rb3hNr7bOGM"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "vk-med-1",
    headline: "VICTOR KGOMOESWANA: Does Barloworld deal provide lesson in shareholder activism?",
    publication: "Business Day / Business Live",
    date: "03 Apr 2025",
    action: "Read Opinion",
    url: "https://www.businesslive.co.za/bd/opinion/2025-04-03-victor-kgomoeswana-does-barloworld-deal-provide-lesson-in-shareholder-activism/",
    image: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm.jpg"
  },
  {
    id: "vk-med-2",
    headline: "Eight Covid-19 lessons for – and from – Africa, from Victor Kgomoeswana’s new book, Africa Bounces Back",
    publication: "Daily Maverick",
    date: "05 Jul 2021",
    action: "Read Book Analysis",
    url: "https://www.dailymaverick.co.za/article/2021-07-05-eight-covid-19-lessons-for-and-from-africa-from-victor-kgomoeswanas-new-book-africa-bounces-back/",
    image: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-9.jpg"
  },
  {
    id: "vk-med-3",
    headline: "University of Limpopo appoints Victor Kgomoeswana as its Marketing and Communication Executive Director",
    publication: "University of Limpopo",
    date: "01 Nov 2021",
    action: "Read News Article",
    url: "https://staging.ul.ac.za/university-of-limpopo-appoints-victor-kgomoeswana-as-its-marketing-and-communication-executive-director/",
    image: "/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Victor Kgomoeswana"
        speakerTitle=""
        speakerDesignation="Africa Business Specialist. Author. Broadcaster. Conference Moderator."
        speakerRole="Advising C-suite headers and policymakers on regional trade corridors, industrial growth, and mergers."
        speakerRef="TSF-VK-01"
        heroBackgroundImage="/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-8.jpg"
        biographyImage="/speakers/Victor Kgomoeswana/Victor-Kgomoeswana-The-Speakers-Firm-6.jpg"
        bioHook="“Africa is not just rising—Africa is open for business and bouncing back with strategic innovation.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        books={BOOKS}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="victor-kgomoeswana" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="victor-kgomoeswana"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Victor's broadcast episodes, regional investment missions, and corporate facilitation."
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
