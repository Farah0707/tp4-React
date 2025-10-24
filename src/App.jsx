/*exercice 1 */
/*
import React from "react";
import Time from "./Time";

function App() {
  return (
    <div>
      <h1>Timer</h1>
      <Time />
    </div>
  );
}

export default App;
*/

/*exercice 2 */
/*
import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
*/

/*exercice 3 */
import React from "react";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <h1>TP - Appel API avec useEffect</h1>
      <UserList />
    </div>
  );
}

export default App;
