import 'reflect-metadata';
import 'zone.js';

import { TestUtilsClass } from './utils/test.utils';

describe('Comparing generated vs expected files for Spring example', () => {

    it('checks Api.ts generated as expected', () => {

        const testUtilsClass = new TestUtilsClass();

        const generatedFileString = testUtilsClass.parseFileToString(
            './output_files/spring_example/controllers/Assessment.ts');
        const expectedFileString = testUtilsClass.parseFileToString(
            './expected_output_files/spring_example/controllers/Assessment.ts');

        expect(generatedFileString).toEqual(expectedFileString);

    });
});
