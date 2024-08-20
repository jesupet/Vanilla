<template>
  <div>
    <div class="main-title">
      <h1 class="tittle5">Nosotros</h1>
    </div>
    <WavesDiv class="bg-grey"/>
    <div class="mision">
      <div class="container">
        <img src="../assets/comillas.png" alt="comillas" class="mb-3 w-10">
        <p>“Transformamos una <span class="purple-font">idea estratégica</span> en un <span class="purple-font">diseño genial y creativo</span>, manteniendo una relación de confianza y compromiso con nuestros clientes.”</p>
      </div>
    </div>
    <WavesDivGrey/>
    <div class="nos-destacamos">
      <h3 class="tittle1 text-center">Nos <br><span class="purple-font tittle1">destacamos por</span></h3>
      <p class="subtitle text-center">estos atributos que cuidamos fielmente</p>
      <div class="valores">
        <img src="../assets/nosotros_diagrama.png" alt="" class="d-xl-block d-none">
      </div>
    </div>
    <WavesDivPurple/>
    <div id="somos">
      <div class="container white-font">
        <h3 class="tittle1 text-center">Nosotras somos</h3>
        <p class="subtitle text-center pb-3">y construimos un lugar que clientes y colaboradores prefieran</p>
        <div class="row">
          <div class="col-xl-4 mb-xl-0 mb-3 text-center">
            <img src="../assets/nosotros_img/michelle.png" alt="">
          </div>
          <div class="col-xl-8 text-xl-start">
            <p class="tittle6">Michelle De Dompierre</p>
            <p class="pink-font italic">Fundadora de Vanilla Diseño</p>
            <p class="mt-3">Soy titulada de Diseño Industrial, Diplomada de Marketing Estratégico y me encanta permanecer en constante aprendizaje de nuevas herramientas, tendencias y habilidades. Estoy convencida que el aporte de diseño potencia enormemente a los negocios, no solo de cara al cliente y consumidor, sino que también juega un papel muy relevante en la confianza del equipo sobre la marca.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 order-xl-1 order-0 m-xl-0 my-3 text-center">
            <img src="../assets/nosotros_img/jesu.png" alt="">
          </div>
          <div class="col-xl-8 text-xl-end order-xl-0 order-1">
            <p class="tittle6">María Jesús Petour</p>
            <p class="pink-font italic">Desarrollo y gestión de proyectos</p>
            <p class="mt-3">Como la persona curiosa y activa que soy, siempre estoy buscando cosas nuevas que aprender, como deportes, manualidades, tecnologías, etc. Estudié Ingeniería Comercial y los últimos años he explorado el mundo digital, donde vinculando mi creatividad con mi capacidad organizacional he aprendido nuevas herramientas y desarrollado grandes proyectos, sobre todo durante la pandemia, donde estudié Desarrollo Front End aprendiendo herramientas como JavaScript, HTML y CSS.</p>
          </div>
        </div>
      </div>
    </div>
    <WavesDivPurple class="reflect-y"/>
    <div id="otros-colab" class="text-center">
      <div class="container">
        <h5 class="tittle6">
          Hacen la magia
        </h5>
        <p class="subtitle text-center pb-3">y desarrollan diseños wow!</p>
        <div class="row py-4">
          <div class="col-12 col-xl-3">
            <img src="../assets/nosotros_img/yanina.png" alt="" class="mb-2 img-fluid">
            <p class="tittle-6">
              Yanina Holman
            </p>
            <p class="pink-font italic">Identidad, Diseño Web, Multimedia</p>
          </div>
          <div class="col-12 col-xl-3 pt-xl-0 pt-5">
            <img src="../assets/nosotros_img/mariana.png" alt="" class="mb-2 img-fluid">
            <p class="tittle-6">
              Mariana Lillo
            </p>
            <p class="pink-font italic">Gráficas Digitales, Diseño Web</p>
          </div>
          <div class="col-12 col-xl-3 pt-xl-0 pt-5">
            <img src="../assets/nosotros_img/anto.png" alt="" class="mb-2 img-fluid">
            <p class="tittle-6">
              Antonia Moller
            </p>
            <p class="pink-font italic">Identidad, Gráficas Digitales</p>
          </div>
          <div class="col-12 col-xl-3 pt-xl-0 pt-5">
            <img src="../assets/nosotros_img/cono.png" alt="" class="mb-2 img-fluid">
            <p class="tittle-6">
              Estefanny Guerrero
            </p>
            <p class="pink-font italic">Branding, Identidad, Multimedia</p>
          </div>
        </div>
        <!--OCULTO POR EL MOMENTO
        <h5 class="tittle6 pt-5">
          Partners que admiramos
        </h5>
        <p class="subtitle text-center pb-3">y complementan nuestros diseños geniales</p>
        -->
      </div>
      
    </div>  
  </div>
</template>

<script>

import WavesDiv from '../components/WavesDiv.vue'
import WavesDivGrey from '../components/WavesDivGrey.vue'
import WavesDivPurple from '../components/WavesDivPurple.vue'

export default {
  name: 'ProyectosView',
  components: {
    WavesDiv,
    WavesDivGrey,
    WavesDivPurple,
  }

}
</script>