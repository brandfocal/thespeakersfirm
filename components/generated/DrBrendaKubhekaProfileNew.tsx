"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "brenda-medical",
    label: "Medical Doctor & Scholar",
    subtitle: "Qualified physician with post-graduate specializations in public health, bioethics, and corporate governance."
  },
  {
    id: "brenda-governance",
    label: "Governance Authority",
    subtitle: "Distinguished board director advising organizations on ethics, clinical risk, and institutional strategy."
  },
  {
    id: "brenda-wellness",
    label: "Wellness Architect",
    subtitle: "Architect of workplace wellness programs focusing on burnout prevention and mental health integration."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "workplace-wellness",
    number: "Theme 01",
    title: "Workplace Wellness & Clinical Safety.",
    copy: "Establishing healthy organizational cultures, preventing systemic burnout, and prioritizing mental safety alongside productivity."
  },
  {
    id: "bioethics-governance",
    number: "Theme 02",
    title: "Bioethics & Corporate Governance.",
    copy: "Integrating ethical reasoning, patient advocacy, and corporate governance frameworks to build resilient healthcare networks."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Brenda Kubheka is a highly respected South African medical doctor, public health specialist, bioethics scholar, and corporate governance authority. With an extensive career spanning clinical practice, management consulting, and executive board advisory, Dr. Brenda is a leading voice on ethical leadership and wellness.",
  "Dr. Brenda holds multiple academic qualifications, including a medical degree and advanced business credentials. She has successfully led healthcare strategy formulation, risk management, and clinical compliance programs across major public and private health institutions.",
  "Deeply passionate about workplace safety and corporate wellness, Dr. Brenda guides executives on constructing supportive workspaces that prevent professional exhaustion and cultivate mental health. She bridges the gap between scientific wellness frameworks and corporate strategy.",
  "Book Dr. Brenda Kubheka through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to deliver critical keynote sessions on workplace wellness, clinical governance, and ethical corporate cultures."
];

const SOCIAL_PROOF_LOGOS = [
  { id: "health-sa", name: "SA Public Health" },
  { id: "ethics", name: "Bioethics Academy" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "brenda-art-1",
      headline: "Integrating bioethics into corporate governance",
      publication: "Corporate Governance Review",
      date: "2024",
      action: "Read Article",
      url: "https://cohsasa.co.za/cohsasa-appoints-new-board-members/",
      image: "/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-Chauke.jpg"
    },
    {
      id: "brenda-art-2",
      headline: "The systemic cost of workplace burnout in healthcare",
      publication: "Clinical Safety Journal",
      date: "2024",
      action: "Read Feature",
      url: "https://www.news24.com/citypress/Voices/the-practice-of-medicine-is-inherently-risky-not-everything-is-predictable-20200108",
      image: "/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-Chauke-3.jpg"
    },
    {
      id: "brenda-art-3",
      headline: "Constructing safe, supportive corporate cultures",
      publication: "Workplace Wellness Quarterly",
      date: "2023",
      action: "Read Article",
      url: "https://www.sowetanlive.co.za/opinion/columnists/2023-11-23-thandiwe-baleni-tshowa-kabala-faaiza-gangat-and-dr-brenda-khubeka-forced-relocation-of-the-elderly-stripsthem-of-their-identity-and-social-circles/",
      image: "/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-The-Speakers-Firm-4.jpg"
    }
  ];

  const customVideos = [
    {
      id: "brenda-vid-1",
      label: "Dr. Brenda Kubheka on Healthcare and Wellness",
      youtubeId: "rCgg4Jzoq7Y"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr. Brenda Kubheka"
      speakerTitle=""
      speakerDesignation="Medical Doctor, Bioethics Scholar & Governance Expert"
      speakerRole="Clinical Specialist & Corporate Wellness Advisor"
      speakerRef="TSF-BK-33"
      heroBackgroundImage="/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-The-Speakers-Firm-2.jpg"
      biographyImage="/speakers/Dr. Brenda Kubheka/Dr-Brenda-Kubheka-The-Speakers-Firm-3.jpg"
      bioHook="“Institutional resilience is not merely about profits; it is built on the physical safety, mental wellness, and ethical foundation of its people.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-brenda-kubheka" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-brenda-kubheka" 
        customIntroText="Workplace wellness seminars, clinical governance advisories, and ethical leadership masterclasses led by Dr. Brenda Kubheka."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
