import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';

type TeamProps = {
  data: SiteData['team'];
  image?: ImagePlaceholder;
};

export default function Team({ data, image }: TeamProps) {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.title}</h2>
            <div className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed space-y-4">
              {data.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {image && (
              <div className="mt-10 flex justify-center">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-lg"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}