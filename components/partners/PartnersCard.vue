<template>
  <div class="columns is-multiline">
    <template v-if="data">
    <div class="column is-4" v-for="partner in data.objects" :key="partner.id">
      <div class="card px-3 srm_newslist">
        <a tag="a" target="_blank" :href="partner.metadata.url_partner">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                :src="partner.metadata.foto.url"
                alt="SRM Partners"
              />
            </figure>
          </div>
        </a>
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
      // listPartners: null,
      skeleton: 9,
    };
  },
  props: ['data'],    

  // async mounted() {
  //   const response = await axios.get("https://cms.xabi.us/api/v1/srmpartners");
  //   this.listPartners = response.data;
  // },
};
</script>

<style>
.srm_newslist {
  margin: 10px;
}
</style>