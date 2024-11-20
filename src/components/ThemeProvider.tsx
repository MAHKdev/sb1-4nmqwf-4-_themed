'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="kidodo" themes={['kidodo', 'cupcake', 'fantasy', 'garden', 'retro']} attribute="data-theme">
      {children}
    </NextThemesProvider>
  );
}