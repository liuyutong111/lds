<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img"><img src="./sjanalysis_img/sjanalysis_top.png" alt=""></el-header>
      <div class="sjtop">
        <div class="env">
          <el-select v-model="value" placeholder="请选择设备名称">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>   
        <div class="env">
          <el-select v-model="value" placeholder="请选择设备线路">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="env">
          <el-select v-model="value" placeholder="请选择所在区域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="chooseTime">
          <el-date-picker
          @change="selectTime"
          class="toHide"
            style="width:100%;"
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间">
          </el-date-picker>
          <div class="toShow">
            <div>
              <span>{{ time }}</span>
            </div>
            <i class="el-icon-date"></i>
          </div>     
        </div>
        <div style="text-align:right;">
          <el-button class="ss_submit" style="width:60%;">查询</el-button>
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
            prop="sb_circuit"
            align="center"
            label="设备线路">
          </el-table-column>
          <el-table-column
              prop="sb_area"
              align="center"
              label="所属区域">
          </el-table-column>
          <el-table-column
            prop="current_num"
            align="center"
            label="当前值">
          </el-table-column>
          <el-table-column
            prop="update_time"
            align="center"
            label="状态更新时间">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row,dialogFormVisible)" type="text" size="small"><i class="el-icon-view" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="open"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="bj_tankuangs">
          <el-dialog title="预览" :visible.sync="dialogFormVisible">
            <el-row>
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <span class="yulan_titles">设备名称 :</span> 3428352385932852
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
                <div class="grid-content bg-purple-light">设备线路: 短信</div>
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
                <div class="grid-content bg-purple-light">所属区域: 温度大于20摄氏度</div>
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
                <div class="grid-content bg-purple-light">当前值:未处理</div>
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
                <div class="grid-content bg-purple-light">状态更新时间: 3428352385932852</div>
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
export default {
  name: 'sjanalysis',
  data () {
    return {
      dialogFormVisible: false,
      time:'请选择日期',
      currentPage4: 4,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: '',
      tableData: [{
        sb_name: 'name',
        sb_circuit: '线路',
        sb_area: '北京',
        current_num: '000',
        update_time: '2019.12.16'
      },
      {
        sb_name: 'name',
        sb_circuit: '线路',
        sb_area: '北京',
        current_num: '000',
        update_time: '2019.12.16'
      },
      {
        sb_name: 'name',
        sb_circuit: '线路',
        sb_area: '北京',
        current_num: '000',
        update_time: '2019.12.16'
      },
      {
        sb_name: 'name',
        sb_circuit: '线路',
        sb_area: '北京',
        current_num: '000',
        update_time: '2019.12.16'
      }]
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClick (row,dialogFormVisible) {
      console.log(row)
      this.dialogFormVisible = true;
    },
    dialog() {
      this.dialogFormVisible = false;
      console.log(this.form.name);
    },
    // 格式化日期和时间
    selectTime(ev){
      // this.time = ev;
      console.log(ev[0]);
      let starttime = this.moment(ev[0]).format("YYYY.MM.DD HH:mm:ss");
      let endtime = this.moment(ev[1]).format("YYYY.MM.DD HH:mm:ss");
      this.time = `${starttime} ${endtime}`;
      console.log(this.time);
    },
    // 删除
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
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

<style lang="scss">
@import "../../../demo/css/bj.css";
  .sjtop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    position: relative;
    box-sizing: border-box;
    padding-left: 12%;
  }
  .sjtop>div{
    width: 25%;
    margin-left: 2%;
  }
  .env{
    background-image: url('./sjanalysis_img/search.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .env .el-input{
    border: 1px solid transparent;
  }
  .env .el-input input::-webkit-input-placeholder{
    color: #2dfffe;
  }
  .env .el-input__inner{
    color: #2dfffe;
  }
  .el-select .el-input .el-select__caret{
    color: #2dfffe;
  }
  .chooseTime{
    width:30%;
    position: relative; 
  }
  .toHide{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 99999;
    opacity: 0;
  }
  .toShow>div{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    color: #2dfffe;
    background-image: url('./sjanalysis_img/search.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .toShow>div span{
    width: 70%;
  }
  .toShow>i{
    position: absolute;
    top: 33%;
    right: 5%;
    color: #2dfffe;
  }
  .bjheadr_tjbj{
    line-height: 36px;
    text-align: center;
    margin-left:30px;
    background-image: url('./sjanalysis_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color:#fff;
  }
  .bj_container{
    background-image: url('./sjanalysis_img/bj_bj.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
