import { nanoid } from "nanoid";
import { CustomResolver } from "./CustomResolver";
import { CustomService } from "./CustomService";
import { OverrideResolver } from "./OverrideResolver";

export class Core {
  id: string;
  project_name: string;
  file_name: string;
  schema: string;
  default_resolver_override: OverrideResolver[];
  custom_resolver_method: CustomResolver[];
  custom_service_method: CustomService[];
  system_company_id: string;
  done: boolean;
  constructor() {
    this.id = nanoid();
    this.project_name = "";
    this.file_name = "";
    this.schema = "";
    this.default_resolver_override = [];
    this.custom_resolver_method = [];
    this.custom_service_method = [];
    this.system_company_id = "";
    this.done = false;
  }
}
