<template>
  <div class="srm_nav">
    <b-navbar class="container is-uppercase has-text-weight-semibold">
      <template slot="brand">
        <p class="srm_slogan_logo">Bookings &<br>Services</p>
        <!-- <b-navbar-item class="srm_logo_wrap" tag="router-link" :to="{ path: '/v2' }">
            <img src="~/static/img/srmbands-logo-new.png" alt="SRM Bands" width="221px" />
        </b-navbar-item> -->
      </template>
      <template slot="start">
        <b-navbar-item tag="nuxt-link" to="/">Home</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/rosters">Our Rosters</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/news">News</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/event">Event</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/bookings">Bookings</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/partners">Partners</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/our-team">Our Team</b-navbar-item>        

      </template>
      <template slot="end">
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://www.facebook.com/SRMbands"
        >
          <b-icon pack="fab" icon="facebook-square" size="is-small"></b-icon>
        </b-navbar-item>
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://twitter.com/SRMbands"
        >
          <b-icon pack="fab" icon="twitter-square" size="is-small"></b-icon>
        </b-navbar-item>
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://www.youtube.com/channel/UCwcoGKJ7k6SvcrIar_xxmlw"
        >
          <b-icon pack="fab" icon="youtube" size="is-small"></b-icon>
        </b-navbar-item>     
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://soundcloud.com/srmbands"
        >
          <b-icon pack="fab" icon="soundcloud" size="is-small"></b-icon>
        </b-navbar-item>     
        <b-navbar-item
          tag="a"
          target="_blank"
          href="https://www.instagram.com/srmbands/"
        >
          <b-icon pack="fab" icon="instagram" size="is-small"></b-icon>
        </b-navbar-item>                        
      </template>
    </b-navbar>
  </div>
</template>
<style>
.container {
  max-width: 1152px;
}
/* .navbar-item img {
  max-height: 80px;
}

.is-bookings {
  background: #1c75d2;
  color: #eee;
  border: 0px solid transparent;
  text-shadow: 1px 1px 1px #666;
}
.is-bookings:hover {
  color: #fff;
}
.navbar.is-black .navbar-brand > a.navbar-item:hover {
  background-color: transparent !important;
} */
@media only screen and (max-width: 600px) {
  .navbar-burger.burger {
    top: 20px;
    right: 10px;
  }
  .navbar-menu {
    padding: 0px;
  }
  .navbar-menu .navbar-start .navbar-item {
    border-bottom: 1px solid #eee;
    font-size: 17px;
    padding: 15px 0 13px 30px;
  }
  .navbar-menu .navbar-end {
    padding: 20px 20px 25px 20px;
  }

  .navbar-menu .navbar-end .navbar-item {
    display: inline;
  }
}
</style>