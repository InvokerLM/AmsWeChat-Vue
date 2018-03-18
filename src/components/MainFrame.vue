<template>
<div class="mainFrame">
  <div id="mainFrameContainer">
      <router-view></router-view>
  </div>
  <footer class="toolBar">操作</footer>
</div>
</template>

<script>
export default {
  name: "mainFrame",
  data() {
    return {
      toolBarIndex: 0
    };
  }
};
</script>

<style scoped>
    footer{
        height: 60px;
        display: block;
        background: lightblue;
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>


