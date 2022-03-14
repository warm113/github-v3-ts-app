import { defineStore } from 'pinia';
// import { getGroupList } from './api/modules/rule';
const useRuleStore = defineStore({
  // 这里的id必须为唯一ID
  id: 'rule',
  state: () => {
    return {
      groupList: [],
    };
  },
  // 等同于vuex的getter
  getters: {
    // getThemeType: (state) => state.themeType,
    // getThemeColor: (state) => state.themeColor,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    // setThemeType(type: string) {
    //   this.themeType = type;
    // },
    async getGroupData({ commit }, payload: any) {
      // this.groupList = await getGroupList();
      // console.log(this.groupList);
    },
  },
});

export default useRuleStore;
