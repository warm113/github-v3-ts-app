<template>
  <div class="rule">
    <div class="py-5">
      <a-button type="primary" ghost>添加</a-button>
    </div>
    <page-content :table="table" />
  </div>
</template>

<script setup lang="ts">
import columns from './columns';
// import api from '@/api';
const $api = inject('$api');
// console.log(api.postVerification);
const table = {
  columns,
  data: [],
};
</script>

<style lang="scss" scoped></style>
