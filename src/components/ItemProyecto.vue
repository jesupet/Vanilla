<template>
  <div class="container my-5 d-none d-xl-block">
    <div class="row mx-auto">
      <div class="col-4 box">
        <img :src="getImagePath(cliente.logo)" alt="">
      </div>
      <div class="col-4 box texto-proyecto" v-if="cliente.review && cliente.review.trim() !== ''">
        <p class="italic no-bold">{{cliente.review}}</p>
        <p class="autor-test">{{cliente.name}}</p>
      </div>
      <div class="col-4 box text-start px-5 d-grid align-items-center align-content-center">
        <h2 class="black dark-purple-font">{{cliente.company}}</h2>
        <ColorChip
          v-for="(service, index) in cliente.services"
          :key="index"
          :ChipText="service.name" 
          :BgColor="service.bgColor"
        />
      </div>
    </div>
    <div class="row img-proyectos">
      <div class="col-3"  v-for="(project, index) in cliente.projects" :key="index">
        <div class="project-img-cont" @click="openModal(project)">
          <img :src="getImagePath(project.img)" alt="">
          <div class="overlay">
            <img src="../assets/icons/pruple-eye.svg" alt="" class="eye-icon">
          </div>
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
</template>

<script>
import ColorChip from './ColorChip.vue'
import { mapState } from 'vuex'

export default {
  name: "ItemProyecto",
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
    ...mapState('[clients]')
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
