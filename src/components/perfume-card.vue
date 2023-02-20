<template>
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card text-center h-100">
      <div class="card-body">
        <img :src="product.img" class="card-img-top" :alt="product.name" />
        <h4 class="card-title">{{ product.brand }}</h4>
        <p class="card-text">{{ product.name }}</p>
        <h6 class="card-subtitle mb-2 text-muted">
          Precio: {{ product.price }}
        </h6>
        <router-link
          :to="{ name: 'product', params: { id: parseInt(product.id) } }"
          class="btn btn-primary"
        >
          Ver más
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: contain;
}
</style>
