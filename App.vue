<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VueJS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor2" aria-controls="autofocus">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class = "nav-link" :class="{ active: $route.path === '/' }" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class = "nav-link" :class="{ active: $route.path === '/blog' }" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class = "nav-link" :class="{ active: $route.path === '/services' }" to="/services">Services</router-link>
          </li>
        <li class="nav-item">
            <router-link class = "nav-link" :class="{ active: $route.path === '/contact' }" to="/contact">Contact</router-link>
          </li>
        </ul>
       </div>
      </div>
     </nav>
   <router-view/>
  </div>
</template>
