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
  <div class="container-fluid">
    
    <section class="container" id="lo-que-hacemos">
      <div class="row">
        <div class="col-12 col-md-4 fst-col">
          <ProductoVanilla/>
        </div>
        <div class="col-12 col-md-4 sec-col">
          <ProductoVanilla2/>
        </div>
        <div class="col-12 col-md-4 thd-col text-end">
          <h3 class="tittle">Lo que <span class="purple-font tittle">hacemos</span></h3>
          <p>para que tu negocio TRANSMITA lo genial que es</p>
          <img src="../assets/flecha-curva-1.svg" alt="flecha curva" class="mt-5">
          <div class="cta-cont">
            <CircleCTA/>
          </div>
        </div>
      </div>
    </section>
    <section id="nosotros">

    </section>
    <section id="proyectos">

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
.fst-col , .thd-col {
  padding-top: 100px;
}
.sec-col {
  padding-top: 280px;
}
.cta-cont {
  padding:50px;
}
</style>
