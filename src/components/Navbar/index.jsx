import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleInputChangue = (evt) => {
    setSearch(evt.target.value);
  };

  console.log(search);

  return (
    <div>
      <p>Mi boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChangue}
        value={search}
      />
    </div>
  );
};

export default Navbar;
