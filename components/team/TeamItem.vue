<template>
  <div>
    <section class="section" v-if="data">
      <div v-for="team in data.objects" :key="team.id">
        <!-- <h1
          class="news is-size-1 has-text-centered has-text-weight-bold has-text-black"
          v-html="partnersItem.title"
        ></h1> -->
        <!-- <div class="srm_time"><time :datetime="partnersItem.field_post_date">Posted on {{ partnersItem.field_post_date }}</time></div> -->
        <center>
          <img class="srm_image_item" :src="team.metadata.team_image.url" alt="SRM Bands" />
        </center>
        <div class="columns is-mobile">
          <div class="column is-three-fifths is-offset-one-fifth srm_page_item">
            <div v-html="team.content"></div>
          </div>
        </div>        
      </div>
    </section>
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
      // partnersItem: "",
//      content: this.newsItem.body,
    };
  },
  props: ['data'],
  // async mounted() {
  //   let uri = "https://cms.xabi.us/api/v1/srmpages/159";
  //   axios.get(uri).then((response) => {
  //     this.partnersItem = response.data[0];
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