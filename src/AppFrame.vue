<template>
  <div id="appFrame">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppFrame'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: whitesmoke;
}
#appFrame {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

