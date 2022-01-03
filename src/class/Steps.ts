import { Core } from "./Core";

export class Steps {
  step_1: Core;
  step_2: any;
  step_3: any;
  constructor() {
    this.step_1 = new Core();
    this.step_2 = {};
    this.step_3 = [];
  }
}
