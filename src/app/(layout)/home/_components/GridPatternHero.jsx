import { GridPattern } from "@/components/GridPattern";
import { cn } from "@/lib/utils";

export function GridPatternHero() {
  return (
    <div className="absolute inset-0 -z-10 w-full min-h-full flex items-center justify-center overflow-hidden bg-background">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] stroke-hack-100/50",
          "inset-x-0 inset-y-[-30%] min-h-full skew-y-12"
        )}
      />
    </div>
  );
}
