<template>
  <PreHeaderVanilla/>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo-navbar" src="../../assets/vanilla_logos/logo_vanilla_navbar.png" alt="logo vanilla"></a>
      <button 
        class="navbar-toggler navbar-dark" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link 
            class="nav-link align-middle" 
            aria-current="page" 
            to="/home">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link"
            aria-current="page" 
            :to="'/nosotros'" >
              Nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link" 
            :to="'/servicios/branding'"  >
              ¿Qué Hacemos?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
            class="nav-link" 
            :to="'/proyectos'">
              Proyectos y Clientes
            </router-link>
          </li>
          <li class="nav-item">
            <PurpleButton 
              :to="'/'" 
              :buttonText="'Hablemos!'" 
              data-tally-open="w8LOkx" 
              data-tally-layout="modal" 
              data-tally-width="384" 
              data-tally-align-left="1" 
              data-tally-emoji-text="👋" 
              data-tally-emoji-animation="wave" 
              data-tally-auto-close="2000"
            />
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
