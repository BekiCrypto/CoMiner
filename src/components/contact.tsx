'use client';

import type { SiteData } from '@/lib/data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React from 'react';

import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

type ContactProps = {
  data: SiteData['contact'];
};

export default function Contact({ data }: ContactProps) {
  const [state, formAction] = React.useActionState(submitContactForm, { success: false, message: '' });
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  React.useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  // Split phone numbers to create individual tel: links
  const phoneNumbers = data.phone.split('/');

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.description}
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-medium">Mobile and Direct Call</span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    {phoneNumbers.map((phone, index) => (
                      <React.Fragment key={phone}>
                        <a href={`tel:${phone.trim()}`} className="hover:underline">{`Line ${index + 1}`}</a>
                        {index < phoneNumbers.length - 1 && <span className="text-muted-foreground">|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaWhatsapp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="font-medium">WhatsApp</span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    {data.whatsapp.map((wa, index) => (
                      <React.Fragment key={wa.link}>
                        <a href={wa.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{`Line ${index + 1}`}</a>
                        {index < data.whatsapp.length - 1 && <span className="text-muted-foreground">|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span>{data.address}</span>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...form.register('name')} placeholder="Your Name" />
                  {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...form.register('email')} placeholder="your.email@example.com" />
                  {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...form.register('message')} placeholder="Your message..." />
                  {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
