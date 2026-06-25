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

  const sectionRef = React.useRef<HTMLElement>(null);
  const activeIndexRef = React.useRef(activeIndex);
  const lockedRef = React.useRef(false);

  React.useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goTo = React.useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, caseStudies.length - 1));
    if (clamped === activeIndexRef.current) return;
    setDirection(clamped > activeIndexRef.current ? "down" : "up");
    setActiveIndex(clamped);
  }, []);

  // Wheel / trackpad scrolling moves one case study per gesture.
  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (lockedRef.current || Math.abs(event.deltaY) < 8) return;

      const target = activeIndexRef.current + (event.deltaY > 0 ? 1 : -1);
      if (target < 0 || target > caseStudies.length - 1) return;

      lockedRef.current = true;
      goTo(target);
      window.setTimeout(() => {
        lockedRef.current = false;
      }, 700);
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [goTo]);

  const study = caseStudies[activeIndex];
  const reversed = activeIndex % 2 === 1;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex flex-1 items-center py-8 transition-colors duration-500",
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
