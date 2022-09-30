<template>
<div v-if="getObjects">
  <div v-for="single in getObjects.objects" :key="single.id" class='embed-container'>
      <iframe v-bind:src="'https://www.youtube.com/embed/'+ single.metadata.youtube_id" frameborder='0' allowfullscreen></iframe>
  </div>
  <div class="srm_latest_video">
      <p>New Single</p>
  </div>
</div>
</template>

<script>
// import axios from "axios";
import getObjects from "~/queries/newSingle";

export default {
  data() {
    return {
      // newSong: null,
    };
  },
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  },  
  // async mounted() {
  //   const response = await axios.get(
  //     "https://cms.xabi.us/api/v1/srmnewsong"
  //   );
  //   this.newSong = response.data;
  // },
};
</script>

<style>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.srm_latest_video {
    position: relative;
    top: -45px;
    background: #222;
    color: #ccc;
    font-size: 30px;
    text-align: center;
}
</style>