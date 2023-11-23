<template>
   <div class="card card-prehome-white align-items-center">
    <div class="card-body text-center">
      <h2 class="tittle1 purple-font">{{title}}</h2>
      <p class="card-text black-font">{{text}}</p>
      <PurpleButton :buttonText="'Ir ahora!'" :class="(displayPurple)" class="old-website-btn" :to="'https://vanilla.cl/antiguo'"/>
      <GreenButton :buttonText="'¡Hablemos!'" :class="(displayGreen)" class="wsp-btn" :to="'https://api.whatsapp.com/send/?phone=56988625328&text=Hola%21+Me+gustar%C3%ADa+saber+m%C3%A1s+sobre+Vanilla&type=phone_number&app_absent=0'"/>
    </div>
  </div>
</template>

<script>
import PurpleButton from './buttons/PurpleButton.vue'
import GreenButton from './buttons/GreenButton.vue'

export default {
  name: "CardPreHomeWhite",
  computed: {
    
  },
  components: {
    PurpleButton,
    GreenButton,
  },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default: 'card text'
    },
    displayPurple: {
      type: String,
      default: 'd-none'
    },
    displayGreen: {
      type: String,
      default: 'd-none'
    },
  }
}
</script>
