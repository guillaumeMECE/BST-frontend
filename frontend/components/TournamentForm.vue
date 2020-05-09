<template>
  <v-form>
    <v-col
      cols="12"
      align="center"
    >
      <v-container
        class="fdivider my-4"
      />
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Tournament's name
        </v-col>
        <v-col class="name pa-0">
          <input
            id="fname"
            v-model="name"
            type="text"
            name="fname"
            class="pl-5"
            placeholder="The Brawlnament"
          >
        </v-col>
      </v-row>
    </v-col>
    

    <v-col
      cols="12"
      align="center"
    >
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Creator's name
        </v-col>
        <v-col class="name pa-0">
          <input
            id="fname"
            v-model="author"
            type="text"
            name="fauthor"
            class="pl-5"
            placeholder="tag #"
          >
        </v-col>
      </v-row>
    </v-col>
    

    <v-col
      cols="12"
      align="center"
    >
      <v-container
        class="fdivider my-4"
      />
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Game mode
        </v-col>
        <v-col class="name pa-0">
          <v-select
            v-model="mode"
            :items="['soloShowdown', 'RAZZIA', 'BRAWLBALL', 'SIEGE']"
            label="Mode*"
            required
            class="mx-5"
          />
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      align="center"
    >
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Description
        </v-col>
        <v-col class="name pa-0">
          <input
            id="fname"
            v-model="description"
            type="text"
            name="fdescription"
            class="pl-5"
            placeholder="The Brawlnament"
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      align="center"
    >
      <v-container
        class="fdivider2 my-4"
      />
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Date
        </v-col>
        <v-col class="name pa-0">
          <v-dialog
            ref="dialog"
            v-model="modal0"
            :return-value.sync="picker"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="picker"
                label="Tounament's date"
                readonly
                class="mx-5"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="picker"
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="modal0 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(picker)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      align="center"
    >
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Start time
        </v-col>
        <v-col class="name pa-0">
          <v-dialog
            ref="dialog1"
            v-model="modal1"
            :return-value.sync="start"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="start"
                label="Start time*"
                readonly
                class="mx-5"
                v-on="on"
              />
            </template>
            <v-time-picker
              v-if="modal1"
              v-model="start"
              :max="end"
              full-width
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="modal1 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog1.save(start)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          End time
        </v-col>
        <v-col class="name pa-0">
          <v-dialog
            ref="dialog2"
            v-model="modal2"
            :return-value.sync="end"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="end"
                label="End time*"
                readonly
                class="mx-5"
                v-on="on"
              />
            </template>
            <v-time-picker
              v-if="modal2"
              v-model="end"
              :min="start"
              full-width
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="modal2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog2.save(end)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      align="center"
    >
      <v-container
        class="fdivider2 my-4"
      />
      <v-row
        class="card"
        :class="`elevation-6`"
      >
        <v-col
          class="rank text-center"
          cols="5"
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          Password
        </v-col>
        <v-col class="name pa-0">
          <input
            id="fname"
            v-model="password"
            type="text"
            name="fpassword"
            class="pl-5"
            placeholder="Password for more privacy"
          >
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      align="center"
    >
      <v-container
        class="fdivider3 my-4"
      />
      <v-row
        class="card2"
        :class="`elevation-6`"
      >
        <v-col
          class="rank2 text-center"
          
          sm="4"
          md="3"
          lg="3"
          xl="3"
        >
          LET'S GO
        </v-col>
        <v-col
          class="score text-center"
          cols="2"
          sm="8"
          lg="9"
          xl="9"
        >
          <v-icon
            large
            color="black"
          >
            mdi-chevron-right
          </v-icon>
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script>
export default {
    props: {
        value: Boolean,
    },
    data() {
        return {
            name: '',
            author: '',
            description: '',
            mode: '',
            start: '',
            end: '',
            modal0: false,
            modal1: false,
            modal2: false,
            picker: '',
            // picker: new Date().toISOString().substr(0, 10),
            message: '',
            item: 1,
            items: [],
            step: 1,
        };
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.clearTournament();
                this.$emit('input', value);
            },
        },
    },
    methods: {
        async addTournament(event) {
            if (event) {
                event.preventDefault();
            }
            console.log('ITEMS :', this.items);
            
            const param = {
                name: this.name,
                author: this.author,
                description: this.description,
                mode: this.mode,
                t_start: this.start,
                t_end: this.end,
                date: this.picker,
                players: this.items,
            };
            console.log('param add', param);

            this.$store.dispatch('tournament/ADD_TOURNAMENT_LIST', param);
            this.clearTournament();
            this.show = false;
        },
        sendTag() {
            console.log('items : ', this.items);
            this.items.push(this.message);
            this.clearTag();
        },
        clearTag() {
            this.message = '';
        },
        clearTournament() {
            this.name = '';
            this.author = '';
            this.description = '';
            this.mode = '';
            this.start = '';
            this.end = '';
            this.picker = '';
            this.items = [];
            this.step = 1;
        },
    },
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
  .card2{
      width: 95%;
      background-color: #efefef;
      min-height: 56px;
      max-width: 1000px;
      

  }
  .score{
       background-color: #ffb921;
       clip-path: polygon(12px 0,100% 0,100% 100%,0 100%);
       font-family: 'Lilita One', cursive;
  font-size: 20px;
  width: 100%;
  height: 100%;
  }
  .score:hover{
       background-color: #c58f1b;
  }

  .rank{
      background-color: #efefef ;
       /* clip-path: polygon(12px 0,100% 0,100% 100%,0 100%); */
       font-family: 'Lilita One', cursive;
       font-size: 20px;
  }
  .rank2{
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

#fname{
  width: 100%;
  height: 100%;
}

.fdivider {
  background-color: #233A92;
  clip-path: polygon(100% 0, 0 9%, 100% 9%);
}

.fdivider2 {
  background-color: #233A92;
  clip-path: polygon(0 0, 0 9%, 100% 9%);
}

.fdivider3 {
  background-color: #ffb921;
  clip-path: polygon(94% 0, 0 9%, 94% 9%);

}

.sendbar {
  background-color: #ffb921;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  width: 100%;
  height: 100%;
}
  
</style>
