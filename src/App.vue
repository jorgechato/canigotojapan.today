<template>
  <div id="app">
    <nav id="nav" class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2">
          <router-link to="/">
            <span>🇯🇵</span><span class="d-none d-sm-block">Home</span>
          </router-link>
        </div>
<!--        <div class="col col-lg-2">-->
<!--          <router-link to="/insights">-->
<!--            <span>📊</span><span class="d-none d-sm-block">Insights</span>-->
<!--          </router-link>-->
<!--        </div>-->
        <div class="col col-lg-2">
          <router-link to="/about">
            <span>✍️</span><span class="d-none d-sm-block">About</span>
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131313;
}

#nav {
  padding: 30px 0;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #131313;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #C70025;
}
</style>
