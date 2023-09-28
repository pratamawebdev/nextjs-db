import axios from "axios";
import React from "react";

import Time from "./time";

const FetchTimeServer = ({ data }) => {
  console.log("data server component", data);
  return (
    <div>
      {data?.map((item, index) => (
        <Time data={item} key={index} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await res.data;
  return { props: { data } };
};

export default FetchTimeServer;
