import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site-shell';
import { city } from '@/content/city';
import './globals.css';
export const metadata: Metadata = { title: { default: `${city.name}, ${city.state} | A place to belong`, template: `%s | ${city.name}` }, description: 'Discover Brookhaven. City services, community news, events, and places to explore in a fictional Illinois community.' };
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to main content</a><Header />{children}<Footer /></body></html>; }
