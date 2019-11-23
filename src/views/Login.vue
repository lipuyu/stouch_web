<template>
  <Card style="width: 350px;display:inline-block;position:relative;vertical-align:middle;line-height:normal;">
    <p slot="title">欢迎登录</p>
    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
      <FormItem prop="userName">
        <Input v-model="form.username" placeholder="请输入用户名">
          <span slot="prepend">
            <Icon :size="16" type="ios-person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入密码">
          <span slot="prepend">
            <Icon :size="14" type="md-lock"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem>
        <Button @click="handleSubmit" type="primary" long>登录</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/libs/util'

export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        username: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          login(this.form).then(res => {
            const data = res.data
            setToken(data.data.ticket)
            this.$router.push({name: 'home'})
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>
