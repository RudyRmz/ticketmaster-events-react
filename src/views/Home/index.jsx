import Navbar from "../../components/Navbar";
import Events from "../../components/Events/Events";
import { useState, useRef } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };
  //console.log(searchTerm, 10);
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
      {/* <SignUpForm /> */}
    </>
  );
}
