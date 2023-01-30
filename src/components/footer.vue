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
    <div class="footerdiv container-fluid d-flex flex-column justify-content-center align-items-center" >

        <div class="hr-theme-slash-2">
            <div class="hr-line"></div>
            <div class="hr-icon">
                <font-awesome-icon icon="fa-brands fa-twitter" size="3x" />
                <font-awesome-icon icon="fa-brands fa-instagram" size="3x" />
                <font-awesome-icon icon="fa-brands fa-linkedin" size="3x" />
            </div>
            <div class="hr-line"></div>
        </div>

        <div class="logo2 d-flex justify-content-center">
            <img src="./logo/logo-2.png" alt="" class="w-25">
        </div>
        <div class="enlaces d-flex flex-row">
            <div>Información Legal</div>
            <div class="vr"></div>
            <div>Politica de privacidad</div>
            <div class="vr"></div>
            <div>Copyright 2023 topfragances</div>
        </div>
         
    </div>
    
</template>

<style>

.footerdiv{
    background-color: #D9BFA9;
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
</style>