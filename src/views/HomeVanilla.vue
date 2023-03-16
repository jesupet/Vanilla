<template>
  <div class="home container-fluid">
    <header class="container text-center">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="columna1-header text-start">
            <h1 class="tittle1 white-font">Somos una agencia creativa<span class="tittle1 purple-font">.</span></h1>
            <p class="mb-3">Potenciamos la identidad visual de negocios en crecimiento, para darle una apariencia memorable a lo que tu marca está transitando actualmente.</p>
            <!--<button type="button" class="btn btn-purple rounded-pill">
              <router-link class="nav-link" to="/home">Ver Más</router-link>
            </button>-->
            <PurpleButton :to="'/home'" :buttonText="'Ver Más'"/>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <img src="../assets/ampolleta.png" alt="" class="img-fluid">
        </div>
      </div>
    </header>
  </div>
  <WavesDiv/>
  <div class="container-fluid px-0"> 
    <section class="container px-0" id="lo-que-hacemos">
      <div class="row text-center">
        <div class="d-xl-none d-block text-end my-5">
          <h3 class="tittle1">Lo que <span class="purple-font tittle1">hacemos</span></h3>
          <p class="subtitle">para que tu negocio transmita lo genial que es</p>
        </div>
        <div class="col-12 col-xl-4 fst-col text-center">
          <ProductoVanilla/>
        </div>
        <div class="col-12 col-xl-4 sec-col">
          <ProductoVanilla2/>
        </div>
        <div class="col-12 col-xl-4 thd-col text-xl-end text-center">
          <div class="d-none d-xl-inline">
            <h3 class="tittle1">Lo que <span class="purple-font tittle1">hacemos</span></h3>
            <p class="subtitle">para que tu negocio transmita lo genial que es</p>
          </div>
          <img src="../assets/flecha-curva-1.svg" alt="flecha curva" class="d-none d-xl-block mt-5">
          <div class="cta-cont">
            <CircleCTA/>
          </div>
        </div>
      </div>
    </section>
    <WavesDiv class="reflect-y"/>
    <section id="nosotros" class="text-center container-fluid px-0 py-5">
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
    <WavesDiv/>
    <section id="proyectos" class="container-fluid text-center py-5">
      <h3 class="tittle1">Algunos <span class="purple-font tittle1">proyectos</span></h3>
      <p class="subtitle">que nos hacen sentir orgullosos</p>
      <CarouselBrands class="d-block d-xl-none"/>
      <GridBrands class="d-none d-xl-block"/>
      <PurpleButton :to="'/home'" :buttonText="'Ver Todos'"/>
    </section>
    <section id="clientes" class="container-fluid text-center py-5">
      <h3 class="tittle1">Han <span class="purple-font tittle1">confiado</span></h3>
      <p class="subtitle">en nuestro talento y compromiso</p>
      <div class="row container mx-auto">
        <ClientCard/>
        <CarouselLogos/>
      </div>
    </section>
    <WavesDiv class="reflect-y over"/>
    <div id="cta" class="container-fluid">
      <div class="container d-flex mx-auto cta-box">
        <h3 class="tittle2 bold d-md-inline d-block">¿Tu negocio necesita<br><span class="tittle2 no-bold">expresar lo genial que es?</span></h3>
        <img src="../assets/purple-arrow.svg" alt="flecha curva" class="d-md-flex d-none purple-arrow">
        <TransparentButton class="d-block" :to="'/home'" :buttonText="'¡Trabajemos juntos!'"/>
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
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Creativos</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Confiables</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Amigables</span>
                </li>
              </ul>
            </div>
            <div class="col-xl-7 col-6 py-5 text-start">
              <ul class="px-0">
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Comprometidos</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Profesionales</span>
                </li>
                <li>
                  <span class="list-item"><img src="../assets/check-icon.svg" alt="check" class="p-3">Conectados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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

export default {
  name: 'HomeVanilla',
  components: {
    ProductoVanilla,
    ProductoVanilla2,
    CircleCTA,
    WavesDiv,
    CarouselBrands,
    GridBrands,
    ClientCard,
    TransparentButton,
    PurpleButton,
    CarouselLogos
  }
}
</script>

<style scoped>
.home {
  background-color: #1b1629;
  color: #fff;
  min-height: 90vh;
}
header {
  padding-top: 100px;
  padding-left: 50px;
}
.columna1-header {
  width: 70%;
  margin-left: 30px;
}
 
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
.subtitle {
  text-transform: uppercase;
  letter-spacing: 4px;
}
#nosotros, #cta {
  background-color: #1b1629;
  color: #fff;
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
  margin: -60px 0px 0px -60px;
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
</style>
