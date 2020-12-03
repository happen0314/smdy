<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TFORM',
  componentName: 'TFrom',
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // 不是响应式，没必要添加到data中
    this.fields = []
    this.$on('addField', (item) => {
      this.fields.push(item)
    })
  },
  methods: {
    validate(cb) {
      // 使用了子组件使用了dispatch
      const tasks = []
      // this.$children.filter(item => item.prop).map(item => {
      //   tasks.push(item.validate())
      // })
      this.fields.map(item => {
        tasks.push(item.validate())
      })
      Promise.all(tasks).then(() => {
        cb(true)
      }).catch((err) => {
        if (err) { cb(false) }
      })
    }
  }

}
</script>

<style>

</style>
