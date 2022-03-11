// const systemModule: Module<ISystemState, IRootState> = {
//   namespaced: true,
//   state() {
//     return {
//       usersList: [],
//     };
//   },
//   mutations: {
//     changeUsersList(state, userList: any[]) {
//       state.usersList = userList;
//     },
//   },
//   getters: {
//     pageListData(state) {
//       return (pageName: string) => {
//         return (state as any)[`${pageName}List`];
//       };
//     },
//   },
//   actions: {
// };
