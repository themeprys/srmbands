<template>
  <div class="columns is-multiline"  v-if="data">
    <div class="column is-4" v-for="event in data.objects" :key="event.id">
      <div class="card px-3 srm_newslist">
        <router-link :to="/event/ + event.slug">
          <div class="card-image">
            <figure class="image is-1by1">
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
                <time :datetime="event.metadata.event_date">Event date: {{ event.metadata.event_date }}</time>
              </div>
            </div>

            <!-- <div class="content" v-html="item.body">
            </div>-->
          </div>
        </router-link>
      </div>
    </div>
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


export default {
  data() {
    return {
      // listEvent: null,
      skeleton: 9,
    };
  },
  props: ['data'],    
  // async mounted() {
  //   const response = await axios.get("https://cms.xabi.us/api/v1/srmevent");
  //   this.listEvent = response.data;
  // },
};
</script>

<style>
.srm_newslist {
  margin: 10px;
}
</style>