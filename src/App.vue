<template>
  <div id="app">
    
    <router-view/>
    
    <!--<img src="../assets/purple-little-circle.png" alt="circulo morado" class="purple-little-circle">-->
  </div>
</template>

<script>


export default {
  name: "App",
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
