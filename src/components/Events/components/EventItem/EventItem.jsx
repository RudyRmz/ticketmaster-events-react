import { Link } from "react-router-dom";

export default function EventItem({ info, name, image, onEventClick, id }) {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
    //console.log("diste click al boton");
  };
  return (
    <div className=" flex m-5">
      <img src={image} alt={name} width={200} height={200} />
      <div className=" flex flex-col items-start ml-4">
        <h4 className=" font-bold text-xl ">{name}</h4>
        <p className=" text-left line-clamp-5">{info}</p>
        <button className=" mt-2" onClick={handleSeeMoreClick}>
          {/* <Link to={`/detail/${id}`}>Ver más</Link> */}
          Ver más
        </button>
      </div>
    </div>
  );
}
