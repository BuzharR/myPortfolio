import { ArrowDown, ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

type ScrollControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export function ScrollControls({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ScrollControlsProps) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-widest text-muted-foreground [writing-mode:vertical-rl]">
          scroll to grid
        </span>
        <div className="relative h-20 w-px bg-border">
          <span className="absolute -bottom-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-muted-foreground" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          size="icon"
          onClick={onPrev}
          disabled={!hasPrev}
          aria-label="Previous case study"
          className="bg-brand text-brand-foreground hover:bg-brand/90"
        >
          <ArrowUp className="size-4" />
        </Button>
        <Button
          size="icon"
          onClick={onNext}
          disabled={!hasNext}
          aria-label="Next case study"
          className="bg-brand text-brand-foreground hover:bg-brand/90"
        >
          <ArrowDown className="size-4" />
        </Button>
      </div>
    </div>
  );
}
