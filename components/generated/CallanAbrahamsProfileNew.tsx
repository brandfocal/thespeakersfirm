"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "ai-ambassador",
    label: "AI Ambassador & Speaker",
    subtitle: "Championing data strategy, machine learning, and applied data science."
  },
  {
    id: "stem-activist",
    label: "STEM Inclusivity Advocate",
    subtitle: "Committed to bridging tech access gaps and promoting women in STEM."
  },
  {
    id: "maths-economics",
    label: "BSc Economics & Mathematics",
    subtitle: "Acclaimed academic foundations in quantitative economics and math."
  },
  {
    id: "entrepreneur",
    label: "Tech Entrepreneur",
    subtitle: "Creator of digital solutions targeting marginalized communities."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "inclusive-technology",
    number: "Theme 01",
    title: "Inclusive Technology and Applied Data Science",
    copy: "Callan teaches boards how to leverage machine learning, applied data science, and inclusive strategies to drive measurable business value in the digital age."
  },
  {
    id: "resilience-mental-health",
    number: "Theme 02",
    title: "The Voice of Resilience & Mental Health",
    copy: "Empowering young professionals and leaders with cognitive frameworks to handle stress, build mental resilience, and lead with empathy."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Get ready to be inspired and empowered by Callan Abrahams, An AIambassador and acclaimed speaker. Her magnetic energy, combined withher passion for inclusive business and social change, makes her anunforgettable presence on stage. Her powerful insights on leveraging datastrategy, machine learning, and applied data science to drive businesssuccess will captivate audiences and inspire them to embrace the limitlesspossibilities of the digital age.",
  "Purpose & Legacy:",
  "Callan Abrahams is deeply committed tocreating a lasting legacy that extends beyondbusiness and technology.",
  "With a heartfelt purpose, she strives torevolutionize industries by championinginclusivity, diversity, and innovation,particularly for marginalized communities.",
  "Her legacy lies in bridging the gap betweencutting-edge technology and the empowermentof underrepresented voices, ensuring thateveryone has a seat at the table."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "wits-university", name: "WITS UNIVERSITY" },
  { id: "brainstorm-media", name: "BRAINSTORM ITWEB" },
  { id: "stem-sa", name: "STEM SOUTH AFRICA" },
  { id: "queendom-pod", name: "THE QUEENDOM NETWORK" }
];

const customMedia = [
  {
    id: "callan-media-1",
    headline: "BUSINESS VALUE LED THROUGH DATA",
    publication: "The 88bcafrica News",
    date: "",
    url: "https://mailchi.mp/c6e4afaab1f4/the-88bcafrica-news-11392401",
    action: "Read Article",
    image: "/speakers/Callan%20Abrahams/Callan-Abrahams-11.jpg"
  },
  {
    id: "callan-media-2",
    headline: "Learning to lead",
    publication: "Brainstorm ITWeb",
    date: "",
    url: "https://brainstorm.itweb.co.za/article/learning-to-lead/JBwEr7n3xJzM6Db2",
    action: "Read Article",
    image: "/speakers/Callan%20Abrahams/Callan-Abrahams.jpg"
  },
  {
    id: "callan-media-3",
    headline: "COOL KID : Callan Abrahams",
    publication: "Wits Vuvuzela",
    date: "",
    url: "https://witsvuvuzela.com/2017/09/04/cool-kid-callan-abrahams/",
    action: "Read Article",
    image: "/speakers/Callan%20Abrahams/Callan-Abrahams-3.jpg"
  }
];

const customGallery = [
  {
    id: "callan-gal-1",
    src: "/speakers/Callan%20Abrahams/Callan-Abrahams-6.jpg",
    alt: "Callan Abrahams on stage",
    caption: "Resilience keynote speech",
    className: ""
  },
  {
    id: "callan-gal-2",
    src: "/speakers/Callan%20Abrahams/Callan-Abrahams-7.jpg",
    alt: "Callan Abrahams speaking",
    caption: "Facilitating corporate panel",
    className: ""
  },
  {
    id: "callan-gal-3",
    src: "/speakers/Callan%20Abrahams/Callan-Abrahams-8.jpg",
    alt: "Callan Abrahams teambuilding",
    caption: "Leadership roundtable session",
    className: ""
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Callan Abrahams"
      speakerTitle=""
      speakerDesignation="The Voice of Resilience, Mental Health & Leadership Strategist"
      speakerRole="The Voice of Resilience."
      speakerRef="TSF-CA-20"
      heroBackgroundImage="/speakers/Callan%20Abrahams/Callan-Abrahams-3.jpg"
      biographyImage="/speakers/Callan%20Abrahams/Callan-Abrahams-4.jpg"
      bioHook="“Revolutionising industries through inclusive tech, applied data, and mental resilience.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "callan-book-1",
          title: "What I Know Until Now",
          description: "Callan's reflection on his experiences and lessons on leadership, resilience, and personal development.",
          coverImage: "/speakers/Callan%20Abrahams/What-I-Know-Until-Now.jpg",
          url: "https://thebookstore.co.za/product/what-i-know-until-now/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="callan-abrahams" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="callan-abrahams" 
        customGallery={customGallery}
        customIntroText="Moments from Callan Abrahams's teambuilding retreats, resilience lectures, and digital leadership strategy panels."
        customVideos={[
          {
            id: "callan-video-1",
            label: "Experience Reel",
            youtubeId: "r-qgBn4ANuI"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
