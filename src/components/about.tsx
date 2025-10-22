import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Goal, Handshake, ShieldCheck, Briefcase, Users, Lightbulb, Leaf } from 'lucide-react';

type AboutProps = {
  data: SiteData['about'];
  image?: ImagePlaceholder;
};

const valueIcons: { [key: string]: React.ElementType } = {
  Integrity: ShieldCheck,
  Professionalism: Briefcase,
  Collaboration: Users,
  Innovation: Lightbulb,
  Sustainability: Leaf,
};

export default function About({ data, image }: AboutProps) {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {data.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.overview}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Goal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">{data.vision}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">{data.mission}</p>
                </div>
              </div>
            </div>
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
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Core Values</h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {data.values.map((value) => {
              const Icon = valueIcons[value.name] || ShieldCheck;
              return (
                <div key={value.name} className="flex flex-col items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{value.name}</h4>
                  <p className="mt-1 text-sm text-center text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
