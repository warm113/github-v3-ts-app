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
];
export default columns;
