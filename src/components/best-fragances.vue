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
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>

    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div> 
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>        
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
    <swiper-slide>
        <div class="carta d-flex flex-column">
            <div class="imagen border border-dark border-5 rounded-5" style="width: 18rem;">
            <img src="./media/perfumes/bleudechanel.webp" class="" alt="...">
        </div>
        <div class="card-body pt-3">
            <div class="info d-flex flex-column flex-wrap gap-0,5 ">
                <p class="parfum-brand fs-1 fw-bold">CHANEL</p>
                <p class="parfum-title fs-4">Bleu de chanel</p>
            </div>

            <div class="precio fs-7">
                Desde 68,20€
            </div>
        </div>
        </div>  
    </swiper-slide>
  </swiper>
</div>
</template>

<style>
@import url("./font/stylesheet.css");

.titulo{
    margin-top: -5%;
}
.topfragances{
    background-color: #a69586 !important;
}

.parfum-brand{
    color:#000
}

.parfum-title{
    color: #42210b;
    margin-top: -10%
}

.imagen{
    background-color: #fff;
}

.compra{
    color: #FF931E
}

.card-body{
    font-family: 'dutch801_xbd_btextra_bold';
    text-size-adjust: z;
}



#best-fragances { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}



.swiper {
  width: 90%;
  height: 100%;
  margin-top: -13%
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev {
    color: #000; 
}

.swiper-button-next {
    color: #000; 
}



</style>