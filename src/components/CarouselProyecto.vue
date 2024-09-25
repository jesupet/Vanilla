<template>
  <div class="container d-xl-none d-block py-5 carousel-proyecto">
    <h2 class="black dark-purple-font pb-2">{{cliente.company}}</h2>
      <ColorChip
        v-for="(service, index) in cliente.services"
        :key="index"
        :ChipText="service.name" 
        :BgColor="service.bgColor"
        class="d-inline-block mx-1"
      />
    <div :id="`carousel-${cliente.company.replace(/\s+/g, '-')}`" class="carousel slide pt-4 carousel-slider">
      <div class="carousel-indicators indicators-slide">
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" :data-bs-target="`#carousel-${cliente.company.replace(/\s+/g, '-')}`" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div class="carousel-inner carousel-inner-proyectos">
        <div class="carousel-item active box logo-cliente">
          <img :src="getImagePath(cliente.logo)" alt="">
        </div>
        <div class="carousel-item" v-if="cliente.review && cliente.review.trim() !== ''">
          <div class="box texto-proyecto">
            <p class="italic no-bold">{{cliente.review}}</p>
            <p class="autor-test">{{cliente.name}}</p>
          </div>
        </div>
        <div class="carousel-item box" v-for="(project, index) in cliente.projects" :key="index">
          <div class="project-img-cont" @click="openModal(project)">
            <img :src="getImagePath(project.img)" alt="">
            <div class="overlay">
              <img src="../assets/icons/pruple-eye.svg" alt="" class="eye-icon">
            </div>
          </div>
        </div>
          <!-- Modal -->
        <div v-if="showModal" class="modal-backdrop" @click="closeModal">
          <div class="modal-content"  @click.stop>
            <span class="close-btn" @click="closeModal">&times;</span>
            <img :src="getImagePath(currentProject.img)" alt="" class="modal-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorChip from './ColorChip.vue'
import { mapState } from 'vuex'

export default {
  name: "CarouselProyecto",
  components: {
    ColorChip,
  },
  props: {
    cliente: Object,
  },
  data() {
    return {
      showModal: false,       // Define la propiedad showModal
      currentProject: null,   // Define la propiedad currentProject
    };
  },
  computed: {
    ...mapState({
      clients: state => state.clients // Asegúrate de que 'clients' exista en tu Vuex store
    }),
  },
  methods: {
    getImagePath(imagen) {
      try {
        return require(`@/assets/projects_img/${imagen}`);
      } catch (e) {
        console.error(`La imagen ${imagen} no se encontró en la ruta especificada.`);
        return '';
      }
    },
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
