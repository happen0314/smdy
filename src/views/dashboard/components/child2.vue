<template>
  <div>
    child2
  </div>
</template>

<script>
export default {
  mounted() {
    this.$eventBus.$on('call', (msg) => {
      console.log(`child1说：${msg}`)
    })
  }

}
</script>

<style>

</style>
