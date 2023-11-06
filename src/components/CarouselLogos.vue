<template>
  <div id="carouselExample" class="carousel carousel-dark">
    <div class="carousel-inner">
      <div v-for="(group, index) in logoGroups" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
        <div class="row">
          <div v-for="(logo, logoIndex) in group" :key="logoIndex" :class="getColumnClass()">
            <img :src="logo.url" :alt="logo.alt" class="img-fluid brand-logo">
          </div>
        </div>
      </div>
    </div>
    
        <!--<div class="d-flex justify-content-between">
          <div v-for="logo in slide.logos" :key="logo.id" class="logo-item">
            <img :src="logo.src" alt="Logo" class="img-fluid" />
          </div>
        </div>
        -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

export default {
  name: "CarouselLogos",
  props: {
    logoGroups: {
      type: Array,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    getColumnClass() {
      // Condiciona la clase CSS de las columnas según la propiedad 'isMobile' en las props
      return this.isMobile ? "col-6" : "col-md-3";
    },
  },
}
</script>

