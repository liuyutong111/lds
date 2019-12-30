<template>
  <d2-container>
    <div class="header">
      <span style="display:inline-block">
        <strong>软件功能</strong>
      </span>
      <img src="../../imgs/rjimg/123.png" alt="日志查询" />
    </div>
    <div class="content">
      <span>网站软件功能简介</span>
      <div class="tex">{{textarea}}</div>
    </div>
    <div class="content-1">
      <img src="../../../images/img/xingzhuang.png" alt style="width:85%" />
      <span>
        <el-button @click="tank()">修改</el-button>
      </span>
      <div class="bj" v-show="flag">
        <div class="tank">
          <span style="display:inline-block">编辑<软件功能>内容</span>
          <img src="../../../images/img/guanbi.png" alt @click="xs" />
          <div class="tex">{{textarea_1}}</div>
          <el-button>保存</el-button>
        </div>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: "xtsoftware",
  data() {
    return {
      textarea: "",
      textarea_1: "",
      flag: false
    };
  },
  methods: {
    tank() {
      this.flag = true;
    },
    xs() {
      this.flag = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  text-align: center;
  span {
    position: absolute;
    font-size: 24px;
    top: -20%;
    left: 47%;
    color: #00f5ff;
  }
}
.content {
  position: relative;
  background-image: url("../../imgs/rjimg/1.png");
  padding-right: 58px;
  width: 1564px;
  height: 837px;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  span {
    position: absolute;
    top: 2%;
    left: 45%;
    font-size: 20px;
    color: #00f5ff;
  }
  .tex {
    position: absolute;
    padding: 0;
    margin: 0;
    width: 1448px;
    top: 80px;
    left: 58px;
    font-size: 16px;
    color: #fff;
  }
}
.content-1 {
  width: 1564px;
}
.el-button {
  background: url("../../../images/img/keyi_button.png") no-repeat;
  border: 0px;
  color: #fff;
  width: 13%;
  height: 50px;
  font-size: 20px;
  text-align: center;
  margin-left: 2%;
}
.bj {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#80D9DCCC;
  z-index: 1000;
}
.tank {
  position: absolute;
  margin-top: 10%;
  left: 25%;
  width: 917px;
  height: 473px;
  background: url("../../imgs/rjimg/kuang.png") no-repeat;
  background-size: 100% 100%;
  z-index: 2000;
  span {
    position: absolute;
    width: 162px;
    height: 17px;
    left: 24px;
    top: 10px;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
  img {
    position: absolute;
    left: 100%;
    bottom: 105%;
  }
  .el-button {
    position: absolute;
    top: 95%;
    left: 40%;
  }
  .tex {
    position: absolute;
    top: 15%;
    left: 24px;
    width: 95%;
    height: 100%;
    background-color: transparent;
    border: 1px solid transparent;
    color: #fff;
    font-size: 16px;
  }
}
</style>
