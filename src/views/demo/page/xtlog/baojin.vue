<template>
  <d2-container>
    <div class="header">
      <img src="../../imgs/rzimg/top.png" alt="日志查询" />
    </div>

    <div class="kz">
      <img style="width:60%" src="../../../images/img/xingzhuang.png" alt />
      <span style="display:inline-block" @click="denglu">
        登录
        <div class="img">
          <img src="../../imgs/rzimg/denglu.png" alt />
        </div>
      </span>
      <span style="display:inline-block" @click="caozuo">
        操作
        <div class="img">
          <img src="../../imgs/rzimg/caozuo.png" alt />
        </div>
      </span>
      <span style="display:inline-block">
        报警
        <div class="img">
          <img src="../../imgs/rzimg/alert.png" alt />
        </div>
      </span>
    </div>
    <div class="bj_container">
      <el-table :data="tableData" >
        <el-table-column prop="bh" label="设备编号"></el-table-column>
        <el-table-column prop="us" label="采集点"></el-table-column>  
        <el-table-column prop="cont" label="当前值"></el-table-column>
        <el-table-column prop="dizhi" label="报警状态"></el-table-column>
        <el-table-column prop="time" label="报警时间"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="searchForm.page"
          :page-sizes="[10, 15, 20, 40]"
          :page-size="searchForm.per_page"
          layout=" prev, pager, next,sizes, jumper"
          :total="tot"
          background
        ></el-pagination>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: "xtlog",
  data() {
    return {
      searchForm: {
        page: 1,
        per_page: 10
      },
      tot: 0,
      value1: "",
      currentPage: 5,
      tableData: [
        {
          bh: "xxxx",
          us: "xxxx",
          time: "xxxx",
          cont: "xxxx",
          dizhi: "xxxx"
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    // 登录按钮功能
    denglu() {
      this.$router.push("./login");
    },
    // 操作按钮功能
    caozuo(){
      this.$router.push('./caozuo')
    },
  }
};
</script>
<style llang="scss" scoped>
@import "../../../demo/css/bj.css";
.header {
  text-align: center;
}
.kz {
  position: relative;
}
.kz span {
  position: relative;
  width: 15%;
  height: 60px;
  line-height: 70px;
  color: #fff;
  font-size: 18px;
  background: url("../../imgs/rzimg/4.png") no-repeat;
  text-align: center;
  margin-right: -30px;
}
.kz span .img {
  position: absolute;
  top: 8px;
  left: 40px;
}
.el-pagination {
  text-align: center;
  margin-top: 15px;
}
.bj_container {
  margin-top: 1%;
  background: url("../../../images/img/keyi_background.png") no-repeat;
  background-size: 100% 100%;
}
</style>
