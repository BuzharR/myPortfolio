import { cn } from "@/lib/utils";
import { caseStudies } from "@/features/projects/data";

type CaseStudyPaginatorProps = {
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function CaseStudyPaginator({
  activeIndex,
  onSelect,
}: CaseStudyPaginatorProps) {
  return (
    <div className="flex shrink-0 flex-col gap-4">
      {caseStudies.map((study, index) => {
        const isActive = index === activeIndex;
        return (
          <div key={study.id} className="flex items-center gap-2">
            <span className="w-3 text-right text-[11px] text-muted-foreground">
              {study.number}
            </span>
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to case study ${study.number}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "size-9 rounded-lg shadow-sm ring-1 ring-black/5 transition-all hover:scale-105",
                isActive
                  ? "bg-neutral-600 dark:bg-neutral-300"
                  : "bg-neutral-300 dark:bg-neutral-700",
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
