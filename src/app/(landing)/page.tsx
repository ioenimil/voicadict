"use client";

import MainSection from "@/components/main-section";
import NavBar from "@/components/nav-bar";
import useFontStore from "@/store/settings-store";
import { useEffect, useState } from "react";

//create fonts for serif, sans-serif, and mono

export default function Home() {
  
  useEffect(() => {
    document.querySelector("body")?.style.setProperty("font-family", "sans-serif");
  }, []);

  

  return (
    <main className={`  h-full p-4 grid gap-4 grid-cols-12 grid-rows-6`}>
      <div className=" col-span-12 lg:col-start-3 lg:col-span-8 row-span-6  pt-10 pb-2 px-4 md:px-20">
        <div
          className={`flex  flex-col gap-10 h-full w-full `}
        >
          <section className=" flex flex-col gap-4">
            <NavBar />
          </section>
          <MainSection />
        </div>
      </div>
    </main>
  );
}
