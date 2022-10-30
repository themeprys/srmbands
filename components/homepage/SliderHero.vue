<template>
  <section>
    <b-carousel
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode"
      :indicator-position="indicatorPosition"
      :indicator-style="indicatorStyle"
      :pause-hover="pauseHover"
      :autoplay="autoPlay"
      :interval="interval"
      :repeat="repeat"
      :progress="progress"
      :progress-type="progressType"
    >
    <template v-if="!getObjects">
      <b-carousel-item>
        <section class="hero is-large">
          <div class="hero-body">
            <b-skeleton width="500" height="40"></b-skeleton>
            <b-skeleton width="500" height="40"></b-skeleton>
            <hr>
            <b-skeleton width="160" height="60"></b-skeleton>
          </div>
        </section>
      </b-carousel-item>
    </template>
        <template v-if="getObjects">

      <b-carousel-item  v-for="hero in listHomehero" :key="hero.id">
        <section class="hero is-large">
          <div class="filter"></div>
          <div class="hero-body">
            <p class="title is-4" v-html="hero.title"></p>
            <nuxt-link :to="/news/ + hero.slug">
              <b-button type="is-large is-outlined is-bookings" class="srm_hero_link">Read More</b-button>
            </nuxt-link>
          </div>
          <img :src="hero.metadata.foto.imgix_url" alt="SRM Bands" />
        </section>
      </b-carousel-item>
        </template>
    </b-carousel>
  </section>
</template>

<script>
import getObjects from "~/queries/allHero";

// import axios from "axios";

export default {
  data() {
    return {
      listHeadline: null,
      indicator: true,
      indicatorBackground: true,
      indicatorInside: true,
      indicatorMode: "hover",
      indicatorPosition: "is-bottom",
      indicatorStyle: "is-lines",
      pauseHover: true,
      autoPlay: true,
      interval: 3000,
      repeat: true,
      progress: false,
      progressType: "is-dark",
    };
  },
    //  props: ['data'],
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
computed: {
    listHomehero() {
      return this.getObjects.objects.slice().sort((b, a) => {
        return (
          new Date(a.metadata.tanggal) - new Date(b.metadata.tanggal)
        );
      });
    },
  },  
  // async mounted() {
  //   const response = await axios.get(
  //     "https://cms.xabi.us/api/v1/srmsliderhero"
  //   );
  //   this.listHeadline = response.data;
  // },
};
</script>

<style>
.carousel,
.carousel .carousel-items {
  height: 600px !important;
}
.hero-body {
  position: absolute;
  top: 170px;
  left: 100px;
  padding: 0 !important;
  margin: 0 !important;
}
.hero img {
  max-width: auto;
  height: 600px;
  object-fit: cover;
}
.hero .title {
  padding: 20px;
  font-size: 45px;
  max-width: 550px;
  color: #fff;
  border-bottom: 1px solid #999;
  padding: 0 0 25px 0;
  min-height: 100px;
  text-shadow: 1px 1px 1px #333;
}
.filter {
  background: #0a0a0a70;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
}
.srm_hero_link > span {
  font-size: 20px;
  font-weight: bold;
    font-family: 'Signika', sans-serif !important;
}

@media only screen and (max-width: 600px) {
  .hero-body {
    left: 0;
    padding: 0 25px !important;
    top: 100px;
  }
  .carousel, .carousel .carousel-items {
    height: 500px !important;
  }
.srm_wrap_main {
    margin: 30px 10px 0px !important;
    padding: 0 15px;
}
.srm_rosters_wrap, .srm_events_wrap {
    margin: 0 15px 15px !important;
}  

}
</style>