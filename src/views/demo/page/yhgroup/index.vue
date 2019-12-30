<template>
  <d2-container>
    <template>
      <el-header>
        <img src="../../imgs/userimg/top.png" alt />
      </el-header>
      <div class="top">
        <div class="btn-1">
          <el-input placeholder="搜索用户名" v-model="input" clearable style="border: 0px"></el-input>
          <img src="../../../images/img/keyi_sousuo.png" alt />
        </div>
        <el-button class="btn-2" @click="tjgroup">添加分组</el-button>
      </div>
      <div class="content-1">
        <el-dropdown>
          <span class="el-dropdown-link btn-1" style="display:inline-block">
            请选择分组区域
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
            请选择小组名称
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
            请选择角色名称
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
          <el-date-picker
            v-model="value"
            clear-icon
            style="border: 0px"
            class="btn_1"
            type="datetime"
            placeholder="请选择创建时间"
          ></el-date-picker>
        </div>
        <el-button class="btn-2 btn-3">查询</el-button>
        <el-button class="btn-2" @click="centerDialogVisible = true">添加用户</el-button>
      </div>
      <div class="bj_container">
        <el-table ref="multipleTable" :data="tableData">
          <el-table-column prop="name" label="分组区域" align="center"></el-table-column>
          <el-table-column prop="linelu" label="小组名称" align="center"></el-table-column>
          <el-table-column prop="dqz" label="角色名称" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="cjd" label="创建时间" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sund" align="center" label="备注" show-overflow-tooltip></el-table-column>
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
        <div class="user_tj">
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="60%" center>
            <el-row :gutter="20">
              <!-- 用户id -->
              <el-col :span="4">
                <div class="grid-content bg-purple">用户ID:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 用户名 -->
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">用户名:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 性别 -->
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple user_sex">
                  <el-radio v-model="radio" label="1">男</el-radio>
                  <el-radio v-model="radio" label="2">女</el-radio>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <!-- 电话 -->
              <el-col :span="4">
                <div class="grid-content bg-purple">电话:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 角色 -->
            <el-row :gutter="20">
              <!-- 电话 -->
              <el-col :span="4">
                <div class="grid-content bg-purple">角色:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 区域 -->
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">区域:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <!-- 邮箱 -->
            <!-- 邮箱 -->
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">邮箱:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="input" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </div>
              </el-col>
            </el-row>
          </el-dialog>
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
      input: "",
      radio: 1,
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
          sund: "xx"
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
    },
    // 添加分组功能
    tjgroup () {
     this.$router.push('/tjgroup')
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
.top {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  .btn-1 {
    margin-right: 10px;
  }
}
.content-1 {
  display: flex;
  width: 100%;
  text-align: center;
}
.btn-1 {
  position: relative;
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
  img {
    position: absolute;
    top: 35%;
    left: 80%;
  }
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
}
.el-input .el-input--default .el-input--suffix {
  color: #2dfffe;
  border: 0px;
}
.el-input ::-webkit-input-placeholder {
  color: #2dfffe !important;
  font-size: 16px;
}
.left .el-input ::-webkit-input-placeholder {
  color: #2dfffe !important;
  font-size: 16px;
}
.el-select .el-input .el-input--default .el-input--suffix {
  color: #2dfffe !important;
  border: 0px;
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
.el-select .el-input {
  border: 0px;
}

// 添加用户
.user_tj .grid-content {
  color: #fff;
  text-align: right;
  line-height: 36px;
}
.user_tj .user_sex {
  text-align: left;
}
.user_tj .el-select {
  width: 100%;
}
.bj_container .user_tj .el-dialog{
   background-image: url(../../../images/tu/tankuang.png);
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
.user_tj .el-button--primary:focus,
.bijl_head .el-button--primary:hover {
  background: transparent;
  border-color: transparent;
  color: #fff;
  background-image: url(../../../images/img/keyi_button.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.user_tj .el-button--primary {
  color: #fff;
  width: 110px;
  background-color: transparent;
  border-color: transparent;
  background-image: url(../../../images/img/keyi_button.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

</style>