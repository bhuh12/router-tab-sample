<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <a
        href="javascript: void(0)"
        class="hightLight"
        @click="
          $routerTab.openIframe(
            'https://bhuh12.github.io/vue-router-tab/',
            'RouterTab'
          )
        "
      >
        RouterTab
      </a>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#nav {
  box-sizing: border-box;
  padding: 30px 15px;
  width: 200px;
  border-right: 1px solid #eaecef;
  text-align: center;

  a {
    display: block;
    margin: 1em 0;
    font-weight: bold;
    color: #2c3e50;

    &:hover,
    &.router-link-exact-active {
      color: #42b983;
    }

    &.hightLight {
      color: #ff5b77;

      &:hover,
      &.router-link-exact-active {
        color: red;
      }
    }
  }
}

.router-tab {
  flex: 1 1 0;
}
</style>
