export interface TableListItem {
  webMonitorId?: string;
  allCount?: number;
  oldCount?: number;
  activeCount?: number;
  activeValue?: [];
  loadCount?: number;
  jsError?: number;
  httpCount?: number;
  selfCount?: number;
  jsValue?: number | string;
  selfValue?: number;
  httpValue?: number | string;
  sourceValue?: number;
  healthyValue?: any;
  newCount?: number;
  option?: any;
}

export interface PageParam {
  id?: string;
  projectName?: string;
  webMonitorId?: string;
  activeCount?: number;
  allCount?: number;
  oldCount?: number;
  newCount?: number;
  option?: any;
  healthyValue?: any;
  jsValue?: number | string;
  httpValue?: string;
  selfValue?: string;
  sourceValue?: string;
}

export interface QueryParam {
  webMonitorId?: string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
}
