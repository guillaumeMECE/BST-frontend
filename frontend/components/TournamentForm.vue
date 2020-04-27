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
                label="Tournament's name*"
                required
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Creator's name*"
                hint="to easily find your tournament !"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-select
                :items="['FFA', 'RAZZIA', 'BRAWLBALL', 'SIEGE']"
                label="Mode*"
                required
              />
            </v-col>
            <v-col>
              <v-textarea
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
                type="text"
                @click:append-outer="sendMessage"
              />
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-btn
          color="primary"
          flat
          @click.stop="show=false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="show = false"
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
            start: null,
            end: null,
            modal1: false,
            modal2: false,
            picker: new Date().toISOString().substr(0, 10),
            message: 'fdp!',
            
        };
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    },
    methods: {
        sendMessage() {
            this.clearMessage();
        },
        clearMessage() {
            this.message = '';
        },
        
    },
    
};
</script>
