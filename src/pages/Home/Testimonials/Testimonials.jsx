import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  });
  return (
    <section>
      <SectionTitle
        heading="testimonials"
        subHeading="What Our Clients say"
      ></SectionTitle>
      <div className="my-24">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className=" flex flex-col items-center mx-20">
                <Rating style={{ maxWidth: 180 }} value={reviews.rating} readOnly />
                <p>{reviews.details}</p>
                <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
