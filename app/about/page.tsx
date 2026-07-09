import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-12">
      <div className="space-y-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">About The Speakers Firm</h1>
      </div>

      <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6 font-light leading-relaxed">
        <p className="text-lg">
          The Speakers Firm is an institutional network linking visionaries, authors, and industry pioneers to global forums. We curate events, advise boards, and coordinate keynotes that define our modern era.
        </p>
        <p>
          Established in 2026, we specialize in corporate strategy, technological innovation, economic forecasts, and cultural shifts. Our curated roster of thinkers offers tailored insights that address complex regional and international dynamics.
        </p>
      </div>
    </div>
  );
}
