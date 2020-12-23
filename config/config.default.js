
const UUID = require('uuid')
const path = require('path')
const SYS_SETTING = require('../app/constant/sysSetting')
const { STATUS_CODE, CODE_MSG_MAP } = require('../app/constant/statusCode')

module.exports = appInfo => {
  const config = {}

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588823854256_7232'// Cookie 安全字符串
  // 服务端接受 post 请求
  config.security = {
    csrf: {
      enable: false, // 将内置的安全系统关闭
      ignoreJSON: false,
      withCredentials: false,
      ignore: () => true,
    },
    domainWhiteList: ['http://localhost:8080'],
  }
  // eggjs默认监听127.0.0.1:7001，如果想要修改端口，按照如下操作修改端口即可
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
    },
  }
  // token生成以及验证
  config.jwt = {
    // enable: true, // 启用
    secret: '123456', // 令牌配置项 自定义 token 的加密条件字符串
    // expiresIn: 2 * 60 * 60 // 有效期24小时
    // algorithm: 'HS512', // 签名算法,默认是HMAC SHA256（写成 HS256）
  }
  config.algorithm = 'HS512'// 签名算法,默认是HMAC SHA256（写成 HS256）
  config.expire = 3 * 60 * 60 // redis 有效时间
  // 配置前端静态文件路径
  config.static = {
    prefix: '',
    dir: [
      appInfo.baseDir + '/app/public/dist',
      appInfo.baseDir + '/images',
      appInfo.baseDir + '/node_modules'
    ]
  }

  // 添加 view 配置（可以加载html）
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  }
  config.graphql_multipart = {
    tmpdir: path.join(appInfo.baseDir, '/egg-multipart-tmp'),
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
    ],
  }
  config.graphql_multipart = {
    tmpdir: path.join(appInfo.baseDir, '/egg-multipart-tmp'),
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
    ],
  }

  // add your middleware config here 中间件拦截请求,在中间件中开启 graphql // , 'errorHandler', 'authentication'
  config.middleware = ['compress', 'graphql']
  // 以下地址需要中间件处理
  config.authPath = ['/', '/images']
  // 提供 graphql 的路由
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    uploads: {
      maxFileSize: 5 * 1024 * 1024, // 单个文件不能超过5m
      // Max allowed number of files (default: Infinity).
      maxFiles: 10,
    },
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    formatError: (error, app) => {
      app.logger.error(error)
      return error
    },
    debug: true,
  }

  // 图片上传路径
  config.uploadDir = 'app/public/avatar/upload'
  config.onerror = {

    all(err, ctx) {
      console.error('----------企信连接失败?\n', err)
      if (err.code === 'Request_fileSize_limit') {
        ctx.body = JSON.stringify({ code: err.status, resmassage: '文件大小不能超过5M!' })
      } else if (err.message.startsWith('Invalid filename')) {
        ctx.body = JSON.stringify({ code: err.status, resmassage: '文件名或后缀错误!' })
      } else if (err.code === 'Request_files_limit') {
        ctx.body = JSON.stringify({ code: err.status, resmassage: '请将图片数量限制在10张以内!' })
      } else if (err.code === 'ConnectionTimeoutError') {
        ctx.body = JSON.stringify({ code: err.status, resmassage: '企信连接超时!--err.code' })
      } else if (err.name === 'ConnectionTimeoutError') {
        ctx.body = JSON.stringify({ code: err.status, resmassage: '企信连接超时!--err.name' })
      } else {
        ctx.body = JSON.stringify({ tips: '错误信息已经输出到浏览器控制台,请联系管理员!', err })
      }

      ctx.status = 500
    },
  }
  // 配置compress
  config.compress = {
    threshold: 2048, // 超过2048B进行压缩，不写默认为1024B
    br: true,
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.io = {
    init: {
      wsEngine: 'ws',
    },
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
      '/chat': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      },
    },
    redis: {
      host: '127.0.0.1',
      port: 6378,
      auth_pass: '123456',
      db: 1,
    },
    generateId: request => {
      // Something like UUID.
      const socketId = request._query.socketId || UUID.v1()
      return socketId
    },
  }
  config.customLoader = {
    constant: {
      directory: 'app/constant',
      inject: 'app',
    },
    validateRule: {
      directory: 'app/validateRule',
      inject: 'app',
    },
  }

  // the return config will combines to EggAppConfig
  config.CONSTANT = SYS_SETTING
  // config.GROUP = require('./group.json')
  config.STATUS_CODE = STATUS_CODE
  config.CODE_MSG_MAP = CODE_MSG_MAP

  return {
    ...config,
  }
}
