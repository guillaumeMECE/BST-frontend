<template>
  <v-dialog
    v-model="show"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span class="headline">Ajouter un tournoi</span>
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

          <v-row>
            
          </v-row>
          
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email*"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password*"
              type="password"
              required
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            />
          </v-col>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
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
    computed: {
        show: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            }
        }
    }
};
</script>
