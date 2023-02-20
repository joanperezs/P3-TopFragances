<script>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faTwitter, faInstagram, faLinkedin, faYoutube);

export default {
  name: "footer",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<template>
  <footer class="">
    <div
      class="hola container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-dark"
    >
      <p class="icono col-md-4 mb-0">Copyright 2023 topfragances</p>

      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img src="./logo/logo-2.png" alt="" class="logo2" />
      </a>

      <ul class="nav col-md-3 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="icono" href="#"
            ><font-awesome-icon icon="fa-brands fa-twitter" size="3x"
          /></a>
        </li>
        <li class="ms-3">
          <a class="icono" href="#"
            ><font-awesome-icon icon="fa-brands fa-instagram" size="3x"
          /></a>
        </li>
        <li class="ms-3">
          <a class="icono" href="#"
            ><font-awesome-icon icon="fa-brands fa-linkedin" size="3x"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #d9bfa9 !important;
  width: 100%;
  margin-top: auto;
}
.hr-theme-slash-2 {
  display: flex;
}
.hr-line {
  width: 100%;
  position: relative;
  margin: 15px;
  border-bottom: 1px solid #000;
}
.hr-icon {
  position: relative;
  top: 3px;
}
.logo2 {
  width: 30%;
}
.icono {
  color: #000;
}
</style>
