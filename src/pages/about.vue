<template>
    <div>The About page</div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        title: "About"
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
        color: #2A3E51;
    }
</style>