<template>
  <div class="text-center pb-4 big-cont">
    <div class="circle-box text-center">
      <div>
        <h4 class="tittle4 purple-font">¿Necesitas refrescar la imagen de tu negocio?</h4>
      </div>
    </div>
    <div class="text-center cont-btn">
      
      <PurpleButton 
        :buttonText="'Hablemos!'" 
        :class="'btn-purple-hover'"
        data-tally-open="w8LOkx" 
        data-tally-layout="modal" 
        data-tally-width="384" 
        data-tally-align-left="1" 
        data-tally-emoji-text="👋" 
        data-tally-emoji-animation="wave" 
        data-tally-auto-close="2000"
      />
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

