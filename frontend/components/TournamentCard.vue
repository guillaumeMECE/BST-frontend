<template>
  <v-card
    max-width="344"
    class="mx-auto"
    color="green"
    
    dark
  >
    <v-list-item>
      <v-list-item-avatar tile>
        <img
          src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c6/Duo_Showdown.png/revision/latest/scale-to-width-down/340?cb=20200304181901"
          alt="Razzia"
        >
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="titre">
          {{ tournament.name }}
        </v-list-item-title>
        <v-list-item-subtitle>Créé par <b>{{ tournament.author }}</b></v-list-item-subtitle>
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

    <v-card-title>Joueurs inscrits : {{ tournament.players.length }}</v-card-title>

    <div class="text-center">
      <v-chip class="ma-2">
        Débute à {{ start_time[1] }} le {{ start_time[0] }}
      </v-chip>

      <v-spacer />

      <v-chip class="ma-2">
        Se termine à {{ end_time[1] }} le {{ end_time[0] }}
      </v-chip>
    </div>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        <nuxt-link :to="`tournament/${tournament.tag}`">
          VOIR
        </nuxt-link>
      </v-btn>
     
      <v-spacer />
      
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
    props: {
        tournament: {
            type: Object,
            default() {
                return {
                    name: 'NOM DU TOURNOI',
                    start_time: '12h00',
                    end_time: '13h00',
                    description:
            'Viens relever mon défi et tente de remporter ce tournoi éclaté au max !',
                    players_size: '5',

                };
            }
        }
    },
    computed: {
        start_time() {
            const splitedTimestamp = this.tournament.timestamp_start.split('T');
            return splitedTimestamp;
        },
        end_time() {
            const splitedTimestamp = this.tournament.timestamp_end.split('T');
            return splitedTimestamp;
        }
    }
};
</script>

<style scoped>
    @font-face {
        font-family: "BrawlStarsDeputy";
  src: url("../assets/fonts/BrawlStarsDeputy-Regular.ttf") format("tff");
    }

    .titre {
  font-family: "BrawlStarsDeputy";
  font-size: 30px;
  text-shadow: #000000 1px 2px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px;
}
  
</style>
