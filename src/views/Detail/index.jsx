import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=37wchGrCGX0FRh41utv4Ji8AgYWeGqZ3`
        );
        const data = await response.json();
        //console.log(data);
        setEventData(data);
        setIsLoading(false);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, []);
  //console.log(eventData);
  return <div>Detail</div>;
}
