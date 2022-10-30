<template>
    <div class="columns is-multiline srm_rosters_wrap" v-if="getObjects">
        <div class="column is-12 srm_rosters_title">
            <p>Our Rosters</p>
        </div>
        
    <div class="column is-3" v-for="roster in getObjects.objects" :key="roster.id">
      <div class="card px-3 srm_newslist">
        <router-link :to="'/rosters/' + roster.slug">        
        <!-- <router-link :to="/artist/ + item.nid"> -->
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                :src="roster.metadata.foto_band.imgix_url"
                alt="Our Roster"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4" v-html="roster.title"></p>
                <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <template v-if="!listArtist">
      <div class="column is-4" v-for="i in skeleton" :key="i">
        <div class="card px-3 srm_newslist">
          <b-skeleton height="180px"></b-skeleton>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p>
                  <b-skeleton></b-skeleton>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script>
import getObjects from "~/queries/homeRosters";

// import axios from "axios";

export default {
  data() {
    return {
      // ourRosters: null,
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
  //     "https://cms.xabi.us/api/v1/srmrosters"
  //   );
  //   this.ourRosters = response.data;
  // },
};
</script>

<style>
.srm_rosters_title {
    font-size: 40px;
    text-align: center;
    padding: 0;
    margin: 0;
}
.srm_rosters_title p {
    border-bottom: 1px solid #333;
    width: 300px;
    margin: 0 auto 30px;
    padding-bottom: 20px;

}
.srm_rosters_wrap {
  margin: 0 80px;
}
</style>