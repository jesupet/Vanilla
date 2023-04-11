<template>
  <div class="container my-5 d-none d-xl-block">
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
</template>

<script>

export default {
  name: "GridBrands",
  components: {

  },
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
  opacity: 1;
  transition: 0.3s;
}
.box:hover img {
  opacity: 80%;
}
.box {
  padding: 8px;
  box-sizing: border-box;
}
</style>