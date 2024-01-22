import { useQuery } from "@tanstack/react-query";
import React from "react";

const Bags: React.FC = () => {
  const getData = async () => {
    const res = await fetch("/bags.json");
    const data = await res.json();
    return data;
  };
  const { data, isPending } = useQuery({
    queryKey: ["bags"],
    queryFn: getData,
  });

   if (isPending) {
     return <span>Loading...</span>;
   }
  console.log(data)
  return <div>Bags {data?.length}</div>;
};

export default Bags;
