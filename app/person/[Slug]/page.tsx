// app/person/[slug]/page.tsx

import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

interface PersonRow {
  id: string;
  slug: string;
  given_name: string;
  family_name: string;
  dob: string | null;
  birth_place: string | null;
}

export const revalidate = 0; // always load fresh during development

export default async function PersonPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data, error } = await supabase
    .from("person")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Person not found</h1>
        <p className="text-gray-400">No data exists for: {slug}</p>
        <Link href="/people" className="text-emerald-400 hover:underline">
          Back to people list
        </Link>
      </div>
    );
  }

  const p = data as PersonRow;

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-white">
          {p.given_name} {p.family_name}
        </h1>

        <p className="text-gray-400 text-sm">
          Person ID: {p.id}
        </p>
      </header>

      {/* PROFILE CARD */}
      <section className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-xl space-y-4 backdrop-blur-md">
        {/* Birth Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Birth</h2>
          <p className="text-gray-300 text-sm">
            {p.dob ? (
              <>Born on <span className="text-white">{p.dob}</span></>
            ) : (
              <>Birth date unknown</>
            )}
            {p.birth_place && (
              <>
                {" "}in <span className="text-white">{p.birth_place}</span>
              </>
            )}
          </p>
        </div>

        {/* Extra Fields Placeholder */}
        <div className="pt-4 text-gray-400 text-sm">
          <p>This page will later include:</p>
          <ul className="list-disc ml-6">
            <li>Parents</li>
            <li>Children</li>
            <li>Siblings</li>
            <li>Biographical notes</li>
            <li>Photos</li>
          </ul>
        </div>
      </section>

      {/* BACK BUTTON */}
      <footer className="pt-8">
        <Link
          href="/people"
          className="text-emerald-400 hover:underline text-sm"
        >
          ← Back to People List
        </Link>
      </footer>

    </div>
  );
}
