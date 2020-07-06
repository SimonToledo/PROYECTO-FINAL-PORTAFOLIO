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
            <p>Este es un portafolio web creado para compartir nuestros trabajos fotográficos.</p>
            <p>Este es un medio independiente. Si te gusta nuestro contenido, no dudes en contactarnos.</p>
        </div>
      </div>
    </div>
          <hr>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                  <h4>Síguenos en nuestras redes sociales</h4>
                    <div>
                        <b-nav id="linkfooter">
                          <b-nav-item active><a href="https://www.facebook.com/simon.toledomorales" target="_blank" rel="noopener">Facebook</a></b-nav-item> |
                          <b-nav-item><a href="https://www.instagram.com/simontoledo.ph/" target="_blank" rel="noopener">Instagram</a></b-nav-item> |
                          <b-nav-item><a href="https://github.com/SimonToledo" target="_blank" rel="noopener">Github</a></b-nav-item> |
                          <b-nav-item><a href="https://www.linkedin.com/in/sim%C3%B3n-toledo-morales-9b7191180/" target="_blank" rel="noopener">Linkedin</a></b-nav-item>
                        </b-nav>
                      </div>
                  </div>
            </div>
          </div>
        </footer>
  </div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:700,700i,300i,300,400,400i');
  @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap" rel="stylesheet"');
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"');

  .Titulo{
    font-family: 'Sacramento', cursive;
    color: cornsilk;
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
