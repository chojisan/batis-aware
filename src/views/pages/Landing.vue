<template>
  <div class="wrapper">
    <header-nav></header-nav>
    <header-slider></header-slider>
    <donate></donate>
    <about></about>
    <what-we-do></what-we-do>
    <activities></activities>
    <officers></officers>
    <contact-us></contact-us>
    <site-footer></site-footer>
  </div>
</template>

<script>
import HeaderNav from "@/views/components/HeaderNav";
import HeaderSlider from "@/views/components/HeaderSlider";
import Donate from "@/views/components/Donate";
import About from "@/views/components/About";
import WhatWeDo from "@/views/components/WhatWeDo";
import Activities from "@/views/components/Activities";
import Officers from "@/views/components/Officers";
import ContactUs from "@/views/components/ContactUs";
import SiteFooter from "@/views/components/Footer";

export default {
  name: "landing",
  components: {
    HeaderNav,
    HeaderSlider,
    Donate,
    About,
    WhatWeDo,
    Activities,
    Officers,
    ContactUs,
    SiteFooter
  }
};
</script>