export default {
  methods: {
    dispatch(componentName, eventName, params) {
      // 获取当前组件的parent或者跟节点
      let parent = this.$parent || this.$root
      // 获取parentd componentName
      let name = parent.$options.componentName
      // 循环找到componentName相同的组件,找到则终止循环
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent || parent.$root
        if (parent) {
          name = parent.$options.componentName
        }
      }
      // 无论找没找到，都emit一个事件出去（两种写法都可以）
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
        // parent.$emit(eventName, params)
      }
    }
  }
}
