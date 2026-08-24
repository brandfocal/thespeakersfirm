import { Suspense } from 'react';
import { SpeakerCategoriesPage } from '@/components/generated/SpeakerCategoriesPage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Speaker Categories | The Speakers Firm',
  description: 'Explore speaker categories by theme: Keynotes, Leadership, AI & Tech, Future of Work, Economics, and governance authorities.',
};

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white/60 font-mono text-xs uppercase tracking-widest">Loading Portfolio...</div>
      </div>
    }>
      <Header />
      <SpeakerCategoriesPage />
      <Footer />
    </Suspense>
  );
}
