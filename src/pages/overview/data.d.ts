export interface TableListItem {
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface PageParam {
  pvCount?: number;
  memberCount?: any;
  newValue?: number;
  oldValue?: number;
  activeValue?: object;
  loadCount?: number;
  ipCount?: number;
  behaviorCount?: number | string;
  outCount?: number | string;
  jsValue?: any;
  selfValue?: number | string;
  httpValue?: number | string;
  sourceValue?: number | string;
  healthyValue?: number | string;
  option: any;
  optionVisit?: object;
  activeOption?: object;
  jsErrorValue?: object;
  ttfb?: number | string;
  domReady?: number | string;
  loadPage?: number | string;
  loadArr?: object;
}

export interface PageItem {
  pvCount?: number | string;
  memberCount?: any;
  newValue?: number | string;
  ipCount?: number | string;
  behaviorCount?: any;
  outCount?: any;
  option?: object;
  optionVisit?: object;
  activeOption?: object;
  healthyValue?: any;
  jsValue?: any;
  selfValue?: any;
  sourceValue?: any;
  jsErrorValue?: any;
  loadArr?: any;
  ttfb?: number | string;
  domReady?: number | string;
  loadPage?: number | string;

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
