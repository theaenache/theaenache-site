import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans">
      {/* navigation pinned top-left */}
      <nav className="fixed top-6 left-6 z-10 space-y-3 text-left">
        {[
          { href: "/aboutme", label: "about me" },
          { href: "/projects", label: "projects" },
          { href: "/blog", label: "blog" },
          { href: "/recipes", label: "recipes" },
          { href: "/contactme", label: "contact me" },
        ].map(({ href, label }) => (
          <Link key={href} href={href}>
            <motion.div
              whileHover={{ x: 6 }}
              className="text-lg font-semibold cursor-pointer hover:underline"
            >
              {label}
            </motion.div>
          </Link>
        ))}
      </nav>

      {/* hero text absolutely centered using transforms */}
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          hii, i’m thea :)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base max-w-xl mx-auto"
        >
          want to read up on some projects? we got that. want a recipe? we got that. want to hear some opinions? we got that.
        </motion.p>
      </section>
    </main>
  );
}

