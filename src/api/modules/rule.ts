import service from '@/api/http';

const ruleApi = {
  // 验证登录实例
  getGroupList: (params: object) =>
    service.get(`/teacherAttendance/group/getGroupList`, params),
};

export default ruleApi;
