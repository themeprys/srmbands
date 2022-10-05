<template>
  <div>
    <EventItem v-bind:data="getObjects"/>
  </div>
</template>

<script>
import getObjects from "~/queries/oneObject";

export default {
  layout: "master",


  // head() {
  //   return {
  //     title:  this.data.title,
  //     meta: [
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: "SRM Bands Bookings & Services",
  //       },
  //     ],
  //   };
  // },


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
  
};
</script>
