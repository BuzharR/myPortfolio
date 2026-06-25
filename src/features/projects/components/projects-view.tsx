"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { caseStudies } from "@/features/projects/data";
import { CaseStudyPaginator } from "@/features/projects/components/case-study-paginator";
import { ScrollControls } from "@/features/projects/components/scroll-controls";
import { CaseStudyContent } from "@/features/projects/components/case-study-content";

export function ProjectsView() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<"up" | "down">("down");

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, caseStudies.length - 1));
    if (clamped === activeIndex) return;
    setDirection(clamped > activeIndex ? "down" : "up");
    setActiveIndex(clamped);
  }

  const study = caseStudies[activeIndex];
  const reversed = activeIndex % 2 === 1;

  return (
    <section
      className={cn(
        "flex min-h-[calc(100vh-4rem)] items-center py-16 transition-colors duration-500",
        activeIndex % 2 === 0 ? "bg-muted/40" : "bg-background",
      )}
    >
      <Container className="flex w-full items-center gap-6 lg:gap-10">
        {/* Fixed: thumbnail paginator */}
        <CaseStudyPaginator activeIndex={activeIndex} onSelect={goTo} />

        {/* Animated: only the image + text transition between case studies */}
        <div className="relative flex-1 overflow-hidden">
          <div
            key={activeIndex}
            className={cn(
              "animate-in fade-in duration-500 ease-out",
              direction === "down"
                ? "slide-in-from-bottom-12"
                : "slide-in-from-top-12",
            )}
          >
            <CaseStudyContent study={study} reversed={reversed} />
          </div>
        </div>

        {/* Fixed: scroll controls */}
        <ScrollControls
          onPrev={() => goTo(activeIndex - 1)}
          onNext={() => goTo(activeIndex + 1)}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < caseStudies.length - 1}
        />
      </Container>
    </section>
  );
}
