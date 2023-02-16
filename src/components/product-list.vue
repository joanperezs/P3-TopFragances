<template>
  <div class="selects d-flex gap-3">
    <select class="form-select select w-25" aria-label="Ordenar por">
      <option selected>Ordenar por</option>
      <option value="1">Precios más altos</option>
      <option value="2">Precios más bajos</option>
      <option value="3">Relevancia</option>
    </select>

    <select class="form-select w-25" aria-label="Ordenar por">
      <option selected>Marca</option>
      <option value="1">Chanel</option>
      <option value="2">Dior</option>
      <option value="3">Giorgio Armani</option>
      <option value="3">Ralph Lauren</option>
    </select>

    
  </div>

  <div class="d-flex flex-wrap justify-content-center p-4">
    <div
      v-for="product in productos"
      :key="product.id"
      class="carta d-flex flex-column p-4"
    >
      <div class="imagendiv rounded-5" style="">
        <img :src="product.img" class="imagen rounded-3" alt="..." />
      </div>
      <div class="card-body pt-3">
        <div
          class="info d-flex flex-column justify-content-center align-items-center"
        >
          <p class="parfum-brand fw-bold">{{ product.brand }}</p>
          <p class="parfum-title">{{ product.name }}</p>
          <p class="precio">Desde {{ product.price }}€</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
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
};
</script>
