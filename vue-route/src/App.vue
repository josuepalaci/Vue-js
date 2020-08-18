<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/servicios">Servicios</router-link> |
      <router-link to="/fotos">Fotos</router-link>
    </div> -->

    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name:'About'}">About</b-nav-item>
            <b-nav-item :to="{name:'servicios'}">Servicios</b-nav-item>
            <b-nav-item :to="{name:'fotos'}">Fotos</b-nav-item>
            <b-nav-item :to="{name:'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name:'card'}">Card</b-nav-item>
            <b-nav-item :to="{name:'form'}">Form</b-nav-item>
          </b-navbar-nav>


        </b-collapse>
      </b-container>
    </b-navbar>
    
    <b-container>
    <router-view />
    </b-container>

  </div>
</template>