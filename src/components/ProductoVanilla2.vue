<template>
  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor('#1b1629')" @mouseleave="changeArrowColor('white')">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/as_vis_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Diseño gráfico</h5>
      </div>
      <p class="card-text">Tal vez lo tuyo comienza por aquí, para que tengas claridad de donde está posicionado visual y digitalmente tu negocio,  hasta sugerencias de qué hacer.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight"/>
      </div>
    </div>
    
  </div>
  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor2('#1b1629')" @mouseleave="changeArrowColor2('white')">
    <div class="card-body">
      <img class="my-3" src="../assets/prod_icons/ecom_shop_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Diseño Web</h5>
      </div>
      <p class="card-text">Porque es fundamental estar presente en el entorno web, diseñamos y desarrollamos tu sitio web en línea con tu identidad visual y todo eso que quieres transmitir a tu cliente ideal.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight2"/>
      </div>
    </div>
  </div>
  <div class="card text-center product-card-white mx-auto" @mouseover="changeArrowColor3('white')" @mouseleave="changeArrowColor3('black')">
    <div class="card-body">
      <img class="my-3" src="../assets/prod_icons/slang_negro.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Estrategia de Marketing</h5>
      </div>
      <p class="card-text">Creemos fielmente que “pastelero a tus pasteles” y por ello nos asociamos con expertos en eccomerce para crear soluciones a tus requerimientos con los mejores.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" class="arrow_right_black" ref="arrowRight3"/>
      </div>
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
  methods: {
    changeArrowColor(color) {
      this.$refs.arrowRight.$el.querySelectorAll('path').forEach(path => {
        path.style.stroke = color; // Cambia el color del stroke de todos los elementos path del componente ArrowRight
      });
    },
    changeArrowColor2(color) {
      this.$refs.arrowRight2.$el.querySelectorAll('path').forEach(path => {
        path.style.stroke = color; // Cambia el color del stroke de todos los elementos path del componente ArrowRight
      });
    },
    changeArrowColor3(color) {
      this.$refs.arrowRight3.$el.querySelectorAll('path').forEach(path => {
        path.style.stroke = color; // Cambia el color del stroke de todos los elementos path del componente ArrowRight
      });
    },
  }
}
</script>


<style scoped>
  
</style>