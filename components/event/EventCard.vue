<template>
  <div class="columns is-multiline">
    <template v-if="data">
      <div class="column is-4" v-for="event in listEvents" :key="event.id">
        <div class="card px-3 srm_newslist">
          <router-link :to="/event/ + event.slug">
            <div class="card-image">
              <figure class="image is-1by1">
                <img :src="event.metadata.foto.url" :alt="event.title" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4" v-html="event.title"></p>
                  <time :datetime="event.metadata.event_date"
                    >Event date:
                    {{ event.metadata.event_date | formatDate }}</time
                  >
                </div>
              </div>

              <!-- <div class="content" v-html="item.body">
            </div>-->
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
export default {
  data() {
    return {
      // listEvent: null,
      skeleton: 9,
      date: new Date(),
    };
  },
  computed: {
    listEvents() {
      return this.data.objects.slice().sort((b, a) => {
        return (
          new Date(a.metadata.event_date) - new Date(b.metadata.event_date)
        );
      });
    },
  },
  props: ["data"],
  // filters: {
  //         tanggalPublikasi: function(value) {
  //             return date.formatDate(new Date(), 'D MMM YYYY');
  //         }
  //     },
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