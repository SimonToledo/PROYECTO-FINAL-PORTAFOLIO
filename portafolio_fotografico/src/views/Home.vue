<template>
  <div class="home">
    <header class="masthead" style="background-image:url('assets/03.jpg');">
      <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
            <HelloWorld class="Titulo" msg="Estudio Ágape"/>
            </div>
          </div>
        </div>
    </header>
    <div class="container">
    <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
            <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
            <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
        </div>
    </div>
</div>
<hr>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <ul class="list-inline text-center">
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></li>
                </ul>
                <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
            </div>
        </div>
    </div>
</footer>
  </div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:700,700i,300i,300,400,400i');

  .Titulo{
    font-family: 'Cinzel', serif;
  }
  .row{
    font-family: 'Merriweather';
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
