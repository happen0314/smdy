<template>
  <div>
    child1
    <el-button size="mini" @click="callChild2">call child2</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    callChild2() {
      this.$eventBus.$emit('call', '我是child1')
    }
  }
}
</script>

<style>

</style>
