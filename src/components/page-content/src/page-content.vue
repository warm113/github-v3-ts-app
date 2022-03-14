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
    {{ table.data }}
    <hy-table :table="table" v-model:page="pageInfo"></hy-table>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import HyTable from '@/base-ui/table';
import useRuleStore from '@/store/rule';
const ruleStore = useRuleStore();
const props = defineProps({
  table: {
    type: Object,
    // default: () => {
    //   return {
    //     columns: [],
    //     data: [],
    //   };
    // },
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
const emits = =defineEmits('update:table')
const { table } = toRefs(props);
console.log(table.data);
const getPageData = async (queryInfo: any = {}) => {
  // await ruleStore.getGroupData({
  //   current: 1,
  //   size: 10,
  // });
  ruleStore.setGroupList([
    { id: 91, groupName: '测试消息通知', num: 4, state: 1 },
    { id: 88, groupName: '关闭考勤组4', num: 1, state: 1 },
    { id: 87, groupName: '测试关闭考勤组3', num: 5, state: 1 },
    { id: 86, groupName: '测试关闭考勤组2', num: 1, state: 1 },
    { id: 85, groupName: '测试关闭考勤组1', num: 4, state: 1 },
  ]);
  emits('update:table',ruleStore.groupList),
  // table.data = ruleStore.groupList;
  console.log(table.data);
  // console.log(ruleStore.getGroupData);
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
onMounted(() => {
  getPageData();
});
const handleTableChange = () => {
  console.log('handleTableChange');
};
</script>
<style lang="scss"></style>
