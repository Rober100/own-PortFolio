import { Data } from "./Data";
import image1 from "../../assets/testimonial1.png";
import image2 from "../../assets/testimonial2.png";
import image3 from "../../assets/testimonial3.png";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";



type ImageMap = {
  [key: number]: string;
};

const Testimonial = () => {
  const images: ImageMap = {
    1: image1,
    2: image2,
    3: image3,
  };
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Mi clientes dicen</h2>
      <span className="section__subtitle">Testimonios</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map((testimonial) => {
          const img = images[testimonial.id];
          return (
            <SwiperSlide className="testimonial__card" key={testimonial.id}>
              <img
                src={img}
                alt={testimonial.title}
                className="testimonial__img"
              />

              <h3 className="testimonial__name">{testimonial.title}</h3>
              <p className="testimonial__description">
                {testimonial.description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
