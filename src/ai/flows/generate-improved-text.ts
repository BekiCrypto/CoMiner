'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating improved text for website sections based on initial content and a specified tone.
 *
 * - generateImprovedText - An asynchronous function that takes initial content and a desired tone as input and returns improved text.
 * - GenerateImprovedTextInput - The input type for the generateImprovedText function, including content and tone.
 * - GenerateImprovedTextOutput - The output type for the generateImprovedText function, providing the improved text.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImprovedTextInputSchema = z.object({
  content: z.string().describe('The initial text content to be improved.'),
  tone: z.string().describe('The desired tone for the improved text (e.g., professional, engaging).'),
});

export type GenerateImprovedTextInput = z.infer<typeof GenerateImprovedTextInputSchema>;

const GenerateImprovedTextOutputSchema = z.object({
  improvedText: z.string().describe('The AI-generated improved text.'),
});

export type GenerateImprovedTextOutput = z.infer<typeof GenerateImprovedTextOutputSchema>;

/**
 * Asynchronously generates improved text based on the provided content and tone.
 * @param input - The input containing the initial content and desired tone.
 * @returns A promise that resolves with the improved text.
 */
export async function generateImprovedText(input: GenerateImprovedTextInput): Promise<GenerateImprovedTextOutput> {
  return generateImprovedTextFlow(input);
}

const generateImprovedTextPrompt = ai.definePrompt({
  name: 'generateImprovedTextPrompt',
  input: {schema: GenerateImprovedTextInputSchema},
  output: {schema: GenerateImprovedTextOutputSchema},
  prompt: `You are an AI-powered content improver. Given the following content and desired tone, generate improved text:

Content: {{{content}}}

Desired Tone: {{{tone}}}

Improved Text:`,
});

const generateImprovedTextFlow = ai.defineFlow(
  {
    name: 'generateImprovedTextFlow',
    inputSchema: GenerateImprovedTextInputSchema,
    outputSchema: GenerateImprovedTextOutputSchema,
  },
  async input => {
    const {output} = await generateImprovedTextPrompt(input);
    return output!;
  }
);
