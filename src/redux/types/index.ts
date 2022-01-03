import { CustomResolver } from "../../class/CustomResolver";
import { CustomService } from "../../class/CustomService";
import { OverrideResolver } from "../../class/OverrideResolver";

export enum EApiAction {
  ADD = "ADD_FUNCTION",
  REMOVE = "REMOVE_FUNCTION",
  UPDATEF = "UPDATE FUNCTION",
  CREATE = "CREATE_API",
  UPDATE = "UPDATE_API",
  DELETE = "DELETE_API",
}

export enum EFunctionField {
  OVERRIDE = "default_resolver_override",
  RESOLVER = "custom_resolver_method",
  SERVICE = "custom_service_method",
}

export enum EFunctionFieldName {
  CODE = "code",
  IMPORTS = "imports",
  QUERY = "query",
  MUTATION = "mutation",
  METHODS = "methods",
  NAME = "name",
}

export interface IAddFunctionPayload {
  field: string;
  apiId: string;
  custom: CustomResolver | CustomService | OverrideResolver;
}

export interface IRemoveFunctionPayload {
  fieldId: string;
  apiId: string;
  field: string;
}

export interface IDeleteApi {
  apiId: string;
}

export interface IAction {
  type: EApiAction;
  payload: any | IStepPayload;
}

export interface IUpdateFunctionPayload {
  fieldName: string;
  functionFieldName: string;
  apiId: string;
  functId: string;
  value: string;
}

export interface IEntityRelationship {
  entity_name: string;
  field_name: string;
  relation_entity_name: string;
  database: string;
}

//step interfaces

export enum EStepAction {
  STEP1 = "step1",
  STEP2 = "step2",
  STEP3 = "step3",
  RESET = "reset",
}

export interface IStepPayload {
  field: string;
  value: string;
}

export interface IStep {
  status: "red" | "green" | "#b4186b" | "transparent";
  error: string;
}

export interface IStepState {
  step1: IStep;
  step2: IStep;
  step3: IStep;
  finish: boolean;
  previous: "step1" | "step2" | "step3" | "";
}

export interface IStepAction {
  type: "step1" | "step2" | "step3" | "reset";
  payload: IStepPayload;
}

export enum EStepStatus {
  CURRENT = "#b4186b",
  ERROR = "red",
  DONE = "green",
  NEUTRAL = "transparent",
}

export enum ETabs {
  STEP1 = "api",
  STEP2 = "entity",
  STEP3 = "initial",
}
