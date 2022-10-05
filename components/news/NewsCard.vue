<template>
  <div class="columns is-multiline">
    <template v-if="data">
    <div class="column is-4" v-for="news in listNews" :key="news.id">
      <div class="card px-3 srm_newslist">
        <router-link :to="/news/ + news.slug">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="news.metadata.foto.url"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4" v-html="news.title"></p>
                <time :datetime="news.tanggal">Posted on {{ news.metadata.tanggal | formatDate }}</time>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    </template>
    <template v-if="!data">
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
// import axios from "axios";

export default {
  data() {
    return {
      // listNews: null,
      skeleton: 9,
    };
  },
  computed: {
    listNews() {
      return this.data.objects.slice().sort((b, a) => {
        return (
          new Date(a.metadata.tanggal) - new Date(b.metadata.tanggal)
        );
      });
    },
  },
  props: ['data'],  
      date: new Date(),

  // async mounted() {
  //   const response = await axios.get("https://cms.xabi.us/api/v1/srmnews");
  //   this.listNews = response.data;
  // },
};
</script>

<style>
.srm_newslist {
  margin: 10px;
}
</style>