<template>
  <v-container>
    <!-- {{ tournament.name }} {{ tournament.author }} -->
    <v-col
      cols="12"
      align="center"
    >
      <div
        class=" container__card mx-3"
      >
        <img
          src="~/assets/img/showdown_headerevent.png"
          class="container__img mb-n2"
        >
        <v-list-item class="title__container">
          <v-list-item-avatar tile>
            <img
              src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c6/Duo_Showdown.png/revision/latest/scale-to-width-down/340?cb=20200304181901"
              alt="Razzia"
            >
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="titre pl-1 text-center">
              {{ tournament.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="titre__subtitle text-center">
              Créé par <b>{{ tournament.author }}</b>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-row>
          <v-col
            cols="6"
            class="text-center time__text"
          >
            Débute à
          </v-col>
          <v-col
            cols="6"
            class="text-center time__text"
          >
            Se termine à
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="6"
            class="text-center time__text"
          >
            <v-chip>
              <!-- {{ start_time[1] }} le {{ start_time[0] }} -->
              {{ start_time[1] }}
            </v-chip>
          </v-col>
          <v-col
            cols="6"
            class="text-center time__text"
          >
            <v-chip>
              <!-- {{ end_time[1] }} le {{ end_time[0] }} -->
              {{ end_time[1] }}
            </v-chip>
          </v-col>
        </v-row>
      </div>
         
      <div class="container__shadow" />
    </v-col>

    <!-- CLASSEMENT PLAYER -->
    <v-row
      justify="center"
      class="my-3"
    >
      <ResultCard
        v-for="(player, rank) in tournament.results"
        :key="player.tag"
        :player="player"
        :rank="rank + 1"
        class="mx-auto "
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

  .container__card{
    border: 5px solid #000000;
    border-bottom: 8px solid #000000;
    
    /* width: 450px; */
    width: 90%; 
    background-color: white;
    padding: 0;
    text-align: left;
    box-shadow:#000000 -5px -5px ;
  }
 
  .container__shadow{

    background: #423842;
    height: 8px;
    /* left: 50%; */
    opacity: 0.4;
    /* -webkit-transform: translate(-50%, 90%); */
    transform: translate(0%);
    /* width: 430px; */
    width: 86%; 
  }

  .container__img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .title__container{
    background-color: #70c054;
  }
  .time__text{
    font-weight: bold;
    font-size: larger;
  }
  .titre__subtitle{
    font-family: 'Lilita One', cursive;
  }
  .time__text{
     font-family: 'Lilita One', cursive;
     letter-spacing: 1px;
  }

     .titre {
  /* font-family: "Nougat"; */
  
  font-family: 'Lilita One';
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px;
}
</style>
