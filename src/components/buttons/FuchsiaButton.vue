<template>
  <button 
    type="button"
    class="btn btn-fuchsia rounded-pill"
  >
    <router-link :to="to">{{buttonText}}</router-link>
  </button>
</template>

<script>

export default {
  name: 'FuchsiaButton',
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
