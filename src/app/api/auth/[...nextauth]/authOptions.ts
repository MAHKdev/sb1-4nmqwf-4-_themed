import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { isDemoUser } from '@/lib/demoAuth';
import { supabase } from '@/lib/supabase';


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Demo Account',
      credentials: {
        id: { type: 'text' },
        name: { type: 'text' },
        email: { type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.id || !isDemoUser(credentials.id)) {
          return null;
        }

        return {
          id: credentials.id,
          name: credentials.name,
          email: credentials.email,
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(credentials.name || 'Demo User')}`,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.email = user.email || null;
        token.name = user.name || null;
        token.image = user.image || null;

        const userRecord = {
          email: token.email || null,
          name: token.name || null,
          avatar_url: token.image || null,
          provider: account?.provider || 'credentials',
          created_at: new Date().toISOString(),
        } as any;

        if (!userRecord.email && account?.provider === 'LINE') {
          userRecord.id = token.sub || account.providerAccountId || null; // Use LINE ID
        }

        if (!userRecord.email && !userRecord.id) {
          console.error('User record must have at least one unique identifier (email or ID).');
          return token;
        }

        try {
          const { error } = await supabase.from('users').upsert(userRecord, {
            onConflict: userRecord.email ? 'email' : 'id', // Handle conflicts by unique identifier
          });

          if (error) {
            console.error('Error upserting user to Supabase:', error.message);
          }
        } catch (err) {
          console.error('Unexpected error during Supabase upsert:', err);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === 'development',
};
