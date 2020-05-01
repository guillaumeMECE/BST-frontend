<template>
  <v-app>
    <v-row>
      <v-col>
        <AddTournament />
        <TournamentList />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import TournamentList from '~/components/TournamentList.vue';
import AddTournament from '~/components/AddTournament.vue';

export default {
    components: {
        AddTournament,
        TournamentList,
    },
};
</script>

<style scoped>
body{
font-family: 'Roboto Slab', serif;
background-color: #e5e5e5;
}
</style>
