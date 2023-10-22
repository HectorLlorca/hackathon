"use client";
import Characters from "@/components/Characters";
import Search from "@/components/Search";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [themeLoading, setThemeLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setThemeLoading(false);
    }, 0);
  }, []);
  return (
    <>
      {!themeLoading && (
        <div className="flex flex-col gap-12">
          <header className=" flex flex-col gap-6 bg-rick-title bg-cover bg-left bg-no-repeat">
            <div className=" flex justify-end w-full place-items-center h-20">
              <ThemeSwitcher />
            </div>
            <div className="flex justify-center">
              <Image src="/ricktitle.png" width={900} height={200} alt="" />
            </div>
            <Search />
          </header>
          <main>
            <Characters />
          </main>
        </div>
      )}
    </>
  );
}
