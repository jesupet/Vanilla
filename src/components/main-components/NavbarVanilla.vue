<template>
  <PreHeaderVanilla/>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo-navbar" src="../../assets/vanilla_logos/logo_vanilla_navbar.png" alt="logo vanilla"></a>
      <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link 
            class="nav-link align-middle" 
            aria-current="page" 
            to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link"
            aria-current="page" 
            :to="{name: 'home', hash: '#'+'nosotros'}" >
              Nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link" 
            :to="{name: 'home', hash: '#'+'lo-que-hacemos'}"  >
              ¿Qué Hacemos?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link" 
            :to="{name: 'home', hash: '#'+'proyectos'}">
              Proyectos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link" 
            :to="{name: 'home', hash: '#'+'clientes'}">
              Han Confiado
            </router-link>
          </li>
          <li class="nav-item">
            <PurpleButton :to="'/'" :buttonText="'Hablemos!'"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import PreHeaderVanilla from './PreHeaderVanilla.vue'
import PurpleButton from '../buttons/PurpleButton.vue'

export default {
  components: { 
    PreHeaderVanilla,
    PurpleButton
  },
}
</script>
