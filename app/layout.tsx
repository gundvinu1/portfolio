import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinayakgund.in"),
  title: {
    default: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    template: "%s | Vinayak Gund",
  },
  description:
    "AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer from Pune, India. Building AI-powered software, automation platforms, and data systems.",
  keywords: [
    "Vinayak Gund",
    "Vinayak Rajendra Gund",
    "vinayakgund.in",
    "Vinayak",
    "Gund",
    "AI ML Engineer Pune",
    "Machine Learning Engineer India",
    "Deep Learning",
    "Data Analyst",
    "Big Data Engineer",
    "Data Engineer",
    "Software Developer",
    "Python Developer",
    "Generative AI",
    "LLM",
    "Pune",
    "India",
    "Portfolio",
    "Chordz Technologies",
  ],
  authors: [{ name: "Vinayak Rajendra Gund", url: "https://vinayakgund.in" }],
  creator: "Vinayak Rajendra Gund",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vinayakgund.in",
    siteName: "Vinayak Rajendra Gund",
    title: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    description:
      "Portfolio focused on AI/ML, software development, data analytics, backend engineering, and automation.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vinayak Rajendra Gund - AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    description:
      "Portfolio focused on AI/ML, software development, data analytics, backend engineering, and automation.",
    images: ["/og-image.svg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinayak Rajendra Gund",
  alternateName: "Vinayak Gund",
  url: "https://vinayakgund.in",
  image: "https://vinayakgund.in/og-image.svg",
  description: "AI/ML Engineer, Data Analyst, and Software Developer based in Pune, India.",
  sameAs: [
    "https://github.com/gundvinu1",
    "https://www.linkedin.com/in/vinayak-gund-a26817284",
  ],
  jobTitle: "AI/ML Engineer and Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Chordz Technologies Pvt Ltd",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Savitribai Phule Pune University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  email: "gundvinayak1@gmail.com",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Analytics",
    "Big Data",
    "Software Development",
    "Python",
    "Generative AI",
    "LLMs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
