import { useRouteError } from "react-router-dom";

export default function Error404() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3 className=" font-bold text-2xl">{error.status} Oops!</h3>
      <p className=" text-xl">{error.data}</p>
    </div>
  );
}
