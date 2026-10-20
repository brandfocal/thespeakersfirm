import { TSFNeurosciencePsychologyAndHumanBehaviourCategory } from '@/components/generated/TSFNeurosciencePsychologyAndHumanBehaviourCategory';

export const metadata = {
  title: 'Human Behaviour & Neuroscience Speakers | The Speakers Firm',
  description: 'Translating Science Into Practical Leadership Strategies. Explore leading keynote speakers, medical specialists, and behavioral scientists.',
  openGraph: {
    title: 'Human Behaviour & Neuroscience Speakers | The Speakers Firm',
    description: 'Translating Science Into Practical Leadership Strategies. Explore leading keynote speakers, medical specialists, and behavioral scientists.',
    url: 'https://thespeakersfirm.co.za/find-a-speaker/neuroscience-psychology-and-human-behaviour',
    siteName: 'The Speakers Firm',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: 'https://thespeakersfirm.co.za/speaker_thumbnails/Dr-Mpume-Zenda-The-Speakers-Firm.jpg',
        secureUrl: 'https://thespeakersfirm.co.za/speaker_thumbnails/Dr-Mpume-Zenda-The-Speakers-Firm.jpg',
        width: 1000,
        height: 1000,
        alt: 'Neuroscience & Human Behaviour Faculty — The Speakers Firm',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Behaviour & Neuroscience Speakers | The Speakers Firm',
    description: 'Translating Science Into Practical Leadership Strategies.',
    images: ['https://thespeakersfirm.co.za/speaker_thumbnails/Dr-Mpume-Zenda-The-Speakers-Firm.jpg']
  }
};

export default function CategoryPage() {
  return <TSFNeurosciencePsychologyAndHumanBehaviourCategory />;
}
