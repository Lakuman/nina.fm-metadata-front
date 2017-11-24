<template>
  <div id="app">
    <div class="sidebar">
      <router-view name = "sidebar"/></router-view>
    </div>
    <div class="main">
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
