import React, { useState, useEffect, useRef } from "react";

const initialObj = {
  FirstName: "",
  LastName: "",
  Language: "",
  Gender: "",
  Email: "",
  Desc: "",
}

export default function Nameform() {
  const firstRender = useRef(true);
  // const [FirstName, setFName] = useState("");
  // const [LastName, setLName] = useState("");
  // const [Language, setLang] = useState("");
  const [user, setuser] = useState({...initialObj});
  const [error, setError] = useState("");
  const [Disable, setDisable] = useState(true);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    // console.log({ ...user });
    // console.log({ [e.target.name]: e.target.value });
    // if (e.target.name === "FirstName") {
    //   setFName(e.target.value);
    // } else if (e.target.name === "LastName") {
    //   setLName(e.target.value);
    // } else setLang(e.target.value);user.
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisable(Validation);
  }, [{...initialObj}]);

  const Validation = () => {
    if (user.FirstName === "") {
      setError("Invalid firstname");
      return true;
    } else if (user.LastName === "") {
      setError("Invalid lastname");
      return true;
    } else if (user.Language === "") {
      setError("Select language");
      return true;
    } else if (user.Gender === "") {
      setError("Select gender");
      return true;
    } else if (user.Email === "") {
      setError("Enter email address");
      return true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.Email)) {
      console.log(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.Email)
      );
      setError("Enter valid email address");
      return true;
    } else if (user.Desc === "") {
      setError("Enter description");
      return true;
    }else if ((user.Desc.split(" ")).length<20) {
      setError("Enter minimum 20 word");
      return true;
    } else setError(null);
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData",JSON.stringify(user))
    console.log(JSON.parse(localStorage.getItem("formData")));
    alert("data submitted...");
  };

  // const data =JSON.parse(localStorage.getItem("formData"))

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              First Name:
              <input
                type="text"
                value={user.FirstName}
                name="FirstName"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Last Name:
              <input
                type="text"
                value={user.LastName}
                name="LastName"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Language:
              <select
                type="text"
                value={user.Language}
                name="Language"
                onChange={handleChange}
              >
                <option value="">-select-</option>
                <option value="javascript">javascript</option>
                <option value="php">php</option>
                <option value="java">java</option>
                <option value="python">python</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              <div onChange={handleChange}>
                <input type="radio" value="Male" name="Gender" />
                Male
                <input type="radio" value="Female" name="Gender" />
                Female
              </div>
            </label>
          </p>
          <p>
            <label>
              Email:
              <input
                type="text"
                name="Email"
                value={user.Email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Description:
              <input
                type="textarea"
                name="Desc"
                value={user.Desc}
                onChange={handleChange}
              />
            </label>
          </p>
          {error && <b>{error}</b>}
          <p>
            <input type="submit" disabled={Disable} value="submit" />
          </p>
        </form>
      </center>
    </div>
  );
}
