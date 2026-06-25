/**
 * Central place for site-wide metadata and navigation.
 * Import this anywhere instead of hard-coding strings, e.g.
 *   import { siteConfig } from "@/config/site"
 */
export const siteConfig = {
  name: "My Portfolio",
  description:
    "A scalable Next.js + Tailwind + shadcn/ui starter for practicing frontend UI.",
  url: "http://localhost:3000",
  links: {
    github: "https://github.com/",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
];

export type SiteConfig = typeof siteConfig;
