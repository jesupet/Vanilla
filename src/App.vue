<template>
  <div id="app">
    <NavbarVanilla/>
    <router-view/>
    <FooterVanilla/>
  </div>
</template>

<script>
import NavbarVanilla from './components/main-components/NavbarVanilla.vue'
import FooterVanilla from './components/main-components/FooterVanilla.vue'

export default {
  name: "App",
  components : {
    NavbarVanilla,
    FooterVanilla
  }
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
