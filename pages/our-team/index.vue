<template>
  <section class="section">
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
          <li class="is-active">
            <a href="#" aria-current="page">Our Team</a>
          </li>

      </ul>
    </nav>
    <TeamItem v-bind:data="getObjects"/>
  </section>
</template>

<script>
import getObjects from "~/queries/ourTeam";


export default {
  layout: "master",
  data() {
    return {
      title: "Our Team - SRM Bookings And Services Official Site",
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
  apollo: {
  getObjects: {
      prefetch: true,
      query: getObjects
    }
  },   
};
</script>
