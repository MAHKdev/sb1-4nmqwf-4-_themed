'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AuthButtons } from '@/components/auth/AuthButtons';
import SuspenseFallback from '@/components/ui/SuspenseFallback';
import config from '@/config';

import Mascot from '@/components/Mascot';

function SignInContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || config.appPathPublic || '/';

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      console.error('Authentication error:', error);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <Mascot className="mx-auto h-16 w-16" />
          <h2 className="mt-6 text-3xl font-bold">Sign in to {config.appName}</h2>
          <p className="mt-2 text-sm opacity-70">
            Sign in to sync your data across devices
          </p>
        </div>

        <div className="mt-8">
          <AuthButtons 
            callbackUrl={callbackUrl} 
            mode="page"
          />
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <SignInContent />
    </Suspense>
  );
}
