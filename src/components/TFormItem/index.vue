<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
// 引入异步校验插件
import Schema from 'async-validator'
import emitter from '@/mixins/emitter'
export default {
  name: 'TFORMITEM',
  componentName: 'TFromItem',
  inject: ['form'],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  created() {
    // 挂载的时候，通知form添加formItem实例
    if (this.prop) {
      this.dispatch('TFrom', 'addField', this)
    }
  },
  methods: {
    validate() {
      // 获取表单的值和相对应的规则
      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]
      // 创建异步校验插件对象
      const schema = new Schema({ [this.prop]: rule })
      // 调用validate方法进行校验
      return schema.validate({ [this.prop]: value }, (error) => {
        if (error) {
          this.error = error[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .error {
   font-size: 14px;
   color: red;
 }
</style>>

</style>
