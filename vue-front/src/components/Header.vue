<template>
    <header>
        <h1>{{ title }}</h1>
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
  background-color: #222;

  color: white;

  height: 150px;

  padding: 20px;
}
</style>
