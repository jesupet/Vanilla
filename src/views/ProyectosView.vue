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
    <div id="proyectos" class="container">
       <ItemProyecto/>
    </div>  
  </div>
</template>

<script>
import WavesDiv from '../components/WavesDiv.vue'
import WavesDivGrey from '../components/WavesDivGrey.vue'
import ItemProyecto from '../components/ItemProyecto.vue'


export default {
  name: 'ProyectosView',
  components: {
    WavesDiv,
    WavesDivGrey,
    ItemProyecto,

  }

}
</script>