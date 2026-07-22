import { SpeakerCategoriesPage } from '@/components/generated/SpeakerCategoriesPage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Speaker Categories | The Speakers Firm',
  description: 'Explore speaker categories by theme: Keynotes, Leadership, AI & Tech, Future of Work, Economics, and governance authorities.',
};

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <SpeakerCategoriesPage />
      <Footer />
    </>
  );
}
