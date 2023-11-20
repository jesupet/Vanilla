<template>
   <div class="card card-prehome-white align-items-center">
    <div class="card-body text-center">
      <h2 class="tittle1 purple-font">{{title}}</h2>
      <p class="card-text black-font">{{text}}</p>
      <PurpleButton :buttonText="buttonText" :class="'btnColor'"/>
    </div>
  </div>
</template>

<script>
import PurpleButton from './buttons/PurpleButton.vue'

export default {
  name: "CardPreHomeWhite",
  computed: {
    
  },
  components: {
    PurpleButton,
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
    buttonText: {
      type: String,
      default: 'button text'
    },
    btnColor: {
      type: String,
      default: '#6D44BC'
    }
  }
}
</script>
