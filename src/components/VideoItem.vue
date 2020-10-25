 <template>
              <v-card class="my-3" hover>
                <!-- <v-img
                  height="350px"
                  v-bind:src="article.urlToImage"
                ></v-img> -->
                <div>
                  <iframe 
                    width="100%" 
                    height="300" 
                    :src="embedUrl" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>
                  </div>
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end >
                        <!-- <span class="headline">{{ video.snippet.title }}</span> -->
                        <!-- <h2><span >{{ video.videoTitle }}</span></h2> -->
                        
                        <h1>{{recordingLength}} hours - no patrols</h1>
                      
                        <h5>{{startTime}} || {{endTime}} </h5>
                       
                      

                        


                      </v-flex>
                    </v-layout>
                  </v-container>
               
                <v-card-text>
                  {{ video.snippet.description }}
                </v-card-text>
                <TimeLine  :timelineId="itemId" :videoTitle = "video.snippet.title" />
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
</template>
<script>
import TimeLine from './TimeLine.vue'
const d3 = require("d3")

const utils = require('./common/utils.js')

export default {
    props: [
        "itemId",
        "video"

    ],
    components: {
        TimeLine
    },
    data() {
        return{
            embedUrl : "https://www.youtube.com/embed/"+this.video.snippet.resourceId.videoId
        }
    },
    mounted(){
        // this.embedUrl = "https://www.youtube.com/embed/"+this.video.snippet.resourceId.itemId
    },
   
    computed:{
        videoUrl(){
            return "https://www.youtube.com/embed/"+this.video.snippet.resourceId.videoId
        },
        startDate(){
            const date = utils.parseVideoTitle(this.video.snippet.title).dates.start
            return utils.formatTime(date)
        },
        endDate(){
            const date = utils.parseVideoTitle(this.video.snippet.title).dates.end
            return utils.formatTime(date)
        },
        startTime(){
            const date = utils.parseVideoTitle(this.video.snippet.title).times.start
            return utils.formatTime(date)
        },
        endTime(){
            const date = utils.parseVideoTitle(this.video.snippet.title).times.end
            return utils.formatTime(date)
        },
        recordingLength(){
            const date1 = utils.parseVideoTitle(this.video.snippet.title).times.start
            const date2 = utils.parseVideoTitle(this.video.snippet.title).times.end

            const hours = Math.abs(date1 - date2) / 36e5
            return hours.toFixed(1)
        }

    }

}
</script>
<style >
h1,h2,h3,h4,h5,h6{
    width: 100%;
    display: flex !important;
    flex-wrap: wrap;
    flex-direction: column !important;
    clear:both;
}
</style>