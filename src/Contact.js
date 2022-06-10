import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Contact() {
  console.log("contact rendered");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
    console.log(history);
  };
  const handleClick2 = () => {
    history.replace("./about/2")
  }
  return (
    <div style={{ marginTop: "150vh" }}>
      This is Contact page.
      <button type="button" onClick={handleClick}>
        Go Home
      </button>
      <button type="button" onClick={handleClick2}>
        Go About2
      </button>
    </div>
  );
}
