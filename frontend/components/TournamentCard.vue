<template>
  <!-- <div> -->
  <v-col
    xs="12"
    sm="12"
    md="12"
    lg="6"
    xl="4"
    align="center"
  >
    <div
      class=" container mx-3"
    >
      <nuxt-link
        :to="`tournament/${tournament.tag}`"
        class="nav-link"
      >
        <img
          src="~/assets/img/showdown_headerevent.png"
          class="container__img mb-n2"
        >
      </nuxt-link>
      <v-list-item class="title__container">
        <v-list-item-avatar tile>
          <img
            src="https://vignette.wikia.nocookie.net/brawlstars/images/c/c6/Duo_Showdown.png/revision/latest/scale-to-width-down/340?cb=20200304181901"
            alt="Razzia"
          >
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="titre pl-1">
            {{ tournament.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="titre__subtitle">
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
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
    @font-face {
        font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf");
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
  .nav-link{
 color:white
  }
  .container{
    border: 5px solid #000000;
    border-bottom: 8px solid #000000;
    /* width: 450px; */
    box-shadow:#000000 -5px -5px ;
    width: 90%; 
    background-color: white;
    padding: 0;
    text-align: left;
  }
 
  .container__shadow{

    background: #423842;
    height: 8px;
    /* left: 50%; */
    opacity: 0.4;
    /* -webkit-transform: translate(-50%, 90%); */
    transform: translate(0%);
    /* width: 430px; */
    width: 84%; 
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

</style>
