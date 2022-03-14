<template>
  <div class="rule">
    <div class="py-5">
      <a-button type="primary" ghost>添加</a-button>
    </div>
    <page-content :table="table" v-model:data="table.data" />
  </div>
</template>

<script setup lang="ts">
import columns from './columns';
// import api from '@/api';
const $api = inject('$api');
// console.log(api.postVerification);
import useRuleStore from '@/store/rule';
const ruleStore = useRuleStore();
const table = reactive({
  columns,
  data: ruleStore.groupList,
});
</script>

<style lang="scss" scoped></style>
