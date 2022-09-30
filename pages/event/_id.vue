<template>
  <div>
    <EventItem v-bind:data="getObjects"/>
  </div>
</template>

<script>
import getObjects from "~/queries/oneObject";

export default {
  layout: "master",
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
      title: "SRM Bookings And Services Official Site",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Senang Rasanya Membantu",
        },
      ],
    };
  },
};
</script>
