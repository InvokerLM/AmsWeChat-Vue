<template>
  <div id="minePage">{{pageName}}</div>
</template>

<script>
export default {
  name: "MinePage",
  data() {
    return {
      pageName: "我的页面类容"
    };
  }
};
</script>

<style scoped>
#minePage {
  font-family: fantasy;
}
</style>



