'use strict';
const { GraphQLUpload } = require('apollo-server-koa');
const { GraphQLList, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const promisesAll = require('promises-all');
const { FileType } = require('./File');
const fs = require('fs');
const path = require('path');

exports.MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    singleUpload: {
      description: '单个文件上传',
      type: GraphQLNonNull(FileType),
      args: {
        file: {
          description: '文件存储路径',
          type: GraphQLNonNull(GraphQLUpload),
        },
      },
      resolve: async (parent, { file }) => {
        const f = await Promise.all(file);
        const filePath = path.join(__dirname, '../../../../images/', f[0].filename);
        f[0].createReadStream().pipe(fs.createWriteStream(filePath));
        return {
          id: '1',
          path: filePath,
          filename: f[0].filename,
          mimetype: f[0].mimetype,
        };
      },
    },
    multipleUpload: {
      description: '批量上传文件',
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
      args: {
        files: {
          description: '所有文件信息',
          type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLUpload))),
        },
      },
      async resolve(parent, { files }, { storeUpload }) {
        const { resolve, reject } = await promisesAll.all(
          files.map(storeUpload)
        );

        if (reject.length) {
          reject.forEach(({ name, message }) =>
            console.error(`${name}: ${message}`)
          );
        }

        return resolve;
      },
    },
  }),
});
