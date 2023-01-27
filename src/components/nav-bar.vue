<script>
import $ from 'jquery'

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
};

$(document).ready(function(){
    var $nav = $('.divbar');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});

</script>

<style>
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

.container-fluid {
  background-color: #0d0000;
}

input[type="text"] {
  /* background-color: grey !important;*/
}

.row {
    margin: 0px !important;
}
</style>

<template>
  <div class="divbar container-fluid text-white grid text-center row fixed-top ">
    <div class="d-flex align-items-center w-25">
      <img src="./logo/logo_joan.png" alt="" class="w-100 p-2" />
    </div>

    <form class="mb-3 col-6 pt-4 pb-2 m-1" role="search">
      <div class="input-group">
        <input
          type="text"
          class="form-control bg-dark"
          placeholder="Busca un perfume"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="3x" />
          </button>
        </div>
      </div>
    </form>

    <div class="col d-flex align-items-center justify-content-center border">
      <div>
        <font-awesome-icon icon="fa-solid fa-user fa-5x" size="3x" />
      </div>
    </div>

    <div class="col d-flex align-items-center justify-content-center border">
      <font-awesome-icon icon="a-solid fa-cart-shopping" size="3x" />
    </div>
  </div>
</template>

