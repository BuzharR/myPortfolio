import Image from "next/image";

import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/features/projects/data";

type CaseStudyContentProps = {
  study: CaseStudy;
  reversed: boolean;
};

export function CaseStudyContent({ study, reversed }: CaseStudyContentProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-8 lg:gap-16",
        reversed ? "flex-row-reverse" : "flex-row",
      )}
    >
      {/* Image */}
      <div className="flex flex-1 justify-center">
        <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-[2rem] bg-neutral-600 shadow-lg">
          {study.image ? (
            <Image
              src={study.image}
              alt={study.accent}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover"
            />
          ) : null}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
          {study.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {study.number}. {study.title}
        </h2>
        <p className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
          {study.accent}
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {study.description}
        </p>
      </div>
    </div>
  );
}
