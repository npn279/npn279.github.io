import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nguyen Phuoc Nguyen - AI Research Engineer',
  description: 'Personal portfolio and CV of Nguyen Phuoc Nguyen, AI Research Engineer specializing in Natural Language Processing and Large Language Models',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900 transition-colors duration-200`}>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </div>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            // Check if dark mode is enabled
            if (
              localStorage.getItem('darkMode') === 'true' ||
              (!('darkMode' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
      </body>
    </html>
  );
} 