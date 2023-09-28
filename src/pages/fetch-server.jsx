import axios from "axios";
import React from "react";

import FetchTimeServer from "@/components/client/fetch-time-server";
import Time from "@/components/client/time";

const FetchServer = ({ data }) => {
  return (
    <div>
      {data?.map((item, index) => (
        <Time data={item} key={index} />
      ))}
      <h1 className="text-2xl font-semibold">Ini component fetch server</h1>
      <FetchTimeServer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await res.data;
  return { props: { data } };
};

export default FetchServer;
