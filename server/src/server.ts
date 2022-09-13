import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql';
import { ZipCodeService } from './services/zipcode';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = readFileSync(path.join(__dirname, 'generated', 'schema.graphql'), 'utf8');

const context = {
    services: {
        zipCode: new ZipCodeService()
    }
};

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    csrfPrevention: true,
    cache: 'bounded',
});
