import React, { useCallback, useEffect, useState } from "react";
import Character from "./Character";
const API_BASE_URL = "https://rickandmortyapi.com/api";

export default function Characters({
  characters,
  isLoading,
  setIsLoading,
  setCharacters,
  page,
  setPage,
  search,
}) {
  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(async () => {
      const res = await fetch(`${API_BASE_URL}/character/?page=${page + 1}`);
      const data = await res.json();
      setCharacters((prevCharacters) => ({
        ...data,
        results: [...prevCharacters.results, ...data.results],
      }));
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000);
  }, [page, isLoading, setCharacters, setIsLoading, setPage]);

  useEffect(() => {
    if (isLoading) return;
    if (search) return;
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [fetchData, search, isLoading]);
  return (
    <div className="flex flex-col gap-3 ">
      {!characters?.results[0] && (
        <h1 className="text-center w-full">No results found</h1>
      )}
      <div className="grid grid-cols-auto-fill-100 gap-3 justify-center  ">
        {characters?.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      {isLoading && (
        <div className="flex flex-col justify-center items-center py-4">
          <span className="loading loading-lg loading-ball"></span>
          <span className="w-[40px] border border-primary "></span>
        </div>
      )}
      <div className="h-[100px]"></div>
    </div>
  );
}
