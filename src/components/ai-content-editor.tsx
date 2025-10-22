'use client';

import React, { useState, useTransition } from 'react';
import { editableTextsMap, SiteData } from '@/lib/data';
import { getImprovedContent } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type AIContentEditorProps = {
  siteData: SiteData;
};

const tones = ['Professional', 'Engaging', 'Concise', 'Persuasive', 'Formal'];

export default function AIContentEditor({ siteData }: AIContentEditorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<string>(tones[0]);
  const [originalText, setOriginalText] = useState('');
  const [improvedText, setImprovedText] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSectionChange = (value: string) => {
    setSelectedSection(value);
    const text = editableTextsMap[value as keyof typeof editableTextsMap] || '';
    setOriginalText(text);
    setImprovedText('');
  };

  const handleGenerate = () => {
    if (!originalText || !selectedTone) return;
    startTransition(async () => {
      const result = await getImprovedContent({
        content: originalText,
        tone: selectedTone,
      });
      if (result.improvedText) {
        setImprovedText(result.improvedText);
      } else {
        setImprovedText('Failed to generate content. Please try again.');
      }
    });
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full h-14 w-14 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Content Editor"
      >
        <Wand2 className="h-6 w-6" />
      </Button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <ScrollArea className="h-full pr-6">
            <SheetHeader>
              <SheetTitle>AI Content Editor</SheetTitle>
              <SheetDescription>
                Enhance your website's copy. Select a section and tone, then let AI craft a more compelling version.
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-6 py-8">
              <div className="grid gap-3">
                <Label htmlFor="section">Website Section</Label>
                <Select value={selectedSection} onValueChange={handleSectionChange}>
                  <SelectTrigger id="section">
                    <SelectValue placeholder="Select a section to edit" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(editableTextsMap).map((key) => (
                      <SelectItem key={key} value={key}>
                        {key}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="original-text">Original Text</Label>
                <Textarea id="original-text" value={originalText} readOnly rows={6} className="bg-muted" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="tone">Desired Tone</Label>
                <Select value={selectedTone} onValueChange={setSelectedTone}>
                  <SelectTrigger id="tone">
                    <SelectValue placeholder="Select a tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map((tone) => (
                      <SelectItem key={tone} value={tone}>
                        {tone}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleGenerate} disabled={isPending || !selectedSection}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Improved Text
              </Button>

              <div className="grid gap-3">
                <Label htmlFor="improved-text">AI-Generated Text</Label>
                <Textarea id="improved-text" value={improvedText} placeholder="Improved content will appear here..." readOnly rows={10} />
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
}
