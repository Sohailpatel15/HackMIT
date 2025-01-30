import { GridPattern } from "@/components/GridPattern";
import { cn } from "@/lib/utils";

export function GridPatternHero() {
    return (
      <div className="absolute -z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
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
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    );
  }