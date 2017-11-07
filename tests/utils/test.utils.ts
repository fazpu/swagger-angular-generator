import * as fs from 'fs';

export class TestUtilsClass {

   parseFileToString(filePath: string) {

       return fs.readFileSync(filePath).toString('utf-8');

   }
}
