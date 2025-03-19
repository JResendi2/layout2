import { AdminConfig } from '../config.service';
import { MENU_PROFILE_CONFIG } from './adminMenuProfile-config';
import { PAYROLL_CONFIG } from './adminPayroll-config';
import { SIDEBAR_CONFIG } from './adminSidebar-config';
import { STAFF_CONFIG } from './adminStaff-config';

export const ADMIN_CONFIG: AdminConfig = {
  staff: STAFF_CONFIG,
  payroll: PAYROLL_CONFIG,
  sidebar: SIDEBAR_CONFIG,
  menuProfile: MENU_PROFILE_CONFIG,
};
