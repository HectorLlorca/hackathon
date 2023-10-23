import React, { useState } from "react";

export default function Search() {
  const [] = useState("");
  const onChange = (e) => {
    console.log(e.target.value);
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
