import Navbar from "../../components/Navbar";
import Events from "../../components/Events/Events";
import { useState, useRef, useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
import { clsx } from "clsx";
import useEventsResults from "../../state/events-results";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error, fetchEvents } = useEventsResults();
  //console.log(data);
  const events = data?._embedded?.events || [];
  const page = data?.page || {};
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  //console.log(searchTerm, 10);

  const handlePageClick = ({ selected }) => {
    console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <p>Cargando información...</p>;
    }
    if (error) {
      return <p>Ha ocurrido un error</p>;
    }

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          nextClassName="text-3xl"
          previousClassName="text-3xl"
          activeClassName=" bg-white text-black rounded-full p-1"
          disabledClassName="cursor-not-allowed"
          className=" flex justify-center items-center gap-3 text-xl font-bold text-white "
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      {renderEvents()}
    </>
  );
}
