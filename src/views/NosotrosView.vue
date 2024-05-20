<template>
  <NavbarVanilla/>
  <div>
    <div class="main-title">
      <h1 class="tittle5">Nosotros</h1>
    </div>
    <WavesDiv class="less-margin"/>
    <div class="mision">
      <div class="container">
        <p>“Transformamos una <span class="purple-font">idea estratégica</span> en un <span class="purple-font">diseño genial y creativo</span>, manteniendo una relación de confianza y compromiso con nuestros clientes.”</p>
      </div>
    </div>
    <WavesDivGrey/>
  </div>
  <FooterVanilla/>
</template>

<script>
import NavbarVanilla from '../components/main-components/NavbarVanilla.vue'
import FooterVanilla from '../components/main-components/FooterVanilla.vue'
import WavesDiv from '../components/WavesDiv.vue'
import WavesDivGrey from '../components/WavesDivGrey.vue'

export default {
  name: 'HomeVanilla',
  components: {
    NavbarVanilla,
    FooterVanilla,
    WavesDiv,
    WavesDivGrey,
  }

}
</script>