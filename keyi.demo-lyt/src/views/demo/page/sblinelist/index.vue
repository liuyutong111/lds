<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img"><img src="./sblinelist_img/sblinelist_top.png" alt=""></el-header>
        <div class="centers clearfix">
          <div class="c_left grid-content bg-purple bjheadr_xz">
            <el-input
              style="border: none;outline: none;width:30%;"
              placeholder="请输入关键字"
              v-model="input"
              clearable class="ss_search">
            </el-input>
            <span class="el-icon-search"></span>
          </div>
          <div class="c_right">
            <el-button class="ss_submit" @click="dialogFormVisible = true">添加采集点</el-button>
            <el-button class="ss_submit" @click="dialogForm1Visible = true">添加线路</el-button>
          </div>
          <!-- 添加采集点 -->
          <div class="add_tk">
            <el-dialog title="添加采集点" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="设置经纬度" :label-width="formLabelWidth" style="margin-top:50px;">
                  <button class="jwd" @click="getJwd"></button>
                </el-form-item>
                <el-form-item label="采集点名称:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
                </el-form-item>
                <el-form-item label="所属设备:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="所属线路:" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
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
          <!-- 添加线路 -->
          <div class="add_tk">
            <el-dialog title="添加线路" :visible.sync="dialogForm1Visible">
              <el-form :model="form">
                <el-form-item label="设置经纬度" :label-width="formLabelWidth" style="margin-top:50px;">
                  <button class="jwd" @click="getJwd"></button>
                </el-form-item>
                <el-form-item label="采集点名称:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
                </el-form-item>
                <el-form-item label="所属设备:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
                </el-form-item>
                <el-form-item label="安装位置:" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth">
                  <input type="text" v-model="input" class="defind" placeholder="百度地图" style="height:200px;background:#fff;">
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogForm1Visible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
              </div>
            </el-dialog>
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
            prop="xl_name"
            align="center"
            label="线路名称">
          </el-table-column>
          <el-table-column
            prop="sssb"
            align="center"
            label="所属设备">
          </el-table-column>
          <el-table-column
              prop="cjd"
              align="center"
              label="采集点">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <el-button @click="dialogForm2Visible = true" type="text" size="small"><i class="el-icon-edit" style="font-size:20px;"></i></el-button>
            <el-button type="text" size="small" @click="open"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>          
          </el-table-column>
        </el-table>
        <!-- 修改线路 -->
        <div class="add_tk">
          <el-dialog title="修改线路" :visible.sync="dialogForm2Visible">
            <el-form :model="form">
              <el-form-item label="DTUID" :label-width="formLabelWidth" style="margin-top:50px;">
                <input type="text" v-model="input" class="defind" placeholder="设备得唯一标识（设备编码）">
              </el-form-item>
              <el-form-item label="设置经纬度" :label-width="formLabelWidth">
                <button class="jwd" @click="getJwd"></button>
              </el-form-item>
              <el-form-item label="采集点名称:" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
              </el-form-item>
              <el-form-item label="所属设备:" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
              </el-form-item>
              <el-form-item label="安装位置:" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="最大长度为18个字符或6个汉字">
              </el-form-item>
              <el-form-item label="" :label-width="formLabelWidth">
                <input type="text" v-model="input" class="defind" placeholder="百度地图" style="height:200px;background:#fff;">
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogForm2Visible = false">取 消</el-button>
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
  name: 'sblinelist',
  data () {
    return {
      currentPage4: 4,
      tableData: [
        {
        xl_name: 'xxxxx',
        sssb: 'xxxxx',
        cjd: 'xxxx',
        },
        {
        xl_name: 'xxxxx',
        sssb: 'xxxxx',
        cjd: 'xxxx',
        },
        {
        xl_name: 'xxxxx',
        sssb: 'xxxxx',
        cjd: 'xxxx',
        },
        {
        xl_name: 'xxxxx',
        sssb: 'xxxxx',
        cjd: 'xxxx',
        }
      ],
      input:'',
      dialogFormVisible: false,
      dialogForm1Visible: false,
      dialogForm2Visible: false,
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
    getJwd(){
      console.log('经纬度')
    },
    save () {
      this.$confirm('确认编辑?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 删除弹框
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
    position: relative;
  }
  .c_right{
    width: 40%;
    float: left;
    text-align: right;
  }
  .c_left .el-input .el-input__inner{
    color: #2dfffe;
  }
  .c_left .el-input input::-webkit-input-placeholder{
    color: #2dfffe;
  }
  .c_left>span{
    position: absolute;
    left: 30%;
    top: 30%;
    color: #2dfffe;
  }
</style>
