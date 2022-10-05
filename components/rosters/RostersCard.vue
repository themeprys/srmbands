<template>
  <div class="columns is-multiline">
    <template v-if="getObjects">
    <div class="column is-4" v-for="roster in listRosters" :key="roster.id">
      <div class="card px-3 srm_newslist">
        <router-link :to="'/rosters/' + roster.slug">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                :src="roster.metadata.foto_band.url"
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
    </template>
    <template v-if="!getObjects">
      <div class="column is-4" v-for="i in skeleton" :key="i">
        <div class="card px-3 srm_newslist">
          <b-skeleton height="180px"></b-skeleton>
          <!-- <div class="card-image">
            <figure class="image is-16by9">
            </figure>
          </div>-->
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
    </template>
  </div>
</template>

<script>
import getObjects from "~/queries/allRosters";

export default {
  data() {
    return {
      // listArtist: null,
      skeleton: 9,
    };
  },
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  }, 
  computed: {
    listRosters() {
      return this.getObjects.objects.slice().sort((a, b) => {
        return (
          new Date(a.metadata.urutan_roster) - new Date(b.metadata.urutan_roster)
        );
      });
    },
  },  
};
</script>

<style>
.srm_newslist {
  margin: 10px;
}
</style>
