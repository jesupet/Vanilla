<template>
  <WavesDiv class="reflect-y"/>
  <footer>
    <div class="row pt-5">
      <div class="col-md-6 col-12 row text-end">
        <div class="col-6">
          <img src="../../assets/vanilla_logos/logo-vanilla-bajada.png" alt="logo con bajada">
          <div class="rrss-cont justify-content-end">
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/facebook-purple-logo.png" alt="facebook logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/instagram-purple-logo.png" alt="instagram logo"></a>
            </div>
            <div class="p-1 d-inline">
              <a href=""><img src="../../assets/rrss_logos/linkedin-purple-logo.png" alt="linkedin logo"></a>
            </div>
          </div>          
        </div>
        <div class="col-6">
          COL2
        </div>
      </div>
      <div class="col-md-6 col-12">
        COL3
      </div>
    </div> 
  </footer>
</template>

<script>
import WavesDiv from '../WavesDiv.vue'

export default {
  name: "FooterVanilla",
  components: {
    WavesDiv,
  }
}

</script>
<style scoped>
  footer {
    background-color: #1b1629;
    color: #fff;
    height: 500px;
  }
  .reflect-y {
    transform: scaleY(-1);
  }
  .rrss-cont {
    margin-top: 20px;
  }
</style>