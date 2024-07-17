/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../scss/index.scss";
import "./HomePage.scss";

import recette1 from "../../assets/images/rhum-illustration1.jpg";
import recette2 from "../../assets/images/rhum-illustration2.jpg";
import recette3 from "../../assets/images/rhum-illustration3.jpeg";
import recette4 from "../../assets/images/rhum-illustration4.jpg";
import recette5 from "../../assets/images/rhum-illustration5.jpg";

const imageFiles = [recette1, recette2, recette3, recette4, recette5];

function HomePage() {

  return (
    <main>
      <h1>
        Bienvenue sur notre site de découverte et de création de recettes folles
        de rhum dérangés
      </h1>
      <h2 id="galerie-photos">Nos Meilleures Recettes</h2>
      <Swiper
        spaceBetween={0}
        centeredSlides
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          draggable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation, A11y]}
        className="mySwiper"
      >
        {imageFiles.map((file) => (
          <SwiperSlide key={uuidv4()}>
            <img src={file} alt={`recette ${file}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default HomePage;
