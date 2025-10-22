import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Leaf, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const iconMap = {
  Leaf,
  Users,
};

type SustainabilityProps = {
  data: SiteData['sustainability'];
  image?: ImagePlaceholder;
};

export default function Sustainability({ data, image }: SustainabilityProps) {
  return (
    <section id="sustainability" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{data.title}</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {data.description}
          </p>
          <div className="grid gap-6 pt-4">
            {data.items.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Leaf;
              return (
                <div key={item.name} className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={800}
            height={600}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            data-ai-hint={image.imageHint}
          />
        )}
      </div>
    </section>
  );
}
