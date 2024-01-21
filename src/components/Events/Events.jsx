import EventItem from "./components/EventItem/EventItem";

import eventsJSON from "../../data/events.json";
import { useNavigate } from "react-router-dom";

export default function Events({ searchTerm, events }) {
  const navigate = useNavigate();
  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchTerm)
      );
    }
    return eventsFiltered.map((eventItem) => {
      return (
        <EventItem
          key={`event-item-${eventItem.id}`}
          name={eventItem.name}
          info={eventItem.info}
          image={eventItem.images[0].url}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      );
    });
  };

  return (
    <div>
      <h1 className=" mb-8 font-bold">Eventos</h1>
      {renderEvents()}
    </div>
  );
}
