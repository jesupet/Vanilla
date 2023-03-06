<template>
  <div class="circle-box text-center">
    <div>
      <h4 class="tittle purple-font">¿Necesitas refrescar la imagen de tu negocio?</h4>
    </div>
  </div>
  <div class="text-center cont-btn">
    <button type="button" class="btn btn-purple rounded-pill">
      <router-link class="nav-link" to="/home">Hablemos!</router-link>
    </button>
  </div>
</template>

<script>


export default {
  name: "CircleCTA",
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
.tittle {
  font-size: 40px;
  line-height: 2rem;
}
.cont-btn {
  position: relative;
}
.btn-purple {
  position: absolute;
  top: -20px;
  right: 25%;
}
</style>