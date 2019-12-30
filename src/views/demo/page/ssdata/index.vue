<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img"><img src="./ssdata_img/ssdata_top.png" alt=""></el-header>
        <div class="centers clearfix">
          <div class="c_left grid-content bg-purple bjheadr_xz">
            <img src="./ssdata_img/xingzhuang.png" alt="">
          </div>
          <div class="c_right">
            <el-input
            style="border: none;outline: none;"
              placeholder="搜索关键字"
              v-model="input"
              clearable class="ss_search">
            </el-input>
            <span class="el-icon-search"></span>
            <el-button class="ss_submit">查询</el-button>
          </div>
        </div>
      <div class="bj_container">
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
            prop="sb_name"
            align="center"
            label="设备名称">
          </el-table-column>
          <el-table-column
            prop="sbid"
            align="center"
            label="设备编码">
          </el-table-column>
          <el-table-column
              prop="current_num"
              align="center"
              label="当前值">
            </el-table-column>
            <el-table-column
              prop="process_stu"
              align="center"
              label="处理状态">
            </el-table-column>
            <el-table-column
              prop="Solar_voltage"
              align="center"
              label="太阳能电压">
            </el-table-column>
            <el-table-column
              prop="battery_power"
              align="center"
              label="电池电量">
            </el-table-column>
            <el-table-column
              prop="installation_site"
              align="center"
              label="安装位置">
            </el-table-column>
            <el-table-column
              prop="upload_time"
              align="center"
              label="上传时间">
            </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row,dialogFormVisible)" type="text" size="small"><i class="el-icon-view" style="font-size:20px;"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="bj_tankuangs">
          <el-dialog title="预览" :visible.sync="dialogFormVisible">
            <el-row style="margin-top: 30px;">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <span class="yulan_titles">设备名称：</span> 
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">设备编码: </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">线路名称：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">当前值：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">环境温度：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">采集点名称：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">上传时间：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">太阳能电压：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">电池状态：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">安装位置：</div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
              </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialog()">保存</el-button>
            </div>
          </el-dialog>
        </div>
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
    </el-container>
  </d2-container>
</template>

<script>
import util from '@/libs/util.js'

import { ssdata_view } from "@/api/aa"

export default {
  name: 'ssdata',
  data () {
    return {
      dialogFormVisible: false,
      token: '',
      currentPage4: 4,
      tableData: [
        {
          sb_name: 'name',
          sbid: 'id',
          current_num: '000',
          process_stu: '处理中',
          Solar_voltage: '未知',
          battery_power: '100%',
          installation_site: '暂时未知',
          upload_time: '2019.12.16'
        }, 
        {
          sb_name: 'name',
          sbid: 'id',
          current_num: '000',
          process_stu: '处理中',
          Solar_voltage: '未知',
          battery_power: '100%',
          installation_site: '暂时未知',
          upload_time: '2019.12.16'
        }, 
        {
          sb_name: 'name',
          sbid: 'id',
          current_num: '000',
          process_stu: '处理中',
          Solar_voltage: '未知',
          battery_power: '100%',
          installation_site: '暂时未知',
          upload_time: '2019.12.16'
        }],
      input:'',
      view_data: []
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
    handleClick (row,dialogFormVisible) {
      console.log(row)
      this.dialogFormVisible = true;
    },
    dialog() {
      this.dialogFormVisible = false;
    },
    //
    // // 删除弹框
    // open () {
    //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning',
    //     center: true
    //   }).then(() => {
    //     this.$message({
    //       type: 'success',
    //       message: '删除成功!'
    //     })
    //   }).catch(() => {
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     })
    //   })
    // },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  // mounted: function(){
  //   this.token = util.cookies.get('token');
  //   console.log(this.token);
  //   ssdata_view({
  //     userToken: this.token
  //   }).then(res =>{
  //     if(res.status==10000){
  //       console.log(res.data);
  //       this.view_data = res.data;
  //     }else{
  //       console.log(res.message);
  //     }
  //   }).catch(err =>{
  //     console.log('请求出错:', err)
  //   })
  // }
}
</script>
<style>
@import "../../../demo/css/bj.css";
  .clearfix:after{
    content: "";
    display: block;
    clear: both;height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .centers{
    width: 100%;
    margin-bottom: 2rem;
  }
  .c_left{
    width: 60%;
    float: left;
  }
  .c_right{
    width: 40%;
    float: left;
    position: relative;
  }
  .c_right .el-input .el-input__inner{
    color: #2dfffe;
  }
  .c_right .el-input input::-webkit-input-placeholder{
    color: #2dfffe;
  }
  .c_right>span{
    position: absolute;
    left: 50%;
    top: 30%;
    color: aqua;
  }
  .ss_search{
    width: 55%;
    margin-left: 5%;
    background-image: url('./ssdata_img/search.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .c_right .el-button:focus, .c_right .el-button:hover{
    background: transparent;
    background-image: url('./ssdata_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .ss_submit{
    width: 30%;
    margin-left: 8%;
    background: transparent;
    background-image: url('./ssdata_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    border: none;
  }
  .bjheadr_tjbj{
    line-height: 36px;
    text-align: center;
    margin-left:30px;
    background-image: url('./ssdata_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color:#fff;
  }
  .bj_container{
    background-image: url('./ssdata_img/bj_bj.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
