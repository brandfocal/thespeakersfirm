export interface CategoryConfig {
  id: string;
  buttonLabel: string;
  fullTitle: string;
  description: string;
}

export const CATEGORIES_CONFIG: CategoryConfig[] = [
  {
    id: "media-brand-reputation",
    buttonLabel: "Media",
    fullTitle: "Media, Brand & Reputation in a Weaponised World",
    description: "Broadcasters, journalists and communication strategists empowering leaders to communicate with authority, clarity and influence across every platform."
  },
  {
    id: "leadership-governance-and-risk-intelligence",
    buttonLabel: "Leadership",
    fullTitle: "Leadership, Governance & Risk Intelligence",
    description: "World-class CEOs, board chairs and executive leaders offering decisive insights into courageous leadership, strategy execution, organisational performance and leading through complexity."
  },
  {
    id: "digital-identity-cybersecurity-and-data-sovereignty",
    buttonLabel: "A.I.",
    fullTitle: "AI, Digital Identity, Cybersecurity, Data Sovereignty & 4IR Power",
    description: "Al pioneers and transformation leaders helping organisations move from experimentation to responsible, enterprise-wide adoption and measurable commercial value."
  },
  {
    id: "mc-and-facilitators",
    buttonLabel: "MC's",
    fullTitle: "Masters of Ceremonies, Facilitators & Panel Chairpersons",
    description: "Acclaimed public figures, broadcasters, actors, comedians, musicians and professional presenters bringing visibility, credibility, energy and unforgettable engagement to every event."
  },
  {
    id: "comedy",
    buttonLabel: "Comedy",
    fullTitle: "Comedy, Culture & Strategic Disruption",
    description: "Comedians, humorists, and disruptive creatives using storytelling, comedy, and cultural insights to challenge norms and foster connection."
  },
  {
    id: "inspirational-keynote-speakers",
    buttonLabel: "Keynote",
    fullTitle: "Inspirational and Motivational Keynote Speakers",
    description: "Influential global voices, accomplished leaders, inspiring change-makers and exceptional storytellers who challenge conventional thinking, energise audiences and turn inspiration into meaningful action."
  },
  {
    id: "spirituality-heritage-and-identity",
    buttonLabel: "Spirituality",
    fullTitle: "Spirituality, Heritage, Identity & Cultural Power",
    description: "Speakers who address questions of heritage, spirituality, cultural identity, and institutional belonging to build cohesive, values-driven organizations."
  },
  {
    id: "economics-and-politics",
    buttonLabel: "Economics",
    fullTitle: "Economics & Politics",
    description: "Respected economists and financial strategists translating complex economic developments into clear implications for boards, investors, governments and business leaders."
  },
  {
    id: "diversity",
    buttonLabel: "Diversity",
    fullTitle: "Diversity, Belonging, Gender & Inclusive Leadership",
    description: "Specialists in inclusive growth, gender equity, diversity, and representation who guide organizations towards sustainable inclusion policies."
  },
  {
    id: "neuroscience-peak-performance-mental-agility",
    buttonLabel: "Neuroscience",
    fullTitle: "Neuroscience, Peak Performance & Mental Agility",
    description: "Neuroscientists, psychologists and behavioural experts translating science into practical strategies for leadership, learning, decision-making and performance."
  },
  {
    id: "future-of-work",
    buttonLabel: "Future of Work",
    fullTitle: "Future of Work",
    description: "Leading authorities preparing organisations and people for rapidly changing technologies, skills requirements, employee expectations and workplace models."
  },
  {
    id: "governance",
    buttonLabel: "Governance",
    fullTitle: "Strategy, Governance, Culture & People",
    description: "Distinguished directors and governance authorities strengthening board effectiveness, ethical stewardship, executive accountability and institutional sustainability."
  },
  {
    id: "gender",
    buttonLabel: "Gender",
    fullTitle: "Gender, Identity & The Inclusion Economy",
    description: "Leading advocates and scholars unpacking the intersection of gender dynamics, business opportunity, identity, and the new economy."
  },
  {
    id: "workplace-wellness",
    buttonLabel: "Workplace Wellness",
    fullTitle: "Workplace Wellness & Health",
    description: "Wellbeing and mental health professionals focusing on burnout prevention, resilience, psychological safety, and organizational wellness."
  },
  {
    id: "financial-inclusion",
    buttonLabel: "Financial Inclusion",
    fullTitle: "Financial Inclusion, Wealth Management & Legacy Strategy",
    description: "Experts on financial literacy, banking inclusion, economic empowerment, and strategy for long-term legacy creation."
  },
  {
    id: "entrepreneurship",
    buttonLabel: "Entrepreneurship",
    fullTitle: "Entrepreneurship & Venture Futures",
    description: "Accomplished founders, investors and enterprise leaders sharing practical strategies for funding, scaling and sustaining high-growth businesses."
  },
  {
    id: "masculinity",
    buttonLabel: "Masculinity",
    fullTitle: "Masculinity, Women Allies & Strategic Transformation",
    description: "Focusing on positive masculinity, allyship, shifting cultural archetypes, and strategic leadership development in modern corporate spaces."
  },
  {
    id: "female-keynote-speakers",
    buttonLabel: "Female Keynote Speakers",
    fullTitle: "Best Female Keynote Speakers",
    description: "Celebrating and highlighting prominent female executives, visionaries, policy makers, and pioneers commanding global stages."
  }
];

export function getCategoryById(id: string): CategoryConfig | undefined {
  return CATEGORIES_CONFIG.find(c => c.id === id);
}

export function getCategoryByLabel(label: string): CategoryConfig | undefined {
  return CATEGORIES_CONFIG.find(c => c.buttonLabel.toLowerCase() === label.toLowerCase());
}

export const CATEGORY_SPEAKERS_MAP: Record<string, string[]> = {
  "future-of-work": [
    "alistair-mokoena", "callan-abrahams", "vumile-msweli", "kgomotso-mamello-motshidi",
    "ntandoyenkosi-kunene-radzuma", "tseliso-mohlomi", "puleng-mokhoalibe", "boniwe-dunster",
    "andisa-liba", "manqoba-zungu", "sizwe-mpofu-walsh", "mncane-mthunzi", "trudy-theledi"
  ],
  "media-brand-reputation": [
    "sylvester-chauke", "mandla-radebe", "sechaba-motsieloa", "milton-nkosi", "rams-mabote",
    "jj-tabane", "phathiswa-magopeni", "proverb", "lorato-tshenkeng", "mzamo-masito",
    "muzi-kuzwayo", "thapelo-mokoena"
  ],
  "leadership-governance-and-risk-intelligence": [
    "stafford-masie", "themba-maseko", "lincoln-mali", "saray-khumalo", "somadoda-fikeni",
    "andisa-liba", "abdullah-verachia", "sthembiso-phakathi", "maanda-tshifularo", "eric-mafuna",
    "mncane-mthunzi", "khanyi-chaba", "femi-adebanji", "siphiwe-moyo", "muzi-kuzwayo",
    "luthando-daniels", "maurice-radebe", "nyimpini-mabunda", "joy-machoene-kaapu", "vumile-msweli",
    "tebogo-mekgoe", "queen-ramotsehoa", "yolisa-kani", "anael-granoux", "lauren-davis",
    "monde-ndlovu", "aubrey-masango-mc", "molefe-pooe"
  ],
  "digital-identity-cybersecurity-and-data-sovereignty": [
    "alistair-mokoena", "sipho-maseko", "john-sanei", "callan-abrahams", "kgomotso-mamello-motshidi",
    "puleng-mokhoalibe", "tshilidzi-marwala", "tumi-ramonotsi", "mushambi-mutuma", "sid-peimer",
    "molefe-pooe"
  ],
  "mc-and-facilitators": [
    "nozipho-tshabalala", "cathy-mohlahlana", "clement-manyathela", "gerry-rantseli-elsdon",
    "azania-mosaka", "bongani-bingwa", "alishia-naidoo-vawda", "abigail-visagie", "leanne-manas",
    "ayanda-allie", "luthando-daniels", "juliet-joseph", "thabo-mdluli", "faith-mangope",
    "mpho-sithole", "gaisang-moloabi", "trudy-theledi", "sipho-alphi-mkhwanazi", "proverb",
    "sindy-mabe", "michelle-craig", "thami-ngubeni", "thabo-mdluli", "victor-kgomoeswana",
    "bongiwe-zwane", "kgomotso-monyai", "kayise-ngqula", "nqaba-mabece", "hulisani-ravele",
    "penny-lebyane", "khaya-dlanga", "thembekile-mrototo", "rami-chuene", "naledi-moleo",
    "nimrod-nkosi", "criselda-kananda", "putco-mafani", "tbo-touch", "peter-ndoro",
    "hector-motivator", "noni-khumalo", "thapelo-mokoena", "bridget-masinga-mc", "aubrey-masango-mc"
  ],
  "comedy": [
    "mpho-popps", "eugene-khoza", "ntosh-madlingozi", "ndumiso-lindi", "kagiso-kg-mokgadi",
    "kagiso-lediga", "isaac-gampu", "tol-ass-mo"
  ],
  "inspirational-keynote-speakers": [
    "billy-selekane", "abner-mariri", "david-molapo", "linda-yalezo", "veli-ndaba",
    "max-moyo", "siphiwe-moyo", "hector-motivator", "dr-richie-achukwu", "saray-khumalo"
  ],
  "spirituality-heritage-and-identity": [
    "gogo-dineo-ndlanzi", "john-kani", "bishop-joshua-maponga", "muzi-kuzwayo", "ndileka-mandela"
  ],
  "economics-and-politics": [
    "khaya-sithole", "prince-mashele", "rekgotsofetse-chikane", "somadoda-fikeni", "sizwe-mpofu-walsh",
    "jj-tabane", "phathiswa-magopeni", "david-molapo", "mlamuli-mbambo", "duma-gqubule",
    "pali-lehohla", "elias-masilela", "sifiso-skenjana", "thembisa-fakude", "mcebisi-ndletyana",
    "ralph-mathekga", "ebrahim-fakir", "siphamandla-zondi"
  ],
  "diversity": [
    "ndileka-mandela", "lene-molefi", "rikky-minyuku", "brian-mhlanga"
  ],
  "neuroscience-peak-performance-mental-agility": [
    "paul-nzimande", "happy-makhumalo-ngidi", "timothy-maurice-webster", "gogo-dineo-ndlanzi",
    "victor-ramathesele", "zamo-mbele", "khaya-dlanga", "billy-selekane", "siphiwe-moyo",
    "boniwe-dunster", "veli-ndaba", "doctor-khumalo", "neil-tovey", "dr-richie-achukwu", "lauren-data"
  ],
  "governance": [
    "thuli-madonsela-keynote", "bonang-mohale", "nyimpini-mabunda", "dudu-msomi", "buyani-zwane",
    "maurice-radebe", "phumzile-mlambo-ngcuka", "lene-molefi", "john-kani", "siphiwe-moyo",
    "eunice-cross", "lerato-sithole", "mazwe-majola", "maanda-tshifularo", "femi-adebanji",
    "sthembiso-phakathi", "luthando-daniels", "maureen-tong", "david-molapo", "abner-mariri"
  ],
  "gender": [
    "zanele-luvuno", "josina-machel", "pastor-tebogo-moema", "ndileka-mandela"
  ],
  "workplace-wellness": [
    "mpho-phalatse-nxumalo", "criselda-kananda", "ndileka-mandela", "boniwe-dunster",
    "victor-ramathesele", "gugulethu-xaba", "sibulele-sibaca", "olwethu-leshabane",
    "mothomang-diaho", "zizipho-nyanga", "brenda-kubheka", "lerato-makhetha", "shingai-mutambirwa",
    "lauren-data", "malebo-mashaba"
  ],
  "financial-inclusion": [
    "ndumi-hadebe", "nkateko-khoza", "samke-mhlongo", "mlamuli-mbambo", "viwe-tini",
    "zola-mbatha", "israel-noko", "mandisa-zavala", "thuli-magubane", "busi-selesho",
    "eunice-sibiya", "max-moyo", "trudy-theledi", "molefe-pooe"
  ],
  "entrepreneurship": [
    "rekgotsofetse-chikane", "lebo-gunguluza", "thokozani-nkosi", "anael-granoux",
    "joshua-maluleke", "bulelani-balabala", "eunice-cross", "proverb", "thuli-magubane",
    "thapelo-mokoena", "musa-sono", "trudy-theledi", "molefe-pooe"
  ],
  "masculinity": [
    "martin-pelders", "thato-tt-mbha", "apostle-kabelo-moroke", "mbuyiselo-botha",
    "mzamo-masito", "sechaba-motsieloa", "tebogo-edward-lerole", "bafana-khumalo",
    "kopano-ratele", "mbulelo-dyasi", "gugulethu-xaba", "lerato-makhetha", "shingai-mutambirwa",
    "anele-siswana", "jerry-gule", "joshua-makukule-mtanyelwa", "bongani-luvalo",
    "sello-maake-ka-ncube", "caesar-molebatsi", "shimmy-kotu", "steven-molakeng",
    "linda-yende", "tumisho-masha"
  ],
  "female-keynote-speakers": [
    "ndileka-mandela", "azania-mosaka", "tryphosa-ramano", "gerry-rantseli-elsdon",
    "thuli-madonsela-keynote", "felicia-mabuza-suttle", "zukie-siyotula", "lene-molefi",
    "vumile-msweli", "linda-maqoma", "samke-mhlongo", "joy-machoene-kaapu", "delia-ndlovu",
    "mary-bomela", "nombasa-tsengwa", "zipho-sikhakhane", "yolisa-kani", "ofentse-pitse"
  ]
};
