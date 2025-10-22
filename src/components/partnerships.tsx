
'use client';

import type { SiteData } from '@/lib/data';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

type PartnershipsProps = {
  data: SiteData['partnerships'];
  images: (ImagePlaceholder | undefined)[];
};

export default function Partnerships({ data, images }: PartnershipsProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, playOnInit: true })
  );

  // We duplicate the partners to create a seamless loop
  const extendedPartners = [...data.partners, ...data.partners];
  const extendedImages = [...images, ...images];

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
        <div className="py-12">
          <TooltipProvider>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {extendedPartners.map((partner, index) => {
                  const image = extendedImages[index];
                  return (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-4">
                            <Card className="flex items-center justify-center p-6 h-40 rounded-lg">
                              {image ? (
                                <div className="relative w-full h-full">
                                  <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    data-ai-hint={image.imageHint}
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                                  <span className="text-sm font-semibold text-muted-foreground">{partner.name}</span>
                                </div>
                              )}
                            </Card>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{partner.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
