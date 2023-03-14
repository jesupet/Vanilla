<template>
  <div class="card text-center product-card mx-auto" v-for="(product, index) in firstThreeElements" :key="index">
    <div class="card-body">
      <img class="prod-icon" :src='"vanilla"+product.icon' alt="">
      <div class="title-box">
        <h5 class="card-title tittle">{{product.name}}</h5>
      </div>
      <p class="card-text">{{product.description}}</p>
      <a href="/home" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "ProductoVanilla",
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['firstThreeElements'])
  },
}
</script>


<style scoped>
.card-body {
    padding-right: 20px;
    padding-left: 20px;
  }
  .product-card {
    width: 360px;
    height: 360px;
    box-sizing: border-box;
    background-color: #6d44bc;
    color: #fff;
    border-radius: 25px;
    margin-bottom: 53px;
  }
  .prod-icon {
    width: 25%;
  }
  .title-box {
    padding: 1rem 3rem 0rem 3rem;
    text-align: center;
  }
  .card-title {
    font-size: 30px;
  }
  .card-text {
    font-size: 15px;
  }
  .arrow_right {
    color: #fff;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
  }
</style>