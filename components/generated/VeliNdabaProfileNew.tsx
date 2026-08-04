"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const STRATEGIC_THEMES = [
  {
    id: "neuroengineering-leadership-effect",
    number: "Theme 01",
    title: "The Veli Ndaba NeuroEngineering Leadership Effect (#VNNLE)",
    copy: "A high-performance framework that uniquely blends neuroscience and engineering principles with motivational psychology to cultivate peak performance in leaders, teams, and organisations. Translates complex brain science into actionable business leadership tools."
  },
  {
    id: "neuroleadership-coaching",
    number: "Theme 02",
    title: "NeuroLeadership Coaching: Transforming Minds from Darkness to Light",
    copy: "Focuses on developing mental agility, emotional intelligence, and peak performance under organizational stress. Helps executives re-engineer their habits, subconscious programming, and leadership models using brain-based methodologies."
  }
];

const TICKER_LOGOS = [
  "NEUROENGINEERING", "SOWETAN COLUMNIST", "EXPEDITION BUSINESS", "THE CITIZEN", "GET IT MAGAZINE", "BSc MANAGEMENT SCIENCE", "NLP", "LIFE COACHING"
];

const FULL_BIO_PARAGRAPHS = [
  "Veli Ndaba was born in Soweto, Emdeni Township. He holds a Bachelor of Science Degree (BSc) in Management Science, National Diploma in Mechanical Engineering, National Diploma in Project Management, Life Coaching and Neuro Linguistic Programming Certificates. He is a Leadership Thought Leader and a Pioneer of a Leadership High-Performance Tool called the ‘Veli Ndaba NeuroEngineering Leadership Effect’ #VNNLE—a high-performance Framework that uniquely blends Neuroscience and Engineering Principles with Motivational Psychology to Cultivate Peak Performance in Leaders, Teams, and Organisations. He applies this tool to Help Leaders ‘Transforms Minds From Mental Darkness to Mental Light’ by translating complex brain science into actionable insights, and to changing Leadership and Organisational Cultures for Peak Performance.",
  "Veli Ndaba is a NeuroLeadership Coach, a NeuroSpeaker and Author of five books (You Are Born to Win, Your Dream is Calling You, Switch ON!, Set Your Soul on Fire!, and The Neuroscience of Effective Leadership), and a Newspaper Columnist.",
  "As a NeuroSpeaker, Veli Ndaba uses neuroscience to understand and influence his audience. He uses his knowledge of the brain to design and deliver presentations that are more likely to engage, transform, and inspire his listeners."
];

const CREDENTIAL_BADGES = [
  {
    id: "neuroengineering-pioneer",
    label: "NeuroEngineering Pioneer",
    subtitle: "Creator of the high-performance VNNLE leadership methodology."
  },
  {
    id: "acclaimed-author-5-books",
    label: "Author of 5 Published Books",
    subtitle: "Deep expert in Neuroleadership, peak performance, and corporate transformation."
  }
];

const BOOKS = [
  {
    id: "dream-calling",
    title: "Your Dream is Calling You",
    description: "An inspiring blueprint that challenges readers to unlock their true potential, identify their deep callings, and take courageous action.",
    coverImage: "/speakers/Veli Ndaba/Your-Dream-is-Calling-You.png",
    url: "https://www.velindaba.com/books/"
  },
  {
    id: "born-to-win",
    title: "You Are Born To Win",
    description: "Deconstructs self-limiting mental models to help readers reprogram their thinking and claim their natural capacity for victory and excellence.",
    coverImage: "/speakers/Veli Ndaba/You-Are-Born-To-Win.png",
    url: "https://www.velindaba.com/books/"
  },
  {
    id: "neuroscience-leadership",
    title: "The Neuroscience of Effective Leadership",
    description: "A masterclass in how brain science informs leadership styles, team dynamics, trust architecture, and organizational peak performance.",
    coverImage: "/speakers/Veli Ndaba/The-Neuroscience-of-Effective-Leadership.png",
    url: "https://www.velindaba.com/books/"
  },
  {
    id: "switch-on",
    title: "Switch On",
    description: "A guide to waking up the sleeping potential in your mind, re-engineering habits, and lighting a fire of passion and clarity.",
    coverImage: "/speakers/Veli Ndaba/Switch-On.png",
    url: "https://www.velindaba.com/books/"
  },
  {
    id: "soul-on-fire",
    title: "Set Your Soul on Fire",
    description: "A powerful call to discover deep inner purpose and translate intrinsic motivation into consistent, positive, and high-impact actions.",
    coverImage: "/speakers/Veli Ndaba/Set-Your-Soul-on-Fire.png",
    url: "https://www.velindaba.com/books/"
  }
];

const GALLERY_IMAGES = [
  {
    id: "vn-gal-1",
    src: "/speakers/Veli Ndaba/Veli Ndaba-10.jpg",
    alt: "Veli Ndaba live keynote address",
    caption: "Veli presenting #VNNLE high-performance strategies",
    className: "sm:col-span-2 lg:col-span-2"
  },
  {
    id: "vn-gal-2",
    src: "/speakers/Veli Ndaba/Veli-Ndaba.jpg",
    alt: "Veli Ndaba portrait",
    caption: "Neuroleadership Coach, Author and Keynote Speaker",
    className: ""
  },
  {
    id: "vn-gal-3",
    src: "/speakers/Veli Ndaba/Veli-Ndaba-6.jpg",
    alt: "Veli Ndaba book event",
    caption: "Book launch: The Neuroscience of Effective Leadership",
    className: ""
  }
];

const VIDEOS = [
  {
    id: "vn-vid-1",
    label: "Veli Ndaba: Neuro-Engineering Keynote Highlights",
    youtubeId: "M9fBrdFkycU"
  }
];

const MEDIA_ARTICLES = [
  {
    id: "vn-med-1",
    headline: "Veli leads by example",
    publication: "Get It Magazine",
    date: "28 May 2024",
    action: "Read Blog",
    url: "https://getitmagazine.co.za/joburg-south/blog/2024/05/28/veli-leads-by-example/",
    image: "/speakers/Veli Ndaba/Veli Ndaba-7.jpg"
  },
  {
    id: "vn-med-2",
    headline: "Veli Ndaba publishes fifth book, The Neuroscience Of Effective Leadership",
    publication: "The Citizen / Southern Courier",
    date: "29 Jan 2024",
    action: "Read News Article",
    url: "https://www.citizen.co.za/southern-courier/news-headlines/local-news/2024/01/29/veli-ndaba-publishes-fifth-book-the-neuroscience-of-effective-leadership/",
    image: "/speakers/Veli Ndaba/Veli-Ndaba-6.jpg"
  },
  {
    id: "vn-med-3",
    headline: "The 'Veli Ndaba NeuroEngineering Leadership Effect'",
    publication: "Expedition Business",
    date: "15 Apr 2023",
    action: "Listen to Dialogue",
    url: "https://expeditionbusiness.co.za/expedition-business-episodes/veli-ndaba-the-neuro-engineer-expedition-business/",
    image: "/speakers/Veli Ndaba/Veli Ndaba-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <>
      <SpeakerProfileTemplate
        speakerName="Veli Ndaba"
        speakerTitle=""
        speakerDesignation="NeuroLeadership Coach. NeuroSpeaker. Author."
        speakerRole="Transforming corporate mindsets and organizational culture through Neuroscience and Engineering principles."
        speakerRef="TSF-VN-01"
        heroBackgroundImage="/speakers/Veli Ndaba/Veli-Ndaba-10.jpg"
        biographyImage="/speakers/Veli Ndaba/Veli-Ndaba.jpg"
        bioHook="“Transforms Minds From Mental Darkness to Mental Light.”"
        fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
        credentials={CREDENTIAL_BADGES}
        strategicThemes={STRATEGIC_THEMES}
        socialProofLogos={TICKER_LOGOS.map(name => ({ id: name.toLowerCase().replace(/\s+/g, "-"), name }))}
        books={BOOKS}
        mediaArticlesSlot={
          <ProfileAdditionalMediaSections speakerId="veli-ndaba" customMedia={MEDIA_ARTICLES} />
        }
      >
        <ProfileAdditionalSections 
          speakerId="veli-ndaba"
          customGallery={[]}
          customVideos={VIDEOS}
          customIntroText="Snapshots from Veli Ndaba's executive coaching sessions, neuroscience research, and live mastermind keynotes."
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
