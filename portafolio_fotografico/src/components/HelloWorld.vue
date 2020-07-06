<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div></div>
    <br>
    <section>
      <div>
      <div>
        <b-card-group deck>
          <b-card img img-alt="Card image" img-top>
            <img src="../assets/11.jpg" alt="imagen" width="100%">
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
          <b-card>
          <img src="../assets/03.jpg" alt="imagen" width="100%" img-bottom>
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <h4>OTRO TITULO</h4>
        <b-card>
          <img src="../assets/08.jpg" alt="image" width="100%" img-left>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>

        <b-card>
          <img src="../assets/03.jpg" alt="imagen" width="100%" img-right>
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
</style>
