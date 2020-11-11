import { ModuleKey } from "src/app/shared/constants/module-key.enum";

export class ModuleModel {
    id: number;
    name: string;
    moduleKey: ModuleKey;
    isConfigured: boolean;
}