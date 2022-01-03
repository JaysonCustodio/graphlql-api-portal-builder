import {
  EApiAction,
  IAddFunctionPayload,
  IDeleteApi,
  IRemoveFunctionPayload,
  IUpdateFunctionPayload,
} from "../types";

export const createApi = (payload: any) => {
  return {
    type: EApiAction.CREATE,
    payload,
  };
};

export const updateApi = (payload: any) => {
  return {
    type: EApiAction.UPDATE,
    payload,
  };
};

export const deleteApi = (payload: IDeleteApi) => {
  return {
    type: EApiAction.DELETE,
    payload,
  };
};

export const addFunction = (payload: IAddFunctionPayload) => {
  return {
    type: EApiAction.ADD,
    payload,
  };
};

export const removeFunction = (payload: IRemoveFunctionPayload) => {
  return {
    type: EApiAction.REMOVE,
    payload,
  };
};

export const updateFunction = (payload: IUpdateFunctionPayload) => {
  return {
    type: EApiAction.UPDATEF,
    payload,
  };
};
