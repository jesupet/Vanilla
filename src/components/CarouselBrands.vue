<template>
 <div id="carouselExampleIndicators" class="carousel slide my-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/projects_img/lavanda_clean_sq.png" class="d-block w-70 mx-auto" alt="lavanda clean logo">
          </div>
          <div class="carousel-item">
            <img src="../assets/projects_img/lavanda_clean.png" class="d-block w-70 mx-auto" alt="lavanda clean tarjetas presentacion">
          </div>
          <div class="carousel-item">
            <img src="../assets/projects_img/makuwool_sq.png" class="d-block w-70 mx-auto" alt="makuwool tarjeta presentacion">
          </div>
        </div>
      </div>
</template>

<script>


export default {
  name: "CarouselBrands",
  computed: {
    
  },
}
</script>


<style scoped>
.carousel {
  width: 358px;
  height: 358px;
  margin: auto;
}
.carousel-inner {
    border-radius: 8%;
    width: 358px;
    height: 358px;
}
.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
</style>