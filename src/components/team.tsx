import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type TeamProps = {
  data: SiteData['team'];
  images: (ImagePlaceholder | undefined)[];
};

export default function Team({ data, images }: TeamProps) {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {data.members.map((member, index) => {
            const image = images[index];
            return (
              <Card key={member.name} className="h-full">
                <CardHeader className="items-center text-center">
                  <Avatar className="h-24 w-24">
                    {image && (
                      <>
                        <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  <div className="grid gap-0.5 pt-2">
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
