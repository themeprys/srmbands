<template>
  <div>
    <div v-if="data">
    <section class="section" v-for="event in data.objects" :key="event.id">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/event">SRM News</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page" v-html="event.title"></a>
          </li>
        </ul>
      </nav>
      <div>

        <h1
          class="srm_title is-size-1 has-text-centered has-text-weight-bold has-text-black"
          v-html="event.title"
        ></h1>
        <div class="srm_time"><time :datetime="event.metadata.event_date">Event date: {{ event.metadata.event_date }}</time></div>
        <center>
          <img
            class="srm_image_item"
            :src="event.metadata.foto.url"
            alt="SRM Bands"
          />
        </center>
        <div class="columns is-mobile">
          <div class="column is-three-fifths is-offset-one-fifth srm_page_item">
            <div v-html="event.content"></div>
          </div>
        </div>
        <!-- <div v-html="eventItem.field_band_member_srm"></div>
        <p>Location: {{ eventItem.field_location_srm }}</p>
        <p>Genre: {{ eventItem.field_genre_srm }}</p>-->
      </div>
    </section>
    </div>
    <template v-if="!data">
      <section class="section">
        <div class="column is-half is-offset-one-quarter mgb-large">
          <b-skeleton height="10"></b-skeleton>
        </div>
        <div class="column is-half is-offset-one-quarter mb-6">
          <b-skeleton height="30"></b-skeleton>
        </div>
        <div class="column is-three-fifths is-offset-one-fifth mb-4">
          <b-skeleton class="is-half" height="600"></b-skeleton>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  head() {
    return {
      // title: "SRM Bands Bookings & Services -" + this.eventItem.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "SRM Bands Bookings & Services",
        },
      ],
    };
  },
  data() {
    return {
      // eventItem: "",
    };
  },
    props: ["data"],  
  // async mounted() {
  //   let uri = "https://cms.xabi.us/api/v1/srmevent/" + this.$route.params.id;
  //   axios.get(uri).then((response) => {
  //     this.eventItem = response.data[0];
  //   });
  // },
};
</script>

<style>
.srm_page_item {
  margin-top: 45px;
  line-height: 30px;
  font-size: 18px;
}
.srm_page_item p {
  padding-bottom: 20px;
}
@media only screen and (max-width: 600px) {
  .srm_page_item {
    margin: 45px auto 0 !important;
    min-width: 95% !important;
  }
}
</style>