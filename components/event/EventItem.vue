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
            <a href="/event">SRM Event</a>
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
        <div class="srm_time"><time :datetime="event.metadata.event_date">Event date: {{ event.metadata.event_date | formatDate }}</time></div>
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
  name: 'eventitem',
  data() {
    return {
      date: new Date(),
    };
  },
  props: ["data"],

  head(){
    return {
      title: (this.data?.objects[0].title || "Event Schedule") + " - SRM Bookings and Services Official Site",
 meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Senang Rasanya Membantu",
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: "SRM Bookings And Services Official Site",
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: "SRM Bookings And Services Official Site",
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: "Senang Rasanya Membantu",
        },                
      ],      
    }
  }
}
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