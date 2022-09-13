import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadedFiles = loadFilesSync(path.join(__dirname, '..', 'src/graphql/**/*.graphql'));
const typeDefs = mergeTypeDefs(loadedFiles)
const printedTypeDefs = print(typeDefs)

fs.writeFileSync(path.join(__dirname, '..', 'src', 'generated', 'schema.graphql'), printedTypeDefs);