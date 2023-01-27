<template>
  <body>
    <div class="video">
      <video class="w-100 " playsinline autoplay muted loop >
      <source src="./media/Invictus Paco Rabanne.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <!--<div class="logo">
        <img src="./logo/logo_joan.png" alt="">
      </div>
      -->
    </div>


   <div class="titulo text-center">
      <div class="titulo1">
        The best fragances
      </div>
      <div class="titulo2">
        <h1> The best fragances</h1>
      </div>
      <div class="titulo3">
        The best fragances
      </div>
    </div> 

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

.video{
  position: relative;
}

.logo{
  position: absolute;
}

h1{
    font-size: 10vw;
}
.titulo1{
    font-size: 10vw;
    z-index: 1;
    
    position: relative;
    
}
.titulo2{
    z-index: 2; 
}
.titulo3{
    z-index: 3;
    display: block;
}
</style>
