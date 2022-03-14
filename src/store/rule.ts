import { defineStore } from 'pinia';
// import initApi from '../api';
const useRuleStore = defineStore({
  // 这里的id必须为唯一ID
  id: 'rule',
  state: () => {
    return {
      groupList: [],
    };
  },
  // 等同于vuex的getter
  getters: {},
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    getGroupData(payload: any) {
      // this.groupList = await initApi.getGroupList();
      return new Promise((resolve, reject) => {
        const { list } = {
          total: 5,
          current: 1,
          size: 10,
          list: [
            { id: 91, groupName: '测试消息通知', num: 4, state: 1 },
            { id: 88, groupName: '关闭考勤组4', num: 1, state: 1 },
            { id: 87, groupName: '测试关闭考勤组3', num: 5, state: 1 },
            { id: 86, groupName: '测试关闭考勤组2', num: 1, state: 1 },
            { id: 85, groupName: '测试关闭考勤组1', num: 4, state: 1 },
          ],
        };
        this.groupList = list;
      });
    },
  },
});

export default useRuleStore;
