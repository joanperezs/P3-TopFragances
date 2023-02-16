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
  name: "product",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      product: []
    };
  },
  mounted(){
    
    fetch(`http://localhost:3000/productos/` + this.id )
    .then(res => res.json())
    .then(data => this.product = data)
    .catch(err => console.log(err.message))
  }


};

</script>


<template>

  <div class="product d-flex justify-content-center row p-5">
  
    <div class="textcontainer d-flex flex-column col-5 justify-content-around" >
          <div class="tituloproduct w-100 align-self-center">
            {{ product.name }}
          </div>

        <div class="descripcionproduct w-75 align-self-center">
          {{ product.description }}
        </div>
    </div>


  

  <div class="preciocontainer d-flex  flex-column col justify-content-around">
      <div class="precio align-self-center">{{ product.price }}€</div>

  <div class="categorias d-flex flex-column justify-content-center ">


      <span class="badge rounded-pill text-bg-primary w-25 align-self-center">HOLA</span>
      <hr>
      <span class="badge rounded-pill text-bg-secondary w-25 align-self-center">HOLA</span>
      <hr>
      <span class="badge rounded-pill text-bg-success w-25 align-self-center">HOLA</span>
  </div>

  <div class="comprar align-self-center w-50">
    <span class="badge text-bg-warning w-100"><font-awesome-icon icon="fa-cart-shopping" size="5x" /></span>
  </div>
  </div>


  <div class="fotos border-5 rounded-5 col ">
    <div class="self-align-center">
      <img src="${ product.img }" alt="" class="w-100 align-self-center">
    </div>
    
  </div>


</div>
  
</template>

<style>
@import url("./font/stylesheet.css");

.product{
  height: 40rem;
}

.tituloproduct{
  white-space: nowrap !important;
  font-family: 'dutch801_xbd_btextra_bold';
  font-size:4rem;
  color:#fff;
  text-align: center;
  
}

.descripcionproduct{
  font-family: 'dutch801_xbd_btextra_bold';
  font-weight: bold;
  font-size: 1rem;
  width: 40%;
  color: #000;
}

.precio{
  font-family: 'dutch801_xbd_btextra_bold';
  font-weight: bold;
  color: #000;
  font-size: 4rem;
}

.fotos{
 background-color: #fff;

}

hr{
  align-self: center;
  width: 40%;
  height: 10px;
  background-color: #000 !important;
  border: solid 2px;
}

</style>
