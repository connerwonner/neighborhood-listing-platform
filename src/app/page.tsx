export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Neighborhood Listing Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Connecting local residents with community listings, neighborhood sponsors, and instant voice assistance.
        </p>
      </header>

      <section aria-label="Platform Features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-6 border rounded-xl shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Listings</h2>
          <p className="text-sm text-muted-foreground">
            Browse and post active neighborhood classifieds, events, and resources.
          </p>
        </article>

        <article className="p-6 border rounded-xl shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Neighborhood Sponsors</h2>
          <p className="text-sm text-muted-foreground">
            Discover local businesses supporting community initiatives and offer discounts.
          </p>
        </article>

        <article className="p-6 border rounded-xl shadow-sm bg-card">
          <h2 className="text-xl font-semibold mb-2">Voice Help</h2>
          <p className="text-sm text-muted-foreground">
            Access hands-free voice assistance cards to navigate local services quickly.
          </p>
        </article>
      </section>
    </main>
  );
}