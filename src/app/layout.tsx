import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { resumeData } from "../lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { personal, summary } = resumeData;

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: {
    default: `${personal.name} | ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: summary,
  keywords: [
    "Manik Sharma",
    "Full Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "Unity Game Developer",
    "C# Programmer",
    "C++ Godot Contributor",
    "Software Engineer Portfolio",
    "Jammu and Kashmir Developer"
  ],
  authors: [{ name: personal.name, url: personal.links.portfolio }],
  creator: personal.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: personal.links.portfolio,
    title: `${personal.name} | ${personal.title}`,
    description: summary,
    firstName: "Manik",
    lastName: "Sharma",
    username: "Manik2607",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | ${personal.title}`,
    description: summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD ProfilePage Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-05-26T12:00:00Z",
    "mainEntity": {
      "@type": "Person",
      "name": personal.name,
      "jobTitle": personal.title,
      "email": personal.email,
      "telephone": personal.phone,
      "url": personal.links.portfolio,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jammu and Kashmir",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Sri Krishna College of Engineering and Technology"
      },
      "knowsAbout": [
        "React", "Next.js", "TypeScript", "FastAPI", "C#", "C++", "Unity Engine", "Godot Engine", "REST APIs", "Docker"
      ],
      "sameAs": [
        personal.links.github,
        personal.links.linkedin
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {children}
        
        {/* Hidden Global SVG Refraction Filter for Liquid Glass Effect */}
        <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} width="0" height="0">
          <defs>
            <filter id="liquid-refraction" x="-20%" y="-20%" width="140%" height="140%">
              {/* Step 1: Generate organic fluid noise */}
              <feTurbulence type="fractalNoise" baseFrequency="0.016" numOctaves="3" result="noise" seed="4" />
              
              {/* Step 2: Warp and refract background elements scrolling under the container (28px displacement) */}
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              
              {/* Step 3: Frosted Gaussian Blur (stdDev 6 = 12px CSS blur) */}
              <feGaussianBlur in="displaced" stdDeviation="6" result="blurred" />
              
              {/* Step 4: Saturation matrix (2.2x color multiplier) */}
              <feColorMatrix type="saturate" values="2.2" in="blurred" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}
