<template>
  <div class="text-center">
    <div class="circle-box text-center">
      <div>
        <h4 class="tittle4 purple-font">¿Necesitas refrescar la imagen de tu negocio?</h4>
      </div>
    </div>
    <div class="text-center cont-btn">
      
      <PurpleButton :to="'/'" :buttonText="'Hablemos!'"/>
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


<style scoped>
.circle-box {
  width: 300px;
  height: 300px;
  border: 1px solid #6d44bc;
  border-radius: 50%;
  padding: 40px;
  display: inline-flex;
  align-items: center;
}
.tittle4 {
  font-size: 40px;
  line-height: 2rem;
}
.cont-btn {
  position: relative;
}
.btn-purple {
  margin-top: -25px;
}
</style>