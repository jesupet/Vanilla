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
  <div>
    <img class="olas-div" src="../assets/olas_header.png" alt="">
  </div>
  <div class="container-fluid">
    
    <section id="lo-que-hacemos">

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

export default {
  name: 'HomeVanilla',
  components: {
   
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
.olas-div {
  width: 100%;
}
</style>
