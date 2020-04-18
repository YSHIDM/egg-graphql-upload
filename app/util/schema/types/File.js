'use strict'

const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql')

exports.FileType = new GraphQLObjectType({
  name: 'File',
  description: 'A stored file.',
  fields: () => ({
    id: {
      description: 'ID.',
      type: GraphQLNonNull(GraphQLID),
    },
    path: {
      description: '文件存储位置',
      type: GraphQLNonNull(GraphQLString),
    },
    filename: {
      description: '文件名称及后缀',
      type: GraphQLNonNull(GraphQLString),
    },
    mimetype: {
      description: 'MIME 类型.',
      type: GraphQLNonNull(GraphQLString),
    },
  }),
})
