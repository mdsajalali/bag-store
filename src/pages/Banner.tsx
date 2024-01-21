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

const Banner = () => {
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
            <img className="xl:w-[700px]  w-[500px] object-cover mx-auto" src={bag} alt={String(idx)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
