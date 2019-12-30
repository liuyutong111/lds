<template>
  <el-dropdown size="small" class="d2-mr">
    <span>
    <span v-if="userName==''"><img src="./bg6.jpg" style="width:25px;height:25px;border-radius:5px;" alt=""></span>
     <span v-if="userName !==''"><img :src="userlogo" style="width:25px;height:25px;border-radius:5px;" alt=""></span>
    <span v-if="userName!==''" class="btn-text" style="height:25px;">{{userName}}</span>
     <span v-if="userName==''" class="btn-text" style="height:25px;">未登录</span>
  </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff">
        <d2-icon name="power-off" class="d2-mr-5"/>
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import util from '@/libs/util.js'
export default {
  data () {
    return {
      userName: '',
      userlogo: ''
    }
  },
  created () {
    this.userName = util.cookies.get('userName')
    console.log(this.userName);
    this.userlogo = util.cookies.get('userlogo')
    console.log(this.userlogo);
  },
  computed: {
    ...mapState('d2admin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('d2admin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        confirm: true
      })
    }
  }
}
</script>
