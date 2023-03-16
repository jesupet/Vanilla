<template>
  <div class="card text-center product-card mx-auto">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/id_corp_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Identidad corporativa</h5>
      </div>
      <p class="card-text">¡Por aquí comienza todo y tu logo no lo es todo! Tu negocio necesita reflejar todo lo que es, lo que representa y seguir una línea grafica coherente.</p>
      <a href="/" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
    </div>
  </div>
  <div class="card text-center product-card mx-auto">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/dis_dig_icon.png" alt="">
        <div class="title-box">
          <h5 class="card-title tittle4">Diseño digital</h5>
        </div>
        <p class="card-text">Uff, el mundo de lo digital seguro te tiene de cabeza. Y si! pues hay que estar y ojalá de la mejor manera pues la competencia es ardua.</p>
        <a href="/" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
    </div>
  </div>
  <div class="card text-center product-card-black mx-auto">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/ap_agen_icon.png" alt="">
        <div class="title-box">
          <h5 class="card-title tittle4">Apoyo agencias</h5>
        </div>
        <p class="card-text">A lo largo de los años hemos apoyado a diferentes agencias y áreas de marketing de grandes empresas, que en algunos periodos necesitan externalizar sus proyectos.</p>
        <a href="/" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
    </div>
  </div>
  <!--<div class="card text-center product-card mx-auto" v-for="(product, index) in firstThreeElements" :key="index">
    <div class="card-body">
      <img class="prod-icon" :src='"vanilla"+product.icon' alt="">
        <div class="title-box">
          <h5 class="card-title tittle4">{{product.name}}</h5>
        </div>
        <p class="card-text">{{product.description}}</p>
        <a href="/" class="arrow_right"><font-awesome-icon icon="fa-arrow-right" size="3x"/></a>
    </div>
  </div>
  -->
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
  .arrow_right {
    color: #fff;
    padding-top: 20px;
    display: inline-block;
    text-align: center;
  }
  .product-card-black {
    width: 360px;
    height: 360px;
    box-sizing: border-box;
    background-color: #000;
    color: #fff;
    border-radius: 25px;
    margin-bottom: 53px;
  }
</style>