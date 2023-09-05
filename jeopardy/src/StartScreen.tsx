import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./store";

export default function StartScreen() {
  const { setPlayerName } = useStore((state) => state);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name && name.length >= 3) {
      setPlayerName(name);
      navigate("/game");
    }
  };
  return (
    <div className="self-center mt-4 flex flex-col gap-4">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="border px-4 border-gray-700 py-1"
        placeholder="Enter name"
        type="text"
      />
      <button
        onClick={handleSubmit}
        className="border px-1 py-0.5 self-center border-gray-700"
      >
        Submit
      </button>
    </div>
  );
}
