<template>
  <div class="container">
    <div class="row pre-header">
      <div class="col-md-8 col-2 d-flex justify-content-between">
        <p class="text-pre-header">¡Creamos identidades profesionales adaptadas a todo el ecosistema digital de necesitas!</p>
      </div>
      <div class="col-md-4 col-10 d-flex justify-content-end">
        <p>+56 9 8862 5328</p>
        <a href="" class="num-contacto"><img src="../../assets/rrss_logos/whatsapp_icon.png" alt="" class="wsp-icon"></a>
      </div>
    </div>
  </div>
</template>

<script>

export default{
   name: "PreHeaderVanilla",
}
</script>

<style scoped>
   .pre-header {
    font-size: 15px;
  }
  @media (max-width: 800px) {
      .text-pre-header {
        display: none
      }
      .burger-menu {
        display: inline-block;
      }
  }
  .wsp-icon {
    width: 20px;
  }
</style>