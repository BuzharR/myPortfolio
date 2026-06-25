import type { Metadata } from "next";

import { ProjectsView } from "@/features/projects/components/projects-view";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected case studies and project work.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
