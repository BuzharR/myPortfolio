import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  return (
    <footer className="border-t py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built for
          practice.
        </p>
        <p>Next.js · Tailwind CSS · shadcn/ui · TypeScript</p>
      </Container>
    </footer>
  );
}
