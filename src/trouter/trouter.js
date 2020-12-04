const { default: Vue } = require("vue")

let Vue// 定义一个变量，用来接收vue实例

/**
 * 自定义路由插件
 */
class TRouter {
  /**
   * 路由构造函数
   * @param {路由构造函数参数} options
   */
  constructor(options) {
    this.$options = options
    // 创建路由映射表
    this.routerMap = {}
    this.$options.forEach(router=>{
      this.routerMap[router.path] = router
    })
    // 设置当前页面hash为响应式变量，hash一旦改变，则用到该hash值的组件都会重新render（例如router-view）
    Vue.util.defineReactive(this,'current',window.location.hash.slice(1))
    // 注册hash路由监听事件
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1)
    })
  }
}

/**
 * TRouter本质上是一个插件，要实现install方法；由于install方法不需要构建TRouter才能使用，所以写成静态方法即可
 * @param {Vue实例,Vue.use的时候会传入} Vue
 */
TRouter.install = (_Vue) => {
  Vue = _Vue
  // 使用全局混入的方式，在vue实例创建的时候将TRouter挂载到Vue原型上，方便使用this.$route的方式调用
  Vue.mixin({
    beforeCreate() {
      // 获取router实例
      const router = this.$options.router
      // 如果该实例挂载了router，则将router挂载到Vue的原型上
      if (router) {
        Vue.prototype.$route = router
      }
    }
  })

  // 创建router-link组件
  Vue.component('router-link', {
    // 不能使用template，因为在webpack环境下没有编译器，要使用render
    render(h) {
      // 返回这种格式的组件 <a href="#/xxxx">123123</a>
      return h(
        'a',
        {
          attrs: {
            href: `#${this.href}`
          },
          props: {
            to: {
              type: String,
              require
            }
          }
        },
        this.slot.default
      )
    }
  })

  // 创建router-view组件
  Vue.component('router-view',{
    render(h){
      // 获取当前的hash路径
      const path = this.$route.current
      // 找到对应的组件
      const comp = this.$route.routerMap[path]||null
      return h(comp)
    }
  })
}
