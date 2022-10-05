<template>
  <div>
    <NewsItem v-bind:data="getObjects"/>
  </div>
</template>

<script>
import getObjects from "~/queries/oneObject";

export default {
  layout: "master",
  data() {
    return {
      title: "SRM News - SRM Bookings And Services Official Site",
      content:
        "Senang Rasanya Membantu",
    };
  },  
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
      variables() {
        return {
          slug: this.$route.params.id || "",
        };
      },
    },
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
};
</script>
