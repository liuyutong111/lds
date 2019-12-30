<template>
  <d2-container>
    <!-- <template slot="header">{{$t('page1')}}</template> -->
    <el-container>
  <el-header class="bjheadr_img"><img src="./bjwarning_img/bjwarning_top.png" alt=""></el-header>
  <el-row>
  <el-col :span="21"><div class="grid-content bg-purple bjheadr_xz" >
    <img src="./bjwarning_img/xingzhuang.png" alt=""></div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple-light bjheadr_tjbj" >添加报警</div></el-col>
</el-row>
<div class="bj_container bj_containers">
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
    >
    <el-table-column
      type="selection"
       align="center"
     >
    </el-table-column>
    <el-table-column
      label="设备名称"
      align="center"
      >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="报警方式"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="触发条件"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="Processing"
      label="处理状态"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="state_time"
      align="center"
      label="状态更新时间"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      label="操作"
      width="100">
      <template>
        <el-button type="text" size="small" class="bjlb_imgse"><img src="../../../images/tu/yulan.png" alt="" @click="dialogFormVisible = true"></el-button>
        <el-button type="text" size="small" @click="open" class="bjlb_imgse"><img src="../../../images/img/keyi_remove.png" alt=""></el-button>
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
      :total="400">
    </el-pagination>
  </div>
  <div class="bj_tankuangs">
    <el-dialog title="预览" :visible.sync="dialogFormVisible">
      <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"><span class="yulan_titles">设备名称 :</span> 3428352385932852</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">报警方式: 短信</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">触发条件: 温度大于20摄氏度</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">处理状态:未处理</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">状态更新时间: 3428352385932852</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">报警联系人 3428352385932852</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
   <el-row>
   <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">是否恢复正状态s: 3428352385932852</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialog()">保存</el-button>
  </div>
</el-dialog>
  </div>
  </div>
  </el-container>

  </d2-container>
</template>

<script>
export default {
  name: 'bjwarning',
  data () {
    return {
      currentPage4: 4,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Processing: '已处理',
        state_time: '2019-12-13'
      }],
      multipleSelection: []
    }
  },

  methods: {
    // 多选框
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClick (row) {
      console.log(row)
    },
    dialog () {
      this.dialogFormVisible = false
      console.log(this.form.name)
    },
    //
    // 删除弹框
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        // center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style>
@import "../../../demo/css/bj.css";
 .bjheadr_tjbj{
    line-height: 36px;
    text-align: center;
    margin-left:30px;
    background-image: url(./bjwarning_img/bjlist_botton.png);
    background-size: 100% 100%;
     background-repeat: no-repeat;
     color:#fff;
  }
  .bj_container{
    background-image: url(./bjwarning_img/bj_bj.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bjlb_imgse img{
    width:14px;
  }
  .bj_containers .el-dialog{
   background-image: url(../../../images/tu/tankuang.png);
   background-size: 100% 100%;
   background-repeat: no-repeat;
  }
  .bj_tankuangs .el-dialog{
    width:30%;
  }
  .bj_tankuangs .el-dialog__title{
    color: #fff;
  }
  .bj_tankuangs .el-button--primary:focus, .bijl_head .el-button--primary:hover {
    background:  transparent;
    border-color:  transparent;
    color: #fff;
    background-image: url(../../../images/img/keyi_button.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.bj_tankuangs .el-button--primary {
    color: #fff;
    width: 110px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(../../../images/img/keyi_button.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
}
.bj_tankuangs .el-dialog__footer{
  text-align: center;
}
.bj_tankuangs .el-dialog__body{
  color:#fff;
}
.bj_tankuangs .yulan_titles{
  margin-right: 20px;
}
</style>
