<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">about</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "abc",
    };
  },
};
</script>

<style scoped>
#text {
  color: red;
}
</style>
