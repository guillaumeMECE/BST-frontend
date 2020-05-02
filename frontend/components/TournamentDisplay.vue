<template>
  <v-container>
    <!-- {{ tournament.name }} {{ tournament.author }} -->
    <v-card
      class="mx-auto"
      color="green"
      dark
      style=" width: 75%"
    >
      <v-list-item>
        <v-list-item-avatar tile>
          <img
            src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c6/Duo_Showdown.png/revision/latest/scale-to-width-down/340?cb=20200304181901"
            alt="Razzia"
          >
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="titre pa-1">
            {{ tournament.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Créé par <b>{{ tournament.author }}</b>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/8a196a5f-8dec-428a-901a-4193f0dcd4de-profile_banner-480.png"
        height="100"
      />

      <v-card-text
        color="deep-purple accent-4"
        class="text-center"
      >
        <b>{{ tournament.description }}</b>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>
        Joueurs inscrits : {{ tournament.players.length }}
      </v-card-title>

      <div class="text-center">
        <v-chip class="ma-2">
          Débute à {{ start_time()[1] }} le {{ start_time()[0] }}
        </v-chip>

        <!-- <v-spacer /> -->

        <v-chip class="ma-2">
          Se termine à {{ end_time()[1] }} le {{ end_time()[0] }}
        </v-chip>
      </div>

      <v-card-actions>
        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- CLASSEMENT PLAYER -->
    <v-row justify="center">
      <ResultCard
        v-for="(player, rank) in tournament.results"
        :key="player.tag"
        :player="player"
        :rank="rank + 1"
        class="mx-auto my-5"
      />
    </v-row>
    <!-- <v-card
      v-for="(player,id) in tournament.results"
      :key="player.tag"
      :player="player"
      style=" width: 50%;"
      class="mx-auto mt-2"
    > -->
    <!-- <v-card-text> -->
    <!-- <v-row>
          <v-col
            cols="2"
            style="background-color: lightgrey;"
          >
            {{ id+1 }}
          </v-col>
          <v-col />
          <v-col
            cols="2"
            style="background-color: lightgrey;"
          /> -->
    <!-- <v-col>
            <v-badge
              color="green"
              :content="id+1"
            >
              <v-avatar color="green">
                <span class="white--text headline"> {{ player.score }} </span>
              </v-avatar>
            </v-badge>
          </v-col>
          <v-col class="playerName">
            {{ player.name }}
          </v-col> -->
    <!-- </v-row> -->
    <!-- </v-card-text> -->
    <!-- </v-card> -->
  </v-container>
</template>

<script>
// import axios from 'axios';
import ResultCard from './ResultCard.vue';

export default {
    components: {
        ResultCard,
    },
    props: {
        tag: {
            type: String,
            default() {
                return {
                    tag: 'pipietcaca',
                };
            },
        },
    },
    data() {
        return {
            tournament: {
                name: '',
                author: '',
                mode: '',
                description: '',
                players: [],
                results: [],
                timestamp_start: '',
                timestamp_end: '',
            },
        };
    },

    async mounted() {
        console.log('ENV API_URL', process.env.BASE_URL);

        const response = await this.$axios.$get(`/api/tournament/${this.tag}`);

        console.log('CACA', response);
        this.tournament = response.output;
    },
    methods: {
        start_time() {
            const splitedTimestamp = this.tournament.timestamp_start.split('T');
            return splitedTimestamp;
        },
        end_time() {
            const splitedTimestamp = this.tournament.timestamp_end.split('T');
            return splitedTimestamp;
        },
    },
};
</script>

<style scoped>
@font-face {
  font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf") format("tff");
}

.titre {
  font-family: "Nougat";
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: #000000 0px 3px, #000000 -2px -2px, #000000 -2px 0px,
    #000000 2px 3px, #000000 -2px 3px, #000000 2px -2px, #000000 2px 0px,
    #000000 0px -2px;
}
.playerName {
  font-size: 22px;
  font-weight: bold;
}
</style>
