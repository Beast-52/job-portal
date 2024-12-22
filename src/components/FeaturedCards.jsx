import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedSection = ({ featuredImg }) => {
  return (
    <section className="bg-gradient-to-r py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Companies
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
            1536: { slidesPerView: 10 },
          }}
          className="swiper-container "
        >
          {featuredImg.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-full "
            >
              <div className="group relative rounded-lg shadow-lg my-10 flex justify-center items-center">
                <div className="absolute scale-[0.85] -inset-0.5 bg-gradient-to-r rounded-xl from-purple-800 to-pink-900 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={img}
                  alt={`Company Logo ${index + 1}`}
                  className="  object-cover z-10 relative rounded-3xl p-4 brightness-[0.8] md:m-0 mx-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedSection;
