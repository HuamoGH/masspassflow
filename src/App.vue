<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1b356f;
  height: 100%;
}

html,body{
	height: 100%;
}

html {
  font-size: 62.5%;
}

.rooter-view {
  /* width: 100%;
  height: 100%; */
}
</style>
