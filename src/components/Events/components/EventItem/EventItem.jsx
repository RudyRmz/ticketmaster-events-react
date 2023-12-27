export default function EventItem({ info, name, image, onEventClick, id }) {
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button
        onClick={() => {
          onEventClick(id);
        }}
      >
        Ver más
      </button>
    </div>
  );
}
