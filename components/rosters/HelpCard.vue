<template>
  <div class="srm_helplist">
    <div class="columns sectiontitle">
      <div class="column is-12 has-text-centered">
        <h1>Happy To Help</h1>
        <hr class="helpline" />
      </div>
    </div>

  <div class="columns is-multiline" v-if="getObjects">
    <div class="column is-4" v-for="help in listHappydalam" :key="help.id">
      <div class="card px-3 srm_newslist">
        <router-link :to="'/help/' + help.slug">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                :src="help.metadata.foto.url"
                alt="Our Roster"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4" v-html="help.title"></p>
                <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
  </div>
</template>

<script>
import getObjects from "~/queries/allHappytohelps";

export default {
  name: "happy",
  data() {
    return {
      // listArtist: null,
      skeleton: 9,
    };
  },
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
    },
  },
  computed: {
    listHappydalam() {
      return this.getObjects.objects.slice().sort((a, b) => {
        return (
          new Date(a.created_at) - new Date(b.created_at)
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
