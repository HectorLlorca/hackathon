import React, { useCallback, useEffect, useState } from "react";
import Character from "./Character";
const API_BASE_URL = "https://rickandmortyapi.com/api";

export default function Characters() {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [page, isLoading]);

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
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);
  return (
    <div className="flex flex-col gap-3 ">
      <div className="grid grid-cols-auto-fill-100 gap-3 justify-center  ">
        {characters?.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <span className="loading loading-lg loading-ball"></span>
        </div>
      )}
    </div>
  );
}
