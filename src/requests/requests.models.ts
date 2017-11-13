import {HttpResponse, Method, MethodName, Parameter} from '../types';

export interface Paths {
  [key: string]: {
    [key in MethodName]?: Method;
  };
}

export interface Dictionary<T> {
    [index: string]: T;
}

export interface ControllerMethod {
  summary: string;
  operationId: string;
  description: string;
  methodName: MethodName;
  simpleName: string;
  name: string;
  url: string;
  swaggerUrl: string;
  responses: HttpResponse;
  responseDef: {
    type: string;
    enumDeclaration: string;
    usesGlobalType: boolean;
  };
  paramDef: Parameter[];
}

export interface MethodOutput {
  methodDef: string;
  interfaceDef: string;
  usesGlobalType: boolean;
}
