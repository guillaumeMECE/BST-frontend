<template>
  <v-col
    cols="12"
    align="center"
  >
    <v-row
      class="card"
      :class="`elevation-6`"
    >
      <v-col
        v-if="rank===1"
        class="rank text-center ma-0 pa-0 pt-1"
        cols="2"
        md="1"
        lg="1"
        xl="1"
      >
        <img
          class="star ma-0"
          src="~/assets/img/logo_starwings.png"
        >
      </v-col>
      <v-col
        v-else
        class="rank text-center"
        cols="2"
        md="1"
        lg="1"
        xl="1"
      >
        {{ rank }}
      </v-col>
      <v-col class="name">
        {{ player.name }}
      </v-col>
      <v-col
        class="score text-center"
        cols="5"
        sm="3"
        lg="3"
        xl="2"
      >
        {{ player.score }} points
      </v-col>
    </v-row>
  </v-col>
</template>

<script>

export default {
    props: { 
        player: {
            type: Object,
            default() {
                return {
                    name: '',
                    tag: '',
                    score: ''
                };
            }
        },
        rank: {
            type: Number,
            default() {
                return ('0');
            },
        }
    },
     
    data() {
        return {
           
        };
    },
    mounted() {},
    methods: {

    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
    @font-face {
        font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf") format("tff");
    }

    .titre {
  font-family: 'Lilita One', cursive;
  font-size: 30px;
  font-weight: bold;
  text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px;
}
  .card{
      width: 95%;
      background-color: white;
      min-height: 56px;
      max-width: 1000px;
      

  }
  .score{
       background-color: #ffb921;
       clip-path: polygon(12px 0,100% 0,100% 100%,0 100%);
       font-family: 'Lilita One', cursive;
  font-size: 20px;
  }
  .rank{
      background-color: #efefef ;
       /* clip-path: polygon(12px 0,100% 0,100% 100%,0 100%); */
       font-family: 'Lilita One', cursive;
       font-size: 20px;
  }
  .name{
      font-family: 'Lilita One', cursive;
      font-size: 20px;
      /* margin-left: 20px; */
  }

.star{
  width: 60%;
  height: auto;
}
  
</style>
