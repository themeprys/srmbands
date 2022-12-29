<template>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      SRM Headquarter : Jl. Taman Hiburan No.4, Tangerang - Indonesia<br>Contact : +62818496654 or srmbandmanagement@gmail.com<br>Website by <a href="https://www.bitarama.id/" style="color: white">BITARAMA</a> @ {{currentYear}} v.3.0.0
    </p>

  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // 2020
    };
  }
}
</script>

<style>
.footer {
    min-height: 150px;
    padding: 20px 0;
    background-color: #000;
    color: #eee;
    margin-top: 80px;
}
</style>