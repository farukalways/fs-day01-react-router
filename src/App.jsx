import { useReducer } from "react";
import colorReducer, { initialState } from "./reducers/colorReducer";

const App = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  const handleColorChange = () => {
    dispatch({ type: "CHANGE_COLOR" });
  };

  const handleColorTypeChange = (e) => {
    dispatch({ type: "CHANGE_COLOR_TYPE", payload: e.target.value });
  };

  const handleColorReset = () => {
    dispatch({ type: "RESET_COLOR" });
  };

  const handleCopyColor = () => {
    navigator.clipboard.writeText(state.color);
    dispatch({ type: "COPY" });

    setTimeout(() => {
      dispatch({ type: "COPY_RESET" });
    }, 500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center transition-all duration-300"
      style={{ backgroundColor: state.color }}
    >
      <div className="w-80 bg-white/10 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Select Box */}
        <select
          className="w-full mb-6 py-3 px-5 rounded-xl bg-black/40 text-white font-semibold outline-none border border-white/30"
          value={state.colorType}
          onChange={handleColorTypeChange}
        >
          <option className="text-black" value="HEX">
            HEX
          </option>
          <option className="text-black" value="RGB">
            RGB
          </option>
        </select>

        {/* Color + Copy */}
        <div className="flex items-center justify-between mb-6">
          <p className="bg-black/50 text-white px-4 py-2 rounded-xl text-sm font-semibold border border-white/30">
            {state.color}
          </p>

          <button
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition"
            onClick={handleCopyColor}
          >
            {state.copied}
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 justify-center">
          <button
            onClick={handleColorChange}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition"
          >
            Change
          </button>

          <button
            onClick={handleColorReset}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
