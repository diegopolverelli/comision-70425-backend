import {fileURLToPath} from 'url';
import { dirname } from 'path';


// console.log(import.meta.url)
// console.log(fileURLToPath(import.meta.url))
// console.log(dirname(fileURLToPath(import.meta.url)))

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;