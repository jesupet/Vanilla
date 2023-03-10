<template>
    <div class="card text-center mx-auto client-card" v-for="(client, index) in firstThreeClients" :key="index" :class="client.bgcolor">
      <div class="card-body">
        <div class="box-img">
          <img src="../assets/clients_img/v_irarrazaval.png" alt="">
        </div>
        <div>
          <h4 class="card-title tittle">{{client.company}}</h4>
          <h5 class="card-title">{{client.name}}</h5>
        </div>
        <p class="card-text">{{client.review}}</p>
      </div>
    </div>
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