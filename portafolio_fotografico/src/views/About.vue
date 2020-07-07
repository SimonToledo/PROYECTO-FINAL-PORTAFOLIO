<template>
  <div class="about">
    <h1 class="title">CONTÁCTANOS</h1>
    <div class="login">
    <label for="email">Ingrese el correo electrónico.</label>
    <input type="email">
    <label for="clave">Ingrese la contraseña.</label>
    <input type="password">
    <button>Entrar</button>
    </div>
    </div>
</template>

<style scoped>

  .title{
    font-size: 3rem;
  }
</style>

<script>
export default {
  name: 'about',
}
</script>