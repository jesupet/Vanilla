<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid mt-4">
      <a class="navbar-brand" href="#"><img class="logo-navbar" src="../assets/logo_vanilla_navbar.png" alt="logo vanilla"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link align-middle" aria-current="page" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">¿Qué Hacemos?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Han Confiado</router-link>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-purple rounded-pill">
              <router-link class="nav-link" to="/home">Hablemos!</router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
  nav {
    background-color: #1b1629;
    color: #fff;
    
    height: 75px;
  }
  .logo-navbar {
    height: 70px;
    width: auto;
    margin-top: 30px;
    margin-left: 40px;
  }
  .nav-item {
    padding: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .nav-link {
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0px;
  }
  .rounded-pill {
    text-align: center;
  }
</style>