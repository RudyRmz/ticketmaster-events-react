import EventItem from "./components/EventItem/EventItem";
import useEventsData from "../../hooks/useEventsData";
import eventsJSON from "../../data/events.json";
import { useNavigate } from "react-router-dom";

//console.log(data);

//const [data] = useState(data);

export default function Events({ searchTerm }) {
  const { events } = useEventsData();
  const navigate = useNavigate();
  // const {
  //   _embedded: { events },
  // } = data;
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
