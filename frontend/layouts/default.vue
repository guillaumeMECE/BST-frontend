<template>
  <div>
    <Navbar />
    <v-container>
      <Nuxt />
    </v-container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
    components: {
        Navbar
    }
};
</script>
