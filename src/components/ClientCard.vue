<template>
  <div class="card text-center mx-auto client-card whitebg">
    <div class="card-body">
      <div class="box-img">
        <img src="../assets/clients_img/v_irarrazaval.png" alt="">
      </div>
      <div>
        <h4 class="card-title tittle4">Remax Central</h4>
        <h5 class="card-title">Verónica Irarrázaval</h5>
      </div>
      <p class="card-text">e encantó trabajar con Vanilla, ya que rápidamente captaron la idea de lo que estábamos buscando, con una excelente disposición a encontrar las soluciones de nuestros requerimientos.</p>
    </div>
  </div>
  <div class="card text-center mx-auto client-card purplebg">
    <div class="card-body">
      <div class="box-img">
        <img src="../assets/clients_img/p_rojas.png" alt="">
      </div>
      <div>
        <h4 class="card-title tittle4">Antara Mining</h4>
        <h5 class="card-title">Patricio Rojas Ábalos</h5>
      </div>
      <p class="card-text">Un gran servicio, muy personalizado y de alto nivel. En Antara Mining estamos muy contentos. Totalmente recomendable!</p>
    </div>
  </div>
  <div class="card text-center mx-auto client-card whitebg">
    <div class="card-body">
      <div class="box-img">
        <img src="../assets/clients_img/n_henriquez.png" alt="">
      </div>
      <div>
        <h4 class="card-title tittle4">Optimmet</h4>
        <h5 class="card-title">Natacha Henriquez</h5>
      </div>
      <p class="card-text">En Vanilla inmediatamente me acogieron y comenzaron a trabajar. Hemos trabajado en proyectos de ingeniería que requerían Diseño, entre ellos Manuales, Procedimientos y Gestión Visual, todos con excelentes resultados</p>
    </div>
  </div>
  <!--
  <div class="card text-center mx-auto client-card" v-for="(client, index) in firstThreeClients" :key="index" :class="client.bgcolor">
    <div class="card-body">
      <div class="box-img">
        <img src="../assets/clients_img/v_irarrazaval.png" alt="">
      </div>
      <div>
        <h4 class="card-title tittle4">{{client.company}}</h4>
        <h5 class="card-title">{{client.name}}</h5>
      </div>
      <p class="card-text">{{client.review}}</p>
    </div>
  </div>-->
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "ClientCard",
  computed: {
    ...mapState(["clients"]),
    ...mapGetters(['firstThreeClients'])
  },
}
</script>


<style scoped>
  .client-card {
    background-color: #fff;
    color: #000;
    border: 0px;
    border-radius: 25px;
    margin: 53px 0px;
    width: 23rem;
    box-shadow: 10px 10px rgb(203, 201, 201);
  }
  .card-body {
    padding: 50px;
  }
  .card-title {
    font-size: 20px;
  }
  h5 {
    font-family: 'Source Serif Pro', serif;
    font-weight: 300px;
  }
  .card-text {
    font-size: 15px;
  }
  .box-img{
    padding: 20px;
  }
  .whitebg {
    background-color: #fff;
    color: #000;
  }
  .purplebg {
    background-color: #6d44bc;
    color: #fff;
  }
</style>