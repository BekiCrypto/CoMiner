import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Gem } from 'lucide-react';

const iconMap = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

type FooterProps = {
  data: SiteData['footer'];
  logoImage?: ImagePlaceholder;
};

export default function Footer({ data, logoImage }: FooterProps) {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {logoImage ? (
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={50}
                height={12}
                data-ai-hint={logoImage.imageHint}
              />
            ) : (
              <>
                <Gem className="h-6 w-6 text-primary" />
                <span className="font-bold">CoMiner Business Group</span>
              </>
            )}
          </div>
          <div className="flex gap-2">
            {data.socials.map((social) => {
              const Icon = iconMap[social.name as keyof typeof iconMap];
              return (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="mt-4 border-t pt-4 text-center text-sm">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}
