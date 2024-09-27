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
      <div class="container second-container">
        <div class="row align-items-center first-row">
          <div class="col-5">
            <img src="../../assets/heart-img-branding.png" alt="">
          </div>
          <div class="col-7">
            <p class="branding-text">
              En Vanilla Diseño, creemos que tu logotipo es solo el comienzo. Nuestro enfoque en branding e identidad visual te ayuda a <span class="bold">construir una imagen de marca que refleja verdaderamente la esencia</span> y valores de tu negocio. <br><br>
              Creamos una identidad visual coherente y poderosa que conecta emocionalmente con tu público objetivo, asegurando que <span class="bold">cada elemento gráfico hable por tu marca.</span>
            </p>
          </div>
        </div>
        <div class="row tipos-branding-cont">
          <div class="col-lg-4">
            <div class="card branding-card">
              <div class="card-body">
                <h5 class="card-title tittle4">Branding desde 0</h5>
                <p class="card-text">
                  Creación completa de la imagen de marca e identidad visual para nuevos negocios.
                </p>
                <div class="arrow-cont">
                  <ArrowRight :to="'/'" ref="arrowRight" class="arrow-right"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card branding-card dark-purple-card">
              <div class="card-body">
                <h5 class="card-title tittle4">Rebranding</h5>
                <p class="card-text">
                  Renovación de la imagen de marca e identidad visual para reflejar la evolución de tu negocio y su profesionalismo.
                </p>
                <div class="arrow-cont">
                  <ArrowRight :to="'/'" ref="arrowRight" class="arrow-right"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card branding-card">
              <div class="card-body">
                <h5 class="card-title tittle4">Identidad Visual</h5>
                <p class="card-text">
                  Diseño de elementos gráficos coherentes con tu marca a partir de un logo ya existente.
                </p>
                <div class="arrow-cont">
                  <ArrowRight :to="'/'" ref="arrowRight" class="arrow-right"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WavesDivGrey class="bg-white"/>
    <div class="container proyectos-branding text-center">
      <h3 class="tittle2">Algunos <span class="purple-font tittle2">proyectos</span></h3>
      <p class="subtitle">que nos hacen sentir orgullosos</p>
      <div class="row justify-content-center pt-5">
        <div class="col-lg-4">
          <div class="project-img-cont" @click="openModal(project)">
            <img src="../../assets/header-branding.png" alt="">
            <div class="overlay">
              <img src="../../assets/icons/pruple-eye.svg" alt="" class="eye-icon">
            </div>
          </div>
           <!-- Modal -->
          <div v-if="showModal" class="modal-backdrop" @click="closeModal">
            <div class="modal-content"  @click.stop>
              <span class="close-btn" @click="closeModal">&times;</span>
              <img src="../../assets/header-branding.png" alt="" class="modal-img">
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="project-img-cont" @click="openModal(project)">
            <img src="../../assets/header-branding.png" alt="">
            <div class="overlay">
              <img src="../../assets/icons/pruple-eye.svg" alt="" class="eye-icon">
            </div>
          </div>
           <!-- Modal -->
          <div v-if="showModal" class="modal-backdrop" @click="closeModal">
            <div class="modal-content"  @click.stop>
              <span class="close-btn" @click="closeModal">&times;</span>
              <img src="../../assets/header-branding.png" alt="" class="modal-img">
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="project-img-cont" @click="openModal(project)">
            <img src="../../assets/header-branding.png" alt="">
            <div class="overlay">
              <img src="../../assets/icons/pruple-eye.svg" alt="" class="eye-icon">
            </div>
          </div>
           <!-- Modal -->
          <div v-if="showModal" class="modal-backdrop" @click="closeModal">
            <div class="modal-content"  @click.stop>
              <span class="close-btn" @click="closeModal">&times;</span>
              <img src="../../assets/header-branding.png" alt="" class="modal-img">
            </div>
          </div>
        </div>
      </div>
    </div>
    <WavesDiv class="waves-cont-purple"/>
    <div class="bg-purple">
      <div class="container text-center">
        <h3 class="tittle2 white-font">Preguntas frecuentes</h3>
        <p class="subtitle white-font">que aclaramos para ti</p>
        
      </div>
    </div>
    <WavesDiv class="reflect-y over"/>
      <div class="container-fluid cta-branding">
        <div class="container d-flex justify-content-between mx-auto cta-box">
          <h3 class="tittle2 bold d-md-inline d-block"><span class="tittle2 no-bold">¿Necesitas un proyecto de </span>branding?</h3>
          <img src="../../assets/purple-arrow.svg" alt="flecha curva" class="d-xl-block d-none purple-arrow">
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
  </div>
</template>

<script>
import WavesDiv from '../../components/WavesDiv.vue'
import WavesDivGrey from '../../components/WavesDivGrey.vue'
import TransparentButton from '@/components/buttons/TransparentButton.vue'


export default {
  name: 'BrandingServicio',
  components: {
    WavesDiv,
    WavesDivGrey,
    TransparentButton,
  },
  data() {
    return {
      showModal: false,       // Define la propiedad showModal
      currentProject: null,   // Define la propiedad currentProject
    };
  },
  methods: {
    openModal(project) {
      this.currentProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.currentProject = null;
    },
  }
}
</script>