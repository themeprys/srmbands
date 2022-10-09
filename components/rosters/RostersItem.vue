<template>
  <div>
    <template v-if="data">
    <section class="section" v-for="roster in data.objects" :key="roster.id">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rosters">Our Rosters</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ roster.title }}</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1
          class="srm_title is-size-1 has-text-centered has-text-weight-bold has-text-black"
        >{{ roster.title }}</h1>
        <center>
          <img class="srm_image_item" :src="roster.metadata.foto_band.url" alt="SRM Bands" />
        </center>
        <div class="columns is-mobile">
          <div class="column is-three-fifths is-offset-one-fifth srm_page_item">
            <div v-html="roster.content"></div>
          </div>
        </div>        
      </div>
    </section>
    </template>
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
      title: (this.data?.objects[0].title || "Our Rosters") + " - SRM Bookings and Services Official Site",
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
    };
  },
  props: ["data", 'title'],

  data() {
    return {
      // artistItem: "",
    };
  },
  // async mounted() {
  //  let uri = "https://cms.xabi.us/api/v2/srmartist/" + this.$route.params.slug;
  //   axios.get(uri).then((response) => {
  //       console.log(response.data)
  //     this.artistItem = response.data[0];
  //   });
  // },
};
</script>
