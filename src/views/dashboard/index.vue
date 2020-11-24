<template>
  <div class="dashboard-container">
    <div>
      <div class="smdy-title">iconfont:</div>
      <div>
        普通方法引入的iconfont：
        <i class="normal-iconfont iconfont iconrijijilu" />
      </div>
      <div>
        仿ele方法引入的iconfont：
        <i class="normal-iconfont iconrijijilu" />
      </div>
      <div>
        <div class="smdy-title">vuex-mapstate:</div>
        <div>{{ name }}</div>
      </div>
      <div>
        <div class="smdy-title">自实现，不用vue对象的总线通信（eventbus）:</div>
        <div>
          <child1 />
        </div>
        <div>
          <child2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import child1 from './components/child1'
import child2 from './components/child2'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ]),
    ...mapState('user', ['name'])
  },
  components: {
    child1,
    child2
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
.smdy-title {
  font-size: 28px;
}

.normal-iconfont {
  font-size: 24px;
}
</style>
