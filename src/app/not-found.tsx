'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="text-4xl font-bold">Redirecting...</h1>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist. You will be redirected to the homepage shortly.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go to Homepage</Link>
      </Button>
    </div>
  );
}
