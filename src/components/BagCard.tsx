import React from "react";

interface BagCardProps {
  data: {
    img: string;
    price: string;
    desc: string;
  };
}

const BagCard: React.FC<BagCardProps> = ({ data }) => {
  return (
    <div className="shadow-md rounded-md p-4 hover:translate-y-2 transition-all cursor-pointer w-[250px]">
      <img src={data?.img} alt="" />
      <div className="text-center">
        <p className="font-bold text-[18px] mb-2">{data?.desc}</p>
        <p>{data?.price}</p>
      </div>
    </div>
  );
};

export default BagCard;
