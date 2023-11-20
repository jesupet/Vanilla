<template>
   <div class="card card-prehome-white align-items-center">
    <div class="card-body text-center">
      <h2 class="tittle1 purple-font">{{title}}</h2>
      <p class="card-text black-font">{{text}}</p>
      <PurpleButton :buttonText="'Ir ahora!'" :class="(displayPurple)"/>
      <GreenButton :buttonText="'¡Hablemos!'" :class="(displayGreen)"/>
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
