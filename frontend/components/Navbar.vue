<template>
  <div>
    <v-app-bar
      color="#FFB300"
      <<<<<<<
      h-e-a-d
    >
      <v-toolbar-title>
        <v-icon class="mx-auto">
          mdi-home
        </v-icon>
        BST
        =======
        class="red--text text--accent-3"
        >
        <v-toolbar-title class="titre">
          BRAWL STARS Tournament
          >>>>>>> dev/tournament_list
        </v-toolbar-title>

        <<<<<<< HEAD
        =======

        >>>>>>> dev/tournament_list
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
          color="light-blue darken-2"
          @click="writeSearch()"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          v-show="!isSearching"
          icon
          color="light-blue darken-2"
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
      </v-toolbar-title>
    </v-app-bar>
  </div>
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
