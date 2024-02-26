import { useState } from "react";

const LIKED_EVENTS_STORAGE_KEY = "likedEvents";

const checkIsEventLiked = (eventId) => {
  const likedEvents =
    JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
  console.log(likedEvents);

  return likedEvents.includes(eventId);
};

export default function useLikedEvents(eventId) {
  const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId));

  const toggleEventLike = () => {
    const likedEvents =
      JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || [];
    const eventIndex = likedEvents.indexOf(eventId);

    if (eventIndex !== -1) {
      likedEvents.splice(eventIndex, 1);
      setIsEventLiked(false);
    } else {
      likedEvents.push(eventId);
      setIsEventLiked(true);
    }

    localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
  };

  return {
    isEventLiked,
    toggleEventLike,
  };
}
