import React, { useState } from "react";
import Contextchild1 from "./Contextchild1";

// const name={first:"john",last:"marry"}
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeManage = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

function Context() {
  const [theme, settheme] = useState(themes.dark);

  const toggleTheme = () => {
    settheme(theme===themes.dark ? themes.light : themes.dark);
    console.log("clicked");
  };

  return (
    <>
      <ThemeManage.Provider value={{ theme , toggleTheme }}>
        <Contextchild1 />
      </ThemeManage.Provider>
    </>
  );
}
export default Context;
export { ThemeManage };
