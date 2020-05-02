<template>
  <v-row
    class="mx-auto" 
    justify="center"
    style="margin-top:100px"
  > 
    <v-col @click.stop="showForm=true"
     sm="12" md="12" lg="6" xl="4"
        cols="12"
        >
      <div
        class=" container text-center "
       
      >
        <div class="plus__text">
          Create Tournament
        </div>
      
        <div class="plus__horizontale" />
        <div class="plus__verticale" />
      </div>
         
      <div class="container__shadow" />
    </v-col>
    <TournamentForm v-model="showForm" />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import TournamentForm from './TournamentForm.vue';

export default {
    components: {
        TournamentForm
    },
    filters: {
        reverse(value) {
            return value.slice().reverse();
        }
    },
    data() {
        return {
            list: [1, 2],
            showForm: false
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
    @font-face {
        font-family: "Nougat";
  src: url("../assets/fonts/Nougat-ExtraBlack.ttf");
    }

    .titre {
  /* font-family: "Nougat"; */
  font-family: 'Lilita One', cursive;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  /* text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px; */
}
  .container{
      position: relative;
       width: 90%;
    height: 300px;
    border: 5px solid #000000;
    border-bottom: 8px solid #000000;
   
    background-color: white;
    padding: 0;
  }
 
  .container__shadow{
    background: #423842;
    height: 8px;
    opacity: 0.4;
    transform: translate(10%);
    width: 84%;
  }
  .plus__horizontale{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50px,-10px);
    background-color:#000000;
    width:100px;
    height:20px;
    clip-path: polygon(12px 0,100% 0,88px 100%,0 100%);
  }
  .plus__verticale{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-20px,-50px);
    background-color:#000000;
    width:40px;
    height:100px;
    clip-path: polygon(100% 0, 20px 100%, 0 100%, 20px 0);
     /* clip-path: polygon(12px 0,100% 0,88px 100%,0 100%); */
     /* clip-path: polygon(100% 0, 60% 100%, 0 100%, 40% 0); */
  }
  .plus__text{
      position: absolute;
    left: 50%;
    top: 70%;
     transform: translate(-50%);
      font-family: 'Lilita One', cursive;
      font-size: x-large;
  }
</style>
