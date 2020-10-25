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
       <MainContent :articles="articles"></MainContent> 
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
      articles: [

        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",
          

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",

        },
        {
          title: "07/09/2020 - No Patrols all night",
          description: "Another night of no patrols",

        },
      ],
      errors: [] 
    }
  },
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
