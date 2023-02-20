<script setup>
import navbar from "./components/nav-bar.vue";
import footerapp from "./components/footerapp.vue";
</script>

<template>
  <navbar></navbar>

  <router-view></router-view>

  <footerapp> </footerapp>
</template>

<style>
body {
  background-color: #a69586 !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}
</style>
