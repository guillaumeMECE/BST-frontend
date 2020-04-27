<template>
  <v-app>
    <v-row>
      <v-col>
        <TournamentCard />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import TournamentCard from '~/components/TournamentCard.vue';

export default {
    components: {
        TournamentCard,
    },
};
</script>

<style scoped>
body{
font-family: 'Roboto Slab', serif;
}
</style>
