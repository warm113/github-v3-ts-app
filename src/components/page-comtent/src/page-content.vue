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
const pageInfo = reactive();
</script>
<style scoped lang="scss"></style>
