<template>
  <div class="pre-home">
    <PreHeaderVanilla/>
    <div class="home container-fluid">
      <a class="navbar-brand" href="#"><img class="logo-navbar-temp" src="../assets/vanilla_logos/logo_vanilla_navbar.png" alt="logo vanilla"></a>
      <header class="container text-center pre-home-header">
        <div class="tittle-cont">
          <h1 class="tittle1 white-font">Somos una agencia creativa<span class="tittle1 purple-font">.</span></h1>
          <p class="mb-3">Potenciamos la identidad visual de negocios en crecimiento, para darle una apariencia memorable a lo que tu marca está transitando actualmente.</p>
        </div>
      </header>
    </div>
    <WavesDiv/>
    <div class="container" id="cards-section">
      <div class="cards-cont">
        <div class="row text-center">
          <div class="col-12 col-lg-4 step-cont order-lg-0 order-2">
            <CardPreHomeWhite 
              class="first-card" 
              :title="'Ups!'" 
              :text="'Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.'"
              :buttonText="'Ir ahora!'"
              :displayPurple="'d-inline'"/>
          </div>
          <div class="col-12 col-lg-4 step-cont order-lg-1 order-0">
            <CardPreHome class="central-card order-lg-0"/>
          </div>
          <div class="col-12 col-lg-4 step-cont order-1">
            <CardPreHomeWhite 
              class="third-card" 
              :title="'¿Dudas?'"
              :text="'¿Necesitas diseño para tus proyectos, asesoría de tu ecosistema digital, apoyo con tu sitio web de servicios, u otro similar?'"
              :buttonText="'Hablemos!'"
              :displayGreen="'d-inline'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="waves-cont-purple reflect-y">
      <svg xmlns="http://www.w3.org/2000/svg" height="153" viewBox="0 0 2500 153" fill="none">
        <path d="M2500 81.5915C2498.82 123.393 2447.21 135.671 2413.09 120.826C2378.96 105.967 2346.76 76.7885 2310.54 81.9668C2268.12 88.0306 2234.62 140.444 2192.47 132.264C2151.68 124.354 2122.8 61.3738 2083.21 75.1375C2053.7 85.389 2044.77 132.909 2015.81 145.037C1974.18 162.478 1940.53 95.1451 1896.4 90.4322C1847.31 85.1789 1811.21 158.41 1762.25 151.791C1719.07 145.952 1685.96 79.1451 1645.69 97.9219C1623.3 108.369 1611.76 142.995 1587.65 145.142C1555.75 147.994 1541.77 92.7737 1510.35 85.8994C1472.36 77.5841 1448.48 143.746 1409.79 143.16C1381.31 142.725 1363.2 106.522 1336.01 96.7663C1285.84 78.7549 1236.8 156.639 1187.05 137.112C1162.76 127.581 1146.31 96.331 1120.68 94.6049C1085.99 92.2635 1066 144.391 1031.88 152.016C980.4 163.528 945.585 70.0945 893.84 79.9707C860.427 86.3498 836.867 135.296 803.768 127.01C771.822 119.01 762.519 62.86 730.206 57.0513C687.149 49.3065 666.799 137.397 623.572 131.183C589.608 126.29 571.316 63.7606 538.44 74.7025C515.077 82.4774 511.028 122.373 488.713 133.465C448.735 153.322 419.698 63.2803 377.007 73.2016C345.704 80.4812 331.749 138.913 300.445 131.663C277.842 126.425 272.168 90.3574 252.068 77.4042C209.993 50.3122 175.296 142.906 127.049 141.149C101.066 140.204 83.2189 112.286 61.9916 95.1004C40.725 77.9296 0.720694 80.8715 1.9344e-05 110.635L0 0.000488281L2500 5.11674e-05L2500 81.5915Z" fill="#763BFF"/>
      </svg>
    </div>
    <footer class="footer-temp text-center">
      <div class="rrss">
        <div class="p-1 d-inline justify-text-center">
          <a href="https://www.facebook.com/vanilla.diseno/" target="_blank" class="rrss-icon"><img src="../assets/rrss_logos/fb_white.png" alt="facebook logo"></a>
        </div>
        <div class="p-1 d-inline">
          <a href="https://www.instagram.com/vanilladiseno/" target="_blank" class="rrss-icon"><img src="../assets/rrss_logos/ig_white.png" alt="instagram logo"></a>
        </div>
        <div class="p-1 d-inline">
          <a href="https://www.linkedin.com/company/vanilladiseno" target="_blank" class="rrss-icon"><img src="../assets/rrss_logos/lkdn_white.png" alt="linkedin logo"></a>
        </div>
        <p class="pt-3">SOMOS DE <span class="bold">CHILE</span>, Y PODEMOS TRABAJAR PARA TODO EL MUNDO!</p>
      </div>     
    </footer>
  </div>
</template>

<script>
import {logos} from '@/store/logos'
import PreHeaderVanilla from '../components/main-components/PreHeaderVanilla.vue'
import WavesDiv from '../components/WavesDiv.vue'
import { mapGetters, mapActions } from 'vuex'
import CardPreHome from '../components/CardPreHome.vue'
import CardPreHomeWhite from '../components/CardPreHomeWhite.vue'

export default {
  name: 'HomeVanilla',
  components: {
    PreHeaderVanilla,
    WavesDiv,
    CardPreHome,
    CardPreHomeWhite,
  },
  data() {
    return{
      logos: logos,
      isMobile: window.innerWidth <= 768, // Detecta el ancho de la pantalla al principio
    }
  },
  computed: {
    ...mapGetters(["logoGroups"]),
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.fetchLogos();
  },
  methods: {
    ...mapActions(["fetchLogos"]),
    handleResize() {
      // Detecta el cambio en el ancho de la pantalla
      this.isMobile = window.innerWidth <= 768;
      console.log(window.innerWidth)
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

}
</script>

<style scoped>

 
@media (min-width: 1200px){
  .sec-col {
    padding-top: 280px;
  }
  .fst-col , .thd-col {
  padding-top: 100px;
  }
}
.cta-cont {
  padding:50px;
}
#nosotros, #cta {
  background-color: #1b1629;
  color: #fff;
}
#cta {
  position: relative;
}
.us-cont {
  padding: 50px 0px;
}
.us-desc {
  padding: 20px 0px 20px 0px;
  width: 200px;
  margin: auto;
}
#clientes {
  background-color: rgba(0, 0, 0, 0.04);
}
.purple-arrow {
  position: absolute;
  top: 0;
  left: 52%;
}
@media (max-width: 768px) {
  .tittle2 {
    text-align: center;
  }
  .cta-box {
    display: flex;
    flex-direction: column;
  }
}
.tittle2 {
  padding: 20px 0px;
}
.over {
    background-color: rgba(0, 0, 0, 0.04);
}
.list-item {
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
  font-size: 25px;
}
.list-item img {
  width: 30px;
  margin: 10px;
}
@media (max-width: 500px){
  .list-item img {
    width: 20px;
    margin: 5px;
  }
  .list-item {
    font-size: 20px;
  }
}

.purple-big-circle {
  position: absolute;
  z-index: -1;
  margin-top: -80px;
}
</style>
