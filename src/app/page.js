"use client";
import Characters from "@/components/Characters";
import Search from "@/components/Search";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export default function Home() {
  const [themeLoading, setThemeLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`${API_BASE_URL}/character`);
      const data = await response.json();
      setCharacters({ ...data });
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setThemeLoading(false);
    }, 0);
  }, []);
  return (
    <>
      {!themeLoading && (
        <div className="flex flex-col gap-12  ">
          <header className="relative flex flex-col gap-6  ">
            <div className="absolute bg-rick-title bg-[bottom_-0rem_right_-1.5rem] md:bg-[bottom_-1.4rem_right_-3rem] md:bg-[length:250px_250px] bg-[length:150px_150px] bg-no-repeat bg-ful  min-w-full min-h-full "></div>
            <div className=" flex justify-end w-full place-items-center p-2">
              <ThemeSwitcher />
            </div>
            <div className="flex justify-center">
              <Image src="/ricktitle.png" width={1300} height={1220} alt="" />
            </div>
            <Search setSearch={setSearch} />
          </header>
          <main className="p-1 sm:p-2 ">
            {search && (
              <Characters
                search={search}
                characters={search}
                setCharacters={setCharacters}
              />
            )}
            {!search && (
              <Characters
                characters={characters}
                setCharacters={setCharacters}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                page={page}
                setPage={setPage}
                search={search}
              />
            )}
          </main>
        </div>
      )}
    </>
  );
}
