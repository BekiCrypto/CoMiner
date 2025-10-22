'use server';

import { z } from 'zod';
import { generateImprovedText } from '@/ai/flows/generate-improved-text';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type State = {
  success: boolean;
  message: string;
};

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors[Object.keys(validatedFields.error.flatten().fieldErrors)[0] as string][0]
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would send an email here.
  // For this example, we'll just log it to the console.
  console.log('New Contact Form Submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Thank you for your message! We will get back to you shortly.',
  };
}


type AIInput = {
  content: string;
  tone: string;
};

export async function getImprovedContent(input: AIInput) {
  try {
    const result = await generateImprovedText(input);
    return result;
  } catch (error) {
    console.error('Error generating improved text:', error);
    return { improvedText: 'An error occurred while generating text. Please try again.' };
  }
}
