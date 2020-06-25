<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/portada.jpeg" width="15%" style="border-radius: 100%;">
    <HelloWorld msg="Simón Toledo"/>
  </div>
</template>

<style>
  div{
    background-color: black;
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
