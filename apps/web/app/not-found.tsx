export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-4xl font-semibold">We couldn’t find that page.</h1>
      <p className="mt-4 max-w-md text-white/70">Return to dashboards or try another natural language query.</p>
    </div>
  );
}
