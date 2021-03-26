<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/page/1">Page 1</router-link>
      <router-link to="/page/2">Page 2</router-link>
      <a
        href="javascript: void(0)"
        @click="
          $tabs.openIframe(
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
  flex: none;
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
  }
}

.router-tab {
  flex: 1 1 0px;

  &-page {
    padding: 20px 15px;
  }
}

// 移动端尺寸
$smallScreen: 767.98px;

// 移动端样式
@media screen and (max-width: $smallScreen) {
  #app {
    flex-direction: column;
  }
  #nav {
    padding: 0 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    overflow: auto;

    a {
      margin: 0 1em;
      display: inline-block;
    }
  }
}
</style>
