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
        "dates",
        "times"
    ],
   
    data: function(){
        // this.uniqueId = this.timelineId
        return
    },
   
     computed: {
        // containerId() {
        //     return "container_"+ this.timelineId
        // }
    },
    mounted() {
        this.drawTimeLine("container_"+this.timelineId)
    },

    methods:{
        drawTimeLine: function(id){

         
           timeline.timelineRect(id, this.dates, this.times)
           
            return
        }
    }
    
}
</script>
<style scoped>

</style>