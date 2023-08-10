<template>
  <div id="carouselBrands" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-touch="true">
    <div class="carousel-inner carousel-inner-logos">
      <div class="carousel-item active carousel-item-logos">
        <img src="../assets/clients_logos/lavandaclean-logo.png" class="img-fluid" alt="">
      </div>
      <div class="carousel-item carousel-item-logos">
        <img src="../assets/clients_logos/makuwool-logo.png" class="img-fluid" alt="">
      </div>
      <div class="carousel-item carousel-item-logos">
        <img src="../assets/clients_logos/ripp-logo.png" class="img-fluid" alt="">
      </div>
      <div class="carousel-item carousel-item-logos">
        <img src="../assets/clients_logos/setup-logo.png" class="img-fluid" alt="">
      </div>
        <!--<div class="row">
          <div class="col-md-3">
            <img src="../assets/clients_logos/lavandaclean-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-3">
            <img src="../assets/clients_logos/makuwool-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-3">
            <img src="../assets/clients_logos/ripp-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-md-3">
            <img src="../assets/clients_logos/setup-logo.png" class="img-fluid" alt="">
          </div>
        </div>
        <div v-for="(group, index) in carouselItems" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
          <div class="row">
            <div v-for="(item, index) in group" :key="index" class="col-md-3">
              <img src="" class="" alt="">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
    <div class="carousel-inner d-block d-md-none">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-12">
            <img src="../assets/clients_logos/lavandaclean-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-12">
            <img src="../assets/clients_logos/makuwool-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-12">
            <img src="../assets/clients_logos/ripp-logo.png" class="img-fluid" alt="">
          </div>
          <div class="col-12">
            <img src="../assets/clients_logos/setup-logo.png" class="img-fluid" alt="">
          </div>
        </div>
      </div>-->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselBrands" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselBrands" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'

export default ({
  name: "CarouselLogos",
  computed: {
    ...mapState(["itemsPerSlide"]),
    ...mapGetters(["carouselItems"]),
  }
})
</script>

