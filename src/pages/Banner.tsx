import bag_1 from "../assets/images/bags/bag-1.webp";
import bag_2 from "../assets/images/bags/bag-2.webp";
import bag_3 from "../assets/images/bags/bag-3.webp";
import bag_4 from "../assets/images/bags/bag-4.webp";
import bag_5 from "../assets/images/bags/bag-5.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Banner: React.FC = () => {
  const bags: string[] = [bag_1, bag_2, bag_3, bag_4, bag_5];
  return (
    <div className="flex items-center justify-center md:mt-[77px] mt-[73px]">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bags.map((bag, idx) => (
          <SwiperSlide>
            <img
              className="xl:w-[600px]  w-[400px] object-cover mx-auto"
              src={bag}
              alt={String(idx)}
            />
            <div className="flex items-center flex-col justify-center ">
              <h2 className="text-[18px] font-semibold">Top Branded</h2>
              <h1 className="text-2xl font-bold my-2">Best Bages 2024</h1>
              <button className="text-[14px]    uppercase text-white bg-[#F76B6A] hover:bg-[#d8111b] transition-all px-4 py-2 rounded-md">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
