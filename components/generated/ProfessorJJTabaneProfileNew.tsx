"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "phd-media",
    label: "PhD in Media Studies",
    subtitle: "Wits University academic degree."
  },
  {
    id: "prof-communications",
    label: "Professor of Communications",
    subtitle: "UNISA School of Business Leadership."
  },
  {
    id: "enca-anchor",
    label: "eNCA Anchor: Power to Truth",
    subtitle: "Fearless talk show host holding power to account."
  },
  {
    id: "gov-communicator",
    label: "Government Communicator of the Year",
    subtitle: "Inaugural joint winner of the prestigious award."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "brand-reputation-transparent",
    number: "Theme 01",
    title: "Leadership, Brand & Reputation",
    copy: "Managing media footprint, public relations, crisis management, and stakeholder engagement under highly transparent and weaponised environments."
  },
  {
    id: "ethical-comm-gov",
    number: "Theme 02",
    title: "Ethical Communication & Governance",
    copy: "Guiding boards and executive structures on ethical, accountable communication systems and democratic foresight."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Professor JJ Tabane, one of South Africa’s most fearless and influential voices in communications, governance, and media leadership. A respected academic, journalist, author, and strategist, Professor Tabane has spent more than three decades shaping national discourse and redefining the role of ethical, accountable communication in public life.",
  "He currently serves as a Professor of Communications at the UNISA School of Business Leadership and Adjunct Professor of Media Studies at the University of Botswana, where he continues to mentor emerging African communicators and leaders. As Editor of Leadership and BBQ Magazines and the acclaimed anchor of the award-winning “Power to Truth with Professor JJ Tabane” on eNCA, he leads fearless conversations that hold power to account and push South Africa’s democracy forward.",
  "Professor Tabane’s journey in public communications began in 1989, when, at only 25, he became the Ministerial Spokesperson for the Department of Constitutional Development under Minister Mohammed Valli Moosa, during the final years of apartheid and the dawn of South Africa’s democratic transition. In 2002, he was recognised as the inaugural joint winner of the Government Communicator of the Year Award, cementing his reputation as a pioneer in strategic communication and governance reform.",
  "Over the years, he has held several influential executive and advisory positions, including Communications Advisor to the Chamber of Mines and the African Development Bank’s APRM (representing 40 African nations), Vice President of Communications at South African Airways (driving brand transformation and stakeholder engagement), Consultant to Brand South Africa and the Water Research Commission, Convenor of the National Communications Task Team, Chief Information Officer of the Congress of the People (COPE), and CEO of Graphicor Pty Ltd, a subsidiary of ADCORP, where he later served as Group Executive: Corporate Affairs leading a five-year transformation strategy.",
  "Professor Tabane’s governance and academic influence extends across leading institutions. He has served on the boards of Altron, Powertech, and the UWC Foundation, chaired the Finance and Transformation Committees at the University of the Western Cape (UWC) and North-West University (NWU), and continues to contribute as a Council Member and Advisor across various higher education platforms.",
  "His academic credentials reflect intellectual depth and lifelong learning: BA (University of Limpopo), BProc (University of the Western Cape), Master’s in Political Economy (Nelson Mandela University), PhD in Media Studies (Wits University). He has also completed executive leadership programmes at Wits Business School and the UCT Graduate School of Business, and was admitted as an Associate of the Institute of International Business (IIB) in 2010.",
  "A prolific writer and public thinker, Professor Tabane is the author of “Let’s Talk Frankly: Letters to Influential South Africans on the State of Our Nation” (Pan Macmillan) and “Yes, I Am a Pilot” (Seriti sa Sechaba), the inspiring biography of Major Mandisa Mfeka. He has written over 300 opinion pieces for platforms including City Press, Mail & Guardian, Daily Maverick, Huffington Post, The Star, and Sunday Times, and has hosted major broadcast programmes including Frankly Speaking (SABC 3), Power Perspective (Power 987), Your View (Newzroom Afrika), and Frank Dialogue (Ubuntu Radio).",
  "A sought-after keynote speaker, moderator, and masterclass facilitator, Professor Tabane delivers powerful insights on leadership, governance, political communication, media ethics, and Africa’s democratic future. His ability to bridge academia, business, and media makes him one of the most authoritative and provocative voices on the continent."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "unisa", name: "UNISA" },
  { id: "enca", name: "ENCA" },
  { id: "university-botswana", name: "UNIVERSITY OF BOTSWANA" },
  { id: "wits", name: "WITS UNIVERSITY" }
];

const customMedia = [
  {
    id: "jj-art-1",
    headline: "JJ Tabane is back to host new season of ‘Power to Truth’ after production break",
    publication: "Independent Online (IOL)",
    date: "06 Aug 2024",
    url: "https://iol.co.za/sunday-tribune/entertainment/2024-08-06-jj-tabane-is-back-to-host-new-season-of-power-to-truth-after-production-break/",
    action: "Read Article",
    image: "/speakers/Onkgopotse JJ Tabane/JJ-Tabane-The-Speakers-Firm.jpg"
  },
  {
    id: "jj-art-2",
    headline: "ONKGOPOTSE JJ TABANE | Why does government persist in being tone deaf to its citizens’ tragedies?",
    publication: "TimesLIVE",
    date: "28 Oct 2024",
    url: "https://www.timeslive.co.za/sunday-times-daily/opinion-and-analysis/2024-10-28-onkgopotse-jj-tabane--why-does-government-persist-in-being-tone-deaf-to-its-citizens-tragedies/",
    action: "Read Article",
    image: "/speakers/Onkgopotse JJ Tabane/JJ-Tabane-The-Speakers-Firm-2.jpg"
  },
  {
    id: "jj-art-3",
    headline: "ONKGOPOTSE JJ TABANE | Fight corruption where we can see you, Mr President",
    publication: "TimesLIVE",
    date: "20 Aug 2025",
    url: "https://www.timeslive.co.za/sunday-times-daily/opinion-and-analysis/2025-08-20-onkgopotse-jj-tabane-fight-corruption-where-we-can-see-you-mr-president/",
    action: "Read Article",
    image: "/speakers/Onkgopotse JJ Tabane/JJ-Tabane-The-Speakers-Firm-3.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="JJ Tabane"
      speakerTitle="Professor"
      speakerDesignation="Professor of Communications, eNCA Anchor & Reputation Strategist"
      speakerRole="A fearless and influential voice in communications, governance, and media leadership."
      speakerRef="TSF-JT-01"
      heroBackgroundImage="/speakers/Onkgopotse JJ Tabane/JJ-Tabane-The-Speakers-Firm-7.jpg"
      biographyImage="/speakers/Onkgopotse JJ Tabane/JJ-Tabane-The-Speakers-Firm-4.jpg"
      bioHook="“Redefining the role of ethical, accountable communication in public life.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "jj-book-1",
          title: "Let's Talk Frankly",
          description: "Letters to Influential South Africans on the State of Our Nation.",
          coverImage: "/speakers/Onkgopotse JJ Tabane/JJ-Tabane-Talk-Frankly.jpg",
          url: "https://www.panmacmillan.co.za/authors/onkgopotse-jj-tabane/lets-talk-frankly/9781770104327"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="professor-jj-tabane" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="professor-jj-tabane" 
        customIntroText="Snapshots from Professor JJ Tabane's live broadcast sessions, political panels, and academic forums."
        customGallery={[]}
        customVideos={[
          {
            id: "jj-video-1",
            label: "Power to Truth with Professor JJ Tabane",
            youtubeId: "MJJ3djjGk7Y"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
