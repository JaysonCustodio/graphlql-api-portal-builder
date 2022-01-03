import { Core } from "../../class/Core";
import coreExecutor from "../executors/coreExecutor";
import { EApiAction, IAction } from "../types";
const apiCoreState: Core[] = [];

const apiCoreReducer = (state = apiCoreState, { type, payload }: IAction) => {
  const { CREATE, UPDATE, ADD, REMOVE, DELETE, UPDATEF } = EApiAction;
  const {
    addCore,
    updateCore,
    addFunction,
    removeFunction,
    deleteApi,
    updateFunction,
  } = coreExecutor;
  switch (type) {
    case CREATE:
      return addCore(state, payload);
    case UPDATE:
      return updateCore(state, payload);
    case ADD:
      return addFunction(state, payload);
    case REMOVE:
      return removeFunction(state, payload);
    case DELETE:
      return deleteApi(state, payload);
    case UPDATEF:
      return updateFunction(state, payload);
    default:
      return state;
  }
};

export default apiCoreReducer;
