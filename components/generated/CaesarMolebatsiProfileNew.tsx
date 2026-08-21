"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "cm-media",
    label: "Pioneer Broadcaster & Host",
    subtitle: "Facilitated 'Two Way', 'Search for Common Ground', and 'The Full Story' peace radio."
  },
  {
    id: "cm-academic",
    label: "Wheaton Graduate Alumnus",
    subtitle: "Holds a Masters in Communications from Wheaton Graduate School."
  },
  {
    id: "cm-advocate",
    label: "Social Justice Leader",
    subtitle: "Chairs the Accountability Institute and is a veteran voice for youth development and human rights."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "reconciliation-justice",
    number: "Theme 01",
    title: "Justice, Reconciliation & Human Rights.",
    copy: "Guiding organizations and communities through structural transformation, social responsibility, and management of diversity."
  },
  {
    id: "african-renaissance",
    number: "Theme 02",
    title: "African Renaissance & Youth Leadership.",
    copy: "Empowering the next generation of African leaders to lead with accountability, communication, and social purpose."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Caesar Molebatsi is a long standing champion for social justice and empowerment in South Africa, and has worked in youth and economic development on many fronts. His media involvement include facilitating ‘Two Way’, a popular television audience participation show, reflecting and encouraging the “pulse” of South Africa. He also facilitated the television series, ‘Search for Common Ground’, and the Peace Radio programme, ‘The Full Story’.",
  "Caesar is a corporate consultant and international speaker on such issues as Transformation, Justice & Reconciliation, Human Rights, Social Responsibility, Management of Diversity, Organisational Communication, Empowerment: The Product of Good Business, African Renaissance, & Youth Leadership Training. He has a Masters in Communications from Wheaton Graduate School, and chairs a number of key development and business organisations within the South African context, including the Accountability Institute.",
  "Book Caesar Molebatsi through The Speakers Firm, A Leading African Speakers Bureau, to bring inspirational keynote addresses, strategic transformation briefings, and diversity management seminars to your next corporate or community event."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "accountability", name: "ACCOUNTABILITY INSTITUTE" },
  { id: "wheaton", name: "WHEATON GRADUATE" },
  { id: "peaceradio", name: "PEACE RADIO" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "cm-art-1",
      headline: "From Freedom Fighter To Peace Maker | The Story of Caesar Molebatsi",
      publication: "YouTube / Common Ground",
      date: "2024",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=s8t6gUxVIAo",
      image: "/speakers/Caesar Molebatsi/caesar-molebatsi-the-speakers-firm.jpg"
    },
    {
      id: "cm-art-2",
      headline: "On the Shoulders of Giants: Archbishop PG Nzuza and Rev Caesar Molebatsi",
      publication: "Church of the Holy Ghost",
      date: "2023",
      action: "Watch Conversation",
      url: "https://www.youtube.com/watch?v=3mUn4TXKQS8",
      image: "/speakers/Caesar Molebatsi/caesar-molebatsi-the-speakers-firm-2.jpg"
    },
    {
      id: "cm-art-3",
      headline: "2020 Spiritual Conference – Guest Speaker, Rev Caesar Molebatsi (Part 2 of 3)",
      publication: "YouTube",
      date: "2020",
      action: "Watch Sermon",
      url: "https://www.youtube.com/watch?v=JbSBQvqRxnw",
      image: "/speakers/Caesar Molebatsi/caesar-molebatsi-the-speakers-firm-8.jpg"
    }
  ];

  const customVideos = [
    {
      id: "cm-vid-1",
      label: "Caesar Molebatsi: From Freedom Fighter To Peace Maker",
      youtubeId: "s8t6gUxVIAo"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Caesar Molebatsi"
      speakerTitle=""
      speakerDesignation="Social Justice Pioneer & Broadcaster"
      speakerRole="Chairperson of the Accountability Institute & Veteran Communicator"
      speakerRef="TSF-CM-82"
      heroBackgroundImage="/speakers/Caesar Molebatsi/caesar-molebatsi-the-speakers-firm-3.jpg"
      biographyImage="/speakers/Caesar Molebatsi/caesar-molebatsi-the-speakers-firm-7.jpg"
      bioHook="“Transforming hate and rage into a lifelong quest for reconciliation, human rights, and social justice.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="caesar-molebatsi" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="caesar-molebatsi" 
        customIntroText="Transformation keynotes, justice and diversity seminars, and youth leadership training led by Caesar Molebatsi."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
