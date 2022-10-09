<template>
  <div>
    <div v-if="data">
    <section class="section" v-for="news in data.objects" :key="news.id">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">SRM News</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page" v-html="news.title"></a>
          </li>
        </ul>
      </nav>
      <div>
        <h1
          class="srm_title news is-size-1 has-text-centered has-text-weight-bold has-text-black"
          v-html="news.title"
        ></h1>
        <div class="srm_time"><time :datetime="news.metadata.tanggal">Posted on {{ news.metadata.tanggal | formatDate}}</time></div>
        <center>
          <img class="srm_image_item" :src="news.metadata.foto.url" alt="SRM Bands" />
        </center>
        <div class="columns is-mobile">
          <div class="column is-three-fifths is-offset-one-fifth srm_page_item">
            <div v-html="news.content"></div>
          </div>
        </div>        
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
    data() {
    return {
      date: new Date(),
    };
  },
  head() {
    return {
      title: (this.data?.objects[0].title || "SRM News") + " - SRM Bookings and Services Official Site",
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
  data() {
    return {
      // newsItem: "",
//      content: this.newsItem.body,
    };
  },
    props: ["data"],

  // async mounted() {
  //   let uri = "https://cms.xabi.us/api/v1/srmnews/" + this.$route.params.id;
  //   axios.get(uri).then((response) => {
  //     this.newsItem = response.data[0];
  //   });
  // },
};
</script>

<style>
.srm_image_item {
-webkit-box-shadow: 10px 14px 30px -16px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 14px 30px -16px rgba(0,0,0,0.75);
box-shadow: 10px 14px 30px -16px rgba(0,0,0,0.75);
}

</style>