<template>
   <div class="card card-prehome align-items-center">
     <div class="white-box"><p class="fuchsia-text">¡NUEVO! Cupos limitados</p></div>
    <div class="card-body text-center">
      <img src="../assets/cohete.svg" alt="cohete">
      <p class="card-text white-font">Tu negocio merece un <br><span class="tittle1 medium-title">landing page</span><br> que refleje lo genial que es!</p>
      <FuchsiaButton :buttonText="'¡Lo necesito!'"/>
    </div>
  </div>
</template>

<script>
import FuchsiaButton from './buttons/FuchsiaButton.vue'

export default {
  name: "CardPreHome",
  computed: {
    
  },
  components: {
    FuchsiaButton,
  }
}
</script>
