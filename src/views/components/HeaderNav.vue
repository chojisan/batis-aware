<template>
  <base-nav
    class="navbar-top navbar-horizontal navbar-dark"
    containerClasses="px-4 container"
    expand
  >
    <router-link slot="brand" class="navbar-brand" to="/">
      <img src="@/assets/img/logo/logo.png">
    </router-link>

    <ul class="nav ml-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="#about-us" class="nav-link">About Us</router-link>
      </li>
      <li class="nav-item">
        <router-link to="#what-we-do" class="nav-link">What We Do</router-link>
      </li>
      <li class="nav-item">
        <router-link to="#activities" class="nav-link">Activities</router-link>
      </li>
      <li class="nav-item">
        <router-link to="#officers" class="nav-link">Officers</router-link>
      </li>
      <li class="nav-item">
        <router-link to="#contact" class="nav-link">Contact</router-link>
      </li>
    </ul>
  </base-nav>
</template>