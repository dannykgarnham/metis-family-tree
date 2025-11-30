// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">

      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-white">
          Métis Family Tree (MFT)
        </h1>
        <p className="text-gray-300 max-w-2xl">
          A project to preserve and explore our Métis, Prairie,
          and Red River roots.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">Start exploring</h2>
        <p className="text-gray-300">
          View everyone currently in the family tree:
        </p>

        <Link
          href="/people"
          className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-700"
        >
          View People in the Tree
        </Link>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-white">About the Project</h2>
        <p className="text-gray-300 max-w-3xl">
          This is an early version of the Métis Family Tree project. Future
          updates will include individual person profiles, parent–child
          relationships, expanded biographies, document uploads, edit
          suggestions, user accounts, and more.
        </p>
      </section>

      <footer className="pt-6 border-t border-white/10 text-gray-500 text-sm">
        Métis Family Tree
      </footer>

    </div>
  );
}
