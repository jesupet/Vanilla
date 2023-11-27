<template>
  <NavbarVanilla/>
  <div class="home container-fluid">
    <header class="container text-center">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="columna1-header text-start">
            <h1 class="tittle1 white-font">Somos una agencia creativa<span class="tittle1 purple-font">.</span></h1>
            <p class="mb-3">Potenciamos la identidad visual de negocios en crecimiento, para darle una apariencia memorable a lo que tu marca está transitando actualmente.</p>
            <PurpleButton :to="'/'" :buttonText="'Ver Más'"/>
          </div>
        </div>
        <div class="col-lg-6 col-12 d-none d-md-block">
          <img src="../assets/ampolleta.png" alt="" class="amp-image">
        </div>
      </div>
    </header>
  </div>
  <WavesDiv/>
  <div class="container-fluid"> 
    <section class="container" id="lo-que-hacemos">
      <div class="row text-center">
        <div class="d-xl-none d-block text-end my-5">
          <h3 class="tittle1">Lo que <span class="purple-font tittle1">hacemos</span></h3>
          <p class="subtitle">para que tu negocio transmita lo genial que es</p>
        </div>
        <div class="col-12 col-xl-4 fst-col text-center px-0">
          <ProductoVanilla/>
        </div>
        <div class="col-12 col-xl-4 sec-col px-0">
          <ProductoVanilla2/>
        </div>
        <div class="col-12 col-xl-4 thd-col text-xl-end text-center">
          <div class="d-none d-xl-inline">
            <h3 class="tittle1">Lo que <span class="purple-font tittle1">hacemos</span></h3>
            <p class="subtitle">para que tu negocio transmita lo genial que es</p>
          </div>
          <img src="../assets/flecha-curva-1.svg" alt="flecha curva" class="d-none d-xl-block mt-5">
 
            <CircleCTA/>

        </div>
      </div>
    </section>
  </div>
  <WavesDiv class="reflect-y"/>
  <div class="container-fluid" id="nosotros">
    <section class="text-center container py-5">
      <h3 class="tittle1">Algo<br><span class="purple-font tittle1">sobre nosotros</span></h3>
      <p class="subtitle">a ver si te hace clic!</p>
      <div class="row container mx-auto us-cont">
        <div class="col-12 col-xl-3 my-4">
          <img src="../assets/us_icons/teletrabajo.png" alt="audifonos">
          <p class="us-desc">Nos volvimos 100% teletrabajo.</p>
        </div>
        <div class="col-12 col-xl-3 my-4">
          <img src="../assets/us_icons/10_anos.png" alt="audifonos">
          <p class="us-desc">Más de 10 años apoyando negocios y marcas.</p>
        </div>
        <div class="col-12 col-xl-3 my-4">
          <img src="../assets/us_icons/50_negocios.png" alt="audifonos">
          <p class="us-desc">Más de 50 negocios atendidos en los últimos años.</p>
        </div>
        <div class="col-12 col-xl-3 my-4">
          <img src="../assets/us_icons/compromiso.png" alt="audifonos">
          <p class="us-desc">1000% comprometidos con  que vivas una gran experiencia.</p>
        </div>
      </div>
    </section>
  </div>
    
    <WavesDiv/>
    <section id="proyectos" class="container-fluid text-center py-5">
      <h3 class="tittle1">Algunos <span class="purple-font tittle1">proyectos</span></h3>
      <p class="subtitle">que nos hacen sentir orgullosos</p>
      <CarouselBrands class="d-block d-xl-none"/>
      <GridBrands class="d-none d-xl-block"/>
      <PurpleButton :to="'/'" :buttonText="'Ver Todos'"/>
    </section>
    <img src="../assets/big_circle.png" alt="circulo morado" class="purple-big-circle img-fluid d-md-block d-none">
    <section id="clientes" class="container-fluid text-center py-5">
      <h3 class="tittle1">Han <span class="purple-font tittle1">confiado</span></h3>
      <p class="subtitle">en nuestro talento y compromiso</p>
      <div class="row container mx-auto">
        <ClientCard/>
        <CarouselLogos :logoGroups="logoGroups" :isMobile="isMobile" class="mt-5"/>
      </div>
      
    </section>
    <WavesDiv class="reflect-y over"/>
    <div id="cta" class="container-fluid">
      <div class="container d-flex justify-content-between mx-auto cta-box">
        <h3 class="tittle2 bold d-md-inline d-block">¿Tu negocio necesita<br><span class="tittle2 no-bold">expresar lo genial que es?</span></h3>
        <img src="../assets/purple-arrow.svg" alt="flecha curva" class="d-xl-block d-none purple-arrow">
        <TransparentButton
          :to="'/'" 
          class="d-block"
          :buttonText="'¡Trabajemos juntos!'"
          data-tally-open="w8LOkx" 
          data-tally-layout="modal" 
          data-tally-width="384" 
          data-tally-align-left="1" 
          data-tally-emoji-text="👋" 
          data-tally-emoji-animation="wave" 
          data-tally-auto-close="2000"
        />
      </div>
    </div>
    <WavesDiv/>
    <section id="valores" class="container">
      <div class="row">
        <div class="col-12 col-xl-6 py-5">
          <img src="../assets/woman.png" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-xl-6 py-5">
          <h3 class="tittle3">Nos caracterizamos <span class="tittle3 purple-font">por</span></h3>
          <p class="subtitle">estos atributos que cuidamos fielmente</p>
          <div class="row pt-5">
            <div class="col-xl-5 col-6 py-5">
              <ul class="px-0">
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Creativos</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Confiables</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Amigables</span>
                </li>
              </ul>
            </div>
            <div class="col-xl-7 col-6 py-5 text-start">
              <ul class="px-0">
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Comprometidos</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Profesionales</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check">Conectados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  <FooterVanilla/>
</template>

<script>
import {logos} from '@/store/logos'

import NavbarVanilla from '../components/main-components/NavbarVanilla.vue'
import ProductoVanilla from '../components/ProductoVanilla.vue'
import ProductoVanilla2 from '../components/ProductoVanilla2.vue'
import CircleCTA from '../components/CircleCTA.vue'
import WavesDiv from '../components/WavesDiv.vue'
import CarouselBrands from '../components/CarouselBrands.vue'
import GridBrands from '../components/GridBrands.vue'
import ClientCard from '../components/ClientCard.vue'
import TransparentButton from '@/components/buttons/TransparentButton.vue'
import PurpleButton from '../components/buttons/PurpleButton.vue'
import CarouselLogos from '../components/CarouselLogos.vue'
import FooterVanilla from '../components/main-components/FooterVanilla.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeVanilla',
  components: {
    NavbarVanilla,
    ProductoVanilla,
    ProductoVanilla2,
    CircleCTA,
    WavesDiv,
    CarouselBrands,
    GridBrands,
    ClientCard,
    TransparentButton,
    PurpleButton,
    CarouselLogos,
    FooterVanilla
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
#lo-que-hacemos {
  padding-bottom: 50px;
}
</style>
