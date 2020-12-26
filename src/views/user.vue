<template>
  <div>
	<div id="user-page" v-if="global_user.userInfo.token!=''">
		<div class="avater">
			<img src="../assets/img/top_bg.png" class="avater-box"></img>
			<div class="avater-info">
				<div class="avater-info-box">
					<div class="avater-info-user-name">{{global_user.userInfo.userName}}</div>
					<div class="avater-info-user-vip">VIP</div>
				</div>
				<div class="avater-info-detail">欢迎来到鹰眼诊股</div>
			</div>
		</div>
		<div class="vip-card">
			<div class="vip-card-icon"></div>
			<div class="vip-card-text">开通VIP会员</div>
			<div class="vip-card-btn">立即开通</div>
		</div>
		<div class="list">
			<div class="list-box" v-for="(list,index) in listData" :key="index">
				<img :src="list.icon" class="list-box-icon"></img>
				<div class="list-box-title" v-text="list.title"></div>
				<div class="list-box-text" v-text="list.text"></div>
				<div class="list-box-next"></div>
			</div>
		</div>
		<div class="shadow"></div>
	</div>

  <div id="user-login" v-else-if="global_user.userInfo.token==''">

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
      <a-form-item style="margin-top:24px">
        <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>

    </a-form>

  </div>

  </div>



</template>
<script>
import global_user from "@/App"
import global_url from "@/App";
	export default {
		data() {
			return {
			  global_user,
				listData: [{
					icon:require('../assets/img/user-mine.png'),
					title:'我的订单',
					text:'身份证信息已完善'
				},{
					icon:require('../assets/img/user-phone.png'),
					title:'手机号码',
					text:global_user.userInfo.mobile
				},{
					icon:require('../assets/img/user-gp.png'),
					title:'我的自选股',
					text:''
				},{
					icon:require('../assets/img/user-date.png'),
					title:'VIP到期日期',
					text:''
				},{
					icon:require('../assets/img/user-qy.png'),
					title:'VIP权益',
					text:''
				}],



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

			};
		},
    created() {
      // console.log("before login", userInfo.userInfo.token)
		  // if(userInfo.userInfo.token==""){
		  //   console.log("login")
      //   this.$router.push(`/login`);
      // }

    },
    methods: {


      gRandom () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      },
      guid () {
        this.verkey = (this.gRandom() + this.gRandom() + '-' + this.gRandom() + '-' + this.gRandom() + '-' + this.gRandom() + '-' + this.gRandom() + this.gRandom() + this.gRandom())
        console.log(this.verkey)
        return this.verkey
      },
      // imgCode () {
      //   return 'http://127.0.0.1:8080/auth/vcode?codeKey=' + this.guid() + '&n=' + Math.random()
      // },
      // changeImgCode () {
      //   this.vcodeImg = this.imgCode()
      // },
      handleTabClick (key) {
        this.customActiveKey = key
        // this.form.resetFields()
      },
      handleSubmit (e) {
        e.preventDefault()
        const {
          form: { validateFields },
          state,
          customActiveKey,
          Login,
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
                global_user.userInfo.userName=r.obj.userName
                global_user.userInfo.mobile=r.obj.mobile
                global_user.userInfo.token = r.obj.token
                global_user.userInfo.userId = r.obj.userId
                console.log("global_user",global_user.userInfo)
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
                  description: '验证码已经发送到您手机',
                  duration: 8
                })
              }else{
                this.requestFailed(r)
                state.loginBtn = false
              }

            })


            //
            //     .then(res => {
            //   setTimeout(hide, 2500)
            //   this.$notification['success']({
            //     message: '提示',
            //     description: '验证码已经发送到您手机',
            //     duration: 8
            //   })
            // })


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

	};
</script>
<style lang="scss" scoped>
	#user-page {
		.avater {
			width: 100%;
			height: 110px;
			display: inline-flex;
			align-items: center;

			&-box {
				width: 64px;
				height: 64px;
				border-radius: 50%;
				margin-left: 16px;
			}

			&-info {
				margin-left: 16px;

				&-box {
					display: inline-flex;
					margin-top: 6px;
					justify-content: center;
					align-items: center;
				}

				&-user-name {
					font-size: 20px;
					font-weight: bold;
					color: #333333;
				}

				&-user-vip {
					width: 28px;
					height: 16px;
					background: #FDCA35;
					border-radius: 4px;
					font-size: 12px;
					font-weight: bold;
					color: #333333;
					text-align: center;
					line-height: 16px;
					margin-left: 10px;
				}

				&-detail {
					font-size: 12px;
					font-weight: 500;
					color: #999999;

				}
			}
		}

		.vip-card {
			margin: 0 16px;
			width: calc(100% - 32px);
			height: 62px;
			border-radius: 15px 15px 0px 0px;
			background-image: url(../assets/img/top_bg.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			display: inline-flex;
			align-items: center;

			&-icon {
				width: 24px;
				height: 24px;
				background-image: url(../assets/img/vip-icon.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				margin-left: 18px;
			}

			&-text {
				font-size: 16px;
				font-weight: 500;
				color: #FFFFFF;
				width: 60%;
				margin-left: 6px;
			}

			&-btn {
				width: 20%;
				height: 28px;
				background: #FFFFFF;
				border-radius: 14px;
				text-align: center;
				line-height: 28px;
				font-size: 12px;
				font-weight: 600;
				color: #3973F7;
			}
		}

		.list {
			box-shadow: 0px 1px 7px 0px rgba(3, 23, 27, 0.15);
			border-radius: 14px 14px 0px 0px;
			padding: 10px 16px 70px 16px;
			z-index: 3;
			&-box {
				height: 60px;
				display: inline-flex;
				align-items: center;
				width: 100%;

				&-icon {
					width: 22px;
					height: 22px;
					margin-right: 4%;
				}

				&-title {
					font-size: 16px;
					font-weight: 500;
					color: #333333;
					width: 46%;
				}

				&-text {
					font-size: 12px;
					font-weight: 500;
					color: #999999;
					width: 36%;
					margin-right: 5%;
					text-align: right;
				}

				&-next {
					background-image: url(../assets/img/next-icon.png);
					width: 6px;
					height: 12px;
					background-size: 100% 100%;
					background-repeat: no-repeat;
				}
			}
		}
		.shadow{
			width: 100%;
			height: 10px;
			background-color: #ffffff;
			margin-top: -2px;
			z-index: 4;
		}
	}

  #user-login{
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

  }
</style>
