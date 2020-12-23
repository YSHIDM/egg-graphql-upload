// export const PERMISSION_BASE =
const PERMISSION_BASE = {
  manager: {
    name: 'manager',
    title: '管理',
    id: '1000',
    code: 0,
    parentId: 0,
  },
  base_data: {
    name: 'base_data',
    title: '基础数据',
    id: '1001',
    code: 1,
    parentId: '1000',
  },
  contact: {
    name: 'contact',
    title: '通信录',
    id: '1002',
    code: 2,
    parentId: '1001',
  },
  document: {
    name: 'document',
    title: '档案',
    id: '1003',
    code: 3,
    parentId: '1001',
  },
  role: {
    name: 'role',
    title: '角色',
    id: '1004',
    code: 4,
    parentId: '1001',
  },
  permission: {
    name: 'permission',
    title: '权限',
    id: '1005',
    code: 5,
    parentId: '1001',
  },
  company: {
    name: 'company',
    title: '公司信息',
    id: '1006',
    code: 6,
    parentId: '1001',
  },
  form_template: {
    name: 'form_template',
    title: '模板',
    id: '1007',
    code: 7,
    parentId: '1001',
  },
  capitalSetup: {
    name: 'capitalSetup',
    title: '资金设置',
    id: '1008',
    code: 8,
    parentId: '1001',
  },
  apply_config: {
    name: 'apply_config',
    title: '应用配置',
    id: '1008',
    code: 8,
    parentId: '1000',
  },
  business_apply: {
    name: 'business_apply',
    title: '业务类应用',
    id: '1009',
    code: 9,
    parentId: '1008',
  },
  common_apply: {
    name: 'common_apply',
    title: '公共类应用',
    id: '1010',
    code: 10,
    parentId: '1008',
  },
  fixed_apply: {
    name: 'fixed_apply',
    title: '固定类应用',
    id: '1011',
    code: 11,
    parentId: '1008',
  },
  cost_perform: {
    name: 'cost_perform',
    title: '费用',
    id: '1012',
    code: 12,
    type: 1, // 业务类
    parentId: '1015',
  },
  breach_perform: {
    name: 'breach_perform',
    title: '违约',
    id: '1013',
    code: 13,
    type: 1, // 业务类
    parentId: '1015',
  },
  default_interest_perform: {
    name: 'default_interest_perform',
    title: '罚息',
    id: '1014',
    code: 14,
    type: 1, // 业务类
    parentId: '1015',
  },
  receivable: {
    name: 'receivable',
    title: '应收',
    id: '1015',
    code: 15,
    type: 1, // 业务类
    parentId: '0',
  },
  income_app: {
    name: 'income_app',
    title: '实收报表',
    id: '1016',
    code: 16,
    type: 1, // 业务类
    parentId: '0',
  },
  income_operate: {
    name: 'income_operate',
    title: '实收',
    id: '1017',
    code: 17,
    type: 1, // 业务类
    parentId: '1016',
  },
  actually_paid: { // actually_paid
    name: 'actually_paid',
    title: '实付报表',
    id: '1018',
    code: 18,
    type: 1, // 业务类
    parentId: '0',
  },
  actually_paid_operate: {
    name: 'actually_paid_operate',
    title: '实付',
    id: '1019',
    code: 19,
    type: 1, // 业务类
    parentId: '1018',
  },
}

module.exports = PERMISSION_BASE

const PERMISSION_INFO = {
  DEFDOCCONNECTOR: 1 << PERMISSION_BASE.document.code,
  DEFDOCLISTCONNECTOR: 1 << PERMISSION_BASE.document.code,
  DEPARTMENTCONNECTOR: 1 << PERMISSION_BASE.contact.code,
  PERMISSIONCONNECTOR: 1 << PERMISSION_BASE.permission.code,
  ROLECONNECTOR: 1 << PERMISSION_BASE.role.code,
  USERCONNECTOR: 1 << PERMISSION_BASE.contact.code,
  USERROLECONNECTOR: 1 << PERMISSION_BASE.permission.code,
  COMMONCONNECTOR: 1 << PERMISSION_BASE.contact.code,
  APPLICATIONDISPLAYCONNECTOR: 1 << PERMISSION_BASE.business_apply.code,
  PUBLICAPPLICATIONCONNECTOR: 1 << PERMISSION_BASE.common_apply.code,
  FIXBACKCONNECTOR: 1 << PERMISSION_BASE.fixed_apply.code,
}

module.exports = PERMISSION_INFO
