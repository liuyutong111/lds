<template>
  <d2-container>
    <el-container>
      <el-header><img src="./02/top.png" alt=""></el-header>
      <el-main>
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="grid-content bg-purple gc1">
              <div class="title">网站名称：</div>
              <el-input
                class="height2 common"
                placeholder="智能监测线夹"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">网站地址：</div>
              <el-input
                class="height2 common"
                placeholder="www.it.com"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">系统邮箱：</div>
              <el-input
                class="height2 common"
                placeholder="123@qq.com"
                v-model="input"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple gc2">
              <div class="title">广告语：</div>
              <el-input
                class="common"
                placeholder="让电的连接更加安全，快捷！"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">客服热线：</div>
              <el-input
                class="common"
                placeholder="010-123456"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">背景图片上传：</div>
              <el-upload
                class="avatar-uploader height2 common"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <div v-else class="uploading">
                  <div class="add_img">
                    <img src="./02/tianjia-3.png" alt="">
                  </div>
                  <div class="add_word">上传图片</div>
                </div>
              </el-upload>
              <div class="title">首页用户标志：</div>
              <el-upload
                class="avatar-uploader height2 common"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <div v-else class="uploading">
                  <div class="add_img">
                    <img src="./02/tianjia-3.png" alt="">
                  </div>
                  <div class="add_word">上传图片</div>
                </div>
              </el-upload>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple gc3">
              <div class="title">底部版权信息：</div>
              <el-input
                class="common"
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">公司名称：</div>
              <el-input
                class="common"
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">备案号：</div>
              <el-input
                class="common"
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">系统隶属公司：</div>
              <el-input
                class="common"
                placeholder="请输入内容"
                v-model="input"
                clearable>
              </el-input>
              <div class="title">LOGO图片上传：</div>
              <el-upload
                class="avatar-uploader height2 common"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <div v-else class="uploading">
                  <div class="add_img">
                    <img src="./02/tianjia-3.png" alt="">
                  </div>
                  <div class="add_word">上传图片</div>
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <div @click="open"><img style="width:80%" src="./02/xingzhuang.png" alt=""><span style="display:inline-block">保存</span></div>
      </el-main>
    </el-container>
  </d2-container>
</template>

<script>
export default {
  name: 'xtsetting',
  data () {
    return {
      input: '',
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    open(){
      console.log('点击保存')
      this.$confirm('您确定要启用此项吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    }
  }
}
</script>

<style scoped>
  .el-header {
    background-color: transparent;
    text-align: center;
  }
  .el-main {
    background-color: transparent;
  }
  .el-main div span{
    width:18%;
    height:50px;
    background-image: url('./02/按钮.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 2%;
    text-align: center;
    line-height: 50px;
    font-size: 22px;
    color:#fff
  }
  .el-main div span:hover{
    cursor: pointer;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: transparent;
  }
  .bg-purple {
    background: transparent;
    height: 630px;
  }
  .bg-purple-light {
    background: transparent;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 2rem;
  }
  .gc1{
    background-image: url('./02/基本信息.png');
  }
  .gc2{
    background-image: url('./02/内容信息.png');
  }
  .gc3{
    background-image: url('./02/底部信息.png');
  }
  .row-bg {
    padding: 10px 0;
    background-color: transparent;
  }
  .title{
    color: rgb(0,255,236);
    font-size: 0.8rem;
    margin: 2rem 0 1rem 0;
  }
  .height2{
    height: 5.5rem;
  }
  .common{
    border: 0.5px solid #00ffea;
    box-shadow: 0.5px 0.5px 5px #00ffea inset;
    background: #013354;
  }
  .uploading{
    width: 5rem;
    height: 3rem;
  }
  .add_img{
    width: 1.5rem;
    height: 1.5rem;
    transform: translateX(120%);
  }
  .add_img img{
    width: 100%;
    height: 100%;
  }
  .add_word{
    margin-top: 0.3rem;
    color: #2dffea;
    font-size: 12px;
    font-weight: 300;
  }
  .avatar-uploader{
    border: 1px solid #2dffea;
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .el-icon-plus{
    font-size: 1.5rem;
  }
</style>
