<script setup lang="ts">
import { defineProps } from 'vue';
import { Fn } from '@vueuse/core';
import HyTable from '@/base-ui/table';
import useRuleStore from '@/store/rule';
import { pageType } from './types';

const ruleStore = useRuleStore();
const props = defineProps({
  table: {
    type: Object,
    default: () => ({}),
  },
  slotList: {
    type: Array,
  },
});

const pageInfo = ref<pageType>({
  total: 0,
  pageSize: 10,
  current: 1,
  showTotal: (total: number) => `共 ${total} 条数据`,
  showQuickJumper: true,
  showSizeChanger: true,
});
const emits = defineEmits(['update:data']);
// const { table } = toRefs(props);
const getPageData = async (queryInfo: any = {}) => {
  // await ruleStore.getGroupData({
  //   current: 1,
  //   size: 10,
  // });
  ruleStore.setGroupList([
    { id: 93, groupName: '测试消息通知', num: 4, state: 1 },
    { id: 92, groupName: '关闭考勤组4', num: 1, state: 1 },
    { id: 91, groupName: '测试关闭考勤组3', num: 5, state: 1 },
    { id: 90, groupName: '测试关闭考勤组2', num: 1, state: 1 },
    { id: 89, groupName: '测试关闭考勤组1', num: 4, state: 1 },
    { id: 88, groupName: '测试关闭考勤组4', num: 4, state: 1 },
    { id: 87, groupName: '测试关闭考勤组5', num: 4, state: 1 },
    { id: 86, groupName: '测试关闭考勤组6', num: 4, state: 1 },
    { id: 85, groupName: '测试关闭考勤组7', num: 4, state: 1 },
    { id: 84, groupName: '测试关闭考勤组8', num: 4, state: 1 },
    { id: 83, groupName: '测试关闭考勤组9', num: 4, state: 1 },
    { id: 82, groupName: '测试关闭考勤组10', num: 4, state: 1 },
    { id: 81, groupName: '测试关闭考勤组11', num: 4, state: 1 },
  ]);

  emits('update:data', ruleStore.groupList);
  // table.data = ruleStore.groupList;
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
</script>
<template>
  <div class="hyTable">
    <hy-table v-model:page="pageInfo" :table="table" :slot-list="slotList">
      <!-- <template #state="scope">
        sdsdsd
        {{ scope.state === 1 ? '开启' : '关闭' }}
      </template> -->
      <template #header> header </template>
      <template #state> s </template>
      <template #num="scope">{{ scope }} </template>
      <!-- <template v-for="item in slotList" :key="item" #[item]> 开启 </template> -->
    </hy-table>
  </div>
</template>
<style lang="scss"></style>
