<script>
import $ from "jquery";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUser, faCartShopping, faMagnifyingGlass);

export default {
  name: "nav-bar",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      searchText: "",
      products: [],
    };
  },
  methods: {
    searchProducts() {
      console.log(this.product);
      console.log(this.searchText);
      console.log(
        this.product.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      const results = this.products.filter((product) => {
        return this.product.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
      console.log(results); // Aquí podrías mostrar los resultados en la vista
    },
    async fetchProducto() {
      await fetch(`http://localhost:3000/productos/`)
        .then((response) => response.json())
        .then((data) => (this.product = data))
        .catch((err) => console.log(err.message));
    },
  },
  async mounted() {
    this.fetchProducto();
  },
};

$(document).ready(function () {
  const d = document.getElementById("XD");
  // Add slideup & fadein animation to dropdown
  d.addEventListener("show.bs.dropdown", function (e) {
    var $dropdown = $(this).find(".dropdown-menu");
    var orig_margin_top = parseInt($dropdown.css("margin-top"));
    $dropdown
      .css({ "margin-top": orig_margin_top + 10 + "px", opacity: 0 })
      .animate(
        { "margin-top": orig_margin_top + "px", opacity: 1 },
        300,
        function () {
          $(this).css({ "margin-top": "" });
        }
      );
  });
});
</script>

<style>
.navbar {
  background-color: #000;
}

.form-control {
  background-color: rgb(45, 52, 61) !important;
  border-radius: 10px 0 0 10px !important;
}
button {
  background-color: rgb(45, 52, 61) !important;
  border-radius: 0 10px 10px 0 !important;
}
.form-control:focus {
  border-color: #ffffff !important;
  box-shadow: rgb(255, 255, 255) !important;
}

.dropdown-menu-dark {
  background-color: #000 !important;
}
</style>

<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid row">
      <div class="col-2 d-flex justify-content-center ms-4">
        <a
          class="XD navbar-brand nav-link"
          id="XD"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          ><img src="./logo/logo_joan.png" alt="logo" class="w-100"
        /></a>
        <div
          class="dropdown-menu dropdown-menu-dark"
          style="width: 30rem; height: 10rem"
        >
          <a class="dropdown-item" href="#"
            ><router-link class="link" to="/">Inicio</router-link></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="link" to="/productlist"
              >Lista de perfumes</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="link" to="/basket"
              >Cesta de la compra</router-link
            ></a
          >
        </div>
      </div>

      <div class="col-8 d-flex justify-content-center">
        <div class="input-group w-50">
          <input
            type="text"
            v-model="searchText"
            class="form-control bg-dark"
            placeholder="Busca un perfume"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              @click="searchProducts"
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                size="3x"
              />
            </button>
          </div>
        </div>
      </div>

      <div class="col d-flex justify-content-center">
        <a href="" class="navbar-brand"
          ><font-awesome-icon icon="fa-solid fa-user fa-5x" size="2x"
        /></a>
      </div>

      <div class="col d-flex justify-content-center">
        <a href="" class="navbar-brand">
          <router-link class="link" to="/basket">
            <font-awesome-icon icon="a-solid fa-cart-shopping" size="2x"
          /></router-link>
        </a>
      </div>
    </div>
  </nav>
</template>
