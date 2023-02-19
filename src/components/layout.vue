<template>
    <a-layout>
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <div class="search" style="float: left;height: 68px;" >
            <a-input v-model:value="value" placeholder="收索" style="width: 200px;"/>
            <a-button @click="query">收索</a-button>
            <!-- <router-link :to="{ path: '/movue', query: { wd: value } }" ></router-link> -->
        </div>
        
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">电视</a-menu-item>
          <a-menu-item key="2">电影</a-menu-item>
          <a-menu-item key="3">动漫</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        本站所有内容均来自互联网，如果本站部分内容侵犯您的版权请告知，在必要证明文件下我们第一时间撤除
      </a-layout-footer>
    </a-layout>
  </template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({

    setup() {
        const value = ref<string>('');
        const query=()=>{
          // value.value=''
          window.location.href="/MoliVideo/#/movue?wd=" + value.value
      


        }
      return {
        selectedKeys: ref<string[]>([]),
            value,
            query
      };
    },
  });
  </script>
  <style>
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .site-layout .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>
  