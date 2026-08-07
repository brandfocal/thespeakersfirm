"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "bsc-mech",
    label: "BSc Mechanical Engineering",
    subtitle: "University of KwaZulu-Natal foundational engineering expertise."
  },
  {
    id: "mba-nmu",
    label: "MBA in Strategy & Operations",
    subtitle: "Nelson Mandela University business credentials."
  },
  {
    id: "group-ceo",
    label: "Group CEO",
    subtitle: "Leading Bidvest Laundry Group, a division of JSE-listed heavyweight Bidvest."
  },
  {
    id: "maxwell-coach",
    label: "Certified Maxwell Coach",
    subtitle: "Global leadership, advisory, and corporate strategy certification."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "hyper-disruption",
    number: "Theme 01",
    title: "Thriving in an Era of Hyper-Disruption",
    copy: "Strategic Agility, Resilience, Innovation, and Change Leadership. Equip leaders and organisations to move beyond reacting to crises and instead turn disruption into competitive opportunity."
  },
  {
    id: "leadership-excellence",
    number: "Theme 02",
    title: "Everyday Leadership Excellence",
    copy: "Focuses on corporate culture, team performance, and closing the gap between technical competency and leadership capability for managers building high-accountability teams."
  },
  {
    id: "intrapreneurship",
    number: "Theme 03",
    title: "Developing an Entrepreneurial Mindset (Intrapreneurship)",
    copy: "Challenging audiences to think like builders within the business, take ownership of outcomes, spot opportunities others overlook, and turn constraints into innovation."
  },
  {
    id: "growth-strategy",
    number: "Theme 04",
    title: "Business Growth Strategy",
    copy: " Sustainable growth through strategic clarity, disciplined execution, and the ability to scale what works. Unpack how to align teams around priorities that drive revenue."
  },
  {
    id: "customer-centric",
    number: "Theme 05",
    title: "Creating a Customer Centric Culture in a Digital Era",
    copy: "Aligning people, processes, and technology around the customer, enabling teams to use data, empathy, and innovation to deliver seamless experiences."
  },
  {
    id: "digital-transform",
    number: "Theme 06",
    title: "Digital Transformation for Sustainable Growth",
    copy: "Rethinking how the organisation creates value, serves customers, and empowers people to work smarter through digital capability, modernised processes, and innovation."
  },
  {
    id: "financial-wellness",
    number: "Theme 07",
    title: "Winning with Your Money (Financial Wellness)",
    copy: "Addressing personal wealth creation and money management, driving down workplace absenteeism by empowering individuals to master their personal finances."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Molefe Pooe is an accomplished corporate executive, successful entrepreneur, author, and certified business coach. Currently serving as the Group CEO of Bidvest Laundry Group, Molefe brings a rare trifecta of experience to the stage: the analytical mindset of an engineer, the grit of a founder who built a multi-million rand business from scratch, and the strategic vision of a corporate C-suite leader. As a member of the Global John Maxwell Team, his high-impact keynotes bridge the gap between motivational theory and hard-nosed operational reality to drive measurable behavior change. As a practitioner, Molefe Pooe brings applied knowledge from his own experiences and delivers high-energy, practical masterclasses and keynotes that combine leadership, corporate strategy and real-world entrepreneurial resilience.",
  "Corporate Leadership (2020 – Present): Group Chief Executive Officer at Bidvest Laundry Group, leading strategic growth and operations for a subsidiary of Bidvest Group, a JSE-listed heavyweight. Previously served as Operations Director for Sub-Saharan Africa at Rentokil Initial.",
  "Entrepreneurial Success (2004 – 2020): Managing Director & Founder of Metamorphic Engineering. He scale-built the business from the ground up, ultimately employing over 150 people and driving it to a 20-million rand turnover within five years.",
  "Industrial & Blue-Chip Engineering Foundations: Began his career solving complex technical and operational problems as a Mechanical Engineer Projects and Maintenance Manager for corporate giants Sasol and Unilever.",
  "Academic & Coaching Credentials: BSc in Mechanical Engineering (University of KwaZulu-Natal). MBA in Strategy and Operations (Nelson Mandela University). Executive Coaching Certification from GIBS Business School. Certified Leadership Consultant and Speaker with the John Maxwell Team. Published Author: Author of Money Talks (a 4-in-1 guide on leadership, business development, relational intelligence, and wealth creation) and the entrepreneurial blueprint e-book, How I Grew My Business to 20 Million Turnover in 5 Years."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bidvest", name: "BIDVEST GROUP" },
  { id: "unilever", name: "UNILEVER" },
  { id: "sasol", name: "SASOL" },
  { id: "rentokil", name: "RENTOKIL INITIAL" }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Molefe Pooe"
      speakerTitle=""
      speakerDesignation="Group CEO of Bidvest Laundry Group, Engineer & Author"
      speakerRole="Bridging the gap between motivational theory and operational reality."
      speakerRef="TSF-MP-01"
      heroBackgroundImage="/speakers/Molefe Pooe/Molefe-Pooe-The-Speakers-Firm6.jpg"
      biographyImage="/speakers/Molefe Pooe/Molefe-Pooe-The-Speakers-Firm5.jpg"
      bioHook="“Bridging motivational theory and hard-nosed operational reality to drive measurable behavior change.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "molefe-book-1",
          title: "Money Talks",
          description: "A 4-in-1 guide on leadership, business development, relational intelligence, and wealth creation.",
          coverImage: "/speakers/Molefe Pooe/Money-Talks-by-Molefe-Pooe.jpg",
          url: "https://molefepooe.com/product/money-talks-by-molefe-pooe/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
    >
      <ProfileAdditionalSections 
        speakerId="molefe-pooe" 
        customIntroText="Moments from Molefe's executive leadership, author workshops, and corporate training engagements."
        customVideos={[
          {
            id: "molefe-video-1",
            label: "Molefe Pooe Speaker Reel",
            youtubeId: "a-6Cz6NTyAM"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
