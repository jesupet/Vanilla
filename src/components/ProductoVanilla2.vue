<template>
  <div class="card text-center product-card mx-auto">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/as_vis_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Asesoría Visual y Digital</h5>
      </div>
      <p class="card-text">Tal vez lo tuyo comienza por aquí, para que tengas claridad de donde está posicionado visual y digitalmente tu negocio,  hasta sugerencias de qué hacer.</p>
    </div>
    <div class="d-flex justify-content-center align-content-center arrow-cont">
      <ArrowRight :to="'/'"/>
    </div>
  </div>
  <div class="card text-center product-card-white mx-auto">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/ecom_shop_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Ecommerce en Shopify</h5>
      </div>
      <p class="card-text">Creemos fielmente que “pastelero a tus pasteles” y por ello nos asociamos con expertos en eccomerce para crear soluciones a tus requerimientos con los mejores.</p>
    </div>
    <div class="d-flex justify-content-center align-content-center arrow-cont">
      <ArrowRight :to="'/'" class="arrow-right arrow_right_black"/>
    </div>
  </div>
<!--
  <div class="card text-center product-card mx-auto" v-for="(product, index) in nextThreeElements" :key="index">
  <div class="card-body">
    <img class="prod-icon" :src='product.icon' alt="">
    <div class="title-box">
      <h5 class="card-title tittle4">{{product.name}}</h5>
    </div>
    <p class="card-text">{{product.description}}</p>
    <a href="" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
  </div>
</div>
-->
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ArrowRight from './buttons/ArrowRight.vue'

export default {
  name: "ProductoVanilla2",
  components :{
    ArrowRight
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['nextThreeElements'])
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
    background-color: #6d44bc;
    color: #fff;
    border-radius: 25px;
    margin-bottom: 53px;
  }
  .prod-icon {
    width: 25%;
    margin-top: 10px;
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
  .product-card-white {
    width: 360px;
    height: 360px;
    background-color: #fff;
    color: #000;
    border-radius: 25px;
    margin-bottom: 53px;
    border: 1px solid #000;
  }
</style>