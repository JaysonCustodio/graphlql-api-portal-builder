import { nanoid } from "nanoid";

export class CustomService {
  id: string;
  name: string;
  methods: string;
  imports: string;
  constructor() {
    this.id = nanoid();
    this.name = "";
    this.methods = "";
    this.imports = "";
  }
}
