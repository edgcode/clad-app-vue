<template>
  <v-app>
     <v-navigation-drawer app>
    <!-- -->
    <SideBar />
  </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
   Building Safety App
      
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

     

    <v-main>
      <!-- <HelloWorld/> -->
       <MainContent :articles="videodata.items" ></MainContent> 
      <Calendar/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import axios from 'axios' // importing the axios (a HTTP library) to connects the app with the News API
import MainContent from './components/MainContent.vue' // import the Main Content component
import SideBar from './components/SideBar.vue' // import the SideMenu component
import Calendar from './components/Calendar.vue'

const videodata = require('./components/videodata.js')

export default {

  components: {
        MainContent, // Register the component
        SideBar,
        Calendar
  },

  data() {
    return {
      drawer: false, // false = Vuetify automatically "do the right thing" to show/hide the drawer
      api_key:'4efdcffd8da34562a15fdcde13de091a', // Your API Key go here
      videodata: videodata.playlistData,
      articles: [

        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",
          videoTitle: "output 31 07 2020 1445 to 01 08 2020 0037",
          videoId: "0DrLCY2-fQA",
          dates : {
               start: new Date(2020, 7, 31, 12,0),
               end: new Date(2020, 8, 1, 12,0)
           } ,
           times : {
               start: new Date(2020, 7, 31, 14,45),
               end: new Date(2020, 8, 1, 0,37)
           } 
          

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",
          videoTitle: "output 31 07 2020 1445 to 01 08 2020 0037",
          videoId: "0DrLCY2-fQA",
          dates : {
               start: new Date(2020, 10, 25, 0,0),
               end: new Date(2020, 10, 25, 23,59)
           } ,
           times : {
               start: new Date(2020, 10, 25, 7,0),
               end: new Date(2020, 10, 25, 11,59)
           } 

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",
          videoTitle: "output 31 07 2020 1445 to 01 08 2020 0037",
          videoId: "0DrLCY2-fQA",
          dates : {
               start: new Date(2020, 7, 31, 14,45),
               end: new Date(2020, 8, 1, 0,37)
           } ,
           times : {
               start: new Date(2020, 10, 25, 7,0),
               end: new Date(2020, 10, 25, 14,59)
           } 

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",
          videoTitle: "output 31 07 2020 1445 to 01 08 2020 0037",
          videoId: "0DrLCY2-fQA",
          dates : {
               start: new Date(2020, 10, 25, 0,0),
               end: new Date(2020, 10, 25, 23,59)
           } ,
           times : {
               start: new Date(2020, 10, 25, 7,0),
               end: new Date(2020, 10, 25, 17,59)
           } 

        },
      ],
      errors: [] 
    }
  },
  mounted(){
    // this.parseVideoTitle()
  },
  methods: {
    

    
  }
  // created () {
  //   axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
  //     .then(response => {
  //       //this.articles = response.data.articles
  //       this.articles = response.data.articles
  //       console.log('data:')
  //       console.log(response.data.articles) // This will give you access to the full object
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  // },
}
</script>
