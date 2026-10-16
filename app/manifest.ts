import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinayak Rajendra Gund | AI/ML Engineer & Software Developer",
    short_name: "Vinayak Gund",
    description:
      "Official portfolio of Vinayak Rajendra Gund - AI/ML Engineer, Software Developer, Data Analyst, and Big Data Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
