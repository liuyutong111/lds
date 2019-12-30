<template>
  <el-dropdown size="small" class="d2-mr">
    <span>
    <span><img src="./bg6.jpg" style="width:25px;height:25px;border-radius:5px;" alt=""></span>
    <span class="btn-text" style="height:25px;line-height:25px;">{{info.name ? `你好 ${info.name}` : '未登录'}}</span></span>
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
export default {
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
