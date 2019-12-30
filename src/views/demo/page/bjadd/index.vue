<template>
  <d2-container>
    <!-- <template slot="header">{{$t('page1')}}</template> -->
    <div class="alarm_name">
     <el-row :gutter="20">
        <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple alarm_username">
          <div class="bjtj_suosou">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <i class="el-icon-search" style="color:#2dfffe;"></i>
          </div>
           <el-button type="primary">查询</el-button>
            <el-button type="primary" @click="centerDialogVisible = true">添加</el-button>
          </div></el-col>

     </el-row>
    </div>
    <div class="bj_container">
      <el-table
    :data="tableData"
    tooltip-effect="dark"
  >
    <!-- <el-table-column
      type="selection"
       align="center"
     >
    </el-table-column> -->
    <el-table-column
      label="姓名"
      align="center"
      >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="手机号"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="邮箱"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="Processing"
      label="微信"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="state_time"
      align="center"
      label="备注"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      label="操作"
      width="100">
      <template >
        <el-button type="text" size="small" @click="opens" class="alarm_imgbj">
          <img src="../../../images/tu/bianji.png" alt="">
        </el-button>
        <el-button type="text" size="small" @click="open" class="alarm_imgbj"><img src="../../../images/img/keyi_remove.png" alt=""></el-button>
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
  </div>
  <!-- 添加联系人 -->
  <div class="bjtj_tankuang">
  <el-dialog title="添加" :visible.sync="centerDialogVisible">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">姓名:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">电话:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
         <el-col :span="6"><div class="grid-content bg-purple">邮箱:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">微信:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">备注:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">取消</el-button>
    <el-button type="primary" @click="dialogs()">保存</el-button>
  </div>
 </el-dialog>
 </div>
  <!-- 编辑 -->
  <div class="alarm_bj" v-if="alarm_bj==1">
    <div class="alarm_box">
        <div class="alarm_titless">修改</div>
            <div class="alarm_contents">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">报警人姓名:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">报警人电话:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
         <el-col :span="6"><div class="grid-content bg-purple">邮箱:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">微信:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
           <el-input v-model="input" placeholder=""></el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">备注:</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
       <el-row :gutter="20" class="alarm_btn">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple alarm_btns">
          <el-button type="primary" @click="remove">取消</el-button>
            <el-button type="primary">确定</el-button>
           </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    </div>
  </div>
  </d2-container>
</template>

<script>

import util from '@/libs/util.js'

import { userpassword } from "@/api/aa"

export default {
  name: 'bjadd',
  data () {
    return {
      currentPage4: 4,
      oldPassword: '123456',
      newPassword: '123456q',
      centerDialogVisible: false,
      input: '',
      token: '',
      textarea: '',
      alarm_bj: 0,
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
  created () {
    this.token = util.cookies.get('token')
  },
  methods: {
    // 多选框
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // },
    handleClick (row) {
      console.log(row)
    },
    // 删除
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        // iconClass: 'el-icon-warning',
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
    opens () {
      this.alarm_bj = 1
    },
    dialogs () {
      this.centerDialogVisible = false
      // 获取toke值
      this.token = util.cookies.get('token')
      let params = {}
      console.log(this.token)
      userpassword({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        userToken: this.token
      }).then(res => {
        console.log(res)
      }).cath(err => {
      })
    },
    remove () {
      this.alarm_bj = 0
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

.bj_container{
    background-image: url(../../../images/img/keyi_background.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .el-button--text:focus, .el-button--text:hover{
    color:#fff;
  }
  .alarm_imgbj img{
   width:14px;
  }
 .block{
   text-align: center;
   padding:40px 0;
   background: #fff;
 }
 .block .el-input__inner{
   color:#666;
   margin-left: 0px;
 }
 .alarm_name{
   padding-bottom: 20px;
 }
 .alarm_username .el-input{
    width:70%;
    border: 1px solid transparent;
    color:#2dfffe;
    margin-right: 20px;
  }
  .bjtj_suosou .el-input input::-webkit-input-placeholder {
         color: #2dfffe;
    }
  .bjtj_suosou{
    width:35%;
    margin-right: 20px;
    display:inline-block;
    background-image: url(../../../images/tu/xuxiang_img.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bjtj_suosou .el-input__inner{
    color:#2dfffe;
  }
  .alarm_username .el-button--primary:focus, .alarm_username .el-button--primary:hover {
    background:  transparent;
    border-color:  transparent;
    color: #fff;
    background-image: url(../../../images/img/keyi_button.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.alarm_username .el-button--primary {
    color: #fff;
    width: 110px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(../../../images/img/keyi_button.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
}
.el-textarea__inner{
  background:transparent;
}
/* 编辑 */
.alarm_bj{
  position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    /* display: none; */
}
.alarm_box{
   position:absolute;
   width:917px;
   height:600px;
   margin:auto;
   top:0;
   left:0;
   bottom:0;
   right:0;
   /* background-color: #fff; */
   background-image: url(../../../images/tu/tankuang.png);
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
.alarm_titless{
  color:#fff;
  font-size:16px;
  padding:20px 15px;
}
.alarm_contents{
  padding:40px 50px;
}
.alarm_contents .grid-content{
  text-align: right;
  line-height: 36px;
  color: #00ffea;
}
.alarm_contents .alarm_btns{
  text-align: center;
}
.alarm_btn{
  padding-top:30px;
}
.alarm_btns .el-button--primary:focus, .alarm_username .el-button--primary:hover {
    background:  transparent;
    border-color:  transparent;
    color: #fff;
    background-image: url(../../../images/img/keyi_button.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.alarm_btns .el-button--primary {
    color: #fff;
    width: 110px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(../../../images/img/keyi_button.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
}
/*删除弹框*/
.el-message-box__btns {
    padding: 40px 15px 0;
    margin-bottom: -23px;
    text-align: center;
}
.el-message-box{
  overflow: initial;
  border-color: transparent;
    background-image: url(../../../images/tu/tankuang.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 1px solid transparent;
     background-color: transparent;
}
.el-message-box .el-button--primary:focus, .alarm_username .el-button--primary:hover {
    background:  transparent;
    border-color:  transparent;
    color: #fff;
    background-image: url(../../../images/img/keyi_button.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.el-message-box .el-button--small {
    color: #fff;
    background-color: transparent;
    border-color: transparent;
    background-image: url(../../../images/img/keyi_button.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
}
.el-message-box__header{
  padding: 6px 14px 58px;
}
.el-message-box__title{
  color:#fff;
  font-size: 14px;
}
.el-message-box__status.el-icon-warning{
  color:#00ffea;
}
.el-message-box__content{
 color:#fff;
}
.el-message-box__headerbtn{
  top:5px;
}
.bjtj_tankuang .grid-content{
  text-align: right;
  color:aqua;
 line-height: 36px;
 font-size: 16px;
}
 .bjtj_tankuang .el-dialog{
   background-image: url(../../../images/tu/tankuang.png);
   background-size: 100% 100%;
   background-repeat: no-repeat;
  }
  .bjtj_tankuang .el-dialog__title{
    color: #fff;
  }
  .bjtj_tankuang .el-button--primary:focus, .bijl_head .el-button--primary:hover {
    background:  transparent;
    border-color:  transparent;
    color: #fff;
    background-image: url(../../../images/img/keyi_button.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.bjtj_tankuang .el-button--primary {
    color: #fff;
    width: 110px;
    background-color: transparent;
    border-color: transparent;
    background-image: url(../../../images/img/keyi_button.png);
      background-size: 100% 100%;
    background-repeat: no-repeat;
}
.bjtj_tankuang .el-dialog__footer{
  text-align: center;
}
</style>
