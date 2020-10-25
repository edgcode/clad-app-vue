<template>
    <v-layout row wrap align-center>
          <v-flex xs8  offset-md2>
            <v-col 
                v-for="article in articles" 
                :key="article.title"

                cols="12"
                sm="12"
              >
              <v-card class="my-3" hover>
                <!-- <v-img
                  height="350px"
                  v-bind:src="article.urlToImage"
                ></v-img> -->
                <div>
                  <iframe width="100%" height="388" src="https://www.youtube.com/embed/0DrLCY2-fQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ article.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
               
                <v-card-text>
                  {{ article.description }}
                </v-card-text>
                <v-card-actions>
                  <v-chip small color="secondary" class="white--text">
                    <!-- {{article.source.name}} Source Name -->
                    Name
                  </v-chip>
                  <v-spacer></v-spacer>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon small>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-google-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-linkedin</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>

         <v-btn small replace color="info" href="#" target="_blank" >Read More</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-flex>
        </v-layout>
</template>

<script>
export default {
  props: {
      articles: Array
  },
}
</script>