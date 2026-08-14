import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText, Globe } from "lucide-react";
import { fetchAPI } from "@/lib/graphql";

export const dynamic = "force-dynamic";
import { SpeakerProfileTemplate } from "@/components/generated/SpeakerProfileTemplate";
import { ProfileAdditionalSections, ProfileAdditionalMediaSections } from "@/components/generated/ProfileAdditionalSectionsOthers";
import { AboutTeamSection } from "@/components/generated/BonangMohaleProfileNew";
import { AboutTeamSection as PhumzileProfile } from "@/components/generated/DrPhumzileMlamboNgcukaProfileNew";
import { AboutTeamSection as ClementProfile } from "@/components/generated/ClementManyathelaProfileNew";
import { AboutTeamSection as SizweProfile } from "@/components/generated/SizweMpofuWalshProfileNew";
import { AboutTeamSection as NoziphoProfile } from "@/components/generated/NoziphoTshabalalaProfileNew";
import { AboutTeamSection as PrinceProfile } from "@/components/generated/PrinceMasheleProfileNew";
import { AboutTeamSection as TryphosaProfile } from "@/components/generated/TryphosaRamanoProfileNew";
import { AboutTeamSection as KhayaProfile } from "@/components/generated/KhayaSitholeProfileNew";
import { AboutTeamSection as SiphiweProfile } from "@/components/generated/SiphiweMoyoProfileNew";
import { AboutTeamSection as LincolnProfile } from "@/components/generated/LincolnMaliProfileNew";
import { AboutTeamSection as StaffordProfile } from "@/components/generated/StaffordMasieProfileNew";
import { AboutTeamSection as MarwalaProfile } from "@/components/generated/ProfTshilidziMarwalaProfileNew";
import { AboutTeamSection as SylvesterProfile } from "@/components/generated/SylvesterChaukeProfileNew";
import { AboutTeamSection as MzamoProfile } from "@/components/generated/MzamoMasitoProfileNew";
import { AboutTeamSection as MuziProfile } from "@/components/generated/MuziKuzwayoProfileNew";
import { AboutTeamSection as MushambiProfile } from "@/components/generated/MushambiMutumaProfileNew";
import { AboutTeamSection as ZukieSiyotulaProfile } from "@/components/generated/ZukieSiyotulaProfileNew";
import { AboutTeamSection as NombasaTsengwaProfile } from "@/components/generated/NombasaTsengwaProfileNew";
import { AboutTeamSection as ThuliMadonselaProfile } from "@/components/generated/ThuliMadonselaProfileNew";
import { AboutTeamSection as NeneMolefiProfile } from "@/components/generated/NeneMolefiProfileNew";
import { AboutTeamSection as FemiAdebanjiProfile } from "@/components/generated/FemiAdebanjiProfileNew";
import { AboutTeamSection as AlistairMokoenaProfile } from "@/components/generated/AlistairMokoenaProfileNew";
import { AboutTeamSection as SiphoMasekoProfile } from "@/components/generated/SiphoMasekoProfileNew";
import { AboutTeamSection as JohnSaneiProfile } from "@/components/generated/JohnSaneiProfileNew";
import { AboutTeamSection as CallanAbrahamsProfile } from "@/components/generated/CallanAbrahamsProfileNew";
import { AboutTeamSection as KgomotsoMotshidiProfile } from "@/components/generated/KgomotsoMotshidiProfileNew";
import { AboutTeamSection as VumileMsweliProfile } from "@/components/generated/VumileMsweliProfileNew";
import { AboutTeamSection as TselisoMohlomiProfile } from "@/components/generated/TselisoMohlomiProfileNew";
import { AboutTeamSection as PulengMokhoalibeProfile } from "@/components/generated/PulengMokhoalibeProfileNew";
import { AboutTeamSection as BoniweDunsterProfile } from "@/components/generated/BoniweDunsterProfileNew";
import { AboutTeamSection as MncaneMthunziProfile } from "@/components/generated/DrMncaneMthunziProfileNew";
import { AboutTeamSection as SifisoSkenjanaProfile } from "@/components/generated/SifisoSkenjanaProfileNew";
import { AboutTeamSection as EliasMasilelaProfile } from "@/components/generated/EliasMasilelaProfileNew";
import { AboutTeamSection as DumaGqubuleProfile } from "@/components/generated/DumaGqubuleProfileNew";
import { AboutTeamSection as DrPaliLehohlaProfile } from "@/components/generated/DrPaliLehohlaProfileNew";
import { AboutTeamSection as ThembisaFakudeProfile } from "@/components/generated/ThembisaFakudeProfileNew";
import { AboutTeamSection as ProfMcebisiNdletyanaProfile } from "@/components/generated/ProfMcebisiNdletyanaProfileNew";
import { AboutTeamSection as DrRalphMathekgaProfile } from "@/components/generated/DrRalphMathekgaProfileNew";
import { AboutTeamSection as EbrahimFakirProfile } from "@/components/generated/EbrahimFakirProfileNew";
import { AboutTeamSection as DrSiphamandlaZondiProfile } from "@/components/generated/DrSiphamandlaZondiProfileNew";
import { AboutTeamSection as TebogoProVerbThekishoProfile } from "@/components/generated/TebogoProVerbThekishoProfileNew";
import { AboutTeamSection as ThapeloMokoenaProfile } from "@/components/generated/ThapeloMokoenaProfileNew";
import { AboutTeamSection as JoshuaMalulekeProfile } from "@/components/generated/JoshuaMalulekeProfileNew";
import { AboutTeamSection as BulelaniBalabalaProfile } from "@/components/generated/BulelaniBalabalaProfileNew";
import { AboutTeamSection as LeboGunguluzaProfile } from "@/components/generated/LeboGunguluzaProfileNew";
import { AboutTeamSection as LoratoTshenkengProfile } from "@/components/generated/LoratoTshenkengProfileNew";
import { AboutTeamSection as MandlaJRadebeProfile } from "@/components/generated/MandlaJRadebeProfileNew";
import { AboutTeamSection as SechabaMotsieloaProfile } from "@/components/generated/SechabaMotsieloaProfileNew";
import { AboutTeamSection as MiltonNkosiProfile } from "@/components/generated/MiltonNkosiProfileNew";
import { AboutTeamSection as RamsMaboteProfile } from "@/components/generated/RamsMaboteProfileNew";
import { AboutTeamSection as PaulNzimandeProfile } from "@/components/generated/PaulNzimandeProfileNew";
import { AboutTeamSection as KhayaDlangaProfile } from "@/components/generated/KhayaDlangaProfileNew";
import { AboutTeamSection as ZamoMbeleProfile } from "@/components/generated/ZamoMbeleProfileNew";
import { AboutTeamSection as TimothyMauriceWebsterProfile } from "@/components/generated/TimothyMauriceWebsterProfileNew";
import { AboutTeamSection as VictorRamatheseleProfile } from "@/components/generated/VictorRamatheseleProfileNew";
import { AboutTeamSection as AbnerMaririProfile } from "@/components/generated/AbnerMaririProfileNew";
import { AboutTeamSection as QueenRamotsehoaProfile } from "@/components/generated/QueenRamotsehoaProfileNew";
import { AboutTeamSection as JoyKaapuProfile } from "@/components/generated/JoyKaapuProfileNew";
import { AboutTeamSection as LindaNtuliProfile } from "@/components/generated/LindaNtuliProfileNew";
import { AboutTeamSection as NimrodNkosiProfile } from "@/components/generated/NimrodNkosiProfileNew";
import { AboutTeamSection as SindyMabeProfile } from "@/components/generated/SindyMabeProfileNew";
import { AboutTeamSection as CathyMohlahlanaProfile } from "@/components/generated/CathyMohlahlanaProfileNew";
import { AboutTeamSection as MichelleCraigProfile } from "@/components/generated/MichelleCraigProfileNew";
import { AboutTeamSection as ThamiNgubeniProfile } from "@/components/generated/ThamiNgubeniProfileNew";
import { AboutTeamSection as ThaboMdluliProfile } from "@/components/generated/ThaboMdluliProfileNew";
import { AboutTeamSection as AbdullahVerachiaProfile } from "@/components/generated/AbdullahVerachiaProfileNew";
import { AboutTeamSection as KhanyisileChabaProfile } from "@/components/generated/KhanyisileChabaProfileNew";
import { AboutTeamSection as ShingaiMutambirwaProfile } from "@/components/generated/ShingaiMutambirwaProfileNew";
import { AboutTeamSection as LaurenDavisProfile } from "@/components/generated/LaurenDavisProfileNew";
import { AboutTeamSection as BuyaniZwaneProfile } from "@/components/generated/BuyaniZwaneProfileNew";
import { AboutTeamSection as NeilToveyProfile } from "@/components/generated/NeilToveyProfileNew";
import { AboutTeamSection as DoctorKhumaloProfile } from "@/components/generated/DoctorKhumaloProfileNew";
import { AboutTeamSection as VeliNdabaProfile } from "@/components/generated/VeliNdabaProfileNew";
import { AboutTeamSection as NyimpiniMabundaProfile } from "@/components/generated/NyimpiniMabundaProfileNew";
import { AboutTeamSection as AzaniaMosakaProfile } from "@/components/generated/AzaniaMosakaProfileNew";
import { AboutTeamSection as DeliaNdlovuProfile } from "@/components/generated/DeliaNdlovuProfileNew";
import { AboutTeamSection as VictorKgomoeswanaProfile } from "@/components/generated/VictorKgomoeswanaProfileNew";
import { AboutTeamSection as GerryRantseliElsdonProfile } from "@/components/generated/GerryRantseliElsdonProfileNew";
import { AboutTeamSection as DrMaandaTshifularoProfile } from "@/components/generated/DrMaandaTshifularoProfileNew";
import { AboutTeamSection as TumiRamonotsiProfile } from "@/components/generated/TumiRamonotsiProfileNew";
import { AboutTeamSection as BongiweZwaneProfile } from "@/components/generated/BongiweZwaneProfileNew";
import { AboutTeamSection as KgomotsoMonyaiProfile } from "@/components/generated/KgomotsoMonyaiProfileNew";
import { AboutTeamSection as KayiseNgqulaProfile } from "@/components/generated/KayiseNgqulaProfileNew";
import { AboutTeamSection as NqabaMabeceProfile } from "@/components/generated/NqabaMabeceProfileNew";
import { AboutTeamSection as HulisaniRaveleProfile } from "@/components/generated/HulisaniRaveleProfileNew";
import { AboutTeamSection as DrRichieAchukwuProfile } from "@/components/generated/DrRichieAchukwuProfileNew";
import { AboutTeamSection as HappyMaKhumaloNgidiProfile } from "@/components/generated/HappyMaKhumaloNgidiProfileNew";
import { AboutTeamSection as GogoDineoNdlanziProfile } from "@/components/generated/GogoDineoNdlanziProfileNew";
import { AboutTeamSection as DrBillySelekaneProfile } from "@/components/generated/DrBillySelekaneProfileNew";
import { AboutTeamSection as HectorMotivatorProfile } from "@/components/generated/HectorMotivatorProfileNew";
import { AboutTeamSection as NtoshMadlingoziProfile } from "@/components/generated/NtoshMadlingoziProfileNew";
import { AboutTeamSection as NdumisoLindiProfile } from "@/components/generated/NdumisoLindiProfileNew";
import { AboutTeamSection as MphoPoppsProfile } from "@/components/generated/MphoPoppsProfileNew";
import { AboutTeamSection as KagisoKGMokgadiProfile } from "@/components/generated/KagisoKGMokgadiProfileNew";
import { AboutTeamSection as KagisoLedigaProfile } from "@/components/generated/KagisoLedigaProfileNew";
import { AboutTeamSection as EugeneKhozaProfile } from "@/components/generated/EugeneKhozaProfileNew";
import { AboutTeamSection as IsaacGampuProfile } from "@/components/generated/IsaacGampuProfileNew";
import { AboutTeamSection as TolAssMoProfile } from "@/components/generated/TolAssMoProfileNew";
import { AboutTeamSection as SummaryProfile } from "@/components/generated/SummaryProfileNew";
import { AboutTeamSection as MilesKubhekaProfile } from "@/components/generated/MilesKubhekaProfileNew";
import { AboutTeamSection as MolefePooeProfile } from "@/components/generated/MolefePooeProfileNew";
import { AboutTeamSection as ManqobaZunguProfile } from "@/components/generated/ManqobaZunguProfileNew";
import { AboutTeamSection as TrudyThelediProfile } from "@/components/generated/TrudyThelediProfileNew";
import { AboutTeamSection as AndisaLibaProfile } from "@/components/generated/AndisaLibaProfileNew";
import { AboutTeamSection as ThuliMagubaneProfile } from "@/components/generated/ThuliMagubaneProfileNew";
import { AboutTeamSection as RekgotsofetseChikaneProfile } from "@/components/generated/RekgotsofetseChikaneProfileNew";
import { AboutTeamSection as DrEuniceCrossProfile } from "@/components/generated/DrEuniceCrossProfileNew";
import { AboutTeamSection as ThokozaniNkosiProfile } from "@/components/generated/ThokozaniNkosiProfileNew";
import { AboutTeamSection as AnaelGranouxProfile } from "@/components/generated/AnaelGranouxProfileNew";
import { AboutTeamSection as DrDavidMolapoProfile } from "@/components/generated/DrDavidMolapoProfileNew";
import { AboutTeamSection as ProfessorJJTabaneProfile } from "@/components/generated/ProfessorJJTabaneProfileNew";
import { AboutTeamSection as PhathiswaMagopeniProfile } from "@/components/generated/PhathiswaMagopeniProfileNew";
import { AboutTeamSection as ThembaMasekoProfile } from "@/components/generated/ThembaMasekoProfileNew";
import { AboutTeamSection as PennyLebyaneProfile } from "@/components/generated/PennyLebyaneProfileNew";
import { AboutTeamSection as ThembekileMrototoProfile } from "@/components/generated/ThembekileMrototoProfileNew";
import { AboutTeamSection as RamiChueneProfile } from "@/components/generated/RamiChueneProfileNew";
import { AboutTeamSection as NalediMoleoProfile } from "@/components/generated/NalediMoleoProfileNew";
import { AboutTeamSection as CriseldaKanandaProfile } from "@/components/generated/CriseldaKanandaProfileNew";
import { AboutTeamSection as PutcoMafaniProfile } from "@/components/generated/PutcoMafaniProfileNew";
import { AboutTeamSection as ThaboTboTouchMolefeProfile } from "@/components/generated/ThaboTboTouchMolefeProfileNew";
import { AboutTeamSection as SarayKhumaloProfile } from "@/components/generated/SarayKhumaloProfileNew";
import { AboutTeamSection as SomadodaFikeniProfile } from "@/components/generated/SomadodaFikeniProfileNew";
import { AboutTeamSection as SthembisoPhakathiProfile } from "@/components/generated/SthembisoPhakathiProfileNew";
import { AboutTeamSection as EricMafunaProfile } from "@/components/generated/EricMafunaProfileNew";
import { AboutTeamSection as LeratoSitholeProfile } from "@/components/generated/LeratoSitholeProfileNew";
import { AboutTeamSection as DrMphoPhalatseNxumaloProfile } from "@/components/generated/DrMphoPhalatseNxumaloProfileNew";
import { AboutTeamSection as SibuleleSibacaProfile } from "@/components/generated/SibuleleSibacaProfileNew";
import { AboutTeamSection as OlwethuLeshabaneProfile } from "@/components/generated/OlwethuLeshabaneProfileNew";
import { AboutTeamSection as DrMothomangDiahoProfile } from "@/components/generated/DrMothomangDiahoProfileNew";
import { AboutTeamSection as ZiziphoNyangaProfile } from "@/components/generated/ZiziphoNyangaProfileNew";


async function getWordPressSpeaker(slug: string) {
  const query = `
    query GetSpeaker($id: ID!) {
      speaker(id: $id, idType: SLUG) {
        title
        slug
        acfFields {
          speakerTitle
          speakerDesignation
          speakerRole
          speakerRefId
          heroImage
          biographyImage
          biographyHook
          biographyParagraphs {
            paragraph
          }
          credentials {
            label
            subtitle
          }
          strategicThemes {
            number
            title
            copy
          }
          books {
            title
            description
            coverImage
            url
          }
          socialLogos {
            name
          }
          gallery {
            imageUrl
            alt
            caption
            layoutWidth
          }
          videos {
            label
            youtubeId
          }
          mediaArticles {
            headline
            publication
            date
            action
            url
            image
          }
        }
      }
    }
  `;

  return await fetchAPI(query, { id: slug });
}

interface PageProps {
  params: Promise<{ trackId: string; speakerId: string }>;
}

export default async function SpeakerPage({ params }: PageProps) {
  const { trackId, speakerId } = await params;

  if (speakerId === "test-speaker") {
    const data = await getWordPressSpeaker("test-speaker");

    if (!data || !data.speaker) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Headless CMS Testing Route</h1>
          <p className="text-white/70 max-w-md mb-6">
            This route is configured to load data dynamically from WordPress using the <code>test-speaker</code> slug. 
            No connection to the CMS was found, or the post does not exist yet.
          </p>
          <div className="bg-[#1C1C1E] border border-white/10 rounded-lg p-6 text-left text-xs font-mono max-w-lg overflow-auto">
            <p className="text-yellow-500 font-bold mb-2">Next Steps for Setup:</p>
            <ol className="list-decimal list-inside space-y-2 text-white/80">
              <li>Configure <code>WORDPRESS_API_URL</code> in your <code>.env.local</code>.</li>
              <li>Install WPGraphQL and WPGraphQL for ACF on your WordPress instance.</li>
              <li>Create a &quot;Speaker&quot; post type and add fields matching the ACF Schema.</li>
              <li>Publish a post with slug: <code>test-speaker</code>.</li>
            </ol>
          </div>
        </div>
      );
    }

    const speaker = data.speaker;
    const acf = speaker.acfFields;

    // Parse biography paragraphs
    const bioParagraphs = acf.biographyParagraphs 
      ? acf.biographyParagraphs.map((p: any) => p.paragraph) 
      : [];

    // Parse badges
    const credentials = acf.credentials 
      ? acf.credentials.map((c: any, index: number) => ({ id: `cred-${index}`, ...c })) 
      : [];

    // Parse themes
    const strategicThemes = acf.strategicThemes 
      ? acf.strategicThemes.map((t: any, index: number) => ({ id: `theme-${index}`, ...t })) 
      : [];

    // Parse books
    const books = acf.books 
      ? acf.books.map((b: any, index: number) => ({ id: `book-${index}`, ...b })) 
      : [];

    // Parse social proof
    const socialProofLogos = acf.socialLogos 
      ? acf.socialLogos.map((l: any, index: number) => ({ id: `logo-${index}`, name: l.name })) 
      : [];

    // Parse custom media articles
    const customMedia = acf.mediaArticles 
      ? acf.mediaArticles.map((m: any, index: number) => ({ id: `media-${index}`, ...m })) 
      : [];

    // Parse custom gallery
    const customGallery = acf.gallery 
      ? acf.gallery.map((g: any, index: number) => ({
          id: `gal-${index}`,
          src: g.imageUrl,
          alt: g.alt,
          caption: g.caption,
          className: g.layoutWidth === "Span 2 Columns" ? "sm:col-span-2 lg:col-span-2" : ""
        })) 
      : [];

    // Parse custom videos
    const customVideos = acf.videos 
      ? acf.videos.map((v: any, index: number) => ({ id: `vid-${index}`, ...v })) 
      : [];

    return (
      <SpeakerProfileTemplate
        speakerName={speaker.title}
        speakerTitle={acf.speakerTitle || ""}
        speakerDesignation={acf.speakerDesignation || ""}
        speakerRole={acf.speakerRole || ""}
        speakerRef={acf.speakerRefId || "CMS-TEST"}
        heroBackgroundImage={acf.heroImage}
        biographyImage={acf.biographyImage}
        bioHook={acf.biographyHook}
        fullBiographyParagraphs={bioParagraphs}
        credentials={credentials}
        strategicThemes={strategicThemes}
        books={books}
        socialProofLogos={socialProofLogos}
        mediaArticlesSlot={
          customMedia.length > 0 ? (
            <ProfileAdditionalMediaSections speakerId="clement-manyathela" customMedia={customMedia} />
          ) : undefined
        }
      >
        <ProfileAdditionalSections 
          speakerId="clement-manyathela" 
          customGallery={customGallery} 
          customVideos={customVideos}
        />
      </SpeakerProfileTemplate>
    );
  }

  if (speakerId === "saray-khumalo") {
    return <SarayKhumaloProfile />;
  }

  if (speakerId === "somadoda-fikeni") {
    return <SomadodaFikeniProfile />;
  }

  if (speakerId === "sthembiso-phakathi") {
    return <SthembisoPhakathiProfile />;
  }

  if (speakerId === "eric-mafuna") {
    return <EricMafunaProfile />;
  }

  if (speakerId === "lerato-sithole" || speakerId === "lerato-sithole-7") {
    return <LeratoSitholeProfile />;
  }

  if (speakerId === "dr-mpho-phalatse-nxumalo" || speakerId === "mpho-phalatse-nxumalo") {
    return <DrMphoPhalatseNxumaloProfile />;
  }

  if (speakerId === "sibulele-sibaca") {
    return <SibuleleSibacaProfile />;
  }

  if (speakerId === "olwethu-leshabane") {
    return <OlwethuLeshabaneProfile />;
  }

  if (speakerId === "dr-mothomang-diaho" || speakerId === "mothomang-diaho") {
    return <DrMothomangDiahoProfile />;
  }

  if (speakerId === "zizipho-nyanga") {
    return <ZiziphoNyangaProfile />;
  }

  if (speakerId === "bonang-mohale" || speakerId === "bonang-mohale-duplicate") {
    return <AboutTeamSection />;
  }

  if (speakerId === "phumzile-mlambo-ngcuka") {
    return <PhumzileProfile />;
  }

  if (speakerId === "clement-manyathela") {
    return <ClementProfile />;
  }

  if (speakerId === "sizwe-mpofu-walsh") {
    return <SizweProfile />;
  }

  if (speakerId === "nozipho-tshabalala") {
    return <NoziphoProfile />;
  }

  if (speakerId === "prince-mashele") {
    return <PrinceProfile />;
  }

  if (speakerId === "tryphosa-ramano" || speakerId === "tryphosa-ramano-2") {
    return <TryphosaProfile />;
  }

  if (speakerId === "khaya-sithole") {
    return <KhayaProfile />;
  }

  if (speakerId === "siphiwe-moyo" || speakerId === "siphiwe-moyo-2") {
    return <SiphiweProfile />;
  }

  if (speakerId === "lincoln-mali") {
    return <LincolnProfile />;
  }

  if (speakerId === "stafford-masie") {
    return <StaffordProfile />;
  }

  if (speakerId === "tshilidzi-marwala") {
    return <MarwalaProfile />;
  }

  if (speakerId === "sylvester-chauke") {
    return <SylvesterProfile />;
  }

  if (speakerId === "mzamo-masito") {
    return <MzamoProfile />;
  }

  if (speakerId === "muzi-kuzwayo") {
    return <MuziProfile />;
  }

  if (speakerId === "mushambi-mutuma") {
    return <MushambiProfile />;
  }

  if (speakerId === "zukie-siyotula") {
    return <ZukieSiyotulaProfile />;
  }

  if (speakerId === "dr-nombasa-tsengwa" || speakerId === "nombasa-tsengwa") {
    return <NombasaTsengwaProfile />;
  }

  if (speakerId === "thuli-madonsela") {
    return <ThuliMadonselaProfile />;
  }

  if (speakerId === "nene-molefi" || speakerId === "nene-molefe") {
    return <NeneMolefiProfile />;
  }

  if (speakerId === "femi-adebanji") {
    return <FemiAdebanjiProfile />;
  }

  if (speakerId === "dr-alistair-mokoena" || speakerId === "alistair-mokoena") {
    return <AlistairMokoenaProfile />;
  }

  if (speakerId === "sipho-maseko") {
    return <SiphoMasekoProfile />;
  }

  if (speakerId === "john-sanei") {
    return <JohnSaneiProfile />;
  }

  if (speakerId === "callan-abrahams") {
    return <CallanAbrahamsProfile />;
  }

  if (speakerId === "kgomotso-mamello-motshidi") {
    return <KgomotsoMotshidiProfile />;
  }

  if (speakerId === "dr-vumile-msweli" || speakerId === "vumile-msweli") {
    return <VumileMsweliProfile />;
  }

  if (speakerId === "tseliso-mohlomi") {
    return <TselisoMohlomiProfile />;
  }

  if (speakerId === "dr-puleng-mokhoalibe" || speakerId === "puleng-mokhoalibe") {
    return <PulengMokhoalibeProfile />;
  }

  if (speakerId === "boniwe-dunster") {
    return <BoniweDunsterProfile />;
  }

  if (speakerId === "dr-mncane-mthunzi" || speakerId === "mncane-mthunzi") {
    return <MncaneMthunziProfile />;
  }

  if (speakerId === "sifiso-skenjana") {
    return <SifisoSkenjanaProfile />;
  }

  if (speakerId === "elias-masilela") {
    return <EliasMasilelaProfile />;
  }

  if (speakerId === "duma-gqubule") {
    return <DumaGqubuleProfile />;
  }

  if (speakerId === "dr-pali-lehohla" || speakerId === "pali-lehohla") {
    return <DrPaliLehohlaProfile />;
  }

  if (speakerId === "thembisa-fakude") {
    return <ThembisaFakudeProfile />;
  }

  if (speakerId === "prof-mcebisi-ndletyana" || speakerId === "mcebisi-ndletyana") {
    return <ProfMcebisiNdletyanaProfile />;
  }

  if (speakerId === "dr-ralph-mathekga" || speakerId === "ralph-mathekga") {
    return <DrRalphMathekgaProfile />;
  }

  if (speakerId === "ebrahim-fakir") {
    return <EbrahimFakirProfile />;
  }

  if (speakerId === "dr-siphamandla-zondi" || speakerId === "siphamandla-zondi") {
    return <DrSiphamandlaZondiProfile />;
  }

  if (speakerId === "tebogo-proverb-thekisho" || speakerId === "proverb") {
    return <TebogoProVerbThekishoProfile />;
  }

  if (speakerId === "thapelo-mokoena") {
    return <ThapeloMokoenaProfile />;
  }

  if (speakerId === "joshua-maluleke") {
    return <JoshuaMalulekeProfile />;
  }

  if (speakerId === "bulelani-balabala") {
    return <BulelaniBalabalaProfile />;
  }

  if (speakerId === "lebo-gunguluza") {
    return <LeboGunguluzaProfile />;
  }

  if (speakerId === "lorato-tshenkeng" || speakerId === "lorato-tshenkeng-2") {
    return <LoratoTshenkengProfile />;
  }

  if (speakerId === "mandla-j-radebe" || speakerId === "mandla-radebe") {
    return <MandlaJRadebeProfile />;
  }

  if (speakerId === "sechaba-motsieloa") {
    return <SechabaMotsieloaProfile />;
  }

  if (speakerId === "milton-nkosi") {
    return <MiltonNkosiProfile />;
  }

  if (speakerId === "rams-mabote") {
    return <RamsMaboteProfile />;
  }

  if (speakerId === "paul-nzimande") {
    return <PaulNzimandeProfile />;
  }

  if (speakerId === "khaya-dlanga") {
    return <KhayaDlangaProfile />;
  }

  if (speakerId === "zamo-mbele") {
    return <ZamoMbeleProfile />;
  }

  if (speakerId === "timothy-maurice-webster") {
    return <TimothyMauriceWebsterProfile />;
  }

  if (speakerId === "victor-ramathesele") {
    return <VictorRamatheseleProfile />;
  }

  if (speakerId === "abner-mariri") {
    return <AbnerMaririProfile />;
  }

  if (speakerId === "queen-ramotsehoa") {
    return <QueenRamotsehoaProfile />;
  }

  if (speakerId === "joy-machoene-kaapu" || speakerId === "joy-kaapu") {
    return <JoyKaapuProfile />;
  }

  if (speakerId === "linda-ntuli") {
    return <LindaNtuliProfile />;
  }

  if (speakerId === "nimrod-nkosi") {
    return <NimrodNkosiProfile />;
  }

  if (speakerId === "sindy-mabe") {
    return <SindyMabeProfile />;
  }

  if (speakerId === "cathy-mohlahlana") {
    return <CathyMohlahlanaProfile />;
  }

  if (speakerId === "michelle-craig") {
    return <MichelleCraigProfile />;
  }

  if (speakerId === "thami-ngubeni") {
    return <ThamiNgubeniProfile />;
  }

  if (speakerId === "thabo-mdluli") {
    return <ThaboMdluliProfile />;
  }

  if (speakerId === "abdullah-verachia") {
    return <AbdullahVerachiaProfile />;
  }

  if (speakerId === "khanyisile-chaba" || speakerId === "khanyi-chaba") {
    return <KhanyisileChabaProfile />;
  }

  if (speakerId === "dr-shingai-mutambirwa" || speakerId === "shingai-mutambirwa") {
    return <ShingaiMutambirwaProfile />;
  }

  if (speakerId === "lauren-davis") {
    return <LaurenDavisProfile />;
  }

  if (speakerId === "dr-buyani-zwane" || speakerId === "buyani-zwane") {
    return <BuyaniZwaneProfile />;
  }

  if (speakerId === "neil-tovey") {
    return <NeilToveyProfile />;
  }

  if (speakerId === "doctor-khumalo") {
    return <DoctorKhumaloProfile />;
  }

  if (speakerId === "veli-ndaba") {
    return <VeliNdabaProfile />;
  }

  if (speakerId === "nyimpini-mabunda") {
    return <NyimpiniMabundaProfile />;
  }

  if (speakerId === "azania-mosaka") {
    return <AzaniaMosakaProfile />;
  }

  if (speakerId === "delia-ndlovu") {
    return <DeliaNdlovuProfile />;
  }

  if (speakerId === "victor-kgomoeswana") {
    return <VictorKgomoeswanaProfile />;
  }

  if (speakerId === "gerry-rantseli-elsdon") {
    return <GerryRantseliElsdonProfile />;
  }

  if (speakerId === "dr-maanda-tshifularo" || speakerId === "maanda-tshifularo") {
    return <DrMaandaTshifularoProfile />;
  }

  if (speakerId === "tumi-ramonotsi") {
    return <TumiRamonotsiProfile />;
  }

  if (speakerId === "bongiwe-zwane") {
    return <BongiweZwaneProfile />;
  }

  if (speakerId === "kgomotso-monyai") {
    return <KgomotsoMonyaiProfile />;
  }

  if (speakerId === "kayise-ngqula") {
    return <KayiseNgqulaProfile />;
  }

  if (speakerId === "nqaba-mabece") {
    return <NqabaMabeceProfile />;
  }

  if (speakerId === "hulisani-ravele") {
    return <HulisaniRaveleProfile />;
  }

  if (speakerId === "dr-richie-achukwu" || speakerId === "richie-achukwu") {
    return <DrRichieAchukwuProfile />;
  }

  if (speakerId === "happy-makhumalo-ngidi-2" || speakerId === "happy-makhumalo-ngidi" || speakerId === "happy-ngidi") {
    return <HappyMaKhumaloNgidiProfile />;
  }

  if (speakerId === "gogo-dineo-ndlanzi") {
    return <GogoDineoNdlanziProfile />;
  }

  if (speakerId === "dr-billy-selekane" || speakerId === "billy-selekane") {
    return <DrBillySelekaneProfile />;
  }

  if (speakerId === "hector-motivator") {
    return <HectorMotivatorProfile />;
  }

  if (speakerId === "ntosh-madlingozi") {
    return <NtoshMadlingoziProfile />;
  }

  if (speakerId === "ndumiso-lindi") {
    return <NdumisoLindiProfile />;
  }

  if (speakerId === "mpho-popps" || speakerId === "mpho-popps-modikoane") {
    return <MphoPoppsProfile />;
  }

  if (speakerId === "kagiso-kg-mokgadi") {
    return <KagisoKGMokgadiProfile />;
  }

  if (speakerId === "kagiso-lediga") {
    return <KagisoLedigaProfile />;
  }

  if (speakerId === "eugene-khoza") {
    return <EugeneKhozaProfile />;
  }

  if (speakerId === "isaac-gampu") {
    return <IsaacGampuProfile />;
  }

  if (speakerId === "tol-ass-mo") {
    return <TolAssMoProfile />;
  }

  if (speakerId === "summary") {
    return <SummaryProfile />;
  }

  if (speakerId === "miles-kubheka" || speakerId === "miles-kubheka-2") {
    return <MilesKubhekaProfile />;
  }

  if (speakerId === "molefe-pooe") {
    return <MolefePooeProfile />;
  }

  if (speakerId === "manqoba-zungu") {
    return <ManqobaZunguProfile />;
  }

  if (speakerId === "trudy-theledi") {
    return <TrudyThelediProfile />;
  }

  if (speakerId === "andisa-liba") {
    return <AndisaLibaProfile />;
  }

  if (speakerId === "thuli-magubane") {
    return <ThuliMagubaneProfile />;
  }

  if (speakerId === "rekgotsofetse-chikane") {
    return <RekgotsofetseChikaneProfile />;
  }

  if (speakerId === "dr-eunice-cross" || speakerId === "eunice-cross" || speakerId === "dr-eunice-cross-6") {
    return <DrEuniceCrossProfile />;
  }

  if (speakerId === "thokozani-nkosi") {
    return <ThokozaniNkosiProfile />;
  }

  if (speakerId === "anael-granoux") {
    return <AnaelGranouxProfile />;
  }

  if (speakerId === "dr-david-molapo" || speakerId === "david-molapo") {
    return <DrDavidMolapoProfile />;
  }

  if (speakerId === "professor-jj-tabane" || speakerId === "jj-tabane") {
    return <ProfessorJJTabaneProfile />;
  }

  if (speakerId === "phathiswa-magopeni") {
    return <PhathiswaMagopeniProfile />;
  }

  if (speakerId === "themba-maseko") {
    return <ThembaMasekoProfile />;
  }

  if (speakerId === "penny-lebyane") {
    return <PennyLebyaneProfile />;
  }

  if (speakerId === "thembekile-mrototo") {
    return <ThembekileMrototoProfile />;
  }

  if (speakerId === "rami-chuene") {
    return <RamiChueneProfile />;
  }

  if (speakerId === "naledi-moleo") {
    return <NalediMoleoProfile />;
  }

  if (speakerId === "criselda-kananda") {
    return <CriseldaKanandaProfile />;
  }

  if (speakerId === "putco-mafani") {
    return <PutcoMafaniProfile />;
  }

  if (speakerId === "thabo-tbo-touch-molefe" || speakerId === "tbo-touch" || speakerId === "thabo-molefe") {
    return <ThaboTboTouchMolefeProfile />;
  }


  // Format parameters to readable names
  const trackName = trackId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const speakerName = speakerId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#ffffff] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <Link 
          href={`/tracks/${trackId}`}
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#686869] hover:text-[#212121] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Track</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Image/Visual Placeholder & Core Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div className="aspect-[3/4] w-full rounded-2xl bg-white border border-[#C7C7C8]/40 shadow-sm overflow-hidden flex items-center justify-center relative group">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-[#ffffff] flex items-center justify-center text-[#686869] mx-auto mb-4">
                  <span className="font-serif text-3xl font-light italic">
                    {speakerName.charAt(0)}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#212121]">{speakerName}</h4>
                <p className="text-[11px] text-[#686869] uppercase tracking-wider mt-1">{trackName}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#C7C7C8]/40 bg-white p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-3 text-[#212121]">
                <Globe className="w-4 h-4 text-[#686869]" />
                <span className="text-xs font-semibold uppercase tracking-wider">Africa & Global Engagement</span>
              </div>
              <div className="flex items-center gap-3 text-[#212121]">
                <Calendar className="w-4 h-4 text-[#686869]" />
                <span className="text-xs font-semibold uppercase tracking-wider">Keynotes, Roundtables & Briefings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Speaking Topics */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e30e04] block mb-2">
                Faculty Profile
              </span>
              <h1 className="font-serif text-[42px] md:text-[56px] font-light tracking-[-0.04em] leading-[1.05] text-[#212121] mb-4">
                {speakerName}
              </h1>
              <p className="text-lg md:text-xl font-light text-[#686869] leading-relaxed">
                Expert analyst and key voice in the {trackName} competency track.
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#C7C7C8]/40" />

            {/* Detailed Bio Section */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121]">
                Biography
              </h3>
              <p className="text-[#686869] leading-relaxed">
                Biography placeholder for {speakerName}. This section will contain the speaker&apos;s background, executive career, advisory experience, and academic references.
              </p>
            </div>

            {/* Speaking Topics */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#212121]">
                Focus Areas & Core Interventions
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 p-4 rounded-xl border border-[#C7C7C8]/30 bg-white shadow-sm">
                  <FileText className="w-4 h-4 text-[#e30e04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#212121] mb-1">Keynote Intervention 1</h4>
                    <p className="text-xs text-[#686869]">Actionable strategic perspectives and institutional leadership models.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl border border-[#C7C7C8]/30 bg-white shadow-sm">
                  <FileText className="w-4 h-4 text-[#e30e04] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#212121] mb-1">Keynote Intervention 2</h4>
                    <p className="text-xs text-[#686869]">Operational execution frameworks under complex boardroom environments.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Direct Booking CTA */}
            <div className="pt-6">
              <Link 
                href="/#brief-us"
                className="inline-flex items-center justify-center rounded-full bg-[#e30e04] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#c30c03] transition-colors shadow-md"
              >
                Book This Speaker
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
