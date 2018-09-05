<template>
    <header class="menu">
      <div class="background-logo" />
        <h1>{{ title }}</h1>
        <router-link to="/gql">GraphQL</router-link>
        <router-link to="/">Fetch</router-link>
        <router-link to="/admin">Admin</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Raucous Recipes',
    };
  },
};
</script>

<style scope>
header {
  background-color: transparent;

  color: white;

  height: 150px;

  margin: 0 0 50px 0;
  padding: 20px;

  position: relative;
}

h1 {
  color: #435466;
  font-size: 3.5rem;
  letter-spacing: 0.25rem;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
}

.background-logo {
  background-image: url('../assets/vue-logo.svg');
  background-position: 0% 5%;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  bottom: -1%;
  left: -2.5%;

  height: 130px;
  width: 150px;

  transform: rotate(0.084turn);
}

.menu a {
  display: inline-block;

  background-color: steelblue;

  border-radius: 5px;

  color: white;

  font-size: 16px;
  text-decoration: none;

  margin: 0 25px;
  padding: 10px 15px;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

a:hover {
  color: #4dba87;
}
</style>
