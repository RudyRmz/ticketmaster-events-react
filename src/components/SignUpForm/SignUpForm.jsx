import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form
      action=""
      className=" flex flex-col gap-3 "
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <label htmlFor="">
        Name
        <input type="text" {...register("name", { required: true })} />
      </label>
      {errors.name && (
        <p className=" bg-red-500 p-3 rounded-md text-white font-bold">
          Por favor introduce un nombre
        </p>
      )}

      <label htmlFor="">
        Age
        <input type="text" {...register("age", { required: true })} />
      </label>
      {errors.age && (
        <p className=" bg-red-500 p-3 rounded-md text-white font-bold">
          Por favor introduce tu edad
        </p>
      )}

      <label htmlFor="">
        Address
        <input
          type="text"
          {...register("address", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </label>
      {errors.address && (
        <p className=" bg-red-500 p-3 rounded-md text-white font-bold">
          Por favor introduce un correo electronico correcto
        </p>
      )}

      <label htmlFor="">
        Zipcode
        <input type="text" {...register("zipcode", { required: true })} />
      </label>
      {errors.zipcode && (
        <p className=" bg-red-500 p-3 rounded-md text-white font-bold">
          Por favor introduce un codigo postal
        </p>
      )}

      <label htmlFor="">
        Phone
        <input type="text" {...register("phone", { required: true })} />
      </label>
      {errors.phone && (
        <p className=" bg-red-500 p-3 rounded-md text-white font-bold">
          Por favor introduce un telefono
        </p>
      )}
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
