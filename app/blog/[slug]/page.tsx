import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return (
    <div className="max-w-2xl space-y-8">
      <div className="space-y-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
          Blog Post / {slug}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-none">
          Dynamic Post: {slug.replace(/-/g, " ")}
        </h1>
      </div>

      <div className="text-muted-foreground font-light leading-relaxed space-y-6">
        <p>
          This is a dynamically generated article placeholder for the slug &ldquo;{slug}&rdquo;. 
          Once the core data layer or CMS hooks are connected, content will be populated here.
        </p>
      </div>
    </div>
  );
}
