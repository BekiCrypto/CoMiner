import type { SiteData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mountain, Hammer, FlaskConical, Truck } from 'lucide-react';

const iconMap = {
  Mountain,
  Hammer,
  FlaskConical,
  Truck,
};

type ServicesProps = {
  data: SiteData['services'];
};

export default function Services({ data }: ServicesProps) {
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
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-4">
          {data.items.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Mountain;
            return (
              <Card key={service.name} className="h-full">
                <CardHeader className="items-center text-center">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
