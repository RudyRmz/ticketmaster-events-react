import EventItem from "./components/EventItem/EventItem";
import { useState } from "react";
import eventsJSON from "../../data/events.json";

//console.log(data);

//const [data] = useState(data);

export default function Events({ searchTerm }) {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;
  const handleEventItemClick = (id) => {
    console.log("Evento clickeado", id);
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
      Eventos
      {renderEvents()}
    </div>
  );
}
