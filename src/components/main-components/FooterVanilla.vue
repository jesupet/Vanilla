<template>
  <WavesDiv class="reflect-y"/>
  <footer>
    <div class="row pt-5 container-fluid">
      <div class="col-md-6 col-12 row text-md-end text-center">
        <div class="col-6">
          <img src="../../assets/vanilla_logos/logo-vanilla-bajada.png" alt="logo con bajada">
          <div class="rrss-cont justify-content-end">
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/facebook-purple-logo.png" alt="facebook logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/instagram-purple-logo.png" alt="instagram logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/linkedin-purple-logo.png" alt="linkedin logo"></a>
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
                <button type="button" class="btn btn-purple rounded-pill">
                  <router-link class="nav-link" to="/">Hablemos!</router-link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12 right-cont">
        <div class="">
          <p class="mayus-p">Contáctanos</p>
          <div>
            <p class="big-num d-inline">+56 9 8862 5328</p>
            <img src="../../assets/rrss_logos/whatsapp_icon.png" alt="" class="wsp-icon d-inline">
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

export default {
  name: "FooterVanilla",
  components: {
    WavesDiv,
  }
}

</script>
