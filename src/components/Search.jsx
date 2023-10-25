import { useState } from "react";

const API_BASE_URL_BY_NAME = "https://rickandmortyapi.com/api/character/?name=";

export default function Search({ setSearch }) {
  // const [query, setQuery] = useState(null);
  const [time, setTime] = useState(null);

  const onChange = async (e) => {
    if (!e.target.value) {
      setSearch(null);
      return;
    }
    if (time) clearTimeout(time);
    const newTypingTimeout = setTimeout(() => {
      fetchData(e.target.value);
    }, 500);
    setTime(newTypingTimeout);
  };

  const fetchData = async (searchText) => {
    if (!searchText) return;
    const res = await fetch(`${API_BASE_URL_BY_NAME}${searchText}`);
    const data = await res.json();
    if (data.error) {
      setSearch({ results: [] });
      return;
    }
    setSearch(data);
  };

  return (
    <div className="form-control z-50">
      <input
        type="text"
        onChange={onChange}
        placeholder="Search"
        className="input input-bordered w-auto border-[#7bae42]"
      />
    </div>
  );
}
