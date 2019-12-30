<template>
  <div class="page-login" :style="{backgroundImage:'url(' + backdrop + ')'}">
    <!-- <div class="page-login--layer page-login--layer-area">
      <ul class="circles">
        <li v-for="n in 10" :key="n"></li>
      </ul>
    </div>-->
    <!-- <div
      class="page-login--layer page-login--layer-time"
      flex="main:center cross:center">
      {{time}}
    </div>-->
    <!-- <div
      class="page-login--layer page-login--layer-time"
      flex="main:center cross:center">
      <img :src= backdrop alt="" width="100%;height:100%">
    </div>-->
    <div class="page-login--layer">
      <div class="page-login--content" flex="dir:top main:justify cross:stretch box:justify">
        <div class="page-login--content-header"></div>
        <div class="page-login--content-main" flex="dir:top main:center cross:center">
          <!-- logo -->
          <h1 style="text-align-last:justify;text-align:justify;text-justify:distribute-all-lines;width: 350px;color:#00D9CB">智能监测线夹</h1>
          <p style="margin-top:0;letter-spacing:8px;color:#00D9CB">ZHINENGJIANCEXIANJIA</p>
          <!-- form -->
          <div class="page-login--form">
            <h2 style="text-align:center;color:#00D9CB">用户登录</h2>
              <el-form
                ref="loginForm"
                label-position="top"
                :rules="rules"
                :model="formLogin"
                size="default"
              >
                <el-form-item prop="username">
                  <el-input type="text" v-model="formLogin.username" prefix-icon="el-icon-search" :placeholder="$t('username')">
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="formLogin.password" prefix-icon="el-icon-search" :placeholder="$t('password')">
                  </el-input>
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
                </el-form-item>-->
                <el-button
                  size="default"
                  @click="submit"
                  style="background:#00FFEC;width:100%;border:0;margin-bottom:15px;"
                  class="button-login"
                >{{$t('login')}}</el-button>
              </el-form>
            <p class="page-login--options" flex="main:justify cross:center">
              <el-checkbox v-model="checked" style="color:#409eff">记住密码</el-checkbox>
              <span @click="regist">注册用户</span>
            </p>
            <!-- quick login -->
            <!-- <el-button class="page-login--quick" size="default" type="info" @click="dialogVisible = true">
              快速选择用户（测试功能）
            </el-button>-->
          </div>
        </div>
        <div class="page-login--content-footer">
          <p class="page-login--content-footer-locales">
            <a
              v-for="language in $languages"
              :key="language.value"
              @click="onChangeLocale(language.value)"
            >{{ language.label }}</a>
          </p>
          <p class="page-login--content-footer-copyright">版权信息</p>
          <p class="page-login--content-footer-options">浙江科易电器有限公司</p>
        </div>
      </div>
    </div>
    <!-- <el-dialog
      title="快速选择用户"
      :visible.sync="dialogVisible"
      width="400px">
      <el-row :gutter="10" style="margin: -20px 0px -10px 0px;">
        <el-col v-for="(user, index) in users" :key="index" :span="8">
          <div class="page-login--quick-user" @click="handleUserBtnClick(user)">
            <d2-icon name="user-circle-o"/>
            <span>{{user.name}}</span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>-->
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapActions } from "vuex";
import localeMixin from "@/locales/mixin.js";
import { system,login } from "@/api/aa.js";
export default {
  name:'login',
  mixins: [localeMixin],
  data() {
    return {
      backdrop: "",
      checked: true,
      timeInterval: null,
      time: dayjs().format("HH:mm:ss"),
      // 快速选择用户
      // dialogVisible: false,
      // users: [
      //   {
      //     name: 'Admin',
      //     username: 'admin',
      //     password: 'admin'
      //   },
      //   {
      //     name: 'Editor',
      //     username: 'editor',
      //     password: 'editor'
      //   },
      //   {
      //     name: 'User1',
      //     username: 'user1',
      //     password: 'user1'
      //   }
      // ],
      // 表单
      // 此处修改登陆表单
      formLogin: {
        username: "",
        password: ""
        //code: 'v9am'
      },
      // 表单校验
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
        // code: [
        //   {
        //     required: true,
        //     message: '请输入验证码',
        //     trigger: 'blur'
        //   }
        // ]
      }
    };
  },
  mounted() {
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
        localStorage.setItem('backdrop',res.data[0].backdrop)
      });
    }
    this.getCookie();
  },
  beforeDestroy() {
    // 销毁时清除定时器
    clearInterval(this.timeInterval);
  },
  methods: {
    regist() {
      this.$router.push({ path: "./registered" });
    },
    ...mapActions("d2admin/account", ["login"]),
    refreshTime() {
      this.time = dayjs().format("HH:mm:ss");
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
    submit() {
      console.log(this.checked);
      const self = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          //判断复选框是否被勾选 勾选则调用配置cookie方法
          if (self.checked == true) {
            console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            self.setCookie(self.formLogin.username, self.formLogin.password, 7);
          } else {
            console.log("清空Cookie");
            //清空Cookie
            self.clearCookie();
          }
          // 登录
          // 注意 这里的演示没有传验证码
          // 具体需要传递的数据请自行修改代码
          this.login({
            userName: this.formLogin.username,
            userPassword: this.formLogin.password
          }).then(() => {
            // 重定向对象不存在则返回顶层路径
            // this.$router.replace(this.$route.query.redirect || "/");
            // console.log(this.$route.query.redirect )
          });
        //  let pro = this.login({userName: this.formLogin.username, userPassword: this.formLogin.password})
        //   pro 
        //     .then((res) => {
        //       this.$router.push('/index')
        //   })
        //   .catch(err => {
        //     return this.$message.error('用户名或密码错误' + err)
        //   })
        } else {
          // 登录表单校验失败
          this.$message.error("表单校验失败，请检查");
        }
      });
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.formLogin.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.formLogin.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
  }
};
</script>

<style lang="scss" scoped>
// .page-login--form{
//   background-image: url('')
// }
.el-input{
  border: 1px solid #0968A0;
  border-radius: 5px;
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
    width: 280px;
    // 卡片
    .el-card {
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
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
        margin: 0 0.5em;
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
      background: #fff;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
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
