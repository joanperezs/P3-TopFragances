<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};

</script>

<template>
    <div class="topfragances container-fluid d-flex flex-column">
    <div class="titulo">
        <img src="./media/titulos/thebestfragances.png" class= "w-100" alt="">
    </div>

    <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>

    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div> 
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>        
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="">
            <img src="./media/perfumes/bleudechanel.webp" class="imagen rounded-5" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fw-bold">CHANEL</p>
                <p class="parfum-title">Bleu de chanel</p>
            </div>

            <div class="precio">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
  </swiper>
</div>
</template>

<style>

@import url("../assets/main.css");



</style>