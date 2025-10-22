import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type ServicesProps = {
  data: SiteData['services'];
  images: Record<string, ImagePlaceholder | undefined>;
};

export default function Services({ data, images }: ServicesProps) {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((service) => {
            const imageKey = service.name.toLowerCase().replace(/ /g, '-');
            const image = images[imageKey];
            return (
              <Card key={service.name} className="overflow-hidden flex flex-col">
                {image && (
                  <div className="relative w-full aspect-square">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
