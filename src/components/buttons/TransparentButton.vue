<template>
  <button type="button" class="btn btn-transparent rounded-pill my-auto">
    <router-link :to="to">{{buttonText}}</router-link>
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

<style scoped>
.btn-transparent {
  border: 1px solid #fff;
  padding: 5px 40px;
  color: #fff;
  font-size: 25px;
  letter-spacing: 0.1em;
  margin: 60px;
}
button:hover {
  text-decoration: none;
  color: #fff; /* Reemplaza "red" con el color que desees */
  background-color: #6d44bc;
  border: 0px;
}

</style>