"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "business-mentor-year",
    label: "Business Mentor of the Year",
    subtitle: "Supreme Industry Business Mentor & Coach of the Year 2024."
  },
  {
    id: "top-50-influential",
    label: "Top 50 Influential Leaders",
    subtitle: "Grey Magazine Top 50 Most Influential Women Leaders 2024 & Fabulous Women Award Winner."
  },
  {
    id: "enterprise-strategist",
    label: "10+ Years Enterprise Strategy",
    subtitle: "Founder of Tsoabelo Security Solutions and Co-Founder of The Mentorship Club."
  },
  {
    id: "global-ambassador",
    label: "Global Brand Ambassador",
    subtitle: "Global Mentorship Brand Ambassador for Lionesses of Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "mentorship-growth",
    number: "Theme 01",
    title: "Leveraging Mentorship as a Key Strategy for Entrepreneurial Growth.",
    copy: "Unlocking enterprise scalability and resilience by embedding structured, intentional mentorship pipelines into business operations."
  },
  {
    id: "leadership-pipelines",
    number: "Theme 02",
    title: "Developing Leadership Pipelines & High-Growth Enterprises.",
    copy: "Equipping women entrepreneurs and emerging leaders with the strategic clarity, voice, and confidence to lead effectively in boardrooms and ventures."
  },
  {
    id: "business-excellence",
    number: "Theme 03",
    title: "The Mechanics of Business Excellence & Enterprise Structure.",
    copy: "Mastering the fundamental mechanics of execution, operational precision, financial discipline, and sustainable organizational growth."
  },
  {
    id: "conscious-leadership",
    number: "Theme 04",
    title: "Conscious Leadership, Self-Mastery & Narrative Ownership.",
    copy: "Moving leaders to redefine how they perceive themselves, align identity with purpose, and activate dormant potential into tangible impact."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Ntsoaki Sibiya is an award-winning mentorship maven, enterprise strategist, and unrelenting advocate for women’s economic empowerment. She stands at the intersection of impact, significance and precision — where intentional mentorship meets transformative leadership.",
  "As the Founder of Tsoabelo Security Solutions, Co-Founder of The Mentorship Club, and Global Mentorship Brand Ambassador for Lionesses of Africa, Ntsoaki has earned her place as a trailblazer in South Africa’s enterprise development and mentorship ecosystem. Her work is grounded in strategy, built on integrity and driven by a vision to elevate women — especially those from previously disadvantaged communities — into positions of influence, high-growth enterprises, and self-mastery.",
  "For over a decade, Ntsoaki has dedicated her career to equipping women entrepreneurs and emerging leaders with the tools to lead, the voice to influence, and the confidence to show up powerfully in interviews, boardrooms, and their own ventures. Rather than merely speaking about mentorship, she builds leadership pipelines, systems, programs, and communities that make it a lived, empowering experience. Through her tailored mentorship frameworks, she helps individuals unearth clarity, cultivate personal discipline, and align their leadership identity with their life’s work.",
  "Her work is anchored in activating transformation through strategy, purpose, and conscious leadership. Rejecting dormant potential, every platform Ntsoaki addresses, every woman she mentors, and every initiative she leads is a direct call to action: to rise to authentic power, to lead with intention, and to take resolute ownership of one’s narrative.",
  "When Ntsoaki speaks, she moves people to redefine how they see themselves and challenge how they show up in the world. As a seasoned mentor, thought leader, and expert moderator, she brings more than inspiration — she brings transformation, guiding startup and early-growth entrepreneurs with strategic clarity and enterprise structure. Book Ntsoaki Sibiya through The Speakers Firm for high-impact masterclasses, keynote addresses, and executive moderation."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "lionesses", name: "LIONESSES OF AFRICA" },
  { id: "fnb", name: "FNB" },
  { id: "africanbank", name: "AFRICAN BANK" },
  { id: "absa", name: "ABSA" },
  { id: "dallmayr", name: "DALLMAYR" },
  { id: "psira", name: "PSIRA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "sibiya-media-1",
      headline: "How I Built a Brand that Matters (Get to Know Me - Ntsoaki Sibiya)",
      publication: "YouTube / Ntsoaki Sibiya",
      date: "2024",
      action: "Watch Video",
      url: "https://www.youtube.com/watch?v=byNfFY0zavA",
      image: "/speakers/Ntsoaki Sibiya/Ntsoaki-Sibiya-The-Speakers-Firm.jpg"
    },
    {
      id: "sibiya-media-2",
      headline: "“You Are the Resource” — Lessons on Boldness, Identity & Resilience",
      publication: "YouTube / Ntsoaki Sibiya",
      date: "2024",
      action: "Watch Keynote",
      url: "https://www.youtube.com/watch?v=AUk8zXwRgkg",
      image: "/speakers/Ntsoaki Sibiya/Ntsoaki-Sibiya-The-Speakers-Firm4.jpg"
    },
    {
      id: "sibiya-media-3",
      headline: "Conscious and Unconscious Mentorship (Mentorship Club Full Masterclass)",
      publication: "YouTube / The Mentorship Club",
      date: "2024",
      action: "Watch Masterclass",
      url: "https://www.youtube.com/watch?v=ve6-4yQRwso",
      image: "/speakers/Ntsoaki Sibiya/Ntsoaki-Sibiya-The-Speakers-Firm3.jpg"
    }
  ];

  const customVideos = [
    {
      id: "sibiya-vid-1",
      label: "Ntsoaki Sibiya - Mentorship Maven, Enterprise & Founder Development",
      youtubeId: "A05nON7UWKg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Ntsoaki Sibiya"
      speakerTitle=""
      speakerDesignation="Award-Winning Mentorship Maven & Enterprise Strategist"
      speakerRole="Founder of Tsoabelo Security, Co-Founder of The Mentorship Club & Global Ambassador"
      speakerRef="TSF-NS-52"
      heroBackgroundImage="/speakers/Ntsoaki Sibiya/Ntsoaki-Sibiya-The-Speakers-Firm7.jpg"
      biographyImage="/speakers/Ntsoaki Sibiya/Ntsoaki-Sibiya-The-Speakers-Firm5.jpg"
      bioHook="“Growth is not automatic. Growth is a managed process — if you are going to grow, it has to be intentional.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="ntsoaki-sibiya" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="ntsoaki-sibiya" 
        customGallery={[]}
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
