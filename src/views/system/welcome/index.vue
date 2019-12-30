<template>
    <div class="page-welcome" :style="{backgroundImage:'url(' + backdrop + ')'}">
      <img class="page-welcome-img" src="./img/tp.jpg" alt="">
  </div>
</template>
<style lang="scss">
  .page-welcome{
    @extend %unable-select;
  $backgroundColor: #f0f2f5;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  //图片居中展示
  display:flex;justify-content:center;align-items:center
  }
  
</style>
<script>
import { mapActions } from 'vuex'
import localeMixin from '@/locales/mixin.js'
import { system } from "@/api/aa.js";
export default {
  name:'welcome',
  mixins: [
    localeMixin
  ],
  data () {
    return {
      backdrop:''
    }
  },
  mounted () {
    //接通之后将下方的注释解开
    // this.userEmail=this.$route.query.userEmail
    var backdrop = localStorage.getItem("backdrop"); 
    if(backdrop){
      this.backdrop=backdrop
    }else{
      system().then(res => {
        this.backdrop = res.data[0].backdrop;
      });
    }
    let _that=this
    setTimeout(function(){
      _that.logIn();
    },5000)
  },
  updated(){
    
  },
  methods:{
    logIn(){
      this.$router.push({path:'./index'})
    }
  }
}
</script>
