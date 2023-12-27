import EventItem from "./components/EventItem/EventItem";

import data from "../../data/events.json";

console.log(data);

const {
  _embedded: { events },
} = data;

export default function Events() {
  const eventsComponent = events.map((eventItem) => {
    const handleEventItemClick = (id) => {
      console.log("Evento clickeado", id);
    };

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

  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
}
