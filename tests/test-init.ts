import * as fs from 'fs';
import {generate} from '../src/generate';

class TestInitClass {

    createDirectoryIfDoesNotExist(dir: string): void {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }

    createTestContent() {
        this.createDirectoryIfDoesNotExist('tests/output_files');
        this.createDirectoryIfDoesNotExist('tests/output_files/spring_example');
        this.createDirectoryIfDoesNotExist('tests/output_files/django_rest_swagger_example');

        generate('tests/test_swagger_files/spring-example.json', 'tests/output_files/spring_example');
        // generate('tests/test_swagger_files/django-rest-swagger-example.json',
        //         'tests/output_files/django_rest_swagger_example');
    }
}

const testInitClass = new TestInitClass();
testInitClass.createTestContent();
