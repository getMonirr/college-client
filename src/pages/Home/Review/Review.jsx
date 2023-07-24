// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SingleReview from "../../../components/Review/SingleReview";
import ColContainer from "../../../components/shared/ColContainer/ColContainer";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

const Review = () => {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/reviews`)
        .then((res) => res.data),
  });

  console.log(`${import.meta.env.VITE_API_URL}/reviews`);

  return (
    <>
      <SectionTitle>Review</SectionTitle>
      <ColContainer>
        {reviews && Array.isArray(reviews) && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <SingleReview review={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ColContainer>
    </>
  );
};

export default Review;
