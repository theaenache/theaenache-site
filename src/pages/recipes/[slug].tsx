// pages/recipes/[slug].tsx
import React from "react";
import { useRouter } from "next/router";

export default function RecipePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">
        {slug?.toString().replace(/-/g, " ")}
      </h1>
      <p className="text-lg max-w-2xl">
        this is where your recipe details will go. we’ll add rich formatting, tags, photos, and seasonal vibes here 🍓
      </p>
    </main>
  );
}
