<template>
  <v-container>
    {{ tournament.name }}  {{ tournament.author }}  
  </v-container>
</template>

<script>
import axios from 'axios';

export default {

    props: {
        tag: {
            type: String,
            default() {
                return {
                    tag: 'pipietcaca'
                };
            }
        }

    },
    data() {
        return {
            tournament: {
                type: Object,
                default() {
                    return {
                        name: 'tournoi pas bon'
                    };
                }
            }
        };
    },
    mounted() {
        axios
            .get(`http://localhost:3030/api/tournament/${this.tag}`)
            .then((response) => {
                this.tournament = response.data.output; console.log('CACA', response);
            });
            
    }
    
};
</script>
