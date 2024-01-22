import React from "react";
import { useQuery } from "@tanstack/react-query";
import BagCard from "../components/BagCard";

// Define the type for each bag item
interface Bag {
  id: number;
  img: string;
  price: string;
  desc: string;
}

const Bags: React.FC = () => {
  // Define the type for the API response
  const getData = async () => {
    const res = await fetch("/bags.json");
    const data = await res.json();
    return data;
  };

  // Fetch data using useQuery
  const { data, isLoading } = useQuery<Bag[]>({
    queryKey: ["bags"],
    queryFn: getData,
  });

  // Display loading state while fetching data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if data is available before rendering
  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.map((bag) => (
        <BagCard key={bag.id} data={bag} />
      ))}
    </div>
  );
};

export default Bags;
