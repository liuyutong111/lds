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
            <el-button class="ss_submit" @click="centerDialogVisibles = true">添加用户</el-button>
          </div>
      <div class="bj_container">
        <el-table ref="multipleTable" :data="tableData">
          <el-table-column label="姓名" align="center" >
             <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="角色" align="center">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userRolesId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="区域" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                <span v-if="scope.row.userguoup.length!==0" style="margin-left: 10px">{{ scope.row.userguoup[scope.row.userguoup.length-1].groupName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="部门" align="center" show-overflow-tooltip>
              <template slot-scope="scope">
                <span v-if="scope.row.userguoup.length > 1" style="margin-left: 10px">{{ scope.row.userguoup[scope.row.userguoup.length-2].groupName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="小组" show-overflow-tooltip>
              <template slot-scope="scope">
                <span v-if="scope.row.userguoup.length==3" style="margin-left: 10px">{{ scope.row.userguoup[scope.row.userguoup.length-3].groupName }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="电话号码" show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userPhone }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="邮箱" show-overflow-tooltip>
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userEmail }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="caozuo" align="center" label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
             <img src="../../imgs/userimg/bianji.png" alt="" style="margin-right: 5px" @click="bianji(scope.$index,scope.row)">
             <span>
                <img src="../../imgs/userimg/del.png" alt=""> 
             </span>
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
      <!-- 添加用户 -->
            <div class="user_tj user_tjs">
          <el-dialog title="添加用户" :visible.sync="centerDialogVisibles" width="60%" center>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" enctype="multipart/form-data">
            <!-- 用户名 -->
            <el-form-item  prop="imageUrl">
            <el-row :gutter="20" class="keyi_tjtoxiang">
              <el-col :span="4">
                <div class="grid-content bg-purple">头像:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    accept=".jpg,.jpeg,.png,.JPG,.JPEG"
                    :auto-upload="false"
                    :show-file-list="false"
                    :before-upload="beforeAvatarUpload"
                    :on-success="handleAvatarSuccess"
                    :on-change="getFile">
                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contenusernamet bg-purplse"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <el-form-item  prop="usernames">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">用户名:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForm.usernames" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contenusernamet bg-purplse"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <!-- 性别 -->
             <el-form-item  prop="resource">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple user_sex">
                  <el-radio v-model="radios" label="1">男</el-radio>
                  <el-radio v-model="radios" label="2">女</el-radio>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item  prop="input_password">
             <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">初始密码:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input placeholder="" v-model="ruleForm.input_password" show-password  autocomplete="off"></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contenusernamet bg-purplse"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <!-- 新密码 -->
            <el-form-item  prop="input_passwords">
             <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">确认密码:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForm.input_passwords" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-contenusernamet bg-purplse"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <el-form-item  prop="input_phone">
            <el-row :gutter="20">
              <!-- 电话 -->
              <el-col :span="4">
                <div class="grid-content bg-purple">电话:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForm.input_phone" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item>
             <!-- 邮箱 -->
             <el-form-item  prop="input_el">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">邮箱:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForm.input_el" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>  
             </el-form-item>  
            <!-- 角色 -->
              <el-form-item  prop="value_name">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">角色:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForm.value_name" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <!-- 区域 -->
            <el-form-item  prop="value_qu">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">区域:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForm.value_qu" placeholder="请选择" @change="indexs($event,index)">
                    <el-option
                      v-for="(item, index) in options"
                      :key="index"
                      :label="item.groupName"
                      :value="index"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
             </el-form-item>  
            <!-- 部门 -->
             <el-form-item  prop="value_bm">
           <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">部门:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForm.value_bm" placeholder="请选择" @change="indexss($event,indexs)">
                    <el-option
                      v-for="(items,indexs) in optionsd"
                      :key="indexs"
                      :label="items.groupName"
                      :value="indexs"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item> 
              <!-- 小组 -->
              <el-form-item  prop="value_zu">
           <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">小组:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForm.value_zu" placeholder="请选择" @change="indexsss($event,num)">
                    <el-option
                      v-for="(item, num) in optionsds"
                      :key="num"
                      :label="item.groupName"
                      :value="num"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
             </el-form-item> 
             <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-button type="primary" @click="remove">取 消</el-button>
                  <el-button type="primary"  @click="keyi_tjuser">确 定</el-button>
                </div>
              </el-col>
            </el-row>
            </el-form>
          </el-dialog>
        </div>
      <!-- 编辑用户 -->
      <div class="user_tj">
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="60%" center>
            <el-form :model="ruleForms" status-icon :rules="rules" ref="ruleForms" label-width="100px" class="demo-ruleForms" enctype="multipart/form-data"> 
            <!-- 用户名 -->
            <el-form-item  prop="usernames">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">用户名:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForms.usernames" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item>
            <!-- 性别 -->
            <el-form-item  prop="sex">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple"></div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple user_sex">
                  <el-radio-group v-model="ruleForms.sex">
                  <el-radio :label="0">男</el-radio>
                  <el-radio :label="1">女</el-radio>
                </el-radio-group>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item>
             <el-form-item  prop="input_phone">
              <el-row :gutter="20">
              <!-- 电话 -->
              <el-col :span="4">
                <div class="grid-content bg-purple">电话:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForms.input_phone" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
              </el-row>
            </el-form-item>
            <!-- 角色 -->
            <el-form-item  prop="junse">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">角色:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForms.junse" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
             </el-form-item>
            <!-- 区域 -->
            <el-form-item  prop="value_qu">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">区域:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForms.value_qu" placeholder="请选择" @change="indexs($event,index)">
                    <el-option
                      v-for="(item, index) in options"
                      :key="index"
                      :label="item.groupName"
                      :value="index"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
             </el-form-item>  
            <!-- 部门 -->
             <el-form-item  prop="value_bm">
           <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">部门:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-select v-model="ruleForms.value_bm" placeholder="请选择" @change="indexss($event,indexs)">
                    <el-option
                      v-for="(items,indexs) in optionsd"
                      :key="indexs"
                      :label="items.groupName"
                      :value="indexs"
                    ></el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
            </el-form-item> 
              <!-- 小组 -->
              <el-form-item  prop="value_zu">
                <el-row :gutter="20">
                    <el-col :span="4">
                      <div class="grid-content bg-purple">小组:</div>
                    </el-col>
                    <el-col :span="14">
                      <div class="grid-content bg-purple">
                        <el-select v-model="ruleForms.value_zu" placeholder="请选择" @change="indexsss($event,index)">
                          <el-option
                            v-for="(item, index) in optionsds"
                            :key="index"
                            :label="item.groupName"
                            :value="index"
                          ></el-option>
                        </el-select>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple"></div>
                    </el-col>
                  </el-row>
             </el-form-item> 
            <!-- 邮箱 -->
             <el-form-item  prop="input_el">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple">邮箱:</div>
              </el-col>
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <el-input v-model="ruleForms.input_el" placeholder></el-input>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple"></div>
              </el-col>
            </el-row>
             </el-form-item>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="grid-content bg-purple">
                  <el-button type="primary" @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="baocun">确 定</el-button>
                </div>
              </el-col>
            </el-row>
             </el-form>
          </el-dialog>
        </div>
    </template>
  </d2-container>
</template>

<script>

import util from '@/libs/util.js'

import { userlook } from '@/api/aa'
import { grouplook } from "@/api/aa"
import { useradd } from "@/api/aa"
import { userput } from "@/api/aa"
var validatename = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};
export default {
  name: "sjtable",
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        // if (this.ruleForm.input_passwords !== '') {
        //   this.$refs.ruleForm.validateField('input_passwords');
        // }
        callback();
      }
    };
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.input_password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }; 
    const checkPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入联系方式'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的电话'))
        }
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value) || !value) {
        callback()
      } else {
        callback(new Error('请输入正确邮箱'))
      }
    }
    return {
      input: '',
      // 添加用户
      ruleForm: {
        usernames: '',
        input_password: '',
        input_passwords: '',
        input_phone: '',
        value_name: '',
        input_el: '',
        value_qu: '',
        value_bm: '',
        value_zu: '',
        imageUrl: ''
      },
      ruleForms: {
        id: '',
        usernames: '',
        junse: '',
        input_phone: '',
        sex: '0',
        userRolesId: 0,
        token: '',
        groupId: '',
        input_el: '',
        value_qu: '',
        value_bm: '',
        value_zu: ''
      },
      rules: {
        usernames: [
          { validator: validatename, trigger: 'blur' }
        ],
        input_password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        input_passwords: [
          { validator: checkAge, trigger: 'blur' }
        ],
        input_phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        input_el: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        value_name: [
          { required: true, message: '请选择角色', trigger: 'change' }
        ],
        value_qu: [
          { required: true, message: '请选择区域', trigger: 'change' }
        ]
      },
      value: "",
      token: '',
      radio: '1',
      radios: '1',
      i: 0,
      z: 0,
      index: null,
      options: [],
      optionsd: [],
      optionsds: [],
      centerDialogVisible: false,
      centerDialogVisibles: false,
      sbName: "xxxxx",
      tot: 0,
      val: "",
      currentPage: 5,
      currentPage4: 4,
      groupName: '',
      parentId: '',
      indexId: '',
      remarks: '',
      userlogo: '',
      tableData: []
    };
  },
  created: function () {
    this.token = util.cookies.get('token')

    console.log(this.token)

    this.user()
  },
  mounted () {
    this.gulp()
  },
  methods: {
    indexs (id, hum) {
      this.i = id
      console.log(id)
      console.log(hum) 
      this.ruleForm.value_bm = ''
      this.ruleForm.value_zu = ''
      this.ruleForms.value_bm = ''
      this.ruleForms.value_zu = ''
      this.optionsd = this.options[this.i].child
      if (id !=='') {
        this.indexId = this.options[this.i].groupId
        console.log(this.indexId)
      }
    },
    indexss (ids) {
      this.z = ids
      // console.log(ids) 
      if ( ids !== '') {
        this.ruleForm.value_zu = ''
        this.ruleForms.value_zu = ''
        this.optionsds = this.optionsd[this.z].child
        this.indexId = this.optionsd[this.z].groupId
        // console.log(this.indexId)
      }
      console.log(this.ptions[this.i].child[this.z].child);
    },
    indexsss (ids) {
      this.z = ids
      // console.log(ids) 
      if ( ids !== '') {
        this.optionsds = this.optionsd[this.z].child
        this.indexId = this.optionsds[this.z].groupId
        // console.log(this.indexId)
      }
    },
    getFile (file, fileList) {
      console.log(file);
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.ruleForm.imageUrl);
      this.getBase64(file.raw).then(res => {
        this.userlogo = res
      });
    },
    getBase64 (file) {
      return new Promise (function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ""
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error);
        }
        reader.onloadend = function () {
          resolve(imgResult);
        }
      });
    },
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
    },
    handleAvatarSuccess (res, file) {
      console.log(file)
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.ruleForm.imageUrl)
    },
    beforeAvatarUpload (file) {
      var testmsg = file.name.substring(file.name.lastIndexOf('.')+1)				
      // const extension = testmsg === 'pdf' ||  testmsg === 'PDF';
      const extension = testmsg === 'jpg' ||  testmsg === 'JPG' ||  testmsg === 'png' ||  testmsg === 'PNG';
      const isLt50M = file.size / 1024 / 1024 < 2
      if (!extension ) {
        this.$message({
          message: '上传文件只能是jpg或者png格式!',
          type: 'error'
        })
        return false
      }
      console.log(file)
      if (!isLt50M) {
        this.$message({
          message: '上传文件大小不能超过 2MB!',
          type: 'error'
        })
        return false;
      }
      return extension ||  isLt50M
    },
    remove () {

    },
    user () {
      userlook({
        userToken: this.token
      }).then(res => {
        console.log(res)
        this.tableData = res.data
        // for (var i = 0; i < res.data.length; i++) {
        //   // console.log(i);
        //   this.i.push(i)
        // }
      }).cath(err => {
        console.log(err)
      })
    },
    gulp () {
      grouplook({
        userToken: this.token
      }).then(res => {
        // console.log(res.data.child)
        this.options = res.data
        // for (var i = 0; i < res.data.length; i++) {
        //   // console.log(i);
        //   this.i.push(i)
        // }
      }).cath(err => {
        console.log(err)
      })
    },
    // 添加用户
    keyi_tjuser () {
      let params = new FormData()
      params.append('userName', this.ruleForm.usernames)
      params.append('userPassword', this.ruleForm.input_password)
      params.append('userPhone', this.ruleForm.input_phone)
      params.append('userEmail', this.ruleForm.input_el)
      params.append('userEnable', '1')
      params.append('userRolesId', '2')
      params.append('userlogo', this.userlogo)
      params.append('userSex', '0')
      params.append('groupId', this.indexId)
      params.append('userToken', this.token)

      useradd(params).then(res => {
        console.log(res)
      }).cath(err => {
        console.log(err)
      })
    },
    // 修改用户
    bianji (index, row) {
      this.centerDialogVisible = true
      console.log(index, row)
      this.ruleForms.usernames = row.userName
      this.ruleForms.id = row.userId
      this.ruleForms.sex = row.userSex
      this.ruleForms.input_phone = row.userPhone
      this.indexId = row.groupId
      this.ruleForms.userRolesId = row.userRolesId
      this.ruleForms.token = row.userToken
      this.ruleForms.input_el = row.userEmail
    },
    baocun () {
      userput({
        userId: this.ruleForms.id,
        userName: this.ruleForms.usernames,
        userPhone: this.ruleForms.input_phone,
        userEmail: this.ruleForms.input_el,
        groupId: this.indexId ,
        userRolesId: this.ruleForms.userRolesId,
        userSex: this.ruleForms.sex,
        userlogo: '',
        userToken: this.ruleForms.token
      }).then(res => {
        console.log(555)
        this.options = res.data
        // for (var i = 0; i < res.data.length; i++) {
        //   // console.log(i);
        //   this.i.push(i)
        // }
      }).cath(err => {
        console.log(err)
      })
    }
  }
};

</script>
<style lang="scss">
@import "../../../demo/css/bj.css";
.el-header {
  background-color: transparent;
  text-align: center;
}
// 头部样式
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
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .keyi_tjtoxiang{
    margin-top: 50px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 89px;;
    height: 89px;;
    line-height: 89px;;
    text-align: center;
  }
  .avatar {
    width: 89px;
    height: 89px;
    display: block;
  }
  .avatar img{
    width: 89px;
    height: 89px;
  }
  .ss_search{
    width: 55%;
    margin-left: 5%;
    background-image: url('./ssdata_img/search.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  } 
  .ss_submit{
    width: 30%;
    margin-left: 8%;
    background: #ebf1f6;
    background-image: url('./ssdata_img/bjlist_botton.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    border: none;
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
.el-form-item__error{
  left:50%;
}
// 添加用户
.user_tj .grid-content {
  color: #fff;
  text-align: right;
  line-height: 36px;
}
.user_tjs .el-dialog__header{
  padding:50px 20px 10px;
}
.user_tj .el-dialog__header{
  padding:40px 20px 10px;
}
.user_tj .user_sex {
  text-align: left;
}
.user_tj .el-dialog{
  background-color: transparent;
  background-image: url(../../../images/tu/tankuang.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.user_tj .el-select {
  width: 100%;
}
.user_tj .el-button--primary:focus, .bijl_head .el-button--primary:hover {
  background: transparent;
  border-color: transparent;
  color: #fff;
  background-image: url(../../../images/img/keyi_button.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.user_tj .el-button--primary {
  color: #fff;
  width: 110px;
  background-color: transparent;
  border-color: transparent;
  background-image: url(../../../images/img/keyi_button.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.user_tj .el-dialog__title{
  color:#fff;
}
</style>