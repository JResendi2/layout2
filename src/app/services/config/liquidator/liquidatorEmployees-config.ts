import { ConfigDetails } from '../config.service';
export const EMPLOYEES_CONFIG: ConfigDetails = {
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
    getAll: '/clients',
    create: '/clients',
    update: '',
    delete: '',
  },
};
