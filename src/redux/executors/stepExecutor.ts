import { IStepPayload, IStepState } from "../types";

const stepExecutor = {
  updateStep1: (state: IStepState, payload: IStepPayload) => {
    const { step1, previous } = state;
    let prev_step: any = previous !== "" ? state[previous] : step1;
    const { field, value } = payload;
    if (prev_step.status !== "red" || prev_step.status !== "green") {
      prev_step = { ...prev_step, status: "transparent" };
    }
    const new_step1 = { ...step1, [field]: value };
    const new_state = { ...state, step1: new_step1, previous: "step1" };
    return previous === ""
      ? new_state
      : {
          ...state,
          step1: new_step1,
          [previous]: prev_step,
          previous: "step1",
        };
  },
  updateStep2: (state: IStepState, payload: IStepPayload) => {
    const { field, value } = payload;
    const { previous, step2 } = state;
    //@ts-ignore
    let prev_step = state[previous];
    if (prev_step.status !== "red" || prev_step.status !== "green") {
      prev_step = { ...prev_step, status: "transparent" };
    }
    const new_step2 = { ...step2, [field]: value };
    const new_state = {
      ...state,
      step2: new_step2,
      [previous]: prev_step,
      previous: "step2",
    };
    return new_state;
  },
  updateStep3: (state: IStepState, payload: IStepPayload) => {
    const { field, value } = payload;
    const { previous, step3 } = state;
    //@ts-ignore
    let prev_step = state[previous];
    if (prev_step.status !== "red" || prev_step.status !== "green") {
      prev_step = { ...prev_step, status: "transparent" };
    }
    const new_step3 = { ...step3, [field]: value };
    const new_state = {
      ...state,
      step3: new_step3,
      [previous]: prev_step,
      previous: "step3",
    };
    return new_state;
  },
  reset: () => {
    return {
      step1: {
        status: "transparent",
        error: "",
      },
      step2: {
        status: "transparent",
        error: "",
      },
      step3: {
        status: "transparent",
        error: "",
      },
      finish: false,
      previous: "",
    };
  },
};
export default stepExecutor;
