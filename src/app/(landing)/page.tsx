"use client";

import MainSection from "@/components/main-section";
import NavBar from "@/components/nav-bar";
import { useEffect } from "react";

//create fonts for serif, sans-serif, and mono

export default function Home() {
  useEffect(() => {
    document
      .querySelector("body")
      ?.style.setProperty("font-family", "sans-serif");
  }, []);

  return (
    <main className={`grid h-full grid-cols-12 grid-rows-6 gap-4 p-4`}>
      <div className="col-span-12 row-span-6 px-4 pb-2 pt-10 md:px-20 lg:col-span-8 lg:col-start-3">
        <div className={`flex h-full w-full flex-col gap-10`}>
          <section className="flex flex-col gap-4">
            <NavBar />
          </section>
          <MainSection />
        </div>
      </div>
    </main>
  );
}
