<template>
 <v-container fluid  grid-list-xl>
    <v-layout row wrap align-center>
        <v-flex xs12 sm8>
          <h2>This page shows evidence of consistent waking watch non performance over a number of months from july to October</h2>
          </v-flex>
          <v-flex xs6 sm6
            
                v-for="(video, i) in articles" 
                :key="i"

                
              >
          <VideoItem :itemId="i" :video="video" />
            
          </v-flex>
         
        </v-layout>
         </v-container>
</template>

<script>
// import TimeLine from './TimeLine.vue'
import VideoItem from './VideoItem.vue'




export default {
  props: {
      articles: Array
  },
  components: {
      // TimeLine,
       VideoItem
  },
  methods: {

  }
}
</script>