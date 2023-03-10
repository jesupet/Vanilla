<template>
  <button type="button" class="btn btn-purple rounded-pill">
    <router-link :to="to">{{buttonText}}</router-link>
  </button>
</template>

<script>

export default {
  name: 'PurpleButton',
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

<style scoped>
.btn-purple {
  background-color: #6d44bc;
  color: #fff;
  font-size: 14px;
  padding: 10px 24px 10px 24px;
  text-transform: uppercase;
}
button:hover {
  text-decoration: none;
  color: #6d44bc; /* Reemplaza "red" con el color que desees */
  background-color: #fff;
  border-color:#6d44bc;
}

</style>