const API_BASE_URL_BY_NAME = "https://rickandmortyapi.com/api/character/?name=";

export default function Search({ setSearch }) {
  const onChange = async (e) => {
    if (!e.target.value) {
      setSearch(null);
      return;
    }
    const res = await fetch(`${API_BASE_URL_BY_NAME}${e.target.value}`);
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
