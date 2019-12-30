<template>
  <div class="page-login" :style="{backgroundImage:'url(' + backdrop + ')'}">
    <!-- <div class="page-login--layer page-login--layer-area">
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>
    <div
      class="page-login--layer page-login--layer-time"
      flex="main:center cross:center">
      {{time}}
    </div> -->
    <div class="page-login--layer">
      <div
        class="page-login--content"
        flex="dir:top main:justify cross:stretch box:justify">
        <div class="page-login--content-header">
        </div>
        <div
          class="page-login--content-main"
          flex="dir:top main:center cross:center">
          <!-- logo -->
          <h1 style="text-align-last:justify;text-align:justify;text-justify:distribute-all-lines;width: 350px;color:#00D9CB">智能监测线夹</h1>
          <p style="margin-top:0;letter-spacing:8px;color:#00D9CB">ZHINENGJIANCEXIANJIA</p>
          <!-- form -->
          <div class="page-login--form">
              <h2 style="text-align:center;color:#00D9CB">用户注册</h2>
              <el-form
                ref="loginForm"
                label-position="top"
                :rules="rules"
                :model="regis"
                size="default">
                <el-form-item prop="userEmail">
                  <el-input
                    type="email"
                    v-model="regis.userEmail"
                    :placeholder="$t('mailbox')">
                  </el-input>
                
                </el-form-item>
                <el-form-item prop="userPassword">
                  <el-input
                    type="password"
                    v-model="regis.userPassword"
                    :placeholder="$t('password')">
                  </el-input>
                </el-form-item>
                <el-form-item prop="userPassword1">
                  <el-input
                    type="password"
                    v-model="regis.userPassword1"
                    :placeholder="$t('confirm password')">
                  </el-input>
                </el-form-item>
                <el-form-item prop="userPhone">
                  <el-input
                    type="tel"
                    v-model="regis.userPhone"
                    :placeholder="$t('11-digit mobile phone number')">
                  </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input
                    type="text"
                    style="width:260px;"
                    v-model="regis.code"
                    :placeholder="$t('Enter confirmation code')">
                  </el-input>
                  <el-button style="width:110px;margin-left:8px;background:transparent;color:#00D9CB;border:1px solid #0968A0" @click="phoneCode">{{$t('Send the verification code')}}</el-button>
                </el-form-item>
                
                <!-- <el-form-item prop="code">
                  <el-input
                    type="text"
                    v-model="formLogin.code"
                    placeholder="验证码">
                    <template slot="append">
                      <img class="login-code" src="./image/login-code.png">
                    </template>
                  </el-input>
                </el-form-item> -->
                <p
              class="page-login--options"
              flex="main:justify cross:center">
                <el-button
                  size="small"
                  @click="submit"
                  style="background:#00FFEC;border:0;margin-bottom:15px;"
                  class="button-login">
                  {{$t('registered')}}
                </el-button>
                <span @click="loginIn">{{$t('Sign in with an existing account')}}</span>
            </p>
                
              </el-form>
            <!-- quick login -->
            <!-- <el-button class="page-login--quick" size="default" type="info" @click="dialogVisible = true">
              快速选择用户（测试功能）
            </el-button> -->
          </div>
        </div>
        <div class="page-login--content-footer">
          <p class="page-login--content-footer-locales">
            <a
              v-for="language in $languages"
              :key="language.value"
              @click="onChangeLocale(language.value)">
              {{ language.label }}
            </a>
          </p>
          <p class="page-login--content-footer-copyright">
            版权信息
          </p>
          <p class="page-login--content-footer-options">
            浙江科易电器有限公司
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
import localeMixin from '@/locales/mixin.js'
import { phone } from '@/api/aa.js'
import { system } from '@/api/aa.js'
import { phonelogin } from '@/api/aa.js'
export default {
  name:'registered',
  mixins: [
    localeMixin
  ],
  data () {
      //验证邮箱
  	let userEmail = (rule, value, callback) => {
	      if (value === '') {
	        callback(new Error('请输入您的邮箱'))
	      }else if(!this.yzemail(value)){
              callback(new Error('邮箱格式有误'))
          }else{
          callback()
        } 
	  };
  	 // <!--验证手机号是否合法-->
    let userPhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if(!this.yzphone(value)){
          callback(new Error('手机号码不合法'))
      }else{
        callback()
      }
    }
    // <!--验证密码-->
    let userPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入有字母数字的6-16位密码"))
      } else if(!this.yzpassword(value)){
          callback(new Error("请输入有字母数字的6-16位密码"))
      }else{
        callback()
      }
    }
    // <!--二次验证密码-->
    let userPassword1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regis.userPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    }
    // <!--验证码-->
	  let code = (rule, value, callback) => {
	      if (value === '') {
	        callback(new Error('请输入验证码'))
	      }else {
          callback()
        } 
	  };
    return {
      backdrop:'',
      timeInterval: null,
      time: dayjs().format('HH:mm:ss'),
      // 表单
      regis: {
        userEmail: '',
        userPassword: '',
        userPassword1:'',
        userPhone:'',
        code:''
      },
      // 表单校验
      rules: {
        userEmail: [
          {
            validator: userEmail,
            trigger: 'blur'
          }
        ],
        userPassword: [
          {
            validator: userPassword,
            trigger: 'blur'
          }
        ],
        userPassword1: [
          {
            validator: userPassword1,
            trigger: 'blur'
          }
        ],
        userPhone: [
          {
            validator: userPhone,
            trigger: 'blur'
          }
        ],
        code: [
          {
            validator: code,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    // 创建后打开定时器
    // this.timeInterval = setInterval(() => {
    //   this.refreshTime()
    // }, 1000)
    var backdrop = localStorage.getItem("backdrop"); 
    if(backdrop){
      this.backdrop=backdrop
    }else{
      system().then(res => {
        this.backdrop = res.data[0].backdrop;
      });
    }
  },
  beforeDestroy () {
    // 销毁时清除定时器
    // clearInterval(this.timeInterval)
  },
  methods: {
    phoneCode(){
      phone({
        userPhone:this.regis.userPhone
      }).then(res=>{
        if(res.status==1){
          this.$message({
            type:'success',
            message:res.message
          })
        }else{
          this.$message({
            type:'warning',
            message:res.message
          })
        }
      })
    },
      loginIn(){
          this.$router.push({path:'./login'})
      },
    ...mapActions('d2admin/account', [
      'login'
    ]),
    refreshTime () {
      this.time = dayjs().format('HH:mm:ss')
    },
    /**
     * @description 接收选择一个用户快速登录的事件
     * @param {Object} user 用户信息
     */
    // handleUserBtnClick (user) {
    //   this.formLogin.username = user.username
    //   this.formLogin.password = user.password
    //   this.submit()
    // },
    /**
     * @description 提交表单
     */
    // 提交登录信息
    submit () {
      this.$refs.loginForm.validate((valid) => {
        console.log(this.regis.userEmail)
        if (valid) {
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          phonelogin({
            userPhone: this.regis.userPhone,
            userPassword: this.regis.userPassword,
            userEmail: this.regis.userEmail,
            code: this.regis.code,
          })
            .then(res => {
              // 重定向对象不存在则返回顶层路径
              if(res.status==10000){
                this.$router.push({
                  path:'./regissuccess',
                  query:{
                    userEmail:this.regis.userEmail
                  }
                  })
              }
              this.$router.replace(this.$route.query.redirect || '/')
            })
        } else {
          // 登录表单校验失败
          this.$message.error('表单校验失败，请检查')
        }
      })
    },
    //验证邮箱
    yzemail(str) {
      let re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    //验证手机
    yzphone(str) {
      let re = /^1[3456789]\d{9}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    //验证密码
    yzpassword(str) {
      let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
  }
}
</script>

<style lang="scss">
.el-input{
  border: 1px solid #0968A0;
  border-radius: 5px;
}
.el-input-placeholder{
  color:white
}
.el-input__icon{
  color:#03B3CA;
}
.el-input__inner{
  background:transparent;
  border: 0;
  color: #fff;
  margin-left:10px; 
}

.page-login {
  @extend %unable-select;
  $backgroundColor: #f0f2f5;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: relative;
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间
  .page-login--layer-time {
    font-size: 24em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  // 登陆页面控件的容器
  .page-login--content {
    height: 100%;
    min-height: 500px;
  }
  // header
  .page-login--content-header {
    padding: 1em 0;
    .page-login--content-header-motto {
      margin: 0px;
      padding: 0px;
      color: $color-text-normal;
      text-align: center;
      font-size: 12px;
    }
  }
  // main
  .page-login--logo {
    width: 240px;
    margin-bottom: 2em;
    margin-top: -2em;
  }
  // 登录表单
  .page-login--form {
    width: 380px;
    // 卡片
    .el-card {
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 150px;;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // 快速选择用户面板
  .page-login--quick-user {
    @extend %flex-center-col;
    padding: 10px 0px;
    border-radius: 4px;
    &:hover {
      background-color: $color-bg;
      i {
        color: $color-text-normal;
      }
      span {
        color: $color-text-normal;
      }
    }
    i {
      font-size: 36px;
      color: $color-text-sub;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
      color: $color-text-sub;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1em 0;
    .page-login--content-footer-locales {
      padding: 0px;
      margin: 0px;
      margin-bottom: 15px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
        margin: 0 .5em;
        &:hover {
          color: $color-text-main;
        }
      }
    }
    .page-login--content-footer-copyright {
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
      }
    }
    .page-login--content-footer-options {
      padding: 0px;
      margin: 0px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      a {
        color: $color-text-normal;
        margin: 0 1em;
      }
    }
  }
  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #FFF;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>
