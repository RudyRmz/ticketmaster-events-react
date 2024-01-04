export default function EventItem({ info, name, image, onEventClick, id }) {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
    //console.log("diste click al boton");
  };
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  );
}
