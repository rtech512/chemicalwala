import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#020817] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-4">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-12 w-full max-w-xl" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-full max-w-lg" />
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Skeleton className="mb-5 h-12 w-12 rounded-xl" />
              <Skeleton className="mb-3 h-6 w-3/4" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-5 h-4 w-5/6" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Skeleton className="mb-4 h-4 w-24" />
              <Skeleton className="mb-3 h-9 w-32" />
              <Skeleton className="h-3 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}