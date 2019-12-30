<template>
  <d2-container>
    <template>
      <el-header>
        <img src="../../imgs/userimg/usergl.png" alt />
      </el-header>
      <div class="c_left grid-content bg-purple bjheadr_xz">
            <img src="../../../images/img/xingzhuang.png" alt="">
          </div>
          <div class="c_right">
            <el-input
            style="border: none;outline: none;"
              placeholder="搜索关键字"
              v-model="input"
              clearable class="ss_search">
            </el-input>
            <span class="el-icon-search"></span>
            <el-button class="ss_submit">添加用户</el-button>
          </div>
      <div class="bj_container">
        <el-table ref="multipleTable" :data="tableData">
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
          <el-table-column prop="juese" label="角色" align="center"></el-table-column>
          <el-table-column prop="quyu" label="区域" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="bm" label="部门" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="xgroup" align="center" label="小组" show-overflow-tooltip></el-table-column>
          <el-table-column prop="phone" align="center" label="电话号码" show-overflow-tooltip></el-table-column>
          <el-table-column prop="email" align="center" label="邮箱" show-overflow-tooltip></el-table-column>
          <el-table-column prop="caozuo" align="center" label="操作" show-overflow-tooltip>
             <img src="../../imgs/userimg/bianji.png" alt="" style="margin-right: 5px">
             <span>
                <img src="../../imgs/userimg/del.png" alt=""> 
             </span>
          </el-table-column>
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
      input: "",
      value: "",
      sbName: "xxxxx",
      tot: 0,
      val: "",
      currentPage: 5,
      currentPage4: 4,
      tableData: [
        {
          name: "xx",
          juese: "xx",
          quyu: "xx",
          bm: "xx",
          xgroup: "xx",
          phone: "xx",
          email: "xx",
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
.btn-2 {
  width: 172px;
  height: 53px;
  background: url("../../../images/img/keyi_button.png") no-repeat;
  border: 0px;
  color: #fff;
}
.bj_container {
  margin-top: 50px;
}
</style>