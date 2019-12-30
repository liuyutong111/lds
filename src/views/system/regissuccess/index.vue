<template>
  <div class="page-login" :style="{backgroundImage:'url(' + backdrop + ')'}">
    <div class="page-login--layer">
      <div
        class="page-login--content"
        flex="dir:top main:justify cross:stretch box:justify">
        <div class="page-login--content-header">
          <div>
            <h1 style="color:#00D9CB">LOGO</h1>
          </div>
          <div style="margin-right:0px;">
            <p style="text-align-last:justify;text-align:justify;text-justify:distribute-all-lines;width: 340px;color:#00D9CB">智能监测线夹</p>
            <p style="margin-top:0;letter-spacing:8px;color:#00D9CB">ZHINENGJIANCEXIANJIA</p>
          </div>
        </div>
        <div
          class="page-login--content-main"
          flex="dir:top main:center cross:center">
          <!-- form -->
          <div class="page-login--form" style="text-algin:center">
              <div style="width:500px;">
                <div style="display:inline-block;width:80px;height:80px;border-radius:50%;background:#00D9CB;margin-right:15px;"></div>
                <div style="display:inline-block">
                  <h2 style="text-align:center;color:#00D9CB;">注册成功</h2>
                  <span style='color:#00D9CB'>你的账号:</span><input class="userEmail" type="text" v-model="userEmail"/>
                </div>
              </div>
          </div>
                <el-button @click="loginIn" style="background:transparent;color:#00D9CB;border:1px solid #00D9CB;width:200px;margin-top:10px;text-align:center">去登录</el-button>
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
  name:'regissuccess',
  mixins: [
    localeMixin
  ],
  data () {
    return {
      userEmail:"",
      backdrop:''
    }
  },
  mounted () {
    //接通之后将下方的注释解开
    // this.userEmail=this.$route.query.userEmail
    var backdrop = localStorage.getItem("backdrop"); 
    if(backdrop){
      this.backdrop=backdrop
    }else{
      system().then(res => {
        this.backdrop = res.data[0].backdrop;
      });
    }
  },
  updated(){
    
  },
  methods:{
    loginIn(){
          this.$router.push({path:'./login'})
      },
  }
}
</script>

<style lang="scss">
.userEmail{
  background:transparent;
  border:0;
  margin-left:10px;
  color:#00D9CB
}
.page-login--content-header{  
  display: flex;
  justify-content: space-between;
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

  
}
</style>
