// app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Métis Family Tree",
  description: "Explore the history and connections of the Garnham, Favel, Vivier, Monkman, and related Métis families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0e1a23] text-gray-100 min-h-screen antialiased">
        <main className="w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
