import Skeleton from "@/components/ui/Skeleton";

export default function HomeSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <div className="space-y-5">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-14 w-full max-w-2xl" />
        <Skeleton className="h-5 w-full max-w-3xl" />
        <Skeleton className="h-5 w-2/3" />

        <div className="mt-8 flex gap-4">
          <Skeleton className="h-12 w-36 rounded-xl" />
          <Skeleton className="h-12 w-36 rounded-xl" />
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <Skeleton className="mb-5 h-14 w-14 rounded-xl" />
            <Skeleton className="mb-3 h-6 w-3/4" />
            <Skeleton className="mb-2 h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </section>
  );
}