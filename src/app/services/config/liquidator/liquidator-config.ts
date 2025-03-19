import { LiquidatorConfig } from '../config.service';
import { MENU_PROFILE_CONFIG } from './liquidatorMenuProfile-config';
import { PAYROLL_CONFIG } from './liquidatorPayroll-config';
import { SIDEBAR_CONFIG } from './liquidatorSidebar-config';

export const LIQUIDATOR_CONFIG: LiquidatorConfig = {
  payroll: PAYROLL_CONFIG,
  sidebar: SIDEBAR_CONFIG,
  menuProfile: MENU_PROFILE_CONFIG,
};
