import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  { label: "Economist", subtitle: "" },
  { label: "Analyst", subtitle: "" },
  { label: "Strategist", subtitle: "" }
];

const STRATEGIC_THEMES = [
  {
    number: "01",
    title: "Black Economic Empowerment (BEE) Architecture",
    copy: "Analyzing the systemic impact of B-BBEE frameworks and economic transformation policies. Structuring broad-based participation models that align with economic reality."
  },
  {
    number: "02",
    title: "Macroeconomic Policy Critique",
    copy: "Providing independent critique of monetary and fiscal policies, targeting GDP expansion, job creation, and developmental central banking mandates."
  },
  {
    number: "03",
    title: "Financial Journalism & Policy Consulting",
    copy: "Translating complex fiscal statistics, corporate restructuring, and global economic crises into board briefings and accessible strategic commentaries."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "CEDT founder Duma Gqubule has spent the past two decades as a financial journalist, analyst, advisor and consultant on issues of economic development and transformation. As a financial journalist, he wrote extensively about economic policy and the pioneering black companies such as New Africa Investments Limited and Real Africa Investments Limited during the mid-1990s. His work was recognised and he later worked for the BEE Commission, chaired by Cyril Ramaphosa, South Africa’s current deputy president. He was co-author of the commission’s landmark report, which was presented to former president Thabo Mbeki in 2001, after consultations with stakeholders over a period of 18 months. The historic report paved the way for the country’s current BEE laws and policies.​",
  "He was also involved in landmark national and enterprise economic transformation initiatives and worked for numerous organisations in the public and private sector. These include the Department of Transport (senior policy advisor), the City of Johannesburg, Business Unity South Africa, the South African Mining Development Association and many large private companies. He was appointed by the Department of Trade & Industry to serve on a panel to evaluate the impact of the global financial crisis of 2008 to 2009 on BEE transactions.​"
];

const SOCIAL_PROOF_LOGOS = [
  { id: "cedt", name: "CEDT FOUNDER" },
  { id: "bee-commission", name: "BEE COMMISSION" },
  { id: "dti", name: "DEPT OF TRADE & INDUSTRY" },
  { id: "busa", name: "BUSINESS UNITY SA" }
];

const customMedia = [
  {
    id: "duma-media-1",
    headline: "DUMA GQUBULE: BEE still makes economic and social sense",
    publication: "Business Day",
    date: "2025-09-02",
    url: "https://www.businesslive.co.za/bd/opinion/2025-09-02-duma-gqubule-bee-still-makes-economic-and-social-sense/",
    action: "Read Article",
    image: "/speakers/Duma%20Gqubule/Duma-Gqubule-the-speakers-firm-7.jpg"
  },
  {
    id: "duma-media-2",
    headline: "DUMA GQUBULE: Bank must stop trying to bully SA into 3% inflation target",
    publication: "Business Day",
    date: "2025-08-05",
    url: "https://www.businesslive.co.za/bd/opinion/columnists/2025-08-05-duma-gqubule-bank-must-stop-trying-to-bully-sa-into-3-inflation-target/",
    action: "Read Article",
    image: "/speakers/Duma%20Gqubule/Duma-Gqubule-the-speakers-firm-5.jpg"
  },
  {
    id: "duma-media-3",
    headline: "DUMA GQUBULE: Treasury and Bank to blame for ailing economy, joblessness",
    publication: "Business Day",
    date: "2025-03-04",
    url: "https://www.businesslive.co.za/bd/opinion/columnists/2025-03-04-duma-gqubule-treasury-and-bank-to-blame-for-ailing-economy-joblessness/",
    action: "Read Article",
    image: "/speakers/Duma%20Gqubule/Duma-Gqubule-the-speakers-firm-6.jpg"
  }
];

export const AboutTeamSection = () => {
  return (
    <SpeakerProfileTemplate
      speakerName="Duma Gqubule"
      speakerTitle=""
      speakerDesignation="Founder of CEDT, Financial Commentator & Analyst"
      speakerRole="CEDT Founder & Economic Development Consultant."
      speakerRef="TSF-DG-24"
      heroBackgroundImage="/speakers/Duma%20Gqubule/Duma-Gqubule-the-speakers-firm-8.jpg"
      biographyImage="/speakers/Duma%20Gqubule/Duma-Gqubule-the-speakers-firm.jpg"
      bioHook="“Broad-Based Black Economic Empowerment is not just a policy requirement—it is a macroeconomic imperative for structural stability.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections speakerId="duma-gqubule" customMedia={customMedia} />
      }
    >
      <ProfileAdditionalSections 
        speakerId="duma-gqubule" 
        customVideos={[
          {
            id: "duma-video-1",
            label: "Experience Reel",
            youtubeId: "QIN2OaisfJU"
          }
        ]}
      />
    </SpeakerProfileTemplate>
  );
};
