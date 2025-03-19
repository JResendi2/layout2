import { computed, Injectable, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RolesEnum, RolesType } from '../../models/AuthModel';
import { ADMIN_CONFIG } from './admin/admin-config';
import { LIQUIDATOR_CONFIG } from './liquidator/liquidator-config';
import { UserResponse } from '../../models/UserModel';

export interface ConfigDetails {
  columns: any[];
  columnsExpanded: any[];
  inputsModal: any[];
  apiUrls: {
    getAll: string;
    create: string;
    update: string;
    delete: string;
  };
}

export interface RoleBasedConfig {
  menuProfile: MenuItem[];
  sidebar: MenuItem[];
}

export interface AdminConfig extends RoleBasedConfig {
  staff: ConfigDetails;
  payroll: ConfigDetails;
}

export interface LiquidatorConfig extends RoleBasedConfig {
  payroll: ConfigDetails;
}

export type ConfigType = AdminConfig | LiquidatorConfig;

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  roleNames = signal<string[]>([]);
  activeRole = signal<RolesType | null>(null);
  config = signal<ConfigType>({} as ConfigType);
  configComputed = computed(() => {
    let configCurrent = this.config();

    let staffConfig = () => {
      if ('staff' in configCurrent) {
        return (configCurrent as AdminConfig).staff;
      }
      return {} as ConfigDetails;
    };

    let payrollConfig = () => {
      if ('payroll' in configCurrent) {
        return (configCurrent as AdminConfig | LiquidatorConfig).payroll;
      }
      return {} as ConfigDetails;
    };

    return {
      ...configCurrent,
      staff: staffConfig(),
      payroll: payrollConfig(),
    };
  });

  constructor() {}

  initialConfig(user: UserResponse | null = null) {
    console.log('1 Se inicializo el servicio de configuracion');
    if (user) {
      this.roleNames.set(user.roles.map((role) => role.toLocaleLowerCase()));

      if (this.roleNames().includes(RolesEnum.admin)) {
        this.setActiveRole(RolesEnum.admin);
      } else {
        this.setActiveRole(this.roleNames()[0] as RolesType);
      }

      console.log('2 Se obtuvieron los roles del usuario', user.roles);
    }
  }

  getConfigByRole(role: RolesType): ConfigType {
    switch (role) {
      case RolesEnum.admin:
        return ADMIN_CONFIG;
      case RolesEnum.liquidator:
        return LIQUIDATOR_CONFIG;
      default:
        return {} as ConfigType;
    }
  }

  setActiveRole(role: RolesType) {
    this.activeRole.set(role);
    this.config.set(this.getConfigByRole(role));
  }

  getConfig(): ConfigType {
    return this.config();
  }

  clearConfig() {
    this.roleNames.set([]);
    this.config.set({} as ConfigType);
    this.activeRole.set(null);
  }
}
