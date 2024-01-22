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
    return (
      <div className="flex justify-center items-center my-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#F76B6A] border-solid"></div>
      </div>
    );
  }

  // Check if data is available before rendering
  if (!data) {
    return <p className="text-center my-10">No data available!</p>;
  }

  return (
    <>
      <h1 className="mb-5 mt-20 text-2xl font-bold text-white px-4 py-1 rounded-sm inline-block bg-[#F76B6A]">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-20 gap-10 mt-5 place-items-center">
        {data.map((bag) => (
          <BagCard key={bag.id} data={bag} />
        ))}
      </div>
    </>
  );
};

export default Bags;
