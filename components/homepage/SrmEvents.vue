<template>
  <div>
    <div class="columns is-multiline srm_events_wrap" v-if="getObjects">
      <div class="column is-12 srm_event_title">
        <p>SRM Events</p>
      </div>

      <div class="column is-6" v-for="event in getObjects.objects" :key="event.id" >
        <div class="card px-3 srm_newslist">
          <router-link :to="/event/ + event.slug">
            <div class="card-image">
              <figure class="image is-16by9">
                <img
                  :src="event.metadata.foto.url"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4" v-html="event.title"></p>
                  <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import getObjects from "~/queries/homeEvents";

export default {
  data() {
    return {
      // srmEvents: null,
    };
  },
  // async mounted() {
  //   const response = await axios.get("https://cms.xabi.us/api/v1/srmeventhome");
  //   this.srmEvents = response.data;
  // },
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  },

};
</script>

<style>
.srm_event_title {
    font-size: 40px;
    text-align: center;
    padding: 0;
    margin: 0;
}
.srm_event_title p {
    border-bottom: 1px solid #333;
    width: 300px;
    margin: 30px auto 10px;
    padding-bottom: 20px;

}
.srm_events_wrap {
    margin: 0 80px;
}
</style>