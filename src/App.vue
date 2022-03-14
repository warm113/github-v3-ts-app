<script setup lang="ts">
// import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const locale = zhCN;
</script>

<template>
  <div class="m-5">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
  <!-- <TheFooter></TheFooter> -->
</template>
