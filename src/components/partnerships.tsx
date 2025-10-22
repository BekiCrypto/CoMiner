import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';

type PartnershipsProps = {
  data: SiteData['partnerships'];
  images: (ImagePlaceholder | undefined)[];
};

export default function Partnerships({ data, images }: PartnershipsProps) {
  return (
    <section id="partnerships" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.description}
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 py-12">
          {data.partners.map((partner, index) => {
            const image = images[index];
            return (
              <div key={partner.name} className="flex justify-center">
                {image ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={200}
                    height={100}
                    className="h-auto w-40 object-contain"
                    data-ai-hint={image.imageHint}
                  />
                ) : (
                  <span className="text-lg font-semibold">{partner.name}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
