<template>
  <v-app>
    <v-row>
      <v-col>
        <TournamentForm />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

import TournamentForm from '~/components/TournamentForm.vue';

export default {
    components: {
        TournamentForm,
    },
};
</script>
