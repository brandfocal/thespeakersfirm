"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "futures-strategist",
    label: "Global Futures Strategist",
    subtitle: "Associate Partner at the Copenhagen Institute for Future Studies."
  },
  {
    id: "bestselling-author",
    label: "5-Times Bestselling Author",
    subtitle: "Acclaimed author on future strategy, adaptation, and human behavior."
  },
  {
    id: "academic-faculty",
    label: "Singularity & Duke CE Faculty",
    subtitle: "Keynote lecturer on cognitive adaptability and organizational strategy."
  },
  {
    id: "expansive-podcast",
    label: "The Expansive Podcaster",
    subtitle: "Co-host of one of SA's most popular strategy podcasts."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "emotional-intelligence",
    number: "Theme 01",
    title: "Quantum Strategy and Emotional Intelligence",
    copy: "Reimagining personal history and overcoming subconscious memory blockages to foster long-term corporate agility and visionary leadership."
  },
  {
    id: "ai-regenerative-growth",
    number: "Theme 02",
    title: "Leveraging AI for Regenerative Growth",
    copy: "Mapping agentic AI, regenerative tech shifts, and cognitive awareness to build future-ready business models that thrive in uncertainty."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Globally acclaimed keynote speaker, futures strategist, 5 times bestselling author, Singularity University and Duke CE faculty member, Associate Partner at the Copenhagen Institute for Future Studies, Chief of Tomorrow Board Member and podcaster at The Expansive – John Sanei isn’t just transforming the way we think about the future, he’s empowering us with the courage we need to cultivate everlasting change.",
  "Using a dynamic mix of human psychology, quantum science, business strategy and futurism, John creates talks, writes books, delivers masterclasses and sits on boards to help guide future-forward leaders who are ready to lean into uncertainty, overcome doubt, and rise with courage, clarity and power."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "copenhagen-institute", name: "COPENHAGEN INSTITUTE" },
  { id: "singularity-university", name: "SINGULARITY UNIVERSITY" },
  { id: "duke-ce", name: "DUKE CORPORATE EDUCATION" },
  { id: "expansive-podcast", name: "THE EXPANSIVE PODCAST" }
];

const customMedia = [
  {
    id: "sanei-media-1",
    headline: "8 Ways to Transform Your Emotional Intelligence",
    publication: "John Sanei inc",
    date: "",
    url: "https://www.youtube.com/watch?v=skR1egpPlCY&t=4s",
    action: "Watch Video",
    image: "/speakers/John%20Sanei/John-Sanei-The-Speakers-Firm-3.jpg"
  },
  {
    id: "sanei-media-2",
    headline: "How quantum physics and neuroscience can help us change: John Sanei",
    publication: "John Sanei inc",
    date: "",
    url: "https://www.youtube.com/watch?v=hMi3x_ouIVM",
    action: "Watch Video",
    image: "/speakers/John%20Sanei/John-Sanei-The-Speakers-Firm-4.jpg"
  },
  {
    id: "sanei-media-3",
    headline: "Why Awareness is More Important Than A.I",
    publication: "John Sanei inc",
    date: "",
    url: "https://www.youtube.com/watch?v=xYmvA6Q5zU4",
    action: "Watch Video",
    image: "/speakers/John%20Sanei/John-Sanei-The-Speakers-Firm-5.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="John Sanei"
      speakerTitle=""
      speakerDesignation="Globally Acclaimed Keynote Speaker, Futures Strategist & Author"
      speakerRole="The Futurist of Possibility."
      speakerRef="TSF-JS-19"
      heroBackgroundImage="/speakers/John%20Sanei/John-Sanei-The-Speakers-Firm-2.jpg"
      heroMobileBackgroundImage="/speakers/John%20Sanei/john-sanei-mobile.jpg"
      biographyImage="/speakers/John%20Sanei/John-Sanei-The-Speakers-Firm.jpg"
      bioHook="“Transforming the way we think about the future and building the courage to lean into uncertainty.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "john-book-1",
          title: "Who Do We Become?",
          description: "Navigating the post-COVID world with emotional and strategic adaptability.",
          coverImage: "/speakers/John%20Sanei/John-Sanei-Who-Do-We-Become.jpg",
          url: "https://johnsanei.com/books/"
        },
        {
          id: "john-book-2",
          title: "What's Your Moonshot?",
          description: "A guide to building a future-proof mindset and achieving extraordinary goals.",
          coverImage: "/speakers/John%20Sanei/John-Sanei-Whats-Your-Moonshot.jpg",
          url: "https://johnsanei.com/books/"
        },
        {
          id: "john-book-3",
          title: "Expansive",
          description: "How to flourish in a fast-paced, technology-driven world.",
          coverImage: "/speakers/John%20Sanei/Expansive.jpg",
          url: "https://johnsanei.com/books/"
        },
        {
          id: "john-book-4",
          title: "Foresight",
          description: "Unlocking strategic foresight to anticipate and construct your preferred future.",
          coverImage: "/speakers/John%20Sanei/John-Sanei-Foresight.jpg",
          url: "https://johnsanei.com/books/"
        },
        {
          id: "john-book-5",
          title: "Future Next",
          description: "Understanding the next wave of global business and leadership dynamics.",
          coverImage: "/speakers/John%20Sanei/John-Sanei-Future-Next.jpg",
          url: "https://johnsanei.com/books/"
        },
        {
          id: "john-book-6",
          title: "Magnetize",
          description: "Attracting future-focused abundance by changing your leadership frequency.",
          coverImage: "/speakers/John%20Sanei/John-Sanei-Magnetize.jpg",
          url: "https://johnsanei.com/books/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="john-sanei" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="john-sanei" 
        customVideos={[
          {
            id: "john-video-1",
            label: "Experience Reel",
            youtubeId: "skR1egpPlCY"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
