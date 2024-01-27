import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function Detail() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_TICKETMASTER_API_KEY
          }`
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
  // console.log(dateTimeevent);
  // console.log(eventData);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Cargando evento...</div>;
  }

  if (Object.keys(error) > 0) {
    return <div>Ha habido un error</div>;
  }
  return (
    <div className="">
      <div className=" flex flex-col items-start">
        <img
          className=" w-full h-[70vh] object-cover"
          src={eventData.images?.[0].url}
          alt={eventData.name}
        />
        <h4 className=" my-3 text-3xl">{eventData.name}</h4>
        <p className=" text-left my-1">{eventData.info}</p>
        {eventData.dates?.start?.dateTime ? (
          <p className=" my-1">
            {format(
              new Date(eventData.dates?.start?.dateTime),
              "d LLLL yyyy H:mm",
              { locale: es }
            )}{" "}
            hrs
          </p>
        ) : null}
      </div>
      <div className=" flex flex-col items-start mt-3">
        <h6 className=" my-1 text-lg">Mapa del evento</h6>
        <img src={eventData?.seatmap?.staticUrl} alt="Seatmap event" />
        <p className=" text-left my-2">{eventData?.pleaseNote}</p>
        <p className=" my-1">
          Rango de precios {eventData.priceRanges?.[0].min}-
          {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData?.url}>Ir por tus boletos</a>
    </div>
  );
}
