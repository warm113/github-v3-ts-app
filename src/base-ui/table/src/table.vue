<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  table: {
    type: Object,
  },
  page: {
    type: Object,
    default: () => {
      return {
        total: 0,
        pageSize: 10,
        current: 1,
        showTotal: (total) => `共 ${total} 条数据`,
        showQuickJumper: true,
        showSizeChanger: true,
      };
    },
  },
  slotList: {
    type: Array,
  },
});
const { table, slotList } = toRefs(props);
// console.log(props.slotList);
defineEmits(['update:page']);
const handleTableChange = (pagination, filters, sorter) => {
  console.log(pagination);
};
</script>
<template>
  <div class="hyTable">
    <slot name="header"></slot>
    {{ table.columns }}
    <a-table
      :data-source="table.data"
      :columns="table.columns"
      rowKey="id"
      :pagination="page"
      @change="handleTableChange"
      ><!--  :loading="tableLoading" -->
      <template #bodyCell="{ column, record }">
        <template v-for="item in slotList">
          <template v-if="column.key == item">
            <slot :name="item"></slot>
          </template>
        </template>
      </template>
    </a-table>
  </div>
</template>
<style lang="scss"></style>
