<template>
  <WavesDiv class="reflect-y"/>
  <footer>
    <div class="row pt-5 container-fluid">
      <div class="col-md-6 col-12 row text-md-end text-start">
        <div class="col-6">
          <img src="../../assets/vanilla_logos/logo-vanilla-bajada.png" alt="logo con bajada">
          <div class="rrss-cont justify-content-end">
            <div class="p-1 d-inline">
              <a href="https://www.facebook.com/vanilla.diseno/" target="_blank"><img src="../../assets/rrss_logos/facebook-purple-logo.png" alt="facebook logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href="https://www.instagram.com/vanilladiseno/" target="_blank"><img src="../../assets/rrss_logos/instagram-purple-logo.png" alt="instagram logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href="https://www.linkedin.com/company/vanilladiseno" target="_blank"><img src="../../assets/rrss_logos/linkedin-purple-logo.png" alt="linkedin logo"></a>
            </div>
          </div>          
        </div>
        <div class="col-6">
          <div class="float-md-end float-center mx-4">
            <ul class="list-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Nosotros</a>
              </li>
              <li>
                <a href="">¿Qué Hacemos?</a>
              </li>
              <li>
                <a href="">Han Confiado</a>
              </li>
              <li>
                <PurpleButton 
                  :to="'/'" 
                  :buttonText="'Hablemos!'" 
                  data-tally-open="w8LOkx" 
                  data-tally-layout="modal" 
                  data-tally-width="384" 
                  data-tally-align-left="1" 
                  data-tally-emoji-text="👋" 
                  data-tally-emoji-animation="wave" 
                  data-tally-auto-close="2000"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 right-cont">
        <div class="">
          <p class="mayus-p">Contáctanos</p>
          <div>
            <a href="https://wa.me/56988625328?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20Vanilla" target="_blank">
              <p class="big-num d-inline">+56 9 8862 5328</p>
              <img src="../../assets/rrss_logos/whatsapp_icon.png" alt="" class="wsp-icon d-inline">
            </a>
          </div>
          <p class="mayus-p">Somos de Chile, y podemos trabajar para todo el mundo!</p>
          <div class="txt-cont">
            <p>Te acompañamos con una experiencia cercana y amigable. ¡Seremos tus partners y nos comprometemos de corazón con cada proyecto desarrollado.</p>
          </div>
        </div>
      </div>
    </div> 
    
  </footer>
</template>

<script>
import WavesDiv from '../WavesDiv.vue'
import PurpleButton from '../buttons/PurpleButton.vue'

export default {
  name: "FooterVanilla",
  components: {
    WavesDiv,
    PurpleButton
  }
}

</script>
