<template>
  <div class="rule">
    <div class="py-5">
      <a-button type="primary" ghost>添加</a-button>
    </div>
    <page-content v-model:data="table.data" :table="table" :slot-list="slotList" />
  </div>
</template>

<script setup lang="ts">
import columns from './columns';
// console.log(api.postVerification);
import useRuleStore from '@/store/rule';
// import api from '@/api';
const $api = inject('$api');

const ruleStore = useRuleStore();
const table = reactive({
  columns,
  data: [],
});
const slotList = columns.reduce((prev, cur, index) => {
  cur?.scopedSlots && prev.push(cur?.scopedSlots?.customRender);
  return prev;
}, []);
console.log(slotList);
</script>

<style lang="scss" scoped></style>
