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

  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    fetch(`http://localhost:3000/productos/`)
      .then((res) => res.json())
      .then((data) => (this.productos = data))
      .catch((err) => console.log(err.message));
  },
  computed: {
    ordernarProductos() {
      return this.productos.sort((a, b) => b.sold - a.sold);
    },
  },
};
</script>

<template>
  <div
    class="topfragances container-fluid d-flex flex-column align-items-center"
    :index="0"
  >
    <div class="titulo p-5">
      <img src="./media/titulos/thebestfragances.png" class="w-100" alt="" />
    </div>

    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :slidesPerGroup="4"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper p-5"
    >
      <swiper-slide
        v-for="product in ordernarProductos.slice(0, 8)"
        :key="product.id"
      >
        <router-link
          :to="{ name: 'product', params: { id: parseInt(product.id) } }"
          class="carrouselrouter"
        >
          <div class="carta d-flex flex-column">
            <div class="imagen" style="">
              <img :src="product.img" class="imagen rounded-5" alt="..." />
            </div>
            <div class="card-body pt-3">
              <div class="info d-flex flex-column flex-wrap gap-0,5">
                <p class="parfum-brand fw-bold">{{ product.brand }}</p>
                <p class="parfum-title">{{ product.name }}</p>
              </div>

              <div class="precio">Desde {{ product.price }}€</div>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
@import url("../assets/main.css");

.carrouselrouter {
  text-decoration: none;
  color: #000;
}

.carrouselrouter:hover {
  text-decoration: none;
  color: #000;
}
</style>
