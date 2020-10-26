<template >

  <v-row>
    <v-col v-for="(image,i) in images"
        :key="i"
    >
    
      <v-img 
        :src="image.url"
        :key="i"
       
        max-height="150"
        max-width="250"

      ></v-img>
      {{image.filename}}
      </v-col>
    </v-row>

</template>

<script>

import filelist from "@/filelist.json"

export default {
  name: 'Gallery',
  data() {
    return {
      images: [],
    };
  },

  mounted() {
     this.getImages()
  },

  methods: {
    getImages() {
     this.images = filelist
    },
  },
};
</script>