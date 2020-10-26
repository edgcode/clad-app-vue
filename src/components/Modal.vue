<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          View All Motion Events
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">All Motion Events</span>
        </v-card-title>
        <v-card-text>
            <Gallery />
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
 import Gallery from './Gallery.vue'

  export default {
      components:{
           Gallery
      },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>