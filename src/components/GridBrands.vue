<template>
  <div class="container my-5">
    <div class="row mx-auto">
    <div class="col-4 box">
      <img src="../assets/projects_img/lavanda_clean_sq.png" alt="">
    </div>
    <div class="col-8 box">
      <img src="../assets/projects_img/lavanda_clean.png" alt="">
    </div>
  </div>
  <div class="row mx-auto">
    <div class="col-8 box">
      <img src="../assets/projects_img/ripp.png" alt="">
    </div>
    <div class="col-4 box">
      <img src="../assets/projects_img/makuwool_sq.png" alt="">
    </div>
    </div>
    <div class="row mx-auto">
    <div class="col-4 box">
      <img src="../assets/projects_img/setup_sq.png" alt="">
    </div>
    <div class="col-8 box">
      <img src="../assets/projects_img/setup.png" alt="">
    </div>
    </div>
  </div>
  <button type="button" class="btn btn-purple rounded-pill">
    <router-link class="nav-link" to="/home">Ver todos</router-link>
  </button>
</template>

<script>


export default {
  name: "GridBrands",
  computed: {
    
  },
}
</script>


<style scoped>
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}
.box {
  padding: 8px;
  box-sizing: border-box;
}
</style>