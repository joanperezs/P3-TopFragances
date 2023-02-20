<template>
  <div class="basketcontainer row d-flex flex-row justify-content-around">
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
        @click="removeFromBasket(product.baskedId)"
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
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async removeFromBasket(id) {
      try {
        const response = await fetch(`http://localhost:3000/basket/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
@import url("./font/stylesheet.css");
@import url("../assets/main.css");
</style>
