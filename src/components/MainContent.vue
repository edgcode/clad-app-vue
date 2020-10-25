<template>
 <v-container fluid  grid-list-xl>
    <v-layout row wrap align-center>
        <v-flex xs12 sm8>
          <h1>Somerston House Waking Watch Report</h1>
          <h2>This page shows evidence of consistent non performance of waking watch during their time stationed at Somerston House</h2>
          <p>Patrols are supposed to pass every door every 15 minutes. </p>
          <p>This timelapse footage gathered over a period of 3 months confirms residensts suspcions that patrols were simply not taking place</p>
          <p>Patrols were NEVER seen in the corridors</p>
          
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