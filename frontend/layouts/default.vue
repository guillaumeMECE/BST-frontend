<template>
  <v-app>
    <Navbar />
    <v-container class="main__container">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
    components: {
        Navbar,
    },
};
</script>
<style scoped>
.main__container{
  padding-top: 150px;
}
</style>
