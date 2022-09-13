import { ZipCode } from './ZipCode';
import type { Resolvers } from '../generated/graphql-types'

export const resolvers: Resolvers  = {
    Query: {
        ...ZipCode.resolvers.queries,
    },
};