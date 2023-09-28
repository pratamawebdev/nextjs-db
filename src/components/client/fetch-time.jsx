import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const FetchTime = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  if (isLoading) return <p>Loading ...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <main>
      {data && data?.map((item, index) => <p key={index}> {item.username}</p>)}
    </main>
  );
};

export default FetchTime;
