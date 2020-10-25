
<template>
 <!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <!-- -->
    <SideBar />
  </v-navigation-drawer>

  <v-app-bar app>
    <!-- -->
    Waking Watch

  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      Test Stuff
      <!-- <MainContent :articles="articles"></MainContent>  -->
      <!-- <Calendar /> -->
      <!-- If using vue-router -->
      <!-- <router-view></router-view> -->
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>


</template>
<script>
/* eslint-disable */ 
import axios from 'axios' // importing the axios (a HTTP library) to connects the app with the News API
import MainContent from './components/MainContent.vue' // import the Main Content component
import SideBar from './components/SideBar.vue' // import the SideMenu component
import Calendar from './components/Calendar.vue'

export default {

  components: {
      //  MainContent, // Register the component
      //  SideBar,
     //   Calendar
  },

  data() {
    return {
      drawer: false, // false = Vuetify automatically "do the right thing" to show/hide the drawer
      api_key:'4efdcffd8da34562a15fdcde13de091a', // Your API Key go here
      articles: [],
      errors: [] 
    }
  },
  created () {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key)
      .then(response => {
        //this.articles = response.data.articles
        this.articles = response.data.articles
        console.log('data:')
        console.log(response.data.articles) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  },


  }
</script>
