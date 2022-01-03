import { Core } from "../../class/Core";
import {
  IAddFunctionPayload,
  IDeleteApi,
  IRemoveFunctionPayload,
  IUpdateFunctionPayload,
} from "../types";

const coreExecutor = {
  addCore: (state: Core[], payload: any) => {
    return [...state, payload];
  },
  updateCore: (state: Core[], payload: any) => {
    const { apiId, value, name } = payload;
    const api = state.filter((e) => e.id === apiId)[0];
    const index = state.indexOf(api);
    const new_api = { ...api, [name]: value };
    const new_state = [
      ...state.slice(0, index),
      new_api,
      ...state.slice(index + 1),
    ];
    return new_state;
  },
  addFunction: (state: Core[], payload: IAddFunctionPayload) => {
    const { field, custom, apiId } = payload;
    const api = state.filter((e) => e.id === apiId)[0];
    //@ts-ignore
    const api_custom = api[field];
    const new_api = { ...api, [field]: [...api_custom, custom] };
    const index = state.indexOf(api);
    const new_state = [
      ...state.slice(0, index),
      new_api,
      ...state.slice(index + 1),
    ];
    return new_state;
  },
  removeFunction: (state: Core[], payload: IRemoveFunctionPayload) => {
    const { fieldId, apiId, field: name } = payload;
    const api = state.filter((e) => e.id === apiId)[0];
    const index = state.indexOf(api);
    //@ts-ignore
    const api_customs = api[name];
    const field = api_customs.filter((e: any) => e.id === fieldId)[0];
    const field_index = api_customs.indexOf(field);
    const new_customs = [
      ...api_customs.slice(0, field_index),
      ...api_customs.slice(field_index + 1),
    ];
    const new_api = { ...api, [name]: new_customs };
    return [...state.slice(0, index), new_api, ...state.slice(index + 1)];
  },
  deleteApi: (state: Core[], { apiId }: IDeleteApi) => {
    const api = state.filter((e: Core) => e.id === apiId)[0];
    const index = state.indexOf(api);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
  updateFunction: (state: Core[], payload: IUpdateFunctionPayload) => {
    const { apiId, fieldName, value, functionFieldName, functId } = payload;
    const api = state.filter((e: Core) => e.id === apiId)[0];
    const index = state.indexOf(api);
    //@ts-ignore
    const fields = api[fieldName];
    const field = fields.filter((e: any) => e.id === functId)[0];
    const field_index = fields.indexOf(field);
    const new_field = { ...field, [functionFieldName]: value };
    const new_fields = [
      ...fields.slice(0, field_index),
      new_field,
      ...fields.slice(field_index + 1),
    ];
    const new_api = { ...api, [fieldName]: new_fields };
    return [...state.slice(0, index), new_api, ...state.slice(index + 1)];
  },
};

export default coreExecutor;
