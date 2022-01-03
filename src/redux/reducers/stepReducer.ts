import stepExecutor from "../executors/stepExecutor";
import { EStepAction, IStepAction, IStepState } from "../types";

const stepState: IStepState = {
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

const stepReducer = (state = stepState, { type, payload }: IStepAction) => {
  const { STEP1, STEP2, STEP3, RESET } = EStepAction;
  const { updateStep1, updateStep2, updateStep3, reset } = stepExecutor;
  switch (type) {
    case STEP1:
      return updateStep1(state, payload);
    case STEP2:
      return updateStep2(state, payload);
    case STEP3:
      return updateStep3(state, payload);
    case RESET:
      return reset();
    default:
      return state;
  }
};
export default stepReducer;
