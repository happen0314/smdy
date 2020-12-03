<template>
  <div>
    <input :value="value" v-bind="$attrs" @input="handleInput">
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  name: 'TINPUT', // 不将继承过来的属性放到根元素上
  mixins: [emitter],
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
      // this.$parent.$emit('validate')
      this.dispatch('TFromItem', 'validate')
    }
  }
}
</script>

<style>

</style>
