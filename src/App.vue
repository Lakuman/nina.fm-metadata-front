<template>
  <div id="app">
    <div class="sidebar col-md-2 col-sm-2 col-xs-2 col-2">
      <router-view name = "sidebar"/></router-view>
    </div>
    <div class="main col-md-10 col-sm-10 col-xs-10 col-10">
      <router-view/></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
