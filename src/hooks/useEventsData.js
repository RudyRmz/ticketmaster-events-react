import eventsData from "../data/events.json";
import { useState } from "react";

export default function useEventsData() {
  const [data] = useState(eventsData);
  const {
    _embedded: { events },
  } = data;

  return {
    events,
  };
}
