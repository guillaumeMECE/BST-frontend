<template>
  <!-- <div> -->
  <v-app-bar
    color="#233A92"
    class="white--text text--accent-3 appbar__style"
    fixed
  >
    <v-toolbar-title class="titre px-2">
      BSTournament
    </v-toolbar-title>


    <v-spacer />

    <div class="flex-grow-1" />
    <v-text-field
      v-show="isSearching"
      ref="writeArea"
      prepend-inner-icon="mdi-magnify"
      label="Search..."
      solo
      flat
      color="#FFB300"
      style="transform:translateY(15px);width:10px"
      @blur="isSearching=!isSearching"
    />
    <v-btn
      v-show="!isSearching"
      icon
      color="white darken-2"
      @click="writeSearch()"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      v-show="!isSearching"
      icon
      color="white darken-2"
      @click.stop="showForm=true"
    >
      <v-icon>mdi-plus-box</v-icon>
    </v-btn>
    <TournamentForm v-model="showForm" />
    <!-- <v-icon>mdi-heart</v-icon>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
  </v-app-bar>
  <!-- </div> -->
</template>

<script>
import TournamentForm from './TournamentForm.vue';

export default {
    components: {
        TournamentForm
    },
    props: {},
    data() {
        return {
            isSearching: false,
            showForm: false
        };
    },
    mounted() {},
    methods: {
        writeSearch() {
            this.isSearching = true;
            this.$nextTick(() => {
                this.$refs.writeArea.focus();
            });
        },

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
    letter-spacing: 2px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: #000000 0px 3px,#000000 -2px -2px, #000000 -2px 0px,#000000 2px 3px, #000000 -2px 3px,#000000 2px -2px, #000000 2px 0px, #000000 0px -2px;
  

}
.appbar__style{
  clip-path: polygon(100% 0, 100% 60%, 0 100%, 0 0);
  padding-bottom: 100px;
}
  
</style>
