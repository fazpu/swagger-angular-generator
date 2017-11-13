import { Config } from '../generate';
import { Paths } from './requests.models';
/**
 * Entry point, processes all possible api requests and exports them
 * to files devided ty controllers (same as swagger web app sections)
 * @param paths paths from the schema
 * @param swaggerPath swagger base url
 */
export declare function processPaths(paths: Paths, swaggerPath: string, config: Config): void;
