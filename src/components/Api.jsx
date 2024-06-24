import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./Api.css";

function Api() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setApiData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="results">
      {apiData.map((data, index) => (
        <div key={index} className="result-item">
          <h1>{data.title}</h1>
          <img className="image" src={data.url} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default Api;
