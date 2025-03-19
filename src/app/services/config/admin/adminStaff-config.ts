import { ConfigDetails } from '../config.service';
export const STAFF_CONFIG: ConfigDetails = {
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
    getAll: 'staff/all',
    create: 'staff/create',
    update: 'staff/update',
    delete: 'staff/delete',
  },
};
