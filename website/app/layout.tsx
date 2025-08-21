import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurality Solutions | Capture Human Intent",
  description: "Replace button presses and mechanical interactions with seamless muscle inputs. Our smart wearable technology translates your natural movements into digital commands.",
  keywords: "EMG, electromyography, biosignals, muscle control, human-computer interface, wearable technology, assistive devices, prosthetics",
  authors: [{ name: "Neurality Solutions" }],
  openGraph: {
    title: "Neurality Solutions | Capture Human Intent",
    description: "Replace button presses and mechanical interactions with seamless muscle inputs. Our smart wearable technology translates your natural movements into digital commands.",
    url: "https://neurality.solutions",
    siteName: "Neurality Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurality Solutions | Capture Human Intent",
    description: "Replace button presses and mechanical interactions with seamless muscle inputs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}
