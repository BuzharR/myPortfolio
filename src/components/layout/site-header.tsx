import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { MainNav } from "@/components/layout/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label={siteConfig.name} className="flex items-center">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={44}
            height={44}
            priority
            className="h-9 w-auto dark:invert"
          />
        </Link>

        <div className="flex items-center gap-6">
          <MainNav />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
