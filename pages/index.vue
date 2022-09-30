<template>
  <div>
    <homepageSliderHero />
    <div class="columns is-multiline is-gapless srm_wrap_main">
      <div class="column is-6">
        <homepageLatestVideo />
      </div>
      <div class="column is-6">
        <homepageNewSingle/>
      </div>
    </div>
    <div class="columns is-multiline is-gapless">
      <div class="column is-12">
        <homepageOurRosters />
      </div>
    </div>
    <div class="columns is-multiline srm_rosters_wrap">
      <div class="column is-12">
        <div class="container">
        <homepageHappyCard />
        </div>
      </div>
    </div>

    <div class="columns is-multiline is-gapless">
      <div class="column is-12">
        <homepageSrmEvents />
      </div>
    </div>
  </div>
</template>

<script>
// import getObjects from "~/queries/allHero";
// import getObjects from "~/queries/latestVideo";
// import getObjects from "~/queries/newSingle";
// import getObjects from "~/queries/homeRosters";
// import getObjects from "~/queries/homeEvents";


export default {
  data() {
    return {
      title: "SRM Bookings And Services Official Site",
      content:
        "Senang Rasanya Membantu",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.content,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.title,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.content,
        },
      ],
    };
  },
 layout: 'home',
  // apollo: {
  // getObjects: {
  //     prefetch: true,
  //     query: getObjects
  //   }
  // },  
};
</script>

<style>
.srm_wrap_main {
  margin-bottom: 0px !important;
}
</style>