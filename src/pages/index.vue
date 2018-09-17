<template>
    <div>This is a test page for the nuxtober theme</div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        title: "Home"
      }
    },
    head () {
      return {
        title: this.title
      }
    }
  }
</script>

<style scoped>
    div {
        color: red;
    }
</style>
