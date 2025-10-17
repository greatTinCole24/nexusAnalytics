const posts = [
  {
    title: 'How Nexus Analytics interprets natural language safely',
    description: 'A look at the semantic registry, LangChain orchestration, and pgvector grounding behind Ask Nexus.',
    date: 'Mar 2024'
  },
  {
    title: 'Esports + sports analytics convergence',
    description: 'Lessons from building data models that support Valorant, League of Legends, NBA, and NFL simultaneously.',
    date: 'Feb 2024'
  }
];

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-6 py-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">Latest from Nexus</h1>
        <p className="text-white/70">Insights on competitive performance, product design, and data science.</p>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-wide text-primary">{post.date}</p>
            <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-white/70">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
