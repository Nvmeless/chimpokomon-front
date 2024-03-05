import React, { useState, useEffect } from "react";
import axios from "axios";
const HttpExample = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://httpbin.org/get",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setUrl(response.data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{url}</div>;
};

export default HttpExample;
