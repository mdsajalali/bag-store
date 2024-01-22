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
    <div>
      <img src={data?.img} alt="" />
      <p>{data?.price}</p>
      <p>{data?.desc}</p>
    </div>
  );
};

export default BagCard;
