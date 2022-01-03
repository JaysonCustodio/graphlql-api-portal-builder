import { nanoid } from "nanoid";

export class OverrideResolver {
  id: string;
  name: string;
  code: string;
  imports: string;
  constructor() {
    this.id = nanoid();
    this.name = "";
    this.code = "";
    this.imports = "";
  }
}
