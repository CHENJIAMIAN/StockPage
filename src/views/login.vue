<template>
  <div class="main" >
    <a-form
        id="formLogin"
        class="user-layout-login"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
    >
      <a-tabs
          :activeKey="customActiveKey"
          :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
          @change="handleTabClick"
      >
<!--        <a-tab-pane key="tab1" tab="账号密码登录">-->
<!--          <a-form-item>-->
<!--            <a-input-->
<!--                size="large"-->
<!--                type="text"-->
<!--                placeholder="请输入帐户名或邮箱地址"-->
<!--                v-decorator="[-->
<!--                'userAccount',-->
<!--                {rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}-->
<!--              ]"-->
<!--            >-->
<!--              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>-->
<!--            </a-input>-->
<!--          </a-form-item>-->

<!--          <a-form-item>-->
<!--            <a-input-->
<!--                size="large"-->
<!--                type="password"-->
<!--                autocomplete="false"-->
<!--                placeholder="请输入密码"-->
<!--                v-decorator="[-->
<!--                'userPassword',-->
<!--                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}-->
<!--              ]"-->
<!--            >-->
<!--              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>-->
<!--            </a-input>-->
<!--          </a-form-item>-->
<!--          <a-row :gutter="0">-->
<!--            <a-col :span="14">-->
<!--              <a-form-item>-->
<!--                <a-input-->
<!--                    v-decorator="['vcode', validatorRules.vcode]"-->
<!--                    size="large"-->
<!--                    type="text"-->
<!--                    placeholder="请输入验证码"-->
<!--                >-->
<!--                  <a-icon-->
<!--                      v-if="inputCodeContent == verifiedCode"-->
<!--                      slot="prefix"-->
<!--                      type="safety-certificate"-->
<!--                      :style="{ fontSize: '20px', color: '#ffffff' }"-->
<!--                  />-->
<!--                  <a-icon-->
<!--                      v-else-->
<!--                      slot="prefix"-->
<!--                      type="safety-certificate"-->
<!--                      :style="{ fontSize: '20px',color: '#ffffff' }"-->
<!--                  />-->
<!--                </a-input>-->
<!--              </a-form-item>-->
<!--            </a-col>-->
<!--            <a-col :span="10">-->
<!--              <img :src="vcodeImg" class="v-code-img" @click="changeImgCode">-->
<!--            </a-col>-->
<!--          </a-row>-->
<!--        </a-tab-pane>-->
        <a-tab-pane key="tab1" tab="手机号登录">
          <a-form-item>
            <a-input size="large" type="text" placeholder="手机号" v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]">
              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-row :gutter="16">
            <a-col class="gutter-row" :span="16">
              <a-form-item>
                <a-input size="large" type="text" placeholder="验证码" v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]">
                  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button
                  class="getCaptcha"
                  tabindex="-1"
                  :disabled="state.smsSendBtn"
                  @click.stop.prevent="getCaptcha"
                  v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
              ></a-button>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
<!--      <a-form-item>-->
<!--        <a-checkbox v-decorator="['rememberMe']">自动登录</a-checkbox>-->
<!--        <router-link-->
<!--            :to="{ name: 'recover', params: { user: 'aaa'} }"-->
<!--            class="forge-password"-->
<!--            style="float: right;"-->
<!--        >忘记密码</router-link>-->
<!--      </a-form-item>-->

      <a-form-item class="class1">
        <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>

<!--      <div class="user-login-other">-->
<!--        <span>其他登录方式</span>-->
<!--        <a>-->
<!--          <a-icon class="item-icon" type="alipay-circle"></a-icon>-->
<!--        </a>-->
<!--        <a>-->
<!--          <a-icon class="item-icon" type="taobao-circle"></a-icon>-->
<!--        </a>-->
<!--        <a>-->
<!--          <a-icon class="item-icon" type="weibo-circle"></a-icon>-->
<!--        </a>-->
<!--        <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>-->
<!--      </div>-->
    </a-form>

    <!--    <two-step-captcha-->
    <!--        v-if="requiredTwoStepCaptcha"-->
    <!--        :visible="stepCaptchaVisible"-->
    <!--        @success="stepCaptchaSuccess"-->
    <!--        @cancel="stepCaptchaCancel"-->
    <!--    ></two-step-captcha>-->
  </div>
</template>




<script>
const userInfo={
  userName:"",
  mobile:"",
  token:""
}

import global_url from "@/App";

export default {
  userInfo,
  data () {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      },
      validatorRules: {
        // userAccount: {
        //   rules: [{ required: true, message: '请输入用户名!', validator: 'click' }]
        // },
        // userPassword: {
        //   rules: [{ required: true, message: '请输入密码!', validator: 'click' }]
        // },
        mobile: { rules: [{ validator: this.validateMobile }] },
        vcode: { rule: [{ required: true, message: '请输入验证码!' }] },
        inputCode: {
          rules: [
            { required: true, message: '请输入验证码!' },
            { validator: this.validateInputCode }
          ]
        }
      },
      vcodeImg: '',
      verifiedCode: '',
      inputCodeContent: '',
      inputCodeNull: true,
      verkey: ''
    }
  },
  activated () {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))

    if(userInfo != null  && (userInfo.token)!="" && (userInfo.userId)!=""){
      this.$router.push(`/user`);
    }
  },
  methods: {

    handleTabClick (key) {
      this.customActiveKey = key
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey,
        verkey
      } = this
      console.log("verkey",verkey)
      state.loginBtn = true
      console.log("customActiveKey",customActiveKey)
      // const validateFieldsKey = customActiveKey === 'tab1' ? ['userAccount', 'userPassword', 'vcode', 'verkey'] : ['mobile', 'captcha', 'vcode', 'verkey']
      const validateFieldsKey = ['mobile', 'captcha', 'vcode', 'verkey']
      console.log("validateFieldsKey",validateFieldsKey)
      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          // console.log('login form', values)
          const loginParams = { ...values }
          delete loginParams.userAccount
          loginParams.verkey = verkey
          // console.log(values.mobile, values.captcha)
          fetch(global_url.baseUrl +
              "/api/user/login.do",{
            method:"post",
            headers:{
              "Content-type":"application/x-www-form-urlencoded;charset=UTF-8"
            },
            body:"mobile="+values.mobile+"&code="+values.captcha
          }) .then((r) => r.json()).then((r) => {
            console.log("login ", r.obj, r.errCode, r)
            if(r.errCode == "200" && r.obj){
              userInfo.userName=r.obj.userName
              userInfo.mobile=r.obj.mobile
              userInfo.token = r.obj.token
              userInfo.userId = r.obj.userId
              localStorage.setItem('userInfo',JSON.stringify(userInfo))
              console.log("localStorage['userInfo']",localStorage.getItem('userInfo'))
              this.$router.push({ path: "user"});
            }else{
              this.requestFailed(r)
              state.loginBtn = false
            }

          })


        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    getCaptcha (e) {
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)

          fetch(global_url.baseUrl +
              "/api/user/sendCode.do",{
            method:"post",
            headers:{
              "Content-type":"application/x-www-form-urlencoded;charset=UTF-8"
            },
            body:"mobile="+values.mobile
          }).then((r) => r.json()).then((r) => {
            console.log("login ", r.obj, r.errCode, r)
            if(r.errCode == "200"){
              setTimeout(hide, 2500)
              this.$notification['success']({
                message: '提示',
                description: '验证码【'+r.obj+'】已经发送到您手机',
                duration: 8
              })
            }else{
              this.requestFailed(r)
              state.loginBtn = false
            }

          })



        }
      })
    },

    requestFailed (err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data  || {}).message || err.msg|| '请求出现错误，请稍后再试',
        duration: 4
      })
    },

  }
}
</script>

<style lang="scss" scoped>
.class1{
  margin-top:24px
}
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  .v-code-img {
    height: 40px;
    float: right;
    margin-top: 2px;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.6;
    filter: alpha(opacity=60);
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
