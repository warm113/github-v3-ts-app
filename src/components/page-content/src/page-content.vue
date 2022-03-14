<template>
  <div class="hyTable">
    <!-- <a-table
      :data-source="table.data"
      :columns="table.columns"
      rowKey="id"
      :pagination="pageInfo"
      @change="handleTableChange"
      :loading="tableLoading" 
      >
    </a-table> -->
    <hy-table :table="table" v-model:page="pageInfo"></hy-table>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import HyTable from '@/base-ui/table';
import useRuleStore from '@/store/rule';
const ruleStore = useRuleStore();
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
  pageInfo: {
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
});
const getPageData = (queryInfo: any = {}) => {
  console.log(ruleStore.getGroupData);
  // if (!isQuery) return;
  // store.dispatch('system/getPageListAction', {
  //   pageName: props.pageName,
  //   queryInfo: {
  //     offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
  //     size: pageInfo.value.pageSize,
  //     ...queryInfo,
  //   },
  // });
};
getPageData();
const handleTableChange = () => {
  console.log('handleTableChange');
};
</script>
<style lang="scss"></style>
