<template>
  <div>
    <div class="main-title">
      <h1 class="tittle5">Proyectos</h1>
    </div>
    <WavesDiv class="bg-grey"/>
    <div class="frase-proyectos">
      <div class="container">
        <p>Nos especializamos en <span class="purple-font">diseño</span> y lo hacemos <span class="purple-font">genial</span></p>
      </div>
    </div>
    <WavesDivGrey/>
    <div id="proyectos" class="container" v-for="(cliente, index) in clients" :key="index">
       <ItemProyecto :cliente="cliente"/>
       <CarouselProyecto :cliente="cliente"/>
    </div>  
  </div>
</template>

<script>
import WavesDiv from '../components/WavesDiv.vue'
import WavesDivGrey from '../components/WavesDivGrey.vue'
import ItemProyecto from '../components/ItemProyecto.vue'
import CarouselProyecto from '../components/CarouselProyecto.vue'
import { mapState } from 'vuex'


export default {
  name: 'ProyectosView',
  components: {
    WavesDiv,
    WavesDivGrey,
    ItemProyecto,
    CarouselProyecto,
  },
  computed : {
    ...mapState (['clients'])
  }

}
</script>