import { Link } from "react-router-dom";

import HeartFilled from "../../../../assets/hearth-filled.png";
import HeartUnfilled from "../../../../assets/hearth-unfilled.png";
import useLikedEvents from "../../../../hooks/useLikedEvents";

export default function EventItem({ info, name, image, onEventClick, id }) {
  const { isEventLiked, toggleEventLike } = useLikedEvents(id);
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
    //console.log("diste click al boton");
  };

  const handleHearthClick = () => {
    toggleEventLike();
  };

  return (
    <div className=" m-5">
      <div className=" relative">
        <img
          src={isEventLiked ? HeartFilled : HeartUnfilled}
          alt="Hearth button"
          className=" absolute w-7 top-3 left-3 cursor-pointer"
          onClick={handleHearthClick}
        />
        <img src={image} alt={name} className=" w-52 h-52 rounded-md" />
      </div>
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
