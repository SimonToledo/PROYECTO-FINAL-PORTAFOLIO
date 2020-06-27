<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/portada.jpeg" width="15%" style="border-radius: 100%;">
    <HelloWorld class="Titulo" msg="Estudio Ágape"/>
  </div>
</template>

<style>

  div{
    background-color: #ffffff;
  }
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap');

  .Titulo{
    font-family: 'Cinzel', serif;
  }

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
