<template>
  <div class="home container-fluid">
    <header class="container text-center">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="columna1-header text-start">
            <h1 class="tittle white-font">Somos una agencia creativa<span class="tittle purple-font">.</span></h1>
            <p class="mb-3">Potenciamos la identidad visual de negocios en crecimiento, para darle una apariencia memorable a lo que tu marca está transitando actualmente.</p>
            <button type="button" class="btn btn-purple rounded-pill">
              <router-link class="nav-link" to="/home">Ver Más</router-link>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-12">
          imagen ampolleta
        </div>
      </div>
    </header>
  </div>
  <WavesDiv/>
  <div class="container-fluid px-0"> 
    <section class="container px-0" id="lo-que-hacemos">
      <div class="row text-center">
        <div class="d-xl-none d-block text-end my-5">
          <h3 class="tittle">Lo que <span class="purple-font tittle">hacemos</span></h3>
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
            <h3 class="tittle">Lo que <span class="purple-font tittle">hacemos</span></h3>
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
      <h3 class="tittle">Algo<br><span class="purple-font tittle">sobre nosotros</span></h3>
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
      <h3 class="tittle">Algunos <span class="purple-font tittle">proyectos</span></h3>
      <p class="subtitle">que nos hacen sentir orgullosos</p>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-100" alt="">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section id="clientes">
      
    </section>
    <div id="cta">

    </div>
    <section id="valores">

    </section>
  </div>
</template>

<script>
import ProductoVanilla from '../components/ProductoVanilla.vue'
import ProductoVanilla2 from '../components/ProductoVanilla2.vue'
import CircleCTA from '../components/CircleCTA.vue'
import WavesDiv from '../components/WavesDiv.vue'

export default {
  name: 'HomeVanilla',
  components: {
    ProductoVanilla,
    ProductoVanilla2,
    CircleCTA,
    WavesDiv,
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
.tittle {
  font-size: 75px;
  line-height: 71px;
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
#nosotros {
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
</style>
