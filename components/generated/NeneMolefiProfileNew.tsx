"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mandate-molefi-ceo",
    label: "CEO Mandate Molefi",
    subtitle: "Over 16 years leading large-scale culture change and leadership projects."
  },
  {
    id: "gibs-lecturer",
    label: "GIBS Associate Lecturer",
    subtitle: "Lectures on Global Diversity, Inclusion, and Unconscious Bias."
  },
  {
    id: "diversity-collegium",
    label: "Diversity Collegium Member",
    subtitle: "Part of a prestigious global think tank of diversity experts."
  },
  {
    id: "dei-author",
    label: "Published DEI Author",
    subtitle: "Author of 'A Journey of Diversity & Inclusion in South Africa'."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "dei-strategy",
    number: "Theme 01",
    title: "Diversity, Equity & Inclusion (DEI) Strategy",
    copy: "Nene delivers actionable frameworks for board and executive committees on managing transformation, mitigating unconscious bias, and creating globally benchmarked inclusive work environments."
  },
  {
    id: "values-driven-culture",
    number: "Theme 02",
    title: "Values-Driven Corporate Culture Change",
    copy: "Inspiring teams to implement sustainable social entrepreneurship and align operational behaviors with core human values, building corporate resilience."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Nene Molefi is the CEO of Mandate Molefi HR Consultants, a company with a track record that spans over 16 years.",
  "Her versatility and experience in partnering with boards and executive committees has positioned her well to work with large scale culture change, transformation and leadership development projects. Over the past 18 years, Nene has gained a reputation both locally and internationally as a thought leader in Diversity & Inclusion, Values Driven Leadership & Transformation. She is a regular presenter at conferences around the world, including Malaysia, Bangladesh, Boston, Miami, USA, Zimbabwe and Zambia. She is an expert panellist for a Diversity & Inclusion Benchmark Tool. She is a member of the Diversity Collegium which is a think tank of globally recognised diversity experts.",
  "Nene is an associate lecturer for GIBS on Global Diversity and Unconscious Bias, an associate lecturer on Transformation Strategy for Stellenbosch Business School. She is an author of numerous publications including a chapter in the “Leadership Perspectives from the Front Line” and she has documented case studies from her client experiences, including her newly released book; A Journey of Diversity & Inclusion in South Africa. Nene is committed to Social Entrepreneurship. She sits on the board of Meals on Wheels which is a non-profit organisation which provide food consistently to the homeless and those in need in South Africa."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "mandate-molefi", name: "MANDATE MOLEFI" },
  { id: "gibs", name: "GIBS BUSINESS SCHOOL" },
  { id: "stellenbosch", name: "STELLENBOSCH BUSINESS SCHOOL" },
  { id: "meals-on-wheels", name: "MEALS ON WHEELS" }
];

const customMedia = [
  {
    id: "nene-media-1",
    headline: "Race & Unintended Consequences — Mandatemolefi",
    publication: "Mandatemolefi",
    date: "N/A",
    url: "https://mandatemolefi.co.za/portfolio/race-unintended-consequences/",
    action: "Read Article",
    image: "/speakers/Nene%20Molefi/Nene-Molefi-The-Speakers-Firm-4.jpg"
  },
  {
    id: "nene-media-2",
    headline: "Unconscious Bias- Nene Molefi — Mandatemolefi",
    publication: "Mandatemolefi",
    date: "N/A",
    url: "https://mandatemolefi.co.za/portfolio/unconscious-bias-nene-molefi/",
    action: "Read Article",
    image: "/speakers/Nene%20Molefi/Nene-Molefi-The-Speakers-Firm-5.jpg"
  },
  {
    id: "nene-media-3",
    headline: "Nene Diversity & Inclusion — Mandatemolefi",
    publication: "Mandatemolefi",
    date: "N/A",
    url: "https://mandatemolefi.co.za/portfolio/nene-diversity-inclusion/",
    action: "Read Article",
    image: "/speakers/Nene%20Molefi/Nene-Molefi-The-Speakers-Firm-6.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Nene Molefi"
      speakerTitle=""
      speakerDesignation="CEO Mandate Molefi & Diversity Strategist"
      speakerRole="Renowned Diversity & Inclusion thought leader, change strategist, and author."
      speakerRef="TSF-NM-15"
      heroBackgroundImage="/speakers/Nene%20Molefi/Nene-Molefi-The-Speakers-Firm-3.jpg"
      biographyImage="/speakers/Nene%20Molefi/Nene-Molefi-The-Speakers-Firm.jpg"
      bioHook="“Transformation is not a policy; it is a values-driven journey of human inclusion.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={[
        {
          id: "nene-book-1",
          title: "A Journey of Diversity & Inclusion in South Africa",
          description: "Nene's highly acclaimed book detailing case studies, client experiences, and deep insights on diversity, values-driven leadership, and transformation.",
          coverImage: "/speakers/Nene%20Molefi/Nene-Molefi-A-Journey-Of-Diversity-&-Inclusion-In-South-Africa.jpg",
          url: "https://mandatemolefi.co.za/product/a-journey-of-diversity-inclusion-by-nene-molefi-ebook/"
        }
      ]}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="nene-molefi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="nene-molefi" 
        customVideos={[
          {
            id: "nene-video-1",
            label: "Experience Reel",
            youtubeId: "6q9ie-lt9qA"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
