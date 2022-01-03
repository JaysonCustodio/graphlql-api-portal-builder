import { nanoid } from "nanoid";

export class CustomResolver {
  id: string;
  name: string;
  query: string;
  mutation: string;
  imports: string;
  constructor() {
    this.id = nanoid();
    this.name = "";
    this.query = "";
    this.mutation = "";
    this.imports = "";
  }
}
