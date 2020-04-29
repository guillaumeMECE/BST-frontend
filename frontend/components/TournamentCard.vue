<template>
  <v-card
    max-width="344"
    class="mx-auto"
    color="#81d621"
    
    dark
  >
    <v-list-item>
      <v-list-item-avatar tile>
        <img
          src="https://vignette.wikia.nocookie.net/brawlstars/images/7/73/Showdown.png/revision/latest/scale-to-width-down/90?cb=20200304181857"
          alt="Razzia"
        >
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="titre pl-1">
          {{ tournament.name }}
        </v-list-item-title>
        <v-list-item-subtitle>par Super Brawler</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://uc2f9548dd57800058dff54edd90.previews.dropboxusercontent.com/p/thumb/AAw11mCyXMsZfd6vXsUvaPb5ok4fVlSseHEaEjndEvC40ERcfxVQ1Bmrqlx5hq4ut3_Biv73u3yHrzGA8gJWFYaWeYbO6LcePf8e2AbDxcpgP8ErlQ0HiUNqyuukmQGDQkjrlEsZvyWf6-9IPrnW22qgFJlXoCi2FWWj2HEisFmjIcxr-gdZoVlfoWya7QHc-MGhCkQkxYb4zxFQgIA_sKUE9DBrJcnyNP8u8um43AoayeAk7yjejb6MurTpChOiiMN2urQe8bZ8LSgxDaqRoEdUsRs9_EpNeN6UOGRqmVzJbvGKtvp5NmXdcUVVOEdoaAOHogShd6AWQnW3eeluur3HglN4Cxgs7bHXmqR7GQaDng/p.png?fv_content=true&size_mode=5"
      height="50"
    />

    <v-card-text
      color="deep-purple accent-4"
    >
      {{ tournament.description }}
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-title>Joueurs inscrits : {{ tournament.players_size }}</v-card-title>

    <div class="text-center">
      <v-chip class="ma-2">
        Débute à {{ tournament.start_time }}
      </v-chip>

      <v-spacer />

      <v-chip class="ma-2">
        Se termine à {{ tournament.end_time }}
      </v-chip>
    </div>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        VOIR
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
    }
};
</script>

<style scoped>
    @font-face {
        font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf") format("tff");
    }

    .titre {
  font-family: "Nougat";
  font-size: 20px;
  font-weight:bold;
  letter-spacing: 1px;
  text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px;

}
  
</style>
