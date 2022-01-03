import { EStepAction, EStepStatus, IStepPayload } from "../types";

export const updateStep1 = (payload: IStepPayload) => {
  return {
    type: EStepAction.STEP1,
    payload,
  };
};

export const updateStep2 = (payload: IStepPayload) => {
  return {
    type: EStepAction.STEP2,
    payload,
  };
};

export const updateStep3 = (payload: IStepPayload) => {
  return {
    type: EStepAction.STEP3,
    payload,
  };
};

export const reset = () => {
  return {
    type: EStepAction.RESET,
    payload: { field: "", value: "" },
  };
};
