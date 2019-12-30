<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img">
        <img src="../../imgs/userimg/top.png" alt />
      </el-header>
      <div class="kz">
        <img style="width:60%" src="../../../images/img/xingzhuang.png" alt />
        <span style="display:inline-block" @click="quyu">
          区域
          <div class="img">
            <img src="../../imgs/rzimg/denglu.png" alt />
          </div>
        </span>
        <span style="display:inline-block" @click="bm">
          部门
          <div class="img">
            <img src="../../imgs/rzimg/caozuo.png" alt />
          </div>
        </span>
        <span style="display:inline-block">
          小组
          <div class="img">
            <img src="../../imgs/rzimg/alert.png" alt />
          </div>
        </span>
      </div>
      <div class="bj_container">
        <el-table
          :show-header="false"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column align="center" width="80"></el-table-column>
          <el-table-column prop="sb_name" label="设备名称"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
              <el-button type="text" size="small" @click="open">删除</el-button>
            </template>
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
    </el-container>
  </d2-container>
</template>

<script>
export default {
  name: "sblist",
  data() {
    return {
    //   input: "",
      currentPage4: 4,
      tableData: [
        {
          sb_name: "小组名称xxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          sb_name: "小组名称xxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          sb_name: "小组名称xxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          sb_name: "小组名称xxxxxxxxxxxxxxxxxxxxxxxxxx"
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
    // 删除
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 点击区域功能
    quyu () {
      this.$router.push('/tjgroup');
    },
    // 点击部门功能
    bm(){
        this.$router.push('/bm')
    }

  }
};
</script>

<style lang="scss">
@import "../../../demo/css/bj.css";
// 头部按钮样式
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
// .sbtop {
//   width: 100%;
//   height: 2.5rem;
//   margin-bottom: 1.2rem;
// }
// .s_left {
//   width: 60%;
//   height: 100%;
//   float: left;
//   display: flex;
//   justify-content: space-between;
// }
// .s_left > div {
//   width: 24%;
//   height: 100%;
// }
// .env1 {
//   position: relative;
// }
// .env1 > span {
//   position: absolute;
//   right: 0.5rem;
//   top: 30%;
//   color: #2dfffe;
// }
// .s_right {
//   width: 30%;
//   height: 100%;
//   float: right;
//   text-align: right;
// }
// .s_right > button {
//   width: 46%;
//   margin-left: 1%;
//   background: #ebf1f6;
//   background-image: url("./sblist_img/bjlist_botton.png");
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
//   color: #fff;
//   border: none;
// }
</style>
