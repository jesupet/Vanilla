<template>
  <button type="button" class="btn btn-green rounded-pill">
    <a :href="to" target="_blank">{{buttonText}}</a>
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
