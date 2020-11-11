import { ModuleKey } from "../constants/module-key.enum";

// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  extralink: boolean;
  submenu: RouteInfo[];
  roles: string[];
  isNavigable: boolean;
  isPaidFeature: boolean;
  moduleKey?: ModuleKey;
  noLocation?: boolean;
}
