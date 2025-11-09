export const initialState = {
  color: "#257e4b",
  colorType: "HEX",
  copied: "Copy",
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      if (state.colorType === "HEX") {
        const randomNumber = Math.floor(Math.random() * 16777215);
        const hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
        return { ...state, color: hexColor };
      } else {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return { ...state, color: `rgb(${r}, ${g}, ${b})` };
      }

    case "CHANGE_COLOR_TYPE": {
      const newType = action.payload;

      // HEX → RGB
      if (newType === "RGB" && state.color.startsWith("#")) {
        const hex = state.color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { ...state, colorType: newType, color: `rgb(${r},${g},${b})` };
      }

      // RGB → HEX
      if (newType === "HEX" && state.color.startsWith("rgb")) {
        const [r, g, b] = state.color.match(/\d+/g).map(Number);
        const toHex = (v) => v.toString(16).padStart(2, "0");
        const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        return { ...state, colorType: newType, color: hex };
      }

      return { ...state, colorType: newType };
    }

    case "RESET_COLOR":
      return { ...state, color: "#257e4b" };

    case "COPY":
      return { ...state, copied: "Copied!" };

    case "COPY_RESET":
      return { ...state, copied: "Copy" };

    default:
      return state;
  }
};

export default colorReducer;
