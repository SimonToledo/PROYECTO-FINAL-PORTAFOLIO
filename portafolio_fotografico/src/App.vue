<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link id="links" to="/sesiones">SESIONES</router-link> |
      <router-link id="links" to="/about">CONTACTO</router-link> 
     <router-view />
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Merriweather:700,700i,300i,300,400,400i');
@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap" rel="stylesheet"');
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet');

.links{
  color:rgb(255, 255, 255);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100px;
  color: #ffffff;
  background-image: url('./assets/12.jpg');
}

#nav {
  padding: 20px;
font-family: 'Fredericka the Great', cursive;
  color: rgb(0, 0, 0);
}

#nav a {
font-family: 'Fredericka the Great', cursive;
  color: #000000;
}

#nav a.router-link-exact-active{
  color: #ffffff;
}


</style>
