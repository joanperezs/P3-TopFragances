<script>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faCartShopping);

export default {
  name: "Product",
  components: {
    FontAwesomeIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: [],
      properties: [],
    };
  },
  methods: {
    async añadirCesta(productId) {
      try {
        const response = await fetch("http://localhost:3000/basket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: productId }),
        });

        if (!response.ok) {
          throw new Error("Failed to add item to basket");
        }

      } catch (error) {
        console.error(error);
      }
    },

    async fetchProducto() {
      await fetch(`http://localhost:3000/productos/${parseInt(this.id)}`)
        .then((response) => response.json())
        .then((data) => (this.product = data))
        .catch((err) => console.log(err.message));
    },

    async fetchPropiedades() {
      await fetch(`http://localhost:3000/productos/${parseInt(this.id)}`)
        .then((response) => response.json())
        .then((data) => (this.properties = data.properties))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchProducto();
    this.fetchPropiedades();
  },
};
</script>

<template>
  <div v-if="product" class="producto row mx-auto">
    <div class="fotodiv col">
      <img
        :src="product.img"
        alt=""
        class="align-self-center foto border-5 rounded-5"
      />
    </div>

    <div class="container2 col">
      <div class="marcaproduct">
        {{ product.brand }}
      </div>
      <div class="tituloproduct">
        {{ product.name }}
      </div>

      <div class="categorias d-flex flex-row justify-content-center">
        <span class="badgeproduct badge rounded-pill text-bg-primary mx-2">{{
          properties[0]
        }}</span>

        <span class="badgeproduct badge rounded-pill text-bg-secondary mx-2">{{
          properties[1]
        }}</span>

        <span class="badgeproduct badge rounded-pill text-bg-success mx-2">{{
          properties[2]
        }}</span>
      </div>
      <hr />
      <div
        class="comprar d-flex flex-row justify-content-around align-items-center"
      >
        <div class="precioproduct">{{ String(product.price) }}€</div>
        <button
          @click="añadirCesta(product.id)"
          class="botoncomprarproduct badge text-bg-warning"
        >
          <font-awesome-icon icon="fa-cart-shopping" size="5x" />
        </button>
      </div>
    </div>

    <hr />

    <div class="descripcionproduct w-100 align-self-center">
      {{ product.description }}
    </div>
  </div>
</template>

<style>
@import url("./font/stylesheet.css");
@import url("../assets/main.css");
</style>
