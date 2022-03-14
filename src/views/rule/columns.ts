const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
    customRender: ({ index }: any) => `${index + 1}`,
  },
  {
    title: '考勤组',
    dataIndex: 'groupName',
    key: 'groupName',
    align: 'center',
  },
  {
    title: '考勤人数',
    dataIndex: 'num',
    key: 'num',
    align: 'center',
    scopedSlots: { customRender: 'num' },
  },
  {
    title: '当前状态',
    // dataIndex: 'state',
    key: 'state',
    align: 'center',
    // scopedSlots: { customRender: 'state' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
    align: 'center',
  },
];
export default columns;
