// pages/recipes.tsx
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// sample recipe list
const recipes = [
  { slug: "green-noodle-bowl", title: "green noodle bowl", tag: "spring" },
  { slug: "chili-crunch-eggs", title: "chili crunch eggs", tag: "cozy" },
  { slug: "peach-basil-toast", title: "peach basil toast", tag: "summer" },
];

export default function Recipes() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-rose-100 text-gray-900 px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">recipes</h1>
      <p className="text-lg max-w-2xl mb-10">
        food is feeling. here’s a rotating collection of seasonal favorites — snacks, memories, and experiments 🌿
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(({ slug, title, tag }) => (
          <Link key={slug} href={`/recipes/${slug}`}>
            <motion.div
              whileHover={{ x: 6 }}
              className="bg-white rounded-2xl p-6 shadow-md cursor-pointer transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <span className="text-sm text-pink-500">{tag}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
