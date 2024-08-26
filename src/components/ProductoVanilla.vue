<template>
  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor('#1b1629', 1)" @mouseleave="changeArrowColor('white', 1)">
    <div class="card-body text-center">
      <img class="prod-icon" src="../assets/prod_icons/id_corp_icon.svg" alt="" ref="prodIcon1">
      <div class="title-box">
        <h5 class="card-title tittle4">Branding e identidad visual</h5>
      </div>
      <p class="card-text">¡Por aquí comienza todo y tu logo no lo es todo! Tu negocio necesita reflejar todo lo que es, lo que representa y seguir una línea grafica coherente.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight" class="arrow-right"/>
      </div>
    </div>
  </div>

  <div class="card text-center product-card mx-auto" @mouseover="changeArrowColor('#1b1629', 2)" @mouseleave="changeArrowColor('white', 2)">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/dis_dig_icon.svg" alt="" ref="prodIcon2">
      <div class="title-box">
        <h5 class="card-title tittle4">Diseño digital</h5>
      </div>
      <p class="card-text">Uff, el mundo de lo digital seguro te tiene de cabeza. Y si! pues hay que estar y ojalá de la mejor manera pues la competencia es ardua.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight2"/>
      </div>    
    </div>
  </div>

  <div class="card text-center product-card-black mx-auto" @mouseover="changeArrowColor('#1b1629', 3)" @mouseleave="changeArrowColor('white', 3)">
    <div class="card-body">
      <img class="prod-icon" src="../assets/prod_icons/ap_agen_icon.svg" alt="" ref="prodIcon3">
        <div class="title-box">
          <h5 class="card-title tittle4">Apoyo agencias</h5>
        </div>
        <p class="card-text">A lo largo de los años hemos apoyado a diferentes agencias y áreas de marketing de grandes empresas, que en algunos periodos necesitan externalizar sus proyectos.</p>
      <div class="arrow-cont">
        <ArrowRight :to="'/'" ref="arrowRight3"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ArrowRight from './buttons/ArrowRight.vue';

export default {
  name: "ProductoVanilla",
  components: {
    ArrowRight
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(['firstThreeElements'])
  },
  methods: {
    changeArrowColor(color, cardIndex) {
      const arrowRefs = {
        1: this.$refs.arrowRight,
        2: this.$refs.arrowRight2,
        3: this.$refs.arrowRight3,
      };
      
      const iconRefs = {
        1: this.$refs.prodIcon1,
        2: this.$refs.prodIcon2,
        3: this.$refs.prodIcon3,
      };
      
      // Cambia el color del arrow
      arrowRefs[cardIndex].$el.querySelectorAll('path').forEach(path => {
        path.style.stroke = color;
      });

      // Cambia el ícono
      if (cardIndex === 1) {
        iconRefs[cardIndex].src = color === '#1b1629' ? require('@/assets/prod_icons/id_corp_icon_hover.svg') : require('@/assets/prod_icons/id_corp_icon.svg');
      } else if (cardIndex === 2) {
        iconRefs[cardIndex].src = color === '#1b1629' ? require('@/assets/prod_icons/dis_dig_icon_hover.svg') : require('@/assets/prod_icons/dis_dig_icon.svg');
      } else if (cardIndex === 3) {
        iconRefs[cardIndex].src = color === '#1b1629' ? require('@/assets/prod_icons/ap_agen_icon_hover.svg') : require('@/assets/prod_icons/ap_agen_icon.svg');
      }
    }
  }
}
</script>

