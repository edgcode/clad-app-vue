<template>
    <div>
        Timeline
        <div :id="'container_'+timelineId"></div>
    </div>
</template>
<script>
const timeline = require('./common/TimeLine')



export default {
    props: [
        "timelineId",
        // "dates",
        // "times",
        "videoTitle"
    ],
   
    data: function(){
      
        return
    },
   
     
    mounted() {
        this.drawTimeLine("container_"+this.timelineId)
    },

    methods:{

        parseVideoTitle(videoTitle){



            videoTitle = videoTitle.replace("output ", "")

            const parts = videoTitle.split(" to ")

            const from = parts[0].split(" ")
            const to = parts[1].split(" ")

            console.log("from", from)
            console.log("to", to)

            const startDay = new Date( +from[2], +from[1], +from[0], 0, 0)
            const endDay = new Date( +to[2], +to[1], +to[0], 23, 59)


            const startTime = new Date( +from[2], +from[1], +from[0], +from[3].slice(0,2), +from[3].slice(-2))
            const endTime = new Date( +to[2], +to[1], +to[0], +to[3].slice(0,2), +to[3].slice(-2))

            const output = {
                dates : {
                start: startDay,
                end: endDay
                },

                times: {
                start: startTime,
                end: endTime
                }
            }

            console.log('dateinfo', output)

            return output

        },

        drawTimeLine: function(id){
            
            let dates = this.parseVideoTitle(this.videoTitle).dates
            let times = this.parseVideoTitle(this.videoTitle).times
         
           timeline.timelineRect(id, dates, times)
           
            return
        }
    },
    computed: {
       

    },
    
}
</script>
<style scoped>

</style>