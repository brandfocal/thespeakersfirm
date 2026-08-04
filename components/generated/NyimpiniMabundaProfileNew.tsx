"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "boardroom-strategy-turnaround",
    number: "Theme 01",
    title: "Corporate Turnaround & Value Creation",
    copy: "Practical insights on strategy development, business turnarounds, marketing, digital transformation, and executing under high-stakes multinational pressure. Shares leadership keys from managing blue-chip portfolios across Diageo, Vodacom, and General Electric."
  },
  {
    id: "leadership-governance-stakeholder",
    number: "Theme 02",
    title: "C-Suite Stewardship, Governance & Transnational Politics",
    copy: "Addresses the interface of corporate policy, public sector relations, and international commercial corridors. Explains governance, stakeholder management, and building inclusive, high-performance corporate entities."
  }
];

const TICKER_LOGOS = [
  "GENERAL ELECTRIC", "SCHINDLER LIFTS", "VODAFONE", "DIAGEO", "BOSTON CONSULTING GROUP", "UCT GSB MBA", "STANFORD BUSINESS JUDGE", "US-SA BUSINESS COUNCIL"
];

const FULL_BIO_PARAGRAPHS = [
  "Nyimpini Mabunda is the former CEO for Southern Africa at General Electric and Chairman of Schindler Lifts South Africa. He has 25+ years background leading major consumer goods, food franchise, and telecoms businesses across Africa and the United Kingdom.",
  "Prior to joining GE, he fulfilled roles at the Country/Divisional CEO level for two major multinational businesses – Vodafone/ Vodacom and Diageo.",
  "Nyimpini’s expertise in strategy, marketing, sales, digital transformation, data analytics, business turnaround, private equity, stakeholder management, and market development define him as a well-rounded leader who has an impressive track record of driving results and talent development.",
  "Nyimpini is a recognized industry leader who sits on a few external boards as non-executive director and chairman. He is also a former senior advisor for Boston Consulting Group (BCG) where he assisted the partners to build the business in Technology, Media, and Telecom (TMT) and Consumer Good Practices across sub-Saharan Africa. Nyimpini who holds an MBA from the University of Cape Town is a regular speaker and panelist at industry events, some highlights include his role as a judge and panelist at the Stanford University’s Africa Business Forum start up initiative, emcee at the official Nelson Mandela Memorial in Uganda, and moderator at the ILLA Africa lawmakers conference.",
  "More recently Nyimpini was appointed Chair of U.S. Chamber’s U.S.-South Africa Business Council, the premier Washington-based business organization dedicated to the economic relationship between the United States and South Africa. The Council represents America’s leading companies doing business with South Africa, and it is comprised of senior executives of U.S. companies from every sector investing in South Africa."
];

const CREDENTIAL_BADGES = [
  {
    id: "former-ge-ceo-sa",
    label: "Former GE Southern Africa CEO",
    subtitle: "Steered industrial growth, power, healthcare, and renewable energy strategies."
  },
  {
    id: "schindler-lifts-chairman",
    label: "Chairman of Schindler Lifts SA",
    subtitle: "Strategic board governance and executive commercial advisory."
  }
];

const BOOKS = [
  {
    id: "take-charge",
    title: "Take Charge",
    description: "Join Nyimpini Mabunda on his journey from his childhood in an apartheid-era homeland to the CEO’s office at one of the world’s leading businesses. A practical guide to leadership.",
    coverImage: "/speakers/Nyimpini Mabunda/Take-Charge-by-Nyimpini-Mabunda.jpg",
    url: "https://www.takealot.com/take-charge/PLID90450076"
  }
];

const GALLERY_IMAGES = [
  {
    id: "ym-gal-1",
    src: "/speakers/Nyimpini Mabunda/Nyimpini-Mabunda-1030x1030.jpg",
    alt: "Nyimpini Mabunda close portrait",
    caption: "Nyimpini Mabunda, Global Corporate Leader",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "ym-gal-2",
    src: "/speakers/Nyimpini Mabunda/Nyimpini-Mabunda-537x403.jpg",
    alt: "Nyimpini at event panel",
    caption: "Moderating policy and corporate growth discussions",
    className: ""
  },
  {
    id: "ym-gal-3",
    src: "/speakers/Nyimpini Mabunda/maxresdefault.jpg",
    alt: "Nyimpini Mabunda media capture",
    caption: "BCG Advisory and strategic briefings",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "ym-vid-1",
    label: "Nyimpini Mabunda: Take Charge Book Launch & Leadership Dialogue",
    youtubeId: "ztRmp4_TYVs"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "ym-med-1",
    headline: "Helping Others To Reach Their Full Potential",
    publication: "Top Empowerment (23rd Ed)",
    date: "25 May 2023",
    action: "Read Profile",
    url: "https://issuu.com/topcomedia/docs/top_empowerment_23rd_edition/s/46679929",
    image: "/speakers/Nyimpini Mabunda/Nyimpini-Mabunda-eimageOct21-127-New.jpg"
  },
  {
    id: "ym-med-2",
    headline: "Read an extract from ‘Take Charge’ by Nyimpini Mabunda",
    publication: "TimesLive / Sunday Times",
    date: "25 May 2022",
    action: "Read Extract",
    url: "https://www.timeslive.co.za/sunday-times/books/non-fiction/2022-05-25-read-an-extract-and-attend-the-launch-of-take-charge-by-nyimpini-mabunda/",
    image: "/speakers/Nyimpini Mabunda/Nyimpini-Mabunda-537x403.jpg"
  },
  {
    id: "ym-med-3",
    headline: "Nyimpini Mabunda Appointed CEO for General Electric in Southern Africa",
    publication: "Business Africa Online",
    date: "14 Oct 2020",
    action: "Read Announcement",
    url: "https://businessafricaonline.com/nyimpini-mabunda/",
    image: "/speakers/Nyimpini Mabunda/maxresdefault.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Nyimpini Mabunda"
        speakerTitle=""
        speakerDesignation="Boardroom Strategist. CEO. Author. Global Corporate Leader."
        speakerRole="Guiding organizations on boardroom turnarounds, commercial growth, and multinational execution."
        speakerRef="TSF-YM-01"
        heroBackgroundImage="/speakers/Nyimpini Mabunda/Nyimpini-Mabunda-1.jpg"
        biographyImage="/speakers/Nyimpini Mabunda/Nyimpini-Mabunda.jpeg"
        bioHook="“Hardwire strategy, manage risk, and take charge of your leadership journey.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        books={BOOKS}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="nyimpini-mabunda" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="nyimpini-mabunda"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Nyimpini's corporate summits, BCG advisory work, and Schindler lifts board sessions."
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
