"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "kr-professor",
    label: "Professor at ISHS (UNISA)",
    subtitle: "Runs the Research Unit on Men & Masculinities and the Transdisciplinary African Psychologies Programme."
  },
  {
    id: "kr-psyssa",
    label: "Former President of PsySSA",
    subtitle: "Served as President of the Psychological Society of South Africa (2009-2010)."
  },
  {
    id: "kr-sonke",
    label: "Former Board Chair, Sonke",
    subtitle: "Chaired the board of Sonke Gender Justice, promoting gender equality across Africa."
  }
];

const STRATEGIC_THEMES = [
  {
    id: "masculinities-violence",
    number: "Theme 01",
    title: "Men, Masculinities & Violence.",
    copy: "Deconstructing toxic masculinity archetypes and defining pathways to more loving, supportive male identities."
  },
  {
    id: "fatherhood-parenting",
    number: "Theme 02",
    title: "Positive Fatherhood & Family Dynamics.",
    copy: "Unpacking the evolving role of fathers in South African families to prevent gender-based violence."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Kopano Ratele is a professor in the Institute of Social and Health Sciences (ISHS) at the University of South Africa (UNISA) and researcher in the Violence, Injury & Peace Research Unit. He runs the Research Unit on Men & Masculinities and the Transdisciplinary African Psychologies Programme. He was a professor at the University of Western Cape in the Department of Psychology and in Women & Gender Studies.",
  "Kopano has also been co-director of the South African Medical Research Council-UNISA Violence, Injury & Peace Research Unit and President of the Psychological Society of South Africa (2009-2010). He chaired the board of Sonke Gender Justice, a South African non-governmental organisation working across Africa to promote gender equality, prevent domestic and sexual violence, and reduce the spread and impact of HIV and AIDS.",
  "He is best known for his work on issues of identity, violence, sexuality, and masculinity. He has an extensive list of scholarly articles, books, and presentations delivered around the world. He has edited and co-edited the books From Boys to Men: Social Construction of Masculinities in Contemporary Society and Inter-Group relations: South African Perspectives. He is also editor-in-chief of African Safety Promotion: A Journal of Injury and Violence Prevention and books editor of the South African Journal of Psychology.",
  "Book Professor Kopano Ratele through The Speakers Firm, Africa’s #1 Strategic Speakers Bureau, to bring definitive psychological safety frameworks, masculinity transformation insights, and identity-focused keynotes to your organization or summit."
];

const BOOKS = [
  {
    id: "why-men-hurt",
    title: "Why Men Hurt Women and Other Reflections on Love, Violence and Masculinity",
    description: "This book seeks to imagine the possibility of a more loving masculinity in a society where structural violence, failures of government and economic inequality underpin much of the violent behaviour that men display.",
    coverImage: "/speakers/Professor Kopano Ratele/Why-Men-Hurt-Women-and-Other-Reflections-on-Love,-Violence-and-Masculinity.jpg",
    url: "https://witspress.co.za/page/detail/Why-Men-Hurt-Women-and-Other-Reflections-on-Love-Violence-and-Masculinity/?K=9781776147632"
  },
  {
    id: "world-looks-like",
    title: "The World Looks Like This From Here: Thoughts on African Psychology",
    description: "A foundational text on African psychologies, exploring transdisciplinary perspectives on identity, healing, and mental wellness from an African locus.",
    coverImage: "/speakers/Professor Kopano Ratele/The-World-Looks-Like-This-From-Here.jpg",
    url: "https://witspress.co.za/page/detail/The-World-Looks-Like-This-From-Here/?K=9781776143931"
  }
];

const SOCIAL_PROOF_LOGOS = [
  { id: "unisa", name: "UNISA" },
  { id: "sonke", name: "SONKE GENDER JUSTICE" },
  { id: "psyssa", name: "PSYCHOLOGICAL SOCIETY OF SA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "ratele-art-1",
      headline: "Loving Men with Kopano Ratele",
      publication: "Stellenbosch University / Sun.ac.za",
      date: "2023",
      action: "Listen to Podcast",
      url: "https://www0.sun.ac.za/psychology/2023/03/09/podcast-loving-men-with-kopano-ratele/",
      image: "/speakers/Professor Kopano Ratele/Professor-Kopano-Ratele-The-Speakers-Firm-3.jpg"
    },
    {
      id: "ratele-art-2",
      headline: "Book Review: Why Men Hurt Women and Other Reflections on Love, Violence and Masculinity",
      publication: "Stellenbosch University",
      date: "2023",
      action: "Read Review",
      url: "https://www0.sun.ac.za/psychology/2023/03/09/book-review-why-men-hurt-women-and-other-reflections-on-love-violence-and-masculinity/",
      image: "/speakers/Professor Kopano Ratele/Professor-Kopano-Ratele-The-Speakers-Firm-4.jpg"
    },
    {
      id: "ratele-art-3",
      headline: "State of South Africa’s Fathers 2021 Report Launch",
      publication: "Stellenbosch University / SOSAF",
      date: "2021",
      action: "Read Report Details",
      url: "https://www0.sun.ac.za/psychology/2021/11/20/state-of-south-africas-fathers-2021/",
      image: "/speakers/Professor Kopano Ratele/Professor-Kopano-Ratele-The-Speakers-Firm-5.jpg"
    }
  ];

  const customVideos = [
    {
      id: "ratele-vid-1",
      label: "Prof. Kopano Ratele on Reclaiming Loving Masculinities",
      youtubeId: "-cQoaRMsbOc"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Professor Kopano Ratele"
      speakerTitle=""
      speakerDesignation="Psychologist & Scholar of Men & Masculinities Studies"
      speakerRole="Academic, Researcher & Bestselling Author"
      speakerRef="TSF-KR-39"
      heroBackgroundImage="/speakers/Professor Kopano Ratele/Professor-Kopano-Ratele-The-Speakers-Firm-9.jpg"
      biographyImage="/speakers/Professor Kopano Ratele/Professor-Kopano-Ratele-The-Speakers-Firm-2.jpg"
      bioHook="“Redefining positive masculinity, understanding the roots of violence, and imagining a more loving fatherhood in contemporary society.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="professor-kopano-ratele" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="professor-kopano-ratele" 
        customIntroText="Masculinity dialogues, psychological safety masterclasses, and gender-inclusive leadership keynotes led by Prof. Kopano Ratele."
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
