import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#969696");
  const [copyied, setCopied] = useState("Copy");

  const handleColorChange = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
    setColor(hexColor);
  };

  const handleCopyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied("Copyied!");
    setTimeout(() => {
      setCopied("Copy");
    }, 1500);
  };

  return (
    <div
      className="w-10/12 mx-auto h-[100vh] bg- flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div>
        <p className="border border-black px-3 py-2 text-white">{color}</p>

        <button onClick={handleCopyColor}>{copyied}</button>
      </div>
      <button
        onClick={handleColorChange}
        className="text-white px-4 p-2 rounded-2xl bg-green-800"
      >
        Color Change
      </button>
    </div>
  );
};

export default App;
