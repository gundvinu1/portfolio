import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vinayakgund.in"),
  title: {
    default: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    template: "%s | Vinayak Rajendra Gund",
  },
  description:
    "Official portfolio of Vinayak Rajendra Gund — AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer from Pune, India. Specializing in LLM agents, scalable backend systems, PyTorch, and distributed data pipelines.",
  applicationName: "Vinayak Rajendra Gund Portfolio",
  authors: [{ name: "Vinayak Rajendra Gund", url: "https://vinayakgund.in" }],
  generator: "Next.js",
  keywords: [
    "Vinayak Gund",
    "Vinayak Rajendra Gund",
    "vinayakgund.in",
    "Vinayak",
    "Gund",
    "AI ML Engineer Pune",
    "Machine Learning Engineer India",
    "Deep Learning Engineer",
    "Data Analyst Pune",
    "Big Data Engineer Pune",
    "Data Engineer India",
    "Software Developer Pune",
    "Python Developer",
    "Full Stack Developer",
    "Backend Developer Node.js",
    "Generative AI Engineer",
    "LLM Engineer",
    "LangChain",
    "PyTorch Developer",
    "TensorFlow",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Apache Spark",
    "Chordz Technologies",
    "Pune Developer Portfolio",
    "AutoPrint",
    "AI Automation Agent",
  ],
  creator: "Vinayak Rajendra Gund",
  publisher: "Vinayak Rajendra Gund",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Vinayak",
    lastName: "Gund",
    username: "gundvinu1",
    gender: "male",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: "https://vinayakgund.in",
    siteName: "Vinayak Rajendra Gund | Portfolio",
    title: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    description:
      "AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer from Pune, India. Building AI-powered software, automation platforms, and distributed data systems.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        type: "image/svg+xml",
        alt: "Vinayak Rajendra Gund - AI/ML Engineer & Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    description:
      "AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer from Pune, India. Building AI-powered software, automation platforms, and data systems.",
    images: ["/og-image.svg"],
    creator: "@vinayakgund",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
  classification: "Portfolio & Engineering",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://vinayakgund.in/#person",
      name: "Vinayak Rajendra Gund",
      alternateName: ["Vinayak Gund", "gundvinu1"],
      givenName: "Vinayak",
      familyName: "Gund",
      url: "https://vinayakgund.in",
      image: "https://vinayakgund.in/vinayak.jpg",
      description:
        "AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer based in Pune, India.",
      jobTitle: [
        "AI/ML Engineer",
        "Software Developer",
        "Data Analyst",
        "Big Data Engineer",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Chordz Technologies Pvt Ltd",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Savitribai Phule Pune University (SPPU)",
        sameAs: "http://www.unipune.ac.in/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      email: "mailto:gundvinayak1@gmail.com",
      telephone: "+91-8767535697",
      sameAs: [
        "https://github.com/gundvinu1",
        "https://www.linkedin.com/in/vinayak-gund-a26817284",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Large Language Models (LLMs)",
        "Data Analytics",
        "Big Data Engineering",
        "Apache Spark",
        "Hadoop",
        "Kafka",
        "Software Development",
        "Python",
        "TypeScript",
        "FastAPI",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI/ML Engineer and Software Developer",
        occupationalCategory: "15-1252.00 - Software Developers",
        skills:
          "Machine Learning, Full Stack Development, Data Engineering, LLMs, Automation, REST APIs",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vinayakgund.in/#website",
      url: "https://vinayakgund.in",
      name: "Vinayak Rajendra Gund | Official Portfolio",
      description:
        "Portfolio and engineering showcase of Vinayak Rajendra Gund, featuring AI/ML projects, data systems, and software engineering.",
      publisher: {
        "@id": "https://vinayakgund.in/#person",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://vinayakgund.in/#profilepage",
      url: "https://vinayakgund.in",
      name: "Vinayak Rajendra Gund - AI/ML Engineer & Software Developer",
      isPartOf: {
        "@id": "https://vinayakgund.in/#website",
      },
      about: {
        "@id": "https://vinayakgund.in/#person",
      },
      mainEntity: {
        "@id": "https://vinayakgund.in/#person",
      },
      primaryImageOfPage: "https://vinayakgund.in/og-image.svg",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://vinayakgund.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://vinayakgund.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://vinayakgund.in/#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Projects",
          item: "https://vinayakgund.in/#projects",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Skills",
          item: "https://vinayakgund.in/#skills",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Experience",
          item: "https://vinayakgund.in/#experience",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: "https://vinayakgund.in/#contact",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://vinayakgund.in/#projects-list",
      name: "Featured Engineering Projects",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "AutoPrint",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web / WhatsApp",
          description:
            "WhatsApp-based self-service printing platform featuring an 8-state stateful text conversation engine, Cashfree transaction gateways, and SumatraPDF automation managed via Redis and BullMQ async workers.",
          url: "https://github.com/gundvinu1/autoprint",
          author: {
            "@id": "https://vinayakgund.in/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "AI Automation Agent",
          applicationCategory: "UtilityApplication",
          operatingSystem: "Cloud / Web",
          description:
            "Natural-language automation assistant for Gmail, Calendar, reporting, and productivity workflows using LangChain LLM orchestration and Google API integrations.",
          url: "https://github.com/gundvinu1/AI-Automation-Agent-",
          author: {
            "@id": "https://vinayakgund.in/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Credit Card Fraud Detection",
          applicationCategory: "SecurityApplication",
          operatingSystem: "Python / Data",
          description:
            "Machine learning system for detecting fraudulent transactions using classification models with 87% accuracy and custom feature engineering reducing false positives by 18%.",
          url: "https://github.com/gundvinu1/Credit-Card-Fraud-Detection-",
          author: {
            "@id": "https://vinayakgund.in/#person",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "Text to 3D Model Generation",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Python / Deep Learning",
          description:
            "Deep learning pipeline that converts natural language descriptions into 3D model representations using NLP and TensorFlow.",
          author: {
            "@id": "https://vinayakgund.in/#person",
          },
        },
      ],
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
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
