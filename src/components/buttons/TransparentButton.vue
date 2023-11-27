<template>
  <button type="button" class="btn btn-transparent rounded-pill my-auto">
    <a :href="to" target="_blank">{{buttonText}}</a>
  </button>
</template>

<script>

export default {
  name: 'TransparentButton',
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

