<template>
  <div class="container">
    <!-- 横幅区域 -->
    <div class="banner">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in bannerList"
                          :key="item.id">
          <img :src="item.src"
               :alt="item.alter" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 详情区域 -->
    <div class="introduce">
      <el-row>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 医疗特色滚动图 -->
    <div class="characteristic">

    </div>
  </div>
</template>

<script>
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
export default {
  data () {
    return {
      bannerList: [
        {
          id: 1,
          alter: 'banner1',
          src: banner1
        },
        {
          id: 2,
          alter: 'banner2',
          src: banner2
        },
        {
          id: 3,
          alter: 'banner3',
          src: banner3
        },
        {
          id: 4,
          alter: 'banner4',
          src: banner4
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.introduce {
  height: 300px;
}
.el-row {
  height: 100%;
}
.el-col {
  height: 100%;
  padding: 10px;
}
.box-card {
  height: 280px;
}
.characteristic {
  height: 200px;
}
</style>