<script>
import PerfumeCard from "./perfume-card.vue";
export default {
  data() {
    return {
      productos: [],
      perfumesXPag: 8,
      pagina: 1,
      tieneMasPerfumes: true,
    };
  },

  methods: {
    fetchProductos(pagina) {
      fetch(`http://localhost:3000/productos?_page=${pagina}&_limit=8`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            this.tieneMasPerfumes = false;
          } else {
            this.productos = this.productos.concat(data);
          }
        });
    },

    cargarMas() {
      this.pagina += 1;
      console.log(this.pagina);
      this.fetchProductos(this.pagina);
      console.log(this.fetchProductos(this.pagina));
    },
  },
  mounted() {
    this.fetchProductos(this.pagina);
  },
  components: { PerfumeCard },
};
</script>

<template>
  <div class="productlist container-fluid">
    <div class="container">
      <div class="row row-gap-3">
        <PerfumeCard
          v-for="(product, index) in productos"
          :key="index"
          :product="product"
          class="col-md-3"
        ></PerfumeCard>
      </div>
      <button
        v-if="tieneMasPerfumes"
        @click="cargarMas"
        class="btn btn-primary"
      >
        Cargar más
      </button>
    </div>
  </div>
</template>
