<template>
  <v-container> 
    <!-- <h2>TOURNAMENTS</h2> -->
    <!-- <v-layout
      wrap
      justify-space-around
    > -->
    <v-row>
      <TournamentCard
        v-for="tournament in tournamentList.output"
        :key="tournament.tag"
        :tournament="tournament"
        class="my-3"
      />
    </v-row>
    <!-- </v-layout> -->
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import TournamentCard from './TournamentCard.vue';

export default {
    components: {
        TournamentCard,
    },
    filters: {
        reverse(value) {
            return value.slice().reverse();
        }
    },
    data() {
        return {
            list: [1, 2],
        };
    },
    computed: {
        ...mapGetters({ tournamentList: 'tournament/tournament_list' }),
        
    },
    mounted() {
        this.$store.dispatch('tournament/FETCH_TOURNAMENT_LIST');
    },
    methods: {

    }
    
};

</script>
