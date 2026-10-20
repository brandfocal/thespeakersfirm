"use client";

import * as React from "react";
import { SpeakerProfileTemplate } from "./SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "./ProfileAdditionalSectionsOthers";

const CREDENTIAL_BADGES = [
  {
    id: "mz-credentials",
    label: "Specialist OB-Gynae & Fellow of FECSM",
    subtitle: "MBChB (UKZN), FCOG(SA) (Wits), Fellow of the European Committee of Sexual Medicine (Budapest / ESSM / ISSM)"
  },
  {
    id: "mz-founder",
    label: "Founder, We See You Consultancy",
    subtitle: "Pioneering health and information consultancy delivering innovative solutions in Sexual and Reproductive Health & Wellness"
  },
  {
    id: "mz-media-presence",
    label: "Leading Resident Media & Wellness Expert",
    subtitle: "Featured resident authority on Mzansi Magic's Sunday Sexy Love, Married at First Sight (S1-3), Showmax's Sex & Pleasure, and Clicks Wellness"
  },
  {
    id: "mz-author-advocate",
    label: "Published Author & Glamour Woman of the Year",
    subtitle: "Author of 'Mommy, My Body’s Changing' and Glamour Woman of the Year in Healthcare 2025; DStv Content Creator Cause Award Nominee"
  }
];

const STRATEGIC_THEMES = [
  {
    id: "the-cyclical-advantage",
    number: "Theme 01",
    title: "The Cyclical Advantage: Honoring Women's Biological Realities in Executive & Professional Spaces",
    copy: "Modern workplace structures often operate on linear 24-hour rhythms that disregard women's cyclical endocrinology. Dr. Mpume unpacks the science of women's hormonal cycles, menstruation, perimenopause, and reproductive health — demonstrating how organizations can design compassionate, high-performance environments that support women at every biological phase."
  },
  {
    id: "dismantling-taboos",
    number: "Theme 02",
    title: "Dismantling Taboos: Courageous Conversations in Sexual & Reproductive Health",
    copy: "From sexual dysfunction and chronic reproductive conditions to intimate relationships and postpartum realities, silence breeds unnecessary suffering. Drawing on her clinical sexology and gynaecological practice, Dr. Gynae breaks down pervasive myths, normalises taboo conversations, and equips leaders with the psychological safety to address vital health dialogues."
  },
  {
    id: "intimacy-connection-vitality",
    number: "Theme 03",
    title: "Intimacy, Connection & Well-Being: The Overlooked Pillar of Mental Agility & Vitality",
    copy: "Sexual health is not an isolated luxury; it is intimately linked to mental wellness, relational stability, cardiovascular health, and emotional resilience. Dr. Mpume explores the neuropsychological dimensions of intimacy and connection, providing practical frameworks for couples and individuals to nurture vitality, resilience, and emotional equilibrium."
  },
  {
    id: "intergenerational-health",
    number: "Theme 04",
    title: "Intergenerational Health: Equipping the Next Generation with Body Confidence & Autonomy",
    copy: "Inspired by her book Mommy, My Body’s Changing, this keynote explores puberty, body image, and reproductive education for families, schools, and community leaders. Dr. Mpume demonstrates how early, shame-free dialogue fosters lifelong self-worth, preventative health behaviors, and empowered young women."
  },
  {
    id: "womens-wellness-burnout",
    number: "Theme 05",
    title: "Women's Wellness & Burnout: Navigating Hormonal Shifts, Perimenopause & Longevity",
    copy: "Perimenopause and hormonal transitions often collide with the peak of women's executive careers. Dr. Gynae demystifies the biological shifts, cognitive symptoms, and physical demands of midlife transitions — empowering women with medical insights, preventative strategies, and lifestyle medicine for sustained vitality."
  }
];

const FULL_BIO_PARAGRAPHS = [
  "Dr. Nompumelelo Zenda, affectionately and widely known as 'Dr. Gynae', is a highly experienced Obstetrician & Gynaecologist and Medical Sexologist, recognized as one of South Africa's foremost authorities in women's sexual and reproductive health. Based in Johannesburg, South Africa, she is the founder of 'We See You', an innovative health and information consultancy dedicated to pioneering solutions, education, and advocacy in Sexual and Reproductive Health & Wellness.",
  "Dr. Gynae’s medical credentials reflect exceptional academic rigor and specialized international training. She holds an MBChB from the Nelson R. Mandela School of Medicine at the University of KwaZulu-Natal (UKZN) and specialized in Obstetrics and Gynaecology, earning her Fellowship of the College of Obstetricians and Gynaecologists of South Africa (FCOG SA) from the University of the Witwatersrand (Wits). In 2018, as a recipient of the prestigious International Society of Sexual Medicine scholarship, she attended the European Society of Sexual Medicine (ESSM) School of Sexual Medicine programming in Budapest, Hungary, subsequently qualifying as a Fellow of the European Committee of Sexual Medicine (FECSM) — solidifying her status as a specialized Medical Sexologist.",
  "With deep clinical expertise in sexual medicine and an unwavering commitment to women's holistic well-being, Dr. Gynae guides women to understand, celebrate, and embrace their cyclical biological nature. She champions a comprehensive approach to health that bridges clinical gynecology, sexual medicine, emotional wellness, and lifestyle endocrinology — believing that true equity and quality of life can only be achieved when women are fully empowered with knowledge over their bodies.",
  "Beyond clinical practice, Dr. Gynae is a dynamic, highly trusted household name across South African media and television. She is celebrated for her transformative work on Mzansi Magic’s 'Sunday Sexy Love', where she counsels couples through complex relational and sexual dynamics, and as a resident guest expert on Showmax’s hit series 'Sex & Pleasure'. She has served as guest expert on Mzansi Magic's 'Married at First Sight' (Seasons 1–3) and acts as an official Clicks Wellness Expert, making complex medical facts accessible, relatable, and free of shame.",
  "As an accomplished author, Dr. Gynae penned 'Mommy, My Body’s Changing: A Girl in Bloom’s Trusty Handbook for Growing Up' — an acclaimed, beautifully crafted guide designed to dismantle taboos, answer awkward questions, and guide young girls through puberty and menstruation with self-assurance and dignity. Her advocacy has garnered wide recognition, including being named Glamour Woman of the Year in Healthcare 2025 and a nomination for the DStv Content Creator Award in the Cause Award category.",
  "Book Dr Mpume Zenda through The Speakers Firm, A Leading African Speakers Bureau, to deliver transformative medical authority, compassionate insight, and groundbreaking keynotes on women's health, cyclical wellness, and sexual well-being to your next conference, corporate symposium, or wellness summit."
];

const BOOKS = [
  {
    id: "mommy-my-bodys-changing",
    title: "Mommy, My Body’s Changing: A Girl in Bloom’s Trusty Handbook for Growing Up",
    description: "A compassionate, trusty handbook designed to dispel myths, ease anxieties, and break taboos associated with puberty, menstruation, body image, and growing up with confidence and pride.",
    coverImage: "/speakers/Dr%20Mpume%20Zenda/Mommy%20My%20Bodys%20Changing-%20A%20Girl%20in%20Bloom%E2%80%99s%20Trusty%20Handbook%20for%20Growing%20Up%20-%20Dr%20Mpume%20Zande.jpg",
    url: "https://publisher.co.za/product/mommy-my-bodys-changing-a-girl-in-blooms-trusty-handbook-for-growing-up/"
  }
];

const SOCIAL_PROOF_LOGOS = [
  { id: "essm", name: "ESSM & ISSM" },
  { id: "wits", name: "WITS UNIVERSITY" },
  { id: "ukzn", name: "UKZN MEDICINE" },
  { id: "mzansimagic", name: "MZANSI MAGIC" },
  { id: "showmax", name: "SHOWMAX" },
  { id: "clicks", name: "CLICKS WELLNESS" },
  { id: "glamour", name: "GLAMOUR SA" }
];

export const AboutTeamSection = () => {
  const customMedia = [
    {
      id: "mz-art-1",
      headline: "Puberty and Body Image: Dr Mpume Zenda's Daughter's Experience Inspires New Book",
      publication: "News24 / Drum Magazine",
      date: "31 Jan 2024",
      action: "Read Article",
      url: "https://www.news24.com/drum/advice/health/puberty-and-body-image-dr-mpume-zendas-daughters-experience-inspires-new-book-20240131",
      image: "/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm.jpg",
      caption: "Unpacking the inspiration behind 'Mommy, My Body’s Changing' and fostering body positivity."
    },
    {
      id: "mz-art-2",
      headline: "Why Do UTIs Keep Coming Back? Dr Zenda Explains What Women Can Do",
      publication: "Eyewitness News (EWN)",
      date: "10 Sep 2026",
      action: "Read Health Feature",
      url: "https://www.ewn.co.za/2026/09/10/why-do-utis-keep-coming-back-dr-zenda-explains-what-women-can-do",
      image: "/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm2.jpg",
      caption: "Expert reproductive and urinary tract wellness guidance on national radio and digital news."
    },
    {
      id: "mz-art-3",
      headline: "There's Nothing Wrong With Getting a C-Section: Our Resident Gynae Explains Why",
      publication: "The Citizen",
      date: "Healthcare Insights",
      action: "Read Column",
      url: "https://www.citizen.co.za/lifestyle/health/theres-nothing-wrong-with-getting-a-c-section-our-resident-gynae-explains-why/",
      image: "/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm3.jpg",
      caption: "Resident Gynae insights demystifying maternal care, birth choices, and maternal dignity."
    }
  ];

  const customVideos = [
    {
      id: "mz-vid-1",
      label: "The Motherhood Network: Dr Mpume on Sex, Intimacy & What No One Tells Women",
      youtubeId: "tbAQojlKy1g",
      thumbnail: "https://img.youtube.com/vi/tbAQojlKy1g/hqdefault.jpg"
    }
  ];

  return (
    <SpeakerProfileTemplate
      speakerName="Dr Mpume Zenda"
      speakerTitle=""
      speakerDesignation="OB-Gynae, Medical Sexologist & Author"
      speakerRole="Founder of 'We See You' & Leading Authority in Women's Sexual Health"
      speakerRef="TSF-MZ-28"
      heroBackgroundImage="/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm5.jpg"
      heroMobileBackgroundImage="/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm-mobile.jpg"
      biographyImage="/speakers/Dr%20Mpume%20Zenda/Dr-Mpume-Zenda-The-Speakers-Firm4.jpg"
      bioHook="“By taking a comprehensive, empathetic approach to women's holistic health and reproductive medicine, we dismantle stigma, elevate bodily agency, and unlock higher quality of life for women everywhere.”"
      fullBiographyParagraphs={FULL_BIO_PARAGRAPHS}
      credentials={CREDENTIAL_BADGES}
      strategicThemes={STRATEGIC_THEMES}
      books={BOOKS}
      socialProofLogos={SOCIAL_PROOF_LOGOS}
      mediaArticlesSlot={
        <ProfileAdditionalMediaSections 
          speakerId="dr-mpume-zenda" 
          customMedia={customMedia} 
        />
      }
    >
      <ProfileAdditionalSections 
        speakerId="dr-mpume-zenda" 
        customVideos={customVideos}
      />
    </SpeakerProfileTemplate>
  );
};

export default AboutTeamSection;
