<template>
  <v-dialog
    v-model="show"
    max-width="500px"
    persistent
  >
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step
          :complete="step > 1"
          step="1"
        >
          Tournament info
        </v-stepper-step>

        <v-divider />

        <v-stepper-step
          :complete="step > 2"
          step="2"
        >
          Participants
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-card>
          <v-card-title>
            <span class="headline">Créer un tournoi</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-stepper-content step="1">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="name"
                      label="Tournament's name*"
                      outlined
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="author"
                      label="Creator's name*"
                      hint="to easily find your tournament !"
                      required
                      filled
                    />
                  </v-col>
                  <v-col>
                    <v-select
                      v-model="mode"
                      :items="['soloShowdown', 'RAZZIA', 'BRAWLBALL', 'SIEGE']"
                      label="Mode*"
                      required
                      filled
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea
                      v-model="description"
                      name="input-2-1"
                      filled
                      label="Description"
                      auto-grow
                      densed
                    />
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col>
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
                          prepend-icon="mdi-calendar"
                          readonly
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

                <v-row>
                  <v-col cols="6">
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
                  <v-col cols="6">
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
                <v-spacer />
                <v-btn
                  color="primary  darken-1"
                  text
                  @click.stop="show = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="primary"
                  @click="step = 2"
                >
                  Next
                </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
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
                    max-width="500px"
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
                <v-spacer class="mt-5" />
                <v-btn
                  color="blue darken-1"
                  text
                  @click.stop="show = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="primary"
                  @click="addTournament()"
                >
                  Save
                </v-btn>
              </v-stepper-content>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer />
            <v-btn
              color="primary"
              @click.stop="show = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="addTournament()"
            >
              Save
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
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
