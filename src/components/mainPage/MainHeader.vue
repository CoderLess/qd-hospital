<template>
  <div class="container">
    <!-- 第一行（logo phone） -->
    <span class="logo">阳光直肠滴入中心</span>
    <div class="phone float-right">
      <img class="float-left phone-img"
           src="../../assets/phone.png">
      <div class="phone-number">
        <span class="phone-number-text">咨询热线</span>
        <br />
        <span class="phone-number-value">001-002-003</span>
      </div>
    </div>
    <!-- 第二行（菜单） -->
    <div class="menu-container">
      <ul class="menu">
        <li v-for="menu in menuList"
            :class="{active: activeName == menu.name}"
            @click="selected(menu.name)"
            :key="menu.id">{{menu.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          'id': 1,
          'name': '首页'
        },
        {
          'id': 2,
          'name': '医疗特色'
        },
        {
          'id': 3,
          'name': '科室专家'
        },
        {
          'id': 4,
          'name': '关于我们'
        },
        {
          'id': 5,
          'name': '联系我们'
        },
      ],
      activeName: ''
    }
  },
  methods: {
    selected (menuName) {
      this.activeName = menuName
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  height: 80px;
  line-height: 80px;
  margin-left: 15%;
}
.logo {
  font-size: 2em;
  font-weight: 400;
  color: #0bac83;
}
.phone {
  width: 200px;
}
.phone-img {
  margin-top: 20px;
}
.phone-number {
  line-height: 20px;
  margin-top: 30px;
}
.phone-number-text {
  font-size: 15px;
  color: #f13a3a;
}
.phone-number-value {
  color: #666666;
  font-weight: 700;
  font-size: 20px;
}
.menu-container {
  width: 100%;
  height: 50px;
  background-color: #0bac83;
}
.menu {
  list-style: none;
}
.menu > li {
  width: 120px;
  height: 50px;
  line-height: 50px;
  float: left;
  text-align: center;
}
.menu > li:hover,
.active {
  background-color: #017a56;
}
</style>