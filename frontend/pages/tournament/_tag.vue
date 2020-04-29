<template>
  <v-app>
    <v-row>
      <v-col>
        <!-- {{ this.$route.params.tag }} -->
        <TournamentDisplay 
          :tag="this.$route.params.tag"
        />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import TournamentDisplay from '~/components/TournamentDisplay.vue';


export default {
    components: {
        TournamentDisplay
    },
};
</script>

<style scoped>
body{
font-family: 'Roboto Slab', serif;
}
</style>
