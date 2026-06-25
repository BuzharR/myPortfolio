import type { Metadata } from "next";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
  description: "About me.",
};

export default function AboutPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-muted-foreground">
          This page is a placeholder. Build it out next.
        </p>
      </Container>
    </section>
  );
}
