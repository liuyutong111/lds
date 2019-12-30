<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img"><img src="./sbpoint_img/sbpoint_top.png" alt=""></el-header>
        
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
            prop="cjd_name"
            align="center"
            label="采集点名称"
            width="100">
          </el-table-column>
          <el-table-column
            prop="sssb_name"
            align="center"
            label="所属设备名称"
            width="120">
          </el-table-column>
          <el-table-column
              prop="ssxl_name"
              align="center"
              label="所属线路名称"
              width="120">
            </el-table-column>
            <el-table-column
              prop="sswd"
              align="center"
              label="实时温度ABC"
              width="120">
            </el-table-column>
            <el-table-column
              prop="Solar_voltage"
              align="center"
              label="太阳能电压"
              width="100">
            </el-table-column>
            <el-table-column
              prop="battery_voltage"
              align="center"
              label="电池电压">
            </el-table-column>
            <el-table-column
              prop="cj_time"
              align="center"
              label="采集时间">
            </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
            :total="400">
          </el-pagination>
        </div>
      </div>
    </el-container>
  </d2-container>
</template>

<script>
export default {
  name: 'sbpoint',
  data () {
    return {
      currentPage4: 4,
      tableData: [
        {
        cjd_name: 'xxxxx',
        sssb_name: 'xxxxx',
        ssxl_name: 'xxxxx',
        sswd: 'xxxxx',
        Solar_voltage: 'xxxxx',
        battery_voltage: 'xxxxx',
        cj_time: 'xxxxx'
        },
        {
        cjd_name: 'xxxxx',
        sssb_name: 'xxxxx',
        ssxl_name: 'xxxxx',
        sswd: 'xxxxx',
        Solar_voltage: 'xxxxx',
        battery_voltage: 'xxxxx',
        cj_time: 'xxxxx'
        },
        {
        cjd_name: 'xxxxx',
        sssb_name: 'xxxxx',
        ssxl_name: 'xxxxx',
        sswd: 'xxxxx',
        Solar_voltage: 'xxxxx',
        battery_voltage: 'xxxxx',
        cj_time: 'xxxxx'
        },
        {
        cjd_name: 'xxxxx',
        sssb_name: 'xxxxx',
        ssxl_name: 'xxxxx',
        sswd: 'xxxxx',
        Solar_voltage: 'xxxxx',
        battery_voltage: 'xxxxx',
        cj_time: 'xxxxx'
        }],
      input:''
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
    //
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
</style>
