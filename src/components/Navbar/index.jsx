import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleInputChangue = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  console.log(search);

  return (
    <div className=" mb-4 w-ful flex items-center justify-between">
      <p className=" text-2xl font-bold">Mi boletera</p>

      <input
        className=" text-base py-2 px-3 rounded-md w-52"
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChangue}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
