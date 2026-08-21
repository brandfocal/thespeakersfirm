"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mk-preservationist",
    label: "Cultural Preservationist",
    subtitle: "Founder of the AfrikanHeritage Ensemble and Mbuso Khoza Institute for Heritage and Cultural Studies."
  },
  {
    id: "mk-academic",
    label: "Academic & Lecturer",
    subtitle: "Holds a Master's in Arts Heritage from Wits University; lectures on African philosophy and cultural intelligence."
  },
  {
    id: "mk-media",
    label: "Media & Voice",
    subtitle: "Host of Ukhozi FM weekly feature and the Ikhosomba Lezincithabuchopho podcast."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "zulu-heritage",
    number: "Theme 01",
    title: "Zulu Heritage & Amabhubo.",
    copy: "Reawakening ancestral chants and traditional Zulu folk music to build community connection and belonging."
  },
  {
    id: "masculinity-mental-health",
    number: "Theme 02",
    title: "Masculinity & Mental Health.",
    copy: "Promoting dialogues around vulnerability, emotional healing, and manhood in corporate and community spaces."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "At The Speakers Firm, we proudly represent Mbuso Khoza, a globally celebrated South African musician, cultural preservationist, and keynote speaker whose work transcends performance, it is a movement of memory, identity, and healing. Revered for reawakening amabhubo, the sacred Zulu chants of ancestry, Mbuso transforms heritage into a blueprint for modern leadership and emotional intelligence.",
  "As one of Africa’s most profound voices on masculinity, leadership, and cultural transformation, Mbuso commands global stages with a rare blend of intellect, spirituality, and artistry. His keynotes, often delivered at men’s conferences, executive retreats, and leadership summits, challenge audiences to redefine strength, embrace vulnerability, and lead with authenticity. His message is both ancient and urgent, reminding us that in remembering who we are, we recover what the world needs most, purpose and soul.",
  "From his beginnings in Eshowe, KwaZulu-Natal, to performances across Europe and Africa, Mbuso’s journey reflects resilience and reawakening. His acclaimed albums Zilindile and Ifa Lomkhono fuse Afro-jazz and Zulu folk to create a sonic landscape of transformation, a soundtrack to leadership, healing, and belonging.",
  "Armed with a master’s in arts Heritage from Wits University, Mbuso lectures and advises on African philosophy, cultural intelligence, and leadership. As founder of the AfrikanHeritage Ensemble and visionary behind the Mbuso Khoza Institute for Heritage and Cultural Studies, he mentors emerging leaders to anchor power in identity and empathy.",
  "A survivor of depression and vocal advocate for men’s mental health, Mbuso speaks candidly about the intersection of culture, vulnerability, and wholeness. His weekly feature on Ukhozi FM and his podcast Ikhosomba Lezincithabuchopho continue to inspire national conversations on identity, healing, and manhood.",
  "Book Mbuso Khoza through The Speakers Firm, A Leading African Speakers Bureau, to bring heritage music, African philosophy lectures, and authentic masculinity dialogues to your next summit or corporate gathering."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "ukhozifm", name: "UKHOZI FM" },
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "joburgtheatre", name: "JOBURG THEATRE" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mk-art-1",
      headline: "Echoes of heritage: how Mbuso Khoza's music heals and inspires hope",
      publication: "IOL",
      date: "2025",
      action: "Read Article",
      url: "https://iol.co.za/entertainment/music/2025-09-02-echoes-of-heritage-how-mbuso-khozas-music-heals-and-inspires-hope/",
      image: "/speakers/Mbuso Khoza/Mbuso-Khoza-The-Speakers-Firm-8.jpg"
    },
    {
      id: "mk-art-2",
      headline: "Mbuso Khoza is a gem—our heritage and music live in him",
      publication: "GQ South Africa",
      date: "2025",
      action: "Read Interview",
      url: "https://www.gq.co.za/culture/entertainment/mbuso-khoza-is-a-gemour-heritage-and-music-live-in-him-99066081-f609-4eac-b373-56a664b1fb98",
      image: "/speakers/Mbuso Khoza/Mbuso-Khoza-The-Speakers-Firm-7.jpg"
    },
    {
      id: "mk-art-3",
      headline: "Mbuso Khoza and Joburg Theatre present sixth edition of ‘Isandlwana Lecture — The Musical’",
      publication: "The Citizen",
      date: "2025",
      action: "Read Article",
      url: "https://www.citizen.co.za/entertainment/mbuso-khoza-and-joburg-theatre-present-sixth-edition-of-isandlwana-lecture-the-musical/",
      image: "/speakers/Mbuso Khoza/Mbuso-Khoza-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "mk-vid-1",
      label: "Mbuso Khoza on Heritage, Healing & Zulu Culture",
      youtubeId: "kqvcpaJRxyk"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Mbuso Khoza"
      speakerTitle=""
      speakerDesignation="Heritage Musician & Cultural Preservationist"
      speakerRole="Heritage Specialist, Historian & Author"
      speakerRef="TSF-MK-62"
      heroBackgroundImage="/speakers/Mbuso Khoza/Mbuso-Khoza-The-Speakers-Firm-10.jpg"
      biographyImage="/speakers/Mbuso Khoza/Mbuso-Khoza-The-Speakers-Firm-9.jpg"
      bioHook="“Transcending performance to create a movement of memory, identity, and healing, bridging ancestral wisdom and modern leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="mbuso-khoza" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mbuso-khoza" 
        customIntroText="Performances, African philosophy lectures, and cultural dialogues led by Mbuso Khoza."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
