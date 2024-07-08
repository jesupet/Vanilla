<template>
  <div class="container my-5 d-none d-xl-block">
    <div class="row mx-auto">
      <div class="col-4 box">
        <img src="../assets/projects_img/optimmet_logo_proyectos.png" alt="">
      </div>
      <div class="col-4 box">
        <img src="../assets/projects_img/optimmet_web_proyectos.png" alt="">
      </div>
      <div class="col-4 box text-start px-5 d-grid align-items-center align-content-center">
        <h2 class="black dark-purple-font">Optimmet Ingeniería</h2>
        <ColorChip 
          :ChipText="'Identidad corporativa'" 
          :BgColor="'peach-bg'"
        />
        <ColorChip 
          :ChipText="'diseño y desarrollo web'" 
          :BgColor="'pink-bg'"
        />
        <ColorChip 
          :ChipText="'diseño gráfico'" 
          :BgColor="'light-blue-bg'"
        />
        <ColorChip 
          :ChipText="'videos animados'" 
          :BgColor="'peach2-bg'"
        />
        <ColorChip 
          :ChipText="'Diseño y contenido digital redes'" 
          :BgColor="'pink-purple-bg'"
        />
        <ColorChip 
          :ChipText="'fee mensual'" 
          :BgColor="'light-purple-bg'"
        />
      </div>
    </div>
    <div class="row mx-auto">
      <div class="col-4 box text-end d-flex-schn px-5">
        <h2 class="black dark-purple-font">Schneider Electric</h2>
        <ColorChip 
          :ChipText="'vanilla outsourcing'" 
          :BgColor="'black-bg'"
          class="ml-auto"
        />
        <ColorChip 
          :ChipText="'fee mensual'" 
          :BgColor="'light-purple-bg'"
        />
      </div>
      <div class="col-4 box">
        <img src="../assets/projects_img/schn_grafica_proyectos.png" alt="">
      </div>
      <div class="col-4 box">
        <img src="../assets/projects_img/schn_logo_proyectos.png" alt="">
      </div>
    </div>
    <div class="row mx-auto">
      <div class="col-4 box">
        <img src="../assets/projects_img/equans_logo_proyectos.png" alt="">
      </div>
      <div class="col-4 box">
        <img src="../assets/projects_img/equans_grafica_proyectos.png" alt="">
      </div>
      <div class="col-4 box text-start d-grid align-items-center px-5 align-content-center">
        <h2 class="black dark-purple-font">Equans</h2>
        <ColorChip 
          :ChipText="'vanilla outsourcing'" 
          :BgColor="'black-bg'"
          class="ml-auto"
        />
        <ColorChip 
          :ChipText="'videos animados'" 
          :BgColor="'peach2-bg'"
        />
        <ColorChip 
          :ChipText="'fee mensual'" 
          :BgColor="'light-purple-bg'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ColorChip from './ColorChip.vue'

export default {
  name: "GridBrands",
  components: {
    ColorChip,
  },
  computed: {
    
  },
}
</script>
