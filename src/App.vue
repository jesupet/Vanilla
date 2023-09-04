<template>
  <div id="app">
    <NavbarVanilla/>
    <router-view/>
    <FooterVanilla>
    <img src="./assets/purple-little-circle.png" alt="circulo morado" class="purple-little-circle">
    </FooterVanilla>
  </div>
</template>

<script>
import NavbarVanilla from './components/main-components/NavbarVanilla.vue'
import FooterVanilla from './components/main-components/FooterVanilla.vue'

export default {
  name: "App",
  components: { NavbarVanilla, FooterVanilla}
}
</script>


<style>
.purple-little-circle {
    position: absolute;
    z-index: 100;
    right: 0px;
    overflow: hidden;
  }
</style>
