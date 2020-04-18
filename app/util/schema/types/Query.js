// 'use strict'
// const { GraphQLList, GraphQLObjectType, GraphQLNonNull } = require('graphql')
// const { FileType } = require('./File')
// const fsp = require('fs').promises

// exports.QueryType = new GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//         uploads: {
//             description: 'All stored files.',
//             type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
//             resolve: async (source, args, { db }) => {
//                 // db.get('uploads').value()
//                 const file = await fsp.readFile(__filename)

//                 return fsp.readFile(__filename)
//             },
//         },
//     }),
// })
