<template>
  <div>
    <RostersItem v-bind:data="getObjects" :title="title"/>
  </div>
</template>

<script>
import getObjects from "~/queries/oneObject";

export default {
  layout: "master",
  data() {
    return {
      title: "Our Rosters - SRM Bookings And Services Official Site",
      content: "Senang Rasanya Membantu",
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
};
</script>
