<template>
  <d2-container>
    <div class="header">
      <img src="../../imgs/xtimg/top.png" alt="系统功能简介" />
    </div>
    <div class="contain-1">
      <div class="box">
        <img src="../../imgs/xtimg/系统简介.png" alt="系统简介" @click="tank()" />
        <div class="xtset" @click="tank()">
          <span>系统设置</span>
        </div>
      </div>
      <div class="box">
        <img src="../../imgs/xtimg/用户管理.png" alt="用户管理"  @click="tank()"/>
        <div class="xtset" @click="tank()">
          <span>设备管理</span>
        </div>
      </div>
      <div class="box">
        <img src="../../imgs/xtimg/参数设定.png" alt="参数设定" @click="tank()"/>
        <div class="xtset" @click="tank()">
          <span>实时数据</span>
        </div>
      </div>
    </div>
    <div class="contain-2">
      <div class="box">
        <img src="../../imgs/xtimg/数据报表.png" alt="数据报表" @click="tank()"/>
        <div class="xtset" @click="tank()">
          <span>日志查询</span>
        </div>
      </div>
      <div class="box">
        <img src="../../imgs/xtimg/数据分析.png" alt="数据分析" @click="tank()"/>
        <div class="xtset" @click="tank()">
          <span>用户操作</span>
        </div>
      </div>
      <div class="box">
        <img src="../../imgs/xtimg/软件功能.png" alt="软件功能" @click="tank()"/>
        <div class="xtsm" @click="tank()">
          <span>系统版权信息说明</span>
        </div>
      </div>
    </div>
    <div class="footed">
      <img style="width:85%" src="../../imgs/xtimg/xingzhuang.png" alt />
      <span style="display:inline-block">保存</span>
    </div>
    <div class="bj" v-show="flag">
      <div class="tank">
        <span style="display:inline-block">编辑< {{item}}>内容</span>
        <img src="../../../images/img/guanbi.png" alt @click="xs" />
        <div class="tex">{{textarea_1}}</div>
        <el-button>保存</el-button>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: "xtfeatures",
  data() {
    return {
      textarea_1: "",
      flag: false,
      item: '系统简介'
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
  text-align: center;
}
.contain-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 18px;
}
.contain-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 18px;
}
.box {
  margin: 0;
  padding: 0;
  width: 30%;
  font-size: 16px;
  position: relative;
  margin-right: 18px;
  overflow: hidden;
  .xtset {
    position: absolute;
    left: 40px;
    top: 70px;
    width: 108px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    color: #00f5ff;
    background-image: url("../../imgs/xtimg/jx.png");
  }
  .xtsm {
    position: absolute;
    left: 40px;
    top: 70px;
    width: 170px;
    height: 39px;
    text-align: center;
    line-height: 39px;
    color: #00f5ff;
    background-image: url("../../imgs/xtimg/1.png");
  }
}
.footed span {
  width: 10%;
  height: 50px;
  background-image: url("../../imgs/xtimg/按钮.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 1%;
  text-align: center;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
}
// 弹框
.bj {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #80d9dccc;
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
    background: url("../../../images/img/keyi_button.png") no-repeat;
    border: 0px;
    color: #fff;
    width: 13%;
    height: 50px;
    font-size: 20px;
    text-align: center;
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
