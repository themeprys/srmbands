<template>
  <div>
    <RostersHelpItem v-bind:data="getObjects"/>
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
};
</script>
