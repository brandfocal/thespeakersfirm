"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "founder-ican-institute",
    label: "Founder: I Can Leadership Institute Africa",
    subtitle: "Equipping governments, corporates, and organizations across Africa."
  },
  {
    id: "multiple-doctorates",
    label: "Multiple Doctorates in Leadership",
    subtitle: "Academic excellence in Leadership, Management, and Religious Education."
  },
  {
    id: "global-keynote-voice",
    label: "International Keynote Speaker",
    subtitle: "Inspired millions across more than 28 countries over three decades."
  },
  {
    id: "board-advisor-molapo",
    label: "Board Advisor",
    subtitle: "Served with SAA, Dimension Data, Imperial Logistics, and Excellerate Holdings."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "disruptive-leadership",
    number: "Theme 01",
    title: "Disruptive Leadership & I CAN 4IR",
    copy: "Equipping entities to manage Fourth Industrial Revolution shifts, build resilience, and drive performance in digital environments."
  },
  {
    id: "human-potential",
    number: "Theme 02",
    title: "Human Potential & Team Performance",
    copy: "Emotional intelligence, strategic alignment, and high-impact interventions to close productivity gaps."
  },
  {
    id: "mens-empowerment",
    number: "Theme 03",
    title: "Men's Empowerment & Social Transformation",
    copy: "Shaping purpose, ethics, and community responsibility through specialized conferences and leadership seminars."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr David Molapo is one of Africa’s most dynamic leadership voices — a visionary educator, business strategist, and international keynote speaker whose message of transformation, faith, and high performance has inspired millions across more than 28 countries.",
  "As Founder of the I Can Leadership Institute Africa and CEO of I CAN 4IR, Dr Molapo equips governments, corporates, and faith-based organizations with the tools to lead through disruption, build resilient teams, and unlock human potential in the digital era.",
  "With over three decades of executive experience, Dr Molapo blends humour, insight, and actionable strategy to ignite lasting change. His keynote sessions and training programmes — spanning Leadership Development, Emotional Intelligence, Strategic Planning, High-Performance Team Building, and Men’s Empowerment — deliver measurable impact, sustainable growth, and cultural transformation.",
  "A political prisoner turned global thought leader, Dr Molapo embodies resilience, purpose, and faith-driven leadership. His academic credentials include multiple doctorates in Leadership, Management, and Religious Education, complemented by board and advisory roles with top organisations such as South African Airways, Dimension Data, Imperial Logistics, and Excellerate Holdings.",
  "Dr Molapo is a leading voice for men’s conferences, empowerment campaigns, corporate events, leadership seminars, and faith-based gatherings, inspiring audiences to rise above limitation and lead with authenticity, courage, and conviction."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ican-institute", name: "I CAN LEADERSHIP INSTITUTE" },
  { id: "dimension-data", name: "DIMENSION DATA" },
  { id: "saa", name: "SOUTH AFRICAN AIRWAYS" },
  { id: "imperial-logistics", name: "IMPERIAL LOGISTICS" }
];

const customMedia = [
  {
    id: "david-art-1",
    headline: "Nurturing the Next Generation of Leaders for Success",
    publication: "CXO Magazine",
    date: "",
    url: "https://www.cxomagazine.com/nurturing-the-next-generation-of-leaders-for-success/",
    action: "Read Article",
    image: "/speakers/David Molapo/david-molapo7.jpg"
  },
  {
    id: "david-art-2",
    headline: "The Essence of Leadership – with David Molapo",
    publication: "East Coast Radio",
    date: "",
    url: "https://www.ecr.co.za/lifestyle/family/leadership-with-david-molapo/",
    action: "Listen to Segment",
    image: "/speakers/David Molapo/Dr-David-Molapo-The-Speakers-Firm-5.jpg"
  },
  {
    id: "david-art-3",
    headline: "Dr David Molapo on Effective Leadership & Living a Life of Significance",
    publication: "YouTube",
    date: "",
    url: "https://www.youtube.com/watch?v=FpUu96LvGCw",
    action: "Watch Interview",
    image: "/speakers/David Molapo/Dr-David-Molapo-The-Speakers-Firm-3.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="David Molapo"
      speakerTitle="Dr."
      speakerDesignation="Founder of I Can Leadership Institute Africa & Human Potential Strategist"
      speakerRole="Inspiring organizations, teams, and individuals to lead with purpose and impact."
      speakerRef="TSF-DM-05"
      heroBackgroundImage="/speakers/David Molapo/Dr-David-Molapo-The-Speakers-Firm-8.jpg"
      biographyImage="/speakers/David Molapo/david-molapo8.jpg"
      bioHook="“Equipping governments, corporates, and leaders to unlock human potential and build legacy.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "david-book-1",
          title: "Take Charge in Times of Challenge",
          description: "Personal excellence and resilience strategies to build character and navigate trials successfully.",
          coverImage: "/speakers/David Molapo/Take-Charge-in-Times-of-Challenge.jpg",
          url: "https://www.goodreads.com/book/show/18649653-take-charge-in-times-of-challenge"
        },
        {
          id: "david-book-2",
          title: "Choose to Change",
          description: "Empowerment guide to take conscious control of decisions and drive meaningful change in life and work.",
          coverImage: "/speakers/David Molapo/Choose-to-Change.jpg",
          url: "https://www.goodreads.com/book/show/16353501-choose-to-change"
        },
        {
          id: "david-book-3",
          title: "Habits: The DNA of Success",
          description: "Unpack how healthy habits create positive momentum and unlock lasting personal and organizational growth.",
          coverImage: "/speakers/David Molapo/Habits - The DNA of Success-Unlock Your Potential with Healthy Habits.jpg",
          url: "https://www.goodreads.com/book/show/21478559-habits---the-dna-of-success"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="dr-david-molapo" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-david-molapo" 
        customIntroText="Snapshots from Dr David Molapo's leadership training, men's empowerment summits, and global speaking engagements."
        customGallery={[]}
        customVideos={[
          {
            id: "david-video-1",
            label: "Dr David Molapo on Effective Leadership & Significance",
            youtubeId: "FpUu96LvGCw"
          },
          {
            id: "david-video-2",
            label: "Dr David Molapo brings energy, wisdom and a distinctly African perspective",
            youtubeId: "_aQG5xdGL34"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
