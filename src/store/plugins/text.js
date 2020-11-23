/**
 * 写法一
 * 返回一个方法，可以传递参数，需要在使用时执行一次
 */
export function text1(socket={}){
  console.log(`socket：${socket}`);
  return (store)=>{
    console.log(`store：${store}`);
    // 每次使用mutation改变数据，都会出发subscribe方法，mutation是key-value的方式，state是改变后的值
    store.subscribe((mutation,state)=>{
      console.log(`mutation：${mutation}`);
      console.log(`state：${state}`);
    })
  }
}

/**
 * 写法二
 * 直接返回
 */
export function text2(store){
  console.log(`store：${store}`);
  // 每次使用mutation改变数据，都会出发subscribe方法，mutation是key-value的方式，state是改变后的值
  store.subscribe((mutation,state)=>{
    console.log(`mutation：${mutation}`);
    console.log(`state：${state}`);
  })
}