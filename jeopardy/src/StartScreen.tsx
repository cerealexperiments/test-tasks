import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleClick = () => {
    if (name && name.length > 3) {
      navigate("/game");
      return;
    }
    console.log("invalid name");
  };
  return (
    <div className="self-center mt-4 flex flex-col gap-4">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="border border-gray-700 py-1"
        placeholder="Enter name"
        type="text"
      />
      <button
        onClick={handleClick}
        className="border px-1 py-0.5 self-center border-gray-700"
      >
        Submit
      </button>
    </div>
  );
}
