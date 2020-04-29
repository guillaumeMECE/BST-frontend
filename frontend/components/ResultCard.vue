<template>
  <v-row
    class="card"
    :class="`elevation-6`"
  >
    <v-col
      class="rank text-center"
      cols="1"
    >
      {{ rank }}
    </v-col>
    <v-col class="name">
      {{ player.name }}
    </v-col>
    <v-col
      class="score text-center"
      cols="3"
    >
      {{ player.score }} points
    </v-col>
  </v-row>
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
    @font-face {
        font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf") format("tff");
    }

    .titre {
  font-family: "Nougat";
  font-size: 30px;
  font-weight: bold;
  text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px;
}
  .card{
      width: 50%;
      background-color: white;
      height: 56px;
      

  }
  .score{
       background-color: #ffb921;
       clip-path: polygon(12px 0,100% 0,100% 100%,0 100%);
       font-family: "Nougat";
  font-size: 20px;
  }
  .rank{
      background-color: #efefef ;
       /* clip-path: polygon(12px 0,100% 0,100% 100%,0 100%); */
       font-family: "Nougat";
       font-size: 20px;
  }
  .name{
      font-family: "Nougat";
      font-size: 20px;
      margin-left: 20px;
  }

  
</style>
