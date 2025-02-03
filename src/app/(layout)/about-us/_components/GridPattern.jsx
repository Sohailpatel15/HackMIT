import { GridPattern } from "@/components/GridPattern";
import { cn } from "@/lib/utils";

export function GridPatternHero() {
    return (
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-hack-100 ">
        </p>
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
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] stroke-hack-100/50",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    );
  }


  export function GridPatternLinearGradient() {
    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg p-40">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-accent-100 ">
            </p>
            <GridPattern
                width={20}
                height={20}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]  stroke-hack-300",
                )}
            />
        </div>
    );
}