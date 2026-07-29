"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "political-scientist",
    label: "Political Scientist",
    subtitle: "Highly regarded political commentator, public intellectual, and consultant."
  },
  {
    id: "rhodes-ma",
    label: "MA in Political Studies",
    subtitle: "Holds a Master's Degree in Political Studies from Rhodes University."
  },
  {
    id: "cpr-director",
    label: "Director of CPR",
    subtitle: "Former Executive Director of the Centre for Politics and Research."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "political-analysis",
    number: "Theme 01",
    title: "Economics, Politics & Governance Analysis.",
    copy: "Delivering blunt, evidence-based commentary on political leadership, public sector efficiency, and economic policy reform."
  },
  {
    id: "crisis-leadership",
    number: "Theme 02",
    title: "Crisis Leadership & Risk Intelligence.",
    copy: "Advising executives and public officials on risk mitigation, democratic volatility, and institutional foresight."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Prince Mashele is a prolific writer and commentator on diverse subjects related to his training as a political scientist. An influential thinker, who has written articles for South Africa’s top newspapers, including the Sunday Times, Sunday Independent, Business Day, Sowetan, and others, Prince Mashele is also a sought-after political consultant. Further, as the speech writer for, among others, the SA Presidency and the Pan-Africa Parliament; such insights have further informed his opinions on South Africa today.",
  "He has a Master’s Degree in Political Studies (Rhodes University), an Honours Degree in Political Studies and a BA Degree (both from the University of Venda). Prince Mashele is a a former Senior Research Fellow at GovInn. Previously he served as Executive Director of the Centre for Politics and Research. Mashele also lectured in the Department of Political Sciences at the University of Pretoria."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "rhodes", name: "RHODES UNIVERSITY" },
  { id: "sowetan", name: "SOWETAN" },
  { id: "businessday", name: "BUSINESS DAY" },
  { id: "govinn", name: "GOVINN" }
];

const PUBLISHED_BOOKS = [
  {
    id: "fall-anc",
    title: "The Fall of the ANC",
    description: "What next for South Africa? A deep critical analysis of the party structure.",
    coverImage: "/speakers/Prince Mashele/The-Fall-Of-The-ANC.jpg",
    url: "https://www.ebooks.com/en-za/book/1785501/the-fall-of-the-anc/prince-mashele/"
  },
  {
    id: "fall-anc-continues",
    title: "The Fall of the ANC Continues",
    description: "An updated investigation of leadership dynamics and governance challenges.",
    coverImage: "/speakers/Prince Mashele/The-Fall-Of-The-ANC-Continues.jpg",
    url: "https://www.exclusivebooks.co.za/product/9781770099647"
  }
];

export const AboutTeamSection = () => {
  const customVideos = [
    {
      id: "prince-vid-1",
      label: "Prince Mashele in Action",
      youtubeId: "FmZykqcW844"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Prince Mashele"
      speakerTitle=""
      speakerDesignation="Political Analyst, Columnist & Column Writer"
      speakerRole="Prolific political commentator, author, strategic speechwriter, and policy consultant."
      speakerRef="TSF-PM-06"
      heroBackgroundImage="/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-10.jpg"
      biographyImage="/speakers/Prince Mashele/Prince-Mashele-The-Speakers-Firm-9.jpg"
      bioHook="“Understanding today's political dynamics is the key to mapping tomorrow's economic outcomes.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={PUBLISHED_BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="prince-mashele" />
      }
    >
      <ProfileAdditionalSections speakerId="prince-mashele" customVideos={customVideos} />
    </SpeakerProfileTemplate>
  );
};
