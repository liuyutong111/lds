<template>
  <d2-container>
    <el-container>
      <el-header class="bjheadr_img">
        <img src="../../imgs/userimg/top.png" alt />
      </el-header>
      <div class="kz">
        <span style="display:inline-block">
          区域
          <div class="img">
            <img src="../../imgs/rzimg/denglu.png" alt />
          </div>
        </span>
        <span style="display:inline-block">
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
        <el-col :span="3">
          <div class="grid-content bg-purple-light bjheadr_tjbj qy_add" @click="add_qy" v-if="flag==0">添加区域</div>
          <div class="grid-content bg-purple-light bjheadr_tjbj qy_add" @click="add_bm(bmData.parentId)" v-if="flag==1">添加部门</div>
          <div class="grid-content bg-purple-light bjheadr_tjbj qy_add" @click="add_xz" v-if="flag==2">添加小组</div>
        </el-col>
      </div>
      <section class="bj_container">
        <!-- 区域 -->
        <div class="aa" v-if="flag==0">
          <div v-for="(item,index) in qyData" :key="index" class="general">
            <span>{{ item.groupName }}</span>
            {{ item.groupId }}
            <div class="operation"> 
              <el-button type="text" size="small" @click="update_qy(item.groupName,item.groupId)"><i class="el-icon-edit" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="del_qy(item.groupId)"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="goTobm(item.groupId)"><i class="el-icon-s-unfold" style="font-size:20px;"></i></el-button>
            </div>
          </div>
        </div>
        <!-- 部门 -->
        <div class="bb" v-if="flag==1">
          <div class="currert">
            <span style="opacity: 0;">空的</span>
            <span>{{ bmData.qyName }}</span>
            <el-button type="text" size="small" @click="back_qy"><i class="el-icon-thumb" style="font-size:20px;color:#ccc;"></i></el-button>
          </div>
          <div v-for="(item,index) in bmData.child" :key="index" class="general">
            <span>{{ item.groupName }}</span>
            {{ item.groupId }}
            <div class="operation"> 
              <el-button type="text" size="small" @click="update_bm(item.groupName,item.groupId)"><i class="el-icon-edit" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="del_bm(item.groupId)"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="goToxz"><i class="el-icon-s-unfold" style="font-size:20px;"></i></el-button>
            </div>
          </div>
        </div>
        <!-- 小组 -->
        <div class="cc" v-if="flag==2">
          <div class="current1 currert">
            <span style="opacity: 0;">空的</span>
            <span>我是当前区域和部门</span>
            <el-button type="text" size="small" @click="back_bm"><i class="el-icon-thumb" style="font-size:20px;color:#ccc;"></i></el-button>
          </div>
          <div v-for="(item,index) in qyData" :key="index" class="general">
            <span>bbb</span>
            <div class="operation"> 
              <el-button type="text" size="small" @click="update_xz"><i class="el-icon-edit" style="font-size:20px;"></i></el-button>
              <el-button type="text" size="small" @click="del_xz"><i class="el-icon-delete" style="font-size:20px;"></i></el-button>
            </div>
          </div>
        </div>
      </section>

    </el-container>
  </d2-container>
</template>

<script>
import util from '@/libs/util.js'
import { grouplook } from '@/api/aa'
import { groupadd } from '@/api/aa'
import { groupput } from '@/api/aa'
import { groupdel } from '@/api/aa'
export default {
  name: "sblist",
  data() {
    return {
      qyData:[], // 存储获取的所有数据
      flag: 0,  // 控制显示内容
      token: '',
      groupName: '', // 区域名
      bmData: {}, // 某区域下的部门数据
      xzData: {}, // 某部门下的小组数据
    };
  },
  methods: {
    // 调用可以重新加载页面数据（ok）
    reload(){
      this.token = util.cookies.get('token');
      // console.log(this.token);
      grouplook({
        userToken: this.token
      }).then(res =>{
        if(res.status==10000){
        //  console.log(res.data);
        this.qyData = res.data
        }else{
          console.log(res.message);
        }
      }).catch(err =>{
        console.log('请求出错:', err)
      })
      return this.qyData
    },
    // 添加区域（ok）
    add_qy(){
      this.$prompt('添加区域', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '输入不能为空'
      }).then(({ value }) => {
        this.groupName = value;
        // _form 添加区域时的FormData对象
        let _form = new FormData();
        _form.append("groupName", this.groupName);
        _form.append("remarks", '1级分类');
        _form.append("parentId", "");
        _form.append("indexId", "1");
        _form.append("userToken", this.token);
        groupadd(_form).then(res =>{
          this.reload();
          console.log(res);
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '区域添加成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    // 添加部门
    add_bm(id){
      console.log(id);
      this.$prompt('添加部门', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '输入不能为空'
      }).then(({ value }) => {
        console.log(value);
        this.groupName = value;
        // _form 添加部门时的FormData对象
        let _form = new FormData();
        _form.append("groupName", this.groupName);
        _form.append("remarks", '2级分类');
        _form.append("parentId", id);
        _form.append("indexId", "2");
        _form.append("userToken", this.token);
        groupadd(_form).then(res =>{
          this.reload();
          console.log(res);
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '部门添加成功: '
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    // 添加小组
    add_xz(){
      console.log('我是小组按钮');
      this.$prompt('添加小组', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '输入不能为空'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '小组添加成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    // 修改区域（ok）
    update_qy(oldname,id){
      this.$prompt('修改区域名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '输入不能为空',
        inputPlaceholder: oldname
      }).then(({ value }) => {
        this.groupName = value;
        let parmas = {
          groupName: this.groupName,
          parentId: '',
          remarks: '1级分类',
          groupId: id,
          userToken: this.token
        };
        groupput(parmas).then(res =>{
          // console.log(res);
          this.reload()
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '区域修改成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    // 删除区域（ok）
    del_qy(id){
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          groupId: id,
          userToken: this.token
        };
        groupdel(params).then(res =>{
          // console.log(res);
          this.reload();
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    // 跳转到部门（ok）
    goTobm(id){
      this.flag = 1;
      // console.log(id);
      let allData = this.reload()
      // console.log(allData);
      for(var i=0; i<allData.length; i++){
        if(allData[i].groupId == id){
          // console.log(allData[i].child);
          let msg = {
            qyName: allData[i].groupName,
            parentId: allData[i].groupId,
            child: allData[i].child
          }
          // console.log(msg);
          this.bmData = msg;
          break;
        }
      };
    },
    // 返回到区域（ok）
    back_qy(){
      console.log('点击我返回到添加区域');
      this.flag = 0;
    },
    // 修改部门
    update_bm(oldname,id){
      // console.log('点击我修改部门');
      // console.log(oldname,id);
      this.$prompt('修改部门名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '输入不能为空',
        inputPlaceholder: oldname
      }).then(({ value }) => {
        this.groupName = value;
        let parmas = {
          groupName: this.groupName,
          parentId: '',
          remarks: '2级分类',
          groupId: id,
          userToken: this.token
        };
        groupput(parmas).then(res =>{
          // console.log(res);
          this.reload()
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '区域修改成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    // 删除部门
    del_bm(id){
      console.log('点击我删除部门');
      console.log(id);
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          groupId: id,
          userToken: this.token
        };
        groupdel(params).then(res =>{
          // console.log(res);
          this.reload();
        }).catch(err =>{
          console.log('请求出错', err);
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    // 跳转到小组（ok）
    goToxz(){
      console.log('点击我到添加小组');
      this.flag = 2;
    },
    // 返回到部门（ok）
    back_bm(){
      console.log('点击我返回到添加部门');
      this.flag = 1;
    },
    // 修改小组
    update_xz(){
      console.log('点击我修改小组');
    },
    // 删除小组
    del_xz(){
      console.log('点击我删除小组');
    }
  },
  mounted: function(){
    this.reload();
  }
};
</script>

<style lang="scss">
@import "../../../demo/css/bj.css";
// 头部按钮样式
.kz {
  position: relative;
  margin-bottom: 1.5rem;
}
.qy_add{
  width: 10rem;
  position: absolute;
  right: 0;
  bottom: 0;
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
.general{
  height: 4rem;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}
.general:nth-child(even){
  background: rgb(0,111,131);
}
.general:nth-child(odd){
  background: rgb(0,58,97);
}
.currert{
  height: 3rem;
  transform: translateY(-15%);
  padding: 0 7rem 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.current1{
  padding: 0 5rem 0 3rem;
}
</style>
