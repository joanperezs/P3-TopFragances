<script setup>
import navbar from "./components/nav-bar.vue";
import headervid from "./components/header.vue";
import bestfragances from "./components/best-fragances.vue";


</script>


<template>
  <navbar>
  </navbar>
  
  <body>
    <headervid>
    </headervid>
  
    <bestfragances>
    </bestfragances>
  </body>


  


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
