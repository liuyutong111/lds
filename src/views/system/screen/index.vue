<template>
  <d2-container>
    <template slot="header">screen</template>
    <canvas id="canvas" style="position: absolute;top:0;left:0;bottom: 0;z-index=-100"></canvas>
    
    <el-container>
      <el-header><img src="./01/top.png" alt=""></el-header>
      <el-main>
        <el-row :gutter="6">
          <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-main class="bg-1"></el-main>
                <el-main class="bg-2"></el-main>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-main class="bg-3"></el-main>
              <el-main class="bg-4">
                <!-- <el-button type="primary" plain>主要按钮</el-button> -->
              </el-main>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-main class="bg-5"></el-main>
              <el-main class="bg-6"></el-main>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    
  </d2-container>
</template>
<style scoped>
.el-button{
  width: 115px;
  height:42px;
}
  .el-header {
    background-color: transparent;
    text-align: center;
  }
  .el-main {
    background-color: transparent;
    padding:0
  }
  .bg-purple .el-main{
    margin-top: 5px;
    height:49%;
  }
  .bg-purple .bg-3{
    margin-top: 5px;
    height:66%;
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-4{
    margin-top: 5px;
    height:32%;
  }
  .bg-purple .bg-1{
    background-image: url('./01/设备状态.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-2{
    background-image: url('./01/设备概括.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-3{
    background-image: url('./01/设备安装位置.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-4{
    background-image: url('./01/数据显示.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-5{
    background-image: url('./01/报警状态.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .bg-purple .bg-6{
    background-image: url('./01/实时数据.png');
    background-size: 100% 100%;
    background-repeat: no-repeat
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    height: 800px;
    background: transparent
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>
export default {
  name: 'screen',
  data(){
    return{
    }
  },
  mounted(){
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1300; //星星数量

    var canvas2 = document.createElement("canvas"),
      ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, "#CCC");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    }

    var Star = function() {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 8;
      //星星大小
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 1000000;
      //星星移动速度
      this.alpha = random(2, 10) / 1000;

      count++;
      stars[count] = this;
    };

    Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.5; //尾巴
      ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  },
  methods:{
    
  }
}
</script>
<style>
  #canvas {
  width: 100%;
  height: 100%; /*默认全屏显示 可自己设置高度640px*/
  display: inline-block;
  vertical-align: baseline;
  position: absolute;
  z-index: -1;
}
</style>
