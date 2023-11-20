<template>
  <button type="button" class="btn btn-green rounded-pill">
    <router-link :to="to">{{buttonText}}</router-link>
  </button>
</template>

<script>

export default {
  name: 'GreenButton',
  props: {
    to: {
      type: String,
      default: '/'
    },
    buttonText: {
      type: String,
      default: 'Button'
    }
  }
}
</script>
