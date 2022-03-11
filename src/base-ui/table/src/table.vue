<template>
  <div class="hyTable">
    <a-table
      :data-source="table.data"
      :columns="table.columns"
      rowKey="id"
      :pagination="pagination"
      @change="handleTableChange"
      ><!--  :loading="tableLoading" -->
    </a-table>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
defindProps({
  table: {
    type: Object,
    default: () => {
      return {
        columns: [],
        data: [],
      };
    },
  },
  pageInfo: {
    type: Object,
    default: () => {
      return {
        total: 0,
        size: 10,
        current: 1,
        showTotal: (total) => `共 ${total} 条数据`,
        showQuickJumper: true,
        showSizeChanger: true,
      };
    },
  },
});
</script>
<style lang="scss"></style>
