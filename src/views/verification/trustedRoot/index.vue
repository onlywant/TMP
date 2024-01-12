<script setup lang="ts">
// 查询可信根
import { tableData } from "./data";

// defineOptions({
//   name: "PureTable"
// });

const columns: TableColumnList = [
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "姓名",
    prop: "name"
  },
  {
    label: "地址",
    prop: "address"
  }
];
</script>

<template>
  <pure-table :data="tableData" :columns="columns" />
</template>
