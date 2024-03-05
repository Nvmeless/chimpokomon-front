import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);
  const [tata, setTata] = useState("titi");
  useEffect(() => {
    let clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Intervl cleared");
      clearInterval(clock);
    };
  }, []);

  useEffect(() => {
    console.log("UseEffect Called");
  }, [tata]);

  
  const toto = (e) => {
    console.log("function called");

    setTata("tata");

    if (e.target.value == "tonton") {
      setTata("tonton");
    }
  };
  return <input placeholder={time} onChange={toto}></input>;
};

export default Clock;
