<script setup>
import navbar from "./components/nav-bar.vue";
import footerapp from "./components/footer.vue"

</script>


<template>
  <navbar>
  </navbar>
  
  <body>

   <router-view></router-view>

  
  </body>


  <footerapp>
  </footerapp>
  


</template>

<style>
  body {
  
  background-color: #a69586 !important;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

</style>
