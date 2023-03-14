<template>
  <div id="carouselBrands" class="carousel carousel-dark slide">
    <div class="carousel-inner">
      <div class="carousel-item active row d-flex">
        <div class="col-3">
          <img src="../assets/clients_logos/lavandaclean_logo.png" class="" alt="">
        </div>
        <div class="col-3">
          <img src="../assets/clients_logos/makuwool_logo.png" class="" alt="">
        </div>
        <div class="col-3">
          <img src="../assets/clients_logos/ripp_logo.png" class="" alt="">
        </div>
        <div class="col-3">
          <img src="../assets/clients_logos/setup_logo.png" class="" alt="">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

export default ({
  name: "CarouselLogos",
})
</script>

<style scoped>
#carouselBrands {
  margin: 100px 0px 50px;
}
.carousel-inner {
  padding: 70px;
}
</style>