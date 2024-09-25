<template>
  <div>
    <div class="branding-page">
      <header class="container text-center">
        <div class="row">
          <div class="col-lg-7 col-12">
            <div class="columna1-header text-start">
              <h1 class="tittle1 white-font"><span class="tittle1 purple-font">Branding</span> e identidad visual</h1>
            </div>
          </div>
          <div class="col-lg-5 col-12 d-none d-md-block branding-img-cont">
            <img src="../../assets/header-branding.png" alt="" class="branding-image">
          </div>
        </div>
      </header>
    </div>
    <WavesDiv class="bg-white"/>
    <div class="text-center frase-branding">
      <p>¡Por aquí comienza todo y tu logo no lo es todo! <br>
        Tu negocio necesita reflejar todo lo que es, lo que representa y seguir una línea gráfica coherente.</p>
    </div>
    <WavesDivGrey class="bg-white reflect-y"/>
    <div class="bg-grey">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-5">
            <img src="../../assets/heart-img-branding.png" alt="">
          </div>
          <div class="col-7">
            <p>
              En Vanilla Diseño, creemos que tu logotipo es solo el comienzo. Nuestro enfoque en branding e identidad visual te ayuda a <span class="bold">construir una imagen de marca que refleja verdaderamente la esencia</span> y valores de tu negocio. <br><br>
              Creamos una identidad visual coherente y poderosa que conecta emocionalmente con tu público objetivo, asegurando que <span class="bold">cada elemento gráfico hable por tu marca.</span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <WavesDivGrey class="bg-white"/>
  </div>
</template>

<script>
import WavesDiv from '../../components/WavesDiv.vue'
import WavesDivGrey from '../../components/WavesDivGrey.vue'


export default {
  name: 'BrandingServicio',
  components: {
    WavesDiv,
    WavesDivGrey,
  },
}
</script>