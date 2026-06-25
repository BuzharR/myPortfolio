export type CaseStudy = {
  id: string;
  /** Display number shown in the heading and paginator. */
  number: number;
  /** Small uppercase label above the title. */
  eyebrow: string;
  /** First (dark) line of the heading, e.g. "Case Study". */
  title: string;
  /** Second (accent/green) line of the heading, e.g. "Responses". */
  accent: string;
  description: string;
  /** Optional image path in /public. Falls back to a placeholder. */
  image?: string;
};

const sharedDescription =
  "In October 2022, I joined HMH and have since been focused on edTech projects. This platform integrates online and application enhances the K-8 ELA and Math classroom experience by saving teachers time and increasing student engagement.";

export const caseStudies: CaseStudy[] = [
  {
    id: "responses",
    number: 1,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Responses",
    description: sharedDescription,
  },
  {
    id: "volume-meter",
    number: 2,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Volume Meter",
    description: sharedDescription,
  },
  {
    id: "approval",
    number: 3,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Approval",
    description: sharedDescription,
  },
  {
    id: "dashboard",
    number: 4,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Dashboard",
    description: sharedDescription,
  },
  {
    id: "onboarding",
    number: 5,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Onboarding",
    description: sharedDescription,
  },
  {
    id: "analytics",
    number: 6,
    eyebrow: "Case Study",
    title: "Case Study",
    accent: "Analytics",
    description: sharedDescription,
  },
];
