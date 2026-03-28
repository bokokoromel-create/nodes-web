/** Squelette affiché pendant le chargement des pages formulaire (Suspense + useSearchParams). */
export default function FormPageSkeleton({ fieldRows = 5 }: { fieldRows?: number }) {
  return (
    <div
      className="min-h-screen min-h-[100dvh] py-8 min-[360px]:py-10 sm:py-12 px-3 min-[280px]:px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-section-muted)" }}
    >
      <div className="mx-auto max-w-xl">
        <div
          className="rounded-xl min-[360px]:rounded-2xl bg-white p-4 min-[280px]:p-5 min-[360px]:p-6 sm:p-8 shadow-sm animate-pulse"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        >
          <div className="h-8 bg-gray-100 rounded-lg w-2/3 mb-4" />
          <div className="h-4 bg-gray-100 rounded w-full mb-8" />
          <div className="space-y-4">
            {Array.from({ length: fieldRows }, (_, i) => (
              <div key={i} className="h-12 bg-gray-100 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
