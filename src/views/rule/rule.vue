<template>
  <div class="rule">
    <div class="addBtn">
      <a-button type="primary" ghost>添加</a-button>
    </div>
    <page-content :table="table" />
  </div>
</template>

<script setup lang="ts">
import api from '@/api';
console.log(api);
const table = {};
</script>

<style lang="scss" scoped></style>
