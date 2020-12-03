import Vue from 'vue'

function creat(component, props) {
  // 新建一个vue实例
  const vm = new Vue({
    render(h) {
      // 生成虚拟dom
      return h(component, { props })
    }
  }).$mount() // 生成真实dom
  // 获取dom元素
  const realDOM = vm.$el
  // 将dom追加到body上
  document.body.appendChild(realDOM)
  // 获取组件实例
  const comp = vm.$children[0]
  // 销毁组件
  comp.remove = () => {
    document.body.removeChild(realDOM)
    vm.$destroy()
  }
  return comp
}

export default creat
