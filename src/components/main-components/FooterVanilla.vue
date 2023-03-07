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
                  <router-link class="nav-link" to="/home">Hablemos!</router-link>
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
<style scoped>
  footer {
    background-color: #1b1629;
    color: #fff;
    min-height: 70vh;
    padding-left: 30px;
    padding-right: 30px;
  }
  .reflect-y {
    transform: scaleY(-1);
  }
  .rrss-cont {
    margin-top: 20px;
  }
  .list-menu, .mayus-p {
    list-style: none;
    text-transform: uppercase;
    text-align: start;
  }
  .list-menu > li, .mayus-p, .txt-cont {
    padding-top: 30px;
  }
  .big-num {
    font-size: 25px;
  }
  .wsp-icon {
    box-sizing: border-box;
    width: 28px;
    margin-bottom: 1em;
    margin-left: 0.5em;
  }
  .txt-cont {
    width: 50%;
  }
  @media screen and (max-width: 800px) {
      .txt-cont {
        width: 100%;
        padding-bottom: 100px;
    }
  }
  .right-cont {
    padding: 0px 50px;
  }
</style>