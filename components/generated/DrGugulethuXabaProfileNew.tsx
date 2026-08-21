"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "gx-director",
    label: "Director: Student Governance, TUT",
    subtitle: "Directs leadership development and student governance policies at Tshwane University of Technology."
  },
  {
    id: "gx-nasdev",
    label: "Former President of NASDEV",
    subtitle: "Led the National Association of Student Development Practitioners in South Africa."
  },
  {
    id: "gx-safsas",
    label: "Founding Member, SAFSAS",
    subtitle: "Helped establish the South African Federation of Student Affairs and Services."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "student-movements",
    number: "Theme 01",
    title: "Student Movements & Governance.",
    copy: "Analysing the post-Fees Must Fall landscape, resolving student-administration conflicts, and building governance systems."
  },
  {
    id: "youth-development",
    number: "Theme 02",
    title: "Transformative Youth Leadership.",
    copy: "Nurturing civic accountability, critical thinking, and social change agency among student leaders."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Gugulethu Xaba is the Director of Student Governance and Leadership Development at Tshwane University of Technology (TUT). He is a seasoned higher education leader, academic, and community builder with over 20 years of experience in student affairs, organizational development, and youth empowerment.",
  "Over his distinguished career, Dr. Xaba has served as the President of the National Association of Student Development Practitioners (NASDEV) and was a founding member of the South African Federation of Student Affairs and Services (SAFSAS). His research and leadership practices focus on creating sustainable governance structures that bridge student representation and university administration.",
  "Committed to active citizenship and civic engagement, Dr. Xaba frequently facilitates dialogues on the aftermath of historic student movements, such as Fees Must Fall, and advises institutional boards on public health, community service, and student welfare. He is a passionate advocate for mentorship, helping develop the next generation of African leaders.",
  "Book Dr. Gugulethu Xaba through The Speakers Firm, A Leading African Speakers Bureau, to bring definitive academic leadership insights, student governance workshops, and transformative youth development keynotes to your institution or conference."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "tut", name: "TUT UNIVERSITY" },
  { id: "nasdev", name: "NASDEV" },
  { id: "safsas", name: "SAFSAS" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "xaba-art-1",
      headline: "MEC honours hospital board members for dedicated service",
      publication: "Soweto Urban / Citizen",
      date: "2025",
      action: "Read Article",
      url: "https://www.citizen.co.za/soweto-urban/news-headlines/local-news/2025/06/25/01-july-du-comm2-2/",
      image: "/speakers/Gugulethu Xaba/gugulethu-xaba-the-speakers-firm-second.jpg"
    },
    {
      id: "xaba-art-2",
      headline: "EDSA Dialogue: The Aftermath of Fees Must Fall on Student Movements",
      publication: "EDSA Dialogue / YouTube",
      date: "2023",
      action: "Watch Dialogue",
      url: "https://www.youtube.com/watch?v=MwnPX181hGY",
      image: "/speakers/Gugulethu Xaba/gugulethu-xaba-the-speakers-firm-third.jpg"
    },
    {
      id: "xaba-art-3",
      headline: "Hangout with Scelo Ngubane and Dr Gugulethu Xaba",
      publication: "YouTube / Hangouts",
      date: "2024",
      action: "Watch Interview",
      url: "https://www.youtube.com/watch?v=2TtkiDLixKs",
      image: "/speakers/Gugulethu Xaba/gugulethu-xaba-the-speakers-firm-6.jpg"
    }
  ];

  const customVideos = [
    {
      id: "xaba-vid-1",
      label: "Dr. Gugulethu Xaba on Student Leadership & Governance",
      youtubeId: "2TtkiDLixKs"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Gugulethu Xaba"
      speakerTitle=""
      speakerDesignation="Higher Education Leader & Student Affairs Expert"
      speakerRole="Director: Student Governance & Leadership Development at TUT"
      speakerRef="TSF-GX-41"
      heroBackgroundImage="/speakers/Gugulethu Xaba/gugulethu-xaba-the-speakers-firm-5.jpg"
      biographyImage="/speakers/Gugulethu Xaba/gugulethu-xaba-the-speakers-firm-4.jpg"
      bioHook="“Empowering student governance, developing future civic leaders, and cultivating resilience in the post-school education sector.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-gugulethu-xaba" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-gugulethu-xaba" 
        customIntroText="Institutional dialogues, student development seminars, and transformative leadership keynotes led by Dr. Gugulethu Xaba."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
