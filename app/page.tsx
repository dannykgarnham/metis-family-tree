import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Métis Family Tree (MFT)
          </h1>
          <p className="text-slate-600 text-sm md:text-base">
            A project to preserve and explore our Métis, Prairie,
            and Red River roots.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">What this site is for</h2>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
            <li>Documenting family members, dates, places, and stories.</li>
            <li>Honouring Métis and Prairie heritage in a respectful way.</li>
            <li>
              Letting family suggest updates, which can later be reviewed and
              approved.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Next steps</h2>
          <p className="text-sm text-slate-700">
            This is an early version of the project. Over time we&apos;ll add:
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
            <li>A searchable family tree and person pages.</li>
            <li>Biographical details and historical context.</li>
            <li>Sign-in for family members and moderators.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Testing the site</h2>
          <p className="text-sm text-slate-700">
            For now this is just a simple home page.
            As we build out the app, links like a{" "}
            <span className="font-semibold">people list</span> and individual{" "}
            <span className="font-semibold">family pages</span> will appear
            here.
          </p>
          <p className="text-xs text-slate-500">
            Once the people pages are ready, a link will appear here, for
            example:{" "}
            <span className="italic">“View all people in the tree”</span>.
          </p>
        </section>

        <footer className="pt-4 border-t border-slate-200 text-xs text-slate-500">
          <p>Metis Family Tree</p>
        </footer>
      </div>
    </main>
  );
}
