import React, { useReducer } from "react";

const initialState = {
  theme: "light",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const { theme } = state;

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{`Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
