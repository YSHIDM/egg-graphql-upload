/**
 * 响应码说明, 需要修改两处
 */
const STATUS_CODE = {
  SUCCESS: {
    COMMON: {
      OK: {
        code: 2000,
        msg: '成功',
      },
    },
    LOGIN: {
      OK: {
        code: 2001,
        msg: '登录成功',
      },
    },
    LOGOUT: {
      OK: {
        code: 2002,
        msg: '登出成功',
      },
      OUTED: {
        code: 2003,
        msg: '已经登出',
      },
    },
  },
  ERROR: {
    // 用户认证 登录 40000 - 40109
    AUTHENTICATION: {
      BAD_TOKEN: {
        code: 40001,
        msg: '错误的token',
      },
      NEED_TOKEN: {
        code: 40002,
        msg: '需要token',
      },
      TOKEN_EXPIRE: {
        code: 40003,
        msg: '过期的token',
      },
    },
    // 公共 40110 - 40400
    COMMON: {
      NAME_REQUIRED: {
        code: 40110,
        msg: '名称不能为空',
      },
      NAME_LENGTH_MAX_TEN: {
        code: 40111,
        msg: '名称不能超过10个字',
      },
      NAME_LENGTH_MAX_FIF: {
        code: 40112,
        msg: '名称不能超过50个字',
      },
      NAME_REPEAT: {
        code: 40113,
        msg: '名称不能重复',
      },
      FILTER_IS_NOT_JSON: {
        code: 40114,
        msg: '过滤条件不是 JSON 字符串',
      },
      PAPRAMS_VALIDATE_ERROR: {
        code: 40115,
        msg: '参数校验不通过',
      },
    },
    // 公司配置 40401 - 40500
    COMPANY_CONFIG: {
      COMPANY_ADD_REPEAT: {
        code: 40401,
        msg: '不能重复添加公司',
      },
      USER_PASS_ERROR: {
        code: 40402,
        msg: '密码或用户名错误',
      },
      COMPANY_INFO_MISS: {
        code: 40403,
        msg: '缺少公司信息',
      },
      COMPANY_SELECT_MISS: {
        code: 40404,
        msg: '没有选择公司',
      },
      COMPANY_LOGO_REPEAT: {
        code: 40405,
        msg: '公司标识重复',
      },
      COMPANY_NOT_EXISTS: {
        code: 40406,
        msg: '选择的公司不存在',
      },
    },
    // 文件相关 40501 - 40600
    FILE: {
      DELETE_FAILED: {
        code: 40501,
        msg: '文件删除失败',
      },
      OSS_UPLOAD_FAILED: {
        code: 40502,
        msg: 'oss 上传失败',
      },
      COMPRESS_FAILED: {
        code: 40503,
        msg: '文件压缩失败，可能是文件不完整',
      },
      UPLOAD_FAILED: {
        code: 40504,
        msg: '文件上传失败',
      },
      FIlE_LMIMIT: {
        code: 40505,
        msg: '单个文件大小超过限制',
      },
      FIlE_MIME_TYPE_ERR: {
        code: 40506,
        msg: '文件类型错误',
      },
    },
    // 图片存储 40601 - 40700
    IMAGE_STORE: {
      FK_TYPE_REQUIRED: {
        code: 40601,
        msg: '需要外键和类型',
      },
      IMAGE_LENGTH_OVERFLOW_8: {
        code: 40602,
        msg: ' 图片数量超过 8 张',
      },
    },
    // 档案组 40701 - 40800
    DOCGROUP: {
      DOCITEM_DELETE_FAILED: {
        code: 40701,
        msg: '该档案组已有档案条目时不可以删除',
      },
      SYSTEM_DOCITEM_READONLY: {
        code: 40702,
        msg: '该档案组是系统设置，不可以编辑或删除',
      },
    },
    // 用户角色 40801 - 40900
    ROLE: {
      MEMBER_REPEAT: {
        code: 40801,
        msg: '角色中不能重复添加人员',
      },
      NAME_REQUIRED: {
        code: 40802,
        msg: '角色名不能为空',
      },
      NAME_REPEAT: {
        code: 40803,
        msg: '角色名称不能重复',
      },
      MEMBER_EXISTS_NO_DELETE: {
        code: 40804,
        msg: '角色存在成员，不能删除',
      },
      ROLE_LENGTH_OVER: {
        code: 40805,
        msg: '角色数量不能超过 10 个',
      },
      ROLE_NAME_LENGTH_OVER: {
        code: 40805,
        msg: '角色名称长度不能超过 8 个字',
      },
    },
    // 模板 模板数据 40901 - 41000
    TEMPLATE: {
      NOT_EXISTS: {
        code: 40901,
        msg: '模板不存在，可能被删除',
      },
      NO_DELETE_OF_PUBLISH: {
        code: 40902,
        msg: '已经发布的模板不允许删除',
      },
      NOT_ADD_UNPUBLISHED: {
        code: 40903,
        msg: '模板未发布，不能添加模板数据',
      },
      NAME_LENGTH_MAX_TEN: {
        code: 40904,
        msg: '模板名字长度不能超过10',
      },
      FORBID_EDIT_SYSTEM: {
        code: 40905,
        msg: '官方模板不能编辑',
      },
      FORBID_DELETE_SYSTEM: {
        code: 40906,
        msg: '官方模板不能删除',
      },
      FORBID_PUBLISH_EMPTY: {
        code: 40907,
        msg: '空模板不能发布',
      },
      IS_DELETED: {
        code: 40908,
        msg: '模板已被删除',
      },
    },
    // 备注 41001 - 41100
    MEMO: {
      FK_REQUIRED: {
        code: 41001,
        msg: '备注外键不能为空',
      },
      TAG_REQUIRED: {
        code: 41002,
        msg: '备注标签不能为空',
      },
      CONTENT_REQUIRED: {
        code: 41003,
        msg: '备注内容不能为空',
      },
      CONTENT_LENGTH_MAX_FIVE_HUNDREN: {
        code: 41004,
        msg: '备注内容字数必须在 1-500 范围内',
      },
      NO_DELETE_AFTER_ONE_DAY: {
        code: 41005,
        msg: '备注发布已经超过 24 小时，不能删除',
      },
    },
    // Cust 客户 41101 - 41200
    CUST: {
      NAME_LENGTH_MAX_TWENTY: {
        code: 41101,
        msg: '客户名称必须是 1-20 个字',
      },
      ID_CARD_REPEAT: {
        code: 41102,
        msg: '客户身份证不能重复',
      },
      CUST_NOT_EXIST: {
        code: 41103,
        msg: '客户不存在',
      },
    },
    // Asset 资产 41201 - 41300
    ASSET: {
      NAME_LENGTH_MAX_TEN: {
        code: 41201,
        msg: '资产名称必须是 1-10 个字',
      },
      OWNER_LENGTH_MAX_TEN: {
        code: 41202,
        msg: '产权人必须是 1-10 个字',
      },
      NO_DELETE_WITH_ASSESS: {
        code: 41203,
        msg: '该资产存在评估，不可删除',
      },
      NOT_EXISTS: {
        code: 41204,
        msg: '当前资产不存在，可能已经删除',
      },
    },
    // Notarization 公证 41301 - 41400
    ANOTARIZATION: {
      NAME_LENGTH_MAX_TEN: {
        code: 41301,
        msg: '公证名称必须是 1-10 个字',
      },
      ADDRESS_LENGTH_MAX_HUNDRED: {
        code: 41302,
        msg: '公证地址必须是 1-100 个字',
      },
      REMARK_LENGTH_MAX_FIVE_HUNDRED: {
        code: 41303,
        msg: '公证说明必须是 1-500 个字',
      },
    },
    // 评估/人工评估 41401 - 41600
    ASSESS: {
      CURRENT_USER_NOT_ASSESSER: {
        code: 41401,
        msg: '当前用户不是评估人',
      },
      NO_COMMIT_WITHOUT_DONE: {
        code: 41402,
        msg: '人工评估未完成，不能提交',
      },
      NO_ADD_WITHOUT_DONE: {
        code: 41403,
        msg: '本资产存在待处理评估，不能发起新的评估',
      },
      NOT_EXISTS: {
        code: 41404,
        msg: '当前评估不存在，可能已经删除',
      },
      NO_ADD_WITH_PROGRESS: {
        code: 41405,
        msg: '当前评估已处理，不能保存人工评估',
      },
      HASED_ASSESSER: {
        code: 41406,
        msg: '当前评估已存在评估人',
      },
      IN_PROGRESSING: {
        code: 41407,
        msg: '选择的评估中存在已处理评估',
      },
      HASED_DONE: {
        code: 41408,
        msg: '当前评估已处理',
      },
      SUPERVISOR_ASSIGN: {
        code: 41409,
        msg: '当前的评估设置为主管分配',
      },
      CURRENT_USER_NOT_SUPERVISOR: {
        code: 41410,
        msg: '当前用户不是评估主管',
      },
      CURRENT_USER_NOT_IN_ASSESSERS: {
        code: 41411,
        msg: '当前用户不是评估成员',
      },
      CURRENT_USER_NOT_ASSESSER_OF_ASSESS: {
        code: 41412,
        msg: '当前用户不是该评估的评估人',
      },

    },
    //  审批 41601 - 41700
    APPROVALN: {
      NOT_EXISTS_DATA: {
        code: 41601,
        msg: '审批的业务数据不存在',
      },
      NOT_EXISTS_FLOW: {
        code: 41602,
        msg: '审批流不存在',
      },
      HASED_DONE: {
        code: 41603,
        msg: '审批已经结束',
      },
      APPROVED_CURRENT_NODE: {
        code: 41604,
        msg: '你已经审批了该审批流的当前节点',
      },
      NODE_CHANGED: {
        code: 41605,
        msg: '审批节点已变更',
      },

    },
    // 应用 41701 - 41799
    APPLICATION: {
      SIGN_APP_LENGTH_OVER: {
        code: 41701,
        msg: '常用应用超过 8 个',
      },
      HAS_SAME_APP_ALIAS: {
        code: 41702,
        msg: '应用重命名出现重名',
      },
    },
    DOC: {
      NAME_ERROR: {
        code: 41901,
        msg: '名称错误',
      },
      DOCG_ID_REQUIRED: {
        code: 41902,
        msg: '档案组id不能为空',
      },
      FORBIDDEN_EDIT: {
        code: 41903,
        msg: '只有 未发布/停用 的状态才可以编辑',
      },
    },
    // graphql 41801 - 41900
    GRAPHQL: {
      GRAPHQL_VALIDATION_FAILED: {
        code: 41801,
        msg: 'graphql 校验错误',
      },
      GRAPHQL_PARSE_FAILED: {
        code: 41802,
        msg: 'graphql 解析错误',
      },
      INTERNAL_SERVER_ERROR: {
        code: 41803,
        msg: 'graphql 其他错误',
      },
    },
    // 人员与角色关系
    USER_ROLE: {
      DELETE_SUPERVISOR: {
        code: 42001,
        msg: '角色主管不能删除',
      },
      NOT_EXISTS: {
        code: 42002,
        msg: '角色不存在',
      },
    },
    // 定时器
    SCHEDULERECORD: {
      APP_NOT_FOUND: {
        code: 42101,
        msg: '定时器固定类应用不存在',
      },
    },
  },
  INTERNAL: {
    RES: {
      code: 50000,
      msg: '请求异常',
    },
  },
  QX_ERROR: {
    DEPT_NOT_FOUND: {
      code: 60003,
      msg: '该部门不存在',
    },
  },
}

module.exports = STATUS_CODE

// 前端开发 40110: '名称不能为空',
// 前端用户 340110: '名称不能为空',
// 提供给前端
const CODE_MSG_MAP = {

  2000: '成功',
  2001: '登录成功',
  2002: '登出成功',
  2003: '已经登出',

  40001: '错误的token',
  40002: '需要token',
  40003: '过期的token',

  40110: '名称不能为空',
  40111: '名称不能超过10个字',
  40112: '名称不能超过50个字',
  40113: '名称不能重复',

  40401: '不能重复添加公司',
  40402: '密码或用户名错误',
  40403: '缺少公司信息',
  40404: '没有选择公司',
  40405: '公司标识重复',
  40406: '选择的公司不存在',

  40501: '文件删除失败',
  40502: 'oss 上传失败',
  40503: '文件压缩失败，可能是文件不完整',
  40504: '文件上传失败',
  40505: '文件大小超过限制',
  40506: '文件类型不正确',

  40601: '需要外键和类型',
  40602: ' 图片数量超过 8 张',

  40701: '该档案组已有档案条目时不可以删除',
  40702: '该档案组是系统设置，不可以编辑或删除',


  40801: '角色中不能重复添加人员',
  40802: '角色名不能为空',
  40803: '角色名称不能重复',
  40804: '角色存在成员，不能删除',
  40805: '角色数量不能超过 10 个',

  40901: '模板不存在，可能被删除',
  40902: '已经发布的模板不允许删除',
  40903: '模板未发布，不能添加模板数据',
  40904: '模板名字长度不能超过10',
  40905: '官方模板不能编辑',
  40906: '官方模板不能删除',
  40907: '空模板不能发布',

  41001: '备注外键不能为空',
  41002: '备注标签不能为空',
  41003: '备注内容不能为空',
  41004: '备注内容字数必须在 1-500 范围内',
  41005: '备注发布已经超过 24 小时，不能删除',

  41101: '客户名称必须是 1-20 个字',
  41102: '客户身份证不能重复',
  41103: '客户不存在',

  41201: '资产名称必须是 1-10 个字',
  41202: '产权人必须是 1-10 个字',
  41203: '该资产存在评估，不可删除',
  41204: '当前资产不存在，可能已经删除',

  41301: '公证名称必须是 1-10 个字',
  41302: '公证地址必须是 1-100 个字',
  41303: '公证说明必须是 1-500 个字',

  41401: '当前用户不是评估人',
  41402: '人工评估未完成，不能提交',
  41403: '本资产存在待处理评估，不能发起新的评估',
  41404: '当前评估不存在，可能已经删除',
  41405: '当前评估已处理，不能保存人工评估',
  41406: '当前评估已存在评估人',
  41407: '选择的评估中存在已处理评估',
  41408: '当前评估已处理',
  41409: '当前的评估设置为主管分配',
  41410: '当前用户不是评估主管',
  41411: '当前用户不是评估成员',
  41412: '当前用户不是该评估的评估人',

  41601: '审批的业务数据不存在',
  41602: '审批流不存在',
  41603: '审批已经结束',
  41604: '你已经审批了该审批流的当前节点',
  41605: '审批节点已变更',
  // 应用
  41701: '常用应用超过 8 个',
  41702: '应用重命名出现重名',

  41801: 'gql错误',
  41802: 'graphql错误',
  41803: 'graphql 其他错误',

  41901: '档案名称错我',
  41902: '档案组id不能为空',
  41903: '只有 未发布/停用 的状态才可以编辑',

  42001: '角色主管不能删除',
  42002: '角色不存在',

  42101: '定时器固定类应用不存在',

  50000: '请求异常',

  60003: '该部门不存在',
}

module.exports = CODE_MSG_MAP
