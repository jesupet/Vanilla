<template>
  <div id="carouselBrands" class="carousel carousel-dark slide multiple-item-carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div v-for="(group, index) in carouselItems" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
          <div class="row">
            <div v-for="(item, index) in group" :key="index" class="col-md-3">
              <img :src="'../assets/clients_logos/'+item.name" class="" alt="">
              {{item.name}}
            </div>
          </div>
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
import { mapState, mapGetters} from 'vuex'

export default ({
  name: "CarouselLogos",
  props: {
    
  },
  computed: {
      ...mapState(["itemsPerSlide"]),
      ...mapGetters(["carouselItems"])
    },
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