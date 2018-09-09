<template>
  <div id="app">
    <Header />
      <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Montserrat';

* {
  box-sizing: border-box;
}

body {
  background-image: url('./assets/pattern-bg.png');

  margin: 0;
  padding: 0 0 50px 0;

  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

h2 {
  font-size: 3rem;
}

img {
  max-width: 100%;
  max-height: 250px;
}

#app {
  text-align: center;
  color: #2c3e50;
}

.cards {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  background-color: rgba(255, 255, 255, 0.95);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
