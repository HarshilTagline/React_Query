import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Home() {
  console.log("home rendered");

  const location = useLocation();
  console.log(location)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  const history = useHistory();
  const handleClick = () => {
    history.push("/contact");
    console.log(history);
  };

  return (
    <>
      <div>This is Home Page.</div>
      <div style={{ marginTop: "150vh" }}>
        <button type="button" onClick={handleClick}>
          Go Contact
        </button>
      </div>
    </>
  );
}
