import { Button } from '@nexus/ui';

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-white">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">Let’s talk analytics.</h1>
        <p className="text-white/70">
          Whether you are spinning up a new esports department or modernizing sport analytics, our team can help.
        </p>
      </div>
      <form className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <label className="grid gap-2 text-sm">
          <span>Name</span>
          <input className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" placeholder="Enter your name" />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Email</span>
          <input className="rounded-lg border border-white/10 bg-black/40 px-3 py-2" placeholder="you@org.gg" />
        </label>
        <label className="grid gap-2 text-sm">
          <span>How can we help?</span>
          <textarea className="min-h-[160px] rounded-lg border border-white/10 bg-black/40 px-3 py-2" placeholder="Share your goals" />
        </label>
        <Button type="submit" className="justify-self-start">Submit</Button>
      </form>
    </div>
  );
}
