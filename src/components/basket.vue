<script>
import productBasket from "./product-basket.vue";

export default {
  data() {
    return {
      basket: [],
      productos: [],
      loading: true,
      preciototal: Number,
    };
  },

  methods: {
    async getOneProduct(id) {
      try {
        const res = await fetch(`http://localhost:3000/productos/${id}`);
        const data = await res.json();

        const product = {
          id: data.id,
          brand: data.brand,
          name: data.name,
          price: data.price,
          img: data.img,
          basketId: this.basket.id,
        };

        return product;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllShoppingBasket() {
      await fetch(`http://localhost:3000/basket/`)
        .then((response) => response.json())
        .then((data) => (this.basket = data))
        .catch((err) => console.log(err.message));
    },
    async removeFromBasket(productId) {
      try {
        const basketId = await this.getBasketIdByProductId(productId);
        const response = await fetch(
          `http://localhost:3000/basket/${basketId}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBasketIdByProductId(productId) {
      try {
        const response = await fetch(`http://localhost:3000/basket`);
        const data = await response.json();
        const basketItem = data.find((item) => item.productId === productId);
        if (basketItem) {
          return parseInt(basketItem.id);
        } else {
          console.log(
            `No se ha encontrado ningun item en la cesta con ${productId}`
          );
          return null;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  async mounted() {
    await this.getAllShoppingBasket();
    const promises = this.basket.map((item) =>
      this.getOneProduct(item.productId)
    );
    const products = await Promise.all(promises);
    this.productos = products;
    this.preciototal = 0;

    for (let i = 0; i < this.productos.length; i++) {
      this.preciototal += this.productos[i].price;
    }
    this.preciototal = this.preciototal.toFixed(2);
  },

  components: { productBasket },
};
</script>

<template>
  <div class="basket mx-auto">
    <h1 class="baskettitulo pb-5">CESTA DE LA COMPRA</h1>

    <div class="basketinfo row">
      <div v-if="productos.length" class="basketproductlist col-9">
        <div
          v-for="(product, index) in productos"
          :key="index"
          :product="product"
        >
          <div
            class="basketcontainer row d-flex flex-row justify-content-around"
          >
            <div class="basketproductimg col-7">
              <img
                :src="product.img"
                class="basketimg border rounded-3"
                :alt="product.name"
              />
            </div>

            <div class="basketproducttext col">
              <div class="basketbrand">{{ product.brand }}</div>
              <div class="basketname">{{ product.name }}</div>
            </div>

            <div class="basketproductprice col">{{ product.price }}€</div>

            <div class="basketproductbutton col">
              <button
                @click="removeFromBasket(product.id)"
                class="btn btn-outline-danger"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>Tu cesta está vacía</p>
      </div>
      <div class="checkout col">
        <div class="totalcheckout">TOTAL</div>
        <div class="preciototal">{{ preciototal }}€</div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("./font/stylesheet.css");
@import url("../assets/main.css");
</style>
