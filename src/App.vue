<template>
  <div id="app">
    <NavbarVanilla/>
    <router-view/>
    <FooterVanilla/>
  </div>
</template>

<script>
import NavbarVanilla from './components/NavbarVanilla.vue'
import FooterVanilla from './components/FooterVanilla.vue'

export default {
  name: "App",
  components: { NavbarVanilla, FooterVanilla}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Source+Serif+Pro:wght@400;700&display=swap');


* {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
}

nav {
  padding: 30px;
}

.tittle {
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
}
.white-font {
  color:#fff;
}
.purple-font {
  color: #6d44bc;
}
.btn-purple {
  background-color: #6d44bc;
  color: #fff;
  font-size: 14px;
  padding: 10px 24px 10px 24px;
}
</style>
