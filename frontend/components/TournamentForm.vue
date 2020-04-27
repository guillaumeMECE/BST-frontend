<template>
  <v-dialog
    v-model="show"
    max-width="500px"
  >
    <v-card
      color="blue lighten-4"
    >
      <v-card-title>
        <span class="headline">Créer un tournoi</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                label="Tournament's name*"
                required
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="author"
                label="Creator's name*"
                hint="to easily find your tournament !"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                v-model="mode"
                :items="['soloShowdown', 'RAZZIA', 'BRAWLBALL', 'SIEGE']"
                label="Mode*"
                required
              />
            </v-col>
            <v-col>
              <v-textarea
                v-model="description"
                name="input-2-1"
                filled
                label="Description"
                auto-grow
                densed
                outlined
              />
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-date-picker v-model="picker" />
          </v-row>

          <v-row>
            <v-col
              cols="11"
              sm="5"
            >
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
                    label="Heure de début*"
                    prepend-icon="mdi-timelapse"
                    readonly
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
            <v-spacer />
            <v-col
              cols="11"
              sm="5"
            >
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
                    label="Heure de fin*"
                    prepend-icon="mdi-timelapse"
                    readonly
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
          

          <v-row>
            <v-col>
              <v-text-field
                v-model="message"
                :append-outer-icon="message ? 'mdi-send' : ''"
                filled
                clearable
                label="Add player"
                hint="#XXXXXXXX"
                type="text"
                @click:append-outer="sendTag"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-card
              class="mx-auto"
              max-width="300"
              tile
            >
              <v-list disabled>
                <v-subheader>PLAYER'S TAGS</v-subheader>
                <v-list-item-group
                  v-model="items"
                  color="primary"
                >
                  <v-list-item
                    v-for="item in items"
                    :key="item"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-account-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          
          color="primary"
          
          @click.stop="show=false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="addTournament()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>


export default {
    props: {
        value: Boolean
    },
    data() {
        return {
            name: '',
            author: '',
            description: '',
            mode: '',
            start: '',
            end: '',
            modal1: false,
            modal2: false,
            picker: new Date().toISOString().substr(0, 10),
            message: '',
            item: 1,
            items: [
                
            ],
            
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
            }
        },
    },
    methods: {
        async addTournament(event) {
            if (event) {
                event.preventDefault();
            }
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
        }
    },
    
};
</script>
