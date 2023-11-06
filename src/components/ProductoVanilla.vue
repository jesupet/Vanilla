<template>
  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor('#1b1629')" @mouseleave="changeArrowColor('white')">
    <div class="card-body text-center">
      <img class="prod-icon" src="../assets/prod_icons/id_corp_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Identidad corporativa</h5>
      </div>
      <p class="card-text">¡Por aquí comienza todo y tu logo no lo es todo! Tu negocio necesita reflejar todo lo que es, lo que representa y seguir una línea grafica coherente.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight" class="arrow-right"/>
      </div>
    </div>
  </div>
  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor2('#1b1629')" @mouseleave="changeArrowColor2('white')">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/dis_dig_icon.png" alt="">
      <div class="title-box">
        <h5 class="card-title tittle4">Diseño digital</h5>
      </div>
      <p class="card-text">Uff, el mundo de lo digital seguro te tiene de cabeza. Y si! pues hay que estar y ojalá de la mejor manera pues la competencia es ardua.</p>
      <div class="arrow-cont">
      <ArrowRight :to="'/'" ref="arrowRight2"/>
    </div>    
    </div>
  </div>
  <div class="card text-center product-card-black mx-auto" @mouseover="changeArrowColor3('#1b1629')" @mouseleave="changeArrowColor3('white')">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/ap_agen_icon.png" alt="">
        <div class="title-box">
          <h5 class="card-title tittle4">Apoyo agencias</h5>
        </div>
        <p class="card-text">A lo largo de los años hemos apoyado a diferentes agencias y áreas de marketing de grandes empresas, que en algunos periodos necesitan externalizar sus proyectos.</p>
    <div class="arrow-cont">
      <ArrowRight :to="'/'" ref="arrowRight3"/>
    </div>
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
import ArrowRight from './buttons/ArrowRight.vue'

export default {
  name: "ProductoVanilla",
  components :{
    ArrowRight
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['firstThreeElements'])
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
    }
  }
}
</script>
