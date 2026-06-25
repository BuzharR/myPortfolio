import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
          {siteConfig.description}
        </p>
        <Button
          size="lg"
          className="mt-8"
          nativeButton={false}
          render={<Link href="/projects" />}
        >
          View projects
        </Button>
      </Container>
    </section>
  );
}
