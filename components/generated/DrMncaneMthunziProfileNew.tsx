import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "PhD", subtitle: "Economic Inclusion (Wits)" },
  { label: "M. Com", subtitle: "UKZN" },
  { label: "AMP", subtitle: "Harvard" },
  { label: "PMD", subtitle: "GIBS" },
  { label: "EDP", subtitle: "GIBS" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Business Turnaround & Operational Discipline",
    copy: "Diagnosing structural weaknesses and constructing recovery pathways. Leveraging owner-operator insights to steer organisations through supply chain, procurement, and pricing crises."
  },
  {
    number: "02",
    title: "Economic Inclusion & Procurement Strategy",
    copy: "Designing policies and procurement frameworks that create sustainable growth, supplier ecosystem restructuring, and active value chain participation."
  },
  {
    number: "03",
    title: "Public Sector Reform & De-bottlenecking",
    copy: "Removing institutional bottlenecks and simplifying regulatory, compliance, and government interface systems for corporate agility."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr Mncane Mthunzi is a seasoned businessman and respected turnaround strategist whose career has been defined by restoring organisational clarity, rebuilding operational discipline and positioning companies for sustainable growth. His work sits at the intersection of strategy, finance, operations, governance and economic inclusion, which gives him a rare ability to diagnose structural weaknesses and design recovery pathways that deliver measurable impact.",
  "With hands-on experience as an owner-operator of Gravaton, a hygiene equipment refurbishment business, Dr Mthunzi understands operational realities at a granular level. He has steered Gravaton through complex procurement environments, supply chain disruptions and pricing pressures, giving him practical insight into the real levers that drive efficiency and margin recovery. His involvement in the turnaround of a sugar mill expansion programme has further strengthened his expertise in major capital projects, vendor consolidation, procurement optimisation and organisational stabilisation, which are core elements in any business turnaround environment.",
  "In his recent assignements, he served as Strategy Lead for the Red Tape Reduction Project in the Presidency of the Republic of South Africa. This role sharpened his ability to navigate complex public sector systems, remove institutional bottlenecks and design reforms that simplify processes for businesses. This experience has had enduring value in his consulting work, particularly in industries where regulatory constraints, compliance burdens or government interfaces threaten business performance.",
  "Dr Mthunzi’s portfolio includes high-stakes transformation and recovery roles in both the private and public sectors. As Chief Operations Officer at the Edcon Group, he oversaw real estate, supply chain, global stock sourcing, human resources and shared services at a time when the company faced significant operational and financial strain. His leadership contributed to stabilising core systems and restoring operational alignment. He also played a senior oversight role in the transition of Edcon into business rescue, including the sale of its retail formats to new owners, a process that safeguarded thousands of jobs and preserved the legacy brands of Edgars and Jet. Before this, he served the Massmart Group as Supplier Development Executive, followed by his role as a Director on the Builders Board and Executive Committee where he led the store growth strategy, nationwide store roll-outs and store operations. Each position deepened his knowledge of turnaround, retail optimisation, operational integration and supplier ecosystem restructuring.",
  "He is the former CEO of the Consumer Goods Council of South Africa, a role that expanded his insights into national value chains, industry competitiveness, regulatory reform and stakeholder alignment. His earlier professional foundation was built at Microsoft, where he worked as a Strategy Consultant and Sales Executive servicing South Africa’s economic cluster departments such as National Treasury, Transnet, SARS, Denel, the Department of Trade and Industry, and the State Information Technology Agency. He began his career at Accenture, delivering large-scale systems integration and business solutions for Transnet, Caterpillar, Telkom, Cell-C and the Department of Welfare. These roles gave him a powerful grounding in systems thinking, operational modelling and enterprise-level transformation.",
  "As the past President of the Black Management Forum, Dr Mthunzi has long been a recognised voice on leadership, business recovery, transformation and institutional reform. His writings and public commentary demonstrate a viewpoint: sustainable turnarounds require disciplined execution, reconfigured value chains, empowered leadership, and a commitment to inclusive economic models. Today, he is building a consulting practice that brings together this extensive background into a single, strategic offering. His work focuses on business turnaround, operational stabilisation, organisational restructuring, procurement optimisation, growth strategy and economic inclusion. He leverages both his academic expertise and his executive experience to help organisations confront complexity, restore momentum and build futures that are competitive, resilient and socially grounded."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "bmf", name: "BLACK MANAGEMENT FORUM" },
  { id: "edcon", name: "EDCON GROUP" },
  { id: "cgcs", name: "CGCSA" },
  { id: "microsoft", name: "MICROSOFT" }
];

const customMedia = [
  {
    id: "mncane-media-1",
    headline: "A Conversation With Mncane Mthunzi President of the BMF Personal",
    publication: "Leadership Conversations",
    date: "",
    url: "https://leadershipconversations.co.za/conversations-with-leaders/a-conversation-with-mncane-mthunzi-president-of-the-bmf-personal/",
    action: "Read Article",
    image: "/speakers/Mncane%20Mthunzi/Mncane-Mthunzi-3.jpg"
  },
  {
    id: "mncane-media-2",
    headline: "BMF’s Mncane Mthunzi on Steinhoff, KPMG and transformation",
    publication: "CNBC Africa",
    date: "",
    url: "https://www.youtube.com/watch?v=4JNzrhvDblo",
    action: "Watch Video",
    image: "/speakers/Mncane%20Mthunzi/Mncane-Mthunzi-7.jpg"
  },
  {
    id: "mncane-media-3",
    headline: "Out-going BMF President Mncane Mthunzi reflects on his tenure",
    publication: "African Leader",
    date: "",
    url: "https://businessmediamags.co.za/government-politics/african-leader/the-need-for-black-executives-and-role-models/",
    action: "Read Article",
    image: "/speakers/Mncane%20Mthunzi/Mncane-Mthunzi-8.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Mncane Mthunzi"
      speakerTitle="Dr."
      speakerDesignation="Businessman, Business Turnaround Specialist & Researcher"
      speakerRole="Turnaround Strategy & Economic Inclusion Executive."
      speakerRef="TSF-MM-21"
      heroBackgroundImage="/speakers/Mncane%20Mthunzi/Mncane-Mthunzi-9.jpg"
      biographyImage="/speakers/Mncane%20Mthunzi/Mcane2-12.jpg"
      bioHook="“Sustainable turnarounds require disciplined execution, reconfigured value chains, and empowered leadership.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="mncane-mthunzi" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="mncane-mthunzi" 
        customVideos={[
          {
            id: "mncane-video-1",
            label: "Experience Reel",
            youtubeId: "cIrutflEsfg"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
