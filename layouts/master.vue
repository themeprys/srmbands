<template>
  <div>
    <generalHeader />
    <generalNavbar />
    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>
    <generalFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
};
</script>

<style>
.main-content {
  min-height: 400px;
  word-wrap: break-word;
}
/* * {
  font-family: 'Open Sans', sans-serif;
} */
</style>
