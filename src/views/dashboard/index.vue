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
      <div class="item">
        <div class="smdy-title">表单组件:</div>
        <div>
          <t-form ref="tform" :model="userInfo" :rules="rules">
            <t-form-item label="用户名：" prop="name">
              <t-input v-model="userInfo.name" placeholder="请输入用户名" />
            </t-form-item>
            <t-form-item label="密码：" prop="password">
              <t-input v-model="userInfo.password" placeholder="请输入密码" />
            </t-form-item>
            <t-form-item>
              <el-button @click.stop="validateForm">校验</el-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import child1 from './components/child1'
import child2 from './components/child2'
import TInput from '@/components/TInput'
import TFormItem from '@/components/TFormItem'
import TForm from '@/components/TForm'
import Notice from './components/Notice'
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
    child2,
    TInput,
    TFormItem,
    TForm
  },
  data() {
    return {
      userInfo: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请输⼊⽤户名' }],
        password: [{ required: true, message: '请输⼊密码' }]
      }
    }
  },

  methods: {
    validateForm() {
      this.$refs.tform.validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$creat(Notice, {
            title: 'notice',
            message: valid ? '请求登录!' : '校验失败!',
            duration: 1000
          }).show()
        } else {
          alert('呜呜呜')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-top: 20px;
}

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
