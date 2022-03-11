<template>
  <div class="pape-content">
    <hy-table :table="table" :pageInfo="pageInfo"></hy-table>
  </div>
</template>
<script setup lang="ts">
import HyTable from '@/base-ui/table';
import { defineProps } from 'vue';
defineProps({
  table: {
    type: Object,
    default: () => {
      return {
        columns: [],
        data: [],
      };
    },
  },
});
const pageInfo = reactive({
  total: 0,
  size: 10,
  current: 1,
  showTotal: (total) => `共 ${total} 条数据`,
  showQuickJumper: true,
  showSizeChanger: true,
});
</script>
<style scoped lang="scss"></style>
