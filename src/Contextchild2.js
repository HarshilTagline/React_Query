import React, { useContext, useState } from "react";
import { ThemeManage } from "./Context";
function Contextchild2() {
  const [count, setCount] = useState(0);

  const use = useContext(ThemeManage);

  const handleCount = () => {
    setCount(count + 1);
  };
  //   const black = use.theme.foreground;
  console.log("child2 render");
  //   const styles = {
  //     color: "black"
  //   };
  return (
    <>
      <button
        style={{ backgroundColor: use.theme.background }}
        onClick={use.toggleTheme}
      >
        {/* Count{count} */}ON
      </button>
      <button
        style={{ backgroundColor: use.theme.foreground }}
        onClick={use.toggleTheme}
      >
        {/* Count{count} */}OFF
      </button>
      <button onClick={use.toggleTheme}>CLICK</button>
    </>
  );
}

export default Contextchild2;
