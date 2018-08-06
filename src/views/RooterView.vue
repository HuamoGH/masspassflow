<template>
<div class="rooter-view">
  <div class="sider-bar">
    <!-- 系统名称图片 -->
    <div class="main-logo-wrap">
      <img src="@/assets/png-icons/main_logo@2x.png"/>
    </div>

    <!-- 侧边导航栏，使用自定义组件text-with-icon和ElementUi的el-menu组件-->
    <el-menu @select="onSelected" class="dashboard-nav" background-color="#0E2358" 
    text-color="#fff" active-text-color="#fff" router>

      <el-menu-item index="/dashboardview">
          <text-with-icon hasText iconName="dashboard" text="主控台" svgOrPng>
          </text-with-icon>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <text-with-icon hasText path="../static/png-icons/risk@2x.png" text="风险洞察" :svgOrPng="false">
          </text-with-icon>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <text-with-icon hasText path="../static/png-icons/risk-1@2x.png" text="七天维度" :svgOrPng="false">
            </text-with-icon>
          </el-menu-item>
          <el-menu-item index="2-2">
            <text-with-icon hasText path="../static/png-icons/risk-7@2x.png" text="一小时维度" :svgOrPng="false">
            </text-with-icon>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/intimeview">
        <text-with-icon hasText iconName="view" text="实时视图" svgOrPng>
        </text-with-icon>
      </el-menu-item>

      <el-menu-item index="4">
        <text-with-icon hasText iconName="warningAside" text="预警报警" svgOrPng>
        </text-with-icon>
      </el-menu-item>

      <el-menu-item index="5">
        <text-with-icon hasText iconName="scheme" text="安保方案" svgOrPng>
        </text-with-icon>
      </el-menu-item>

      <el-submenu index="6">
        <template slot="title">
          <text-with-icon hasText iconName="history" text="历史分析" svgOrPng>
          </text-with-icon>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">
            <text-with-icon hasText iconName="setting" text="历史客流" svgOrPng>
            </text-with-icon>
          </el-menu-item>
          <el-menu-item index="6-2">
            <text-with-icon hasText iconName="warning" text="历史风险" svgOrPng>
            </text-with-icon>
          </el-menu-item>
          <el-menu-item index="6-3">
            <text-with-icon hasText iconName="warning" text="历史警情" svgOrPng>
            </text-with-icon>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="7">
        <text-with-icon hasText iconName="mainLogo" text="系统设置" svgOrPng>
        </text-with-icon>
      </el-menu-item>
    </el-menu>

    <!-- 侧边栏底部登出部分 -->
    <div class="sidebar-footer">
      <svg-icon class="user-info-svg" icon-class="userInfo" class-name="svg-icon-userInfo">
      </svg-icon>
      <span class="user-name">管理员1</span>
      <svg-icon class="log-out-svg" icon-class="logout" class-name="svg-icon-logout">
      </svg-icon>
    </div>

    <!-- 右侧主面板 -->
    </div>
    <div class='main-pane'>
      <!-- 主面板顶部导航栏名和天气条 -->
      <div class="weather-bar">
        <span class="pane-text">{{selectedNav}}</span>
        <span class="weather">2018/06/05   阴    27/21摄氏度</span>
      </div>
      <!-- 主面板主要部分，配置路由实现 -->
      <div class="pane">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// written by yinsuqin August 2018
import SvgIcon from "@/components/SvgIcon";
import TextWithIcon from "@/components/TextWithIcon";

export default {
  name: "RooterView",
  data: function() {
    return {
      selectedNav:'主控台'
    };
  },
  components: {
    SvgIcon,
    TextWithIcon
  },
  methods: {
    // 根据用户选中的导航栏改变主面板标题
    onSelected(key,keyPath){
      switch (key) {
        case '1':
          this.selectedNav = '主控台'
          break;
        case '2':
          this.selectedNav = '风险洞察'
          break;
        case '2-1':
          this.selectedNav = '七天维度'
          break;
        case '2-2':
          this.selectedNav = '一小时维度'
          break;
        case '3':
          this.selectedNav = '实时试图'
          break;
        case '4':
          this.selectedNav = '预警报警'
          break;
        case '5':
          this.selectedNav = '安保方案'
          break;
        case '6':
          this.selectedNav = '历史分析'
          break;
        case '6-1':
          this.selectedNav = '历史客流'
          break;
        case '6-2':
          this.selectedNav = '历史风险'
          break;
        case '6-3':
          this.selectedNav = '历史警情'
          break;
        case '7':
          this.selectedNav = '系统设置'
          break;
        default:
          break;
      }
    }
  },
  computed:{
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.rooter-view {
  display: flex;
  height: 100%;
  .sider-bar {
    width: 20rem;
    display: flex;
    flex-direction: column;
    background-color: #0e2358;
    .main-logo-wrap {
      width: 20rem;
      height: auto;
      img {
        max-width: 20rem;
        height: auto;
      }
    }
    .dashboard-nav {
      border: 0.01rem solid #0e2358;//设置边框以覆盖出现的缝隙
      width: 20rem;
      flex: 1;
    }
    .sidebar-footer {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-bottom: 1rem;
      .user-info-svg {
        margin-right: 1rem;
        color: transparent;
      }
      .log-out-svg {
        color: transparent;
      }
      .user-name {
        margin-right: 1rem;
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
  .main-pane {
    flex: 1;
    display: flex;
    flex-direction: column;
    .weather-bar {
      padding: 1.2rem;
      display: flex;
      justify-content: space-between;
      .pane-text {
        font-size: 1.5rem; //设计图标标的20px?????
        color: #fff;
      }
      .weather {
        font-size: 1.5rem;
        color: #fff;
      }
    }
    .pane{
      margin:  0rem 1.2rem 1rem 1.2rem;
      flex: 1;
    }
  }
}
</style>

