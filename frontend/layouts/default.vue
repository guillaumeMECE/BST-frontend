<template>
  <v-app>
    <Navbar />
    <v-container>
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
