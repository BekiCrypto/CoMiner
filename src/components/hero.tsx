import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type HeroProps = {
  data: SiteData['hero'];
  image?: ImagePlaceholder;
};

export default function Hero({ data, image }: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-shadow-lg animate-fade-in-down">
          {data.title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl animate-fade-in-up">
          {data.subtitle}
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={data.cta.href}>{data.cta.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
