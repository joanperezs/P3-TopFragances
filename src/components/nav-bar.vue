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
};
/*
$(document).ready(function(){

    const d = document.getElementById('XD');
   // Add slideup & fadein animation to dropdown
   d.addEventListener('show.bs.dropdown', function(e){
    console.log('nigger')
      var $dropdown = $(this).find('.dropdown-menu');
      var orig_margin_top = parseInt($dropdown.css('margin-top'));
      $dropdown.css({'margin-top': (orig_margin_top + 10) + 'px', opacity: 0}).animate({'margin-top': orig_margin_top + 'px', opacity: 1}, 300, function(){
         $(this).css({'margin-top':''});
      });
   });
});
*/




</script>

<style>

.customnavbar{
  /*background-color: #000;*/
}




</style>

<template>

<nav class="navbar navbar-dark bg-dark ">
  <div class="container-fluid">
    
    <img src="./logo/logo_joan.png" alt="" class="p-2" width="20%"/>
    
    

    
  </div>
</nav>

  
</template>

