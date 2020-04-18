// import { GraphQLSchema } from 'graphql'
// import { MutationType } from './types/Mutation'
// import { QueryType } from './types/Query'

'use strict'
const { GraphQLSchema } = require('graphql')
const { MutationType } = require('./types/Mutation')
const { QueryType } = require('./types/Query')
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})
