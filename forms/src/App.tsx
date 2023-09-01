import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  text: string;
  password: string;
  select: string;
  checkbox: string;
  radio: string;
};

function App() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto my-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className=""
          type="text"
          placeholder="name"
          {...register("name", { required: true, minLength: 3 })}
        />
        <input
          className=""
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          className=""
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            pattern: new RegExp("^(?=.*[A-Z])(?=.*[-+_!@#$%^&*., ?]).+$"),
          })}
        />
        <textarea
          placeholder="text"
          {...register("text", { required: true, maxLength: 200 })}
        />
        {formState.errors.password && <span>Invalid password</span>}
        <select {...register("select", { required: true })}>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <div className="flex gap-4 items-center">
          <input
            {...register("checkbox", { required: true })}
            type="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox">checkbox field</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="radio-1"
            {...register("radio", { required: true })}
            type="radio"
            value="Yes"
          />
          <label htmlFor="radio-1">Yes</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            id="radio-2"
            {...register("radio", { required: true })}
            type="radio"
            value="No"
          />
          <label htmlFor="radio-2">No</label>
        </div>
        <input className="border py-1 border-gray-800" type="submit"/>
      </form>
    </div>
  );
}

export default App;
