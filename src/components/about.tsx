import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

type AboutProps = {
  data: SiteData['about'];
  image?: ImagePlaceholder;
};

export default function About({ data, image }: AboutProps) {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data.title}
            </h2>
            {data.paragraphs.map((p, index) => (
              <p key={index} className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {data.stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
