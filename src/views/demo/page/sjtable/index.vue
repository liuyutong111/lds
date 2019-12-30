<template>
  <d2-container>
    <template>
      <el-header>
        <img src="../../imgs/sjbbimg/top.png" alt />
      </el-header>
      <div class="content-1">
        <el-dropdown>
          <span class="el-dropdown-link btn-1" style="display:inline-block">
            请选择设备名称
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link btn-1" style="display:inline-block">
            请选择设备线路
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link btn-1" style="display:inline-block">
            请选择所在区域
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="time">
          <el-date-picker v-model="value" clear-icon style="border: 0px" class="btn_1"  type="datetime" placeholder="请选择日期"></el-date-picker>
        </div>
        <el-button class="btn-2 btn-3">查询</el-button>
        <el-button class="btn-2">数据视图</el-button>
        <el-button class="btn-2">下载报表</el-button>
      </div>
      <div class="bj_container">
        <el-table ref="multipleTable" :data="tableData">
          <el-table-column prop="name" label="设备" align="center" width="150"></el-table-column>
          <el-table-column prop="linelu" label="设备线路" align="center" width="150"></el-table-column>
          <el-table-column prop="dqz" label="当前值" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="cjd" label="采集点" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sund" align="center" label="太阳能电压" show-overflow-tooltip></el-table-column>
          <el-table-column prop="ddl" align="center" label="电池电量" show-overflow-tooltip></el-table-column>
          <el-table-column prop="hjw" align="center" label="环境温度" show-overflow-tooltip></el-table-column>
          <el-table-column prop="adress" align="center" label="安装位置" show-overflow-tooltip></el-table-column>
          <el-table-column prop="state_time" align="center" label="上传时间" show-overflow-tooltip></el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="100"
            layout=" prev,  pager, next,sizes, jumper"
            :page-sizes="[100, 200, 300, 400]"
            background
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </template>
  </d2-container>
</template>

<script>
export default {
  name: "sjtable",
  data() {
    return {
      value: "",
      sbName: "xxxxx",
      centerDialogVisible: false,
      tot: 0,
      val: "",
      currentPage: 5,
      currentPage4: 4,
      tableData: [
        {
          name: "xx",
          linelu: "xx",
          dqz: "xx",
          cjd: "xx",
          sund: "xx",
          ddl: "xx",
          hjw: "xx",
          adress: "xx",
          state_time: "xx"
        }
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../demo/css/bj.css";
.el-header {
  background-color: transparent;
  text-align: center;
}
.content-1 {
  display: flex;
  width: 100%;
  text-align: center;
}
.btn-1 {
  color: #2dfffe;
  margin: 0;
  padding: 0;
  height: 53px;
  width: 170px;
  line-height: 53px;
  margin-left: 10px;
  font-size: 16px;
  background: url("../../../images/img/keyi_riqibutton.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  text-align: center;
}
.time {
  position: relative;
  margin: 0;
  padding: 0;
  height: 53px;
  width: 220px;
  line-height: 53px;
  background: url("../../../images/img/keyi_riqibutton.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 10px;
  .el-input ::-webkit-input-placeholder{
    color: #2dfffe !important;
    font-size: 16px;
 }
} 

.btn-2 {
  width: 172px;
  height: 53px;
  background: url("../../../images/img/keyi_button.png") no-repeat;
  border: 0px;
  color: #fff;
}
.btn-3 {
  margin-left: 18px;
}
.el-main {
  background-color: transparent;
}
.el-pagination {
  margin-top: 20px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.el-pagination {
  text-align: center;
}
.el-dialog__wrapper {
  top: 150px;
}
.el-dialog {
  position: relative;
  .el-button {
    width: 120px;
  }
  .btn {
    position: absolute;
    width: 120px;
    left: 40%;
    top: 90%;
  }
}
.bj_container {
  margin-top: 36px;
}
</style>