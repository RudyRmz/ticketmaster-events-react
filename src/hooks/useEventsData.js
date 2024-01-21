import eventsData from "../data/events.json";
import { useRef, useState, useEffect } from "react";

export default function useEventsData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=37wchGrCGX0FRh41utv4Ji8AgYWeGqZ3&countryCode=MX${
          params?.length ? params : ""
        }`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {}
  };

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://app.ticketmaster.com/discovery/v2/events.json?apikey=37wchGrCGX0FRh41utv4Ji8AgYWeGqZ3&countryCode=MX"
  //       );
  //       const data = await response.json();
  //       setData(data);
  //       //console.log(data);
  //       setIsLoading(false);
  //     } catch (error) {}
  //   };

  //   fetchEvents();

  //   //   setTimeout(() => {
  //   //     try {
  //   //       setData(eventsData);

  //   //       setIsLoading(false);
  //   //     } catch (error) {
  //   //       setIsError(error);
  //   //     }
  //   //   }, 3000);
  // });

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    isError,
    fetchEvents,
  };
}
