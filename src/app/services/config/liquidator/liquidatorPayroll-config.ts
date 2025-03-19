import { ConfigDetails } from '../config.service';
export const PAYROLL_CONFIG: ConfigDetails = {
  columns: [
    {
      field: 'id',
      header: 'ID',
      width: '10%',
      filter: true,
      edit: false,
      placeholder: 'Filter: 1...',
      showMenu: false,
      type: 'text',
      expandedRow: false,
    },
  ],
  columnsExpanded: [],
  inputsModal: [],
  apiUrls: {
    getAll: 'payroll/all',
    create: 'payroll/create',
    update: 'payroll/update',
    delete: 'payroll/delete',
  },
};
