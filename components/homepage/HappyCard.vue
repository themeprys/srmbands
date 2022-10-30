<template>
  <div class="srm_helplist">
    <div class="columns sectiontitle">
      <div class="column is-12 has-text-centered">
        <h1>Happy To Help</h1>
        <hr class="helpline" />
      </div>
    </div>
    <div class="columns is-multiline" v-if="getObjects">
      <div class="column is-3" v-for="happy in getObjects.objects" :key="happy.id" >
        <div class="card px-3">
          <router-link :to="'/help/' + happy.slug">
            <div class="card-image">
              <figure class="image is-1by1">
                <img
                  :src="happy.metadata.foto.imgix_url"
                  alt="SRM Bands"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4" v-html="happy.title"></p>
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
import getObjects from "~/queries/homeHappy";


export default {
  name: 'happycard',
  data() {
    return {
      // listHappy: null,
      skeleton: 9,
    };
  },
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  },  
  // async mounted() {
  //   const response = await axios.get("https://cms.xabi.us/api/v1/srmhappy");
  //   this.listHappy = response.data;
  // },
};
</script>

<style>
.srm_helplist h1 {
  font-size: 45px;
  position: relative;
  top: 55px;
  background: #fff;
  max-width: 360px;
  margin: 0 auto 0;
}
.srm_helplist .sectiontitle {
  padding: 40px 0 50px 0;
}
.helpline {
  height: 10px;
  background: #ccc;
}
</style>