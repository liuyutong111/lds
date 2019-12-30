<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img"><img src="./sblist_img/sblist_top.png" alt=""></el-header>
      <div class="sbtop clearfix">
        <div class="s_left">
          <div class="env env1">
            <el-input
              style="border: none;outline: none;width:100%;"
              placeholder="搜索关键字"
              v-model="input"
              clearable>
            </el-input>
            <span class="el-icon-search"></span>
          </div>
          <div class="env">
            <el-select v-model="value" placeholder="请选择区域">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="env">
            <el-select v-model="value" placeholder="请选择部门">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="env">
            <el-select v-model="value" placeholder="请选择小组">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="s_right">
          <div class="s_right_d">
            <el-button>查询</el-button>
            <el-button @click="dialogFormVisible = true">添加设备</el-button>
          </div>
          <!-- 添加设备弹框 -->
          <div class="add_tk">
            <el-dialog title="添加设备" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="设置经纬度" :label-width="formLabelWidth" style="margin-top:50px;">
                  <button class="jwd" @click="getJwd"></button>
                </el-form-item>
                <el-form-item label="设备名称:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
                </el-form-item>
                <el-form-item label="DTUID" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="设备得唯一标识（设备编码）">
                </el-form-item>
                <el-form-item label="所属区域:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属部门:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属小组:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属类型:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="安装位置:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="请输入位置">
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="百度地图" style="height:200px;background:#fff;">
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
              </div>
            </el-dialog>
          </div>       
        </div>
      </div>
      <div class="bj_container">
        <el-table
          :show-header="false"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
          >
          <el-table-column
          align="center"
          width="80">
          <i class="el-icon-s-platform" style="color:#fff"></i>
          </el-table-column>
          <el-table-column
            prop="sb_name"
            label="设备名称">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <el-button  type="text" size="small" @click="dialogForm1Visible = true"><i class="el-icon-edit" style="font-size:20px;"></i></el-button>
            <el-button type="text" size="small" @click="open"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>
          </el-table-column>
        </el-table>
        <!-- 编辑设备弹框 -->
        <div class="add_tk">
          <el-dialog title="编辑设备" :visible.sync="dialogForm1Visible">
            <el-form :model="form">
              <el-form-item label="DTUID" :label-width="formLabelWidth" style="margin-top:50px;">
                <input type="text" v-model="input" class="defind" placeholder="设备得唯一标识（设备编码）">
              </el-form-item>
              <el-form-item label="设置经纬度" :label-width="formLabelWidth" >
                <button class="jwd" @click="getJwd"></button>
              </el-form-item>
              <el-form-item label="设备名称:" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
              </el-form-item>
              <el-form-item label="安装位置:" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
              </el-form-item>
              <el-form-item label="" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="百度地图" style="height:200px;">
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogForm1Visible = false">取 消</el-button>
              <el-button type="primary" @click="save">确 定</el-button>
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
  name: 'sblist',
  data () {
    return {
      input: '',
      currentPage4: 4,
      options: [
        {
        value: '选项1',
        label: '黄金糕'
        }, 
        {
          value: '选项2',
          label: '双皮奶'
        }, 
        {
          value: '选项3',
          label: '蚵仔煎'
        }, 
        {
          value: '选项4',
          label: '龙须面'
        }, 
        {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      value1: '',
      tableData: [
        {
        sb_name: '设备名称xxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
        sb_name: '设备名称xxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
        sb_name: '设备名称xxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
        sb_name: '设备名称xxxxxxxxxxxxxxxxxxxxxxxxxx',
        }],
      dialogFormVisible: false,
      dialogForm1Visible: false,
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
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
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
    },
    getJwd(){
      console.log('经纬度')
    },
    // 确认添加设备
    save () {
      this.$confirm('确定添加设备?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '设备添加成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../../../demo/css/bj.css";
  .sbtop{
    width: 100%;
    height: 2.5rem;
    margin-bottom: 1.2rem;
  }
  .s_left{
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: space-between;
  }
  .s_left>div{
    width: 24%;
    height: 100%;
  }
  .env1{
    position: relative;
  }
  .env1>span{
    position: absolute;
    right: 0.5rem;
    top: 30%;
    color: #2dfffe;
  }
  .s_right{
    width: 30%;
    height: 100%;
    float: right;
  }
  .s_right_d{
    text-align: right;
  }
  .s_right_d>button{
    width: 46%;
    margin-left: 1%;
    background-color: transparent;  
    background-image: url('./sblist_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    border: none;
  }
  .s_right_d .el-button:focus, .s_right_d .el-button:hover{
    background-color: transparent;  
    background-image: url('./sblist_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .add_tk .el-dialog{
    background-image: url('./sblist_img/tk.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-right: 3rem;
  }
  .add_tk .el-dialog__header{
    text-align: center;
  }
  .add_tk .el-dialog__title{
    color: #2dfffe;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: inline-block;
  }
  .add_tk .el-form-item__label{
    color: #2dfffe;
  }
  .add_tk input::-webkit-input-placeholder{
    color: #2dfffe;
  }
  .jwd{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid rgb(237,237,237);
    outline: none;
    margin-right: 1rem;
  }
  .add_tk .el-select{
    display: block;
  }
  .add_tk .el-input__inner{
    color: #2dfffe;
  }
  .defind{
    background-color: transparent;  
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid #0968A0;
    border-radius: 5px;
    text-align: center;
  }
</style>
