
<script>
    import headervid from "./header.vue";
    import bestfragances from "./best-fragances.vue";
    import publicity from "./publicity.vue"
    import $ from "jquery";

    $(document).ready(function(){
      var $nav = $('.navbar');//Caching element
      // hide .navbar first - you can also do this in css .nav{display:none;}
      //$nav.hide();

      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
              // set distance user needs to scroll before we start fadeIn
              if (window.location.pathname == '/') {
                
                if ($(this).scrollTop() >= 100 ) { //For dynamic effect use $nav.height() instead of '100'
                    $nav.fadeIn();
                } else {
                    $nav.fadeOut();
                }
            }
          });
      });

    });
    


    export default {
  components: {
    headervid, bestfragances, publicity
  },


  
}
</script>

<template>
    <headervid>
    </headervid>
    
    <bestfragances :index="index">
    </bestfragances>
</template>