<template>
  <div class="container my-5 d-none d-xl-block">
    <div class="row mx-auto">
      <div class="col-4 box">
        <img src="../assets/projects_img/optimmet_logo_proyectos.png" alt="">
      </div>
      <div class="col-4 box texto-proyecto">
        <p class="italic no-bold">En Vanilla inmediatamente me acogieron y comenzaron a trabajar. Hemos trabajado en proyectos de ingeniería que requerían Diseño, entre ellos Manuales, Procedimientos y Gestión Visual, todos con excelentes resultados</p>
        <p class="autor-test">Natacha Henríquez</p>
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
    <div class="row img-proyectos">
      <div class="col-3">
        <img src="../assets/projects_img/optimmet_web_proyectos.png" alt="">
      </div>
      <div class="col-3">
        <img src="../assets/projects_img/optimmet_web_proyectos.png" alt="">
      </div>
      <div class="col-3">
        <img src="../assets/projects_img/optimmet_web_proyectos.png" alt="">
      </div>
      <div class="col-3">
        <img src="../assets/projects_img/optimmet_web_proyectos.png" alt="">
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
