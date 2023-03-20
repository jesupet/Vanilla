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
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Source+Serif+Pro:wght@400;700&display=swap');


* {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  list-style: none;
}
nav {
  padding: 30px;
}
p { 
  margin: 0px;
}
a, ul{
  color: inherit;
  text-decoration: none;
}
.tittle1 {
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
  font-size: 75px;
  line-height: 71px;
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
.uppercase {
  text-transform: uppercase;
}
.reflect-y {
  transform: scaleY(-1);
}
.no-bold {
  font-weight: 300;
}
.tittle2 {
  font-family: 'Source Serif Pro', serif;
  font-size: 55px;
  margin: 0px;
}
.bold {
  font-weight: 700;
}

a:hover, button:hover router-link a{
  text-decoration: none;
  color: inherit
}
.tittle3 {
  font-family: 'Source Serif Pro', serif;
  font-size: 50px;
  margin: 0px;
  font-weight: 700;
}
.tittle4 {
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
  font-size: 75px;
}
.purple-little-circle {
    position: absolute;
    z-index: 100;
    right: 0px;
    overflow: hidden;
  }
</style>
