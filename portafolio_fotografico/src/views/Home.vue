<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/portada.jpeg" width="15%" style="border-radius: 100%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

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
