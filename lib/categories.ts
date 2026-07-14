export interface CategoryConfig {
  id: string;
  buttonLabel: string;
  fullTitle: string;
  description: string;
}

export const CATEGORIES_CONFIG: CategoryConfig[] = [
  {
    id: "keynote-and-motivational-speakers",
    buttonLabel: "Keynote",
    fullTitle: "Keynote and Motivational Speakers",
    description: "Influential global voices, accomplished leaders, inspiring change-makers and exceptional storytellers who challenge conventional thinking, energise audiences and turn inspiration into meaningful action. High-demand topics: Purpose-driven leadership, personal transformation, resilience, overcoming adversity, peak performance, courageous action, growth mindset, confidence, legacy and human potential."
  },
  {
    id: "leadership-strategy-and-executive-performance",
    buttonLabel: "Leadership",
    fullTitle: "Leadership, Strategy and Executive Performance",
    description: "World-class CEOs, board chairs and executive leaders offering decisive insights into courageous leadership, strategy execution, organisational performance and leading through complexity."
  },
  {
    id: "boards-governance-and-boardroom-influence",
    buttonLabel: "Governance",
    fullTitle: "Boards, Governance and Boardroom Influence",
    description: "Distinguished directors and governance authorities strengthening board effectiveness, ethical stewardship, executive accountability and institutional sustainability."
  },
  {
    id: "artificial-intelligence-and-intelligent-enterprise",
    buttonLabel: "A.I.",
    fullTitle: "Artificial Intelligence and Intelligent Enterprise",
    description: "Al pioneers and transformation leaders helping organisations move from experimentation to responsible, enterprise-wide adoption and measurable commercial value."
  },
  {
    id: "future-of-work-talent-and-workforce-transformation",
    buttonLabel: "Future of Work",
    fullTitle: "Future of Work, Talent and Workforce Transformation",
    description: "Leading authorities preparing organisations and people for rapidly changing technologies, skills requirements, employee expectations and workplace models."
  },
  {
    id: "economics-markets-and-the-global-economy",
    buttonLabel: "Economics",
    fullTitle: "Economics, Markets and the Global Economy",
    description: "Respected economists and financial strategists translating complex economic developments into clear implications for boards, investors, governments and business leaders."
  },
  {
    id: "futurists-trends-and-strategic-foresight",
    buttonLabel: "Futurists",
    fullTitle: "Futurists, Trends and Strategic Foresight",
    description: "Futurists and trend specialists identifying the technological, demographic, economic and social forces that will reshape industries, consumers and societies."
  },
  {
    id: "geopolitics-policy-and-global-affairs",
    buttonLabel: "Geopolitics",
    fullTitle: "Geopolitics, Policy and Global Affairs",
    description: "Diplomats, political leaders, journalists and analysts helping decision-makers understand geopolitical risk, policy shifts and the evolving global order."
  },
  {
    id: "innovation-disruption-and-business-transformation",
    buttonLabel: "Business Transformation",
    fullTitle: "Innovation, Disruption and Business Transformation",
    description: "Proven innovators equipping organisations to challenge established models, unlock new value and build future-ready enterprises."
  },
  {
    id: "entrepreneurship-investment-and-business-growth",
    buttonLabel: "Entrepreneurship",
    fullTitle: "Entrepreneurship, Investment and Business Growth",
    description: "Accomplished founders, investors and enterprise leaders sharing practical strategies for funding, scaling and sustaining high-growth businesses."
  },
  {
    id: "change-resilience-and-organisational-agility",
    buttonLabel: "Organisational Agility",
    fullTitle: "Change, Resilience and Organisational Agility",
    description: "Change specialists helping leaders mobilise people, overcome resistance and sustain organisational performance through disruption and uncertainty."
  },
  {
    id: "media-communication-and-executive-visibility",
    buttonLabel: "Media",
    fullTitle: "Media, Communication and Executive Visibility",
    description: "Broadcasters, journalists and communication strategists empowering leaders to communicate with authority, clarity and influence across every platform."
  },
  {
    id: "reputation-crisis-and-trust-leadership",
    buttonLabel: "Reputation",
    fullTitle: "Reputation, Crisis and Trust Leadership",
    description: "Reputation and crisis specialists helping organisations protect institutional trust, navigate scrutiny and lead decisively when credibility is at stake."
  },
  {
    id: "marketing-branding-and-customer-growth",
    buttonLabel: "Branding",
    fullTitle: "Marketing, Branding and Customer Growth",
    description: "Visionary marketers and consumer authorities demonstrating how organisations can build distinctive brands, deepen customer relationships and convert relevance into revenue."
  },
  {
    id: "sales-negotiation-and-commercial-performance",
    buttonLabel: "Sales",
    fullTitle: "Sales, Negotiation and Commercial Performance",
    description: "High-performing commercial leaders equipping teams to win clients, negotiate effectively and accelerate sustainable revenue growth."
  },
  {
    id: "neuroscience-psychology-and-human-behaviour",
    buttonLabel: "Neuroscience",
    fullTitle: "Neuroscience, Psychology and Human Behaviour",
    description: "Neuroscientists, psychologists and behavioural experts translating science into practical strategies for leadership, learning, decision-making and performance."
  },
  {
    id: "high-performance-teams-and-team-building-experiences",
    buttonLabel: "Team-Building",
    fullTitle: "High-Performance Teams and Team-Building Experiences",
    description: "Expert facilitators and coaches transforming groups into aligned, accountable and high-performing teams through powerful experiential interventions."
  },
  {
    id: "sports-coaching-and-the-winning-mindset",
    buttonLabel: "Sports",
    fullTitle: "Sports, Coaching and the Winning Mindset",
    description: "Elite athletes, championship coaches and sporting icons translating lessons from world-class competition into compelling leadership and business insights."
  },
  {
    id: "sustainability-esg-health-and-human-performance",
    buttonLabel: "Sustainability",
    fullTitle: "Sustainability, ESG, Health and Human Performance",
    description: "Sustainability, climate, health and wellbeing authorities helping organisations build resilient businesses, healthier cultures and sustainable performance."
  },
  {
    id: "celebrity-speakers-mcs-comedy-and-entertainment",
    buttonLabel: "MCs",
    fullTitle: "Celebrity Speakers, MCs, Comedy and Entertainment",
    description: "Acclaimed public figures, broadcasters, actors, comedians, musicians and professional presenters bringing visibility, credibility, energy and unforgettable engagement to every event."
  }
];

export function getCategoryById(id: string): CategoryConfig | undefined {
  return CATEGORIES_CONFIG.find(c => c.id === id);
}

export function getCategoryByLabel(label: string): CategoryConfig | undefined {
  return CATEGORIES_CONFIG.find(c => c.buttonLabel.toLowerCase() === label.toLowerCase());
}
