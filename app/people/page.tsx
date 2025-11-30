// app/people/page.tsx

import { supabase } from "@/lib/supabaseClient";

type PersonRow = {
  id: string;
  slug: string;
  given_name: string;
  family_name: string;
  dob: string | null;
  birth_place: string | null;
};

export const revalidate = 0;

export default async function PeoplePage() {
  const { data, error } = await supabase
    .from("person")
    .select("id, slug, given_name, family_name, dob, birth_place")
    .order("family_name", { ascending: true });

  if (error) {
    console.error(error);
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">People in the Métis Family Tree</h1>
        <p className="text-red-400">
          Error loading people from Supabase.
        </p>
      </div>
    );
  }

  const people = (data ?? []) as PersonRow[];

  return (
    <div className="space-y-8">

      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-white">
          People in the Métis Family Tree
        </h1>
        <p className="text-gray-300">
          This list loads live from the Supabase database.
        </p>
      </header>

      {people.length === 0 && (
        <p className="text-gray-400">No people in the database yet.</p>
      )}

      <ul className="space-y-3">
        {people.map((p) => (
          <li
            key={p.id}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-md"
          >
            <div className="text-lg font-semibold text-white">
              {p.given_name} {p.family_name}
            </div>
            <div className="text-gray-300 text-sm">
              {p.dob ? `b. ${p.dob}` : "Birth date unknown"}
              {p.birth_place ? ` · ${p.birth_place}` : ""}
            </div>
          </li>
        ))}
      </ul>

      <footer className="pt-6 border-t border-white/10 text-sm text-gray-400">
        Loaded live from Supabase · Métis Family Tree (MFT)
      </footer>

    </div>
  );
}
