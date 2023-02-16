<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<template>
  <div class="d-flex  justify-content-center pt-5">
    <div class="swiper1">
      <swiper
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img src="./media/anuncios/tamaño1/bleu-de-chanel.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="./media/anuncios/tamaño1/bulgari-man-clive-owen-02.jpg"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>


  </div>
  <div class="d-flex justify-content-center">
    <div class="swiper3">
      <swiper
        :autoplay="{
          delay: 5500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img src="./media/anuncios/tamaño2/1366_2000.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="./media/anuncios/tamaño2/5c75433cbce40eb3d6dc282ba7704b19.jpg"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="./media/anuncios/tamaño2/scarlett_johnasson_the_rose_one_campaign.jpg"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.swiper1 {
  position: relative;
  width: 600px;
  height: 700px;
  overflow: hidden;
  z-index: 1;
  border-radius: 3%;
}

.swiper2 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  border-radius: 3%;
}

.swiper3 {
  position: relative;
  width: 1200px;
  height: 700px;
  overflow: hidden;
  z-index: 1;
  border-radius: 3%;
}

.swiper3 img,
.swiper2 img,
.swiper1 img {
  left: 50%;
  position: absolute;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 100%;
  border-radius: 3%;
}

.container2 {
  width: 50%;
  height: 50%;
}
/*     <swiper-slide><img src="./media/anuncios/tamaño1/lady-million_single-page.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="./media/anuncios/tamaño1/light-blue-dolce-gabbana.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="./media/anuncios/tamaño1/scarlett-johansson-dolce-gabbana-the-one.jpg" alt=""></swiper-slide> */
</style>
