<template>
  <div class="text-center pb-4 big-cont">
    <div class="circle-box text-center">
      <div>
        <h4 class="tittle4 purple-font">¿Necesitas refrescar la imagen de tu negocio?</h4>
      </div>
    </div>
    <div class="text-center cont-btn">
      
      <PurpleButton :to="'/'" :buttonText="'Hablemos!'" :class="'btn-purple-hover'"/>
    </div>
  </div>
</template>

<script>
import PurpleButton from './buttons/PurpleButton.vue'
export default {
  name: "CircleCTA",
  components: {
    PurpleButton,
  },
  computed: {
    
  },
}
</script>

